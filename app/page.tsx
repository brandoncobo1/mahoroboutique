import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'

export const metadata: Metadata = {
  title: 'Mahoro Boutique Hotel — Vlorë, Albania | Rooftop Pool & Sea Views',
}

export default function HomePage() {
  return <HomePageContent />
}
