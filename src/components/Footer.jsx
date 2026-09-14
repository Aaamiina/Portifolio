import { navLinks } from '../data/nav'
import { profile } from '../data/profile'
import { cn, focusGold } from '../lib/styles'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-black/50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-paper">{profile.name}</p>
          <p className="mt-1 text-sm text-mute">{profile.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8rem] tracking-wide text-mute sm:gap-x-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn('inline-flex min-h-10 items-center transition-colors hover:text-gold', focusGold)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>

      <div className="border-t border-white/5 pb-[env(safe-area-inset-bottom)]">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-[0.7rem] tracking-[0.16em] text-mute/80 uppercase sm:px-6 lg:px-10">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
