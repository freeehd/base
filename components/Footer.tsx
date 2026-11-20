import { Brand } from './ui'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS } from './site-data'

const columns: [string, [string, string][]][] = [
  ['Company', [
    ['About Us', '/about'],
    ['Industries', '/#industries'],
    ['FAQ', '/#faq'],
    ['Services', '/services'],
    ['Contact', '/contact'],
  ]],
  ['Products', [
    ['Earth-moving machinery', '/products'],
    ['Industrial machines', '/products'],
    ['Commercial generators', '/products'],
    ['Test and measurement', '/products'],
    ['Household items', '/products'],
    ['Dry pet food', '/products'],
  ]],
  ['Online Stores', [
    ['Amazon', '/online-stores'],
    ['Walmart Marketplace', '/online-stores'],
    ['eBay', '/online-stores'],
    ['TikTok Shop', '/online-stores'],
    ['Brand Partnership', '/contact?category=Brand%20partnership'],
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
              {ADDRESS}<br />
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a><br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
          </div>
          {columns.map(([title, items]) => (
            <div key={title}>
              <h6>{title}</h6>
              <ul>{items.map(([item, href]) => <li key={item}><a href={href}>{item}</a></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="f-bottom">
          <span>© 2026 Base Trading. All Rights Reserved.</span>
          <span>Representative inventory · Availability subject to supplier confirmation</span>
        </div>
      </div>
    </footer>
  )
}
