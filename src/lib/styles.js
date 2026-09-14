export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const focusGold =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

export const cardBase =
  'rounded-[var(--radius-lg)] border border-line bg-white/[0.025] backdrop-blur-sm transition-[border-color,box-shadow,background-color,transform] duration-300'

export const labelClass =
  'text-[0.68rem] font-medium uppercase tracking-[0.24em] text-gold'
