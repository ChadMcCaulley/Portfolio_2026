<script setup lang="ts">
import HeroBackground from './HeroBackground.vue'
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
    <HeroBackground />

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <p class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-200/90 uppercase">
        <span class="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
        Inbox full of CRs? Swat them. Or hire me.
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
        Chad McCaulley
      </h1>
      <p class="mt-4 text-xl sm:text-2xl font-medium text-indigo-400">
        Senior Full-Stack Developer
      </p>
      <p class="mt-2 text-slate-400 tracking-wide">
        Vue.js • ASP.NET Core • Azure • AI
      </p>
      <p class="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Change requests and review churn shouldn't swarm your week.
        I take ownership of the messy platform work so your team can ship without the buzz.
      </p>
      <p class="mt-3 text-sm text-slate-500">
        Move your cursor through the CRs — they scatter like pests. They always come back… unless you bring in help.
      </p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition"
        >
          Hire me to clear the swarm
        </a>
        <a
          href="#case-studies"
          class="px-6 py-3 border border-slate-700 hover:border-indigo-500 text-slate-200 rounded-lg transition"
        >
          View Case Studies
        </a>
        <a
          href="#"
          class="px-6 py-3 border border-slate-700 hover:border-indigo-500 text-slate-200 rounded-lg transition"
        >
          Resume
        </a>
        <a
          href="https://github.com/ChadMcCaulley"
          target="_blank"
          rel="noopener"
          class="px-6 py-3 border border-slate-700 hover:border-indigo-500 text-slate-200 rounded-lg transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
