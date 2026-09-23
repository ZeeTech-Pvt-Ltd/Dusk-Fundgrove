import { useState } from 'react'
import Icon from './Icon'
import { FAQS } from '../data/content'

export default function FaqList() {
  // accordion behaviour: opening one question closes the others
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="faq-list">
      {FAQS.map((item, i) => (
        <details
          className="faq-item"
          key={item.q}
          open={openIndex === i}
          onToggle={(e) => setOpenIndex(e.currentTarget.open ? i : -1)}
        >
          <summary>
            {item.q}
            <Icon name="plus" size={18} />
          </summary>
          <p className="faq-item__answer">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
