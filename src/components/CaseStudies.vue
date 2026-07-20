<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'
import CaseStudyCard from './CaseStudyCard.vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

const caseStudies = [
  {
    index: '01',
    title: 'AI-Powered Content Tools',
    metric: 'In production',
    summary:
      'Designed and integrated LLM-powered chat and dynamic image generation into a multi-tenant B2B communications platform using Microsoft Foundry.',
    tech: ['Vue.js', 'ASP.NET Core', 'Microsoft Foundry', 'TypeScript', 'Azure'],
    focus: 'Technology selection · Multi-tenant isolation · Streaming UX · Cost & reliability',
  },
  {
    index: '02',
    title: 'Enterprise Analytical Dashboards',
    metric: 'Client-facing',
    summary:
      'Built high-performance interactive dashboards that deliver critical business insights to enterprise clients.',
    tech: ['Vue.js', 'Highcharts', 'ASP.NET Core', 'Azure'],
    focus: 'Visualization performance · Interactivity · Scale · Client impact',
  },
  {
    index: '03',
    title: 'Platform Architecture & Global Readiness',
    metric: 'Multi-tenant',
    summary:
      'Owned the long-term evolution of a multi-tenant platform including latency optimizations, full internationalization, custom theming, and CI/CD maturity.',
    tech: ['Vue.js', 'ASP.NET Core', 'Azure', 'Docker', 'Azure DevOps'],
    focus: 'Architecture · Performance · i18n & theming · Reliability',
  },
]
</script>

<template>
  <section
    id="case-studies"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <p class="text-xs font-medium tracking-[0.2em] text-teal-400/90 uppercase">
        Work
      </p>
      <h2 class="font-display mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Case studies
      </h2>
      <p class="mt-4 max-w-2xl text-slate-400">
        Architecture ownership, production AI, and enterprise delivery. Details anonymized.
      </p>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <CaseStudyCard
          v-for="(study, i) in caseStudies"
          :key="study.title"
          v-bind="study"
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
