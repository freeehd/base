import {
  ArrowRight, Building2, Check, CircleDot, Factory, Flame, Globe2, HardHat,
  Landmark, Mountain, PackageCheck, ShieldCheck, Ship, Star, Store, Tractor, Truck, Zap,
} from 'lucide-react'
import {
  aboutStats, categories, homeIndustries, images, industries, logiPoints,
  processStepsDetailed, servicesDetailed, servicesTeaser, sourcingSteps, trustItems,
  valuesList, whatsNextSteps, whyItems,
} from './site-data'
import { ArrowLink, CheckList, Kicker, LinkButton } from './ui'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Building2, Check, CircleDot, Factory, Flame, Globe2, HardHat, Landmark,
  Mountain, PackageCheck, ShieldCheck, Ship, Star, Store, Tractor, Truck, Zap,
}

/* ---------------- HOME ---------------- */

export function Hero() {
  return (
    <section className="hero on-dark" id="home">
      <div className="container hero-grid">
        <div>
          <Kicker index="EST. USA" dark>Company Presentation · 2026</Kicker>
          <h1>Global Trading &amp; Industrial Supply Solutions <em>You Can Trust</em></h1>
          <p className="lead">Outsourcing and delivering premium Earth-Moving Machinery, Industrial Equipment, Electrical Systems, all types of Generators, and Mechanical Solutions to serve industries worldwide.</p>
          <div className="hero-ctas">
            <LinkButton>Request a Quote <ArrowRight size={15} /></LinkButton>
            <LinkButton ghost href="/products">Explore Equipment Categories</LinkButton>
          </div>
          <ul className="hero-chips">
            {['Earth-Moving Machinery', 'Industrial Equipment', 'Electrical Systems', 'Generators', 'Mechanical Solutions'].map((item) => <li key={item}>+ {item}</li>)}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="frame">
            <img src={images.hero} alt="Heavy earth-moving machinery on an industrial yard at dawn" fetchPriority="high" />
          </div>
          <div className="plate">
            <small>Representative Inventory</small>
            <strong>Diesel Generator Set</strong>
            <span>Standby Power · Diesel · LIKE NEW</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <div className="trust on-dark">
      <div className="container trust-grid">
        {trustItems.map(([title, copy, icon]) => {
          const Icon = iconMap[icon]
          return (
            <div className="t-item" key={title}>
              <h4><Icon size={16} />{title}</h4>
              <p>{copy}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function AboutTeaser() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-sticky reveal">
          <Kicker index="01">About Base Trading</Kicker>
          <h2>Building Long-Term Business Partnerships Across Global Markets</h2>
        </div>
        <div className="reveal">
          <p>The Base Trading is a trusted, USA-based international trading company specializing in sourcing earth-moving machinery, industrial equipment, electrical systems, and mechanical equipment — with end-to-end sourcing, procurement and shipment services that help businesses streamline operations worldwide.</p>
          <p style={{ marginBottom: 28 }}>Our commitment to quality, transparency, and customer satisfaction has enabled us to build strong partnerships with contractors, industrial companies, wholesalers, distributors, and retailers around the world.</p>
          <ArrowLink href="/about">More About Us</ArrowLink>
        </div>
      </div>
    </section>
  )
}

export function ServicesTeaser() {
  return (
    <section className="svc-teaser" id="services">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="02">What We Do</Kicker>
            <h2>Services Built Around Your Supply Chain</h2>
          </div>
          <p className="lead">Sourcing, procurement and logistics — the full journey, handled by one team.</p>
        </div>
        <div className="svc-teaser-grid">
          {servicesTeaser.map(([title, copy, icon], i) => {
            const Icon = iconMap[icon]
            return (
              <article className="svc-teaser-card reveal" key={title}>
                <span className="svc-ic"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowLink href="/services">Learn More</ArrowLink>
              </article>
            )
          })}
        </div>
        <div className="sec-more reveal"><ArrowLink href="/services">View All Services</ArrowLink></div>
      </div>
    </section>
  )
}

export function ProductsSection({ more, kicker = '02', title = 'Explore Our Wide Range of Products', lead }: { more?: React.ReactNode; kicker?: string; title?: string; lead?: string }) {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index={kicker}>Featured Product Categories</Kicker>
            <h2>{title}</h2>
          </div>
          {lead && <p className="lead">{lead}</p>}
        </div>
        <div className="cat-grid">
          {categories.map((card) => (
            <article className="cat-card reveal" key={card.title}>
              <div className="c-media">
                <span>{card.tag}</span>
                <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
              </div>
              <div className="c-body">
                <h3>{card.title}</h3>
                <CheckList items={card.items} />
                <p className="c-note">{card.note}</p>
                <ArrowLink href="/contact">Request Availability</ArrowLink>
              </div>
            </article>
          ))}
        </div>
        {more && <div className="sec-more reveal">{more}</div>}
      </div>
    </section>
  )
}

export function IndustriesTeaser() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="04">Industries We Serve</Kicker>
            <h2>Equipment &amp; Supply Solutions for Every Sector</h2>
          </div>
          <p className="lead">Delivering specialized machinery, power systems, and equipment tailored to the unique operational demands of global industries.</p>
        </div>
        <div className="ind-grid reveal">
          {homeIndustries.map(({ title, desc, icon }) => {
            const Icon = iconMap[icon]
            return (
              <article className="ind-card" key={title}>
                <div className="ind-icon"><Icon size={22} /></div>
                <div className="ind-content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            )
          })}
        </div>
        <p className="ind-more reveal">Serving 10+ sectors worldwide — mining, commercial facilities, government &amp; more</p>
      </div>
    </section>
  )
}

export function ProcessSection({ index = '07' }: { index?: string }) {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index={index}>Our Process</Kicker>
            <h2>Simple Steps. Reliable Results.</h2>
          </div>
        </div>
        <ol className="steps reveal">
          {['Request a Quote', 'Product Consultation', 'Supplier Verification', 'Quotation & Approval', 'Order Processing', 'Worldwide Delivery'].map((item, i) => (
            <li key={item}><span>STEP 0{i + 1}</span><h5>{item}</h5></li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- ABOUT ---------------- */

export function AboutStory() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-sticky reveal">
            <Kicker index="01">About Base Trading</Kicker>
            <h2>Building Long-Term Business Partnerships Across Global Markets</h2>
          </div>
          <div className="reveal">
            <p>The Base Trading is a trusted, USA-based international trading company specializing in sourcing earth-moving machinery, industrial equipment, electrical systems, and mechanical equipment. We provide end-to-end sourcing, procurement, and shipment services that help businesses streamline operations and access premium equipment from trusted manufacturers worldwide.</p>
            <p>Our commitment to quality, transparency, and customer satisfaction has enabled us to build strong partnerships with contractors, industrial companies, wholesalers, distributors, and retailers around the world.</p>
            <p>Every engagement is managed by a single dedicated team — from the first inquiry through supplier verification, quotation, and delivery — so you always know who is handling your order and where it stands.</p>
            <ul className="defines">
              {trustItems.map(([title, copy]) => (
                <li key={title}><h5><Check size={16} />{title}</h5><p>{copy}</p></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="stats-grid reveal">
          {aboutStats.map(([label, value]) => (
            <li key={label}><strong>{label}</strong><span>{value}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="why" id="why">
      <div className="container why-grid">
        <div className="why-sticky reveal">
          <Kicker index="05">Why Choose Base Trading?</Kicker>
          <h2>Quality You Can Trust. Partnerships You Can Build On.</h2>
          <p className="lead">A USA-based trading partner with a global supplier network, transparent pricing and dedicated support at every step of the order.</p>
          <LinkButton>Start a Conversation <ArrowRight size={15} /></LinkButton>
        </div>
        <ul className="why-list reveal">
          {whyItems.map(([code, title, copy]) => (
            <li key={code}><h5><span>{code}</span>{title}</h5><p>{copy}</p></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function PromiseSection() {
  return (
    <section className="promise on-dark" id="promise">
      <div className="container">
        <Kicker index="06" dark>Our Promise</Kicker>
        <h2>Quality you can trust. <em>Partnerships you can build on.</em></h2>
        <ul className="vals">
          {valuesList.map(([title, copy, icon]) => {
            const Icon = iconMap[icon]
            return (
              <li key={title}>
                <span className="v-ic"><Icon size={18} /></span>
                <h5>{title}</h5>
                <p>{copy}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

/* ---------------- SERVICES ---------------- */

export function ServiceShowcase() {
  return (
    <section className="services on-dark" id="services">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="02" dark>Our Services</Kicker>
            <h2>Comprehensive Solutions for Global Business Needs</h2>
          </div>
        </div>
        <div className="svc-list reveal">
          {servicesDetailed.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <div className="svc-detail" key={service.title}>
                <span className="num">/ 0{i + 1}</span>
                <div>
                  <div className="svc-detail-head">
                    <h3>{service.title}</h3>
                    <span className="svc-ic"><Icon size={20} /></span>
                  </div>
                  <p>{service.description}</p>
                  <ul className="includes">
                    {service.includes.map((inc) => <li key={inc}>{inc}</li>)}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ServicesProcess() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="03">How We Work</Kicker>
            <h2>Simple Steps. Reliable Results.</h2>
          </div>
        </div>
        <ol className="steps steps-lg reveal">
          {processStepsDetailed.map(([title, copy], i) => (
            <li key={title}>
              <span>STEP 0{i + 1}</span>
              <h5>{title}</h5>
              <p className="steps-desc">{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function LogisticsSection() {
  return (
    <section className="logistics on-dark" id="logistics">
      <div className="container logi-grid">
        <div className="logi-media reveal">
          <img src={images.logistics} alt="Cargo port with cranes loading containers" loading="lazy" decoding="async" />
          <span>Worldwide Logistics · Import / Export</span>
        </div>
        <div className="reveal">
          <Kicker index="10" dark>Global Reach</Kicker>
          <h2>From Supplier Floor to Your Site — Anywhere</h2>
          <p className="lead">End-to-end sourcing, procurement and shipment services that help businesses streamline operations and access premium equipment from trusted manufacturers worldwide.</p>
          <ul className="logi-points">
            {logiPoints.map(([title, copy, icon]) => {
              const Icon = iconMap[icon]
              return (
                <li key={title}>
                  <span><Icon size={18} /></span>
                  <div><h5>{title}</h5><p>{copy}</p></div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------- SHARED PAGE CHROME ---------------- */

export function PageHeader({ index, kicker, title, lead }: { index?: string; kicker: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="page-hero on-dark">
      <div className="container">
        <Kicker index={index} dark>{kicker}</Kicker>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  )
}

export function CtaBand({ title, copy }: { title: React.ReactNode; copy: string }) {
  return (
    <section className="cta-band on-dark">
      <div className="container">
        <h2>{title}</h2>
        <p className="lead">{copy}</p>
        <LinkButton>Request a Quote <ArrowRight size={15} /></LinkButton>
      </div>
    </section>
  )
}

export function MiniSteps({ steps, dark = false }: { steps: [string, string, string][]; dark?: boolean }) {
  return (
    <ol className="mini-steps">
      {steps.map(([num, title, copy]) => (
        <li key={num} className={dark ? 'on-dark' : ''}>
          <span>STEP {num}</span>
          <h5>{title}</h5>
          <p>{copy}</p>
        </li>
      ))}
    </ol>
  )
}

export function SourcingStrip() {
  return (
    <section className="sourcing">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="03">How It Works</Kicker>
            <h2>Three Steps from Request to Delivery</h2>
          </div>
          <p className="lead">A straightforward sourcing flow — tell us what you need, and we handle the rest.</p>
        </div>
        <MiniSteps steps={sourcingSteps} />
      </div>
    </section>
  )
}

export function WhatsNextStrip() {
  return (
    <section className="whats-next">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker>What Happens Next</Kicker>
            <h2>From Inquiry to Delivery in Three Steps</h2>
          </div>
          <p className="lead">Your request reaches a dedicated team — here is what happens after you hit submit.</p>
        </div>
        <MiniSteps steps={whatsNextSteps} />
      </div>
    </section>
  )
}
