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
  <div class="min-h-screen bg-slate-950 text-slate-100 antialiased">
    <Navbar />
    <main>
      <Hero />
      <About />
      <CaseStudies />
      <Projects />
      <Skills />
      <Contact />
    </main>

    <footer class="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      © {{ new Date().getFullYear() }} Chad McCaulley. Built with Vue 3 + Tailwind CSS.
    </footer>
  </div>
</template>