import Testimonials from '@/sections/Testimonials'
import FinalCta from '@/sections/FinalCta'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Reviews - What Australian Investors Say About Dusk Fundgrove',
  description:
    'Read letters from Australians who moved their evening trading to Dusk Fundgrove. Rated 4.9 out of 5 across 1286 reviews.',
  keywords: 'Dusk Fundgrove reviews, Dusk Fundgrove testimonials, crypto trading reviews Australia, AI trading platform reviews',
  alternates: { canonical: `${SITE_URL}reviews` },
}

export default function Reviews() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 data-reveal>What Investors Say</h1>
          <p data-reveal>
            Real notes from Australians who handed their evening trading to the desk - and never
            looked back.
          </p>
        </div>
      </section>

      <Testimonials />

      <FinalCta />
    </>
  )
}
