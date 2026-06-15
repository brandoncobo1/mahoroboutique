'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  staggerDelay?: number
}

export default function StaggerReveal({ children, className, style, staggerDelay = 0.08 }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
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
  const hiddenX = direction === 'left' ? -36 : direction === 'right' ? 36 : 0
  const hiddenY = direction === 'up' ? 24 : 0

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, x: hiddenX, y: hiddenY },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  )
}
