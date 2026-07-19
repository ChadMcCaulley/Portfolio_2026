import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { templateCompilerOptions } from '@tresjs/core'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,  
    }),
    tailwindcss()
  ],
})