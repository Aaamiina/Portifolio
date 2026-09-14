const visuals = {
  scholar: {
    label: 'Academic verification workspace',
    accent: 'from-amber-900/40 via-charcoal to-night',
  },
  swap: {
    label: 'Skill matching interface',
    accent: 'from-yellow-900/30 via-charcoal to-night',
  },
  building: {
    label: 'Building operations dashboard',
    accent: 'from-stone-800/50 via-charcoal to-night',
  },
  clinic: {
    label: 'Clinic management workspace',
    accent: 'from-orange-950/40 via-charcoal to-night',
  },
  sky: {
    label: 'Sky Nova management system',
    accent: 'from-slate-800/40 via-charcoal to-night',
  },
  academic: {
    label: 'Academic bridging mobile platform',
    accent: 'from-emerald-950/30 via-charcoal to-night',
  },
  employee: {
    label: 'Employee management workspace',
    accent: 'from-stone-900/50 via-charcoal to-night',
  },
  wedding: {
    label: 'Wedding management system',
    accent: 'from-rose-950/25 via-charcoal to-night',
  },
  sweets: {
    label: 'Sweets factory POS system',
    accent: 'from-pink-950/30 via-charcoal to-night',
  },
}

function ScholarGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="36" y="28" width="150" height="124" rx="10" fill="#1a1a1d" stroke="#d4af37" strokeOpacity="0.35" />
      <rect x="52" y="48" width="118" height="8" rx="4" fill="#d4af37" fillOpacity="0.7" />
      <rect x="52" y="66" width="96" height="6" rx="3" fill="#71717a" />
      <rect x="52" y="82" width="108" height="6" rx="3" fill="#52525b" />
      <rect x="52" y="98" width="72" height="6" rx="3" fill="#52525b" />
      <rect x="52" y="122" width="54" height="14" rx="4" fill="#d4af37" fillOpacity="0.85" />
      <circle cx="232" cy="78" r="38" fill="#121214" stroke="#d4af37" strokeOpacity="0.55" />
      <path d="M232 56 l14 8 v16 c0 12-8 22-14 26-6-4-14-14-14-26V64z" fill="#d4af37" fillOpacity="0.85" />
    </svg>
  )
}

function SwapGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <circle cx="108" cy="90" r="42" fill="#17171a" stroke="#d4af37" strokeOpacity="0.45" />
      <circle cx="212" cy="90" r="42" fill="#17171a" stroke="#e8c872" strokeOpacity="0.4" />
      <path d="M142 78 h36" stroke="#d4af37" strokeWidth="2" />
      <path d="M178 102 h-36" stroke="#d4af37" strokeWidth="2" />
      <path d="M170 72 l12 6 -12 6" fill="none" stroke="#d4af37" strokeWidth="2" />
      <path d="M150 96 l-12 6 12 6" fill="none" stroke="#d4af37" strokeWidth="2" />
      <circle cx="108" cy="78" r="8" fill="#d4af37" />
      <rect x="94" y="92" width="28" height="16" rx="8" fill="#d4af37" fillOpacity="0.35" />
      <circle cx="212" cy="78" r="8" fill="#e8c872" />
      <rect x="198" y="92" width="28" height="16" rx="8" fill="#e8c872" fillOpacity="0.3" />
    </svg>
  )
}

function BuildingGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="70" y="48" width="70" height="104" rx="4" fill="#1c1c20" stroke="#d4af37" strokeOpacity="0.3" />
      <rect x="154" y="28" width="96" height="124" rx="4" fill="#161618" stroke="#d4af37" strokeOpacity="0.45" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={84 + col * 24}
            y={64 + row * 20}
            width="14"
            height="10"
            rx="1.5"
            fill="#d4af37"
            fillOpacity={row === 3 && col === 0 ? 0.9 : 0.25}
          />
        )),
      )}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`b-${row}-${col}`}
            x={168 + col * 26}
            y={44 + row * 20}
            width="16"
            height="11"
            rx="1.5"
            fill="#d4af37"
            fillOpacity={0.2 + ((row + col) % 3) * 0.15}
          />
        )),
      )}
    </svg>
  )
}

function ClinicGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="48" y="40" width="224" height="108" rx="14" fill="#17171a" stroke="#d4af37" strokeOpacity="0.35" />
      <rect x="68" y="58" width="88" height="72" rx="8" fill="#121214" />
      <path
        d="M112 78c-8 0-12 8-12 14 0 14 12 24 12 24s12-10 12-24c0-6-4-14-12-14z"
        fill="#d4af37"
        fillOpacity="0.85"
      />
      <rect x="176" y="62" width="76" height="8" rx="4" fill="#d4af37" fillOpacity="0.7" />
      <rect x="176" y="80" width="60" height="6" rx="3" fill="#52525b" />
      <rect x="176" y="96" width="68" height="6" rx="3" fill="#3f3f46" />
      <rect x="176" y="114" width="40" height="12" rx="4" fill="#d4af37" fillOpacity="0.45" />
    </svg>
  )
}

function SkyGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="36" y="36" width="112" height="108" rx="12" fill="#17171a" stroke="#d4af37" strokeOpacity="0.4" />
      <rect x="172" y="36" width="112" height="108" rx="12" fill="#121214" stroke="#d4af37" strokeOpacity="0.28" />
      <rect x="52" y="52" width="80" height="8" rx="4" fill="#d4af37" fillOpacity="0.75" />
      <rect x="52" y="70" width="64" height="6" rx="3" fill="#52525b" />
      <rect x="52" y="86" width="72" height="6" rx="3" fill="#3f3f46" />
      <rect x="52" y="114" width="48" height="12" rx="4" fill="#d4af37" fillOpacity="0.45" />
      <rect x="188" y="52" width="80" height="8" rx="4" fill="#e8c872" fillOpacity="0.55" />
      <rect x="188" y="70" width="56" height="6" rx="3" fill="#52525b" />
      <rect x="188" y="86" width="70" height="6" rx="3" fill="#3f3f46" />
      <rect x="188" y="114" width="48" height="12" rx="4" fill="#d4af37" fillOpacity="0.3" />
    </svg>
  )
}

function AcademicGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="118" y="28" width="84" height="124" rx="16" fill="#17171a" stroke="#d4af37" strokeOpacity="0.45" />
      <rect x="128" y="42" width="64" height="88" rx="8" fill="#121214" />
      <circle cx="160" cy="78" r="14" fill="#d4af37" fillOpacity="0.85" />
      <rect x="146" y="98" width="28" height="18" rx="8" fill="#d4af37" fillOpacity="0.35" />
      <circle cx="62" cy="78" r="22" fill="#17171a" stroke="#d4af37" strokeOpacity="0.35" />
      <circle cx="258" cy="78" r="22" fill="#17171a" stroke="#e8c872" strokeOpacity="0.35" />
      <circle cx="62" cy="72" r="6" fill="#d4af37" />
      <rect x="50" y="84" width="24" height="12" rx="6" fill="#d4af37" fillOpacity="0.3" />
      <circle cx="258" cy="72" r="6" fill="#e8c872" />
      <rect x="246" y="84" width="24" height="12" rx="6" fill="#e8c872" fillOpacity="0.3" />
    </svg>
  )
}

function EmployeeGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="40" y="36" width="240" height="108" rx="12" fill="#17171a" stroke="#d4af37" strokeOpacity="0.3" />
      {[0, 1, 2].map((index) => (
        <g key={index}>
          <circle cx={78 + index * 78} cy="78" r="14" fill="#d4af37" fillOpacity={0.85 - index * 0.18} />
          <rect x={60 + index * 78} y="100" width="36" height="8" rx="4" fill="#d4af37" fillOpacity="0.28" />
        </g>
      ))}
    </svg>
  )
}

function WeddingGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <circle cx="160" cy="88" r="40" fill="#17171a" stroke="#d4af37" strokeOpacity="0.45" />
      <path d="M160 64 c10 12 16 20 16 30 0 12-8 20-16 20s-16-8-16-20c0-10 6-18 16-30z" fill="#d4af37" fillOpacity="0.8" />
    </svg>
  )
}

function SweetsGraphic() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" role="presentation" aria-hidden="true">
      <rect x="40" y="36" width="240" height="108" rx="12" fill="#17171a" stroke="#d4af37" strokeOpacity="0.35" />
      <rect x="58" y="52" width="88" height="76" rx="8" fill="#121214" stroke="#d4af37" strokeOpacity="0.25" />
      <circle cx="102" cy="84" r="18" fill="#d4af37" fillOpacity="0.75" />
      <rect x="84" y="106" width="36" height="8" rx="4" fill="#d4af37" fillOpacity="0.35" />
      <rect x="164" y="56" width="96" height="10" rx="4" fill="#d4af37" fillOpacity="0.7" />
      <rect x="164" y="76" width="72" height="7" rx="3" fill="#52525b" />
      <rect x="164" y="92" width="84" height="7" rx="3" fill="#3f3f46" />
      <rect x="164" y="110" width="48" height="14" rx="4" fill="#d4af37" fillOpacity="0.45" />
    </svg>
  )
}

const graphics = {
  scholar: ScholarGraphic,
  swap: SwapGraphic,
  building: BuildingGraphic,
  clinic: ClinicGraphic,
  sky: SkyGraphic,
  academic: AcademicGraphic,
  employee: EmployeeGraphic,
  wedding: WeddingGraphic,
  sweets: SweetsGraphic,
}

export default function ProjectVisual({ type, title, image, className = '' }) {
  const config = visuals[type] ?? visuals.scholar
  const Graphic = graphics[type] ?? ScholarGraphic

  if (image) {
    return (
      <div className="relative overflow-hidden bg-[#101012]">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/18" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
        </div>
        <div className={className ? `relative overflow-hidden ${className}` : undefined}>
          <img
            src={image}
            alt={`${title} screenshot`}
            className={className ? 'absolute inset-0 h-full w-full object-cover object-top' : 'block w-full'}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${config.accent} ${className}`.trim()}
      role="img"
      aria-label={`${title} project preview placeholder`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,164,92,0.14),transparent_46%)]" />
      <div className="h-full w-full origin-center transition-transform duration-700 ease-out group-hover:scale-[1.06]">
        <Graphic />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-night/85 to-transparent" />
      <span className="sr-only">{config.label}</span>
    </div>
  )
}
