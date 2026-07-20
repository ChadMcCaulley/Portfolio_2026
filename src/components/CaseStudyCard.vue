<script setup lang="ts">
import { computed } from 'vue'

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

const panelId = computed(() => `case-detail-${props.index}`)
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-slate-900/60 transition duration-300"
    :class="
      open
        ? 'border-indigo-400/50 shadow-[0_0_0_1px_rgba(129,140,248,0.15),0_24px_48px_-20px_rgba(99,102,241,0.45)]'
        : 'border-slate-800/90 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-24px_rgba(99,102,241,0.35)]'
    "
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
        <span class="font-display text-sm text-slate-500 tabular-nums">{{ index }}</span>
        <span
          class="rounded-full border border-teal-500/25 bg-teal-500/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-teal-300/90"
        >
          {{ metric }}
        </span>
      </div>

      <h3 class="font-display mt-5 text-xl font-medium tracking-tight text-white sm:text-2xl">
        {{ title }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-slate-400">
        {{ summary }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="t in tech"
          :key="t"
          class="rounded-md bg-slate-950/80 px-2.5 py-1 text-xs text-slate-400 ring-1 ring-slate-800"
        >
          {{ t }}
        </span>
      </div>

      <div class="mt-6 flex items-center justify-between gap-3 border-t border-slate-800/80 pt-4">
        <span class="text-xs text-slate-500">{{ focus }}</span>
        <span
          class="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300 transition group-hover:text-indigo-200"
        >
          {{ open ? 'Close' : 'Read case study' }}
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
        <div class="space-y-5 border-t border-slate-800/80 px-6 pb-6 pl-7 pt-5">
          <div>
            <h4 class="text-xs font-semibold tracking-wide text-teal-400/90 uppercase">
              Problem
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-300">
              {{ problem }}
            </p>
          </div>
          <div>
            <h4 class="text-xs font-semibold tracking-wide text-teal-400/90 uppercase">
              Approach
            </h4>
            <ul class="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
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
          <div class="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
            <h4 class="text-xs font-semibold tracking-wide text-indigo-300 uppercase">
              Outcome
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-slate-200">
              {{ outcome }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
