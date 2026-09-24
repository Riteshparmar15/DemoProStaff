import { asset } from '../lib/asset'

export const journeySteps = [
  { id: '01', label: 'Apply', sub: 'Submit your profile' },
  { id: '02', label: 'Match', sub: 'We review & shortlist' },
  { id: '03', label: 'Interview', sub: 'Meet the brand team' },
  { id: '04', label: 'Offer', sub: 'Role & location confirmed' },
  { id: '05', label: 'Start', sub: 'Onboarding support' },
]

export const navLinks = [
  { label: 'Open roles', href: '#openings' },
  { label: 'About', href: '#about' },
  { label: 'Opportunities', href: '#services' },
  { label: 'Roles', href: '#roles' },
  { label: 'Why us', href: '#proof' },
  { label: 'FAQ', href: '#faq' },
]

export const luxuryBrands = [
  { name: 'Chanel', logo: asset('logos/chanel.png?v=3') },
  { name: 'Cartier', logo: asset('logos/cartier.png?v=3') },
  { name: 'Christian Louboutin', logo: asset('logos/louboutin.png?v=3') },
  { name: 'BVLGARI', logo: asset('logos/bvlgari.png?v=3') },
  { name: 'Rolex', logo: asset('logos/rolex.png?v=3') },
  { name: 'Tiffany & Co.', logo: asset('logos/tiffany.png?v=3') },
  { name: 'Nike', logo: asset('logos/nike.png?v=3') },
  { name: 'Sephora', logo: asset('logos/sephora.png?v=3') },
  { name: 'Zara', logo: asset('logos/zara.png?v=3') },
  { name: 'Bath & Body Works', logo: asset('logos/bbw.png?v=3') },
  { name: 'Adidas', logo: asset('logos/adidas.png?v=3') },
  { name: 'Louis Vuitton', logo: asset('logos/lv.png?v=3') },
]

export const snapshotRows = [
  { label: 'Markets', status: 'India · UAE · Equal desks' },
  { label: 'Roles', status: 'Store · Field · HQ' },
  { label: 'Response', status: '1 business day' },
]

export const indiaCities = [
  'Mumbai',
  'Delhi NCR',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
]

export const uaeCities = ['Dubai', 'Abu Dhabi', 'Sharjah']

/** @deprecated use indiaCities + uaeCities */
export const metroHints = [...indiaCities, ...uaeCities]

export const liveOpenings = [
  {
    market: 'India — National',
    flag: 'IN',
    roles: [
      { title: 'Store Associate', city: 'Mumbai · Delhi NCR · Bengaluru', type: 'Permanent / Seasonal' },
      { title: 'Visual Merchandiser', city: 'Hyderabad · Pune', type: 'Permanent' },
      { title: 'Store Manager', city: 'West & South India clusters', type: 'Leadership' },
      { title: 'EOSS / Festive Floor Team', city: 'Multi-city India', type: 'Seasonal' },
    ],
  },
  {
    market: 'UAE — International',
    flag: 'AE',
    roles: [
      { title: 'Beauty / Luxury Advisor', city: 'Dubai · Abu Dhabi', type: 'Permanent' },
      { title: 'Store Associate', city: 'Dubai malls & high street', type: 'Permanent / Contract' },
      { title: 'Assistant Store Manager', city: 'Dubai · Sharjah', type: 'Leadership' },
      { title: 'Ramadan / Peak Floor Cover', city: 'UAE retail calendar', type: 'Seasonal' },
    ],
  },
]

export const aboutPillars = [
  {
    title: 'Brand-floor careers',
    body: 'We place people into luxury, lifestyle, beauty, and sport stores — nationally across India and into UAE international mandates, with equal care on both desks.',
  },
  {
    title: 'Fair, clear process',
    body: 'You know what happens after you apply: profile review, shortlist, brand interview, then offer support — no silent black holes. Freshers (0 years) are welcome.',
  },
  {
    title: 'Right-fit matching',
    body: 'We match your experience, city, market preference, and work authorization to roles where you can grow — not spray-and-pray job boards.',
  },
]

export const services = [
  {
    title: 'Permanent roles',
    body: 'Long-term store, field, and HQ retail careers in both markets — built for people who want to grow with a brand.',
    points: [
      'India: store & cluster leadership, HQ retail tracks',
      'UAE: luxury / lifestyle floor and supervisory paths',
      'Stable contracts with clear scope in either market',
    ],
  },
  {
    title: 'Seasonal & contract',
    body: 'Peak retail calendars in both countries — flexible roles when brands need strong floor energy fast.',
    points: [
      'India: festive, Diwali, EOSS & launch-week teams',
      'UAE: Ramadan, Dubai Shopping Festival & peak cover',
      'Short-term specialist and opening crews',
    ],
  },
  {
    title: 'Leadership & field',
    body: 'Area managers, store directors, and multi-site roles for experienced retail leaders in India and the UAE.',
    points: [
      'India: multi-city cluster & district ownership',
      'UAE: flagship and multi-site supervisory leadership',
      'Corporate specialist moves in both markets',
    ],
  },
]

export const roleGroups = [
  {
    title: 'In-Store Roles',
    tag: 'On the brand floor',
    items: [
      'Store Associates — service, conversion, and product knowledge.',
      'Cashiers — accurate, high-volume POS and checkout hospitality.',
      'Visual Merchandisers — windows, planograms, and campaign storytelling.',
    ],
  },
  {
    title: 'Field Management',
    tag: 'Lead across stores',
    items: [
      'Store Managers — P&L, people, and customer experience ownership.',
      'Area / District Managers — multi-site growth, standards, and coaching.',
      'Launch Leads — new-store opening playbooks and hypercare teams.',
    ],
  },
  {
    title: 'Corporate Retail',
    tag: 'Behind the brand',
    items: [
      'Retail Merchandisers — range, buy, and in-season trading.',
      'Supply Chain — allocation, inbound, and network availability.',
      'E-commerce Operations — marketplace, D2C fulfilment, and peak planning.',
    ],
  },
]

export const faqs = [
  {
    q: 'How do I apply for a retail job?',
    a: 'Use the Apply form — choose India (national) or UAE (international), add your city, role, experience (0 years welcome), and work authorization if applying to the UAE. We reply within 1 business day.',
  },
  {
    q: 'Do you have open roles in India?',
    a: 'Yes. See the Open roles strip for current India focus areas (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune and more). Mandates refresh often — submitting a profile keeps you in the matching pool.',
  },
  {
    q: 'Can I apply for UAE / Dubai retail jobs?',
    a: 'Yes. Select UAE — International on the form and tell us your work authorization (Emirates ID / residence visa, employment visa transfer, visit visa exploring options, or need employer sponsorship). We source UAE store, field, and corporate roles; visa and labour-card steps follow the hiring employer’s entity.',
  },
  {
    q: 'Who can apply for UAE roles?',
    a: 'UAE residents with valid work rights, candidates open to visa transfer, and strong profiles exploring sponsorship — as long as you declare status honestly. We never charge candidates a fee and never guarantee a visa.',
  },
  {
    q: 'Is there a fee to apply?',
    a: 'No. Candidates never pay ProStafff to submit a profile or be considered for roles in India or the UAE. Beware of anyone asking for money to “guarantee” a job.',
  },
  {
    q: 'What happens after I submit my profile?',
    a: 'We review fit against live India and UAE mandates, shortlist where relevant, and coordinate brand interviews. First response within 1 business day (IST desk; UAE reviews in the same window, GST ≈ IST − 1.5h).',
  },
  {
    q: 'What experience do I need?',
    a: 'From first-job associates (0 years) through multi-site leaders. Be honest about experience and brands you have worked with — reliability and culture fit matter as much as titles.',
  },
  {
    q: 'Which brands might I work for?',
    a: 'Luxury and international brand store networks nationally across India and for UAE mandates. Logo marks name house formats we may place into — not job guarantees or brand endorsements.',
  },
  {
    q: 'How is my data used?',
    a: 'Your profile is used only for retail role matching in your chosen market(s). We do not sell personal data. Request correction or deletion via careers@prostafffsolution.com.',
  },
]

export const footerGroups = [
  {
    title: 'Apply',
    links: [
      { label: 'Submit profile', href: '#contact' },
      { label: 'Retail roles', href: '#roles' },
      { label: 'Opportunities', href: '#services' },
      { label: 'Email careers', href: 'mailto:careers@prostafffsolution.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Why ProStafff', href: '#proof' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Brands we place into', href: '#brands-we-staff' },
    ],
  },
  {
    title: 'Markets',
    links: [
      { label: 'India · National', href: '#openings' },
      { label: 'UAE · International', href: '#openings' },
      { label: 'WhatsApp apply', href: 'https://wa.me/912248902140' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: '+91 22 4890 2140', href: 'tel:+912248902140' },
      { label: 'careers@prostafffsolution.com', href: 'mailto:careers@prostafffsolution.com' },
      { label: 'WhatsApp', href: 'https://wa.me/912248902140' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/prostafff-solution' },
    ],
  },
]

