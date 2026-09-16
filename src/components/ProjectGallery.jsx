import { useEffect, useMemo, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { cn, focusGold } from '../lib/styles'

function PhoneFrame({ src, alt, loading }) {
  return (
    <div className="flex w-[42%] max-w-[9.5rem] shrink-0 flex-col items-center sm:w-[38%] sm:max-w-[11rem]">
      <div className="relative w-full overflow-hidden rounded-[1.35rem] border border-white/18 bg-[#0a0a0c] shadow-[0_12px_30px_rgba(0,0,0,0.45)] ring-1 ring-white/8">
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-1.5" aria-hidden="true">
          <span className="h-1.5 w-10 rounded-full bg-black/70" />
        </div>
        <div className="aspect-[9/16] w-full bg-[#0c0c0e] pt-3">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-top"
            draggable={false}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default function ProjectGallery({ images = [], title, className = '' }) {
  const scrollerRef = useRef(null)
  const [page, setPage] = useState(0)
  const count = images.length

  const pages = useMemo(() => {
    const pairs = []
    for (let i = 0; i < images.length; i += 2) {
      pairs.push(images.slice(i, i + 2))
    }
    return pairs
  }, [images])

  const pageCount = pages.length

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined

    const onScroll = () => {
      const width = el.clientWidth || 1
      const next = Math.round(el.scrollLeft / width)
      setPage(Math.min(Math.max(next, 0), pageCount - 1))
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [pageCount])

  const scrollTo = (nextPage) => {
    const el = scrollerRef.current
    if (!el) return
    const clamped = Math.min(Math.max(nextPage, 0), pageCount - 1)
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setPage(clamped)
  }

  if (count === 0) return null

  const shownStart = page * 2 + 1
  const shownEnd = Math.min(page * 2 + 2, count)

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
        {pages.map((pair, pageIndex) => (
          <div
            key={`${title}-page-${pageIndex}`}
            className="flex w-full shrink-0 snap-center items-end justify-center gap-3 px-10 py-5 sm:gap-5 sm:px-12 sm:py-6"
          >
            {pair.map((src, i) => {
              const imageIndex = pageIndex * 2 + i
              return (
                <PhoneFrame
                  key={`${title}-${imageIndex}`}
                  src={src}
                  alt={`${title} screenshot ${imageIndex + 1} of ${count}`}
                  loading={imageIndex === 0 ? 'eager' : 'lazy'}
                />
              )
            })}
          </div>
        ))}
      </div>

      {pageCount > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous screenshots"
            onClick={() => scrollTo(page - 1)}
            disabled={page === 0}
            className={cn(
              'absolute top-1/2 left-2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-gold disabled:pointer-events-none disabled:opacity-30',
              focusGold,
            )}
          >
            <FiChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next screenshots"
            onClick={() => scrollTo(page + 1)}
            disabled={page === pageCount - 1}
            className={cn(
              'absolute top-1/2 right-2 z-10 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-night/70 text-paper backdrop-blur-sm transition-colors hover:border-gold/40 hover:text-gold disabled:pointer-events-none disabled:opacity-30',
              focusGold,
            )}
          >
            <FiChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
            {pages.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                aria-label={`Go to screenshots page ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === page ? 'w-4 bg-gold' : 'w-1.5 bg-white/35 hover:bg-white/55',
                )}
              />
            ))}
          </div>
        </>
      ) : null}

      <p className="pointer-events-none absolute top-10 right-3 z-10 rounded-full bg-night/65 px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-paper/80 backdrop-blur-sm">
        {shownStart === shownEnd ? `${shownStart}/${count}` : `${shownStart}–${shownEnd}/${count}`}
      </p>
    </div>
  )
}
