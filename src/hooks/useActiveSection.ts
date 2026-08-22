import { useEffect, useState } from 'react'
import { sections, type SectionId } from '../data/profile'

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('Home')

  useEffect(() => {
    let frame = 0
    const update = () => {
      const mid = window.innerHeight * 0.5
      let current: SectionId = sections[0]
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= mid) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}
