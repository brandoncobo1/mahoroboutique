'use client'

import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  once?: boolean
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 32, x: 0 },  visible: { opacity: 1, y: 0, x: 0 } },
  left:  { hidden: { opacity: 0, x: -40, y: 0 }, visible: { opacity: 1, x: 0, y: 0 } },
  right: { hidden: { opacity: 0, x: 40, y: 0 },  visible: { opacity: 1, x: 0, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 1.06 },   visible: { opacity: 1, scale: 1 } },
}

const BASE_TRANSITION = { up: 0.8, left: 0.8, right: 0.8, scale: 1.1 }

export default function Reveal({ children, className, delay = 0, direction = 'up', once = true }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -50px 0px' })

  const transition = useMemo(
    () => ({ duration: BASE_TRANSITION[direction], delay, ease: EASE }),
    [direction, delay]
  )

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={VARIANTS[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
