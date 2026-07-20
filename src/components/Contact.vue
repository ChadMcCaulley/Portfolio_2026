<script setup lang="ts">
import { useReveal } from '../composables/useReveal'
import { ref } from 'vue'

const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)
</script>

<template>
  <section
    id="contact"
    ref="rootEl"
    class="reveal relative overflow-hidden border-t border-slate-900/80 px-4 py-28 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent_60%)]"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-2xl text-center">
      <p class="text-xs font-medium tracking-[0.2em] text-teal-400/90 uppercase">
        Contact
      </p>
      <h2 class="font-display mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
        Let's build something reliable
      </h2>
      <p class="mx-auto mt-5 max-w-lg text-slate-400">
        Looking for a senior full-stack partner on multi-tenant platforms, production AI, or the
        hard infrastructure work that makes product teams faster.
      </p>

      <div
        class="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300"
      >
        <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
        </span>
        Open to remote & Phoenix-area roles
      </div>

      <a
        href="mailto:chadmccaulley95@gmail.com"
        class="font-display mt-10 block text-2xl font-medium text-white transition hover:text-indigo-300 sm:text-3xl"
      >
        chadmccaulley95@gmail.com
      </a>

      <div class="mt-8 flex justify-center gap-8 text-sm text-slate-400">
        <a
          href="https://github.com/ChadMcCaulley"
          target="_blank"
          rel="noopener"
          class="transition hover:text-teal-300"
        >
          GitHub
        </a>
        <a href="#" class="transition hover:text-teal-300">
          LinkedIn
        </a>
      </div>

      <p class="mt-10 text-sm text-slate-500">
        Glendale / Phoenix, AZ
      </p>
    </div>
  </section>
</template>
