<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)
</script>

<template>
  <section
    id="about"
    ref="rootEl"
    class="reveal section-surface border-t px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-3xl">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl">
        {{ t('about.title') }}
      </h2>
      <div class="mt-8 space-y-5 text-lg leading-relaxed text-muted">
        <p>{{ t('about.p1') }}</p>
        <p>{{ t('about.p2') }}</p>
      </div>
    </div>
  </section>
</template>
