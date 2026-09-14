import { useEffect, useState } from 'react'

export function useActiveSection(ids, offset = 140) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + offset
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker + 1) current = id
      }

      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      if (scrollBottom >= docHeight - 8) {
        current = ids[ids.length - 1] ?? current
      }

      setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('hashchange', update)
    }
  }, [ids, offset])

  return active
}
