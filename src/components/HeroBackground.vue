<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import HeroScene from './HeroScene.vue'
</script>

<template>
  <div class="absolute inset-0 z-0 pointer-events-none">
    <TresCanvas
      clear-color="#020617"
      :alpha="false"
      :dpr="[1, 1.5]"
      class="w-full h-full"
    >
      <!-- Suspense ensures the scene components don't mount before the WebGL context is ready -->
      <Suspense>
        <HeroScene />
      </Suspense>
    </TresCanvas>
  </div>
</template>