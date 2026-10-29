import Link from 'next/link'
import Icon from '../components/Icon'
import { FINAL_CTA } from '../data/content'

export default function FinalCta({ isHome = false }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta__card">
          <h2 data-reveal>{FINAL_CTA.title}</h2>
          <p data-reveal>{FINAL_CTA.text}</p>
          <div className="final-cta__actions" data-reveal>
            <Link className="btn btn--ink btn--lg" href="/sign-up">
              Open your free account
              <Icon name="arrow-right" size={19} />
            </Link>
            {isHome ? (
              // On the homepage the FAQ lives in the #faq section; elsewhere it's a route.
              <a className="btn btn--ghost-ink btn--lg" href="#faq">
                Read the FAQ
              </a>
            ) : (
              <Link className="btn btn--ghost-ink btn--lg" href="/faq">
                Read the FAQ
              </Link>
            )}
          </div>
          <div className="final-cta__trust" data-reveal>
            <Icon name="lock" size={14} />
            {FINAL_CTA.trust}
          </div>
        </div>
      </div>
    </section>
  )
}
