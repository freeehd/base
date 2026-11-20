import { ArrowRight, Check, Globe2, PackageCheck, Ship, Star, Store, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { images, servicesDetailed } from './site-data'
import { Kicker, LinkButton } from './ui'

const tracks = [
  {
    id: 'source-and-supply',
    image: images.industrial,
    number: '01',
    short: 'Sourcing & supply',
    heading: 'The right products for the job',
    description: 'Machinery, industrial supplies and everyday goods, sourced as single units or bulk orders.',
    action: 'Talk to us about sourcing',
    href: '/contact',
    titles: [
      'Global product sourcing',
      'New and used equipment supply',
      'Wholesale and bulk supply',
      'Industrial procurement',
    ],
  },
  {
    id: 'trade-and-logistics',
    image: images.globalFreight,
    number: '02',
    short: 'Trade & logistics',
    heading: 'From supplier to destination',
    description: 'International documentation, shipping and supply chain coordination from one team.',
    action: 'Discuss your shipment',
    href: '/contact',
    titles: [
      'Import and export support',
      'Supply chain solutions',
    ],
  },
  {
    id: 'marketplaces-and-brands',
    image: images.ecomFulfillment,
    number: '03',
    short: 'Marketplaces & brands',
    heading: 'Sell through established marketplaces',
    description: 'Marketplace operations and brand support across Amazon, Walmart, eBay and TikTok Shop.',
    action: 'Explore brand partnership',
    href: '/contact?category=Brand%20partnership',
    titles: [
      'Online marketplace selling',
      'Brand partnership',
      'OEM and private label',
    ],
  },
] as const

const serviceIcons: Record<string, LucideIcon> = {
  Check, Globe2, PackageCheck, Ship, Star, Store, Truck,
}

export function ServicesHero() {
  return (
    <section className="page-hero services-page-hero on-dark">
      <div className="container services-page-hero__layout">
        <div className="services-page-hero__copy">
          <Kicker dark>What We Do</Kicker>
          <h1>From sourcing to selling, <em>one trading partner.</em></h1>
          <p className="lead">
            We source new and used industrial equipment, generators and test instruments;
            supply wholesale household goods and dry pet food; and help brands sell through
            major online marketplaces.
          </p>
          <div className="services-page-hero__actions">
            <LinkButton href="#service-tracks">Explore Services <ArrowRight size={15} /></LinkButton>
            <LinkButton ghost href="/contact">Request a Quote</LinkButton>
          </div>
        </div>
        <nav className="services-quicknav" aria-label="Browse service pathways">
          <p className="services-quicknav__eyebrow">Find your service</p>
          <ol>
            {tracks.map((track) => (
              <li key={track.id}>
                <a href={'#' + track.id}>
                  <span className="services-quicknav__number">{track.number}</span>
                  <span>{track.short}</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
          <p className="services-quicknav__footer">Single units or bulk orders · Worldwide delivery</p>
        </nav>
      </div>
    </section>
  )
}

export function ServicesDirectory() {
  return (
    <section className="services-directory" id="service-tracks" aria-labelledby="service-tracks-title">
      <div className="container">
        <div className="services-directory__heading">
          <div>
            <Kicker index="02">Our Capabilities</Kicker>
            <h2 id="service-tracks-title">Services built around what you need to move forward.</h2>
          </div>
          <p className="lead">
            Find the right starting point, then share your requirements.
            We coordinate the sourcing, trading or marketplace work with you.
          </p>
        </div>
        {tracks.map((track) => {
          const offers = servicesDetailed.filter((service) =>
            track.titles.some((title) => title === service.title)
          )
          return (
            <section className="services-track" id={track.id} key={track.id}
              aria-labelledby={track.id + '-title'}>
              <div className="services-track__intro">
                <span className="services-track__index">{track.number} / {track.short}</span>
                <div className="services-track__visual">
                  <img src={track.image} alt="" width={960} height={500} loading="lazy" decoding="async" />
                </div>
                <h3 id={track.id + '-title'}>{track.heading}</h3>
                <p>{track.description}</p>
                <a href={track.href} className="services-track__action">
                  {track.action} <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="services-track__offers">
                {offers.map((service, index) => {
                  const Icon = serviceIcons[service.icon] ?? PackageCheck
                  return (
                    <article className="services-offer" key={service.title}>
                      <div className="services-offer__top">
                        <span>{track.number}.{index + 1}</span>
                        <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <ul aria-label={service.title + ' includes'}>
                        {service.includes.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
        <p className="services-directory__note">
          Used equipment is quoted with condition details. Availability is subject to supplier confirmation.
        </p>
      </div>
    </section>
  )
}
