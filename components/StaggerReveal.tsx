'use client'

import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const
const ITEM_TRANSITION = { duration: 0.7, ease: EASE }

const ITEM_VARIANTS = {
  up:    { hidden: { opacity: 0, y: 24, x: 0 },  visible: { opacity: 1, y: 0, x: 0, transition: ITEM_TRANSITION } },
  left:  { hidden: { opacity: 0, x: -36, y: 0 }, visible: { opacity: 1, x: 0, y: 0, transition: ITEM_TRANSITION } },
  right: { hidden: { opacity: 0, x: 36, y: 0 },  visible: { opacity: 1, x: 0, y: 0, transition: ITEM_TRANSITION } },
}

export default function StaggerReveal({ children, className, style, staggerDelay = 0.08 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  const variants = useMemo(() => ({
    visible: { transition: { staggerChildren: staggerDelay } },
    hidden: {},
  }), [staggerDelay])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  style,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  direction?: 'up' | 'left' | 'right'
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={ITEM_VARIANTS[direction]}
    >
      {children}
    </motion.div>
  )
}
