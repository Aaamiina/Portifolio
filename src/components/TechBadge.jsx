export default function TechBadge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium tracking-wide text-gold-soft transition-colors duration-300 group-hover:border-gold/25">
      {children}
    </span>
  )
}
