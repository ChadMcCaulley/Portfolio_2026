<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tech: string[]
  demoUrl?: string
  githubUrl?: string
}>()
</script>

<template>
  <article class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/40 transition-colors flex flex-col h-full">
    <h3 class="text-lg font-semibold text-white">{{ title }}</h3>
    <p class="mt-2 text-slate-400 text-sm leading-relaxed flex-grow">{{ description }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="t in tech"
        :key="t"
        class="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded"
      >
        {{ t }}
      </span>
    </div>
    <div class="mt-5 flex gap-4 text-sm">
      <a
        v-if="demoUrl"
        :href="demoUrl"
        target="_blank"
        class="text-indigo-400 hover:text-indigo-300"
      >
        Live Demo →
      </a>
      <a
        v-if="githubUrl"
        :href="githubUrl"
        target="_blank"
        class="text-slate-400 hover:text-slate-300"
      >
        GitHub →
      </a>
    </div>
  </article>
</template>