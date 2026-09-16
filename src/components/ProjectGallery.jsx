import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { cn, focusGold } from '../lib/styles'

export default function ProjectGallery({ images = [], title, className = '' }) {
  const scrollerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const count = images.length

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined

    const onScroll = () => {
      const width = el.clientWidth || 1
      const next = Math.round(el.scrollLeft / width)
      setIndex(Math.min(Math.max(next, 0), count - 1))
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [count])

  const scrollTo = (nextIndex) => {
    const el = scrollerRef.current
    if (!el) return
    const clamped = Math.min(Math.max(nextIndex, 0), count - 1)
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setIndex(clamped)
  }

  if (count === 0) return null

  return (
    <div
      className={cn('relative overflow-hidden bg-[#101012]', className)}
      onClick={(event) => event.stopPropagation()}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-1.5" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
      </div>

      <div
        ref={scrollerRef}
        className="flex touch-pan-x snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={`${title} screenshots`}
      >
        {images.map((src, i) => (
          <div key={`${title}-${i}`} className="relative aspect-[16/10] w-full shrink-0 snap-center">
            <img
              src={src}
              alt={`${title} screenshot ${i + 1} of ${count}`}
              className="absolute inset-0 h-full w-full bg-[#0c0c0e] object-contain object-center"
              draggable={false}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => scrollTo(index - 1)}
            disabled={index === 0}
            className={cn(
              'absolute top-1/2 left-2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-gold disabled:pointer-events-none disabled:opacity-30',
              focusGold,
            )}
          >
            <FiChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => scrollTo(index + 1)}
            disabled={index === count - 1}
            className={cn(
              'absolute top-1/2 right-2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-gold disabled:pointer-events-none disabled:opacity-30',
              focusGold,
            )}
          >
            <FiChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === index ? 'w-4 bg-gold' : 'w-1.5 bg-white/35 hover:bg-white/55',
                )}
              />
            ))}
          </div>

          <p className="pointer-events-none absolute top-10 right-3 z-10 rounded-full bg-night/65 px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-paper/80 backdrop-blur-sm">
            {index + 1}/{count}
          </p>
        </>
      ) : null}
    </div>
  )
}
