import { Brand } from './ui'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS } from './site-data'

const columns: [string, [string, string][]][] = [
  ['Company', [
    ['About Us', '/about'],
    ['Why Choose Us', '/about#why'],
    ['Our Promise', '/about#promise'],
    ['Process', '/#process'],
    ['Industries', '/#industries'],
    ['FAQ', '/contact#faq'],
    ['Contact', '/contact'],
  ]],
  ['Products', [
    ['Earth-moving machinery', '/products#category-earth-moving-machinery'],
    ['Industrial machines', '/products#category-industrial-machines'],
    ['Commercial generators', '/products#category-commercial-generators'],
    ['Test and measurement', '/products#category-test-and-measurement-equipment'],
    ['Household items', '/products#category-household-items'],
    ['Dry pet food', '/products#category-dry-pet-food'],
  ]],
  ['Online Stores', [
    ['Amazon', '/#online'],
    ['Walmart Marketplace', '/#online'],
    ['eBay', '/#online'],
    ['TikTok Shop', '/#online'],
    ['Trading Services', '/services'],
  ]],
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <div className="f-brand">
            <Brand showSubtitle={false} />
            <p>Machinery, generators, test equipment, general merchandise and online marketplace sales. USA-based sourcing and worldwide shipment.</p>
            <span>
              {ADDRESS}
              <br />
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
          </div>
          {columns.map(([title, items]) => (
            <div key={title}>
              <h6>{title}</h6>
              <ul>
                {items.map(([item, href]) => (
                  <li key={item}><a href={href}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="f-bottom">
          <span>© 2026 The Base Trading. All Rights Reserved.</span>
          <span>Representative inventory · Availability subject to supplier confirmation</span>
        </div>
      </div>
    </footer>
  )
}
