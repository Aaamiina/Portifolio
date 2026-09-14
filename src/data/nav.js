export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = navLinks.map((link) => link.id)

export const primaryNavLinks = navLinks.filter((link) => link.id !== 'contact')
