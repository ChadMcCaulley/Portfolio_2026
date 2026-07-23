<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import ProjectCard from './ProjectCard.vue'

const { t } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

const projects = computed(() => [
  {
    title: t('projects.items.ai.title'),
    description: t('projects.items.ai.description'),
    tech: [
      'Vue 3',
      'TypeScript',
      'WebLLM',
      'OpenAI-compatible APIs',
      'Tailwind CSS',
      'Streaming SSE',
    ],
    preview: 'ai' as const,
    githubUrl: 'https://github.com/ChadMcCaulley/AIContentAssistant',
  },
  {
    title: t('projects.items.streaming.title'),
    description: t('projects.items.streaming.description'),
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    preview: 'streaming' as const,
  },
  {
    title: t('projects.items.social.title'),
    description: t('projects.items.social.description'),
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    preview: 'social' as const,
  },
])
</script>

<template>
  <section
    id="projects"
    ref="rootEl"
    class="reveal section-surface-alt border-t px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
        {{ t('projects.title') }}
      </h2>
      <p class="mt-4 max-w-2xl text-muted">
        {{ t('projects.intro') }}
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
