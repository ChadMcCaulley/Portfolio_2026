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
    id="contact"
    ref="rootEl"
    class="reveal section-surface relative overflow-hidden border-t px-4 py-28 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div
      class="contact-glow pointer-events-none absolute inset-0"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-2xl text-center">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl md:text-5xl">
        {{ t('contact.title') }}
      </h2>
      <p class="mx-auto mt-5 max-w-lg text-muted">
        {{ t('contact.intro') }}
      </p>

      <div
        class="metric-pill mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
      >
        <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
        </span>
        {{ t('contact.availability') }}
      </div>

      <a
        href="mailto:chadmccaulley95@gmail.com"
        class="font-display mt-10 block text-2xl font-medium text-heading transition hover:text-accent sm:text-3xl"
      >
        chadmccaulley95@gmail.com
      </a>

      <div class="mt-8 flex justify-center gap-8 text-sm text-muted">
        <a
          href="https://github.com/ChadMcCaulley"
          target="_blank"
          rel="noopener"
          class="transition hover:text-mint"
        >
          {{ t('contact.github') }}
        </a>
        <a href="#" class="transition hover:text-mint">
          {{ t('contact.linkedin') }}
        </a>
      </div>

      <p class="mt-10 text-sm text-subtle">
        {{ t('contact.location') }}
      </p>
    </div>
  </section>
</template>
