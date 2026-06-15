'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  once?: boolean
}

export default function Reveal({ children, className, delay = 0, direction = 'up', once = true }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -50px 0px' })

  const initial =
    direction === 'up' ? { opacity: 0, y: 32 }
    : direction === 'left' ? { opacity: 0, x: -40 }
    : direction === 'right' ? { opacity: 0, x: 40 }
    : { opacity: 0, scale: 1.06 }

  const animate = inView
    ? direction === 'scale'
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, x: 0, y: 0 }
    : initial

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: direction === 'scale' ? 1.1 : 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
