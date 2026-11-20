import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { images } from '@/components/site-data'
import { industryCopy, marketplaces, quoteHref } from '@/components/trading-content'
import { ArrowLink, LinkButton } from '@/components/ui'
import styles from './home-editorial.module.css'

const paths = [
  ['Browse equipment', 'Machinery, generators, test instruments and parts', '/products?group=equip'],
  ['Browse wholesale goods', 'Household essentials and dry pet food', '/products?group=goods'],
  ['Sell your brand online', 'Listings, fulfillment and support on US marketplaces', '#online'],
] as const


export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main id="main">
      <section className={styles.front} aria-labelledby="home-title">
        <img className="hero-visual" src={images.hero} alt="" fetchPriority="high" />
        <div className={`container ${styles.intro}`}>
          <p className={styles.origin}>Based in Hicksville, New York</p>
          <h1 id="home-title">Source here. Ship worldwide.</h1>
          <p className={styles.lead}>New and used equipment, wholesale goods, and US marketplace sales. Tell us what you need and where it’s going.</p>
          <LinkButton href="/contact#quote">Request a quote <ArrowRight size={17} aria-hidden="true" /></LinkButton>
        </div>
      </section>
      <div className={styles.routes}>
        <nav id="trade-paths" className={`container ${styles.directory}`} aria-label="What we trade">
          {paths.map(([title, description, href]) => (
            <a key={href} href={href}><strong>{title}</strong><ArrowRight size={18} aria-hidden="true" /><small>{description}</small></a>
          ))}
        </nav>
      </div>
      <section id="industries" className={styles.coverage} aria-labelledby="industries-title">
        <div className={`container ${styles.coverageGrid}`}>
          <figure className={styles.freight}>
            <img src={images.logistics} alt="Containers and cranes at a cargo terminal" loading="lazy" />
          </figure>
          <div>
            <h2 id="industries-title">What we can source</h2>
            <p>From single machines to bulk orders, we confirm availability before you commit.</p>
            <ul className={styles.sectors}>{industryCopy.map(([name]) => <li key={name}>{name}</li>)}</ul>
            <ArrowLink href="/services">Explore sourcing and shipping services</ArrowLink>
          </div>
        </div>
      </section>
      <section id="online" className={styles.market} aria-labelledby="online-title">
        <div className="container">
          <div className={styles.marketIntro}>
            <div><h2 id="online-title">Sell your brand in the US</h2><p>We handle marketplace listings, fulfillment, customer service and returns.</p></div>
            <LinkButton href={quoteHref('Brand partnership')}>Become a brand partner <ArrowRight size={17} aria-hidden="true" /></LinkButton>
          </div>
          <ul className={styles.markets} aria-label="Marketplaces">
            {marketplaces.map(([name]) => <li key={name}>{name}</li>)}
          </ul>
        </div>
      </section>
      <section id="process" className={styles.process} aria-labelledby="order-title">
        <div className="container">
          <h2 id="order-title">From request to delivery</h2>
          <ol className={styles.steps}>
            <li><span aria-hidden="true">01</span><h3>Tell us what you need</h3><p>Share the model or product, quantity and destination.</p></li>
            <li><span aria-hidden="true">02</span><h3>Review your quote</h3><p>We verify availability and share condition details for used equipment.</p></li>
            <li><span aria-hidden="true">03</span><h3>Approve your order</h3><p>We coordinate the order, paperwork and shipment.</p></li>
          </ol>
          <ArrowLink href="/services#process">See how we work</ArrowLink>
        </div>
      </section>
      <section id="about" className={styles.about} aria-labelledby="base-title">
        <div className={`container ${styles.aboutInner}`}>
          <div><h2 id="base-title">Talk to Base Trading</h2><p>Our team in Hicksville, New York handles sourcing and delivery for buyers worldwide.</p><ArrowLink href="/about">About Base Trading</ArrowLink></div>
          <LinkButton href="/contact#quote">Request a quote <ArrowRight size={17} aria-hidden="true" /></LinkButton>
        </div>
      </section>
    </main>
  )
}
