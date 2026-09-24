import { asset } from '../lib/asset'

export default function Logo({
  variant = 'full',
  theme = 'dark',
  className = '',
  markClassName = '',
  showWordmark = true,
}) {
  const isLight = theme === 'light'
  const nameClass = isLight ? 'text-cream' : 'text-ink'
  const subClass = isLight ? 'text-cream/70' : 'text-navy/65'
  // SVGs stay crisp on Pages; paths must use Vite base (/DemoProStaff/)
  const markSrc = isLight
    ? asset('brand/prostafff-mark-light.svg')
    : asset('brand/prostafff-mark.svg')

  return (
    <span className={`inline-flex items-center gap-2.5 min-w-0 ${className}`} aria-label="ProStafff Solution">
      <img
        src={markSrc}
        alt="ProStafff"
        width={44}
        height={44}
        className={`h-10 w-10 shrink-0 rounded-[10px] object-contain shadow-[0_1px_2px_rgba(26,35,50,0.12)] md:h-11 md:w-11 ${markClassName}`}
        decoding="async"
      />
      {showWordmark && (
        <span className="min-w-0 leading-tight">
          <span className={`block font-display text-[16px] font-bold tracking-tight md:text-[17px] ${nameClass}`}>
            ProStafff
          </span>
          {variant === 'full' && (
            <span
              className={`hidden text-[10px] font-semibold uppercase tracking-[0.16em] sm:block ${subClass}`}
            >
              Solution
            </span>
          )}
        </span>
      )}
    </span>
  )
}
