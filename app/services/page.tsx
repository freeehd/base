import type { Metadata } from 'next'
import { CtaBand, LogisticsSection, PageHeader, ServicesProcess, ServiceShowcase } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Global product sourcing, import & export, industrial procurement, OEM & private label and supply chain solutions — end-to-end trading services from The Base Trading.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="What We Do"
        title={<>End-to-End Trading Services, <em>From Sourcing to Delivery</em></>}
        lead="We handle the full journey — connecting you with trusted manufacturers worldwide, managing procurement and documentation, and delivering to your site on time."
      />
      <ServiceShowcase />
      <ServicesProcess />
      <LogisticsSection />
      <CtaBand
        title={<>Let's Plan Your Next Order</>}
        copy="Tell us what you need — our team responds with availability and a tailored quotation."
      />
    </main>
  )
}
