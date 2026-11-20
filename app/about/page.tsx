import type { Metadata } from 'next'
import { AboutStory, CtaBand, PageHeader, PromiseSection, WhySection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Base Trading is a USA-based company in Hicksville, New York supplying machinery, generators, test instruments, household goods and dry pet food worldwide, and selling on major marketplaces.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader kicker="About Base Trading"
        title={<>A Diversified Trading Company <em>Built on Reliable Sourcing</em></>}
        lead="From industrial machinery and test instruments to everyday goods and online marketplace sales — USA-based sourcing with worldwide shipment." />
      <AboutStory />
      <WhySection />
      <PromiseSection />
      <CtaBand title={<>Ready to Start a Conversation?</>}
        copy="Tell us what you need — equipment, wholesale goods or a marketplace brand partnership." />
    </main>
  )
}
