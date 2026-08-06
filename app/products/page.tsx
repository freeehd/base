import type { Metadata } from 'next'
import { CtaBand, PageHeader, ProductsSection, SourcingStrip } from '@/components/sections'
import Inventory from '@/components/Inventory'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Heavy construction equipment, industrial equipment, spare parts, generator sets, industrial engines, radiators, generator ends, power units and marine engines — sourced worldwide.',
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="What We Supply"
        title={<>Premium Machinery &amp; Industrial Equipment, <em>Sourced Worldwide</em></>}
        lead="From heavy construction machinery to generator sets and spare parts — representative categories and current sourcing examples, confirmed at the quotation stage."
      />
      <ProductsSection
        kicker="02"
        title="Product Categories"
        lead="Three core categories covering machinery, industrial equipment and spare parts — each sourced from verified manufacturers worldwide."
      />
      <SourcingStrip />
      <Inventory />
      <CtaBand
        title={<>Looking for Something Specific?</>}
        copy="If it isn't listed, we can still source it — availability is confirmed at the quotation stage."
      />
    </main>
  )
}
