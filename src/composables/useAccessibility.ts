import { ref, watch, computed, type Ref } from 'vue'

export type ThemeMode = 'dark' | 'light' | 'system'
export type ColorVision =
  | 'none'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'achromatopsia'

export interface AccessibilityPrefs {
  theme: ThemeMode
  colorVision: ColorVision
  reducedMotion: boolean
  highContrast: boolean
}

const STORAGE_KEY = 'portfolio-a11y'

const defaults: AccessibilityPrefs = {
  theme: 'dark',
  colorVision: 'none',
  reducedMotion: false,
  highContrast: false,
}

function loadPrefs(): AccessibilityPrefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaults }
    return { ...defaults, ...JSON.parse(raw) }
  } catch {
    return { ...defaults }
  }
}

function savePrefs(prefs: AccessibilityPrefs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    /* ignore quota / private mode */
  }
}

function resolveTheme(mode: ThemeMode): 'dark' | 'light' {
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  return mode
}

function applyToDocument(prefs: AccessibilityPrefs) {
  const root = document.documentElement
  const resolved = resolveTheme(prefs.theme)

  root.dataset.theme = resolved
  root.dataset.colorVision = prefs.colorVision
  root.dataset.highContrast = prefs.highContrast ? 'true' : 'false'
  root.dataset.reducedMotion = prefs.reducedMotion ? 'true' : 'false'

  root.style.colorScheme = resolved

  // Keep body/html paint color in sync for overscroll & first paint
  root.style.backgroundColor = resolved === 'light' ? '#f4f6fb' : '#020617'
  if (document.body) {
    document.body.style.backgroundColor = resolved === 'light' ? '#f4f6fb' : '#020617'
  }
}

/** Singleton prefs — shared across all useAccessibility() calls */
const theme = ref<ThemeMode>(defaults.theme)
const colorVision = ref<ColorVision>(defaults.colorVision)
const reducedMotion = ref(false)
const highContrast = ref(false)
let initialized = false

function init() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const loaded = loadPrefs()
  theme.value = loaded.theme
  colorVision.value = loaded.colorVision
  reducedMotion.value = loaded.reducedMotion
  highContrast.value = loaded.highContrast
  applyToDocument(loaded)

  // Follow OS theme when mode is "system"
  const mq = window.matchMedia('(prefers-color-scheme: light)')
  const onSchemeChange = () => {
    if (theme.value === 'system') {
      applyToDocument(snapshot())
    }
  }
  mq.addEventListener('change', onSchemeChange)

  watch([theme, colorVision, reducedMotion, highContrast], () => {
    const prefs = snapshot()
    savePrefs(prefs)
    applyToDocument(prefs)
  })
}

function snapshot(): AccessibilityPrefs {
  return {
    theme: theme.value,
    colorVision: colorVision.value,
    reducedMotion: reducedMotion.value,
    highContrast: highContrast.value,
  }
}

export function useAccessibility() {
  init()

  const resolvedTheme = computed(() => resolveTheme(theme.value))

  function setTheme(value: ThemeMode) {
    theme.value = value
  }

  function setColorVision(value: ColorVision) {
    colorVision.value = value
  }

  function setReducedMotion(value: boolean) {
    reducedMotion.value = value
  }

  function setHighContrast(value: boolean) {
    highContrast.value = value
  }

  function reset() {
    theme.value = defaults.theme
    colorVision.value = defaults.colorVision
    reducedMotion.value = defaults.reducedMotion
    highContrast.value = defaults.highContrast
  }

  return {
    theme: theme as Ref<ThemeMode>,
    colorVision: colorVision as Ref<ColorVision>,
    reducedMotion: reducedMotion as Ref<boolean>,
    highContrast: highContrast as Ref<boolean>,
    resolvedTheme,
    setTheme,
    setColorVision,
    setReducedMotion,
    setHighContrast,
    reset,
  }
}
