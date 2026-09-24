import { useEffect, useState } from 'react'
import ArrowButton from './ArrowButton'

/** Sticky mobile apply bar — keeps the only conversion path one tap away */
export default function MobileApplyBar({ visible }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!visible) {
      setShow(false)
      return undefined
    }
    const onScroll = () => setShow(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [visible])

  if (!visible || !show) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-[22px] border border-navy/10 bg-white/95 px-3 py-2.5 shadow-[0_12px_40px_rgba(26,35,50,0.16)] backdrop-blur-md">
        <div className="min-w-0 pl-1">
          <p className="truncate text-sm font-semibold text-ink">Apply · India or UAE</p>
          <p className="truncate text-xs text-navy/60">Free · 0 yrs welcome · 1-day reply</p>
        </div>
        <ArrowButton href="#contact" className="!min-h-11 !px-4 !py-2.5 shrink-0 text-sm">
          Apply
        </ArrowButton>
      </div>
    </div>
  )
}
