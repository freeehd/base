import type { Metadata } from 'next'
import { AboutStory, CtaBand, PageHeader, PromiseSection, WhySection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the USA-based trading team supplying machinery, generators, test equipment and everyday goods worldwide and selling on major online marketplaces.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="About The Base Trading"
        title={<>A USA-Based Trading Partner <em>You Can Count On</em></>}
        lead="One team for equipment sourcing, wholesale goods and marketplace selling, based in Hicksville, New York."
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
