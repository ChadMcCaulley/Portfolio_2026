<script setup lang="ts">
import { useScrollSpy } from '../composables/useScrollSpy'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const links = [
  { id: 'about', label: 'About' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

const { activeId } = useScrollSpy(
  links.map((l) => l.id),
  100,
)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function linkClass(id: string) {
  return activeId.value === id
    ? 'text-teal-300'
    : 'text-slate-400 hover:text-slate-200'
}
</script>

<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a href="#" class="font-display text-lg font-medium tracking-tight text-white">
          Chad McCaulley
        </a>

        <div class="hidden items-center gap-7 text-sm md:flex">
          <a
            v-for="link in links"
            :key="link.id"
            :href="`#${link.id}`"
            class="transition"
            :class="linkClass(link.id)"
          >
            {{ link.label }}
          </a>
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          class="p-2 text-slate-300 md:hidden"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="border-t border-slate-800 bg-slate-950/95 md:hidden">
      <div class="space-y-1 px-4 py-4 text-slate-300">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="block rounded-md px-2 py-2 transition"
          :class="linkClass(link.id)"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#" class="block px-2 py-2" @click="isMenuOpen = false">Resume</a>
      </div>
    </div>
  </nav>
</template>
