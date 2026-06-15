'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/Reveal'
import { rooms } from '@/lib/rooms'

type Step = 1 | 2 | 3 | 4 | 5

interface BookingData {
  checkIn: string
  checkOut: string
  adults: number
  children: number
  roomSlug: string
  firstName: string
  lastName: string
  email: string
  phone: string
  requests: string
}

const EMPTY: BookingData = {
  checkIn: '', checkOut: '', adults: 2, children: 0,
  roomSlug: '', firstName: '', lastName: '', email: '', phone: '', requests: '',
}

function StepIndicator({ step, current }: { step: number; current: number }) {
  const done = current > step
  const active = current === step
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-[0.75rem] font-bold transition-all duration-400"
        style={{
          background: done ? 'var(--wood)' : active ? 'var(--bark)' : 'var(--border)',
          color: done || active ? 'var(--white)' : 'var(--ink-light)',
        }}
      >
        {done ? '✓' : step}
      </div>
    </div>
  )
}

export default function BookingPage() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<BookingData>(EMPTY)

  const set = (key: keyof BookingData, val: string | number) =>
    setData((d) => ({ ...d, [key]: val }))

  const selectedRoom = rooms.find((r) => r.slug === data.roomSlug)

  const nights =
    data.checkIn && data.checkOut
      ? Math.max(0, Math.round((new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime()) / 86400000))
      : 0

  const stepLabels = ['Dates', 'Guests', 'Summary', 'Room', 'Confirm']

  return (
    <>
      <section style={{ background: 'var(--bark)', padding: 'calc(var(--nav-h) + 3rem) var(--gutter) 3rem' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <Reveal><SectionLabel light>Direct Booking — Save 5%</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[family-name:var(--font-head)] italic text-[clamp(2rem,5vw,3.2rem)] mt-3" style={{ color: 'var(--white)' }}>
              Reserve your room.
            </h1>
          </Reveal>
          {/* Progress bar */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 mt-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <StepIndicator step={s} current={step} />
                  <span className="text-[0.7rem] tracking-[0.1em] uppercase hidden sm:block" style={{ color: step === s ? 'var(--gold-warm)' : 'rgba(212,196,168,0.45)' }}>{stepLabels[s - 1]}</span>
                  {s < 4 && <div className="h-px flex-1 w-8 mx-1" style={{ background: step > s ? 'var(--wood)' : 'rgba(212,196,168,0.2)' }} />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-[var(--gutter)] py-[clamp(3rem,6vw,5rem)]" style={{ background: 'var(--cream)', minHeight: '60vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            {/* Step 1: Dates */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <h2 className="font-[family-name:var(--font-head)] italic text-[1.8rem] mb-8" style={{ color: 'var(--bark)' }}>When are you visiting?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase block mb-2" style={{ color: 'var(--ink-light)' }}>Check-in Date</span>
                    <input
                      type="date"
                      value={data.checkIn}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => set('checkIn', e.target.value)}
                      className="w-full px-4 py-3 rounded-[var(--radius)] border outline-none text-[0.9rem]"
                      style={{ borderColor: 'var(--border)', background: 'var(--white)', color: 'var(--ink)' }}
                    />
                  </label>
                  <label className="block">
                    <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase block mb-2" style={{ color: 'var(--ink-light)' }}>Check-out Date</span>
                    <input
                      type="date"
                      value={data.checkOut}
                      min={data.checkIn || new Date().toISOString().split('T')[0]}
                      onChange={(e) => set('checkOut', e.target.value)}
                      className="w-full px-4 py-3 rounded-[var(--radius)] border outline-none text-[0.9rem]"
                      style={{ borderColor: 'var(--border)', background: 'var(--white)', color: 'var(--ink)' }}
                    />
                  </label>
                </div>
                {nights > 0 && (
                  <div className="p-4 rounded-[var(--radius)] mb-6 text-[0.88rem]" style={{ background: 'var(--parchment)', color: 'var(--ink-mid)' }}>
                    {nights} night{nights !== 1 ? 's' : ''} selected
                  </div>
                )}
                <button
                  onClick={() => data.checkIn && data.checkOut && nights > 0 && setStep(2)}
                  disabled={!data.checkIn || !data.checkOut || nights <= 0}
                  className="w-full py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] transition-all duration-300 hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{ background: 'var(--wood)', color: 'var(--white)' }}
                >Continue</button>
              </motion.div>
            )}

            {/* Step 2: Guests */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <h2 className="font-[family-name:var(--font-head)] italic text-[1.8rem] mb-8" style={{ color: 'var(--bark)' }}>How many guests?</h2>
                {[
                  { label: 'Adults', key: 'adults' as const, min: 1, max: 4 },
                  { label: 'Children (under 12)', key: 'children' as const, min: 0, max: 3 },
                ].map((field) => (
                  <div key={field.key} className="flex items-center justify-between mb-6 p-5 rounded-[var(--radius)] border" style={{ background: 'var(--white)', borderColor: 'var(--border)' }}>
                    <span className="text-[0.9rem] font-medium" style={{ color: 'var(--bark)' }}>{field.label}</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => set(field.key, Math.max(field.min, (data[field.key] as number) - 1))}
                        className="w-9 h-9 rounded-full border flex items-center justify-center text-[1.2rem] cursor-pointer transition-colors hover:bg-[var(--parchment)]"
                        style={{ borderColor: 'var(--border)', color: 'var(--wood)' }}
                      >−</button>
                      <span className="w-6 text-center text-[1rem] font-medium" style={{ color: 'var(--bark)' }}>{data[field.key]}</span>
                      <button
                        onClick={() => set(field.key, Math.min(field.max, (data[field.key] as number) + 1))}
                        className="w-9 h-9 rounded-full border flex items-center justify-center text-[1.2rem] cursor-pointer transition-colors hover:bg-[var(--parchment)]"
                        style={{ borderColor: 'var(--border)', color: 'var(--wood)' }}
                      >+</button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3 mt-8">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] border transition-all cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--ink-mid)' }}>Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] cursor-pointer transition-all hover:-translate-y-px" style={{ background: 'var(--wood)', color: 'var(--white)' }}>Continue</button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Summary + contact */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <h2 className="font-[family-name:var(--font-head)] italic text-[1.8rem] mb-3" style={{ color: 'var(--bark)' }}>Your Details</h2>
                <div className="p-5 rounded-[var(--radius)] mb-8 text-[0.85rem]" style={{ background: 'var(--parchment)', color: 'var(--ink-mid)' }}>
                  {data.checkIn} → {data.checkOut} · {nights} night{nights !== 1 ? 's' : ''} · {data.adults} adult{data.adults !== 1 ? 's' : ''}{data.children > 0 ? `, ${data.children} child${data.children !== 1 ? 'ren' : ''}` : ''}
                </div>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  {[
                    { label: 'First Name', key: 'firstName' as const, type: 'text' },
                    { label: 'Last Name', key: 'lastName' as const, type: 'text' },
                    { label: 'Email Address', key: 'email' as const, type: 'email' },
                    { label: 'Phone Number', key: 'phone' as const, type: 'tel' },
                  ].map((f) => (
                    <label key={f.key} className="block">
                      <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase block mb-2" style={{ color: 'var(--ink-light)' }}>{f.label}</span>
                      <input
                        type={f.type}
                        value={data[f.key] as string}
                        onChange={(e) => set(f.key, e.target.value)}
                        className="w-full px-4 py-3 rounded-[var(--radius)] border outline-none text-[0.9rem]"
                        style={{ borderColor: 'var(--border)', background: 'var(--white)', color: 'var(--ink)' }}
                      />
                    </label>
                  ))}
                </div>
                <label className="block mb-8">
                  <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase block mb-2" style={{ color: 'var(--ink-light)' }}>Special Requests (optional)</span>
                  <textarea
                    rows={3}
                    value={data.requests}
                    onChange={(e) => set('requests', e.target.value)}
                    className="w-full px-4 py-3 rounded-[var(--radius)] border outline-none text-[0.9rem] resize-none"
                    style={{ borderColor: 'var(--border)', background: 'var(--white)', color: 'var(--ink)' }}
                    placeholder="Early check-in, dietary requirements, baby cot…"
                  />
                </label>
                <div className="flex gap-3">
                  <button onClick={() => setStep(2)} className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] border transition-all cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--ink-mid)' }}>Back</button>
                  <button
                    onClick={() => data.firstName && data.lastName && data.email && setStep(4)}
                    disabled={!data.firstName || !data.lastName || !data.email}
                    className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] cursor-pointer transition-all hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: 'var(--wood)', color: 'var(--white)' }}
                  >Choose a Room</button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Room selection */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <h2 className="font-[family-name:var(--font-head)] italic text-[1.8rem] mb-8" style={{ color: 'var(--bark)' }}>Select your room</h2>
                <div className="flex flex-col gap-4 mb-8">
                  {rooms.map((room) => (
                    <button
                      key={room.slug}
                      onClick={() => set('roomSlug', room.slug)}
                      className="text-left p-5 rounded-[var(--radius)] border transition-all duration-300 cursor-pointer hover:shadow-md"
                      style={{
                        borderColor: data.roomSlug === room.slug ? 'var(--wood)' : 'var(--border)',
                        background: data.roomSlug === room.slug ? 'rgba(139,111,71,0.07)' : 'var(--white)',
                        outline: data.roomSlug === room.slug ? '1.5px solid var(--wood)' : 'none',
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-medium text-[0.95rem] mb-1" style={{ color: 'var(--bark)' }}>{room.name}</div>
                          <div className="text-[0.78rem]" style={{ color: 'var(--ink-light)' }}>{room.beds} · {room.capacity}</div>
                        </div>
                        <div className="text-[0.72rem] tracking-[0.12em] uppercase px-3 py-1.5 rounded-[2px] shrink-0" style={{ background: 'var(--parchment)', color: 'var(--wood)', border: '1px solid var(--border)' }}>{room.badge}</div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(3)} className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] border transition-all cursor-pointer" style={{ borderColor: 'var(--border)', color: 'var(--ink-mid)' }}>Back</button>
                  <button
                    onClick={() => data.roomSlug && setStep(5)}
                    disabled={!data.roomSlug}
                    className="flex-1 py-4 text-[0.8rem] font-medium tracking-[0.14em] uppercase rounded-[var(--radius)] cursor-pointer transition-all hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: 'var(--wood)', color: 'var(--white)' }}
                  >Confirm Booking</button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[1.8rem]" style={{ background: 'rgba(139,111,71,0.12)', color: 'var(--wood)' }}>✓</div>
                <h2 className="font-[family-name:var(--font-head)] italic text-[2rem] mb-4" style={{ color: 'var(--bark)' }}>Booking Request Sent</h2>
                <p className="text-[0.9rem] leading-[1.8] max-w-[480px] mx-auto mb-3" style={{ color: 'var(--ink-mid)' }}>
                  Thank you, <strong>{data.firstName}</strong>. Your reservation request for the <strong>{selectedRoom?.name}</strong> has been received.
                </p>
                <p className="text-[0.88rem] mb-8" style={{ color: 'var(--ink-light)' }}>
                  We'll confirm your booking at <strong>{data.email}</strong> within 24 hours.
                </p>
                <div className="p-6 rounded-[var(--radius)] mb-8 text-left text-[0.85rem]" style={{ background: 'var(--parchment)', color: 'var(--ink-mid)' }}>
                  <div className="grid grid-cols-2 gap-3">
                    <div><span style={{ color: 'var(--ink-light)' }}>Check-in</span><br /><strong style={{ color: 'var(--bark)' }}>{data.checkIn}</strong></div>
                    <div><span style={{ color: 'var(--ink-light)' }}>Check-out</span><br /><strong style={{ color: 'var(--bark)' }}>{data.checkOut}</strong></div>
                    <div><span style={{ color: 'var(--ink-light)' }}>Room</span><br /><strong style={{ color: 'var(--bark)' }}>{selectedRoom?.badge}</strong></div>
                    <div><span style={{ color: 'var(--ink-light)' }}>Guests</span><br /><strong style={{ color: 'var(--bark)' }}>{data.adults} adult{data.adults !== 1 ? 's' : ''}{data.children > 0 ? `, ${data.children} child${data.children !== 1 ? 'ren' : ''}` : ''}</strong></div>
                  </div>
                </div>
                <Link href="/" className="inline-flex items-center justify-center text-[0.75rem] font-medium tracking-[0.14em] uppercase px-8 py-[0.85rem] rounded-[var(--radius)] border-[1.5px] transition-all duration-300 hover:-translate-y-px cursor-pointer" style={{ color: 'var(--wood)', borderColor: 'var(--wood)' }}>Back to Home</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
