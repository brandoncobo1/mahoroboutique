import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { LangProvider } from '@/lib/lang'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-head',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mahoro Boutique Hotel — Vlorë, Albania | Rooftop Pool & Sea Views',
    template: '%s — Mahoro Boutique Hotel, Vlorë',
  },
  description:
    '4-star boutique hotel in Vlorë, Albania. Rooftop pool with sea views, rattan-accented rooms, buffet breakfast and a 5-minute walk to the beach. Book directly and save 5%.',
  keywords: ['Mahoro Boutique Hotel', 'Vlore Albania hotel', 'boutique hotel Vlore', 'rooftop pool Vlore', 'sea view hotel Albania'],
  metadataBase: new URL('https://www.mahoroboutique.al'),
  openGraph: {
    type: 'website',
    url: 'https://www.mahoroboutique.al',
    siteName: 'Mahoro Boutique Hotel',
    images: [{ url: '/images/707836355.jpg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <LangProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
