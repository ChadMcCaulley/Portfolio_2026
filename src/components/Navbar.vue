<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="text-lg font-semibold text-white tracking-tight">
          Chad McCaulley
        </a>

        <!-- Desktop -->
        <div class="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#about" class="hover:text-indigo-400 transition">About</a>
          <a href="#case-studies" class="hover:text-indigo-400 transition">Case Studies</a>
          <a href="#projects" class="hover:text-indigo-400 transition">Projects</a>
          <a href="#skills" class="hover:text-indigo-400 transition">Skills</a>
          <a href="#contact" class="hover:text-indigo-400 transition">Contact</a>
          <a
            href="#"
            class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-sm font-medium transition"
          >
            Resume
          </a>
        </div>

        <!-- Mobile button -->
        <button @click="toggleMenu" class="md:hidden p-2 text-slate-300" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-t border-slate-800">
      <div class="px-4 py-4 space-y-3 text-slate-300">
        <a href="#about" @click="isMenuOpen = false" class="block hover:text-indigo-400">About</a>
        <a href="#case-studies" @click="isMenuOpen = false" class="block hover:text-indigo-400">Case Studies</a>
        <a href="#projects" @click="isMenuOpen = false" class="block hover:text-indigo-400">Projects</a>
        <a href="#skills" @click="isMenuOpen = false" class="block hover:text-indigo-400">Skills</a>
        <a href="#contact" @click="isMenuOpen = false" class="block hover:text-indigo-400">Contact</a>
        <a href="#" class="block">Resume</a>
      </div>
    </div>
  </nav>
</template>