import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { rooms, getRoomBySlug } from '@/lib/rooms'
import RoomDetailContent from '@/components/RoomDetailContent'

export function generateStaticParams() {
  return rooms.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const room = getRoomBySlug(slug)
  if (!room) return {}
  return {
    title: room.name,
    description: `${room.name} at Mahoro Boutique Hotel, Vlorë. ${room.desc}`,
  }
}

export default async function RoomDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = getRoomBySlug(slug)
  if (!room) notFound()

  const related = rooms.filter((r) => r.slug !== room.slug).slice(0, 3)

  return <RoomDetailContent room={room} related={related} />
}
