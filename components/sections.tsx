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
import ProductCatalog from './ProductCatalog'

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
          <h1>One trusted partner for <em>machinery, power, instruments and everyday goods</em></h1>
          <p className="lead">We source and supply new and used earth-moving machinery, industrial equipment, commercial generators and test and measurement equipment. We also sell household items and dry pet food in bulk and through Amazon, Walmart, eBay and TikTok Shop.</p>
          <div className="hero-ctas">
            <LinkButton>Request a Quote <ArrowRight size={15} /></LinkButton>
            <LinkButton ghost href="/products">Browse Categories</LinkButton>
          </div>
          <ul className="hero-chips">
            {['Earth-moving machinery', 'Industrial machines', 'Commercial generators', 'Test instruments', 'Household goods', 'Dry pet food'].map((item) => <li key={item}>+ {item}</li>)}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="frame">
            <img src={images.hero} alt="Heavy earth-moving machinery at an industrial yard" fetchPriority="high" />
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
          <Kicker index="06">About Base Trading</Kicker>
          <h2>A diversified trading company built on reliable sourcing</h2>
        </div>
        <div className="reveal">
          <p>Base Trading is a USA-based international trading company in Hicksville, New York. We supply new and used earth-moving machinery, industrial machines, commercial generators and test and measurement instruments, as well as household items and dry pet food.</p>
          <p>We are also an active online seller across Amazon, Walmart, eBay and TikTok Shop. Whatever you need, you deal with one team and one process.</p>
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
            <h2>Sourcing, Procurement and Selling for Every Category</h2>
          </div>
          <p className="lead">From equipment sourcing and global shipping to wholesale, marketplace selling and brand partnerships.</p>
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


export function ProductsSection({ more, kicker = '02', title = 'Everything we trade, organized by category', lead = 'Filter by type, then ask for availability. Used equipment is quoted with condition details.' }: { more?: React.ReactNode; kicker?: string; title?: string; lead?: string }) {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index={kicker}>Product Categories</Kicker>
            <h2>{title}</h2>
          </div>
          <p className="lead">{lead}</p>
        </div>
        <ProductCatalog />
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
            <h2>Serving Industry, Commerce and Retail</h2>
          </div>
          <p className="lead">From construction and engineering to wholesale and e-commerce, we supply equipment and everyday products across sectors.</p>
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
        <p className="ind-more reveal">Sourcing and shipping for industrial, commercial and retail needs</p>
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
            <h2>A diversified trading company built on reliable sourcing</h2>
          </div>
          <div className="reveal">
            <p>Base Trading is a USA-based international trading company in Hicksville, New York. We supply new and used earth-moving machinery, industrial machines, commercial generators and test and measurement instruments, as well as household items and dry pet food.</p>
            <p>We are also an active online seller across Amazon, Walmart, eBay and TikTok Shop. Whatever you need, you deal with one team and one process.</p>
            <ul className="defines">
              {trustItems.map(([title, copy]) => (
                <li key={title}><h5><Check size={16} />{title}</h5><p>{copy}</p></li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="stats-grid reveal">
          {aboutStats.map(([label, value]) => <li key={label}><strong>{label}</strong><span>{value}</span></li>)}
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
          <h2>New and Used Supply, with One Sourcing Partner</h2>
          <p className="lead">Machinery, power systems, test instruments and everyday goods supplied through a single sourcing process.</p>
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
        <h2>Reliable sourcing. <em>From equipment to everyday goods.</em></h2>
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
            <h2>Sourcing, Procurement and Selling for Every Category</h2>
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
          <p className="lead">We coordinate documentation, shipping and worldwide delivery for machinery, industrial equipment and wholesale orders.</p>
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
