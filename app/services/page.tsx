import type { Metadata } from 'next'
import { CtaBand, LogisticsSection, PageHeader, ServicesProcess, ServiceShowcase } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Worldwide product sourcing, new and used machinery, import-export, wholesale goods, marketplace selling, brand partnerships, OEM and industrial procurement.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader kicker="What We Do"
        title={<>Sourcing, Procurement <em>&amp; Selling</em></>}
        lead="From verified global product sourcing to new and used equipment, bulk goods, marketplace sales and brand partnerships — one team and one process." />
      <ServiceShowcase />
      <ServicesProcess />
      <LogisticsSection />
      <CtaBand title={<>Let's Plan Your Next Order</>}
        copy="Tell us your product category, quantities and destination so we can discuss availability and a quotation." />
    </main>
  )
}
