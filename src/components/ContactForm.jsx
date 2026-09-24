import { useState } from 'react'
import Reveal from './Reveal'
import ArrowButton from './ArrowButton'
import { company } from '../data/company'
import { submitLead } from '../lib/submitLead'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | delivered | fallback
  const [error, setError] = useState('')
  const [fallback, setFallback] = useState(null)

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
      role: String(fd.get('role') || ''),
      experience: String(fd.get('experience') || ''),
      message: String(fd.get('message') || ''),
      type: 'candidate',
    }
    const messageBody = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone}`,
      `City: ${fields.city}`,
      `Preferred role: ${fields.role}`,
      `Experience: ${fields.experience} years`,
      '',
      'Profile:',
      fields.message,
    ].join('\n')

    try {
      const result = await submitLead({
        to: company.careersEmail,
        subject: `Candidate profile — ${fields.name}`,
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
            Contact Us
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
            Submit your retail profile.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-navy/70 md:text-base">
            Tell us your city, role, and experience. {company.responseSLA}. Brands can brief a hire
            by email or WhatsApp below.
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
                  <p className="text-xl font-bold text-ink">Profile received.</p>
                  <p className="mt-2 text-navy/70">{company.responseSLA}.</p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-ink">Send via WhatsApp (recommended)</p>
                  <p className="mt-2 text-navy/70">
                    Your details are ready — WhatsApp works without an email app.
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
                  Send another
                </ArrowButton>
              </div>
              <p className="mt-5 text-sm text-navy/70">
                Or call{' '}
                <a className="font-semibold text-ink underline decoration-navy/25 underline-offset-2 hover:decoration-navy/50" href={company.phoneHref}>
                  {company.phoneDisplay}
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (with country code)" name="phone" required />
              <Field label="Current City" name="city" required />
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
                  <option>Store Manager</option>
                  <option>Area / Cluster Manager</option>
                  <option>Corporate / Operations</option>
                  <option>Other retail role</option>
                </select>
              </label>
              <Field label="Years of Experience" name="experience" type="number" required />
              <label className="block text-sm font-medium text-navy/70 sm:col-span-2">
                About you / Resume link
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Short intro, brands you’ve worked with, or a resume link."
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
                    I agree my profile may be used for relevant retail role matching, as
                    described in our Privacy policy.
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
                  {status === 'submitting' ? 'Sending…' : 'Submit Profile'}
                </ArrowButton>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.14} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={company.phoneHref}
            className="rounded-[24px] border border-navy/8 bg-white p-5 transition hover:border-navy/20"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
              Call India HQ
            </p>
            <p className="mt-2 font-semibold text-ink">{company.phoneDisplay}</p>
            <p className="mt-1 text-sm text-navy/70">{company.hours}</p>
          </a>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-[24px] border border-navy/8 bg-white p-5 transition hover:border-navy/20"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
              WhatsApp
            </p>
            <p className="mt-2 font-semibold text-ink">India + UAE</p>
            <p className="mt-1 text-sm text-navy/70">{company.responseSLA}</p>
          </a>
          <a
            href={`mailto:${company.hiringEmail}`}
            className="rounded-[24px] border border-navy/8 bg-white p-5 transition hover:border-navy/20"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
              Brands / hire
            </p>
            <p className="mt-2 break-all text-sm font-semibold text-ink">{company.hiringEmail}</p>
            <p className="mt-1 text-sm text-navy/70">Employer briefs</p>
          </a>
          <a
            href={company.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-[24px] border border-navy/8 bg-white p-5 transition hover:border-navy/20"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-navy/40 uppercase">
              LinkedIn
            </p>
            <p className="mt-2 font-semibold text-ink">ProStafff Solution</p>
            <p className="mt-1 text-sm text-navy/70">Company page</p>
          </a>
        </Reveal>

        <Reveal delay={0.16} className="mt-6 rounded-[24px] border border-navy/8 bg-white p-5 md:p-6">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-eyebrow uppercase">
            UAE coverage
          </p>
          <p className="mt-2 text-sm leading-relaxed text-navy/70 md:text-[15px]">
            {company.uaeCoverage} {company.hoursGst}.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-6 grid gap-4 sm:grid-cols-2">
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

function Field({ label, name, type = 'text', required }) {
  return (
    <label className="block text-sm font-medium text-navy/70">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-navy/10 bg-cream px-4 py-3 text-ink outline-none focus:border-orange"
      />
    </label>
  )
}
