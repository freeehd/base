import { ArrowRight } from 'lucide-react'
import { Check } from 'lucide-react'

export function Kicker({ index, children, dark = false }: { index?: string; children: React.ReactNode; dark?: boolean }) {
  return <p className={`kicker ${dark ? 'dark-kicker' : ''}`}>{index && <span>[{index}]</span>}{children}</p>
}

export function LinkButton({ children, ghost = false, href = '/contact' }: { children: React.ReactNode; ghost?: boolean; href?: string }) {
  return <a className={`btn ${ghost ? 'btn-ghost' : ''}`} href={href}>{children}</a>
}

export function Brand({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return <a className="brand" href="/" aria-label="The Base Trading home"><img src="/logo.png" alt="The Base Trading" className="brand-logo" />{showSubtitle && <small>Global Trading &amp; Industrial Solutions</small>}</a>
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
}

export function getChipClass(status: string) {
  if (status === 'Like New' || status === 'Ready to Ship') return 'chip chip-green'
  if (status === 'Low Hour' || status === 'Rebuilt') return 'chip chip-blue'
  return 'chip chip-amber'
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="arrow-link" href={href}>{children} <ArrowRight size={14} /></a>
}
