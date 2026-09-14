import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, sectionViewport, stagger } from '../data/motion'
import { profile } from '../data/profile'
import { cardBase, labelClass } from '../lib/styles'

const highlights = [
  {
    title: 'Education',
    text: "Bachelor's Degree in Computer Applications",
  },
  {
    title: 'Focus',
    text: 'Frontend, backend, databases, and mobile development',
  },
  {
    title: 'Approach',
    text: 'Modern, responsive applications for real-world problems',
  },
]

export default function About() {
  const [lead, ...rest] = profile.about

  return (
    <Section id="about" className="relative">
      <div className="pointer-events-none absolute top-24 right-[8%] hidden font-display text-[8rem] font-bold leading-none text-white/[0.03] xl:block" aria-hidden="true">
        01
      </div>
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="max-w-xl font-display text-lg leading-8 tracking-[-0.02em] text-paper sm:text-[1.15rem] sm:leading-8">
              {lead}
            </p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="max-w-xl text-[0.95rem] leading-7 text-mute">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.ul variants={stagger} className="grid gap-3 lg:pt-4">
            {highlights.map((item, index) => (
              <motion.li
                key={item.title}
                variants={fadeUp}
                className={`${cardBase} group flex gap-4 px-5 py-5 hover:border-gold/30`}
              >
                <span className="font-display text-sm font-semibold text-gold/70" aria-hidden="true">
                  0{index + 1}
                </span>
                <div>
                  <p className={labelClass}>{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/90">{item.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </Section>
  )
}
