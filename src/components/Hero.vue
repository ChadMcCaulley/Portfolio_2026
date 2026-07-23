<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero-section relative flex min-h-[88vh] items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <!-- Soft product glow -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div class="hero-glow-indigo absolute inset-0" />
      <div class="hero-glow-mint absolute inset-0" />
      <div class="hero-fade absolute inset-x-0 bottom-0 h-32" />
    </div>

    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <p
        class="surface-pill inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide backdrop-blur-sm"
      >
        <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/50 opacity-60" />
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
        </span>
        {{ t('hero.availability') }}
      </p>

      <h1
        class="font-display mt-8 text-5xl font-medium tracking-tight text-heading sm:text-6xl md:text-7xl"
      >
        {{ t('hero.name') }}
      </h1>

      <p class="mt-5 text-lg font-medium text-accent sm:text-xl">
        {{ t('hero.title') }}
      </p>
      <p class="mt-2 text-sm tracking-wide text-subtle">
        {{ t('hero.stack') }}
      </p>

      <p
        class="font-display mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-body sm:text-2xl sm:leading-relaxed"
      >
        {{ t('hero.tagline') }}
      </p>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#case-studies"
          class="btn-primary rounded-lg px-6 py-3 text-sm font-semibold transition"
        >
          {{ t('hero.viewCaseStudies') }}
        </a>
        <a
          href="#contact"
          class="btn-secondary rounded-lg px-6 py-3 text-sm font-medium transition"
        >
          {{ t('hero.getInTouch') }}
        </a>
      </div>
    </div>
  </section>
</template>
