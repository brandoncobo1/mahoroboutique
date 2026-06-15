'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import { useLang } from '@/lib/lang'
import { useT } from '@/lib/translations'

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
  const { lang } = useLang()
  const tr = useT(lang).pages.faq

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
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,7rem)]" style={{ background: 'var(--cream)' }}>
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          {tr.faqs.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[var(--gutter)] py-[clamp(4rem,7vw,6rem)] text-center" style={{ background: 'var(--parchment)' }}>
        <Reveal>
          <SectionLabel center>{tr.ctaLabel}</SectionLabel>
          <h2 className="font-[family-name:var(--font-head)] italic text-[clamp(1.8rem,4vw,3rem)] mt-4 mb-4" style={{ color: 'var(--bark)' }}>{tr.ctaH2}</h2>
          <p className="max-w-[480px] mx-auto mb-8 text-[0.9rem] leading-[1.85]" style={{ color: 'var(--ink-mid)' }}>{tr.ctaP}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:info@mahorohotel.com" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>{tr.ctaBtn1}</a>
            <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px hover:bg-[var(--wood)] hover:text-[var(--white)] cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>{tr.ctaBtn2}</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
