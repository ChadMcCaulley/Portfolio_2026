<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProjectPreview from './ProjectPreview.vue'

defineProps<{
  title: string
  description: string
  tech: string[]
  preview: 'streaming' | 'social' | 'ai'
  demoUrl?: string
  githubUrl?: string
}>()

const { t } = useI18n()
</script>

<template>
  <article class="project-card flex h-full flex-col overflow-hidden rounded-2xl">
    <div class="p-4 pb-0">
      <ProjectPreview :variant="preview" />
    </div>

    <div class="flex flex-1 flex-col p-5 pt-4">
      <h3 class="font-display text-lg font-medium tracking-tight text-heading">
        {{ title }}
      </h3>
      <p class="mt-2 flex-grow text-sm leading-relaxed text-muted">
        {{ description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="techItem in tech"
          :key="techItem"
          class="surface-chip rounded-md px-2 py-1 text-xs"
        >
          {{ techItem }}
        </span>
      </div>
      <div v-if="demoUrl || githubUrl" class="mt-5 flex gap-4 text-sm">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener"
          class="font-medium text-accent transition hover:opacity-80"
        >
          {{ t('projects.liveDemo') }}
        </a>
        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener"
          class="text-muted transition hover:text-heading"
        >
          {{ t('projects.github') }}
        </a>
      </div>
    </div>
  </article>
</template>
