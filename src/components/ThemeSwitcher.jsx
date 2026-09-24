import { useEffect, useState } from 'react'
import {
  applyTheme,
  getStoredThemeId,
  storeThemeId,
  themes,
} from '../data/themes'

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('midnight')

  useEffect(() => {
    const id = getStoredThemeId()
    const theme = themes.find((t) => t.id === id) || themes[0]
    setActiveId(theme.id)
    applyTheme(theme)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const active = themes.find((t) => t.id === activeId) || themes[0]

  const pick = (theme) => {
    setActiveId(theme.id)
    applyTheme(theme)
    storeThemeId(theme.id)
    setOpen(false)
  }

  return (
    <div className="pointer-events-none fixed right-3 top-3 z-[80] md:right-5 md:top-5">
      <div className="pointer-events-auto relative">
        <button
          type="button"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label="Change website color palette"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-navy/15 bg-white/95 px-3 py-2 shadow-[0_8px_28px_rgba(26,35,50,0.12)] backdrop-blur-md transition hover:border-navy/25"
        >
          <span className="flex items-center gap-1" aria-hidden>
            <span
              className="h-3.5 w-3.5 rounded-full border border-navy/10"
              style={{ background: active.colors.cream }}
            />
            <span
              className="h-3.5 w-3.5 rounded-full border border-navy/10"
              style={{ background: active.colors.navy }}
            />
            <span
              className="h-3.5 w-3.5 rounded-full border border-navy/10"
              style={{ background: active.colors.orange }}
            />
          </span>
          <span className="hidden text-xs font-semibold tracking-wide text-ink sm:inline">
            Colors
          </span>
        </button>

        {open && (
          <>
            <button
              type="button"
              aria-label="Close color menu"
              className="fixed inset-0 z-0 cursor-default bg-transparent"
              onClick={() => setOpen(false)}
            />
            <div
              role="listbox"
              aria-label="Corporate color palettes"
              className="absolute right-0 z-10 mt-2 w-[min(92vw,300px)] overflow-hidden rounded-[22px] border border-navy/10 bg-white shadow-[0_20px_50px_rgba(26,35,50,0.16)]"
            >
              <div className="border-b border-navy/8 px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
                  5 different palette kinds
                </p>
                <p className="mt-1 text-xs text-navy/70">
                  Warm · Cool blue · Green · Wine · Amber — not the same mix
                </p>
              </div>
              <ul className="max-h-[70vh] overflow-y-auto p-2">
                {themes.map((theme) => {
                  const selected = theme.id === activeId
                  return (
                    <li key={theme.id}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected}
                        onClick={() => pick(theme)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                          selected ? 'bg-cream' : 'hover:bg-cream/80'
                        }`}
                      >
                        <span className="flex shrink-0 items-center gap-1" aria-hidden>
                          <span
                            className="h-5 w-5 rounded-full border border-navy/10"
                            style={{ background: theme.colors.cream }}
                            title="60% base"
                          />
                          <span
                            className="h-5 w-5 rounded-full border border-navy/10"
                            style={{ background: theme.colors.navy }}
                            title="30% structure"
                          />
                          <span
                            className="h-5 w-5 rounded-full border border-navy/10"
                            style={{ background: theme.colors.orange }}
                            title="10% accent"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-ink">
                            {theme.name}
                          </span>
                          <span className="block text-[11px] font-medium text-navy/55">
                            {theme.tag}
                          </span>
                          <span className="block text-[10px] text-navy/45">{theme.kind}</span>
                        </span>
                        {selected && (
                          <span className="text-[11px] font-bold tracking-wide text-orange uppercase">
                            Active
                          </span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
