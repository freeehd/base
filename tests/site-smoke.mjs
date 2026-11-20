import assert from 'node:assert/strict'
import { test } from 'node:test'

const base = process.env.SITE_URL ?? 'http://localhost:3000'
for (const [path, expected] of Object.entries({
  '/': ['hero-visual', 'Source here. Ship worldwide.', 'Browse equipment', 'Browse wholesale goods', 'href="/products?group=equip"', 'href="/products?group=goods"', 'href="#online"', 'Walmart Marketplace', 'Become a brand partner', 'From request to delivery', 'Labs, telecom and engineering', 'href="/contact#faq"', 'href="/#online"'],
  '/products?group=goods': ['aria-pressed="true">Goods and retail', 'Dry pet food', 'Household and daily-use items'],
  '/products': ['cat-grid', 'Test and measurement equipment', 'Dry pet food', 'Equipment and industry', 'Goods and retail', 'id="stock"'],
  '/services': ['A trading partner from sourcing to delivery', 'href="#equipment"', 'href="#wholesale"', 'href="#online"', 'id="equipment"', 'id="wholesale"', 'id="online"', 'id="process"', 'id="logistics"', 'Wholesale and bulk supply', 'Online marketplace selling', '/contact?category=Brand%20partnership#quote'],
  '/about': ['about-grid', 'A diversified trading company built on reliable sourcing', 'Hicksville, New York'],
  '/contact?category=Household%20items': ['quote-form', 'value="Household items" selected', 'This opens your email app', 'Common questions'],
})) {
  test(`${path} preserves the route and serves refreshed content`, async () => {
    const response = await fetch(`${base}${path}`, { redirect: 'manual' })
    assert.equal(response.status, 200)
    const html = await response.text()
    const body = html.slice(html.indexOf('<body'), html.indexOf('</body>'))
    for (const text of [...expected, '/logo.png']) assert.ok(body.includes(text), `missing ${text}`)
    assert.ok(!body.includes('tel:+151****9535'), 'masked phone URI must not be clickable')
  })
}
