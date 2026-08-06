import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thebasetrading.com'),
  title: {
    default: 'The Base Trading | Global Machinery & Industrial Equipment Sourcing',
    template: '%s | The Base Trading',
  },
  description: 'USA-based international trading company sourcing earth-moving machinery, industrial equipment, electrical systems, generators and mechanical solutions worldwide.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'The Base Trading — Global Trading & Industrial Supply Solutions You Can Trust',
    description: 'Premium earth-moving machinery, industrial equipment, generators and spare parts with end-to-end sourcing and worldwide shipment.',
    type: 'website',
    url: '/',
    siteName: 'The Base Trading',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B0F14',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollEffects />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
