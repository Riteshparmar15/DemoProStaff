import { useState } from 'react'
import Reveal from './Reveal'
import ArrowButton from './ArrowButton'
import { company } from '../data/company'
import { submitLead } from '../lib/submitLead'

const UAE_MARKETS = ['UAE — International', 'India or UAE']

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [fallback, setFallback] = useState(null)
  const [market, setMarket] = useState('')

  const needsVisa = UAE_MARKETS.includes(market)

  const resetOutcome = () => {
    setStatus('idle')
    setError('')
    setFallback(null)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setStatus('submitting')
    const fd = new FormData(e.currentTarget)
    const fields = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      city: String(fd.get('city') || ''),
      market: String(fd.get('market') || ''),
      authorization: String(fd.get('authorization') || 'N/A — India only'),
      role: String(fd.get('role') || ''),
      experience: String(fd.get('experience') || ''),
      notice: String(fd.get('notice') || ''),
      message: String(fd.get('message') || ''),
      type: 'candidate',
    }
    const messageBody = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `City: ${fields.city}`,
      `Preferred market: ${fields.market}`,
      `Work authorization: ${fields.authorization}`,
      `Preferred role: ${fields.role}`,
      `Experience: ${fields.experience} years`,
      `Notice period: ${fields.notice}`,
      '',
      'Profile:',
      fields.message,
    ].join('\n')

    try {
      const result = await submitLead({
        to: company.careersEmail,
        subject: `Job application — ${fields.name} · ${fields.market}`,
        fields,
        messageBody,
      })
      setFallback(result)
      setStatus(result.delivered ? 'delivered' : 'fallback')
    } catch {
      setError('Something went wrong. Please use WhatsApp or call us.')
      setStatus('idle')
    }
  }

  const outcome = status === 'delivered' || status === 'fallback'

  return (
    <section id="contact" className="site-section scroll-mt-28 bg-cream">
      <div className="site-shell site-shell-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-eyebrow uppercase">
            Apply now · India &amp; UAE
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            One form. Both markets. Equal care.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-navy/70 md:text-base">
            Free to apply. Choose India (national) or UAE (international). Freshers welcome
            (0 years). {company.responseSLA}.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-8 overflow-hidden radius-card border border-navy/8 bg-white p-5 md:mt-10 md:p-8"
        >
          {outcome ? (
            <div className="rounded-[24px] bg-cream px-6 py-10 text-center">
              {status === 'delivered' ? (
                <>
                  <p className="text-xl font-bold text-ink">Application received.</p>
                  <p className="mt-2 text-navy/70">
                    {company.responseSLA}. India and UAE profiles share the same careers desk.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-ink">Send via WhatsApp (recommended)</p>
                  <p className="mt-2 text-navy/70">
                    Your details are ready — works for India and UAE applicants.
                  </p>
                </>
              )}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {fallback?.whatsappUrl && (
                  <ArrowButton href={fallback.whatsappUrl} className="!inline-flex">
                    Open WhatsApp
                  </ArrowButton>
                )}
                {fallback?.mailtoUrl && (
                  <ArrowButton href={fallback.mailtoUrl} variant="outline" className="!inline-flex">
                    Open email instead
                  </ArrowButton>
                )}
                <ArrowButton variant="outline" className="!inline-flex" onClick={resetOutcome}>
                  Apply again
                </ArrowButton>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field
                label="Phone (with country code)"
                name="phone"
                required
                hint="India +91 · UAE +971 · or your local code"
              />
              <Field label="Current City" name="city" required />

              <label className="block text-sm font-medium text-navy/70 sm:col-span-2">
                Preferred market
                <select
                  name="market"
                  required
                  value={market}
                  onChange={(e) => setMarket(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                >
                  <option value="" disabled>
                    Select market
                  </option>
                  <option value="India — National">India — National</option>
                  <option value="UAE — International">UAE — International</option>
                  <option value="India or UAE">Open to India or UAE</option>
                </select>
              </label>

              {market === 'India — National' && (
                <p className="sm:col-span-2 rounded-2xl border border-navy/8 bg-cream px-4 py-3 text-sm leading-relaxed text-navy/70">
                  <span className="font-semibold text-ink">India eligibility: </span>
                  Open to candidates across India metros and tier-2 cities. 0 years experience
                  welcome for associate roles. No application fee.
                </p>
              )}

              {needsVisa && (
                <>
                  <p className="sm:col-span-2 rounded-2xl border border-navy/8 bg-cream px-4 py-3 text-sm leading-relaxed text-navy/70">
                    <span className="font-semibold text-ink">UAE eligibility: </span>
                    Residents with work rights, transfer-ready candidates, and strong profiles
                    exploring sponsorship may apply. Declare status honestly — we never charge a
                    fee and never guarantee a visa. Labour card / sponsorship follows the
                    employer&apos;s entity. {company.hoursGst}.
                  </p>
                  <label className="block text-sm font-medium text-navy/70 sm:col-span-2">
                    Work authorization (UAE)
                    <select
                      name="authorization"
                      required={needsVisa}
                      className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your status
                      </option>
                      <option value="Emirates ID / UAE residence — can work">
                        Emirates ID / UAE residence — can work
                      </option>
                      <option value="Employment visa — open to transfer">
                        Employment visa — open to transfer
                      </option>
                      <option value="Visit visa — exploring options">
                        Visit visa — exploring options
                      </option>
                      <option value="Need employer sponsorship">
                        Need employer sponsorship
                      </option>
                      <option value="Outside UAE — relocating">Outside UAE — relocating</option>
                    </select>
                  </label>
                </>
              )}

              <label className="block text-sm font-medium text-navy/70">
                Preferred Role
                <select
                  name="role"
                  required
                  className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select role type
                  </option>
                  <option>Store Associate</option>
                  <option>Visual Merchandiser</option>
                  <option>Cashier / POS</option>
                  <option>Beauty / Luxury Advisor</option>
                  <option>Store Manager</option>
                  <option>Area / Cluster Manager</option>
                  <option>Corporate / Operations</option>
                  <option>Other retail role</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-navy/70">
                Years of Experience
                <input
                  name="experience"
                  type="number"
                  min={0}
                  step={1}
                  required
                  placeholder="0"
                  className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                />
                <span className="mt-1.5 block text-xs text-navy/55">
                  0 years welcome — first-job associates encouraged
                </span>
              </label>

              <label className="block text-sm font-medium text-navy/70 sm:col-span-2">
                Notice period / availability
                <select
                  name="notice"
                  required
                  className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select availability
                  </option>
                  <option>Immediate</option>
                  <option>15 days</option>
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90+ days</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-navy/70 sm:col-span-2">
                About you / Resume link
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Short intro, brands you’ve worked with, or a resume / LinkedIn link."
                  className="mt-2 w-full resize-y rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
                />
              </label>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-navy/70">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-navy/20 text-orange"
                  />
                  <span>
                    I agree my profile may be used for retail job matching in my chosen
                    market(s). I confirm I was not asked to pay any fee to apply.
                  </span>
                </label>
              </div>

              {error && (
                <p className="sm:col-span-2 text-sm font-medium text-ink" role="alert">
                  {error}
                </p>
              )}

              <div className="sm:col-span-2">
                <ArrowButton type="submit" showArrow disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Submit application'}
                </ArrowButton>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.12} className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-navy/8 bg-white p-5 md:p-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
              India · National desk
            </p>
            <p className="mt-2 font-semibold text-ink">IST careers hours</p>
            <p className="mt-1 text-sm text-navy/70">{company.hours}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <a href={company.phoneHref} className="text-orange hover:text-orange-hi">
                {company.phoneDisplay}
              </a>
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="text-ink hover:text-navy/70">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-[24px] border border-navy/8 bg-white p-5 md:p-6">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
              UAE · International desk
            </p>
            <p className="mt-2 font-semibold text-ink">Same desk · GST-aware</p>
            <p className="mt-1 text-sm text-navy/70">{company.hoursGst}</p>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">{company.uaeCoverage}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="text-orange hover:text-orange-hi">
                WhatsApp (UAE applicants)
              </a>
              <a href={`mailto:${company.careersEmail}`} className="text-ink hover:text-navy/70">
                {company.careersEmail}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-6 grid gap-4 sm:grid-cols-2">
          {company.offices.map((office) => (
            <div
              key={office.city}
              className="rounded-[24px] border border-navy/8 bg-white px-5 py-4"
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
                {office.label}
              </p>
              <p className="mt-2 font-semibold text-ink">{office.city}</p>
              {office.lines.map((line) => (
                <p key={line} className="text-sm text-navy/70">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required, hint }) {
  return (
    <label className="block text-sm font-medium text-navy/70">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
      />
      {hint ? <span className="mt-1.5 block text-xs text-navy/55">{hint}</span> : null}
    </label>
  )
}
