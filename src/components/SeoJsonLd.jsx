import { useEffect } from 'react'
import { faqs } from '../data/content'

/** Injects FAQPage JSON-LD for SEO (kept in sync with on-page FAQ). */
export default function SeoJsonLd() {
  useEffect(() => {
    const id = 'prostafff-faq-jsonld'
    const existing = document.getElementById(id)
    if (existing) existing.remove()

    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [])

  return null
}
