import type { Metadata } from 'next'
import { CtaBand, LogisticsSection, ServicesProcess } from '@/components/sections'
import { ServicesDirectory, ServicesHero } from '@/components/ServicesExperience'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore sourcing and new or used equipment supply, import and export, wholesale goods, supply chain management, marketplace selling and brand partnership services.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main id="main">
      <ServicesHero />
      <ServicesDirectory />
      <ServicesProcess />
      <LogisticsSection />
      <CtaBand
        title={<>Tell Us What You Need. <em>We’ll Take It From There.</em></>}
        copy="Share your product category, quantities, new or used preference and destination — or tell us about your brand."
      />
    </main>
  )
}
