import { ArrowDownRight, ArrowRight, Boxes, Construction } from 'lucide-react'
import { images } from './site-data'
import { LinkButton } from './ui'

const paths = [
  { label: 'Industrial sourcing', title: 'Equipment & parts', copy: 'New and used machinery, commercial power, test instruments and spare parts.', action: 'Browse equipment', href: '/products?group=equip', Icon: Construction },
  { label: 'Wholesale & retail', title: 'Consumer goods', copy: 'Household essentials and dry pet food for retailers, distributors and online sellers.', action: 'Browse wholesale goods', href: '/products?group=goods', Icon: Boxes },
] as const

export default function TradeFront() {
  return (
    <>
      <section className="trade-front" aria-labelledby="trade-front-title">
        <div className="container trade-front-grid">
          <div className="trade-intro">
            <p className="trade-eyebrow"><span /> Trading & distribution</p>
            <h1 id="trade-front-title">A trading partner for equipment and everyday goods</h1>
            <p className="lead">Source machinery for your next project, buy consumer goods in bulk, or bring your brand to major US marketplaces.</p>
            <div className="trade-actions">
              <LinkButton>Request a quote <ArrowRight size={18} aria-hidden="true" /></LinkButton>
              <a className="trade-text-link" href="#trade-paths">Explore what we trade <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="hero-visual trade-image">
            <img src={images.hero} alt="Heavy equipment in an industrial yard" fetchPriority="high" />
            <figcaption><span>Industrial sourcing</span><span>New & used equipment</span></figcaption>
          </figure>
        </div>
      </section>
      <section id="trade-paths" className="trade-paths" aria-label="What we trade">
        <div className="container trade-path-grid">
          {paths.map(({ label, title, copy, action, href, Icon }) => (
            <a key={href} className="trade-path" href={href}>
              <Icon size={27} aria-hidden="true" />
              <div><p className="trade-eyebrow">{label}</p><h2>{title}</h2><p>{copy}</p><span className="trade-path-action">{action}</span></div>
              <ArrowRight className="trade-path-arrow" size={22} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
