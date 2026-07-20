<script setup lang="ts">
defineProps<{
  index: string
  title: string
  summary: string
  metric: string
  tech: string[]
  focus: string
}>()
</script>

<template>
  <article
    class="group flex h-full flex-col rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-500/35 hover:bg-slate-900/80 hover:shadow-[0_20px_40px_-24px_rgba(99,102,241,0.35)]"
  >
    <div class="flex items-baseline justify-between gap-3">
      <span class="font-display text-sm text-slate-500 tabular-nums">{{ index }}</span>
      <span
        class="rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-teal-300/90"
      >
        {{ metric }}
      </span>
    </div>

    <h3 class="font-display mt-5 text-xl font-medium tracking-tight text-white">
      {{ title }}
    </h3>
    <p class="mt-3 flex-grow text-sm leading-relaxed text-slate-400">
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

    <p class="mt-4 text-xs leading-relaxed text-slate-500">
      {{ focus }}
    </p>
  </article>
</template>
