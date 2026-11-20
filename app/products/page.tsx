import type { Metadata } from 'next'
import { CtaBand, PageHeader, ProductsSection, SourcingStrip } from '@/components/sections'
import Inventory from '@/components/Inventory'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse machinery, industrial machines, commercial generators, test instruments, spare parts, household goods and dry pet food.',
  alternates: { canonical: '/products' },
}

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ group?: string | string[] }> }) {
  const { group } = await searchParams
  const initialGroup = group === 'equip' || group === 'goods' ? group : 'all'
  return (
    <main id="main">
      <PageHeader
        kicker="What We Supply"
        title={<>Machinery, Power, Instruments <em>and Everyday Goods</em></>}
        lead="New and used equipment, bulk everyday goods and representative inventory. Availability is subject to supplier confirmation."
      />
      <ProductsSection
        initialGroup={initialGroup}
        kicker="02"
        title="Explore the catalog"
        lead="Filter by type, then ask for availability. Used equipment is quoted with condition details."
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
