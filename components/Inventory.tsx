'use client'

import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { inventory, inventoryCategories, stockTabs } from './site-data'
import { getChipClass, Kicker } from './ui'
import { quoteHref } from './trading-content'

const quoteCategoryByInventory: Record<string, string> = {
  gensets: 'Commercial generators',
  genends: 'Commercial generators',
  radiators: 'Spare parts and attachments',
}

export default function Inventory() {
  const [filter, setFilter] = useState('all')
  const visibleInventory = useMemo(
    () => (filter === 'all' ? inventory : inventory.filter((item) => item.cat === filter)),
    [filter]
  )

  function filterInventory(next: string) {
    setFilter(next)
    requestAnimationFrame(() => document.getElementById('stock')?.scrollIntoView({ behavior: 'smooth' }))
  }

  return (
    <>
      <section className="inventory on-dark" id="inventory">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <Kicker index="08" dark>What We Have</Kicker>
              <h2>Representative Inventory We Can Source</h2>
            </div>
            <p className="lead">Selected examples from current industrial power inventory categories — availability is confirmed at the quotation stage.</p>
          </div>
          <div className="inv-grid">
            {inventoryCategories.map(([title, copy, key], i) => (
              <article className="inv-card reveal" key={key}>
                <span>Category 0{i + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <button className="arrow-link" onClick={() => filterInventory(key)}>View Details <ArrowRight size={14} /></button>
              </article>
            ))}
          </div>
          <p className="inv-note">Representative sourcing examples · Supplier confirmation required</p>
        </div>
      </section>

      <section className="stock" id="stock">
        <div className="container">
          <div className="sec-head reveal">
            <div>
              <Kicker index="09">Representative Inventory</Kicker>
              <h2>Equipment We Can Source</h2>
            </div>
          </div>
          <div className="ftabs" role="group" aria-label="Filter representative inventory">
            {stockTabs.map(([key, label]) => (
              <button type="button" aria-pressed={filter === key} className={filter === key ? 'active' : ''} key={key} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
          <div className="stock-list">
            {visibleInventory.map((item) => (
              <article className="stock-card" key={item.cat}>
                <div className="sc-media">
                  <span>{item.label}</span>
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div className="sc-body">
                  <div className="sc-top">
                    <h3>{item.title}</h3>
                    <span className={getChipClass(item.status)}>{item.status}</span>
                  </div>
                  <p className="sc-desc">{item.desc}</p>
                  <dl className="spec-grid">
                    {item.specs.map(([label, value]) => (
                      <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                    ))}
                  </dl>
                  <p className="sc-notes">{item.notes}</p>
                  <div className="sc-apps-wrap">
                    <strong>Applications:</strong>
                    <div className="app-pills">
                      {item.apps.split(' · ').map((app) => <span className="app-pill" key={app}>{app}</span>)}
                    </div>
                  </div>
                  <div className="sc-action">
                    <a className="btn btn-sm btn-card" href={quoteHref(quoteCategoryByInventory[item.cat] ?? 'Industrial machines')}>Request Quote <ArrowRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="stock-disclaimer">Reference inventory · Availability and specifications subject to supplier confirmation</p>
        </div>
      </section>
    </>
  )
}
