import type { Metadata } from 'next'
import { PageHeader, WhatsNextStrip } from '@/components/sections'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Request a quote from The Base Trading — USA-based global sourcing and delivery of industrial equipment, generators and machinery.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="Get In Touch"
        title={<>Let's Work <em>Together</em></>}
        lead="USA-based · serving industries worldwide. Send us your requirements and our team will respond with availability and a tailored quotation."
      />
      <ContactSection />
      <WhatsNextStrip />
    </main>
  )
}
