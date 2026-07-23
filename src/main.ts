import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n, initI18n } from './i18n'
import { useAccessibility } from './composables/useAccessibility'

// Apply stored / browser locale + a11y prefs before first paint of content
initI18n()
useAccessibility()

createApp(App).use(i18n).mount('#app')
