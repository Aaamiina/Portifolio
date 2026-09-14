export default function Section({
  id,
  children,
  className = '',
  padded = true,
  as: Component = 'section',
}) {
  const spacing = padded ? 'scroll-mt-24 py-12 sm:py-16 md:py-20' : 'scroll-mt-24'

  return (
    <Component id={id} className={`${spacing} ${className}`.trim()}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">{children}</div>
    </Component>
  )
}
