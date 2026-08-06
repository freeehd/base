import type { Metadata } from 'next'
import {
  AboutTeaser, CtaBand, Hero, IndustriesTeaser, ProcessSection,
  ProductsSection, ServicesTeaser, TrustBar,
} from '@/components/sections'
import { ArrowLink } from '@/components/ui'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <ServicesTeaser />
      <ProductsSection
        kicker="03"
        more={<ArrowLink href="/products">View All Products</ArrowLink>}
      />
      <IndustriesTeaser />
      <ProcessSection index="05" />
      <CtaBand
        title={<>Ready to Source Premium Industrial Equipment?</>}
        copy="Our experienced team is ready to help you find reliable products and customized trading solutions."
      />
    </main>
  )
}
