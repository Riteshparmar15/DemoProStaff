import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { luxuryBrands } from '../data/content'
import Reveal from './Reveal'

function FlagIN() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      aria-hidden="true"
      className="overflow-hidden rounded-[2px]"
    >
      <rect width="18" height="4" y="0" fill="#FF9933" />
      <rect width="18" height="4" y="4" fill="#FFFFFF" />
      <rect width="18" height="4" y="8" fill="#138808" />
      <circle cx="9" cy="6" r="1.6" fill="none" stroke="#000080" strokeWidth="0.7" />
    </svg>
  )
}

function FlagUAE() {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      aria-hidden="true"
      className="overflow-hidden rounded-[2px]"
    >
      <rect width="18" height="4" y="0" fill="#00732F" />
      <rect width="18" height="4" y="4" fill="#FFFFFF" />
      <rect width="18" height="4" y="8" fill="#000000" />
      <rect width="5" height="12" x="0" fill="#FF0000" />
    </svg>
  )
}

function LogoCell({ brand }) {
  return (
    <div className="flex h-[96px] w-[180px] shrink-0 items-center justify-center border-r border-divider bg-white px-6 md:h-[108px] md:w-[210px]">
      <img
        src={brand.logo}
        alt={`${brand.name} — retail stores we staff nationally and internationally`}
        title={`${brand.name} — store staffing national & international`}
        width={160}
        height={56}
        loading="lazy"
        decoding="async"
        className="h-[44px] w-auto max-w-[150px] object-contain object-center opacity-90 md:h-[52px] md:max-w-[170px]"
        draggable={false}
      />
    </div>
  )
}

export default function LuxuryEcosystem() {
  const reduced = useReducedMotion()
  const [paused, setPaused] = useState(false)
  const loop = [...luxuryBrands, ...luxuryBrands]

  return (
    <section
      id="brands-we-staff"
      className="site-section bg-cream"
      aria-label="Retail brands you can work with"
    >
      <div className="site-shell">
        <div className="grid gap-8 border-y border-navy/10 py-10 md:grid-cols-3 md:gap-0 md:py-14">
          <Reveal className="md:pr-8">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
              Brands you can work with
            </p>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              Luxury & international retail floors we place into
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="border-navy/10 md:border-x md:px-8">
              <p className="text-[15px] leading-relaxed text-navy/70 md:text-base">
              Apply once — we match strong profiles to store, supervisor, and leadership roles
              across India, with UAE international mandates reviewed from our careers desk.
              Logos mark house formats we may place into; they are not job guarantees.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="md:pl-8">
            <div className="flex h-full flex-col justify-center">
              <Globe className="mb-3 h-7 w-7 text-ink" strokeWidth={1.6} />
              <p className="text-base font-semibold text-ink md:text-lg">
                Where you can work
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  <FlagIN />
                  India · National
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm font-semibold text-ink">
                  <FlagUAE />
                  UAE · International
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <div
          className="mt-6 rounded-2xl border border-navy/10 bg-accent-soft/70 px-4 py-3 text-center text-sm leading-relaxed text-ink md:mt-8"
          role="note"
        >
          <span className="font-semibold">Not employer logos.</span> Marks identify retail house
          formats whose store networks we may place applicants into across India and the UAE.
          They do not imply endorsement or guaranteed employment by those brands.
        </div>

        <div className="mt-5 overflow-hidden border border-divider bg-white md:mt-6">
          <div
            className="marquee-mask relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Retail brands we staff for carousel"
          >
            <div
              className="marquee-track flex w-max"
              style={{
                animation: reduced ? 'none' : 'marquee-rtl 42s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
                willChange: 'transform',
              }}
            >
              {loop.map((brand, i) => (
                <LogoCell key={`${brand.name}-${i}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
