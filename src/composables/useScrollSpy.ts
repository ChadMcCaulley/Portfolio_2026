import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Tracks which page section is in view for nav highlighting.
 */
export function useScrollSpy(sectionIds: string[], offset = 96) {
  const activeId = ref(sectionIds[0] ?? '')

  function update() {
    const scrollY = window.scrollY + offset + 8
    let current = sectionIds[0] ?? ''

    for (const id of sectionIds) {
      const node = document.getElementById(id)
      if (!node) continue
      if (node.offsetTop <= scrollY) {
        current = id
      }
    }

    // Near bottom: pin last section
    const doc = document.documentElement
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 48) {
      current = sectionIds[sectionIds.length - 1] ?? current
    }

    activeId.value = current
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
  })

  return { activeId }
}
