import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { rooms, getRoomBySlug } from '@/lib/rooms'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'

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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '90vh', minHeight: 500 }}>
        <Image src={room.heroImage} alt={room.name} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,22,16,0.7) 0%, rgba(28,22,16,0.2) 50%, transparent 100%)' }} />
        <div className="absolute bottom-12 left-0 right-0 px-[var(--gutter)]">
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
            <Reveal>
              <div className="text-[9px] font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold-warm)' }}>{room.heroLabel}</div>
              <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] max-w-[680px]" style={{ color: 'var(--white)' }}>{room.name}</h1>
              <div className="flex flex-wrap gap-3 mt-5">
                {room.tags.map((tag) => (
                  <span key={tag} className="text-[0.72rem] tracking-[0.12em] uppercase px-3 py-1.5 rounded-[2px] border" style={{ color: 'var(--gold-light)', borderColor: 'rgba(196,154,69,0.35)' }}>{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photo mosaic */}
      <section style={{ background: 'var(--bark)' }}>
        {/* Mobile: 2-col simple grid */}
        <div className="md:hidden grid grid-cols-2 gap-1">
          {room.photos.slice(0, 4).map((photo) => (
            <div key={photo.src} className="relative overflow-hidden" style={{ height: 180 }}>
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
        {/* Desktop: asymmetric mosaic */}
        <div className="hidden md:grid gap-1" style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: 'repeat(2, 280px)' }}>
          {room.photos.slice(0, 5).map((photo, i) => (
            <div
              key={photo.src}
              className="relative overflow-hidden"
              style={{
                gridColumn: i === 0 ? '1 / 2' : undefined,
                gridRow: i === 0 ? '1 / 3' : undefined,
              }}
            >
              <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-[1.03] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Detail section */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,8vw,7rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid md:grid-cols-[1fr_340px] gap-[clamp(3rem,5vw,5rem)] items-start" style={{ maxWidth: 'var(--max-w)' }}>
          {/* Description */}
          <Reveal direction="left">
            <SectionLabel>The Room</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] mt-2 mb-6" style={{ color: 'var(--bark)' }}>{room.name}</h2>
            {room.longDesc.map((para, i) => (
              <p key={i} className="text-[0.92rem] leading-[1.9] mb-5" style={{ color: 'var(--ink-mid)' }}>{para}</p>
            ))}
            <div className="mt-8">
              <div className="text-[0.72rem] font-medium tracking-[0.12em] uppercase mb-4" style={{ color: 'var(--ink-light)' }}>In-room amenities</div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {room.amenities.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[0.82rem]" style={{ color: 'var(--ink-mid)' }}>
                    <span style={{ color: 'var(--gold-warm)', fontSize: '0.6rem' }}>◆</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Spec card */}
          <Reveal direction="right">
            <div className="rounded-[var(--radius)] p-8 sticky top-[calc(var(--nav-h)+1.5rem)]" style={{ background: 'var(--bark)' }}>
              <div className="font-[family-name:var(--font-head)] italic text-[1.3rem] mb-6" style={{ color: 'var(--white)' }}>Room Details</div>
              <div className="divide-y" style={{ borderColor: 'rgba(212,196,168,0.12)' }}>
                {room.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-3 divide-y-0" style={{ borderBottom: '1px solid rgba(212,196,168,0.12)' }}>
                    <span className="text-[0.78rem] tracking-[0.06em]" style={{ color: 'rgba(212,196,168,0.55)' }}>{spec.label}</span>
                    <span className="text-[0.82rem] font-medium" style={{ color: 'var(--white)' }}>{spec.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3">
                <Link href="/booking" className="w-full inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-6 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Reserve This Room</Link>
                <a href="https://wa.me/355XXXXXXXX" className="w-full inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-6 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ color: 'rgba(212,196,168,0.7)', borderColor: 'rgba(212,196,168,0.25)' }}>Ask a Question</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo strip */}
      <section className="overflow-hidden" style={{ background: 'var(--parchment)' }}>
        <div className="flex gap-1" style={{ height: 200 }}>
          {room.stripPhotos.map((photo) => (
            <div key={photo.src} className="relative flex-1 overflow-hidden group">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Related rooms */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Also at Mahoro</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.6rem,3.5vw,2.4rem)] mt-2 mb-10" style={{ color: 'var(--bark)' }}>More rooms to consider.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8" style={{ maxWidth: 'var(--max-w)' }}>
          {related.map((r) => (
            <StaggerItem key={r.slug}>
              <Link href={`/rooms/${r.slug}`} className="block group rounded-[var(--radius)] overflow-hidden border transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(28,22,16,0.1)]" style={{ borderColor: 'var(--border)', background: 'var(--white)' }}>
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <Image src={r.heroImage} alt={r.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute top-3 left-3 text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-[2px]" style={{ background: 'rgba(28,22,16,0.7)', color: 'var(--gold-light)' }}>{r.badge}</div>
                </div>
                <div className="p-5">
                  <div className="font-[family-name:var(--font-head)] italic text-[1.1rem] mb-1" style={{ color: 'var(--bark)' }}>{r.name}</div>
                  <div className="text-[0.75rem] tracking-[0.06em]" style={{ color: 'var(--ink-light)' }}>{r.beds}</div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
    </>
  )
}
