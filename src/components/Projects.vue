<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Modernized Streaming Platform',
    description: 'Full-stack Netflix-style application elevated with TypeScript, improved architecture, authentication, and performance focus. Demonstrates full ownership from UI to API.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    // demoUrl: '#',
    // githubUrl: '#',
  },
  {
    title: 'Real-time Social Application',
    description: 'Twitter-style application elevated with cleaner architecture, real-time features, and modern frontend patterns.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'AI Content Assistant (Demo)',
    description: 'Public demonstration of AI-powered content generation and chat, mirroring professional experience with Microsoft Foundry / LLM integrations. Built with free tiers.',
    tech: ['Vue.js', 'TypeScript', 'LLM APIs'],
  }
]
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-4">Selected Projects</h2>
      <p class="text-slate-400 mb-12 max-w-2xl">
        Personal and elevated projects that demonstrate full-stack range, including React breadth alongside Vue expertise.
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          v-bind="p"
        />
      </div>
    </div>
  </section>
</template>