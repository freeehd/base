import type { Metadata } from 'next'
import { FaqSection, PageHeader, WhatsNextStrip } from '@/components/sections'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Request availability for equipment, wholesale goods or a marketplace brand partnership with Base Trading.',
  alternates: { canonical: '/contact' },
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ category?: string | string[] }> }) {
  const { category } = await searchParams
  const initialCategory = typeof category === 'string' ? category : undefined
  return (
    <main id="main">
      <PageHeader
        kicker="Get In Touch"
        title={<>Request a quote or <em>talk to our team</em></>}
        lead="Ask about equipment availability, a bulk order, or selling your brand through US marketplaces."
      />
      <ContactSection initialCategory={initialCategory} />
      <WhatsNextStrip />
      <FaqSection />
    </main>
  )
}
