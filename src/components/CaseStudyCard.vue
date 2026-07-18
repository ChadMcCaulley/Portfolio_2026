<script setup lang="ts">
defineProps<{
  title: string
  summary: string
  tech: string[]
  focus: string
}>()
</script>

<template>
  <article class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors flex flex-col h-full">
    <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
    <p class="mt-3 text-slate-400 text-sm leading-relaxed flex-grow">{{ summary }}</p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="t in tech"
        :key="t"
        class="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md"
      >
        {{ t }}
      </span>
    </div>

    <p class="mt-4 text-xs text-slate-500">{{ focus }}</p>

    <p class="mt-6 text-sm text-indigo-400 font-medium">
      Full case study – coming soon →
    </p>
  </article>
</template>