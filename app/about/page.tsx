import type { Metadata } from 'next'
import { AboutStory, CtaBand, PageHeader, PromiseSection, WhySection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The Base Trading is a USA-based international trading company specializing in sourcing earth-moving machinery, industrial equipment, electrical systems and mechanical solutions worldwide.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="About The Base Trading"
        title={<>A USA-Based Trading Partner <em>You Can Count On</em></>}
        lead="End-to-end sourcing, procurement and worldwide shipment of premium industrial equipment — built on quality, transparency and long-term partnerships."
      />
      <AboutStory />
      <WhySection />
      <PromiseSection />
      <CtaBand
        title={<>Ready to Start a Conversation?</>}
        copy="Tell us what you need — our team responds with availability and a tailored quotation."
      />
    </main>
  )
}
