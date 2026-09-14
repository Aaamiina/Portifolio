import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'
import { cn, focusGold } from '../lib/styles'
import ExternalLink from './ExternalLink'

const items = [
  { key: 'github', href: profile.social.github, label: 'GitHub', icon: FaGithub },
  { key: 'linkedin', href: profile.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { key: 'email', href: profile.social.email, label: 'Email', icon: FaEnvelope },
]

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={cn('flex items-center gap-2.5', className)}>
      {items.map(({ key, href, label, icon: Icon }) => (
        <li key={key}>
          <ExternalLink
            href={href}
            label={label}
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-paper/80 transition-colors duration-200 hover:border-gold/45 hover:text-gold',
              focusGold,
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
