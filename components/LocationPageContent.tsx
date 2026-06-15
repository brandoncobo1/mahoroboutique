'use client'

import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'
import { useLang } from '@/lib/lang'
import { useT } from '@/lib/translations'

const TRANSPORT_ICONS = ['car', 'bus', 'plane'] as const

const distances = [
  ['Vlorë City Centre', '5 min walk', '0.4 km'],
  ['Lungomare Seafront', 'On the promenade', '0 km'],
  ['Vlorë Beach', '8 min walk', '0.7 km'],
  ['Independence Monument', '10 min walk', '0.9 km'],
  ['Muradie Mosque', '12 min walk', '1.1 km'],
  ['Vlorë Ferry Terminal', '20 min walk', '1.8 km'],
  ['Sazan Island (day trips)', 'By boat', '9 km'],
  ['Orikum Village', 'By car', '15 km'],
  ['Llogara National Park', 'By car', '38 km'],
  ['Himara Village', 'By car', '65 km'],
  ['Tirana International Airport', 'By car', '165 km'],
]

function TransportIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ fill: 'none', stroke: 'var(--gold-warm)', strokeWidth: 1.4 }}>
      {type === 'car' && (
        <>
          <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v1" />
          <path d="M14 17H9m8.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          <path d="M3 9l2-4h10l2 4" />
          <path d="M19 12h2l1 5h-5" />
        </>
      )}
      {type === 'bus' && (
        <>
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <path d="M1 8h15M5 8v5M11 8v5" />
          <circle cx="4.5" cy="18.5" r="1.5" />
          <circle cx="11.5" cy="18.5" r="1.5" />
          <path d="M4.5 17V16h7v1" />
        </>
      )}
      {type === 'plane' && (
        <>
          <path d="M21 16l-4-3-2-8-3 5-4-2 1 3-3 2 9 6-1-4 3 1z" />
          <path d="M3 20h8" />
        </>
      )}
    </svg>
  )
}

export default function LocationPageContent() {
  const { lang } = useLang()
  const tr = useT(lang).pages.location

  return (
    <>
      {/* Hero */}
      <section className="px-[var(--gutter)] flex flex-col justify-end pb-16" style={{ minHeight: '42vh', paddingTop: 'calc(var(--nav-h) + 4rem)', background: 'var(--bark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>
          <Reveal><SectionLabel light>{tr.heroLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mt-4" style={{ color: 'var(--white)' }}>
              {tr.heroH1a}<br /><em>{tr.heroH1b}</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[0.92rem] leading-[1.8] max-w-[480px]" style={{ color: 'rgba(212,196,168,0.7)' }}>
              {tr.heroP}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: 'var(--cream)' }}>
        <Reveal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4!2d19.4897!3d40.4527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134ffe2a9f2a1a9d%3A0x4c5e3f4b3a7b8c9d!2sMahoro%20Boutique%20Hotel%2C%20Vlorë!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="480"
            style={{ display: 'block', border: 0, filter: 'sepia(0.15)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahoro Boutique Hotel location map"
          />
        </Reveal>
      </section>

      {/* Address + Distances */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,7rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid md:grid-cols-2 gap-[clamp(3rem,6vw,6rem)]" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal direction="left">
            <SectionLabel>{tr.addressLabel}</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.6rem,3vw,2.4rem)] mb-6" style={{ color: 'var(--bark)' }}>{tr.addressH2}</h2>
            <address className="not-italic text-[0.88rem] leading-[2] mb-8" style={{ color: 'var(--ink-mid)' }}>
              Rruga Egnatia<br />Lungomare, Vlorë<br />Albania
            </address>
            <div className="text-[0.85rem]" style={{ color: 'var(--ink-mid)' }}>
              <div className="mb-2"><strong style={{ color: 'var(--bark)' }}>{tr.phone}</strong> <a href="tel:+355XXXXXXXX" style={{ color: 'var(--wood)' }}>+355 XX XXX XXXX</a></div>
              <div className="mb-2"><strong style={{ color: 'var(--bark)' }}>{tr.email}</strong> <a href="mailto:info@mahorohotel.com" style={{ color: 'var(--wood)' }}>info@mahorohotel.com</a></div>
              <div className="mb-6"><strong style={{ color: 'var(--bark)' }}>{tr.whatsapp}</strong> <a href="https://wa.me/355XXXXXXXX" style={{ color: 'var(--wood)' }}>{tr.whatsappText}</a></div>
            </div>
            <a href="https://maps.google.com/?q=Mahoro+Boutique+Hotel+Vlore+Albania" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>{tr.mapsBtn}</a>
          </Reveal>

          <Reveal direction="right">
            <SectionLabel>{tr.distancesLabel}</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.6rem,3vw,2.4rem)] mb-6" style={{ color: 'var(--bark)' }}>{tr.distancesH2}</h2>
            <table className="w-full text-[0.82rem]" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                {distances.map(([place, time, dist]) => (
                  <tr key={place} className="border-b" style={{ borderColor: 'var(--border)' }}>
                    <td className="py-3 pr-4" style={{ color: 'var(--ink)' }}>{place}</td>
                    <td className="py-3 pr-4 text-right whitespace-nowrap" style={{ color: 'var(--ink-light)' }}>{time}</td>
                    <td className="py-3 text-right whitespace-nowrap font-medium" style={{ color: 'var(--wood)' }}>{dist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Getting Here */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--parchment)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>{tr.gettingHereLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,3.5vw,2.6rem)] mb-10" style={{ color: 'var(--bark)' }}>{tr.gettingHereH2}</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8" style={{ maxWidth: 'var(--max-w)' }}>
          {tr.howToGetHere.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="p-7 rounded-[var(--radius)]" style={{ background: 'var(--cream)' }}>
                <div className="mb-4"><TransportIcon type={TRANSPORT_ICONS[i]} /></div>
                <h3 className="font-[family-name:var(--font-head)] italic text-[1.1rem] mb-3" style={{ color: 'var(--bark)' }}>{item.title}</h3>
                <p className="text-[0.82rem] leading-[1.75]" style={{ color: 'var(--ink-mid)' }}>{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Nearby */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--bark)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel light>{tr.nearbyLabel}</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,3.5vw,2.6rem)] mb-10" style={{ color: 'var(--white)' }}>{tr.nearbyH2}</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-6" style={{ maxWidth: 'var(--max-w)' }}>
          {tr.nearby.map((item) => (
            <StaggerItem key={item.name}>
              <div className="p-6 border rounded-[var(--radius)]" style={{ borderColor: 'rgba(212,196,168,0.12)' }}>
                <h3 className="font-[family-name:var(--font-head)] italic text-[1rem] mb-2" style={{ color: 'var(--gold-warm)' }}>{item.name}</h3>
                <p className="text-[0.8rem] leading-[1.7]" style={{ color: 'rgba(212,196,168,0.6)' }}>{item.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)] text-center" style={{ background: 'var(--cream)' }}>
        <Reveal>
          <SectionLabel center>{tr.ctaLabel}</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,3rem)] mt-4 mb-4" style={{ color: 'var(--bark)' }}>{tr.ctaH2}</h2>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer mt-4" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>{tr.ctaBtn}</Link>
        </Reveal>
      </section>
    </>
  )
}
