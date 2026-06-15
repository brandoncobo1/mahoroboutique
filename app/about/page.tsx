import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind Mahoro Boutique Hotel — a quietly luxurious coastal retreat in Vlorë, Albania, designed around natural materials and the spirit of the Albanian Riviera.',
}

const values = [
  { img: '/images/694848301.jpg', alt: 'Crafted rattan pendant light and warm wood ceiling', title: 'Crafted Interiors', desc: 'Every room was designed as a single object — not assembled from a catalogue. The rattan pendants, the timber joinery, the stone details: each was chosen because it improves the room rather than merely fills it.' },
  { img: '/images/694848159.jpg', alt: 'Wide private balcony with sea and mountain panorama in Vlorë', title: 'The Albanian Riviera', desc: 'We are genuinely proud to be in Vlorë. The bay, the Lungomare, the mountains behind the city, the quality of the water — these are not backdrop. They are the reason Mahoro exists where it does.' },
  { img: '/images/707836355.jpg', alt: 'Mahoro rooftop pool with branded sun loungers and Ionian Sea view', title: 'A quieter kind of luxury', desc: 'Nothing at Mahoro shouts. The luxury is in the details that most hotels overlook: the quality of the cotton, the view from the exact angle of the bed, the pool that is never too full to feel like yours.' },
]

const amenities = [
  { icon: 'shield', name: 'Rooftop Pool', desc: 'An infinity-edge pool with panoramic views of the Ionian Sea and the Albanian mountains. Heated in cooler months. Sun loungers provided.' },
  { icon: 'sun', name: 'Buffet Breakfast', desc: 'A generous daily spread of fresh breads, local cheeses, seasonal fruit, hot dishes and coffee. Served every morning.' },
  { icon: 'coffee', name: 'Bar & Restaurant', desc: 'Fresh Adriatic cuisine and Albanian wines. A pool bar for lighter meals and afternoon drinks. Room service available throughout the day.' },
  { icon: 'car', name: 'Free Parking', desc: 'Private, secure on-site parking at no charge. A genuine rarity in central Vlorë — available for all guests.' },
  { icon: 'users', name: '24h Front Desk', desc: 'The team is always present. Late arrivals, early departures, local recommendations, luggage storage.' },
  { icon: 'phone', name: 'Free WiFi & Smart TV', desc: 'High-speed WiFi throughout the property. Flat-screen smart TVs with streaming capability in every room.' },
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2" style={{ minHeight: '100svh' }}>
        <div className="flex flex-col justify-center px-[var(--gutter)] py-[clamp(6rem,12vw,10rem)]" style={{ background: 'var(--bark)', paddingTop: 'calc(var(--nav-h) + 4rem)' }}>
          <Reveal><SectionLabel light>Our Story</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] my-4" style={{ color: 'var(--white)' }}>
              A hotel born from<br /><em>the coast itself.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[clamp(0.95rem,1.5vw,1.08rem)] leading-[1.85] max-w-[480px]" style={{ color: 'rgba(212,196,168,0.75)' }}>
              Mahoro is not a rebranded guesthouse or a converted apartment block. It was conceived from the ground up for Vlorë — for the light here, the colours here, the pace here. Every design decision started with the question: does this belong?
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
            <SectionLabel>Philosophy</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-6" style={{ color: 'var(--bark)' }}>Understated.<br />Tactile.<br /><em>Ours.</em></h2>
            <p className="text-[0.92rem] leading-[1.9] mb-4" style={{ color: 'var(--ink-mid)' }}>We take the concept of a boutique hotel seriously. Eleven rooms means eleven guests who receive genuine attention rather than the illusion of it. The team knows your name before breakfast. The pool is never crowded. The silence in the corridors is real.</p>
            <p className="text-[0.92rem] leading-[1.9] mb-4" style={{ color: 'var(--ink-mid)' }}>The interiors draw on the natural palette of the Albanian coast — timber that has been worn by light, rattan that catches it differently at every hour, linen that moves. We wanted rooms that felt inhabited rather than staged; spaces that a traveller would return to at the end of a day and feel, without quite knowing why, that they were somewhere that suited them.</p>
            <p className="text-[0.92rem] leading-[1.9] mb-8" style={{ color: 'var(--ink-mid)' }}>Vlorë has a particular quality of light in the late afternoon, when it comes off the water and spreads across everything in a way that makes the ordinary look considered. That's the light we built these rooms for.</p>
            <Link href="/rooms" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Explore the Rooms</Link>
          </Reveal>
          <StaggerReveal className="grid grid-cols-2 gap-4">
            {['/images/694855692.jpg', '/images/716409025.jpg', '/images/694848301.jpg', '/images/694842331.jpg'].map((src, i) => (
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
          <Reveal><SectionLabel>What We Stand For</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)]" style={{ color: 'var(--bark)' }}>Three things we never compromise on.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8 mt-10" style={{ maxWidth: 'var(--max-w)' }}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="relative overflow-hidden rounded-[var(--radius)] mb-5" style={{ height: 240 }}>
                <Image src={v.img} alt={v.alt} fill className="object-cover" />
              </div>
              <h3 className="font-[family-name:var(--font-head)] italic text-[1.25rem] mb-2" style={{ color: 'var(--bark)' }}>{v.title}</h3>
              <p className="text-[0.85rem] leading-[1.75]" style={{ color: 'var(--ink-mid)' }}>{v.desc}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* Amenities full */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--bark)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel light>Facilities</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mb-10" style={{ color: 'var(--white)' }}>Everything in place.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-8" style={{ maxWidth: 'var(--max-w)' }}>
          {amenities.map((a) => (
            <StaggerItem key={a.name}>
              <div className="p-7 rounded-[var(--radius)] border" style={{ borderColor: 'rgba(212,196,168,0.12)' }}>
                <div className="mb-4"><Icon type={a.icon} /></div>
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
          <SectionLabel center>Our Promise</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4.5vw,3.2rem)] mt-4 mb-4" style={{ color: 'var(--bark)' }}>The best hotel in Vlorë<br /><em>that nobody has heard of yet.</em></h2>
          <p className="max-w-[560px] mx-auto mb-8 text-[0.92rem] leading-[1.85]" style={{ color: 'var(--ink-mid)' }}>That is the position we set out to earn — and the position we intend to keep. Mahoro is not trying to be the biggest, or the most well-known. It is trying to be the one you return to.</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Reserve Your Stay</Link>
        </Reveal>
      </section>
    </>
  )
}
