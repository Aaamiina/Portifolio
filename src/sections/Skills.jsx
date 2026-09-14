import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { fadeUp, sectionViewport, stagger } from '../data/motion'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" className="relative border-y border-white/[0.04] bg-white/[0.015]">
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical stack across frontend, backend, data, and mobile."
        />

        <div className="space-y-12 md:space-y-14">
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={stagger}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={sectionViewport}
                variants={fadeUp}
                inherit={false}
                className="mb-5 flex items-center gap-3 font-display text-sm font-semibold tracking-[0.18em] text-paper/80 uppercase"
              >
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                {group.title}
              </motion.h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    description={skill.description}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
