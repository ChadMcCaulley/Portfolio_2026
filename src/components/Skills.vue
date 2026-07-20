<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS/SASS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'Node.js', 'Express', 'Django', 'Python', 'REST APIs', 'SQL'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Azure DevOps', 'Microsoft Foundry / Azure AI', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    title: 'AI & Tools',
    skills: ['LLM Integration', 'Generative AI Features', 'Cline', 'Highcharts', 'System Design'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Selenium', 'TDD'],
  },
]
</script>

<template>
  <section
    id="skills"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 bg-[#020617] px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Skills
      </h2>
      <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in skillGroups" :key="group.title">
          <h3 class="text-sm font-medium text-indigo-300">{{ group.title }}</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
