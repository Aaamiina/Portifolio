import { useEffect } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

function isVisible(element) {
  if (element.getAttribute('aria-hidden') === 'true' || element.tabIndex === -1) {
    return false
  }

  if (typeof element.checkVisibility === 'function') {
    return element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })
  }

  const style = window.getComputedStyle(element)
  if (style.display === 'none' || style.visibility === 'hidden') {
    return false
  }

  return element.getClientRects().length > 0
}

export function useFocusTrap(active, ref) {
  useEffect(() => {
    if (!active || !ref.current) return undefined

    const root = ref.current
    const previouslyFocused = document.activeElement

    const getFocusable = () => [...root.querySelectorAll(FOCUSABLE)].filter(isVisible)

    const onKeyDown = (event) => {
      if (event.key !== 'Tab') return

      const items = getFocusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    root.addEventListener('keydown', onKeyDown)

    return () => {
      root.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [active, ref])
}
