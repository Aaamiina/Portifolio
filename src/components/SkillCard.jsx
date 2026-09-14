import { motion } from 'framer-motion'
import { fadeUp, sectionViewport } from '../data/motion'
import { cardBase } from '../lib/styles'

export default function SkillCard({ name, icon: Icon, description }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      inherit={false}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 420, damping: 30 } }}
      className={`group relative h-full overflow-hidden ${cardBase} p-5 hover:border-gold/35 hover:shadow-[var(--shadow-glow)]`}
    >
      <div className="pointer-events-none absolute -top-10 -right-8 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-gold transition-transform duration-300 group-hover:scale-105 group-hover:border-gold/30">
        <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
      </div>
      <h4 className="font-display text-[0.98rem] font-semibold tracking-tight text-paper">{name}</h4>
      <p className="mt-2 text-[0.82rem] leading-6 text-mute">{description}</p>
    </motion.article>
  )
}
