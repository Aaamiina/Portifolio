import { FiArrowUpRight } from 'react-icons/fi'
import { cn, focusGold } from '../lib/styles'

const variants = {
  primary:
    'bg-gold text-ink hover:bg-gold-soft shadow-[0_0_0_1px_rgba(201,164,92,0.28)] hover:shadow-[var(--shadow-glow)]',
  secondary:
    'border border-gold/40 bg-transparent text-gold hover:border-gold hover:bg-gold/10',
  ghost:
    'border border-white/12 bg-white/[0.03] text-paper hover:border-gold/35 hover:text-gold',
}

const sizes = {
  sm: 'h-10 min-h-10 px-4 text-[0.8rem]',
  md: 'h-11 min-h-11 px-5 text-[0.82rem]',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  const Component = as

  return (
    <Component
      className={cn(
        'group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300',
        'active:scale-[0.98]',
        focusGold,
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {arrow ? (
        <FiArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </Component>
  )
}
