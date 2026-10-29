import Benefits from '@/sections/Benefits'
import FinalCta from '@/sections/FinalCta'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Features - The Tools That Do The Night Work',
  description:
    'Explore the Dusk Fundgrove features: AI signals, copy trading, pro charting, fractional positions and 300+ global markets in one account.',
  keywords: 'Dusk Fundgrove features, AI trading tools, copy trading Australia, crypto charting suite, fractional investing',
  alternates: { canonical: `${SITE_URL}features` },
}

export default function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>Platform Features</h1>
          <p data-reveal>
            Everything on the desk, in one account. Eight tools that run the night so your mornings
            start with a report instead of a scramble.
          </p>
        </div>
      </section>

      <Benefits />

      <FinalCta />
    </>
  )
}
