import { profile, resumeUrl, sections, type SectionId } from '../data/profile'
import { scrollState } from '../three/scrollState'

export function Nav({ active }: { active: SectionId }) {
  const jump = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-sm font-semibold tracking-widest text-gray-100"
        >
          HAK<span className="text-neon-cyan">.</span>
        </button>
        <nav className="flex items-center gap-4 font-mono text-xs text-gray-400 md:gap-6">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neon-cyan/40 px-3.5 py-1.5 text-neon-cyan transition-all hover:bg-neon-cyan/15"
          >
            Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-neon-cyan">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-neon-cyan">
            LinkedIn
          </a>
        </nav>
      </header>

      <nav
        className="fixed right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-4 md:right-8"
        aria-label="Sections"
      >
        {sections.map((s) => (
          <button
            key={s}
            onClick={() => jump(s)}
            className="group flex items-center justify-end gap-2"
            aria-label={`Go to ${s}`}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                active === s
                  ? 'text-neon-cyan opacity-100'
                  : 'text-gray-500 opacity-0 group-hover:opacity-100'
              }`}
            >
              {s}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === s
                  ? 'h-2.5 w-2.5 bg-neon-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]'
                  : 'h-1.5 w-1.5 bg-gray-600 group-hover:bg-gray-400'
              }`}
            />
          </button>
        ))}
      </nav>

      <div className="fixed bottom-5 left-1/2 z-30 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500 md:left-10 md:translate-x-0">
        {scrollState.reducedMotion ? '' : 'scroll ↓'}
      </div>
    </>
  )
}
