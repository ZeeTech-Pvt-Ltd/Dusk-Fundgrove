import { Link } from 'react-router-dom'
import FaqList from '../components/FaqList'
import useMeta from '../hooks/useMeta'
import { BreadcrumbJsonLd, FaqJsonLd } from '../components/JsonLd'
import { SITE_URL, FAQS } from '../data/content'

export default function Faqs() {
  useMeta({
    title: 'FAQs - Frequently Asked Questions About Dusk Fundgrove',
    description:
      'Answers to common Dusk Fundgrove questions: account setup, security, assets, deposits and withdrawals. Create your free account today.',
    keywords: 'Dusk Fundgrove FAQ, crypto trading questions, how to trade crypto Australia, Dusk Fundgrove account help',
    canonical: `${SITE_URL}faq`,
  })

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'FAQs', slug: 'faq' }]} />
      <FaqJsonLd faqs={FAQS} />
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="kicker" data-reveal>
              Help center
            </span>
            <h1 data-reveal style={{ fontSize: 'clamp(32px, 4vw, 48px)', margin: '14px 0 18px' }}>
              Frequently Asked Questions
            </h1>
            <p data-reveal>Everything you need to know about trading with Dusk Fundgrove.</p>
          </div>
          <div data-reveal>
            <FaqList />
          </div>
          <p data-reveal style={{ textAlign: 'center', marginTop: 36, color: 'var(--muted)' }}>
            Still have questions?{' '}
            <Link to="/contact-us" style={{ fontWeight: 600 }}>
              Contact our team
            </Link>{' '}
            We are here 24/7.
          </p>
        </div>
      </section>
    </>
  )
}
