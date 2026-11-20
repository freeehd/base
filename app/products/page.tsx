import type { Metadata } from 'next'
import { CtaBand, PageHeader, ProductsSection, SourcingStrip } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Products',
  description: 'New and used machinery, industrial machines, commercial generators, test and measurement equipment, spare parts, household goods and dry pet food.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHeader kicker="What We Supply"
        title={<>Machinery, Power, Instruments <em>&amp; Everyday Goods</em></>}
        lead="New and used equipment, industrial supplies and wholesale daily-use products. Ask for availability by category; used equipment is quoted with condition details." />
      <ProductsSection kicker="02" title="Everything we trade, organized by category"
        lead="Explore equipment and industrial categories alongside wholesale and retail goods. Filter by type to find what you need." />
      <SourcingStrip />
      <CtaBand title={<>Looking for Something Specific?</>}
        copy="Share your models, quantities, new or used preference and destination. Availability is subject to supplier confirmation." />
    </main>
  )
}
