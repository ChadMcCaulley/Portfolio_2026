<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import CaseStudies from './components/CaseStudies.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 text-slate-200 antialiased">
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

    <footer class="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
      © {{ new Date().getFullYear() }} Chad McCaulley
    </footer>
  </div>
</template>
