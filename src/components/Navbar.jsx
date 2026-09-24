import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navLinks } from '../data/content'
import ArrowButton from './ArrowButton'
import Logo from './Logo'
import { easeSmooth } from '../hooks/useMotionSafe'

export default function Navbar({ visible = true }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!visible) return null

  const goTo = (href) => {
    setOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={reduced ? false : { opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeSmooth, delay: 0.15 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-3 md:px-6 md:pt-5"
    >
      <div
        className={`pointer-events-auto flex w-full max-w-[1120px] items-center justify-between gap-1.5 rounded-[22px] border border-navy/8 bg-white/95 px-2.5 py-2 shadow-[0_12px_40px_rgba(37,36,34,0.08)] backdrop-blur-md transition-all sm:gap-2 sm:rounded-[28px] sm:px-3 sm:py-2.5 md:gap-3 md:rounded-full md:px-5 xl:max-w-[1200px] 2xl:max-w-[1320px] ${
          scrolled ? 'border-navy/10 shadow-[0_16px_48px_rgba(37,36,34,0.12)]' : ''
        }`}
      >
        <a
          href="#top"
          className="flex min-w-0 items-center pl-0.5"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <Logo
            className="min-w-0"
            markClassName="!h-8 !w-8 sm:!h-10 sm:!w-10 md:!h-11 md:!w-11"
          />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                goTo(link.href)
              }}
              className="rounded-full px-2.5 py-2 text-sm font-medium text-navy/75 transition hover:bg-cream hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ArrowButton
            href="#contact"
            className="!hidden !px-4 !py-2.5 text-sm sm:!inline-flex md:!px-5"
            onClick={(e) => {
              e.preventDefault()
              goTo('#contact')
            }}
          >
            Apply now
          </ArrowButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 text-ink xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
            className="pointer-events-auto absolute left-2 right-2 top-[calc(4.5rem+env(safe-area-inset-top))] max-h-[min(78vh,560px)] overflow-y-auto rounded-[24px] border border-navy/8 bg-white p-3 shadow-[0_20px_50px_rgba(37,36,34,0.12)] sm:left-3 sm:right-3 sm:rounded-[28px] sm:p-4 xl:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(link.href)
                  }}
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-ink hover:bg-cream"
                >
                  {link.label}
                </a>
              ))}
              <ArrowButton
                href="#contact"
                className="mt-2 w-full"
                onClick={(e) => {
                  e.preventDefault()
                  goTo('#contact')
                }}
              >
                Apply now
              </ArrowButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
