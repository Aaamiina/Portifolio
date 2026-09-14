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
      className="relative flex min-h-[100svh] items-center pt-24 pb-10 sm:min-h-[88svh] sm:pt-28 sm:pb-12 md:pb-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid w-full items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)] lg:gap-12 xl:gap-16"
      >
        <motion.div variants={stagger} className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <motion.p variants={fadeUp} className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-gold sm:mb-4 sm:text-[0.68rem]">
            {profile.title}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-[1.7rem] font-bold leading-[1.15] tracking-[-0.04em] text-balance text-paper min-[380px]:text-[1.9rem] sm:text-4xl lg:text-[2.65rem]"
          >
            {profile.greeting}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-md text-[0.92rem] leading-7 text-mute sm:mt-5 sm:text-[0.95rem] lg:mx-0"
          >
            {profile.heroDescription}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex w-full flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
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

        <motion.div variants={fadeRight} className="mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-end">
          <DeveloperVisual />
        </motion.div>
      </motion.div>

      {!shouldReduceMotion ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[0.65rem] tracking-[0.28em] text-mute/70 uppercase md:block"
        >
          Scroll
        </motion.p>
      ) : null}
    </Section>
  )
}
