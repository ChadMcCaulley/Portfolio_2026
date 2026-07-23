<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useReveal } from '../composables/useReveal'

const CONTACT_EMAIL = 'chadmccaulley95@gmail.com'
/** FormSubmit delivers to this address after a one-time confirmation email. */
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const MESSAGE_MIN = 10
const MESSAGE_MAX = 1000

const { t } = useI18n()
const rootEl = ref<HTMLElement | null>(null)
const visible = useReveal(rootEl)

type Status = 'idle' | 'submitting' | 'success' | 'draft' | 'error'
type FieldKey = 'email' | 'message'
type FieldState = 'idle' | 'error' | 'valid'

const form = reactive({
  email: '',
  message: '',
  /** Honeypot — leave empty; bots often fill it */
  company: '',
})

const status = ref<Status>('idle')
const errorMessage = ref('')
const shake = ref(false)

const fieldErrors = reactive<Record<FieldKey, string>>({
  email: '',
  message: '',
})

const touched = reactive<Record<FieldKey, boolean>>({
  email: false,
  message: false,
})

const isSubmitting = computed(() => status.value === 'submitting')
const messageLen = computed(() => form.message.length)
const messageTrimLen = computed(() => form.message.trim().length)

function emailLooksValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function errorFor(field: FieldKey): string {
  if (field === 'email') {
    if (!form.email.trim()) return t('contact.form.errors.emailRequired')
    if (!emailLooksValid(form.email.trim())) return t('contact.form.errors.emailInvalid')
    return ''
  }
  if (!form.message.trim()) return t('contact.form.errors.messageRequired')
  if (form.message.trim().length < MESSAGE_MIN) return t('contact.form.errors.messageShort')
  if (form.message.length > MESSAGE_MAX) return t('contact.form.errors.messageLong')
  return ''
}

function fieldState(field: FieldKey): FieldState {
  if (fieldErrors[field]) return 'error'
  if (touched[field] && !errorFor(field) && form[field].trim()) return 'valid'
  return 'idle'
}

function validateField(field: FieldKey) {
  fieldErrors[field] = errorFor(field)
}

function onBlur(field: FieldKey) {
  touched[field] = true
  validateField(field)
}

function onInput(field: FieldKey) {
  if (touched[field] || fieldErrors[field]) {
    validateField(field)
  }
}

function onMessageInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  if (target.value.length > MESSAGE_MAX) {
    form.message = target.value.slice(0, MESSAGE_MAX)
  }
  onInput('message')
}

function validateAll(): boolean {
  ;(Object.keys(touched) as FieldKey[]).forEach((key) => {
    touched[key] = true
    validateField(key)
  })
  return !fieldErrors.email && !fieldErrors.message
}

function triggerShake() {
  shake.value = false
  requestAnimationFrame(() => {
    shake.value = true
    window.setTimeout(() => {
      shake.value = false
    }, 450)
  })
}

function resetForm() {
  form.email = ''
  form.message = ''
  form.company = ''
  fieldErrors.email = ''
  fieldErrors.message = ''
  touched.email = false
  touched.message = false
}

async function onSubmit(e: Event) {
  e.preventDefault()
  if (isSubmitting.value) return

  if (!validateAll()) {
    triggerShake()
    const order: FieldKey[] = ['email', 'message']
    const first = order.find((k) => fieldErrors[k])
    if (first) {
      document.getElementById(`contact-${first}`)?.focus()
    }
    return
  }

  if (form.company.trim()) {
    status.value = 'success'
    resetForm()
    return
  }

  status.value = 'submitting'
  errorMessage.value = ''

  const subject = t('contact.form.defaultSubject')
  const email = form.email.trim()
  const message = form.message.trim()

  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
        _replyto: email,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    const data = (await res.json().catch(() => null)) as { success?: string | boolean } | null
    if (data && data.success === false) {
      throw new Error('FormSubmit rejected')
    }

    status.value = 'success'
    resetForm()
  } catch {
    try {
      const body = [message, '', '---', email].join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      status.value = 'draft'
      resetForm()
    } catch {
      status.value = 'error'
      errorMessage.value = t('contact.form.error')
    }
  }
}

function sendAnother() {
  status.value = 'idle'
  errorMessage.value = ''
}

function describedBy(field: FieldKey) {
  const ids: string[] = []
  if (fieldErrors[field]) ids.push(`contact-${field}-error`)
  if (field === 'message') ids.push('contact-message-hint')
  return ids.length ? ids.join(' ') : undefined
}

const messageHint = computed(() => {
  if (messageTrimLen.value === 0) return t('contact.form.messageHint')
  if (messageTrimLen.value < MESSAGE_MIN) {
    return t('contact.form.messageProgress', { count: MESSAGE_MIN - messageTrimLen.value })
  }
  if (messageLen.value >= MESSAGE_MAX) return t('contact.form.messageAtLimit')
  return t('contact.form.messageReady')
})
</script>

<template>
  <section
    id="contact"
    ref="rootEl"
    class="reveal section-surface relative overflow-hidden border-t px-4 py-28 sm:px-6 lg:px-8"
    :class="{ 'is-visible': visible }"
  >
    <div
      class="contact-glow pointer-events-none absolute inset-0"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-xl text-center">
      <h2 class="font-display text-3xl font-medium tracking-tight text-heading sm:text-4xl md:text-5xl">
        {{ t('contact.title') }}
      </h2>
      <p class="mx-auto mt-5 max-w-md text-muted">
        {{ t('contact.intro') }}
      </p>

      <div
        class="metric-pill mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
      >
        <span class="relative flex h-1.5 w-1.5" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
          <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
        </span>
        {{ t('contact.availability') }}
      </div>

      <div
        v-if="status === 'success' || status === 'draft'"
        class="mt-12 rounded-2xl border border-subtle px-6 py-10"
        role="status"
        aria-live="polite"
      >
        <div
          class="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/15 text-mint"
          aria-hidden="true"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="font-display mt-5 text-xl font-medium text-heading">
          {{ status === 'draft' ? t('contact.form.draftTitle') : t('contact.form.successTitle') }}
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-muted">
          {{ status === 'draft' ? t('contact.form.draftBody') : t('contact.form.successBody') }}
        </p>
        <button
          type="button"
          class="btn-secondary mt-6 rounded-lg px-4 py-2 text-sm font-medium transition"
          @click="sendAnother"
        >
          {{ t('contact.form.sendAnother') }}
        </button>
      </div>

      <form
        v-else
        class="contact-form mt-12 text-left"
        :class="{ 'contact-form--shake': shake }"
        novalidate
        @submit="onSubmit"
      >
        <!-- Email -->
        <div class="contact-field">
          <label for="contact-email" class="sr-only">{{ t('contact.form.email') }}</label>
          <div class="contact-control">
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              :disabled="isSubmitting"
              class="contact-input contact-input--with-icon"
              :class="{
                'contact-input--error': fieldState('email') === 'error',
                'contact-input--valid': fieldState('email') === 'valid',
              }"
              :aria-invalid="fieldState('email') === 'error'"
              :aria-describedby="describedBy('email')"
              :placeholder="t('contact.form.email')"
              @blur="onBlur('email')"
              @input="onInput('email')"
            />
            <span
              v-if="fieldState('email') === 'error'"
              class="contact-status-icon contact-status-icon--error"
              aria-hidden="true"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </span>
            <span
              v-else-if="fieldState('email') === 'valid'"
              class="contact-status-icon contact-status-icon--valid"
              aria-hidden="true"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
          <Transition name="contact-feedback">
            <p
              v-if="fieldErrors.email"
              id="contact-email-error"
              class="contact-feedback contact-feedback--error"
              role="alert"
            >
              {{ fieldErrors.email }}
            </p>
          </Transition>
        </div>

        <!-- Message -->
        <div class="contact-field mt-3">
          <label for="contact-message" class="sr-only">{{ t('contact.form.message') }}</label>
          <div class="contact-control contact-control--textarea">
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              rows="4"
              required
              :maxlength="MESSAGE_MAX"
              :disabled="isSubmitting"
              class="contact-input contact-input--textarea contact-input--with-icon"
              :class="{
                'contact-input--error': fieldState('message') === 'error',
                'contact-input--valid': fieldState('message') === 'valid',
              }"
              :aria-invalid="fieldState('message') === 'error'"
              :aria-describedby="describedBy('message')"
              :placeholder="t('contact.form.messagePlaceholder')"
              @blur="onBlur('message')"
              @input="onMessageInput"
            />
            <span
              v-if="fieldState('message') === 'error'"
              class="contact-status-icon contact-status-icon--error contact-status-icon--textarea"
              aria-hidden="true"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </span>
            <span
              v-else-if="fieldState('message') === 'valid'"
              class="contact-status-icon contact-status-icon--valid contact-status-icon--textarea"
              aria-hidden="true"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>

          <div class="contact-meta">
            <Transition name="contact-feedback" mode="out-in">
              <p
                v-if="fieldErrors.message"
                id="contact-message-error"
                key="error"
                class="contact-feedback contact-feedback--error"
                role="alert"
              >
                {{ fieldErrors.message }}
              </p>
              <p
                v-else
                id="contact-message-hint"
                key="hint"
                class="contact-feedback contact-feedback--hint"
                :class="{
                  'contact-feedback--hint-ready':
                    messageTrimLen >= MESSAGE_MIN && messageLen < MESSAGE_MAX,
                  'contact-feedback--hint-limit': messageLen >= MESSAGE_MAX,
                }"
              >
                {{ messageHint }}
              </p>
            </Transition>
            <span
              class="contact-counter"
              :class="{
                'contact-counter--low': messageTrimLen > 0 && messageTrimLen < MESSAGE_MIN,
                'contact-counter--ok': messageTrimLen >= MESSAGE_MIN && messageLen < MESSAGE_MAX * 0.9,
                'contact-counter--warn': messageLen >= MESSAGE_MAX * 0.9 && messageLen < MESSAGE_MAX,
                'contact-counter--limit': messageLen >= MESSAGE_MAX,
              }"
              aria-hidden="true"
            >
              {{ messageLen }}/{{ MESSAGE_MAX }}
            </span>
          </div>
        </div>

        <!-- Honeypot -->
        <div class="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
          <label for="contact-company">Company</label>
          <input
            id="contact-company"
            v-model="form.company"
            type="text"
            name="company"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <Transition name="contact-feedback">
          <p
            v-if="status === 'error'"
            class="contact-banner contact-banner--error mt-3"
            role="alert"
          >
            {{ errorMessage || t('contact.form.error') }}
            <a
              :href="`mailto:${CONTACT_EMAIL}`"
              class="font-medium underline underline-offset-2"
            >
              {{ CONTACT_EMAIL }}
            </a>
          </p>
        </Transition>

        <button
          type="submit"
          class="btn-primary mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="isSubmitting"
        >
          <svg
            v-if="isSubmitting"
            class="h-4 w-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
        </button>

        <p class="mt-5 text-center text-sm text-subtle">
          {{ t('contact.form.orEmail') }}
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="text-heading underline decoration-transparent underline-offset-4 transition hover:text-accent hover:decoration-current"
          >
            {{ CONTACT_EMAIL }}
          </a>
        </p>
      </form>

      <div class="mt-10 flex justify-center gap-8 text-sm text-muted">
        <a
          href="https://github.com/ChadMcCaulley"
          target="_blank"
          rel="noopener"
          class="transition hover:text-mint"
        >
          {{ t('contact.github') }}
        </a>
        <a href="#" class="transition hover:text-mint">
          {{ t('contact.linkedin') }}
        </a>
      </div>

      <p class="mt-6 text-sm text-subtle">
        {{ t('contact.location') }}
      </p>
    </div>
  </section>
</template>
