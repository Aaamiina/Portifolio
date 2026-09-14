import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa'
import { useFocusTrap } from '../hooks/useFocusTrap'
import { cn, focusGold } from '../lib/styles'
import ExternalLink from './ExternalLink'
import ProjectVisual from './ProjectVisual'
import TechBadge from './TechBadge'

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useFocusTrap(Boolean(project), dialogRef)

  useEffect(() => {
    if (!project) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            tabIndex={-1}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            aria-describedby="project-dialog-description"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[min(92svh,900px)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.2rem] border border-white/10 bg-charcoal shadow-[var(--shadow-float)] sm:rounded-[1.4rem]"
          >
            <div className="min-h-0 overflow-y-auto overscroll-contain">
              <ProjectVisual
                type={project.visual}
                title={project.shortTitle}
                image={project.image}
                className="aspect-[16/10]"
              />

              <div className="p-4 sm:p-7">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 id="project-dialog-title" className="font-display text-lg font-bold leading-snug tracking-[-0.03em] text-paper sm:text-2xl">
                    {project.title}
                  </h3>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    className={cn(
                      'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-paper/80 transition-colors hover:border-gold/40 hover:text-gold',
                      focusGold,
                    )}
                    aria-label="Close dialog"
                  >
                    <FaTimes />
                  </button>
                </div>

                <p id="project-dialog-description" className="mt-3 text-sm leading-7 text-mute">
                  {project.description}
                </p>

                {project.about ? (
                  <p className="mt-4 text-sm leading-7 text-mute">{project.about}</p>
                ) : null}

                {(project.featureGroups?.length
                  ? project.featureGroups
                  : project.features.length
                    ? [{ title: 'Features', items: project.features }]
                    : []
                ).map((group) => (
                  <div key={group.title}>
                    <h4 className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      {group.title}
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {group.items.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-paper/85">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {project.technologies.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <TechBadge>{tech}</TechBadge>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  <ExternalLink
                    href={project.github}
                    label={`${project.shortTitle} GitHub repository`}
                    className={cn(
                      'inline-flex h-10 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-paper transition-colors hover:border-gold/40 hover:text-gold',
                      focusGold,
                    )}
                  >
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </ExternalLink>
                  <ExternalLink
                    href={project.liveDemo}
                    label={`${project.shortTitle} live demo`}
                    className={cn(
                      'inline-flex h-10 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-medium text-paper transition-colors hover:border-gold/40 hover:text-gold',
                      focusGold,
                    )}
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" aria-hidden="true" />
                    Live Demo
                  </ExternalLink>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
