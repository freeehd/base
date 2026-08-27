import { Brand } from './ui'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, ADDRESS } from './site-data'

const columns: [string, [string, string][]][] = [
  ['Company', [
    ['About Us', '/about'],
    ['Why Choose Us', '/about#why'],
    ['Our Promise', '/about#promise'],
    ['Process', '/#process'],
    ['Contact', '/contact'],
  ]],
  ['Products', [
    ['Heavy Construction Equipment', '/products'],
    ['Industrial Equipment', '/products'],
    ['Spare Parts', '/products'],
    ['Generator Sets', '/products#stock'],
    ['Marine Engines', '/products#stock'],
  ]],
  ['Services', [
    ['Global Product Sourcing', '/services'],
    ['Import & Export', '/services'],
    ['Industrial Procurement', '/services'],
    ['OEM & Private Label', '/services'],
    ['Supply Chain Solutions', '/services'],
  ]],
]

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="f-top">
          <div className="f-brand">
            <Brand showSubtitle={false} />
            <p>Global Trading &amp; Industrial Supply Solutions You Can Trust. USA-based international sourcing, procurement and worldwide shipment.</p>
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
