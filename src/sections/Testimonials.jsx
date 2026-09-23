import Icon from '../components/Icon'
import { TESTIMONIALS, RATING } from '../data/content'

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

/* Wax seal rating stamp */
function RatingBadge() {
  return (
    <div className="testi-rating">
      <span className="testi-rating__score">{RATING.score}</span>
      <div>
        <div className="testi-rating__stars" role="img" aria-label={`${RATING.score} out of 5 stars`}>
          {Array.from({ length: RATING.stars }, (_, i) => (
            <Icon key={i} name="star" size={15} filled />
          ))}
        </div>
        <div className="testi-rating__meta">{RATING.meta}</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <div className="testi-head">
          <div>
            <span className="kicker" data-reveal>
              {TESTIMONIALS.kicker}
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', marginTop: 12 }} data-reveal>
              {TESTIMONIALS.title}
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 10, maxWidth: 480 }} data-reveal>
              {TESTIMONIALS.text}
            </p>
          </div>
          <div data-reveal>
            <RatingBadge />
          </div>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.items.map((item) => (
            <article className="testi-card" key={item.name} data-reveal>
              <span className="testi-card__quote" aria-hidden="true">
                “
              </span>
              <div className="testi-card__stars" role="img" aria-label={`${item.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={14} filled={i < item.stars} />
                ))}
              </div>
              <p>{item.text}</p>
              <div className="testi-card__who">
                {item.avatar ? (
                  <img className="testi-card__avatar" src={item.avatar} alt="" aria-hidden="true" />
                ) : (
                  <span className="testi-card__avatar" aria-hidden="true">
                    {initials(item.name)}
                  </span>
                )}
                <div>
                  <div className="testi-card__name">{item.name}</div>
                  <div className="testi-card__place">{item.place}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
