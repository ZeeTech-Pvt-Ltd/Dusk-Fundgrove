import { ASSETS } from '../data/content'

export default function Assets() {
  return (
    <section className="section section--alt" id="exchanges">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            {ASSETS.kicker}
          </span>
          <h2 data-reveal>{ASSETS.title}</h2>
          <p data-reveal>{ASSETS.text}</p>
        </div>

        <div className="assets-rows">
          {ASSETS.list.map((asset, i) => (
            <div className="asset-row" key={asset.name} data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
              <img
                className="asset-row__coin"
                src={asset.icon}
                alt={`${asset.name} logo`}
                loading="lazy"
              />
              <div>
                <div className="asset-row__name">{asset.name}</div>
                <div className="asset-row__tag">{asset.tag}</div>
              </div>
              <span className="asset-row__leader" aria-hidden="true" />
              {/* plain ledger label, not a control - trading starts after sign up */}
              <span className="asset-row__trade">Trade</span>
            </div>
          ))}
        </div>

        <p className="assets-note" data-reveal>
          {ASSETS.note}
        </p>
      </div>
    </section>
  )
}
