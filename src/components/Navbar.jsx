import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { primaryNavLinks, sectionIds } from '../data/nav'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { cn, focusGold } from '../lib/styles'
import Button from './Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const active = useActiveSection(sectionIds)

  useFocusTrap(open, headerRef)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    document.querySelector('#mobile-menu a')?.focus()
    return undefined
  }, [open])

  const closeMenu = () => setOpen(false)
  const [firstName, ...lastNameParts] = profile.name.split(' ')
  const lastName = lastNameParts.join(' ')

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        className={cn(
          'mx-auto flex h-14 w-full max-w-7xl items-center justify-between rounded-full border px-3.5 transition-all duration-300 sm:h-[3.75rem] sm:px-5',
          scrolled || open
            ? 'border-white/10 bg-night/75 shadow-[var(--shadow-float)] backdrop-blur-2xl'
            : 'border-white/8 bg-white/[0.03] backdrop-blur-xl',
        )}
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className={cn('group flex min-w-0 items-center gap-2.5 rounded-full', focusGold)}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 font-display text-[0.7rem] font-bold tracking-wide text-gold">
            AI
          </span>
          <span className="truncate font-display text-[0.92rem] font-semibold tracking-tight text-paper transition-colors group-hover:text-gold">
            {firstName}
            {lastName ? <span className="hidden min-[400px]:inline"> {lastName}</span> : null}
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {primaryNavLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-[0.8rem] tracking-wide transition-colors duration-200',
                    focusGold,
                    isActive ? 'text-gold' : 'text-mute hover:text-paper',
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden xl:block">
          <Button href="#contact" variant="secondary" size="sm" arrow>
            Contact
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-paper transition-colors hover:border-gold/40 hover:text-gold xl:hidden',
            focusGold,
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX className="h-4 w-4" /> : <HiMenuAlt3 className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 top-[4.75rem] bottom-4 z-40 overflow-y-auto overscroll-contain rounded-[1.5rem] border border-white/10 bg-night/92 p-5 backdrop-blur-2xl sm:inset-x-5 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {primaryNavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active === link.id ? 'page' : undefined}
                    onClick={closeMenu}
                    className={cn(
                      'block rounded-2xl px-4 py-3.5 font-display text-lg font-semibold tracking-tight transition-colors',
                      focusGold,
                      active === link.id
                        ? 'bg-gold/10 text-gold'
                        : 'text-paper/80 hover:bg-white/5 hover:text-paper',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#contact" variant="primary" className="w-full" arrow onClick={closeMenu}>
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
