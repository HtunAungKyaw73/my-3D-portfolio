import { useMemo, useState } from 'react'
import { useScrollDriver } from './hooks/useScrollDriver'
import { useActiveSection } from './hooks/useActiveSection'
import { hasWebGL } from './three/webgl'
import { Experience } from './three/Experience'
import { SceneErrorBoundary } from './ui/SceneErrorBoundary'
import { Nav } from './ui/Nav'
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from './ui/Sections'

export default function App() {
  const [sceneFailed, setSceneFailed] = useState(false)
  const webglSupported = useMemo(() => hasWebGL(), [])
  const showScene = webglSupported && !sceneFailed

  useScrollDriver()
  const active = useActiveSection()

  return (
    <div id="scroll-root" className="relative">
      {showScene ? (
        <SceneErrorBoundary onFallback={() => setSceneFailed(true)}>
          <Experience />
        </SceneErrorBoundary>
      ) : (
        <div
          className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,#0e1a2f_0%,#05060a_60%)]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Nav active={active} />
    </div>
  )
}
