'use client'

import { useState } from 'react'
import { images } from './site-data'
import { products, quoteHref } from './trading-content'
import { ArrowLink } from './ui'

const filters = [['all', 'All'], ['equip', 'Equipment and industry'], ['goods', 'Goods and retail']] as const
const categoryImages: Partial<Record<string, string>> = {
  'Earth-moving machinery': images.construction,
  'Industrial machines': images.industrial,
  'Commercial generators': images.genset,
  'Spare parts and attachments': images.parts,
}

export type CatalogGroup = (typeof filters)[number][0]

export default function ProductCatalog({ initialGroup }: { initialGroup: CatalogGroup }) {
  const [filter, setFilter] = useState(initialGroup)
  const visible = products.filter(product => filter === 'all' || product.group === filter)
  return (
    <>
      <div className="ftabs" role="group" aria-label="Filter product categories">
        {filters.map(([id, label]) => <button key={id} type="button" className={filter === id ? 'active' : ''} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>)}
      </div>
      <p className="catalog-count" role="status">{visible.length} categories</p>
      <div className="cat-grid">
        {visible.map(({ title, description, tag, category }) => {
          const image = categoryImages[category]
          return (
            <article className="cat-card" key={category} id={`category-${category.toLowerCase().replaceAll(' ', '-')}`}>
              {image && <div className="c-media"><span>{tag}</span><img src={image} alt="" loading="lazy" decoding="async" /></div>}
              <div className="c-body">
                {!image && <p className="c-note">{tag}</p>}
                <h3>{title}</h3>
                <p className="catalog-description">{description}</p>
                <ArrowLink href={quoteHref(category)}>Request availability<span className="sr-only">: {title}</span></ArrowLink>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
