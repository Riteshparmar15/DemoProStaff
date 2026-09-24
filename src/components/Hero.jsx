import { journeySteps, snapshotRows, indiaCities, uaeCities } from '../data/content'
import ArrowButton from './ArrowButton'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 md:pt-36"
      aria-label="Apply for retail jobs in India and the UAE"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="site-shell relative">
        <Reveal y={24} scale={1} className="mb-10 hidden md:block">
          <div className="grid grid-cols-5 gap-4">
            {journeySteps.map((step) => (
              <div key={step.id} className="border-t border-navy/20 pt-3">
                <p className="text-xs font-semibold tracking-[0.08em] text-ink">
                  {step.id} {step.label}
                </p>
                <p className="mt-1 text-xs text-navy/70">{step.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal y={16} scale={1} className="mb-8 md:hidden">
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className="min-w-[7.5rem] shrink-0 border-t border-navy/20 pt-2"
              >
                <p className="text-[11px] font-semibold tracking-[0.06em] text-ink">
                  {step.id} {step.label}
                </p>
                <p className="mt-0.5 text-[11px] text-navy/70">{step.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <Reveal y={32}>
              <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-navy/70 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                India national · UAE international · Equal desks
              </p>
            </Reveal>

            <Reveal delay={0.06} y={40}>
              <h1 className="max-w-[16ch] font-display text-[clamp(2.6rem,7vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink">
                Apply once.{' '}
                <span className="text-orange">Both markets.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12} y={28} scale={1}>
              <p className="mt-5 max-w-xl text-lg font-semibold text-ink md:text-xl">
                Retail careers across India and the UAE — permanent, seasonal, and leadership.
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy/70 md:text-base">
                Free to apply. Freshers welcome. One careers desk reviews India and UAE
                profiles with the same 1-business-day reply.
              </p>
            </Reveal>

            <Reveal delay={0.18} y={24} scale={1} className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href="#contact">Apply now</ArrowButton>
              <ArrowButton href="#openings" variant="outline">
                View open roles
              </ArrowButton>
            </Reveal>

            <Reveal delay={0.22} y={12} scale={1} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-navy/10 bg-white px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-eyebrow uppercase">
                  India · National
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {indiaCities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-navy/70"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-navy/10 bg-white px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-eyebrow uppercase">
                  UAE · International
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {uaeCities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-navy/70"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={40} className="relative">
            <div className="radius-hero border border-navy/8 bg-raised p-5 text-cream shadow-[0_30px_80px_rgba(37,36,34,0.18)] md:p-7">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-cream/65 uppercase">
                Why apply here
              </p>
              <div className="mt-5 space-y-3">
                {snapshotRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-full bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-cream/65">{row.label}</span>
                    <span className="text-sm font-semibold text-cream">{row.status}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                Same apply path for Mumbai or Dubai — market-aware matching, honest visa
                guidance, zero candidate fees.
              </p>
              <div className="mt-6">
                <ArrowButton href="#contact" variant="light" className="w-full justify-center sm:w-auto">
                  Submit your profile
                </ArrowButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
