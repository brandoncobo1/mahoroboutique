import type { Metadata } from 'next'
import RoomsPageContent from '@/components/RoomsPageContent'

export const metadata: Metadata = {
  title: 'Rooms',
  description: 'Six carefully designed rooms at Mahoro Boutique Hotel in Vlorë, Albania. Sea views, mountain views, family rooms. Rooftop pool included. Book direct and save 5%.',
}

export default function RoomsPage() {
  return <RoomsPageContent />
}
