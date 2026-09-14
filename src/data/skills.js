import { FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { MdOutlineApi } from 'react-icons/md'
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si'

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      {
        name: 'HTML5',
        icon: FaHtml5,
        description: 'Semantic markup for accessible, well-structured web pages.',
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        description: 'Responsive layouts, visual design, and modern interface styling.',
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        description: 'Interactive client-side logic and application behavior.',
      },
      {
        name: 'React.js',
        icon: FaReact,
        description: 'Component-driven user interfaces for scalable web apps.',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        description: 'Utility-first styling for consistent, maintainable UI.',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: FaNodeJs,
        description: 'Server-side JavaScript for APIs and application backends.',
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        description: 'Lightweight routing and middleware for REST services.',
      },
      {
        name: 'PHP',
        icon: FaPhp,
        description: 'Server-side scripting for web applications and APIs.',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [
      {
        name: 'MongoDB',
        icon: SiMongodb,
        description: 'Document storage for flexible application data models.',
      },
      {
        name: 'MySQL',
        icon: SiMysql,
        description: 'Relational data modeling for structured business systems.',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        description: 'Reliable relational database for complex, durable data.',
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    skills: [
      {
        name: 'Flutter',
        icon: SiFlutter,
        description: 'Cross-platform mobile apps from a single codebase.',
      },
      {
        name: 'Dart',
        icon: SiDart,
        description: 'Language foundation for Flutter mobile applications.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        icon: FaGitAlt,
        description: 'Version control for tracked, collaborative development.',
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        description: 'Code hosting, reviews, and project collaboration.',
      },
      {
        name: 'Docker',
        icon: FaDocker,
        description: 'Containerized environments for consistent app delivery.',
      },
      {
        name: 'REST APIs',
        icon: MdOutlineApi,
        description: 'Structured HTTP interfaces between clients and services.',
      },
    ],
  },
]
