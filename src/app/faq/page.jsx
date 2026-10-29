import Link from 'next/link'
import FaqList from '@/components/FaqList'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'FAQs - Frequently Asked Questions About Dusk Fundgrove',
  description:
    'Answers to common Dusk Fundgrove questions: account setup, security, assets, deposits and withdrawals. Create your free account today.',
  keywords: 'Dusk Fundgrove FAQ, crypto trading questions, how to trade crypto Australia, Dusk Fundgrove account help',
  alternates: { canonical: `${SITE_URL}faq` },
}

export default function Faqs() {
  return (
    <>
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
            <Link href="/contact-us" style={{ fontWeight: 600 }}>
              Contact our team
            </Link>{' '}
            We are here 24/7.
          </p>
        </div>
      </section>
    </>
  )
}
