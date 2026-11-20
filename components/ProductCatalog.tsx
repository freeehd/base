'use client'

import { useState } from 'react'
import { categories } from './site-data'
import { ArrowLink, CheckList } from './ui'

type Filter = 'all' | 'equip' | 'goods'

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All categories' },
  { value: 'equip', label: 'Equipment & industry' },
  { value: 'goods', label: 'Goods & retail' },
]

export default function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = categories.filter((category) => filter === 'all' || category.group === filter)

  return (
    <>
      <div className="ftabs catalog-filters" role="group" aria-label="Filter product categories">
        {filters.map(({ value, label }) => (
          <button key={value} type="button" className={filter === value ? 'active' : ''}
            aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>
        ))}
      </div>
      <div className="cat-grid" aria-live="polite">
        {visible.map((card) => (
          <article className="cat-card" key={card.title}>
            <div className={`c-media ${card.image ? '' : 'catalog-media-text'}`}>
              <span>{card.tag}</span>
              {card.image ? (
                <img src={card.image} alt="" loading="lazy" decoding="async" />
              ) : (
                <strong aria-hidden="true">{card.title}</strong>
              )}
            </div>
            <div className="c-body">
              <h3>{card.title}</h3>
              <CheckList items={card.items} />
              <p className="c-note">{card.note}</p>
              <ArrowLink href={`/contact?category=${encodeURIComponent(card.quoteCategory)}`}>
                Request availability
              </ArrowLink>
            </div>
          </article>
        ))}
      </div>
      <p className="catalog-disclaimer">Used equipment is quoted with condition details. Availability is subject to supplier confirmation.</p>
    </>
  )
}
