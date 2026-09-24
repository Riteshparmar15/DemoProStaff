/** Distinct corporate palette families — not the same mix remixed */

export const THEME_STORAGE_KEY = 'prostafff-theme'

export const themes = [
  {
    id: 'midnight',
    name: 'Midnight Meridian',
    tag: 'Warm luxury',
    kind: 'Ivory · Ink navy · Copper',
    colors: {
      cream: '#f7f4ef',
      navy: '#1a2332',
      ink: '#1a2332',
      raised: '#1a2332',
      divider: '#d8d2c8',
      orange: '#c45c26',
      orangeHi: '#a34a1e',
      orangeLight: '#d4784a',
      accentSoft: '#efe4da',
    },
  },
  {
    id: 'arctic',
    name: 'Arctic Corporate',
    tag: 'Cool blue',
    kind: 'Ice white · Slate · Royal blue',
    colors: {
      cream: '#f8fafc',
      navy: '#0f172a',
      ink: '#0f172a',
      raised: '#0f172a',
      divider: '#e2e8f0',
      orange: '#2563eb',
      orangeHi: '#1d4ed8',
      orangeLight: '#3b82f6',
      accentSoft: '#dbeafe',
    },
  },
  {
    id: 'forest',
    name: 'Forest Boardroom',
    tag: 'Green teal',
    kind: 'Sage · Deep green · Teal',
    colors: {
      cream: '#f3f6f4',
      navy: '#143528',
      ink: '#102820',
      raised: '#102820',
      divider: '#d5ddd7',
      orange: '#0d9488',
      orangeHi: '#0f766e',
      orangeLight: '#14b8a6',
      accentSoft: '#ccfbf1',
    },
  },
  {
    id: 'burgundy',
    name: 'Burgundy Authority',
    tag: 'Classic firm',
    kind: 'Stone · Near-black · Wine',
    colors: {
      cream: '#f7f5f2',
      navy: '#1c1917',
      ink: '#1c1917',
      raised: '#1c1917',
      divider: '#e7e5e4',
      orange: '#9f1239',
      orangeHi: '#881337',
      orangeLight: '#be123c',
      accentSoft: '#ffe4e6',
    },
  },
  {
    id: 'sunset',
    name: 'Desert Horizon',
    tag: 'Bold warm',
    kind: 'Sand · Espresso · Amber',
    colors: {
      cream: '#fff7ed',
      navy: '#292524',
      ink: '#1c1917',
      raised: '#1c1917',
      divider: '#e7e5e4',
      orange: '#d97706',
      orangeHi: '#b45309',
      orangeLight: '#f59e0b',
      accentSoft: '#ffedd5',
    },
  },
]

export function applyTheme(theme) {
  if (!theme?.colors || typeof document === 'undefined') return
  const root = document.documentElement
  const c = theme.colors
  root.style.setProperty('--color-cream', c.cream)
  root.style.setProperty('--color-navy', c.navy)
  root.style.setProperty('--color-ink', c.ink)
  root.style.setProperty('--color-raised', c.raised)
  root.style.setProperty('--color-divider', c.divider)
  root.style.setProperty('--color-orange', c.orange)
  root.style.setProperty('--color-orange-hi', c.orangeHi)
  root.style.setProperty('--color-orange-light', c.orangeLight)
  root.style.setProperty('--color-accent-soft', c.accentSoft)
  root.style.setProperty('--color-orange-pale', c.accentSoft)
  root.style.setProperty('--theme-structure-rgb', hexToRgb(c.navy))
  root.style.setProperty('--theme-base-rgb', hexToRgb(c.cream))
  root.style.setProperty('--theme-accent-rgb', hexToRgb(c.orange))
  root.dataset.theme = theme.id
}

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((x) => x + x).join('') : h
  const n = Number.parseInt(full, 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return `${r}, ${g}, ${b}`
}

export function getStoredThemeId() {
  try {
    const id = localStorage.getItem(THEME_STORAGE_KEY) || 'midnight'
    return themes.some((t) => t.id === id) ? id : 'midnight'
  } catch {
    return 'midnight'
  }
}

export function storeThemeId(id) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id)
  } catch {
    // ignore
  }
}
