import Reveal from './Reveal'
import { trustBar } from '../data/company'

export default function TrustBar() {
  return (
    <section
      className="bg-cream pt-8 pb-10 md:pt-10 md:pb-14"
      aria-label="Why apply with ProStafff"
    >
      <div className="site-shell">
        <Reveal className="overflow-hidden radius-hero border border-navy/8 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {trustBar.map((item, i) => {
              const borders = [
                i < trustBar.length - 1 ? 'border-b border-navy/8' : '',
                i % 2 === 0 ? 'sm:border-r sm:border-navy/8' : '',
                i >= 2 ? 'sm:border-b-0' : '',
                'lg:border-b-0',
                i < trustBar.length - 1 ? 'lg:border-r lg:border-navy/8' : 'lg:border-r-0',
              ]
                .filter(Boolean)
                .join(' ')

              return (
                <div key={item.title} className={`px-5 py-5 md:px-6 md:py-6 lg:px-7 lg:py-7 ${borders}`}>
                  <p className="text-sm font-bold tracking-tight text-ink md:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.body}</p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
