import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import portrait from '../assets/amina.jpg'
import { profile } from '../data/profile'

export default function DeveloperVisual() {
  const shouldReduceMotion = useReducedMotion()
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    if (shouldReduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    setOffset({
      x: (event.clientX - bounds.left) / bounds.width - 0.5,
      y: (event.clientY - bounds.top) / bounds.height - 0.5,
    })
  }

  const reset = () => setOffset({ x: 0, y: 0 })
  const layer = (amount) => ({
    transform: `translate3d(${offset.x * amount}px, ${offset.y * amount}px, 0)`,
    transition: 'transform 450ms ease-out',
  })

  return (
    <div
      className="relative mx-auto w-full max-w-[14.5rem] min-[380px]:max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem]"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div
        className="hero-panel-grid pointer-events-none absolute -inset-8 rounded-[2rem] opacity-40"
        aria-hidden="true"
        style={layer(10)}
      />
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gold/[0.1] blur-3xl"
        aria-hidden="true"
        style={layer(16)}
      />

      <div style={layer(8)}>
        <motion.figure
          className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-charcoal shadow-[var(--shadow-float)]"
          animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={portrait}
            alt={`${profile.name}, ${profile.title}`}
            width={640}
            height={960}
            className="aspect-[3/4] w-full object-cover object-[center_22%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-black/10" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-sm font-semibold tracking-tight text-paper">{profile.name}</p>
            <p className="mt-1 text-[0.7rem] tracking-[0.16em] text-gold uppercase">{profile.title}</p>
          </figcaption>
        </motion.figure>
      </div>
    </div>
  )
}
