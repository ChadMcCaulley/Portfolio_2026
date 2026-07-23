import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/**
 * True when the user asked for reduced motion (a11y panel) or the OS prefers it.
 * Reads live from the document so the panel toggle takes effect immediately.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  if (document.documentElement.dataset.reducedMotion === 'true') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * One-shot intersection reveal for section content.
 * Pass a template ref; returns a `visible` flag.
 * Respects prefers-reduced-motion and the a11y panel toggle.
 */
export function useReveal(
  el: Ref<HTMLElement | null>,
  rootMargin = '0px 0px -8% 0px',
) {
  const visible = ref(false)
  let observer: IntersectionObserver | null = null
  let motionMql: MediaQueryList | null = null
  let attrObserver: MutationObserver | null = null

  function showImmediately() {
    visible.value = true
    observer?.disconnect()
    observer = null
  }

  function startObserver() {
    const node = el.value
    if (!node || visible.value) return

    observer?.disconnect()
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true
          observer?.disconnect()
          observer = null
        }
      },
      { threshold: 0.12, rootMargin },
    )
    observer.observe(node)
  }

  function onMotionPreferenceChange() {
    if (prefersReducedMotion()) {
      showImmediately()
    }
  }

  onMounted(() => {
    if (prefersReducedMotion()) {
      showImmediately()
    } else {
      startObserver()
    }

    // OS preference changes
    motionMql = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionMql.addEventListener('change', onMotionPreferenceChange)

    // A11y panel toggle writes data-reduced-motion on <html>
    attrObserver = new MutationObserver(onMotionPreferenceChange)
    attrObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-reduced-motion'],
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    motionMql?.removeEventListener('change', onMotionPreferenceChange)
    attrObserver?.disconnect()
  })

  return visible
}
