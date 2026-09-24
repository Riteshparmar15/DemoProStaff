import { company } from '../data/company'

function buildMailto({ to, subject, body }) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function buildWhatsApp({ text }) {
  return `${company.whatsappHref}?text=${encodeURIComponent(text)}`
}

/**
 * Submit a lead without depending on a local email client.
 * 1) Tries FormSubmit AJAX (works after one-time inbox confirmation per recipient).
 * 2) Always returns WhatsApp + mailto fallbacks for India/UAE mobile users.
 */
export async function submitLead({ to, subject, fields, messageBody }) {
  const payload = {
    ...fields,
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _honey: '',
  }

  let delivered = false
  let channel = 'fallback'

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      delivered = true
      channel = 'form'
    }
  } catch {
    // Network / CORS / first-time activation — fall through to WhatsApp
  }

  return {
    delivered,
    channel,
    whatsappUrl: buildWhatsApp({ text: `${subject}\n\n${messageBody}` }),
    mailtoUrl: buildMailto({ to, subject, body: messageBody }),
    to,
  }
}
