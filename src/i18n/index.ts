import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'
import fr from './locales/fr'
import de from './locales/de'

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch' },
] as const

export type LocaleCode = (typeof SUPPORTED_LOCALES)[number]['code']

export const DEFAULT_LOCALE: LocaleCode = 'en'
const LOCALE_STORAGE_KEY = 'portfolio-locale'

const messages = { en, es, fr, de }

function isSupported(code: string): code is LocaleCode {
  return SUPPORTED_LOCALES.some((l) => l.code === code)
}

/** Resolve browser language (e.g. "es-MX" → "es") against supported locales */
export function detectBrowserLocale(): LocaleCode {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE

  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean)

  for (const raw of candidates) {
    const lower = raw.toLowerCase()
    const base = lower.split('-')[0]
    if (isSupported(lower)) return lower
    if (isSupported(base)) return base
  }

  return DEFAULT_LOCALE
}

export function getStoredLocale(): LocaleCode | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored && isSupported(stored)) return stored
  } catch {
    /* ignore */
  }
  return null
}

export function storeLocale(code: LocaleCode) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
}

/** User pick wins; otherwise browser language; otherwise English */
export function resolveInitialLocale(): LocaleCode {
  return getStoredLocale() ?? detectBrowserLocale()
}

export function applyDocumentLocale(code: LocaleCode) {
  document.documentElement.lang = code
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
  missingWarn: false,
  fallbackWarn: false,
})

export function setAppLocale(code: LocaleCode) {
  if (!isSupported(code)) return
  i18n.global.locale.value = code
  storeLocale(code)
  applyDocumentLocale(code)

  // Update document title / meta description
  const t = i18n.global.t
  document.title = String(t('meta.title'))
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', String(t('meta.description')))
}

export function initI18n() {
  const locale = resolveInitialLocale()
  i18n.global.locale.value = locale
  applyDocumentLocale(locale)

  const t = i18n.global.t
  document.title = String(t('meta.title'))
  const meta = document.querySelector('meta[name="description"]')
  if (meta) meta.setAttribute('content', String(t('meta.description')))
}
