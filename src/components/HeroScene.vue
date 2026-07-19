<script setup lang="ts">
/**
 * CR pests: bothersome change-request "bugs" that hover near the hero.
 * Move the cursor through them to swat them away — they scatter, then crawl back.
 */
import { useLoop, useTres } from '@tresjs/core'
import { onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const COUNT = 96
const BOUNDS = { x: 6.8, y: 3.8, z: 1.8 }
const SWAT_RADIUS = 1.65
const SWAT_RADIUS_SQ = SWAT_RADIUS * SWAT_RADIUS
const MAX_SPEED = 14
const BUZZ_SPEED = 1.1
const RETURN_SPEED = 2.2
const MOUSE_SMOOTH = 0.22
const VELOCITY_SMOOTH = 0.18

const cameraPos = new THREE.Vector3(0, 0, 9)
const additiveBlending = THREE.AdditiveBlending

const { camera, renderer } = useTres()

// Per-pest state (plain arrays — never Vue-proxied)
const positions = new Float32Array(COUNT * 3)
const velocities = new Float32Array(COUNT * 3)
const colors = new Float32Array(COUNT * 3)
/** Preferred hang-out spot (near copy — like CRs piling on your desk) */
const anchors = new Float32Array(COUNT * 3)
/** 0 = buzzing, >0 = stunned/fleeing seconds remaining */
const stun = new Float32Array(COUNT)
const phase = new Float32Array(COUNT)
const spin = new Float32Array(COUNT)

const colorIdle = new THREE.Color('#f59e0b') // amber — open CR
const colorHot = new THREE.Color('#f43f5e') // rose — urgent / just swatted
const colorDim = new THREE.Color('#78716c') // stone — retreating
const tmpColor = new THREE.Color()

function seedPests() {
  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3
    // Cluster loosely around the center (over the headline)
    const ring = 0.6 + Math.random() * 3.2
    const a = Math.random() * Math.PI * 2
    anchors[i3] = Math.cos(a) * ring * (0.7 + Math.random() * 0.6)
    anchors[i3 + 1] = Math.sin(a) * ring * 0.55 + (Math.random() - 0.5) * 0.8
    anchors[i3 + 2] = (Math.random() - 0.5) * BOUNDS.z

    positions[i3] = anchors[i3] + (Math.random() - 0.5) * 0.4
    positions[i3 + 1] = anchors[i3 + 1] + (Math.random() - 0.5) * 0.4
    positions[i3 + 2] = anchors[i3 + 2]

    velocities[i3] = (Math.random() - 0.5) * BUZZ_SPEED
    velocities[i3 + 1] = (Math.random() - 0.5) * BUZZ_SPEED
    velocities[i3 + 2] = (Math.random() - 0.5) * BUZZ_SPEED * 0.4

    stun[i] = 0
    phase[i] = Math.random() * Math.PI * 2
    spin[i] = 2.5 + Math.random() * 4.5
    colorIdle.toArray(colors, i3)
  }
}

seedPests()

const geometry = new THREE.BufferGeometry()
const positionAttr = new THREE.BufferAttribute(positions, 3)
positionAttr.setUsage(THREE.DynamicDrawUsage)
const colorAttr = new THREE.BufferAttribute(colors, 3)
colorAttr.setUsage(THREE.DynamicDrawUsage)
geometry.setAttribute('position', positionAttr)
geometry.setAttribute('color', colorAttr)

// --- Cursor as fly-swatter ---
const mouseNdc = new THREE.Vector2(99, 99)
const mouseTarget = new THREE.Vector3(0, 0, 40)
const mouseWorld = new THREE.Vector3(0, 0, 40)
const prevMouse = new THREE.Vector3(0, 0, 40)
const mouseVel = new THREE.Vector3()
let mouseInside = false
let hasMouseSample = false

const raycaster = new THREE.Raycaster()
const hitPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
const planeHit = new THREE.Vector3()

function projectMouse() {
  const cam = camera.value
  if (!cam) return
  raycaster.setFromCamera(mouseNdc, cam)
  if (raycaster.ray.intersectPlane(hitPlane, planeHit)) {
    mouseTarget.copy(planeHit)
    mouseTarget.z = 0
  }
}

function onPointerMove(e: PointerEvent) {
  const canvas = renderer.domElement as HTMLCanvasElement | undefined
  if (!canvas) return

  const rect = canvas.getBoundingClientRect()
  const { clientX: x, clientY: y } = e
  mouseInside =
    x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom

  if (!mouseInside) return

  mouseNdc.x = ((x - rect.left) / rect.width) * 2 - 1
  mouseNdc.y = -((y - rect.top) / rect.height) * 2 + 1
  projectMouse()
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  geometry.dispose()
})

const toAnchor = new THREE.Vector3()
const away = new THREE.Vector3()
const side = new THREE.Vector3()

function clampSpeed(vx: number, vy: number, vz: number, max: number) {
  const len = Math.hypot(vx, vy, vz)
  if (len > max && len > 1e-6) {
    const s = max / len
    return [vx * s, vy * s, vz * s] as const
  }
  return [vx, vy, vz] as const
}

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta, elapsed }) => {
  const dt = Math.min(delta, 0.05)

  if (mouseInside) {
    mouseWorld.lerp(mouseTarget, MOUSE_SMOOTH)
    // First sample: no phantom swat from teleporting the cursor into the hero
    if (!hasMouseSample) {
      prevMouse.copy(mouseWorld)
      mouseVel.set(0, 0, 0)
      hasMouseSample = true
    } else {
      side.subVectors(mouseWorld, prevMouse).multiplyScalar(1 / Math.max(dt, 1 / 120))
      mouseVel.lerp(side, VELOCITY_SMOOTH)
      prevMouse.copy(mouseWorld)
    }
  } else {
    mouseWorld.z = 40
    mouseVel.set(0, 0, 0)
    hasMouseSample = false
  }

  const swing = Math.min(mouseVel.length(), 28)
  const swingBoost = 1 + swing * 0.12

  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3
    let px = positions[i3]
    let py = positions[i3 + 1]
    let pz = positions[i3 + 2]
    let vx = velocities[i3]
    let vy = velocities[i3 + 1]
    let vz = velocities[i3 + 2]

    // --- Swat: burst away from the cursor when it sweeps nearby ---
    if (mouseInside) {
      const dx = px - mouseWorld.x
      const dy = py - mouseWorld.y
      const dz = pz - mouseWorld.z
      const dSq = dx * dx + dy * dy + dz * dz

      if (dSq < SWAT_RADIUS_SQ && dSq > 1e-8) {
        const d = Math.sqrt(dSq)
        const proximity = 1 - d / SWAT_RADIUS
        // Stronger when close AND when the cursor is moving (a real swat)
        const impulse = (10 + swing * 0.85) * proximity * proximity * swingBoost

        away.set(dx / d, dy / d, dz / d * 0.25)
        // Tangential kick so they spin off rather than pure radial pop
        side.set(-away.y, away.x, 0).multiplyScalar((Math.random() - 0.5) * 0.6)

        vx += (away.x + side.x) * impulse
        vy += (away.y + side.y) * impulse
        vz += (away.z + (Math.random() - 0.5) * 0.4) * impulse * 0.5

        // Brief stun so they don't immediately glue back to the cursor
        stun[i] = Math.max(stun[i], 0.35 + proximity * 0.55 + Math.min(swing, 12) * 0.02)
      }
    }

    if (stun[i] > 0) {
      stun[i] = Math.max(0, stun[i] - dt)
      // Friction while fleeing — they tumble outward then slow
      vx *= 1 - 2.2 * dt
      vy *= 1 - 2.2 * dt
      vz *= 1 - 2.2 * dt
      ;[vx, vy, vz] = clampSpeed(vx, vy, vz, MAX_SPEED)
    } else {
      // --- Buzz near anchor: erratic pest motion, drawn back to the mess ---
      const ax = anchors[i3]
      const ay = anchors[i3 + 1]
      const az = anchors[i3 + 2]

      // Slow orbit + jitter around their desk pile
      phase[i] += spin[i] * dt
      const buzzX = Math.cos(phase[i]) * 0.55 + Math.sin(elapsed * 3.1 + i) * 0.25
      const buzzY = Math.sin(phase[i] * 1.3) * 0.4 + Math.cos(elapsed * 2.4 + i * 0.7) * 0.2
      const targetX = ax + buzzX
      const targetY = ay + buzzY
      const targetZ = az + Math.sin(phase[i] * 0.7) * 0.3

      toAnchor.set(targetX - px, targetY - py, targetZ - pz)
      const dist = toAnchor.length()
      if (dist > 1e-4) {
        const pull = Math.min(RETURN_SPEED * (0.4 + dist * 0.35), RETURN_SPEED * 1.4)
        toAnchor.multiplyScalar(pull / dist)
        vx += (toAnchor.x - vx) * 3.5 * dt
        vy += (toAnchor.y - vy) * 3.5 * dt
        vz += (toAnchor.z - vz) * 3.5 * dt
      }

      // Nervous micro-jitter
      vx += (Math.random() - 0.5) * 6 * dt
      vy += (Math.random() - 0.5) * 6 * dt
      vz += (Math.random() - 0.5) * 3 * dt
      ;[vx, vy, vz] = clampSpeed(vx, vy, vz, BUZZ_SPEED * 1.8)
    }

    // Soft walls — bounce back into the hero volume
    if (px > BOUNDS.x && vx > 0) vx *= -0.55
    if (px < -BOUNDS.x && vx < 0) vx *= -0.55
    if (py > BOUNDS.y && vy > 0) vy *= -0.55
    if (py < -BOUNDS.y && vy < 0) vy *= -0.55
    if (pz > BOUNDS.z && vz > 0) vz *= -0.55
    if (pz < -BOUNDS.z && vz < 0) vz *= -0.55

    px += vx * dt
    py += vy * dt
    pz += vz * dt

    positions[i3] = px
    positions[i3 + 1] = py
    positions[i3 + 2] = pz
    velocities[i3] = vx
    velocities[i3 + 1] = vy
    velocities[i3 + 2] = vz

    // Color: amber at rest → hot rose when swatted → dim while retreating
    const speed = Math.hypot(vx, vy, vz)
    const fleeT = THREE.MathUtils.clamp(stun[i] / 0.7, 0, 1)
    const speedT = THREE.MathUtils.clamp(speed / MAX_SPEED, 0, 1)
    tmpColor.copy(colorIdle).lerp(colorDim, speedT * 0.35).lerp(colorHot, fleeT)
    // Subtle pulse while buzzing (unread notification energy)
    if (fleeT < 0.05) {
      const pulse = 0.5 + 0.5 * Math.sin(elapsed * 5 + i)
      tmpColor.lerp(colorHot, pulse * 0.12)
    }
    tmpColor.toArray(colors, i3)
  }

  positionAttr.needsUpdate = true
  colorAttr.needsUpdate = true
})
</script>

<template>
  <TresPerspectiveCamera :position="cameraPos" :fov="42" />
  <TresAmbientLight :intensity="0.45" />

  <TresPoints :geometry="geometry">
    <TresPointsMaterial
      :vertex-colors="true"
      :size="0.09"
      :transparent="true"
      :opacity="0.92"
      :size-attenuation="true"
      :depth-write="false"
      :blending="additiveBlending"
    />
  </TresPoints>
</template>
