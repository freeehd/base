import { ArrowRight } from 'lucide-react'
import { ArrowLink, Kicker, LinkButton } from './ui'

const marketplaces = [
  { name: 'Amazon', description: 'Household essentials, dry pet food and general merchandise.' },
  { name: 'Walmart Marketplace', description: 'Daily-use products at competitive prices.' },
  { name: 'eBay', description: 'New and select pre-owned products, including tools and equipment.' },
  { name: 'TikTok Shop', description: 'Trending products reaching new audiences through social commerce.' },
]

const capabilities = [
  'Product sourcing', 'Listing creation and optimization', 'Inventory and orders',
  'Fast fulfillment', 'Customer service and returns',
]

export default function MarketplaceSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="marketplaces" id="online">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="04">Online Stores</Kicker>
            <h2>Our brands, available where you already shop</h2>
          </div>
          <p className="lead">We run an online retail operation selling a variety of brands on major marketplaces, handling everything from sourcing to returns.</p>
        </div>
        <div className="marketplace-grid">
          {marketplaces.map(({ name, description }) => (
            <article key={name} className="marketplace-card">
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <ul className="marketplace-capabilities" aria-label="Marketplace services">
          {capabilities.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="marketplace-cta on-dark">
          <div>
            <h3>Want your brand on Amazon, Walmart, eBay and TikTok?</h3>
            <p>If you own or make a brand and want a stronger US marketplace presence, we can sell it for you, handling listings, pricing, fulfillment and customer support.</p>
          </div>
          <LinkButton href="/contact?category=Brand%20partnership">Become a brand partner <ArrowRight size={15} /></LinkButton>
        </div>
        {!standalone && <div className="sec-more"><ArrowLink href="/online-stores">Explore Online Stores</ArrowLink></div>}
      </div>
    </section>
  )
}
