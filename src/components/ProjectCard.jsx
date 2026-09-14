import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { fadeUp, sectionViewport } from '../data/motion'
import { cardBase, cn, focusGold } from '../lib/styles'
import Button from './Button'
import ExternalLink from './ExternalLink'
import ProjectVisual from './ProjectVisual'
import TechBadge from './TechBadge'

const VISIBLE_TECH = 3

function projectSubtitle(title) {
  if (!title.includes('–')) return null
  return title.split('–')[1]?.trim() ?? null
}

export default function ProjectCard({ project, onDetails }) {
  const subtitle = projectSubtitle(project.title)
  const visibleTech = project.technologies.slice(0, VISIBLE_TECH)
  const extraTech = project.technologies.length - visibleTech.length

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      inherit={false}
      className={cn(
        'group flex h-full flex-col overflow-hidden hover:border-gold/30 hover:shadow-[var(--shadow-glow)]',
        cardBase,
      )}
    >
      <div className="relative border-b border-white/8">
        <ProjectVisual
          type={project.visual}
          title={project.shortTitle}
          image={project.image}
          className="aspect-[16/10]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-end p-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-night/70 px-2.5 py-1 text-[0.7rem] tracking-wide text-gold opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            View details
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="mb-2 font-mono text-[0.6rem] tracking-[0.22em] text-gold/80 uppercase">
          {project.shortTitle}
        </p>
        <h3 className="font-display text-[1.05rem] font-bold leading-snug tracking-[-0.03em] text-paper sm:text-lg">
          {subtitle ?? project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[0.82rem] leading-6 text-mute">{project.description}</p>

        {visibleTech.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {visibleTech.map((tech) => (
              <li key={tech}>
                <TechBadge>{tech}</TechBadge>
              </li>
            ))}
            {extraTech > 0 ? (
              <li>
                <TechBadge>+{extraTech}</TechBadge>
              </li>
            ) : null}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <Button as="button" type="button" variant="primary" size="sm" arrow onClick={() => onDetails(project)}>
            View Details
          </Button>
          <div className="ms-auto flex items-center gap-1.5">
            <ExternalLink
              href={project.github}
              label={`${project.shortTitle} GitHub repository`}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-paper/80 transition-colors hover:border-gold/40 hover:text-gold',
                focusGold,
              )}
            >
              <FaGithub aria-hidden="true" />
            </ExternalLink>
            <ExternalLink
              href={project.liveDemo}
              label={`${project.shortTitle} live demo`}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-paper/80 transition-colors hover:border-gold/40 hover:text-gold',
                focusGold,
              )}
            >
              <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
