<template>
  <section class="relative flex min-h-[88vh] items-center overflow-hidden bg-[#020617] px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <!-- Soft product glow -->
    <div
      class="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(99,102,241,0.22),transparent_55%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_60%,rgba(45,212,191,0.06),transparent_50%)]"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-3xl text-center">
      <p
        class="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs font-medium tracking-wide text-slate-400 backdrop-blur-sm"
      >
        <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/50 opacity-60" />
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-400" />
        </span>
        Phoenix · Remote · Open to senior roles
      </p>

      <h1
        class="font-display mt-8 text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl"
      >
        Chad McCaulley
      </h1>

      <p class="mt-5 text-lg font-medium text-indigo-300 sm:text-xl">
        Senior Full-Stack Developer
      </p>
      <p class="mt-2 text-sm tracking-wide text-slate-500">
        Vue.js · ASP.NET Core · Azure · AI
      </p>

      <p
        class="font-display mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-slate-300 sm:text-2xl sm:leading-relaxed"
      >
        I take ownership of the platform work enterprise teams can’t leave half-done —
        multi-tenant architecture, production AI, and the systems people rely on every day.
      </p>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#case-studies"
          class="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,0.4),0_8px_24px_rgba(79,70,229,0.25)] transition hover:bg-indigo-500"
        >
          View case studies
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-slate-700 bg-slate-950/40 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-teal-500/40 hover:text-white"
        >
          Get in touch
        </a>
      </div>
    </div>
  </section>
</template>
