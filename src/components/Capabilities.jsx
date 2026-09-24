import Reveal from './Reveal'
import { services } from '../data/content'
import ArrowButton from './ArrowButton'

export default function Capabilities() {
  return (
    <section id="services" className="site-section scroll-mt-28 bg-cream">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">
            Services
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-navy">
            Three ways we staff retail.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-navy/70 md:text-lg">
            Permanent leadership, seasonal surge capacity, and executive search — delivered
            by a team that lives the retail calendar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.08}
              className="radius-card border border-navy/8 bg-raised p-7 text-cream md:p-8"
            >
              <h3 className="text-xl font-bold tracking-tight md:text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60 md:text-[15px]">
                {service.body}
              </p>
              <ul className="mt-5 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-cream/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center md:mt-14">
          <ArrowButton href="#contact">Contact Us</ArrowButton>
        </Reveal>
      </div>
    </section>
  )
}
