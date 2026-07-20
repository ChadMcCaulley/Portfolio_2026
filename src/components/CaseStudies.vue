<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'
import CaseStudyCard from './CaseStudyCard.vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)
const openIndex = ref<string | null>(null)

function toggle(index: string) {
  openIndex.value = openIndex.value === index ? null : index
}

const caseStudies = [
  {
    index: '01',
    title: 'AI-Powered Content Tools',
    metric: 'In production',
    summary:
      'LLM-powered chat and dynamic image generation in a multi-tenant B2B communications platform.',
    tech: ['Vue.js', 'ASP.NET Core', 'Microsoft Foundry', 'TypeScript', 'Azure'],
    focus: 'Isolation · Streaming · Cost',
    problem:
      'Enterprise users needed generative content inside an existing multi-tenant product — without leaking data across tenants, stalling the UI, or creating unbounded AI spend.',
    approach: [
      'Selected and integrated Microsoft Foundry models behind a service boundary owned by the platform team.',
      'Designed streaming chat UX so long generations stay responsive and cancelable.',
      'Enforced tenant isolation on every request path, with usage controls for reliability and cost.',
    ],
    outcome:
      'Shipped production AI chat and image generation that product teams could extend, with clear isolation and operational guardrails.',
  },
  {
    index: '02',
    title: 'Enterprise Analytical Dashboards',
    metric: 'Client-facing',
    summary:
      'High-performance interactive dashboards delivering critical business insights to enterprise clients.',
    tech: ['Vue.js', 'Highcharts', 'ASP.NET Core', 'Azure'],
    focus: 'Performance · Scale · UX',
    problem:
      'Clients needed dense, interactive analytics that stayed usable as data volume and filter complexity grew — slow loads and frozen charts were not acceptable.',
    approach: [
      'Built dashboard shells optimized for progressive load and interactive filtering.',
      'Paired Highcharts with careful data shaping on the API so the browser never overworked.',
      'Prioritized the workflows clients actually used day-to-day over decorative chart sprawl.',
    ],
    outcome:
      'Delivered client-facing analytics that hold up under real enterprise usage and support decision-making without performance drama.',
  },
  {
    index: '03',
    title: 'Platform Architecture & Global Readiness',
    metric: 'Multi-tenant',
    summary:
      'Long-term platform evolution: latency work, full i18n, custom enterprise theming, and CI/CD maturity.',
    tech: ['Vue.js', 'ASP.NET Core', 'Azure', 'Docker', 'Azure DevOps'],
    focus: 'Architecture · i18n · Reliability',
    problem:
      'A growing multi-tenant product needed to scale globally — more languages, customer branding, tighter performance, and safer delivery — without fragmenting the codebase.',
    approach: [
      'Owned cross-cutting platform work: shared patterns, theming system, and internationalization.',
      'Drove latency-focused improvements where users felt them most.',
      'Hardened CI/CD and deployment practices so releases stayed boring in the best way.',
    ],
    outcome:
      'A more global-ready platform with clearer architecture ownership and a delivery process that supports ongoing product velocity.',
  },
]
</script>

<template>
  <section
    id="case-studies"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 bg-[#020617] px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Case studies
      </h2>
      <p class="mt-4 max-w-2xl text-slate-400">
        Architecture ownership, production AI, and enterprise delivery. Details anonymized —
        click a card to open the full story.
      </p>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <CaseStudyCard
          v-for="(study, i) in caseStudies"
          :key="study.title"
          v-bind="study"
          :open="openIndex === study.index"
          class="reveal"
          :class="[
            visible ? 'is-visible' : '',
            i === 1 ? 'reveal-delay-1' : '',
            i === 2 ? 'reveal-delay-2' : '',
            openIndex === study.index ? 'lg:col-span-1' : '',
          ]"
          @toggle="toggle(study.index)"
        />
      </div>
    </div>
  </section>
</template>
