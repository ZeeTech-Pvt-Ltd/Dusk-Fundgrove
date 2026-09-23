import Icon from '../components/Icon'
import Calculator from '../components/Calculator'
import { CALCULATOR } from '../data/content'

export default function GrowthBand() {
  return (
    <section className="section section--alt" id="calculator">
      <div className="container">
        <div className="growth-grid">
          <div className="growth__copy">
            <span className="kicker" data-reveal>
              {CALCULATOR.kicker}
            </span>
            <h2 data-reveal>{CALCULATOR.title}</h2>
            <p data-reveal>{CALCULATOR.text}</p>
            <span className="growth__note" data-reveal>
              <Icon name="sparkle" size={15} />
              Illustrative only. Not a promise of returns.
            </span>
          </div>

          <Calculator />
        </div>
      </div>
    </section>
  )
}
