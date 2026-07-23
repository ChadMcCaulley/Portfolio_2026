<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  SUPPORTED_LOCALES,
  setAppLocale,
  type LocaleCode,
} from '../i18n'
import {
  useAccessibility,
  type ThemeMode,
  type ColorVision,
} from '../composables/useAccessibility'

const { t, locale } = useI18n()
const {
  theme,
  colorVision,
  reducedMotion,
  highContrast,
  setTheme,
  setColorVision,
  setReducedMotion,
  setHighContrast,
  reset: resetA11y,
} = useAccessibility()

const open = ref(false)
const panelRef = ref<HTMLElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)

const currentLocale = computed({
  get: () => locale.value as LocaleCode,
  set: (code: LocaleCode) => setAppLocale(code),
})

const themeOptions: { value: ThemeMode; labelKey: string }[] = [
  { value: 'dark', labelKey: 'a11y.themeDark' },
  { value: 'light', labelKey: 'a11y.themeLight' },
  { value: 'system', labelKey: 'a11y.themeSystem' },
]

const colorVisionOptions: { value: ColorVision; labelKey: string }[] = [
  { value: 'none', labelKey: 'a11y.colorVisionNone' },
  { value: 'protanopia', labelKey: 'a11y.colorVisionProtanopia' },
  { value: 'deuteranopia', labelKey: 'a11y.colorVisionDeuteranopia' },
  { value: 'tritanopia', labelKey: 'a11y.colorVisionTritanopia' },
  { value: 'achromatopsia', labelKey: 'a11y.colorVisionAchromatopsia' },
]

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) {
    close()
    buttonRef.value?.focus()
  }
}

function onClickOutside(e: MouseEvent) {
  if (!open.value) return
  const target = e.target as Node
  if (
    panelRef.value &&
    !panelRef.value.contains(target) &&
    buttonRef.value &&
    !buttonRef.value.contains(target)
  ) {
    close()
  }
}

function handleReset() {
  resetA11y()
  setAppLocale('en')
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('mousedown', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('mousedown', onClickOutside)
})
</script>

<template>
  <div class="a11y-fab fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
    <!-- Panel: height follows content; only scrolls on short viewports -->
    <Transition name="a11y-panel">
      <div
        v-if="open"
        ref="panelRef"
        role="dialog"
        aria-modal="true"
        :aria-label="t('a11y.title')"
        class="a11y-panel absolute right-0 bottom-[calc(100%+0.75rem)] flex max-h-[calc(100dvh-5.5rem)] w-[min(100vw-2rem,20.5rem)] flex-col overflow-hidden rounded-2xl border backdrop-blur-xl"
      >
        <div class="a11y-panel-header flex shrink-0 items-start justify-between gap-3 border-b px-4 py-3.5">
          <div>
            <h2 class="text-sm font-semibold tracking-tight text-heading">
              {{ t('a11y.title') }}
            </h2>
            <p class="mt-0.5 text-xs text-subtle">
              {{ t('a11y.subtitle') }}
            </p>
          </div>
          <button
            type="button"
            class="a11y-icon-btn rounded-lg p-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            :aria-label="t('a11y.closeMenu')"
            @click="close"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="min-h-0 space-y-5 overflow-y-auto overscroll-contain px-4 py-4 [scrollbar-gutter:auto]">
          <!-- Language -->
          <fieldset>
            <legend class="a11y-panel-section-label mb-2 text-xs font-semibold tracking-wide uppercase">
              {{ t('a11y.language') }}
            </legend>
            <div class="grid grid-cols-2 gap-1.5" role="listbox" :aria-label="t('a11y.language')">
              <button
                v-for="loc in SUPPORTED_LOCALES"
                :key="loc.code"
                type="button"
                role="option"
                :aria-selected="currentLocale === loc.code"
                class="rounded-lg px-2.5 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                :class="currentLocale === loc.code ? 'a11y-option-active' : 'a11y-option'"
                @click="currentLocale = loc.code"
              >
                <span class="block font-medium">{{ loc.nativeLabel }}</span>
                <span class="a11y-option-sub block text-[11px]">{{ loc.label }}</span>
              </button>
            </div>
          </fieldset>

          <!-- Theme -->
          <fieldset>
            <legend class="a11y-panel-section-label mb-2 text-xs font-semibold tracking-wide uppercase">
              {{ t('a11y.theme') }}
            </legend>
            <div class="a11y-segmented flex rounded-lg p-0.5">
              <button
                v-for="opt in themeOptions"
                :key="opt.value"
                type="button"
                class="flex-1 rounded-md px-2 py-1.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                :class="
                  theme === opt.value
                    ? 'a11y-segmented-btn-active'
                    : 'a11y-segmented-btn'
                "
                :aria-pressed="theme === opt.value"
                @click="setTheme(opt.value)"
              >
                {{ t(opt.labelKey) }}
              </button>
            </div>
          </fieldset>

          <!-- Color vision -->
          <div>
            <label
              for="a11y-color-vision"
              class="a11y-panel-section-label mb-2 block text-xs font-semibold tracking-wide uppercase"
            >
              {{ t('a11y.colorVision') }}
            </label>
            <select
              id="a11y-color-vision"
              class="a11y-select w-full rounded-lg px-3 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              :value="colorVision"
              @change="setColorVision(($event.target as HTMLSelectElement).value as ColorVision)"
            >
              <option
                v-for="opt in colorVisionOptions"
                :key="opt.value"
                :value="opt.value"
              >
                {{ t(opt.labelKey) }}
              </option>
            </select>
          </div>

          <!-- Toggles -->
          <div class="space-y-3">
            <label class="flex cursor-pointer items-center justify-between gap-3">
              <span class="text-sm text-body">{{ t('a11y.reducedMotion') }}</span>
              <button
                type="button"
                role="switch"
                :aria-checked="reducedMotion"
                class="relative h-6 w-11 shrink-0 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                :class="reducedMotion ? 'a11y-switch-track-on' : 'a11y-switch-track'"
                @click="setReducedMotion(!reducedMotion)"
              >
                <span
                  class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition"
                  :class="reducedMotion ? 'translate-x-5' : 'translate-x-0'"
                />
              </button>
            </label>

            <label class="flex cursor-pointer items-center justify-between gap-3">
              <span class="text-sm text-body">{{ t('a11y.highContrast') }}</span>
              <button
                type="button"
                role="switch"
                :aria-checked="highContrast"
                class="relative h-6 w-11 shrink-0 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                :class="highContrast ? 'a11y-switch-track-on' : 'a11y-switch-track'"
                @click="setHighContrast(!highContrast)"
              >
                <span
                  class="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition"
                  :class="highContrast ? 'translate-x-5' : 'translate-x-0'"
                />
              </button>
            </label>
          </div>

          <button
            type="button"
            class="a11y-reset w-full rounded-lg px-3 py-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            @click="handleReset"
          >
            {{ t('a11y.reset') }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- FAB -->
    <button
      ref="buttonRef"
      type="button"
      class="a11y-fab-btn group flex h-14 w-14 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-600 text-white shadow-[0_8px_32px_-4px_rgba(79,70,229,0.55)] transition hover:bg-indigo-500 hover:shadow-[0_12px_36px_-4px_rgba(79,70,229,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
      :aria-label="open ? t('a11y.closeMenu') : t('a11y.openMenu')"
      :aria-expanded="open"
      aria-haspopup="dialog"
      @click="toggle"
    >
      <svg
        v-if="!open"
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.75"
          d="M12 4.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM6.75 19.5v-1.125A3.375 3.375 0 0110.125 15h3.75a3.375 3.375 0 013.375 3.375V19.5M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        />
      </svg>
      <svg
        v-else
        class="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.a11y-panel-enter-active,
.a11y-panel-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.a11y-panel-enter-from,
.a11y-panel-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.96);
}

:global(html[data-reduced-motion='true']) .a11y-panel-enter-active,
:global(html[data-reduced-motion='true']) .a11y-panel-leave-active {
  transition: none;
}
</style>
