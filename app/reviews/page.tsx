'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'

const bars = [
  { label: 'Location', val: '4.5', pct: 90 },
  { label: 'Cleanliness', val: '4.4', pct: 88 },
  { label: 'Value', val: '4.2', pct: 85 },
  { label: 'Service', val: '4.3', pct: 87 },
  { label: 'Comfort', val: '4.4', pct: 89 },
  { label: 'Breakfast', val: '4.3', pct: 86 },
]

const reviews = [
  { stars: 5, text: '"This hotel has just opened and it\'s stunning, you will not be disappointed. Has parking and very close walk to the beach. Rooms have smart TV, hairdryers, robes and slippers. You will not be disappointed with the rooftop pool and breakfast. Will definitely return."', name: 'Celeese 🇬🇧', meta: 'United Kingdom — August 2025', avatar: 47 },
  { stars: 5, text: '"The property is newly finished, so all of the furniture is brand new. The location is perfect — close to the Lungomare but without the noise. Breakfast was excellent, especially the fresh pastries and the local cheeses."', name: 'James R. 🇬🇧', meta: 'United Kingdom — July 2025', avatar: 12 },
  { stars: 5, text: '"Siamo rimasti tre notti e avremmo voluto restare di più. La stanza con vista mare è esattamente come nelle foto — il rattan, la luce del pomeriggio, il balcone. La colazione è abbondante. Il personale è disponibile senza essere invadente. Torneremo in settembre."', name: 'Marco e Silvia 🇮🇹', meta: 'Italia — Luglio 2025', avatar: 57 },
  { stars: 4, text: '"Very good hotel for the price. The rooftop pool was a highlight — we spent most evenings up there watching the sun set over the bay. The beach is an easy five-minute walk. Breakfast could have had a few more hot options but the quality was there. Would book again."', name: 'Tobias K. 🇩🇪', meta: 'Germany — August 2025', avatar: 13 },
  { stars: 5, text: '"Le décor est vraiment réussi — les luminaires en rotin, les tons miel, les miroirs ronds dans la salle de bain. On a l\'impression d\'être dans un hôtel de luxe à Bali mais au bord de la mer Adriatique. La piscine sur le toit est magnifique. Prix très raisonnables pour ce niveau."', name: 'Camille D. 🇫🇷', meta: 'France — Août 2025', avatar: 25 },
  { stars: 5, text: '"Hoteli i ri, i pastër dhe i mirëmbajtur. Stafi ishte shumë i sjellshëm dhe ndihmoi me çdo pyetje. Pishina e çatisë ka pamje të mrekullueshme nga deti. Çmimi është shumë i mirë krahasuar me hotelet e tjera në Vlorë. E rekomandoj pa rezerva."', name: 'Erjon M. 🇦🇱', meta: 'Shqipëri — Qershor 2025', avatar: 33 },
  { stars: 5, text: '"Stayed four nights. The room was quiet — genuinely quiet, which is harder to find than you\'d think in a city-centre hotel. The balcony view over the Lungomare is something I won\'t forget quickly. Good WiFi, good breakfast, friendly staff at the front desk at midnight when we arrived late."', name: 'Anna-Lena H. 🇸🇪', meta: 'Sweden — July 2025', avatar: 44 },
  { stars: 5, text: '"Excellent hotel. The aesthetic is unlike anything else we have seen in Albania — very considered, very calm. The rooftop pool is small but beautiful, and it never felt crowded during our stay. The walk to the beach through the Lungomare promenade is a pleasure in itself."', name: 'Beatrice & Hans 🇨🇭', meta: 'Switzerland — August 2025', avatar: 48 },
  { stars: 5, text: '"Εξαιρετικό ξενοδοχείο με φανταστική θέα στη θάλασσα. Το δωμάτιο ήταν πεντακάθαρο και το πρωινό πλούσιο. Η πισίνα στην ταράτσα είναι κάτι ξεχωριστό — την επισκεφθήκαμε κάθε βράδυ. Το προσωπικό ήταν πάντα πρόθυμο και ευγενικό. Σίγουρα θα επιστρέψουμε."', name: 'Nikos P. 🇬🇷', meta: 'Ελλάδα — Αύγουστος 2025', avatar: 52 },
  { stars: 5, text: '"Wir haben das Mahoro als Zwischenstopp auf einer Albanienrundreise gebucht und sind länger geblieben als geplant. Das Frühstücksbuffet war ordentlich, das Zimmer sehr sauber und die Matratze außergewöhnlich gut. Der Blick vom Balkon auf das Meer am frühen Morgen war jeden Cent wert."', name: 'Lukas W. 🇦🇹', meta: 'Österreich — September 2025', avatar: 56 },
]

function RatingBar({ label, val, pct, index }: { label: string; val: string; pct: number; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
    >
      <span className="text-[0.78rem] font-medium min-w-[80px]" style={{ color: 'var(--ink-mid)' }}>{label}</span>
      <div className="flex-1 h-[4px] rounded-[2px] overflow-hidden" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-[2px]"
          style={{ background: 'var(--gold-warm)' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ delay: index * 0.08 + 0.2, duration: 1.2, ease: 'easeOut' }}
        />
      </div>
      <span className="text-[0.75rem] font-semibold min-w-[24px] text-right" style={{ color: 'var(--wood)' }}>{val}</span>
    </motion.div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      {/* Header */}
      <section className="text-center" style={{ background: 'var(--bark)', padding: 'calc(var(--nav-h) + 4rem) var(--gutter) 3.5rem' }}>
        <Reveal><SectionLabel light center>Guest Voices</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,6vw,4.5rem)] mt-3" style={{ color: 'var(--white)' }}>What our guests say.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[500px] mx-auto mt-3 text-[0.92rem]" style={{ color: 'rgba(212,196,168,0.72)' }}>Ten reviews from guests who stayed at Mahoro and took the time to write about it honestly.</p>
        </Reveal>
      </section>

      {/* Rating summary */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto grid md:grid-cols-[auto_1fr] gap-[clamp(3rem,6vw,6rem)] items-start" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal>
            <div className="text-center px-12 py-10 border rounded-[var(--radius)]" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
              <span className="font-[family-name:var(--font-head)] italic text-[clamp(4rem,8vw,6rem)] leading-none block" style={{ color: 'var(--bark)' }}>4.6</span>
              <div className="text-[0.78rem] tracking-[0.08em] my-1" style={{ color: 'var(--ink-light)' }}>out of 5</div>
              <div className="text-[1.1rem] tracking-[0.1em] my-2" style={{ color: 'var(--gold-warm)' }}>★★★★½</div>
              <div className="text-[0.72rem]" style={{ color: 'var(--ink-light)' }}>Based on 31 reviews<br />Booking.com — 2024–2025</div>
            </div>
          </Reveal>
          <div className="pt-2">
            <Reveal><SectionLabel>Score breakdown</SectionLabel></Reveal>
            <div className="flex flex-col gap-[1.1rem] mt-4">
              {bars.map((bar, i) => (
                <RatingBar key={bar.label} {...bar} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)]" style={{ background: 'var(--parchment)' }}>
        <div className="mx-auto mb-8" style={{ maxWidth: 'var(--max-w)' }}>
          <Reveal><SectionLabel>Guest Reviews</SectionLabel></Reveal>
          <Reveal delay={0.05}><h2 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,4vw,2.8rem)] mt-2" style={{ color: 'var(--bark)' }}>Ten honest opinions.</h2></Reveal>
        </div>
        <StaggerReveal className="mx-auto grid md:grid-cols-3 gap-6" style={{ maxWidth: 'var(--max-w)' }}>
          {reviews.map((r, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col h-full p-7 rounded-[var(--radius)] border" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
                <div className="text-[0.88rem] tracking-[0.08em] mb-3" style={{ color: 'var(--gold-warm)' }}>
                  {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                </div>
                <p className="text-[0.87rem] italic leading-[1.78] flex-1 mb-5" style={{ color: 'var(--ink-mid)' }}>{r.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <img src={`https://i.pravatar.cc/60?img=${r.avatar}`} alt={r.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <div>
                    <div className="text-[0.8rem] font-semibold" style={{ color: 'var(--bark)' }}>{r.name}</div>
                    <div className="text-[0.7rem] mt-px" style={{ color: 'var(--ink-light)' }}>{r.meta}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(3rem,6vw,5rem)] text-center" style={{ background: 'var(--cream)' }}>
        <Reveal>
          <SectionLabel center>Your Turn</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,2.8rem)] mt-4 mb-4" style={{ color: 'var(--bark)' }}>Experience it for yourself.</h2>
          <p className="text-[0.88rem] max-w-[460px] mx-auto mb-7" style={{ color: 'var(--ink-mid)' }}>Direct bookings receive a guaranteed 5% discount — the best rate available anywhere.</p>
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Reserve Now — Save 5%</Link>
        </Reveal>
      </section>
    </>
  )
}
