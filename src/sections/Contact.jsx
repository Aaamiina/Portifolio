import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'
import SocialLinks from '../components/SocialLinks'
import { fadeUp, sectionViewport, stagger } from '../data/motion'
import { profile } from '../data/profile'
import { cardBase, labelClass } from '../lib/styles'

export default function Contact() {
  return (
    <Section id="contact" className="relative border-t border-white/[0.04] bg-gradient-to-b from-white/[0.02] to-transparent">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[32rem] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-3xl" aria-hidden="true" />
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <motion.div variants={fadeUp} className="mb-10 max-w-3xl md:mb-12">
          <p className={`${labelClass} mb-3`}>Contact</p>
          <h2 className="font-display text-[1.55rem] font-bold tracking-[-0.04em] text-paper sm:text-3xl md:text-[2.15rem] md:leading-[1.12]">
            Let's Build Something Meaningful.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-mute">
            Use the form to introduce yourself and describe what you need.
          </p>
          <span className="mt-6 block h-px w-12 bg-gradient-to-r from-gold/80 to-transparent" aria-hidden="true" />
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <motion.div variants={fadeUp}>
            <p className="max-w-md text-[0.95rem] leading-7 text-mute">
              I am available for web, full-stack, mobile, and database projects. GitHub, LinkedIn, and email
              links will appear here once those profiles are added.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className={labelClass}>Name</dt>
                <dd className="mt-2 text-paper">{profile.name}</dd>
              </div>
              <div>
                <dt className={labelClass}>Email</dt>
                <dd className="mt-2 text-mute">Coming soon</dd>
              </div>
              <div>
                <dt className={labelClass}>Profiles</dt>
                <dd className="mt-4">
                  <SocialLinks />
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div variants={fadeUp} className={`${cardBase} p-5 sm:p-8`}>
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
