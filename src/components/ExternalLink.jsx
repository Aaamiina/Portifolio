export default function ExternalLink({
  href,
  children,
  className = '',
  label,
  download,
}) {
  const isPlaceholder = !href || href === '#'

  return (
    <a
      href={isPlaceholder ? '#' : href}
      className={className}
      aria-label={isPlaceholder ? `${label} (link coming soon)` : label}
      aria-disabled={isPlaceholder ? true : undefined}
      title={isPlaceholder ? 'Link coming soon' : undefined}
      download={download && !isPlaceholder ? download : undefined}
      onClick={(event) => {
        if (isPlaceholder) event.preventDefault()
      }}
      {...(!isPlaceholder && !download
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}
    </a>
  )
}
