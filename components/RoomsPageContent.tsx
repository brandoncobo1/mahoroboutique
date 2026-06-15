'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'
import { useLang } from '@/lib/lang'
import { useT } from '@/lib/translations'
import { rooms } from '@/lib/rooms'

const INCLUDED_ICONS = ['pool', 'sun', 'car', 'users'] as const

const stripImages = [
  { src: '/images/694870449.jpg', alt: 'Sea View Room' },
  { src: '/images/694857450.jpg', alt: 'Side Sea View Room' },
  { src: '/images/694848445.jpg', alt: 'Mountain View Room' },
  { src: '/images/694871306.jpg', alt: 'Deluxe Family Room' },
  { src: '/images/694847940.jpg', alt: 'Deluxe Queen Room' },
]

function IncludedIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-10 h-10 mx-auto" style={{ fill: 'none', stroke: 'var(--gold-warm)', strokeWidth: 1.3 }}>
      {type === 'pool' && <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />}
      {type === 'sun' && <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></>}
      {type === 'car' && <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
      {type === 'users' && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
    </svg>
  )
}

export default function RoomsPageContent() {
  const { lang } = useLang()
  const tr = useT(lang).pages.rooms

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center text-center overflow-hidden" style={{ height: '55vh', minHeight: 380 }}>
        <div className="absolute inset-[-40px] bg-cover bg-center" style={{ backgroundImage: 'url(/images/707836355.jpg)', backgroundPosition: 'center 45%' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(28,22,16,0.52)' }} />
        <div className="relative z-10 px-[var(--gutter)]" style={{ paddingTop: 'var(--nav-h)' }}>
          <Reveal><SectionLabel light center>{tr.heroLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] mt-4" style={{ color: 'var(--white)' }}>
              {tr.heroH1a}<br />{tr.heroH1b}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[0.88rem] tracking-[0.06em]" style={{ color: 'rgba(212,196,168,0.75)' }}>
              {tr.heroSub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strip */}
      <div className="grid grid-cols-3 md:grid-cols-5 overflow-hidden" style={{ height: 220, background: 'var(--bark)' }}>
        {stripImages.map((img, i) => (
          <div key={img.src} className={`relative overflow-hidden group${i >= 3 ? ' hidden md:block' : ''}`}>
            <Image src={img.src} alt={img.alt} fill className="object-cover brightness-85 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700" />
          </div>
        ))}
      </div>

      {/* Listing */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto mb-12" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>{tr.listingLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,3.5vw,2.6rem)] mt-3" style={{ color: 'var(--bark)' }}>{tr.listingH2}</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-2 gap-8" style={{ maxWidth: 'var(--max-w)' }}>
          {rooms.map((room) => (
            <StaggerItem key={room.slug}>
              <div className="rounded-[var(--radius)] overflow-hidden border group transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(28,22,16,0.12)]" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image src={room.heroImage} alt={room.name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute top-4 left-4 text-[9px] font-medium tracking-[0.18em] uppercase px-3 py-1.5 rounded-[2px]" style={{ background: 'rgba(28,22,16,0.7)', color: 'var(--gold-light)', backdropFilter: 'blur(4px)' }}>{room.badge}</div>
                </div>
                <div className="p-8 pb-8">
                  <div className="font-[family-name:var(--font-head)] italic text-[clamp(1.3rem,2.5vw,1.7rem)] leading-[1.2] mb-2" style={{ color: 'var(--bark)' }}>{room.name}</div>
                  <div className="text-[0.78rem] tracking-[0.06em] mb-4" style={{ color: 'var(--ink-light)' }}>{room.beds} · {room.capacity}</div>
                  <p className="text-[0.88rem] leading-[1.75] mb-5" style={{ color: 'var(--ink-mid)' }}>{room.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {room.tags.map((tag) => (
                      <span key={tag} className="text-[0.72rem] tracking-[0.1em] uppercase px-[0.65rem] py-[0.3rem] rounded-[2px] border" style={{ color: 'var(--wood)', background: 'var(--parchment)', borderColor: 'var(--border)' }}>{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <Link href={`/rooms/${room.slug}`} className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-7 py-[0.8rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>{tr.viewRoom}</Link>
                    <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-7 py-[0.8rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>{tr.reserve}</Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Included */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,6vw,5rem)]" style={{ background: 'var(--white)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <div className="max-w-[600px] mb-12">
            <Reveal><SectionLabel>{tr.includedLabel}</SectionLabel></Reveal>
            <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,3.5vw,2.6rem)] mt-3" style={{ color: 'var(--bark)' }}>{tr.includedH2}</h2></Reveal>
          </div>
          <StaggerReveal className="grid md:grid-cols-4 gap-8">
            {tr.included.map((item, i) => (
              <StaggerItem key={item.name}>
                <div className="text-center">
                  <div className="mb-4"><IncludedIcon type={INCLUDED_ICONS[i]} /></div>
                  <div className="font-[family-name:var(--font-head)] italic text-[1.05rem] mb-2" style={{ color: 'var(--bark)' }}>{item.name}</div>
                  <div className="text-[0.78rem] leading-[1.6]" style={{ color: 'var(--ink-light)' }}>{item.desc}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)] text-center" style={{ background: 'var(--bark)' }}>
        <Reveal>
          <SectionLabel light center>{tr.ctaLabel}</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,5vw,3.5rem)] mt-4 mb-6" style={{ color: 'var(--white)' }}>{tr.ctaH2}</h2>
          <p className="max-w-[420px] mx-auto mb-8 text-[0.9rem]" style={{ color: 'rgba(212,196,168,0.7)' }}>{tr.ctaP}</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>{tr.ctaBtn}</Link>
        </Reveal>
      </section>
    </>
  )
}
