import { useState } from 'react'
import { profile, skillGroups, projects, experience } from '../data/profile'
import { Reveal } from './Reveal'

function SectionShell({
  id,
  children,
  className = '',
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative z-10 flex min-h-screen items-center px-6 md:px-16 lg:px-28 ${className}`}
    >
      {children}
    </section>
  )
}

export function HeroSection() {
  return (
    <SectionShell id="Home" className="justify-center text-center">
      <div className="w-full rounded-2xl bg-[#05060a]/70 px-4 py-8 backdrop-blur-sm sm:bg-transparent sm:px-0 sm:py-0">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan md:text-sm">
            Hello, I'm
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-glow mx-auto max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-xl text-base text-gray-400 md:text-lg">
            {profile.role} — {profile.tagline}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#Projects"
              className="rounded-full border border-neon-cyan/50 bg-neon-cyan/10 px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-neon-cyan backdrop-blur transition-all hover:bg-neon-cyan/25 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="rounded-full border border-white/15 px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-gray-300 transition-all hover:border-neon-violet/60 hover:text-neon-violet"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}

export function AboutSection() {
  return (
    <SectionShell id="About">
      <div className="max-w-2xl rounded-2xl bg-[#05060a]/70 px-4 py-8 backdrop-blur-sm sm:bg-transparent sm:px-0 sm:py-0">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-violet">
            01 · About
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-glow mb-8 text-4xl font-bold text-white md:text-5xl">
            Passionate about building things that matter.
          </h2>
        </Reveal>
        {profile.bio.map((paragraph, i) => (
          <Reveal key={i} delay={200 + i * 120}>
            <p className="mb-5 leading-relaxed text-gray-400">{paragraph}</p>
          </Reveal>
        ))}
        <Reveal delay={460}>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <p className="font-mono text-3xl font-semibold text-neon-cyan">
              {profile.stats.repos}+
              <span className="ml-2 align-middle text-xs uppercase tracking-widest text-gray-500">
                Repositories
              </span>
            </p>
            <p className="font-mono text-3xl font-semibold text-neon-pink">
              ★ {profile.stats.stars}
              <span className="ml-2 align-middle text-xs uppercase tracking-widest text-gray-500">
                GitHub Stars
              </span>
            </p>
          </div>
          <p className="mb-3 mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
            GitHub Achievements
          </p>
          <div className="flex flex-wrap gap-2">
              {profile.achievements.map((achievement) => (
                <span
                  key={achievement.name}
                  className="flex items-center gap-1.5 rounded-full border border-neon-violet/30 bg-neon-violet/10 px-3 py-1 font-mono text-xs text-neon-violet"
                  title={`Earned ${achievement.count}×`}
                >
                  {achievement.name}
                  {achievement.count > 1 && (
                    <span className="text-gray-400">×{achievement.count}</span>
                  )}
                </span>
              ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}

export function ExperienceSection() {
  if (experience.length === 0) return null
  return (
    <SectionShell id="Experience">
      <div className="w-full max-w-3xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan">
            02 · Experience
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-glow mb-10 text-4xl font-bold text-white md:text-5xl">
            Where I've worked.
          </h2>
        </Reveal>
        <div className="relative space-y-8 border-l border-white/10 pl-6 md:pl-8">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={150 + i * 100}>
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-neon-cyan bg-void shadow-[0_0_12px_rgba(34,211,238,0.7)] md:-left-[39px]" />
                <p className="font-mono text-xs uppercase tracking-widest text-gray-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {item.role}
                  <span className="text-neon-violet"> · {item.company}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-gray-400">{item.summary}</p>
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export function SkillsSection() {
  return (
    <SectionShell id="Skills" className="items-center justify-end">
      <div className="max-w-md">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-pink">
            03 · Skills
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-glow mb-8 text-4xl font-bold text-white md:text-5xl">
            Tools of the trade.
          </h2>
        </Reveal>
        <div className="space-y-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={180 + gi * 110}>
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gray-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

const langColor: Record<string, string> = {
  TypeScript: 'text-neon-cyan',
  JavaScript: 'text-yellow-400',
  Python: 'text-emerald-400',
  'C++': 'text-neon-pink',
}

function ProjectThumb({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-neon-cyan/15 via-void to-neon-violet/15 font-mono text-[10px] uppercase tracking-widest text-gray-500">
        {name.slice(0, 2).toUpperCase()}
      </div>
    )
  }
  return (
    <img
      src={`/screenshots/${slug}.png`}
      alt={`${name} screenshot`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-16 w-28 shrink-0 rounded-lg border border-white/10 object-cover"
    />
  )
}

export function ProjectsSection() {
  return (
    <SectionShell id="Projects" className="flex-col justify-center py-24">
      <div className="w-full max-w-3xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan">
            04 · Projects
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-glow mb-10 text-4xl font-bold text-white md:text-5xl">
            Things I've built.
          </h2>
        </Reveal>
        <div className="space-y-4">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={150 + i * 90}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:shadow-[0_0_32px_rgba(34,211,238,0.15)]"
              >
                <ProjectThumb slug={project.slug} name={project.name} />
                <span className="hidden font-mono text-xs text-gray-600 md:inline">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-white transition-colors group-hover:text-neon-cyan">
                    {project.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div className="hidden shrink-0 text-right font-mono text-xs sm:block">
                  <p className={langColor[project.language] ?? 'text-gray-300'}>
                    {project.language}
                  </p>
                  <p className="mt-1 text-gray-600">★ {project.stars}</p>
                </div>
                <span className="shrink-0 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-neon-cyan">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <SectionShell id="Contact" className="justify-center text-center">
      <div className="w-full max-w-xl">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-violet">
            05 · Contact
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-glow mb-6 text-4xl font-bold text-white md:text-6xl">
            Let's build something together.
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mb-10 text-gray-400">
            I'm open to new opportunities and collaborations. Reach out — my inbox is always open.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={copyEmail}
              className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-8 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-black transition-shadow hover:shadow-[0_0_32px_rgba(167,139,250,0.5)]"
            >
              {copied ? 'Email Copied!' : 'Say Hello'}
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-8 py-3 font-mono text-xs uppercase tracking-widest text-gray-300 transition-colors hover:border-neon-cyan/60 hover:text-neon-cyan"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-8 py-3 font-mono text-xs uppercase tracking-widest text-gray-300 transition-colors hover:border-neon-violet/60 hover:text-neon-violet"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-6 font-mono text-xs text-gray-500">{profile.email}</p>
        </Reveal>
        <Reveal delay={460}>
          <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-600">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  )
}
