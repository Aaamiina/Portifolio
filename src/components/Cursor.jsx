import { useEffect, useState } from 'react'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hot, setHot] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')

    const sync = () => {
      setEnabled(!motionQuery.matches && pointerQuery.matches)
    }

    sync()
    motionQuery.addEventListener('change', sync)
    pointerQuery.addEventListener('change', sync)
    return () => {
      motionQuery.removeEventListener('change', sync)
      pointerQuery.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
      const target = event.target
      if (target instanceof Element) {
        setHot(Boolean(target.closest('a, button, input, textarea, label, [role="button"]')))
      }
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[80] hidden mix-blend-difference lg:block"
      style={{
        opacity: visible ? 1 : 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'opacity 200ms ease',
      }}
    >
      <span
        className="block rounded-full border border-gold bg-gold/20"
        style={{
          width: hot ? 36 : 10,
          height: hot ? 36 : 10,
          transform: 'translate(-50%, -50%)',
          transition: 'width 220ms ease, height 220ms ease, background-color 220ms ease',
        }}
      />
    </div>
  )
}
