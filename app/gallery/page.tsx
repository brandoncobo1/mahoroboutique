'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import Link from 'next/link'
import { useLang } from '@/lib/lang'
import { useT } from '@/lib/translations'

type Category = 'all' | 'pool' | 'rooms' | 'views' | 'property'

interface GalleryItem {
  src: string
  alt: string
  caption: string
  cat: Category
  wide?: boolean
  tall?: boolean
}

const items: GalleryItem[] = [
  { src: '/images/707836355.jpg', alt: 'Mahoro rooftop pool with white sun loungers and panoramic Ionian Sea view', caption: 'The Rooftop Pool', cat: 'pool', wide: true },
  { src: '/images/707835689.jpg', alt: 'Mahoro rooftop pool portrait view with warm afternoon light', caption: 'Afternoon at the Pool', cat: 'pool', tall: true },
  { src: '/images/857055561.jpg', alt: 'Rooftop pool deck with sea-facing loungers', caption: 'Golden Hour · Pool Deck', cat: 'pool' },
  { src: '/images/857052096.jpg', alt: 'Rooftop pool terrace with reflected Adriatic light', caption: 'Poolside Serenity', cat: 'pool' },
  { src: '/images/716409043.jpg', alt: 'Rooftop pool at evening with warm lights and calm water', caption: 'Evening at the Rooftop', cat: 'pool', wide: true },
  { src: '/images/716409017.jpg', alt: 'Pool bar area with sea view', caption: 'The Pool Bar', cat: 'pool' },
  { src: '/images/716409025.jpg', alt: 'Rooftop lounge with rattan furniture overlooking the sea', caption: 'Rooftop Lounge', cat: 'pool' },
  { src: '/images/716409034.jpg', alt: 'Rooftop terrace showing pool and sea simultaneously', caption: 'Pool & Sea', cat: 'pool' },
  { src: '/images/694870449.jpg', alt: 'Deluxe sea view bedroom with honey walls, rattan lamp and open balcony', caption: 'Deluxe Sea View Room', cat: 'rooms', wide: true },
  { src: '/images/694848301.jpg', alt: 'Bedroom with warm timber ceiling, rattan pendant and sea view balcony', caption: 'Timber & Rattan Interior', cat: 'rooms', tall: true },
  { src: '/images/694857450.jpg', alt: 'Side sea view room with angled balcony view', caption: 'Side Sea View Room', cat: 'rooms' },
  { src: '/images/694855692.jpg', alt: 'Bathroom with stone tile walk-in shower and rain head', caption: 'The Bathroom', cat: 'rooms' },
  { src: '/images/694848135.jpg', alt: 'View from bed through balcony glass to the Ionian Sea', caption: 'Sea View from Bed', cat: 'rooms' },
  { src: '/images/694842267.jpg', alt: 'Sea view family room with generous layout and direct sea view', caption: 'Sea View Family Room', cat: 'rooms', wide: true },
  { src: '/images/694848445.jpg', alt: 'Mountain view room with Albanian hills through balcony', caption: 'Mountain View Room', cat: 'rooms' },
  { src: '/images/694871306.jpg', alt: 'Deluxe family room with queen bed and warm rattan decor', caption: 'Deluxe Family Room', cat: 'rooms' },
  { src: '/images/694848424.jpg', alt: 'Rattan pendant light above the bed', caption: 'Rattan & Linen', cat: 'rooms' },
  { src: '/images/694847940.jpg', alt: 'Deluxe queen room with boutique interiors', caption: 'Deluxe Queen Room', cat: 'rooms' },
  { src: '/images/694870460.jpg', alt: 'Room with morning natural light through linen curtains', caption: 'Morning Light', cat: 'rooms', wide: true },
  { src: '/images/694848392.jpg', alt: 'Wooden ceiling beams detail above the bed', caption: 'Ceiling Detail', cat: 'rooms' },
  { src: '/images/694870481.jpg', alt: 'Full sea view from private balcony over the Ionian', caption: 'Full Panoramic Balcony', cat: 'views', wide: true },
  { src: '/images/694848159.jpg', alt: 'Balcony at dusk with copper-toned sea and mountain silhouette', caption: 'Dusk Over the Bay', cat: 'views', tall: true },
  { src: '/images/694842331.jpg', alt: 'Balcony table with sea view over the Lungomare promenade', caption: 'Balcony Over the Lungomare', cat: 'views' },
  { src: '/images/694870506.jpg', alt: 'Sea view room balcony with morning coffee and open horizon', caption: 'Morning Coffee · Sea View', cat: 'views', wide: true },
  { src: '/images/694857468.jpg', alt: 'Side sea view balcony with bay at an angle', caption: 'Side Sea View', cat: 'views' },
  { src: '/images/694855719.jpg', alt: 'Sea view through the window in afternoon light', caption: 'Sea from the Window', cat: 'views' },
  { src: '/images/714395009.jpg', alt: 'Mahoro Boutique Hotel property in Vlorë', caption: 'Mahoro · The Property', cat: 'property', wide: true },
  { src: '/images/714395021.jpg', alt: 'Hotel common areas with rattan and natural finishes', caption: 'Common Areas', cat: 'property', tall: true },
  { src: '/images/714395014.jpg', alt: 'Hotel entrance with boutique atmosphere', caption: 'The Entrance', cat: 'property' },
  { src: '/images/714395017.jpg', alt: 'Lobby detail with rattan and warm amber finishes', caption: 'Lobby Detail', cat: 'property' },
  { src: '/images/714395027.jpg', alt: 'Breakfast terrace with local Albanian produce and fresh pastries', caption: 'Morning Breakfast Terrace', cat: 'property', wide: true },
  { src: '/images/714395033.jpg', alt: 'Hotel garden with lush greenery in Vlorë', caption: 'The Garden', cat: 'property' },
  { src: '/images/714395037.jpg', alt: 'Hotel restaurant and bar with Adriatic cuisine', caption: 'Restaurant & Bar', cat: 'property' },
]

const FILTER_KEYS: Category[] = ['all', 'pool', 'rooms', 'views', 'property']

export default function GalleryPage() {
  const { lang } = useLang()
  const tr = useT(lang).pages.gallery

  const [active, setActive] = useState<Category>('all')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const visible = items.filter((item) => active === 'all' || item.cat === active)

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), [])
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const shiftLightbox = useCallback((d: number) => {
    setLightboxIdx((prev) => prev === null ? null : (prev + d + visible.length) % visible.length)
  }, [visible.length])

  const filterLabels: Record<Category, string> = {
    all: tr.filters.all,
    pool: tr.filters.pool,
    rooms: tr.filters.rooms,
    views: tr.filters.views,
    property: tr.filters.property,
  }

  return (
    <>
      {/* Header */}
      <section className="px-[var(--gutter)] text-center" style={{ background: 'var(--bark)', padding: 'calc(var(--nav-h) + 4rem) var(--gutter) 3.5rem' }}>
        <Reveal><SectionLabel light center>{tr.heroLabel}</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,6vw,4.5rem)] mt-3" style={{ color: 'var(--white)' }}>
            {tr.heroH1a}<br /><em>{tr.heroH1b}</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[480px] mx-auto mt-3 text-[0.9rem]" style={{ color: 'rgba(212,196,168,0.72)' }}>
            {tr.heroP}
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <div className="px-[var(--gutter)] border-b sticky z-50" style={{ background: 'var(--cream)', borderColor: 'var(--border)', top: 'var(--nav-h)', padding: '1.5rem var(--gutter)' }}>
        <div className="mx-auto flex gap-2 flex-wrap" style={{ maxWidth: 'var(--max-w)' }}>
          {FILTER_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase px-[1.1rem] py-[0.45rem] rounded-[var(--radius)] border cursor-pointer transition-all duration-300"
              style={{
                background: active === key ? 'var(--wood)' : 'transparent',
                color: active === key ? 'var(--white)' : 'var(--ink-mid)',
                borderColor: active === key ? 'var(--wood)' : 'var(--border)',
              }}
            >{filterLabels[key]}</button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-[var(--gutter)] py-[clamp(2.5rem,5vw,4rem)]" style={{ background: 'var(--parchment)' }}>
        <motion.div
          layout
          className="mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 [grid-auto-rows:180px] md:[grid-auto-rows:260px]"
          style={{ maxWidth: 'var(--max-w)' }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={item.src + item.cat}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative overflow-hidden rounded-[var(--radius)] cursor-pointer group${item.wide ? ' md:[grid-column:span_2]' : ''}${item.tall ? ' [grid-row:span_2]' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.05]" />
                <div className="absolute inset-0 flex items-end p-5 transition-all duration-400" style={{ background: 'rgba(28,22,16,0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(28,22,16,0.45)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(28,22,16,0)')}
                >
                  <span className="text-[0.75rem] tracking-[0.06em] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: 'var(--white)' }}>{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
            style={{ background: 'rgba(28,22,16,0.95)', backdropFilter: 'blur(8px)' }}
            onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          >
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.14em] uppercase" style={{ color: 'rgba(212,196,168,0.45)' }}>
              {lightboxIdx + 1} / {visible.length}
            </div>
            <button onClick={closeLightbox} className="absolute top-5 right-6 text-[1.75rem] leading-none cursor-pointer" style={{ color: 'rgba(212,196,168,0.6)', background: 'none', border: 'none' }}>×</button>
            <button onClick={() => shiftLightbox(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-[2rem] leading-none cursor-pointer px-4 py-4" style={{ color: 'rgba(212,196,168,0.45)', background: 'none', border: 'none' }}>‹</button>
            <div className="relative" style={{ maxWidth: 'min(90vw, 1100px)', maxHeight: '78vh' }}>
              <motion.div key={lightboxIdx} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}>
                <Image src={visible[lightboxIdx].src} alt={visible[lightboxIdx].alt} width={1200} height={800} className="rounded-[var(--radius)] object-contain" style={{ maxWidth: 'min(90vw,1100px)', maxHeight: '78vh', width: 'auto', height: 'auto' }} />
              </motion.div>
            </div>
            <div className="mt-3 text-[0.78rem] tracking-[0.06em] text-center" style={{ color: 'rgba(212,196,168,0.65)' }}>{visible[lightboxIdx].caption}</div>
            <button onClick={() => shiftLightbox(1)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[2rem] leading-none cursor-pointer px-4 py-4" style={{ color: 'rgba(212,196,168,0.45)', background: 'none', border: 'none' }}>›</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(3rem,6vw,5rem)] text-center" style={{ background: 'var(--bark)' }}>
        <Reveal>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,2.8rem)] mb-4" style={{ color: 'var(--white)' }}>{tr.ctaH2}</h2>
          <p className="max-w-[420px] mx-auto mb-7 text-[0.88rem]" style={{ color: 'rgba(212,196,168,0.7)' }}>{tr.ctaP}</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--white)] hover:text-[var(--bark)] cursor-pointer" style={{ color: 'var(--white)', borderColor: 'rgba(212,196,168,0.4)' }}>{tr.ctaBtn}</Link>
        </Reveal>
      </section>
    </>
  )
}
