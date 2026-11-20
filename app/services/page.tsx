import type { Metadata } from 'next'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { CtaBand } from '@/components/sections'
import { images } from '@/components/site-data'
import { marketplaces, quoteHref, serviceCopy } from '@/components/trading-content'
import { ArrowLink, Kicker, LinkButton } from '@/components/ui'
import styles from './service-page.module.css'

const paths = [
  { id: 'equipment', title: 'Source equipment', intro: 'Find new or used machinery, commercial generators, test instruments and spare parts. Share the model or specification, preferred condition and destination.', rows: [0, 1, 7], href: '/products?group=equip', action: 'Browse equipment' },
  { id: 'wholesale', title: 'Buy in bulk', intro: 'Source household essentials and dry pet food for retail or distribution. Tell us which products you need, your quantities and where the order is going.', rows: [3, 6, 8], href: '/products?group=goods', action: 'Browse wholesale goods' },
  { id: 'online', title: 'Sell your brand online', intro: 'Bring your products to major US marketplaces. We can handle listings, pricing, inventory, fulfillment, customer service and returns.', rows: [4, 5], href: quoteHref('Brand partnership'), action: 'Discuss a brand partnership' },
] as const

const steps = [
  ['Share what you need', 'Send the product, quantity, destination and timing. For marketplace partnerships, tell us about your brand.'],
  ['Review the proposal', 'We verify suppliers and confirm availability. For used equipment, the quote includes condition details.'],
  ['Approve and move forward', 'After approval, we coordinate the order, documentation and shipment, or agree on the next steps for your marketplace launch.'],
] as const

export const metadata: Metadata = {
  title: 'Services',
  description: 'Global sourcing, new and used supply, import and export, wholesale, online selling, brand partnership and industrial procurement.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main id="main">
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <Kicker dark>Trading services</Kicker>
            <h1 id="services-title">A trading partner from sourcing to delivery</h1>
            <p>Tell us what you’re trying to buy or sell. We’ll help you source equipment, order goods in bulk, or bring your brand to US marketplaces.</p>
          </div>
          <nav className={styles.index} aria-label="Jump to a service">
            {paths.map(({ id, title }, index) => (
              <a href={`#${id}`} key={id}><span className={styles.number} aria-hidden="true">0{index + 1}</span>{title}<ArrowDownRight size={18} aria-hidden="true" /></a>
            ))}
          </nav>
        </div>
      </section>
      <section id="services" className={styles.capabilities} aria-label="Our services">
        <div className="container">
          {paths.map(({ id, title, intro, rows, href, action }, index) => (
            <article id={id} key={id} className={styles.capability} aria-labelledby={`${id}-title`}>
              <div>
                <span className={styles.number} aria-hidden="true">SERVICE / 0{index + 1}</span>
                <h2 id={`${id}-title`}>{title}</h2>
                <p>{intro}</p>
                <ArrowLink href={href}>{action}</ArrowLink>
              </div>
              <div>
                <ul className={styles.deliverables}>
                  {rows.map(row => {
                    const [name, copy] = serviceCopy[row]
                    return <li key={name}><h3>{name}</h3><p>{copy}</p></li>
                  })}
                </ul>
                {id === 'online' && <ul className={styles.markets} aria-label="Marketplaces">{marketplaces.map(([name]) => <li key={name}>{name}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="logistics" className={styles.logistics} aria-labelledby="logistics-title">
        <div className={`container ${styles.logisticsGrid}`}>
          <div>
            <Kicker dark>Worldwide logistics</Kicker>
            <h2 id="logistics-title">Import and export support</h2>
            <p>{serviceCopy[2][1]} Tell us where your order needs to go so we can factor shipping into the quote.</p>
            <LinkButton href="/contact#quote">Talk to us about your order <ArrowRight size={16} aria-hidden="true" /></LinkButton>
          </div>
          <img src={images.logistics} alt="Shipping containers and cranes at a cargo port" loading="lazy" decoding="async" />
        </div>
      </section>
      <section id="process" className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Kicker>How it works</Kicker>
          <h2 id="process-title">What happens after you reach out</h2>
          <ol className={styles.steps}>
            {steps.map(([title, copy], index) => <li key={title}><span className={styles.number} aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}
          </ol>
        </div>
      </section>
      <CtaBand
        title={<>Let's Plan Your Next Order</>}
        copy="Tell us what you need — our team responds with availability and a tailored quotation."
      />
    </main>
  )
}
