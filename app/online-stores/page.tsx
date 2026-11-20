import type { Metadata } from 'next'
import { CtaBand, PageHeader } from '@/components/sections'
import MarketplaceSection from '@/components/MarketplaceSection'

export const metadata: Metadata = {
  title: 'Online Stores & Brand Partnerships',
  description: 'Base Trading sells household essentials, dry pet food and general merchandise on Amazon, Walmart Marketplace, eBay and TikTok Shop, with brand partnership services.',
  alternates: { canonical: '/online-stores' },
}

export default function OnlineStoresPage() {
  return (
    <main id="main">
      <PageHeader
        kicker="Our Online Retail Operation"
        title={<>Online Marketplace Sales &amp; <em>Brand Partnerships</em></>}
        lead="Household essentials, dry pet food and general merchandise sold across Amazon, Walmart Marketplace, eBay and TikTok Shop. We also help brand owners reach US marketplace customers."
      />
      <MarketplaceSection standalone />
      <CtaBand title={<>Ready to Grow Your Marketplace Presence?</>}
        copy="Tell us about your brand and product line, and we can discuss listing, pricing, fulfillment and customer support." />
    </main>
  )
}
