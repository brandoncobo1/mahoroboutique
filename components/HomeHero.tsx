'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const REVEAL_DURATION = 1.3
const TEXT_START = 0.9

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden flex items-end" style={{ height: '100vh', minHeight: 620, background: 'var(--cream)' }}>
      {/* Image — clip-path expands symmetrically from the center column outward */}
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 calc(50% - 0.5px) 0 calc(50% - 0.5px))' }}
        animate={{ clipPath: 'inset(0 0% 0 0%)' }}
        transition={{
          duration: REVEAL_DURATION,
          delay: 0.25,
          ease: [0.7, 0, 0.2, 1],
        }}
      >
        <Image
          src="/images/pool-hero.jpg"
          alt="Mahoro Boutique Hotel rooftop pool with white loungers, umbrellas and sea view"
          fill
          className="hidden md:block object-cover object-[center_40%]"
          priority
          quality={90}
        />
        <Image
          src="/images/pool-hero-mobile.jpg"
          alt="Mahoro Boutique Hotel sea view room with rattan lamp and balcony"
          fill
          className="md:hidden object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,22,16,0.12) 0%, rgba(28,22,16,0.58) 100%)' }} />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 w-full mx-auto px-[var(--gutter)] pb-[clamp(3rem,7vh,5rem)]" style={{ maxWidth: 'var(--max-w)' }}>
        <motion.p
          className="text-[10px] font-medium tracking-[0.22em] uppercase mb-4"
          style={{ color: 'rgba(212,196,168,0.85)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: TEXT_START + 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Vlorë, Albania · Est. 2023
        </motion.p>
        <motion.h1
          className="font-[family-name:var(--font-head)] italic text-[clamp(2.8rem,7.5vw,6rem)] leading-[1.05] max-w-[700px] mb-4"
          style={{ color: 'var(--white)' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: TEXT_START + 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Where the sea<br />finds stillness.
        </motion.h1>
        <motion.p
          className="text-[clamp(0.78rem,1.2vw,0.88rem)] tracking-[0.18em] uppercase mb-8"
          style={{ color: 'rgba(212,196,168,0.8)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: TEXT_START + 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Boutique Hotel · Rooftop Pool · 400m from the Beach
        </motion.p>
        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: TEXT_START + 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link href="/booking" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ background: 'var(--wood)', color: 'var(--white)', border: '1.5px solid var(--wood)' }}>Reserve Now</Link>
          <Link href="/rooms" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ color: 'var(--white)', border: '1.5px solid rgba(253,250,245,0.7)' }}>Explore Rooms</Link>
        </motion.div>
      </div>

      {/* Scroll indicator — appears after everything else */}
      <motion.div
        className="absolute bottom-10 right-[var(--gutter)] flex flex-col items-center gap-2 z-10"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: TEXT_START + 1.1 }}
      >
        <div className="w-px h-[60px] overflow-hidden" style={{ background: 'rgba(212,196,168,0.4)' }}>
          <div className="w-full h-full animate-[scrollLine_2s_ease-in-out_infinite]" style={{ background: 'rgba(212,196,168,0.9)' }} />
        </div>
        <span className="text-[8px] tracking-[0.22em] uppercase" style={{ color: 'rgba(212,196,168,0.6)', writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
