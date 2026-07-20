import { onMounted, onUnmounted, ref, type Ref } from 'vue'

/**
 * One-shot intersection reveal for section content.
 * Pass a template ref; returns a `visible` flag.
 * Respects prefers-reduced-motion.
 */
export function useReveal(
  el: Ref<HTMLElement | null>,
  rootMargin = '0px 0px -8% 0px',
) {
  const visible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      visible.value = true
      return
    }

    const node = el.value
    if (!node) return

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
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return visible
}
