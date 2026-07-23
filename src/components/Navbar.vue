<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollSpy } from '../composables/useScrollSpy'

const { t } = useI18n()
const isMenuOpen = ref(false)

const links = computed(() => [
  { id: 'about', label: t('nav.about') },
  { id: 'case-studies', label: t('nav.caseStudies') },
  { id: 'projects', label: t('nav.projects') },
  { id: 'skills', label: t('nav.skills') },
  { id: 'contact', label: t('nav.contact') },
])

const { activeId } = useScrollSpy(
  ['about', 'case-studies', 'projects', 'skills', 'contact'],
  100,
)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function linkClass(id: string) {
  return activeId.value === id ? 'nav-link-active' : 'nav-link'
}
</script>

<template>
  <nav
    class="app-nav fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <a href="#" class="font-display text-lg font-medium tracking-tight text-heading">
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
            class="btn-primary rounded-md px-3 py-1.5 text-sm font-medium transition"
          >
            {{ t('nav.resume') }}
          </a>
        </div>

        <button
          type="button"
          class="p-2 text-muted md:hidden"
          :aria-label="t('nav.toggleMenu')"
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

    <div v-if="isMenuOpen" class="app-nav-mobile border-t md:hidden">
      <div class="space-y-1 px-4 py-4">
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
        <a href="#" class="block px-2 py-2 text-muted" @click="isMenuOpen = false">
          {{ t('nav.resume') }}
        </a>
      </div>
    </div>
  </nav>
</template>
