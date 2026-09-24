import Reveal from './Reveal'
import ArrowButton from './ArrowButton'
import { liveOpenings } from '../data/content'

export default function MarketOpenings() {
  return (
    <section
      id="openings"
      className="site-section scroll-mt-28 bg-cream pt-2 md:pt-4"
      aria-label="Open retail roles in India and the UAE"
    >
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">
            Open roles · Both markets
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
            India national &amp; UAE international — equal focus.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 md:text-base">
            Current placement focus areas. Apply once and we match you — mandates refresh often.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {liveOpenings.map((desk, i) => (
            <Reveal
              key={desk.market}
              delay={i * 0.08}
              className="overflow-hidden rounded-[28px] border border-navy/8 bg-white md:rounded-[32px]"
            >
              <div className="flex items-center justify-between border-b border-navy/8 bg-cream/60 px-5 py-4 md:px-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
                    {desk.flag === 'IN' ? 'National' : 'International'}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-ink md:text-xl">{desk.market}</h3>
                </div>
                <span className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-semibold text-navy/70">
                  {desk.flag}
                </span>
              </div>
              <ul className="divide-y divide-navy/8">
                {desk.roles.map((role) => (
                  <li
                    key={`${desk.market}-${role.title}`}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6"
                  >
                    <div>
                      <p className="font-semibold text-ink">{role.title}</p>
                      <p className="mt-0.5 text-sm text-navy/65">{role.city}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold tracking-wide text-navy/50 uppercase">
                      {role.type}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-navy/8 px-5 py-4 md:px-6">
                <ArrowButton href="#contact" variant="outline" className="w-full justify-center sm:w-auto">
                  Apply for {desk.flag === 'IN' ? 'India' : 'UAE'}
                </ArrowButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
