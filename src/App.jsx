import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import IntroSplash from './components/IntroSplash'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import LuxuryEcosystem from './components/LuxuryEcosystem'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Roles from './components/Roles'
import Proof from './components/Proof'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const handleIntroComplete = useCallback(() => setIntroDone(true), [])

  useEffect(() => {
    // Refresh / first load always opens at the top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <ThemeSwitcher />
      <IntroSplash onComplete={handleIntroComplete} />
      <Navbar visible={introDone} />
      <main id="main">
        <Hero />
        <TrustBar />
        <LuxuryEcosystem />
        <About />
        <Capabilities />
        <Roles />
        <Proof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
