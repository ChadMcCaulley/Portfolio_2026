<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)
</script>

<template>
  <section
    id="about"
    ref="rootEl"
    class="reveal border-t border-slate-900/80 px-4 py-24 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div class="mx-auto max-w-3xl">
      <p class="text-xs font-medium tracking-[0.2em] text-teal-400/90 uppercase">
        About
      </p>
      <h2 class="font-display mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
        Built for platforms that have to work
      </h2>
      <div class="mt-8 space-y-5 text-lg leading-relaxed text-slate-400">
        <p>
          I'm a Senior Full-Stack Developer with 7+ years of experience owning the architecture
          and development of multi-tenant B2B SaaS platforms. I currently lead development of an
          enterprise internal communications and email management system — shipping AI-powered
          content tools (chat and dynamic image generation via Microsoft Foundry), high-performance
          analytical dashboards, internationalization, custom enterprise theming, and meaningful
          performance work.
        </p>
        <p>
          I care about pragmatic architecture, measurable outcomes, and features teams actually
          rely on. Based in the Phoenix area and open to remote opportunities.
        </p>
      </div>
    </div>
  </section>
</template>
