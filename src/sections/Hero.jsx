import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { HERO } from '../data/content'

const TRUST_ICONS = { 0: 'lock', 1: 'shield', 2: 'headset' }

export default function Hero() {
  return (
    <section className="hero">
      {/* faint serif monogram watermark - fills the open paper space */}
      <span className="hero__monogram" aria-hidden="true">
        DF
      </span>
      <div className="container">
        <div className="hero-grid">
          <div>
            {/* Above-the-fold elements render instantly (no reveal fade):
                the animation would delay FCP/LCP on mobile. */}
            <h1>
              <em>{HERO.title[0]}</em> {HERO.title.slice(1).join(' ')}
            </h1>

            <p className="hero__lead">
              {HERO.lead}
            </p>

            <div className="hero__trust">
              {HERO.trust.map((item, i) => (
                <span key={item}>
                  <Icon name={TRUST_ICONS[i]} size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <RegistrationForm idPrefix="hero" title={HERO.formTitle} subtitle={HERO.formSubtitle} />
        </div>
      </div>
    </section>
  )
}
