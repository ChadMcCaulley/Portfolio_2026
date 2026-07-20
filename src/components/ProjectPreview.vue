<script setup lang="ts">
defineProps<{
  variant: 'streaming' | 'social' | 'ai'
}>()
</script>

<template>
  <!-- In-card app mockups so visitors see the product without leaving the page -->
  <div
    class="relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-inner"
    aria-hidden="true"
  >
    <!-- Browser chrome -->
    <div class="flex items-center gap-1.5 border-b border-slate-800 bg-slate-900/90 px-3 py-2">
      <span class="h-2 w-2 rounded-full bg-slate-600" />
      <span class="h-2 w-2 rounded-full bg-slate-600" />
      <span class="h-2 w-2 rounded-full bg-slate-600" />
      <div class="ml-2 h-4 flex-1 rounded-sm bg-slate-800/80" />
    </div>

    <!-- Streaming platform -->
    <div v-if="variant === 'streaming'" class="grid grid-cols-[0.9fr_1.4fr] gap-2 p-3">
      <div class="space-y-1.5">
        <div class="h-16 rounded-md bg-gradient-to-br from-indigo-600/40 to-slate-800 ring-1 ring-white/5" />
        <div class="h-2 w-3/4 rounded bg-slate-700" />
        <div class="h-1.5 w-1/2 rounded bg-slate-800" />
        <div class="mt-2 h-12 rounded-md bg-slate-800/80 ring-1 ring-white/5" />
        <div class="h-2 w-2/3 rounded bg-slate-700" />
      </div>
      <div class="space-y-2">
        <div class="relative aspect-video overflow-hidden rounded-md bg-gradient-to-br from-slate-800 via-indigo-950/50 to-slate-900 ring-1 ring-indigo-500/20">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(129,140,248,0.35),transparent_55%)]" />
          <div class="absolute bottom-2 left-2 right-2">
            <div class="h-1 rounded-full bg-slate-700">
              <div class="h-1 w-2/5 rounded-full bg-indigo-400" />
            </div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <div class="ml-0.5 h-0 w-0 border-y-4 border-l-[7px] border-y-transparent border-l-white/90" />
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="h-8 flex-1 rounded bg-slate-800/90" />
          <div class="h-8 w-8 rounded bg-indigo-600/50" />
        </div>
      </div>
    </div>

    <!-- Social feed -->
    <div v-else-if="variant === 'social'" class="space-y-2 p-3">
      <div class="flex items-center gap-2 border-b border-slate-800/80 pb-2">
        <div class="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400/50 to-indigo-500/40" />
        <div class="h-2 flex-1 rounded bg-slate-700" />
        <div class="h-5 w-12 rounded-full bg-indigo-600/40" />
      </div>
      <div
        v-for="i in 3"
        :key="i"
        class="rounded-lg border border-slate-800/80 bg-slate-900/50 p-2"
      >
        <div class="flex items-center gap-2">
          <div
            class="h-5 w-5 rounded-full"
            :class="i === 1 ? 'bg-teal-500/40' : i === 2 ? 'bg-indigo-500/40' : 'bg-rose-500/30'"
          />
          <div class="h-1.5 w-16 rounded bg-slate-600" />
          <div class="h-1.5 w-8 rounded bg-slate-800" />
        </div>
        <div class="mt-2 space-y-1 pl-7">
          <div class="h-1.5 w-full rounded bg-slate-700/90" />
          <div class="h-1.5 w-4/5 rounded bg-slate-800" />
        </div>
        <div v-if="i === 1" class="mt-2 ml-7 h-14 rounded-md bg-gradient-to-r from-indigo-600/20 to-teal-500/10 ring-1 ring-white/5" />
        <div class="mt-2 flex gap-3 pl-7">
          <div class="h-1.5 w-6 rounded bg-slate-700" />
          <div class="h-1.5 w-6 rounded bg-slate-700" />
          <div class="h-1.5 w-6 rounded bg-slate-700" />
        </div>
      </div>
    </div>

    <!-- AI assistant -->
    <div v-else class="flex h-[168px] flex-col p-3">
      <div class="flex-1 space-y-2 overflow-hidden">
        <div class="flex justify-end">
          <div class="max-w-[75%] rounded-2xl rounded-br-md bg-indigo-600/35 px-2.5 py-1.5">
            <div class="h-1.5 w-28 rounded bg-indigo-200/40" />
            <div class="mt-1 h-1.5 w-16 rounded bg-indigo-200/25" />
          </div>
        </div>
        <div class="flex justify-start gap-2">
          <div class="mt-1 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-teal-400/50 to-indigo-400/40" />
          <div class="max-w-[80%] rounded-2xl rounded-bl-md border border-slate-700/80 bg-slate-900 px-2.5 py-1.5">
            <div class="h-1.5 w-36 rounded bg-slate-600" />
            <div class="mt-1 h-1.5 w-28 rounded bg-slate-700" />
            <div class="mt-1 h-1.5 w-20 rounded bg-slate-800" />
            <div class="mt-2 flex gap-1">
              <span class="h-1 w-1 animate-pulse rounded-full bg-teal-400/80" />
              <span class="h-1 w-1 animate-pulse rounded-full bg-teal-400/50 [animation-delay:150ms]" />
              <span class="h-1 w-1 animate-pulse rounded-full bg-teal-400/30 [animation-delay:300ms]" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1.5">
        <div class="h-2 flex-1 rounded bg-slate-700/80" />
        <div class="h-6 w-6 rounded-lg bg-indigo-500/50" />
      </div>
    </div>
  </div>
</template>
