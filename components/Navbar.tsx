'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { navItems, PHONE_DISPLAY, PHONE_HREF, EMAIL } from './site-data'
import { Brand, LinkButton } from './ui'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="utility">
        <div className="container">
          <span>USA-BASED <b>·</b> GLOBAL SOURCING &amp; DELIVERY</span>
          <div>
            <a className="hide-s" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container header-inner">
          <Brand />
          <nav className="main-nav" aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className={pathname === item.href ? 'active' : ''} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="h-actions">
            <LinkButton>Request a Quote</LinkButton>
            <button className="burger" aria-label="Toggle navigation" aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}>
              {navOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="mobile-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setNavOpen(false)}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="container">
              <LinkButton>Request a Quote</LinkButton>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
