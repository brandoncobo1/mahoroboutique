'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'
import { useLang } from '@/lib/lang'
import { useT } from '@/lib/translations'

const FACILITY_ICONS = ['shield', 'sun', 'coffee', 'car', 'users', 'phone'] as const

const valueImages = [
  { img: '/images/694848301.jpg', alt: 'Crafted rattan pendant light and warm wood ceiling' },
  { img: '/images/694848159.jpg', alt: 'Wide private balcony with sea and mountain panorama in Vlorë' },
  { img: '/images/707836355.jpg', alt: 'Mahoro rooftop pool with branded sun loungers and Ionian Sea view' },
]

function Icon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" style={{ fill: 'none', stroke: 'var(--gold-warm)', strokeWidth: 1.4 }}>
      {type === 'shield' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
      {type === 'sun' && <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>}
      {type === 'coffee' && <><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /></>}
      {type === 'car' && <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
      {type === 'users' && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
      {type === 'phone' && <><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></>}
    </svg>
  )
}

export default function AboutPageContent() {
  const { lang } = useLang()
  const tr = useT(lang).pages.about

  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2" style={{ minHeight: '100svh' }}>
        <div className="flex flex-col justify-center px-[var(--gutter)] py-[clamp(6rem,12vw,10rem)]" style={{ background: 'var(--bark)', paddingTop: 'calc(var(--nav-h) + 4rem)' }}>
          <Reveal><SectionLabel light>{tr.heroLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] my-4 whitespace-pre-line" style={{ color: 'var(--white)' }}>
              {tr.heroH1}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[clamp(0.95rem,1.5vw,1.08rem)] leading-[1.85] max-w-[480px]" style={{ color: 'rgba(212,196,168,0.75)' }}>
              {tr.heroP}
            </p>
          </Reveal>
        </div>
        <div className="relative overflow-hidden min-h-[55vw] md:min-h-0">
          <Image src="/images/694848424.jpg" alt="Warm honey-toned bedroom interior with rattan lamp and sea view at Mahoro" fill className="object-cover" priority />
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-[var(--gutter)] py-[clamp(5rem,9vw,8rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid md:grid-cols-2 gap-[clamp(3rem,6vw,6rem)] items-start" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal direction="left">
            <SectionLabel>{tr.philosophyLabel}</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-6 whitespace-pre-line" style={{ color: 'var(--bark)' }}>{tr.philosophyH2}</h2>
            <p className="text-[0.92rem] leading-[1.9] mb-4" style={{ color: 'var(--ink-mid)' }}>{tr.philosophyP1}</p>
            <p className="text-[0.92rem] leading-[1.9] mb-4" style={{ color: 'var(--ink-mid)' }}>{tr.philosophyP2}</p>
            <p className="text-[0.92rem] leading-[1.9] mb-8" style={{ color: 'var(--ink-mid)' }}>{tr.philosophyP3}</p>
            <Link href="/rooms" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>{tr.philosophyBtn}</Link>
          </Reveal>
          <StaggerReveal className="grid grid-cols-2 gap-4">
            {['/images/694855692.jpg', '/images/716409025.jpg', '/images/694848301.jpg', '/images/694842331.jpg'].map((src) => (
              <StaggerItem key={src}>
                <div className="relative overflow-hidden rounded-[var(--radius)]" style={{ height: 220 }}>
                  <Image src={src} alt="Mahoro hotel room detail" fill className="object-cover" />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--parchment)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>{tr.valuesLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)]" style={{ color: 'var(--bark)' }}>{tr.valuesH2}</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8 mt-10" style={{ maxWidth: 'var(--max-w)' }}>
          {tr.values.map((v, i) => (
            <StaggerItem key={v.title}>
              <div className="relative overflow-hidden rounded-[var(--radius)] mb-5" style={{ height: 240 }}>
                <Image src={valueImages[i].img} alt={valueImages[i].alt} fill className="object-cover" />
              </div>
              <h3 className="font-[family-name:var(--font-head)] italic text-[1.25rem] mb-2" style={{ color: 'var(--bark)' }}>{v.title}</h3>
              <p className="text-[0.85rem] leading-[1.75]" style={{ color: 'var(--ink-mid)' }}>{v.desc}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Facilities */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--bark)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel light>{tr.facilitiesLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mb-10" style={{ color: 'var(--white)' }}>{tr.facilitiesH2}</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8" style={{ maxWidth: 'var(--max-w)' }}>
          {tr.facilities.map((a, i) => (
            <StaggerItem key={a.name}>
              <div className="p-7 rounded-[var(--radius)] border" style={{ borderColor: 'rgba(212,196,168,0.12)' }}>
                <div className="mb-4"><Icon type={FACILITY_ICONS[i]} /></div>
                <div className="font-[family-name:var(--font-head)] italic text-[1.1rem] mb-2" style={{ color: 'var(--white)' }}>{a.name}</div>
                <div className="text-[0.78rem] leading-[1.65]" style={{ color: 'rgba(212,196,168,0.55)' }}>{a.desc}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Promise */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)] text-center" style={{ background: 'var(--cream)' }}>
        <Reveal>
          <SectionLabel center>{tr.promiseLabel}</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4.5vw,3.2rem)] mt-4 mb-4 whitespace-pre-line" style={{ color: 'var(--bark)' }}>{tr.promiseH2}</h2>
          <p className="max-w-[560px] mx-auto mb-8 text-[0.92rem] leading-[1.85]" style={{ color: 'var(--ink-mid)' }}>{tr.promiseP}</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>{tr.promiseBtn}</Link>
        </Reveal>
      </section>
    </>
  )
}
