import Reveal from './Reveal'
import ArrowButton from './ArrowButton'
import { caseStudies, testimonials, commitments } from '../data/company'

export default function Proof() {
  return (
    <section id="proof" className="site-section scroll-mt-28 bg-cream" aria-label="Proof and commitments">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">
            Proof & process
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
            How mandates actually run — with written commitments.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 md:text-base">
            Case patterns below are anonymised engagement examples that mirror how we work.
            Brand marks elsewhere name retail houses whose stores we staff nationally and
            internationally.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {caseStudies.map((study, i) => (
            <Reveal
              key={study.title}
              delay={i * 0.06}
              className="flex flex-col rounded-[28px] border border-navy/8 bg-white p-6 md:rounded-[32px] md:p-7"
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
                {study.tag}
              </p>
              <p className="mt-2 text-xs font-medium text-navy/55">{study.sector}</p>
              <h3 className="mt-3 text-lg font-bold leading-snug text-navy">{study.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{study.outcome}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.metrics.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-navy/10 bg-cream px-3 py-1 text-[11px] font-semibold text-navy/70"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.role}
              delay={0.08 + i * 0.05}
              className="rounded-[28px] border border-navy/8 bg-raised p-6 text-cream md:rounded-[32px] md:p-7"
            >
              <p className="text-[15px] leading-relaxed text-cream/85 md:text-base">
                “{item.quote}”
              </p>
              <p className="mt-5 text-sm font-semibold text-cream">{item.role}</p>
              <p className="text-sm text-cream/65">{item.org}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-[28px] border border-navy/8 bg-white p-6 md:mt-14 md:rounded-[32px] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-navy">Written commitments</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {commitments.map((item) => (
                  <div key={item.title} className="border-t border-navy/8 pt-4">
                    <p className="font-semibold text-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <ArrowButton href="#contact" className="shrink-0 self-start md:self-auto">
              Contact Us
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
