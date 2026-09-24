import Reveal from './Reveal'
import ArrowButton from './ArrowButton'
import { roleGroups } from '../data/content'

export default function Roles() {
  return (
    <section id="roles" className="site-section scroll-mt-28 bg-cream">
      <div className="site-shell">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">
            Roles you can apply for
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
            Find your place in retail
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 md:text-lg">
            From first floor shift to multi-store leadership and HQ commercial roles — tell us
            where you belong and we&apos;ll match you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {roleGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={i * 0.08}
              className="radius-card border border-navy/8 bg-white p-6 md:p-8"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-navy/40 uppercase">
                {group.tag}
              </p>
              <h3 className="mt-2 text-xl font-bold text-navy md:text-2xl">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-t border-navy/8 pt-3 text-sm leading-relaxed text-navy/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center md:mt-12">
          <ArrowButton href="#contact">Apply with your preferred role</ArrowButton>
        </Reveal>
      </div>
    </section>
  )
}
