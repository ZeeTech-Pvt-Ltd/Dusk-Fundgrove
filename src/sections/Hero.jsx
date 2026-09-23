import Icon from '../components/Icon'
import RegistrationForm from '../components/RegistrationForm'
import { HERO } from '../data/content'

const TRUST_ICONS = { 0: 'lock', 1: 'shield', 2: 'headset' }

/**
 * The setting sun over the horizon - drawn inline so it stays crisp and
 * costs nothing to load (no stock art).
 */
function DuskSun() {
  return (
    <svg className="hero__sun" viewBox="0 0 480 480" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="sun-disc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e08a3c" />
          <stop offset="0.55" stopColor="#d2556e" />
          <stop offset="1" stopColor="#7a5fd0" />
        </linearGradient>
      </defs>
      {/* horizon */}
      <line x1="0" y1="240" x2="480" y2="240" stroke="#cdc2a8" strokeWidth="1.5" />
      {/* sun */}
      <path d="M90 240 A 150 150 0 0 1 390 240 Z" fill="url(#sun-disc)" opacity="0.85" />
      {/* reflection lines */}
      <g stroke="#e08a3c" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <line x1="180" y1="252" x2="180" y2="270" />
        <line x1="240" y1="252" x2="240" y2="276" />
        <line x1="300" y1="252" x2="300" y2="270" />
      </g>
      {/* birds */}
      <g stroke="#201c2b" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.55">
        <path d="M320 150 q8 -8 16 0 q8 -8 16 0" />
        <path d="M370 128 q6 -6 12 0 q6 -6 12 0" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <DuskSun />
      <div className="container">
        <div className="hero-grid">
          <div>
            {/* Above-the-fold elements render instantly (no reveal fade):
                the animation would delay FCP/LCP on mobile. */}
            <h1>
              {HERO.title[0]} <span className="hl">{HERO.title[1]}</span> {HERO.title[2]}
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
