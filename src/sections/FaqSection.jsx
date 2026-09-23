import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import FaqList from '../components/FaqList'

export default function FaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-split">
          <div className="faq-split__side">
            <span className="kicker" data-reveal>
              FAQ
            </span>
            <h2 data-reveal>Questions, Answered In Plain Language</h2>
            <p data-reveal>
              Everything investors usually ask before opening an account. Still unsure about
              something? A real analyst is one message away.
            </p>
            <div data-reveal>
              <Link className="btn btn--outline" to="/contact-us">
                Ask the desk
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>
          </div>

          <div data-reveal>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  )
}
