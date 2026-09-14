import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="projects" className="relative">
      <div className="pointer-events-none absolute top-24 right-[8%] hidden font-display text-[8rem] font-bold leading-none text-white/[0.03] xl:block" aria-hidden="true">
        02
      </div>
      <SectionHeading
        eyebrow="Work"
        title="Featured Projects"
        description="Selected applications spanning academic systems, student platforms, operations software, and mobile."
      />

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onDetails={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
