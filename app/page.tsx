import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'
import HomeHero from '@/components/HomeHero'

export const metadata: Metadata = {
  title: 'Mahoro Boutique Hotel — Vlorë, Albania | Rooftop Pool & Sea Views',
}

const roomCards = [
  { href: '/rooms/sea-view', cat: 'Sea View', name: 'Deluxe Double — Sea View', beds: '1 Queen Bed', img: '/images/694870449.jpg', alt: 'Deluxe sea view room with balcony' },
  { href: '/rooms/side-sea-view', cat: 'Side Sea View', name: 'Deluxe Double — Side Sea View', beds: '1 Queen Bed', img: '/images/694857450.jpg', alt: 'Side sea view room with rattan interiors' },
  { href: '/rooms/sea-view-family', cat: 'Sea View — Family', name: 'Deluxe Sea View — Family', beds: 'Full Bed + 2 Sofas', img: '/images/694842267.jpg', alt: 'Spacious sea view family room' },
  { href: '/rooms/mountain-view', cat: 'Mountain View', name: 'Double Room — Mountain View', beds: 'Queen + Sofa Bed', img: '/images/694848445.jpg', alt: 'Mountain view room with balcony' },
  { href: '/rooms/deluxe-family', cat: 'Deluxe Family', name: 'Deluxe Double — Family Room', beds: 'Queen + Sofa Bed', img: '/images/694871306.jpg', alt: 'Deluxe family room with rattan decor' },
  { href: '/rooms/deluxe-queen', cat: 'Deluxe Queen', name: 'Deluxe Double — Queen', beds: '1 Queen Bed', img: '/images/694847940.jpg', alt: 'Deluxe queen room with balcony' },
]

const amenities = [
  { icon: 'pool', name: 'Rooftop Pool', desc: 'An infinity-edge pool on the roof, framing a 180° panorama of the Ionian Sea.' },
  { icon: 'sunrise', name: 'Buffet Breakfast', desc: 'A generous morning spread of local and continental fare, served daily.' },
  { icon: 'home', name: 'Sea View Rooms', desc: 'Every balcony faces the water. Wake to the Lungomare below and mountains beyond.' },
  { icon: 'coffee', name: 'Bar & Restaurant', desc: 'Fresh Adriatic cuisine. Local wine. Room service available throughout the day.' },
  { icon: 'car', name: 'Free Parking', desc: 'Private on-site parking at no extra charge — a genuine rarity in central Vlorë.' },
  { icon: 'users', name: '24h Front Desk', desc: 'The team is always on. Late arrivals, early departures, local recommendations.' },
]

const reviewCards = [
  { stars: 5, text: '"This hotel has just opened and it\'s stunning, you will not be disappointed. Has parking and very close walk to the beach. Rooms have smart TV, hairdryers, robes and slippers. You will not be disappointed with the rooftop pool and breakfast. Will definitely return."', name: 'Celeese', flag: '🇬🇧', meta: 'United Kingdom · August 2025', avatar: 'https://i.pravatar.cc/60?img=47' },
  { stars: 5, text: '"The property is newly finished, so all of the furniture is brand new. The location is perfect — close to the Lungomare but without the noise. Breakfast was excellent, especially the fresh pastries."', name: 'Marco T.', flag: '🇮🇹', meta: 'Italy · July 2025', avatar: 'https://i.pravatar.cc/60?img=57' },
  { stars: 5, text: '"The rattan decor and the warm tones made the room feel completely different from a regular hotel. Woke up every morning to a view of the sea through the balcony door. The pool in the evening with that light — unforgettable."', name: 'Sofía M.', flag: '🇩🇪', meta: 'Germany · August 2025', avatar: 'https://i.pravatar.cc/60?img=25' },
]

const galleryGrid = [
  { src: '/images/707836355.jpg', alt: 'Mahoro rooftop pool panoramic sea view', colSpan: 2, rowSpan: 2, label: 'The Rooftop' },
  { src: '/images/694870449.jpg', alt: 'Deluxe sea view room balcony', label: 'Sea View Room' },
  { src: '/images/694848424.jpg', alt: 'Bedroom rattan pendant sea view', label: 'Rattan Interiors' },
  { src: '/images/694857450.jpg', alt: 'Side sea view balcony mountain backdrop', label: 'Side Sea View' },
  { src: '/images/694842267.jpg', alt: 'Deluxe family sea view room', colSpan: 2, label: 'Sea View Family Room' },
  { src: '/images/694848445.jpg', alt: 'Mountain view room queen bed', label: 'Mountain View Room' },
  { src: '/images/694871306.jpg', alt: 'Deluxe family room rattan decor', label: 'Deluxe Family Room' },
  { src: '/images/694848159.jpg', alt: 'Wide balcony panoramic Ionian Sea view', label: 'Panoramic Views' },
  { src: '/images/694855692.jpg', alt: 'Walk-in glass shower stone tile', label: 'The Bathroom' },
]

const distances = [
  ['Vlore Beach', '400m · 5 min walk'],
  ['Lungomare Promenade', '3 min walk'],
  ['Independence Square', '900m · 11 min walk'],
  ['Kuzum Baba Hill', '10 min walk'],
  ['City centre restaurants', '5–10 min walk'],
  ['Rinas Airport (Tirana)', '110km · ~1h 20min'],
]

function AmenityIcon({ type }: { type: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" style={{ fill: 'none', stroke: 'var(--gold-warm)', strokeWidth: 1.4 }}>
      {type === 'pool' && <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />}
      {type === 'sunrise' && <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></>}
      {type === 'home' && <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>}
      {type === 'coffee' && <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />}
      {type === 'car' && <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>}
      {type === 'users' && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>}
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Stats */}
      <div className="px-[var(--gutter)] py-10 border-b" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
        <StaggerReveal className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center" style={{ maxWidth: 'var(--max-w)' }}>
          {[['400', 'Metres', 'To Vlore Beach'], ['11', 'Rooms', 'Each one different'], ['Rooftop', 'Pool & Bar', 'With panoramic sea views'], ['4.6', 'Rating', 'Booking.com · 31 reviews']].map(([num, label, desc]) => (
            <StaggerItem key={label}>
              <span className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] leading-none block" style={{ color: 'var(--bark)' }}>{num}</span>
              <div className="text-[0.7rem] font-medium tracking-[0.18em] uppercase mt-1" style={{ color: 'var(--ink-light)' }}>{label}</div>
              <div className="text-[0.72rem]" style={{ color: 'var(--ink-light)' }}>{desc}</div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>

      {/* Manifesto */}
      <section className="px-[var(--gutter)] py-[clamp(5rem,9vw,8rem)] text-center" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto max-w-[680px]">
          <Reveal><SectionLabel center>The Mahoro Story</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.2] mb-7" style={{ color: 'var(--bark)' }}>A place that belongs<br />to the Adriatic coast.</h2></Reveal>
          <Reveal delay={0.1}><div className="mx-auto mb-7 h-px max-w-[60px]" style={{ background: 'var(--sand)' }} /></Reveal>
          <Reveal delay={0.15}><p className="text-[clamp(0.95rem,1.4vw,1.05rem)] leading-[1.9] mb-5" style={{ color: 'var(--ink-mid)' }}>Mahoro arrived quietly in Vlorë in 2023 — eleven rooms, a rooftop pool, and a conviction that the Albanian Riviera deserved a hotel that actually looked like it belonged here. Warm timber ceilings, rattan pendant lights, rooms that open onto sea air. The kind of place where the design decisions are invisible until you realise you've been exhaling since you arrived.</p></Reveal>
          <Reveal delay={0.2}><p className="text-[clamp(0.95rem,1.4vw,1.05rem)] leading-[1.9]" style={{ color: 'var(--ink-mid)' }}>Vlorë has long been one of the Adriatic's best-kept secrets. The Lungomare stretches south in both directions. The sea is the colour of something you haven't quite seen before. We built Mahoro for guests who travel to feel somewhere rather than see something — who understand that the right room, the right light, and the right view are worth more than five amenity checkboxes.</p></Reveal>
        </div>
      </section>

      {/* Rooms preview */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--parchment)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Accommodation</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4.5vw,3rem)] mb-8" style={{ color: 'var(--bark)' }}>Six rooms.<br />Every one different.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ maxWidth: 'var(--max-w)' }}>
          {roomCards.map((r, i) => (
            <StaggerItem key={r.href} direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}>
              <Link href={r.href} className="group relative block overflow-hidden rounded-[var(--radius)] cursor-pointer" style={{ aspectRatio: '3/4' }}>
                <Image src={r.img} alt={r.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,33vw" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,22,16,0.75) 0%, rgba(28,22,16,0) 55%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--gold-light)' }}>{r.cat}</div>
                  <div className="font-[family-name:var(--font-head)] italic text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.2] mb-2" style={{ color: 'var(--white)' }}>{r.name}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-[0.78rem]" style={{ color: 'rgba(212,196,168,0.85)' }}>{r.beds}</span>
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase border-b" style={{ color: 'var(--gold-light)', borderColor: 'rgba(212,196,168,0.4)' }}>Discover</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <Reveal className="text-center mt-10">
          <Link href="/rooms" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>View All Rooms</Link>
        </Reveal>
      </section>

      {/* Amenities */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6.5rem)]" style={{ background: 'var(--bark)' }}>
        <div className="mx-auto grid md:grid-cols-[1fr_2fr] gap-[clamp(3rem,6vw,6rem)] items-start" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal direction="left">
            <SectionLabel light>What We Offer</SectionLabel>
            <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,3rem)] leading-[1.15]" style={{ color: 'var(--white)' }}>What<br />awaits<br /><em>you.</em></h2>
          </Reveal>
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-7">
            {amenities.map((a) => (
              <StaggerItem key={a.name}>
                <AmenityIcon type={a.icon} />
                <div className="font-[family-name:var(--font-head)] italic text-[1.05rem] mt-3 mb-1" style={{ color: 'var(--white)' }}>{a.name}</div>
                <div className="text-[0.78rem] leading-[1.6]" style={{ color: 'rgba(212,196,168,0.65)' }}>{a.desc}</div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Pool feature */}
      <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh', minHeight: 420 }}>
        <Image src="/images/707836355.jpg" alt="Mahoro rooftop pool at sunset" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(28,22,16,0.5)' }} />
        <Reveal className="relative z-10 text-center px-[var(--gutter)]">
          <blockquote className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4.5vw,3.5rem)] max-w-[700px] leading-[1.2] mb-8" style={{ color: 'var(--white)' }}>
            <span style={{ opacity: 0.4, fontSize: '1.3em', verticalAlign: '-0.3em', marginRight: '0.1em' }}>"</span>
            The rooftop is where Vlorë reveals itself.
          </blockquote>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[rgba(253,250,245,0.15)] cursor-pointer" style={{ color: 'var(--white)', borderColor: 'rgba(253,250,245,0.7)' }}>Reserve Your Stay</Link>
        </Reveal>
      </div>

      {/* Reviews */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Guest Voices</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mb-8" style={{ color: 'var(--bark)' }}>What our guests say.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-6" style={{ maxWidth: 'var(--max-w)' }}>
          {reviewCards.map((r, i) => (
            <StaggerItem key={r.name} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
              <div className="p-7 rounded-[var(--radius)] border h-full" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
                <div className="text-[0.85rem] tracking-[0.1em] mb-3" style={{ color: 'var(--gold-warm)' }}>{'★'.repeat(r.stars)}</div>
                <p className="text-[0.88rem] leading-[1.75] italic mb-4" style={{ color: 'var(--ink-mid)' }}>{r.text}</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} width={40} height={40} className="rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="text-[0.78rem] font-semibold" style={{ color: 'var(--bark)' }}>{r.name} {r.flag}</div>
                    <div className="text-[0.7rem]" style={{ color: 'var(--ink-light)' }}>{r.meta}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <Reveal className="text-center mt-10">
          <Link href="/reviews" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Read All Reviews</Link>
        </Reveal>
      </section>

      {/* Gallery preview */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--parchment)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Visual Story</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mb-8" style={{ color: 'var(--bark)' }}>A hotel you need to see.</h2></Reveal>
          <StaggerReveal className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[200px] sm:auto-rows-[260px] gap-[0.85rem]">
            {galleryGrid.map((g, i) => (
              <StaggerItem
                key={g.src}
                direction={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'up'}
                style={{ gridColumn: g.colSpan ? `span ${g.colSpan}` : undefined, gridRow: g.rowSpan ? `span ${g.rowSpan}` : undefined }}
              >
                <div className="relative overflow-hidden rounded-[var(--radius)] group cursor-pointer w-full h-full">
                  <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" sizes="(max-width:768px) 50vw, 33vw" />
                  <div className="absolute inset-0 flex items-end p-5 transition-all duration-300 group-hover:bg-[rgba(28,22,16,0.4)]">
                    <span className="text-[0.75rem] tracking-[0.06em] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" style={{ color: 'var(--white)' }}>{g.label}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
          <Reveal className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Explore the Gallery</Link>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--white)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Where We Are</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mb-8" style={{ color: 'var(--bark)' }}>The heart of Vlorë.</h2></Reveal>
          <div className="grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">
            <Reveal direction="left">
              <div className="rounded-[var(--radius)] overflow-hidden border" style={{ height: 380, borderColor: 'var(--border)', boxShadow: '0 4px 24px rgba(28,22,16,0.08)' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.123!2d19.4886!3d40.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134afe9d9b1e7f0b%3A0x1!2sMahoro+Boutique+Hotel!5e1!3m2!1sen!2sal!4v1" width="100%" height="100%" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" title="Mahoro location" />
              </div>
            </Reveal>
            <Reveal direction="right">
              <p className="text-[0.88rem] mb-6" style={{ color: 'var(--ink-mid)' }}>Rruga Duro Shaska, Vlorë 9401, Albania — close to everything, far from the noise.</p>
              <div className="border-t" style={{ borderColor: 'var(--border)' }}>
                {distances.map(([place, val]) => (
                  <div key={place} className="flex justify-between items-center py-3 border-b text-[0.85rem]" style={{ borderColor: 'var(--border)' }}>
                    <span style={{ color: 'var(--ink-mid)' }}>{place}</span>
                    <span className="font-semibold text-[0.8rem] tracking-[0.04em]" style={{ color: 'var(--wood)' }}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/location" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Full Directions</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(5rem,9vw,8rem)] text-center" style={{ background: 'var(--bark)' }}>
        <Reveal className="mx-auto max-w-[600px]">
          <SectionLabel center light>Begin Your Stay</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,5vw,3.8rem)] leading-[1.15] mt-4 mb-6" style={{ color: 'var(--white)' }}>Your stay begins<br />with one decision.</h2>
          <p className="max-w-[480px] mx-auto mb-8 text-[0.9rem]" style={{ color: 'rgba(212,196,168,0.7)' }}>Reserve directly for the guaranteed best rate — no fees, no intermediaries, just you and the Adriatic.</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Reserve Directly</Link>
        </Reveal>
      </section>

    </>
  )
}
