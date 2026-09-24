import { journeySteps, snapshotRows } from '../data/content'
import { company } from '../data/company'
import ArrowButton from './ArrowButton'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 md:pt-36"
      aria-label="From brief to brand-ready talent"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      <div className="site-shell relative">
        <Reveal y={30} scale={1} className="mb-10 hidden md:block">
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

        <Reveal y={20} scale={1} className="mb-8 md:hidden">
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

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <Reveal y={40}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-navy/70 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Connecting Talent with Opportunity
              </p>
            </Reveal>

            <Reveal delay={0.08} y={50}>
              <h1 className="max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink">
                From brief,{' '}
                <span className="text-orange">to bench.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16} y={36} scale={1}>
              <p className="mt-5 max-w-xl text-lg font-semibold text-ink md:text-xl">
                Empowering Leading Retail Brands with Top-Tier Talent.
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-navy/70 md:text-base">
                We connect high-performing retail talent with leading brands across India and
                the UAE to drive customer satisfaction, sales growth, and operational excellence.
              </p>
            </Reveal>

            <Reveal delay={0.24} y={28} scale={1} className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href={`mailto:${company.hiringEmail}`}>Brief a hire</ArrowButton>
              <ArrowButton href="#roles" variant="outline">
                View Retail Roles
              </ArrowButton>
            </Reveal>
            <Reveal delay={0.28} y={16} scale={1} className="mt-4">
              <div className="flex flex-wrap gap-2">
                {['Permanent', 'Seasonal', 'Executive'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-medium text-navy/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={60} className="relative">
            <div className="radius-hero border border-navy/8 bg-raised p-5 text-cream shadow-[0_30px_80px_rgba(37,36,34,0.18)] md:p-7">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-cream/65 uppercase">
                Retail staffing snapshot
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
                From store associates to corporate leadership, we staff the full retail
                ecosystem — permanently, seasonally, and at executive level.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={48} className="mt-10 md:mt-14">
          <div className="flex flex-col gap-3 rounded-[24px] border border-navy/8 bg-white/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:rounded-full md:px-6">
            <div>
              <p className="text-sm font-semibold text-ink">Candidates</p>
              <p className="mt-0.5 text-sm text-navy/70">
                Looking for a retail role in India or the UAE? Submit your profile and we&apos;ll
                match you.
              </p>
            </div>
            <ArrowButton href="#contact" variant="outline" className="shrink-0 self-start sm:self-auto">
              Submit Profile
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
