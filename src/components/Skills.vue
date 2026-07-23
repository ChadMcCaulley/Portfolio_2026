<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'

const { t } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

const skillGroups = computed(() => [
  {
    title: t('skills.groups.frontend'),
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS/SASS', 'Tailwind CSS'],
  },
  {
    title: t('skills.groups.backend'),
    skills: ['ASP.NET Core', 'C#', 'Node.js', 'Express', 'Django', 'Python', 'REST APIs', 'SQL'],
  },
  {
    title: t('skills.groups.cloud'),
    skills: ['Azure', 'Azure DevOps', 'Microsoft Foundry / Azure AI', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    title: t('skills.groups.ai'),
    skills: [
      'LLM Integration',
      'Streaming Chat UX',
      'OpenAI-compatible APIs',
      'WebLLM / On-device AI',
      'Content Generation Agents',
      'Microsoft Foundry / Azure AI',
      'Highcharts',
      'System Design',
    ],
  },
  {
    title: t('skills.groups.testing'),
    skills: ['Jest', 'Selenium', 'TDD'],
  },
])
</script>

<template>
  <section
    id="skills"
    ref="rootEl"
    class="reveal section-surface border-t px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
        {{ t('skills.title') }}
      </h2>
      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in skillGroups" :key="group.title">
          <h3 class="text-sm font-medium text-accent">{{ group.title }}</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="surface-soft rounded-lg border px-3 py-1.5 text-sm text-body"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
