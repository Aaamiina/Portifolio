import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/Button'
import DeveloperVisual from '../components/DeveloperVisual'
import Section from '../components/Section'
import { fadeRight, fadeUp, stagger } from '../data/motion'
import { profile } from '../data/profile'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section
      id="home"
      padded={false}
      className="relative flex min-h-[88svh] items-center pt-24 pb-12 sm:pt-28 md:pb-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-12 xl:gap-16"
      >
        <motion.div variants={stagger} className="max-w-lg">
          <motion.p variants={fadeUp} className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-gold">
            {profile.title}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.04em] text-paper sm:text-4xl lg:text-[2.65rem]"
          >
            {profile.greeting}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md text-[0.92rem] leading-7 text-mute sm:text-[0.95rem] sm:leading-7"
          >
            {profile.heroDescription}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Button href="#projects" variant="primary" arrow className="w-full sm:w-auto">
              View My Projects
            </Button>
            <Button
              href={profile.cvPath}
              variant="secondary"
              download="Amina-Ibrahim-CV.pdf"
              className="w-full sm:w-auto"
            >
              Download CV
            </Button>
            <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeRight} className="w-full lg:justify-self-end">
          <DeveloperVisual />
        </motion.div>
      </motion.div>

      {!shouldReduceMotion ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[0.65rem] tracking-[0.28em] text-mute/70 uppercase md:block"
        >
          Scroll
        </motion.p>
      ) : null}
    </Section>
  )
}
