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
  stack: string[]
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
    name: 'The Tipping Point — Myanmar Deforestation',
    description:
      'Scrollytelling data story on 25 years of tree cover loss in Myanmar (5.37M ha, 12.5% of 2000 forest) — built from Global Forest Watch data (30% canopy threshold). Scroll-driven choropleth with hand-rolled lon/lat projection & zoom, plus interactive trend, driver & carbon charts. Vanilla JS/SVG, D3 + Scrollama, no build step. Live: myanmar-deforestation-scrollytellin.vercel.app',
    language: 'JavaScript',
    url: 'https://github.com/HtunAungKyaw73/myanmar-deforestation-scrollytelling',
    stars: 0,
    slug: 'myanmar-deforestation-scrollytelling',
    stack: ['JavaScript', 'D3.js', 'Scrollama', 'SVG', 'Canvas', 'GeoJSON', 'Global Forest Watch'],
  },
  {
    name: 'Learn-Programming-Easily',
    description: 'An interactive platform that makes learning programming approachable for beginners.',
    language: 'TypeScript',
    url: 'https://github.com/HtunAungKyaw73/Learn-Programming-Easily',
    stars: 9,
    slug: 'learn-programming-easily',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'MDX', 'Auth.js', 'Tailwind CSS'],
  },
  {
    name: 'SoulScript',
    description:
              "A micro-journaling & mood-mapping app built with a team. Journal entries are AES-256-GCM encrypted before ever reaching the database, while AI analyzes your emotions and renders them on an interactive mood calendar — all wrapped in a frosted-glass UI with fluid animations. Features Supabase Row-Level Security, server-side rate limiting, bilingual Burmese/English support via Unicode detection, soft-delete undo, and a Vitest test suite.",
    language: 'TypeScript',
    url: 'https://github.com/vibe-code-tours/team-19-app',
    stars: 4,
    slug: 'soulscript',
    stack: ['Next.js', 'Supabase', 'OpenRouter AI', 'TanStack Query', 'AES-256-GCM', 'Tailwind CSS', 'Vitest'],
  },
  {
    name: 'Library-Hub',
    description: 'A full-stack library management hub for browsing, borrowing, and tracking books.',
    language: 'TypeScript',
    url: 'https://github.com/HtunAungKyaw73/Library-Hub',
    stars: 1,
    slug: 'library-hub',
    stack: ['Next.js', 'React', 'RTK Query', 'AG Grid', 'Shadcn/ui', 'Baserow DB'],
  },
  {
    name: 'ExpressServer-JWTAuthentication',
    description: 'Backend API built on Express MVC architecture with JWT authentication.',
    language: 'JavaScript',
    url: 'https://github.com/HtunAungKyaw73/ExpressServer-JWTAuthentication',
    stars: 1,
    slug: 'express-prisma',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
  },
  {
    name: 'TeleScrape',
    description: 'Telegram post scraping tool built with the Telethon library.',
    language: 'Python',
    url: 'https://github.com/HtunAungKyaw73/TeleScrape',
    stars: 1,
    slug: 'telescape',
    stack: ['Python', 'Telethon'],
  },
  {
    name: 'Student-and-Teacher-Record-System',
    description: 'My very first OOP project, written in C++ right after my second year.',
    language: 'C++',
    url: 'https://github.com/HtunAungKyaw73/Student-and-Teacher-Record-System',
    stars: 1,
    slug: 'student-and-teacher-record-system',
    stack: ['C++'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Program Associate',
    company: 'ISP-Myanmar',
    period: '2023 — Present',
    summary:
      'In the role of Program Associate at ISP-Myanmar, I serve as a in-house developer for interactive analysis dashboards and internal utility microsites. Plus, web scraping with Python, data collection, data cleaning, data analysis, and data visualisation.',
    highlights: ["Web Development", "React", "NextJS", "RTK", "Python", "Digital Tools", "Excel","Data Collection and Cleaning","Data Visualisation"],
  },
  {
    role: 'Founder and Instructor',
    company: 'Learn Programming Easily Education Center',
    period: '2020 - Present',
    summary:
      'It involves Developing course materials, conducting lessons, and mentoring students to enhance their coding skills. Conducted interactive classes that fostered student engagement and participation. Mentored students individually to address their unique learning needs',
    highlights: ["C++", "Python", "Digital Literacy", "Web Development", "HTML5", "CSS3", "JavaScript"],
  },
]

export const resumeUrl = '/resume.pdf'

export const sections = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'] as const

export type SectionId = (typeof sections)[number]
