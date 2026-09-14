import { FaDatabase, FaLaptopCode, FaMobileAlt, FaLayerGroup } from 'react-icons/fa'

export const services = [
  {
    id: 'web',
    title: 'Web Development',
    description:
      'Responsive and modern web applications using React and modern frontend technologies.',
    icon: FaLaptopCode,
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description:
      'Complete applications with frontend, backend APIs, authentication and databases.',
    icon: FaLayerGroup,
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications using Flutter and Dart.',
    icon: FaMobileAlt,
  },
  {
    id: 'database',
    title: 'Database Development',
    description: 'Reliable database solutions using MongoDB, MySQL and PostgreSQL.',
    icon: FaDatabase,
  },
]
