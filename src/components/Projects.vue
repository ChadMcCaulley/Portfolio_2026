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
      'Full-stack Netflix-style application elevated with TypeScript, improved architecture, authentication, and performance focus. Demonstrates full ownership from UI to API.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Real-time Social Application',
    description:
      'Twitter-style application elevated with cleaner architecture, real-time features, and modern frontend patterns.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'AI Content Assistant (Demo)',
    description:
      'Public demonstration of AI-powered content generation and chat, mirroring professional experience with Microsoft Foundry / LLM integrations. Built with free tiers.',
    tech: ['Vue.js', 'TypeScript', 'LLM APIs'],
  },
]
</script>

<template>
  <section
    id="projects"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 bg-slate-900/25 px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <p class="text-xs font-medium tracking-[0.2em] text-teal-400/90 uppercase">
        Side work
      </p>
      <h2 class="font-display mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Projects
      </h2>
      <p class="mt-4 max-w-2xl text-slate-400">
        Personal work that shows full-stack range beyond day-to-day Vue / .NET delivery.
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
