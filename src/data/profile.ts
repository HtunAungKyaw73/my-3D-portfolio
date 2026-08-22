export interface SkillGroup {
  label: string
  skills: string[]
}

export interface Project {
  name: string
  description: string
  language: string
  url: string
  stars: number
  slug: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  highlights?: string[]
}

export const profile = {
  name: 'Htun Aung Kyaw',
  role: 'Full-Stack Developer',
  tagline: 'Turning complex problems into simple, beautiful, intuitive software.',
  bio: [
    "I'm a developer with a strong foundation in both front-end and back-end technologies. I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
    'I love to learn new things and am always looking to expand my skillset — currently exploring DevOps, cloud deployment, testing libraries, and design architecture.',
  ],
  email: 'htunaungkyaw730@gmail.com',
  github: 'https://github.com/HtunAungKyaw73',
  linkedin: 'https://www.linkedin.com/in/htun-aung-kyaw-385285352/',
  stats: { repos: 51, stars: 37 },
  achievements: [
    { name: 'Pull Shark', count: 2 },
    { name: 'Pair Extraordinaire', count: 2 },
    { name: 'YOLO', count: 1 },
  ],
} as const

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'REST', 'GraphQL', 'JWT'],
  },
  {
    label: 'Data & DevOps',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Docker', 'AWS'],
  },
]

export const projects: Project[] = [
  {
    name: 'Learn-Programming-Easily',
    description: 'An interactive platform that makes learning programming approachable for beginners.',
    language: 'TypeScript',
    url: 'https://github.com/HtunAungKyaw73/Learn-Programming-Easily',
    stars: 9,
    slug: 'learn-programming-easily',
  },
  {
    name: 'Library-Hub',
    description: 'A full-stack library management hub for browsing, borrowing, and tracking books.',
    language: 'TypeScript',
    url: 'https://github.com/HtunAungKyaw73/Library-Hub',
    stars: 1,
    slug: 'library-hub',
  },
  {
    name: 'ExpressServer-JWTAuthentication',
    description: 'Backend API built on Express MVC architecture with JWT authentication.',
    language: 'JavaScript',
    url: 'https://github.com/HtunAungKyaw73/ExpressServer-JWTAuthentication',
    stars: 1,
    slug: 'express-prisma',
  },
  {
    name: 'TeleScrape',
    description: 'Telegram post scraping tool built with the Telethon library.',
    language: 'Python',
    url: 'https://github.com/HtunAungKyaw73/TeleScrape',
    stars: 1,
    slug: 'telescape',
  },
  {
    name: 'Student-and-Teacher-Record-System',
    description: 'My very first OOP project, written in C++ right after my second year.',
    language: 'C++',
    url: 'https://github.com/HtunAungKyaw73/Student-and-Teacher-Record-System',
    stars: 1,
    slug: 'student-and-teacher-record-system',
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Program Associate',
    company: 'ISP-Myanmar',
    period: '2023 — Present',
    summary:
      'In the role of Program Associate at ISP-Myanmar, I serve as a in-house developer for interactive analysis dashboards and internal utility microsites. Plus, web scraping with Python, data collection, data cleaning, data analysis, and data visualisation.',
    highlights: ["Web Development", "React", "NextJS", "RTK", "Python", "Digital Tools", "Excel", "Glide","Data Collection and Cleaning","Data Visualisation"],
  },
  {
    role: 'Founder and Instructor',
    company: 'Learn Programming Easily Education Center',
    period: '2020 - Present',
    summary:
      '2020 - Present',
    highlights: ["C++", "Python", "Digital Literacy", "Web Development", "HTML5", "CSS3", "JavaScript"],
  },
]

export const resumeUrl = '/resume.pdf'

export const sections = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'] as const

export type SectionId = (typeof sections)[number]
