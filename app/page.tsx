import type { Metadata } from 'next'
import {
  AboutTeaser, CtaBand, Hero, IndustriesTeaser, ProcessSection,
  ProductsSection, ServicesTeaser, TrustBar,
} from '@/components/sections'
import { ArrowLink } from '@/components/ui'
import MarketplaceSection from '@/components/MarketplaceSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <ProductsSection more={<ArrowLink href="/products">View All Products</ArrowLink>} />
      <MarketplaceSection />
      <ServicesTeaser />
      <IndustriesTeaser />
      <ProcessSection index="05" />
      <AboutTeaser />
      <FAQSection />
      <CtaBand title={<>Need to source a product or list your brand?</>}
        copy="Send us the category, quantity and destination — or tell us about your brand partnership needs." />
    </main>
  )
}
