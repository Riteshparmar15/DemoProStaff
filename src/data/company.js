/** Central company details — keep these accurate for live launch */
export const site = {
  url: 'https://prostafffsolution.com',
  name: 'ProStafff Solution',
  ogImage: '/brand/prostafff-mark.png',
}

export const company = {
  legalName: 'ProStafff Solution Private Limited',
  shortName: 'ProStafff',
  tagline: 'Your next retail role — India & UAE',
  registration: 'Private Limited Company · India',
  cin: '',
  gstin: '',
  registeredOffice: 'Mumbai, Maharashtra, India',
  email: 'contact@prostafffsolution.com',
  hiringEmail: 'hire@prostafffsolution.com',
  careersEmail: 'careers@prostafffsolution.com',
  phoneDisplay: '+91 22 4890 2140',
  phoneHref: 'tel:+912248902140',
  whatsappNumber: '912248902140',
  whatsappHref: 'https://wa.me/912248902140',
  linkedin: 'https://www.linkedin.com/company/prostafff-solution',
  responseSLA: 'We respond within 1 business day',
  hours: 'Mon–Sat · 10:00–19:00 IST (UAE profiles reviewed in the same window)',
  hoursGst: 'UAE applications answered in the IST desk window · GST ≈ IST − 1.5h',
  uaeCoverage:
    'Apply for UAE retail roles from this site — profiles are reviewed by our India HQ desk with Dubai meetings arranged by appointment when required.',
  offices: [
    {
      city: 'Mumbai',
      label: 'India HQ · Applications',
      lines: ['Registered office · Maharashtra, India', 'Mon–Sat · 10:00–19:00 IST', 'Career queries welcome'],
    },
    {
      city: 'Dubai',
      label: 'UAE · International roles',
      lines: [
        'UAE applications reviewed from India HQ',
        'WhatsApp / email · IST business hours',
        'On-ground meetings by appointment',
      ],
    },
  ],
}

export const trustSignals = [
  { label: 'For', value: 'Job applicants only' },
  { label: 'Markets', value: 'India + UAE' },
  { label: 'Paths', value: 'Permanent · Seasonal · Leadership' },
  { label: 'Reply', value: '1 business day' },
]

export const corporateFacts = () => [
  { label: 'Legal name', value: company.legalName },
  { label: 'Entity', value: company.registration },
  { label: 'Registered office', value: company.registeredOffice },
  {
    label: 'CIN',
    value: company.cin || 'Shared on written engagement documents',
  },
  {
    label: 'GSTIN',
    value: company.gstin || 'Shared on written engagement documents',
  },
]

export const trustBar = [
  {
    title: 'Free to apply · Both markets',
    body: 'Never pay to submit a profile for India or UAE roles. Legitimate placements never charge candidates.',
  },
  {
    title: '1-business-day reply',
    body: 'India and UAE applications share one careers desk — same timed first response (IST; GST ≈ IST − 1.5h).',
  },
  {
    title: 'India national + UAE international',
    body: 'Equal desks: metros across India and Dubai / Abu Dhabi / Sharjah focus roles.',
  },
  {
    title: '0 years welcome',
    body: 'First-job associates through multi-site leaders — declare experience honestly and we match fit.',
  },
]

export const commitments = [
  {
    title: 'Your data stays protected',
    body: 'Profiles are used only for retail matching. We do not sell personal data.',
  },
  {
    title: 'Honest role fit',
    body: 'We shortlist when your experience and market preference match a live brief — not to fill quotas.',
  },
  {
    title: 'Clear next steps',
    body: 'After you apply: review → shortlist → brand interview → offer support.',
  },
  {
    title: 'One careers contact',
    body: 'One accountable desk from application through early onboarding questions.',
  },
]

export const caseStudies = [
  {
    tag: 'India · National',
    sector: 'Lifestyle retail · Multi-city',
    title: 'Associates placed into festive peak floors',
    outcome: 'Applicants shortlisted by city and brand fit → interviews within days → store starts with opening-week support.',
    metrics: ['Multi-city', 'Festive peak', 'Fast shortlist'],
  },
  {
    tag: 'UAE · International',
    sector: 'Premium beauty · Flagship',
    title: 'Service-theatre talent for a flagship floor',
    outcome: 'UAE-ready profiles screened for hospitality and product fluency → brand interviews → onboarding alignment.',
    metrics: ['Dubai focus', 'Brand voice', 'Visa-aware brief'],
  },
  {
    tag: 'Leadership path',
    sector: 'Apparel cluster · West India',
    title: 'Store leaders moving into area ownership',
    outcome: 'Experienced managers matched to multi-site briefs → structured interviews → 90-day check-in support.',
    metrics: ['P&L ready', 'Cluster growth', '90-day support'],
  },
]

export const testimonials = [
  {
    quote:
      'I applied once, got a clear reply, and landed interviews that actually matched my store experience.',
    role: 'Store Associate',
    org: 'Placed · Lifestyle retail · India',
  },
  {
    quote:
      'They explained the UAE process upfront — no false promises, just a serious shortlist for the right floor.',
    role: 'Beauty Advisor',
    org: 'Placed · Premium retail · UAE',
  },
  {
    quote:
      'As a store manager looking to step up, the brief and interview loop felt professional and respectful of my time.',
    role: 'Store Manager',
    org: 'Placed · Apparel · West India',
  },
]

export const policies = {
  privacy: {
    title: 'Privacy',
    points: [
      'We collect contact and role details only to match you to retail job opportunities.',
      'We do not sell personal data. Your information is shared with employers only for relevant roles with your consent.',
      'You may request correction or deletion by emailing careers@prostafffsolution.com.',
      'Website forms may be delivered via encrypted form relay and/or WhatsApp so your application reaches our careers desk.',
    ],
  },
  terms: {
    title: 'Application terms',
    points: [
      'This website is for job applicants seeking retail roles in India and the UAE.',
      'Submitting a profile does not guarantee an interview or offer; matching depends on live mandates and fit.',
      'Brand marks identify retail house formats whose store networks we may place into. They do not imply endorsement or guaranteed employment by those brands.',
      'ProStafff Solution Private Limited operates retail career placement across India, with UAE roles covered from the India HQ desk unless otherwise agreed in writing.',
      'Candidates are never charged a fee by ProStafff to apply or to be considered for roles.',
    ],
  },
}
