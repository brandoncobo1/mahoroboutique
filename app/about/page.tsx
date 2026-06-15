import type { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Mahoro Boutique Hotel — a quietly luxurious coastal retreat in Vlorë, Albania, designed around natural materials and the spirit of the Albanian Riviera.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
