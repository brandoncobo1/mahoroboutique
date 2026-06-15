'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang, type Lang } from '@/lib/lang'
import { useT } from '@/lib/translations'

type NavKey = 'home' | 'rooms' | 'about' | 'gallery' | 'reviews' | 'location' | 'faq'

const NAV_LINKS: { href: string; key: NavKey }[] = [
  { href: '/', key: 'home' },
  { href: '/rooms', key: 'rooms' },
  { href: '/about', key: 'about' },
  { href: '/gallery', key: 'gallery' },
  { href: '/reviews', key: 'reviews' },
  { href: '/location', key: 'location' },
  { href: '/faq', key: 'faq' },
]

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const rafRef = useRef<number | null>(null)

  const { lang, setLang } = useLang()
  const tr = useT(lang)

  // RAF-throttled scroll — only triggers state update when boolean flips
  useEffect(() => {
    if (!isHome) return
    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const next = window.scrollY > 60
        setScrolled(prev => prev === next ? prev : next)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const transparent = isHome && !scrolled

  const navBg = transparent
    ? 'bg-transparent'
    : 'bg-[rgba(253,250,245,0.96)] backdrop-blur-[10px] shadow-[0_1px_0_var(--border)]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] h-[var(--nav-h)] flex items-center px-[var(--gutter)] transition-all duration-300 ${navBg}`}
        style={{ height: 'var(--nav-h)' }}
      >
        <div
          className="w-full mx-auto grid items-center gap-4"
          style={{ maxWidth: 'var(--max-w)', gridTemplateColumns: '1fr auto 1fr' }}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="font-[family-name:var(--font-head)] italic text-[clamp(1.4rem,2vw,1.75rem)] tracking-[0.02em] transition-colors duration-300"
              style={{ color: 'var(--bark)' }}
            >
              Mahoro
            </span>
            <span
              className="text-[9px] tracking-[0.18em] uppercase mt-[2px] transition-colors duration-300"
              style={{ color: 'var(--ink-light)', fontVariant: 'small-caps' }}
            >
              Boutique Hotel · Vlorë
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-[clamp(1.2rem,2.5vw,2rem)]">
            {NAV_LINKS.map(({ href, key }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 group"
                  style={{ color: 'var(--ink-mid)' }}
                >
                  {tr.nav[key]}
                  <span
                    className="absolute bottom-[-3px] left-0 right-0 h-[1px] transition-transform duration-300 origin-left"
                    style={{
                      background: 'var(--gold-warm)',
                      transform: active ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Right: lang + reserve */}
          <div className="hidden md:flex items-center gap-4 justify-end">
            <div className="flex gap-1">
              {(['en', 'sq', 'it'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="text-[0.65rem] font-semibold tracking-[0.1em] px-[0.4rem] py-1 rounded-[2px] transition-all duration-150 uppercase cursor-pointer"
                  style={{
                    color: lang === l ? 'var(--wood)' : 'var(--ink-light)',
                    background: lang === l ? 'rgba(139,111,71,0.08)' : 'transparent',
                  }}
                >
                  {l === 'en' ? 'EN' : l === 'sq' ? 'ALB' : 'ITA'}
                </button>
              ))}
            </div>
            <Link
              href="/booking"
              className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase px-[1.2rem] py-[0.55rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-200 hover:bg-[var(--wood)] hover:text-[var(--white)]"
              style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}
            >
              {tr.nav.reserve}
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 z-[1001] col-start-3 justify-self-end"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-[1.5px] transition-transform duration-300" style={{ background: 'var(--bark)', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span className="block w-6 h-[1.5px] transition-all duration-300" style={{ background: 'var(--bark)', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-[1.5px] transition-transform duration-300" style={{ background: 'var(--bark)', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[950] flex flex-col justify-center items-start px-[var(--gutter)] pb-12"
            style={{ background: 'var(--cream)', paddingTop: 'var(--nav-h)' }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-[1.4rem] right-[var(--gutter)] flex flex-col gap-[5px] p-1 cursor-pointer"
            >
              <span className="block w-6 h-[1.5px]" style={{ background: 'var(--bark)', transform: 'translateY(3.25px) rotate(45deg)' }} />
              <span className="block w-6 h-[1.5px]" style={{ background: 'var(--bark)', transform: 'translateY(-3.25px) rotate(-45deg)' }} />
            </button>

            {/* Nav links */}
            {NAV_LINKS.map(({ href, key }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-[family-name:var(--font-head)] italic text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.25] hover:text-[var(--wood)] transition-colors duration-200"
                  style={{ color: 'var(--bark)' }}
                >
                  {tr.nav[key]}
                </Link>
              </motion.div>
            ))}

            {/* Reserve Now */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.3 }}
            >
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="block font-[family-name:var(--font-head)] italic text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.25] hover:opacity-80 transition-opacity duration-200"
                style={{ color: 'var(--wood)' }}
              >
                {tr.nav.reserveNow}
              </Link>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: (NAV_LINKS.length + 1) * 0.04, duration: 0.3 }}
              className="mt-8"
            >
              <a
                href="tel:+35569606052"
                className="text-[0.75rem] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--ink-light)' }}
              >
                {tr.nav.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
