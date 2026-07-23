<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  index: string
  title: string
  summary: string
  metric: string
  tech: string[]
  focus: string
  problem: string
  approach: string[]
  outcome: string
  open: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()

const { t } = useI18n()
const panelId = computed(() => `case-detail-${props.index}`)
</script>

<template>
  <article
    class="group surface-card relative flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300"
    :class="open ? 'card-open' : 'card-idle'"
  >
    <!-- Accent rail -->
    <div
      class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-400 via-teal-400/80 to-transparent transition-opacity"
      :class="open ? 'opacity-100' : 'opacity-40 group-hover:opacity-80'"
      aria-hidden="true"
    />

    <button
      type="button"
      class="flex w-full flex-1 flex-col p-6 pl-7 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="emit('toggle')"
    >
      <div class="flex items-start justify-between gap-3">
        <span class="font-display text-sm text-subtle tabular-nums">{{ index }}</span>
        <span
          class="metric-pill rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide"
        >
          {{ metric }}
        </span>
      </div>

      <h3 class="font-display mt-5 text-xl font-medium tracking-tight text-heading sm:text-2xl">
        {{ title }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-muted">
        {{ summary }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="techItem in tech"
          :key="techItem"
          class="surface-chip rounded-md px-2.5 py-1 text-xs"
        >
          {{ techItem }}
        </span>
      </div>

      <div class="mt-6 flex items-center justify-between gap-3 border-t border-subtle pt-4">
        <span class="text-xs text-subtle">{{ focus }}</span>
        <span
          class="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition"
        >
          {{ open ? t('caseStudies.close') : t('caseStudies.read') }}
          <svg
            class="h-4 w-4 transition-transform duration-300"
            :class="open ? 'rotate-180' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </button>

    <div
      :id="panelId"
      class="case-detail"
      :class="{ 'is-open': open }"
      :aria-hidden="!open"
    >
      <div>
        <div class="space-y-5 border-t border-subtle px-6 pb-6 pl-7 pt-5">
          <div>
            <h4 class="text-xs font-semibold tracking-wide text-mint uppercase">
              {{ t('caseStudies.problem') }}
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-body">
              {{ problem }}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-semibold tracking-wide text-mint uppercase">
              {{ t('caseStudies.approach') }}
            </h4>
            <ul class="mt-2 space-y-2 text-sm leading-relaxed text-body">
              <li
                v-for="step in approach"
                :key="step"
                class="flex gap-2"
              >
                <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                <span>{{ step }}</span>
              </li>
            </ul>
          </div>
          <div class="outcome-box rounded-xl p-4">
            <h4 class="text-xs font-semibold tracking-wide text-accent uppercase">
              {{ t('caseStudies.outcome') }}
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-body">
              {{ outcome }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
