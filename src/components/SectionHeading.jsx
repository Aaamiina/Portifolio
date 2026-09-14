import { motion } from 'framer-motion'
import { fadeUp, sectionViewport } from '../data/motion'
import { labelClass } from '../lib/styles'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      inherit={false}
      className={`mb-8 max-w-2xl md:mb-10 ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className={`${labelClass} mb-3`}>{eyebrow}</p>
      <h2 className="font-display text-[1.35rem] font-bold tracking-[-0.03em] text-balance text-paper sm:text-2xl md:text-[1.85rem] md:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-[0.92rem] leading-7 text-mute sm:mt-4 sm:text-[0.95rem]">{description}</p>
      ) : null}
      <span
        className={`mt-6 block h-px w-12 bg-gradient-to-r from-gold/80 to-transparent ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </motion.div>
  )
}
