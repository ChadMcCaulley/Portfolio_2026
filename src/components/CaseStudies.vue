<script setup lang="ts">
import CaseStudyCard from './CaseStudyCard.vue'

const caseStudies = [
  {
    title: 'AI-Powered Content Tools',
    summary: 'Designed and integrated LLM-powered chat and dynamic image generation into a multi-tenant B2B communications platform using Microsoft Foundry.',
    tech: ['Vue.js', 'ASP.NET Core', 'Microsoft Foundry', 'TypeScript', 'Azure'],
    focus: 'Technology selection • Multi-tenant isolation • Streaming UX • Cost & reliability'
  },
  {
    title: 'Enterprise Analytical Dashboards',
    summary: 'Built high-performance interactive dashboards that deliver critical business insights to enterprise clients.',
    tech: ['Vue.js', 'Highcharts', 'ASP.NET Core', 'Azure'],
    focus: 'Data visualization performance • Interactivity • Scale • Client impact'
  },
  {
    title: 'Platform Architecture, Performance & Global Readiness',
    summary: 'Owned the long-term evolution of a multi-tenant platform including latency optimizations, full internationalization, custom theming, and CI/CD maturity.',
    tech: ['Vue.js', 'ASP.NET Core', 'Azure', 'Docker', 'Azure DevOps'],
    focus: 'Multi-tenant architecture • Performance engineering • i18n & theming • Reliability'
  }
]
</script>

<template>
  <section id="case-studies" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-4">Featured Case Studies</h2>
      <p class="text-slate-400 mb-12 max-w-2xl">
        Selected professional work demonstrating architecture ownership, production AI features, and enterprise-scale delivery. Details anonymized.
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <CaseStudyCard
          v-for="study in caseStudies"
          :key="study.title"
          v-bind="study"
        />
      </div>
    </div>
  </section>
</template>