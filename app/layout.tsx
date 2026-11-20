import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollEffects from '@/components/ScrollEffects'
import { description } from '@/components/trading-content'
import './globals.css'
import './trade-design.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thebasetrading.com'),
  title: {
    default: 'Base Trading | Machinery, Generators, Test Equipment & Marketplace Sales',
    template: '%s | The Base Trading',
  },
  description,
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'The Base Trading — Worldwide Sourcing, Wholesale & Marketplace Sales',
    description,
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
