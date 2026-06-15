'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '/rooms', label: 'Rooms' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/location', label: 'Location' },
  { href: '/faq', label: 'FAQ' },
]

type Lang = 'en' | 'sq' | 'it'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const transparent = isHome && !scrolled

  const switchLang = useCallback((l: Lang) => {
    setLang(l)
    localStorage.setItem('mahoro_lang', l)
  }, [])

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
              style={{ color: transparent ? 'var(--white)' : 'var(--bark)' }}
            >
              Mahoro
            </span>
            <span
              className="text-[9px] tracking-[0.18em] uppercase mt-[2px] transition-colors duration-300"
              style={{ color: transparent ? 'rgba(253,250,245,0.7)' : 'var(--ink-light)', fontVariant: 'small-caps' }}
            >
              Boutique Hotel · Vlorë
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-[clamp(1.2rem,2.5vw,2rem)]">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative text-[0.7rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 group"
                  style={{ color: transparent ? 'rgba(253,250,245,0.9)' : 'var(--ink-mid)' }}
                >
                  {label}
                  <span
                    className="absolute bottom-[-3px] left-0 right-0 h-[1px] transition-transform duration-300 origin-left"
                    style={{
                      background: transparent ? 'var(--white)' : 'var(--gold-warm)',
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
                  onClick={() => switchLang(l)}
                  className="text-[0.65rem] font-semibold tracking-[0.1em] px-[0.4rem] py-1 rounded-[2px] transition-all duration-300 uppercase cursor-pointer"
                  style={{
                    color: lang === l
                      ? (transparent ? 'var(--white)' : 'var(--wood)')
                      : (transparent ? 'rgba(253,250,245,0.7)' : 'var(--ink-light)'),
                    background: lang === l
                      ? (transparent ? 'rgba(253,250,245,0.15)' : 'rgba(139,111,71,0.08)')
                      : 'transparent',
                  }}
                >
                  {l === 'en' ? 'EN' : l === 'sq' ? 'ALB' : 'ITA'}
                </button>
              ))}
            </div>
            <Link
              href="/booking"
              className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase px-[1.2rem] py-[0.55rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300"
              style={{
                color: transparent ? 'var(--white)' : 'var(--wood)',
                borderColor: transparent ? 'rgba(253,250,245,0.8)' : 'var(--wood)',
              }}
            >
              Reserve
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 z-[1001] col-start-3 justify-self-end"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-[1.5px] transition-transform duration-300"
              style={{
                background: transparent && !menuOpen ? 'var(--white)' : 'var(--bark)',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[1.5px] transition-all duration-300"
              style={{
                background: transparent && !menuOpen ? 'var(--white)' : 'var(--bark)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
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
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[950] flex flex-col justify-center items-start px-[var(--gutter)] pb-12"
            style={{ background: 'var(--cream)', paddingTop: 'var(--nav-h)' }}
          >
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-[family-name:var(--font-head)] italic text-[clamp(2.2rem,8vw,3.5rem)] leading-[1.25] hover:text-[var(--wood)] transition-colors duration-300"
                  style={{ color: 'var(--bark)' }}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-10 flex gap-6"
            >
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="text-[0.75rem] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--wood)' }}
              >
                Reserve Now
              </Link>
              <a
                href="tel:+35569606052"
                className="text-[0.75rem] font-medium tracking-[0.14em] uppercase"
                style={{ color: 'var(--wood)' }}
              >
                +355 69 606 0522
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
