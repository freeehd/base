'use client'

import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function ScrollEffects() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.add('js')
    const toTop = document.getElementById('to-top')
    const onScroll = () => {
      if (toTop) toTop.classList.toggle('show', window.scrollY > 640)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [pathname])

  return (
    <button id="to-top" className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUp size={16} />
    </button>
  )
}
