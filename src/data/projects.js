import daryeelDental from '../assets/daryeel-dental.jpg'
import scholarverify from '../assets/scholarverify.jpg'
import skillswap from '../assets/skillswap.jpg'
import skyNova from '../assets/sky-nova.jpg'
import sweetsPos from '../assets/sweets-pos.jpg'
import wedding from '../assets/wedding.jpg'

export const projects = [
  {
    id: 'bridging-academics',
    title: 'Bridging Students and Academics Platform',
    shortTitle: 'Academic Bridge',
    description:
      'A Flutter-based platform designed to streamline the connection between students, supervisors, and administrators. It supports task management, document submissions, and academic tracking in a role-based environment.',
    technologies: ['Flutter', 'Dart'],
    features: [
      'Student, supervisor, and administrator roles',
      'Task management',
      'Document submissions',
      'Academic tracking',
      'Role-based environment',
    ],
    github: 'https://github.com/Aaamiina/Bridging-students-and-academics-platform-using-flutter-app-',
    liveDemo: '#',
    visual: 'academic',
  },
  {
    id: 'sky-nova',
    title: 'Sky Nova Management System',
    shortTitle: 'Sky Nova',
    description:
      'A full-stack management system with separate frontend and backend applications.',
    technologies: ['Frontend', 'Backend'],
    features: ['Frontend application', 'Backend application'],
    github: 'https://github.com/aksitsinc/Sky-Nova-Managment-System',
    liveDemo: '#',
    visual: 'sky',
    image: skyNova,
  },
  {
    id: 'dental-clinic',
    title: 'Daryel Dental Clinic Management System',
    shortTitle: 'Daryel Dental',
    description:
      'A modern dental clinic management platform for managing patients, companies, agreements and company-based discounts.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Patient management',
      'Company registration',
      'Company verification',
      'Discount agreements',
      'Clinic management',
    ],
    github: 'https://github.com/Azmuu/Daryel-Dental-Clinic-Management-System',
    liveDemo: '#',
    visual: 'clinic',
    image: daryeelDental,
  },
  {
    id: 'wedding',
    title: 'Wedding App',
    shortTitle: 'Wedding App',
    description:
      'A full-stack wedding planning web app where couples can browse services, book a wedding day, manage photos, and stay updated with notifications. Admins can manage services, bookings, users, and public gallery photos.',
    about:
      'This project started as a React frontend designed to talk to a Java Spring Boot API. That backend was replaced with Node.js and Express providing the same REST endpoints, so the frontend works without Spring Boot.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'JWT',
      'React Router',
      'Axios',
      'Multer',
    ],
    features: [],
    featureGroups: [
      {
        title: 'For guests / couples',
        items: [
          'Browse home, about, services, and contact pages',
          'Register and log in',
          'Book a wedding (bride/groom names, date, phone, selected services)',
          'View booked dates',
          'Edit profile',
          'Upload and manage wedding photos after booking',
          'View personal or public wedding gallery',
          'Notifications for booking submitted and booking accepted',
        ],
      },
      {
        title: 'For admins',
        items: [
          'Manage wedding services (create, update, delete, photos)',
          'Review and accept bookings',
          'Manage users',
          'Upload public gallery photos',
          'Notifications for new bookings and contact messages',
        ],
      },
    ],
    github: 'https://github.com/Aaamiina/Wedding',
    liveDemo: '#',
    visual: 'wedding',
    image: wedding,
  },
  {
    id: 'scholarverify',
    title: 'ScholarVerify – Academic Project Verification System',
    shortTitle: 'ScholarVerify',
    description:
      'An academic project verification platform that helps universities manage project proposals, detect similar project ideas, analyze requirements and code, and provide browser-based Docker previews.',
    technologies: ['React', 'Node.js', 'FastAPI', 'Python', 'MongoDB', 'Docker', 'SBERT', 'Tree-sitter'],
    features: [
      'Project proposal submission',
      'Semantic similarity analysis',
      'Requirements matching',
      'Code structure analysis',
      'Screenshot/project consistency analysis',
      'Docker-based project preview',
      'Teacher feedback and approval workflow',
    ],
    github: '#',
    liveDemo: '#',
    visual: 'scholar',
    image: scholarverify,
  },
  {
    id: 'skillswap',
    title: 'SkillSwap – Student Skill Exchange Platform',
    shortTitle: 'SkillSwap',
    description:
      'A platform that helps students find compatible learning partners based on the skills they want to learn and the skills they can teach.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Teaching skill quiz',
      'Skill matching',
      'Compatibility scoring',
      'Availability matching',
      'Learning partner discovery',
      'Student profiles',
    ],
    github: 'https://github.com/Aaamiina/Skill_Swap',
    liveDemo: '#',
    visual: 'swap',
    image: skillswap,
  },
  {
    id: 'building-management',
    title: 'Building Management System',
    shortTitle: 'Building Management',
    description:
      'A role-based management system for managing buildings, managers, maintenance, people, approvals and reports.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    features: [
      'Role-based access control',
      'Building management',
      'Manager management',
      'Maintenance management',
      'Approval workflows',
      'Reports',
      'Authentication',
    ],
    github: 'https://github.com/Aaamiina/Building-Managment-System',
    liveDemo: '#',
    visual: 'building',
  },
  {
    id: 'sweets-pos',
    title: 'Sweets POS System',
    shortTitle: 'Sweets POS',
    description:
      'Full-stack sweets factory management system with inventory, production, sales, finance, payroll, and users.',
    about:
      'backend — Express + Prisma (SQLite) API on port 4000. sweet-fr — Next.js frontend on port 3000.',
    technologies: ['Next.js', 'Express', 'Prisma', 'SQLite'],
    features: [
      'Inventory',
      'Production',
      'Sales',
      'Finance',
      'Payroll',
      'Users',
    ],
    github: '#',
    liveDemo: '#',
    visual: 'sweets',
    image: sweetsPos,
  },
]
