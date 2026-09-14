export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-night" />
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="absolute -top-32 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />
      <div className="absolute top-[38%] -left-24 h-72 w-72 rounded-full bg-gold/[0.04] blur-[100px]" />
      <div className="absolute right-[-8%] top-[18%] h-80 w-80 rounded-full bg-amber-900/20 blur-[110px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
    </div>
  )
}
