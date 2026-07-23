<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'
import CaseStudyCard from './CaseStudyCard.vue'

const { t, tm, rt } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)
const openIndex = ref<string | null>(null)

function toggle(index: string) {
  openIndex.value = openIndex.value === index ? null : index
}

function resolveList(path: string): string[] {
  const raw = tm(path)
  if (!Array.isArray(raw)) return []
  return raw.map((item) => (typeof item === 'string' ? item : rt(item as never)))
}

const caseStudies = computed(() => [
  {
    index: '01',
    title: t('caseStudies.items.ai.title'),
    metric: t('caseStudies.items.ai.metric'),
    summary: t('caseStudies.items.ai.summary'),
    tech: ['Vue.js', 'ASP.NET Core', 'Microsoft Foundry', 'TypeScript', 'Azure'],
    focus: t('caseStudies.items.ai.focus'),
    problem: t('caseStudies.items.ai.problem'),
    approach: resolveList('caseStudies.items.ai.approach'),
    outcome: t('caseStudies.items.ai.outcome'),
  },
  {
    index: '02',
    title: t('caseStudies.items.dashboards.title'),
    metric: t('caseStudies.items.dashboards.metric'),
    summary: t('caseStudies.items.dashboards.summary'),
    tech: ['Vue.js', 'Highcharts', 'ASP.NET Core', 'Azure'],
    focus: t('caseStudies.items.dashboards.focus'),
    problem: t('caseStudies.items.dashboards.problem'),
    approach: resolveList('caseStudies.items.dashboards.approach'),
    outcome: t('caseStudies.items.dashboards.outcome'),
  },
  {
    index: '03',
    title: t('caseStudies.items.platform.title'),
    metric: t('caseStudies.items.platform.metric'),
    summary: t('caseStudies.items.platform.summary'),
    tech: ['Vue.js', 'ASP.NET Core', 'Azure', 'Docker', 'Azure DevOps'],
    focus: t('caseStudies.items.platform.focus'),
    problem: t('caseStudies.items.platform.problem'),
    approach: resolveList('caseStudies.items.platform.approach'),
    outcome: t('caseStudies.items.platform.outcome'),
  },
])
</script>

<template>
  <section
    id="case-studies"
    ref="rootEl"
    class="reveal section-surface border-t px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
        {{ t('caseStudies.title') }}
      </h2>
      <p class="mt-4 max-w-2xl text-muted">
        {{ t('caseStudies.intro') }}
      </p>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <CaseStudyCard
          v-for="(study, i) in caseStudies"
          :key="study.index"
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
