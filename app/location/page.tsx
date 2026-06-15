import type { Metadata } from 'next'
import LocationPageContent from '@/components/LocationPageContent'

export const metadata: Metadata = {
  title: 'Location',
  description: 'Mahoro Boutique Hotel is located on the Vlorë waterfront Lungomare in southern Albania, 165 km from Tirana International Airport.',
}

export default function LocationPage() {
  return <LocationPageContent />
}
