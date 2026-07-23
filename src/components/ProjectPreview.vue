<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  variant: 'streaming' | 'social' | 'ai'
}>()

const { t } = useI18n()
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

    <!-- Signal streaming platform -->
    <div v-if="variant === 'streaming'" class="grid grid-cols-[0.9fr_1.4fr] gap-2 p-3">
      <div class="space-y-1.5">
        <div class="flex items-center gap-1.5">
          <span class="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[#C8F542]">
            <span
              class="ml-px h-0 w-0 border-y-[3px] border-l-[4px] border-y-transparent border-l-[#0A0A0B]"
            />
          </span>
          <span class="h-1.5 w-10 rounded bg-slate-500" />
        </div>
        <div class="h-14 rounded-md bg-gradient-to-br from-zinc-800 to-zinc-950 ring-1 ring-white/5" />
        <div class="h-2 w-3/4 rounded bg-slate-700" />
        <div class="h-1.5 w-1/2 rounded bg-slate-800" />
        <div class="mt-1.5 h-12 rounded-md bg-slate-800/80 ring-1 ring-white/5" />
        <div class="h-2 w-2/3 rounded bg-slate-700" />
      </div>
      <div class="space-y-2">
        <div
          class="relative aspect-video overflow-hidden rounded-md bg-gradient-to-br from-zinc-900 via-zinc-950 to-black ring-1 ring-[#C8F542]/20"
        >
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(200,245,66,0.18),transparent_55%)]"
          />
          <div class="absolute bottom-2 left-2 right-2">
            <div class="h-1 rounded-full bg-slate-700">
              <div class="h-1 w-2/5 rounded-full bg-[#C8F542]" />
            </div>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8F542]/20 backdrop-blur-sm ring-1 ring-[#C8F542]/30"
            >
              <div
                class="ml-0.5 h-0 w-0 border-y-4 border-l-[7px] border-y-transparent border-l-[#C8F542]"
              />
            </div>
          </div>
        </div>
        <div class="flex gap-2">
          <div class="h-8 flex-1 rounded bg-slate-800/90" />
          <div class="h-8 w-8 rounded bg-[#C8F542]/40" />
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

    <!-- AI content studio -->
    <div v-else class="flex h-[168px] flex-col">
      <!-- Content mode strip -->
      <div class="flex gap-1 border-b border-slate-800/80 px-2.5 py-1.5">
        <span
          class="rounded-md bg-indigo-500/25 px-1.5 py-0.5 text-[8px] font-medium tracking-wide text-indigo-200/90"
        >
          {{ t('preview.blog') }}
        </span>
        <span class="rounded-md bg-slate-800/80 px-1.5 py-0.5 text-[8px] text-slate-500">
          {{ t('preview.linkedin') }}
        </span>
        <span class="rounded-md bg-slate-800/80 px-1.5 py-0.5 text-[8px] text-slate-500">
          {{ t('preview.xThread') }}
        </span>
        <span class="rounded-md bg-slate-800/80 px-1.5 py-0.5 text-[8px] text-slate-500">
          {{ t('preview.email') }}
        </span>
        <span
          class="ml-auto rounded-full border border-teal-500/30 bg-teal-500/10 px-1.5 py-0.5 text-[7px] font-medium text-teal-300/90"
        >
          {{ t('preview.browserAi') }}
        </span>
      </div>
      <div class="flex flex-1 flex-col p-2.5 pt-2">
        <div class="flex-1 space-y-2 overflow-hidden">
          <div class="flex justify-end">
            <div class="max-w-[78%] rounded-2xl rounded-br-md bg-indigo-600/35 px-2.5 py-1.5">
              <div class="h-1.5 w-24 rounded bg-indigo-200/40" />
              <div class="mt-1 h-1.5 w-14 rounded bg-indigo-200/25" />
            </div>
          </div>
          <div class="flex justify-start gap-1.5">
            <div
              class="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-gradient-to-br from-teal-400/50 to-indigo-400/40"
            />
            <div
              class="max-w-[85%] rounded-2xl rounded-bl-md border border-slate-700/80 bg-slate-900 px-2 py-1.5"
            >
              <div class="h-1.5 w-32 rounded bg-slate-600" />
              <div class="mt-1 h-1.5 w-24 rounded bg-slate-700" />
              <div class="mt-1 h-1.5 w-16 rounded bg-slate-800" />
              <div class="mt-1.5 flex gap-1">
                <span class="h-1 w-1 animate-pulse rounded-full bg-teal-400/80" />
                <span
                  class="h-1 w-1 animate-pulse rounded-full bg-teal-400/50 [animation-delay:150ms]"
                />
                <span
                  class="h-1 w-1 animate-pulse rounded-full bg-teal-400/30 [animation-delay:300ms]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-1.5 flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/80 px-2 py-1"
        >
          <div class="h-3 w-3 rounded bg-slate-700/90" title="attach" />
          <div class="h-1.5 flex-1 rounded bg-slate-700/80" />
          <div class="h-3 w-3 rounded-full bg-slate-700/70" title="mic" />
          <div class="h-5 w-5 rounded-md bg-indigo-500/55" />
        </div>
      </div>
    </div>
  </div>
</template>
