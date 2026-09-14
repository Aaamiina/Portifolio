import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, sectionViewport, stagger } from '../data/motion'
import { profile } from '../data/profile'
import { labelClass } from '../lib/styles'

export default function Education() {
  const { education } = profile

  return (
    <Section id="education">
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Formal study in computer applications, with a focus on building practical software."
        />

        <motion.div variants={fadeUp} className="relative max-w-2xl pl-8 sm:pl-10">
          <span className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-gold via-gold/30 to-transparent sm:left-[7px]" aria-hidden="true" />
          <span className="absolute top-6 left-0 h-3 w-3 rounded-full border border-gold bg-night sm:h-3.5 sm:w-3.5" aria-hidden="true" />
          <article className="rounded-[var(--radius-lg)] border border-line bg-white/[0.02] px-6 py-7 sm:px-8">
            <p className={labelClass}>Degree</p>
            <h3 className="mt-3 font-display text-[1.35rem] font-bold leading-snug tracking-[-0.03em] text-paper sm:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-3 text-sm tracking-wide text-gold-soft">{education.institution}</p>
          </article>
        </motion.div>
      </motion.div>
    </Section>
  )
}
