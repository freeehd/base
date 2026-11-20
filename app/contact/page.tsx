import type { Metadata } from 'next'
import { PageHeader } from '@/components/sections'
import ContactSection from '@/components/ContactSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Contact & Request a Quote',
  description: 'Request availability for machinery, generators, test equipment, household goods, dry pet food or marketplace brand partnerships from Base Trading.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader kicker="Get in Touch"
        title={<>Let's Work <em>Together</em></>}
        lead="Based in Hicksville, New York, supplying customers worldwide. Tell us what you need, from one machine to bulk goods or a marketplace partnership." />
      <ContactSection />
      <FAQSection />
    </main>
  )
}
