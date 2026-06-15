interface Props {
  children: React.ReactNode
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionLabel({ children, center, light, className = '' }: Props) {
  return (
    <div
      className={`flex items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase mb-4 ${center ? 'justify-center' : ''} ${className}`}
      style={{ color: light ? 'rgba(196,154,69,0.7)' : 'var(--gold-warm)' }}
    >
      {children}
      {!center && (
        <span className="h-px flex-1 max-w-[80px]" style={{ background: 'var(--sand)' }} />
      )}
    </div>
  )
}
