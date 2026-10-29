import HowItWorks from '@/sections/HowItWorks'
import JoinCta from '@/sections/JoinCta'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'How It Works - From Sign Up To First Trade In One Evening',
  description:
    'See how Dusk Fundgrove works: open an account in two minutes, add funds, and set the AI desk to work while you sleep.',
  keywords: 'how Dusk Fundgrove works, how to start crypto trading Australia, AI trading platform guide, Dusk Fundgrove steps',
  alternates: { canonical: `${SITE_URL}how-it-works` },
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>How It Works</h1>
          <p data-reveal>
            Three steps separate you from an evening desk that trades while you sleep. No jargon,
            no paperwork, no pressure.
          </p>
        </div>
      </section>

      <HowItWorks />

      <JoinCta />
    </>
  )
}
