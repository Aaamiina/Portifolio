import { motion } from 'framer-motion'
import { fadeUp, sectionViewport } from '../data/motion'
import { cardBase } from '../lib/styles'

export default function ServiceCard({ index, title, description }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      inherit={false}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 30 } }}
      className={`group relative h-full overflow-hidden ${cardBase} px-6 pt-6 pb-7 hover:border-gold/30`}
    >
      <span className="font-display text-4xl font-bold tracking-[-0.06em] text-gold/25 transition-colors duration-300 group-hover:text-gold/45">
        {number}
      </span>
      <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.03em] text-paper">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-mute">{description}</p>
      <span className="mt-6 block h-px w-8 bg-gold/40 transition-all duration-300 group-hover:w-14" aria-hidden="true" />
    </motion.article>
  )
}
