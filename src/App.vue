<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import CaseStudies from './components/CaseStudies.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import AccessibilityMenu from './components/AccessibilityMenu.vue'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <div class="app-shell relative min-h-dvh antialiased">
    <div class="grain" aria-hidden="true" />
    <Navbar />
    <main>
      <Hero />
      <About />
      <CaseStudies />
      <Projects />
      <Skills />
      <Contact />
    </main>

    <footer class="app-footer border-t py-8 text-center text-sm">
      {{ t('footer.copyright', { year }) }}
    </footer>

    <AccessibilityMenu />
  </div>
</template>
