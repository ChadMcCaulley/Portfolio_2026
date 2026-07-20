<script setup lang="ts">
import ProjectPreview from './ProjectPreview.vue'

defineProps<{
  title: string
  description: string
  tech: string[]
  preview: 'streaming' | 'social' | 'ai'
  demoUrl?: string
  githubUrl?: string
}>()
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/40 transition duration-300 hover:-translate-y-0.5 hover:border-slate-600/80 hover:bg-slate-900/70 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.9)]"
  >
    <div class="p-4 pb-0">
      <ProjectPreview :variant="preview" />
    </div>

    <div class="flex flex-1 flex-col p-5 pt-4">
      <h3 class="font-display text-lg font-medium tracking-tight text-white">
        {{ title }}
      </h3>
      <p class="mt-2 flex-grow text-sm leading-relaxed text-slate-400">
        {{ description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="t in tech"
          :key="t"
          class="rounded-md bg-slate-950/80 px-2 py-1 text-xs text-slate-400 ring-1 ring-slate-800"
        >
          {{ t }}
        </span>
      </div>
      <div v-if="demoUrl || githubUrl" class="mt-5 flex gap-4 text-sm">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener"
          class="font-medium text-indigo-300 transition hover:text-indigo-200"
        >
          Live demo →
        </a>
        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener"
          class="text-slate-400 transition hover:text-slate-300"
        >
          GitHub →
        </a>
      </div>
    </div>
  </article>
</template>
