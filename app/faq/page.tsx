'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import StaggerReveal, { StaggerItem } from '@/components/StaggerReveal'

const faqs = [
  {
    q: 'Where exactly is Mahoro Boutique Hotel located?',
    a: 'Mahoro is located in the centre of Vlorë, Albania, on the waterfront Lungomare — the seafront promenade that runs along the bay. We are a short walk from the city centre, local restaurants, and the beach.'
  },
  {
    q: 'What time is check-in and check-out?',
    a: 'Standard check-in is from 14:00. Standard check-out is by 11:00. Early check-in and late check-out can often be arranged depending on availability — please contact us in advance and we will do our best to accommodate you.'
  },
  {
    q: 'Is breakfast included in the rate?',
    a: 'Breakfast is available as an optional add-on during booking. We serve a generous buffet each morning with fresh bread, local cheeses, seasonal fruit, hot dishes and coffee. Rates vary by season — details are shown at the time of booking.'
  },
  {
    q: 'Do you have parking on site?',
    a: 'Yes — Mahoro offers private, secure on-site parking at no extra charge. This is one of the few hotels in central Vlorë that can offer this. Parking must be requested during booking or at check-in, as spaces are limited.'
  },
  {
    q: 'Is the rooftop pool open year-round?',
    a: 'The pool is heated and open through the shoulder seasons (approximately April–October). In the winter months it may be closed depending on conditions — please contact us directly for current availability if you are travelling outside the main season.'
  },
  {
    q: 'Do you have rooms suitable for families?',
    a: 'Yes. We have two family room categories: the Sea View Family (fits 2 adults + 2 children) and the Deluxe Family (fits 2 adults + 2 children, larger floor plan). Both include views of either the sea or the mountains, a separate sleeping area, and all standard amenities.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Standard bookings can be cancelled free of charge up to 48 hours before arrival. For non-refundable rates (which are priced lower), cancellation charges apply from the date of booking. The specific policy for your rate will always be shown clearly before you confirm your reservation.'
  },
  {
    q: 'Is there a restaurant at the hotel?',
    a: 'Yes — we have a bar and restaurant serving fresh Adriatic-inspired cuisine and Albanian wines. A lighter pool bar menu is also available during pool hours. Room service operates throughout the day.'
  },
  {
    q: 'How far is the hotel from Tirana airport?',
    a: 'Vlorë is approximately 165 km from Tirana International Airport (TIA) — roughly 2 hours by road. We can arrange private airport transfers on request. Please contact us at least 48 hours before your arrival so we can organise this for you.'
  },
  {
    q: 'Do you accommodate pets?',
    a: 'We do not currently accommodate pets at Mahoro. If you are travelling with a guide or assistance animal, please contact us directly before booking so we can discuss arrangements.'
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="border-b"
      style={{ borderColor: 'var(--border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-head)] italic text-[1.08rem] leading-[1.35]" style={{ color: 'var(--bark)' }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border text-[1.1rem] leading-none"
          style={{ borderColor: 'var(--wood)', color: 'var(--wood)' }}
        >+</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[0.88rem] leading-[1.9] max-w-[640px]" style={{ color: 'var(--ink-mid)' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-[var(--gutter)] flex flex-col justify-end pb-16" style={{ minHeight: '42vh', paddingTop: 'calc(var(--nav-h) + 4rem)', background: 'var(--bark)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>
          <Reveal><SectionLabel light>FAQ</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mt-4" style={{ color: 'var(--white)' }}>
              Questions &<br /><em>Answers.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,7rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          {faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)] text-center" style={{ background: 'var(--parchment)' }}>
        <Reveal>
          <SectionLabel center>Still have questions?</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,3rem)] mt-4 mb-4" style={{ color: 'var(--bark)' }}>We're always happy to help.</h2>
          <p className="max-w-[480px] mx-auto mb-8 text-[0.9rem] leading-[1.85]" style={{ color: 'var(--ink-mid)' }}>If your question isn't covered above, reach out directly — by email or WhatsApp. We respond promptly.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:info@mahorohotel.com" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Email Us</a>
            <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Book a Room</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
