import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { sectionViewport, stagger } from '../data/motion'
import { services } from '../data/services'

export default function Services() {
  return (
    <Section id="services" className="border-y border-white/[0.04] bg-white/[0.015]">
      <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <SectionHeading
          eyebrow="Services"
          title="What I can help with"
          description="End-to-end product work across web, mobile, and data."
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
