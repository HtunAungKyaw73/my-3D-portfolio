import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollState } from '../three/scrollState'

gsap.registerPlugin(ScrollTrigger)

export function useScrollDriver() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      scrollState.reducedMotion = mq.matches
    }
    apply()
    mq.addEventListener('change', apply)

    const tween = gsap.to(scrollState, {
      progress: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#scroll-root',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    let last = 0
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const v = max > 0 ? (y - last) / window.innerHeight : 0
      last = y
      scrollState.velocity = gsap.utils.clamp(-1, 1, v)
    }
    const onMove = (e: MouseEvent) => {
      scrollState.mouseX = (e.clientX / window.innerWidth) * 2 - 1
      scrollState.mouseY = (e.clientY / window.innerHeight) * 2 - 1
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })

    ScrollTrigger.refresh()

    return () => {
      mq.removeEventListener('change', apply)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])
}
