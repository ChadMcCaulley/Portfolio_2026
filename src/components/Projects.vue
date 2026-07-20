<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

const projects = [
  {
    title: 'Modernized Streaming Platform',
    description:
      'Full-stack Netflix-style application elevated with TypeScript, improved architecture, authentication, and performance focus — from browse UI to API ownership.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    preview: 'streaming' as const,
  },
  {
    title: 'Real-time Social Application',
    description:
      'Twitter-style application with cleaner architecture, real-time feed patterns, and a modern frontend interaction model.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    preview: 'social' as const,
  },
  {
    title: 'AI Content Assistant',
    description:
      'Public-facing demo of AI chat and content generation, mirroring professional LLM integration work with free-tier providers.',
    tech: ['Vue.js', 'TypeScript', 'LLM APIs'],
    preview: 'ai' as const,
  },
]
</script>

<template>
  <section
    id="projects"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 bg-slate-900/20 px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Projects
      </h2>
      <p class="mt-4 max-w-2xl text-slate-400">
        Personal work that shows full-stack range — each card includes a live UI sketch of the product.
      </p>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(p, i) in projects"
          :key="p.title"
          v-bind="p"
          class="reveal"
          :class="[
            visible ? 'is-visible' : '',
            i === 1 ? 'reveal-delay-1' : '',
            i === 2 ? 'reveal-delay-2' : '',
          ]"
        />
      </div>
    </div>
  </section>
</template>
