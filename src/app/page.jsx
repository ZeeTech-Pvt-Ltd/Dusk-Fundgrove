import Hero from '@/sections/Hero'
import StatsBand from '@/sections/StatsBand'
import MarketTicker from '@/components/MarketTicker'
import About from '@/sections/About'
import Assets from '@/sections/Assets'
import HowItWorks from '@/sections/HowItWorks'
import JoinCta from '@/sections/JoinCta'
import GrowthBand from '@/sections/GrowthBand'
import Benefits from '@/sections/Benefits'
import Testimonials from '@/sections/Testimonials'
import Security from '@/sections/Security'
import FinalCta from '@/sections/FinalCta'
import FaqSection from '@/sections/FaqSection'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Dusk Fundgrove - AI-Assisted Trading Platform | Australia',
  description:
    'Dusk Fundgrove runs your trading desk through the night with AI signals, bank-grade custody and 24/7 human support. Create your free account today.',
  keywords:
    'Dusk Fundgrove, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, overnight trading, evening trading desk',
  alternates: { canonical: SITE_URL },
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <MarketTicker />
      <About isHome />
      <Assets />
      <HowItWorks />
      <JoinCta />
      <GrowthBand />
      <Benefits />
      <Testimonials />
      <Security />
      <FinalCta isHome />
      <FaqSection />
    </>
  )
}
