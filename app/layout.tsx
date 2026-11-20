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
    default: 'Base Trading | Machinery, Generators, Test Equipment & Marketplace Sales',
    template: '%s | The Base Trading',
  },
  description: 'USA-based trading company supplying new and used earth-moving machinery, industrial equipment, commercial generators, test and measurement equipment, household goods and dry pet food, with online sales on Amazon, Walmart, eBay and TikTok Shop.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Base Trading — Machinery, Power, Instruments and Everyday Goods',
    description: 'Machinery, industrial equipment, generators, test instruments, household goods and dry pet food — USA-based sourcing and global marketplace sales.',
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
