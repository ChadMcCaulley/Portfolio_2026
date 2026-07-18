<script setup lang="ts">
const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS/SASS', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['ASP.NET Core', 'C#', 'Node.js', 'Express', 'Django', 'Python', 'REST APIs', 'SQL']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Azure', 'Azure DevOps', 'Microsoft Foundry / Azure AI', 'Docker', 'AWS', 'CI/CD']
  },
  {
    title: 'AI & Tools',
    skills: ['LLM Integration', 'Generative AI Features', 'Cline', 'Highcharts', 'System Design']
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Selenium', 'TDD']
  }
]
</script>

<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12">Skills</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="group in skillGroups" :key="group.title">
          <h3 class="text-indigo-400 font-medium mb-3">{{ group.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>