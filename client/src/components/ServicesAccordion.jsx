import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { services } from '../data/content'

function ServiceRow({ service, index, isOpen, onToggle, delay }) {
  const reveal = useReveal(delay)
  return (
    <div
      ref={reveal.ref}
      className={`orow${isOpen ? ' on' : ''} ${reveal.className}`}
      style={reveal.style}
    >
      <div className="ohead" onClick={() => onToggle(index)}>
        <h3>{service.title}</h3>
        <span className="pl">+</span>
      </div>
      <div className="obody">
        <div className="oin">
          <div>
            <p>{service.paragraph}</p>
            <ul>
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="oim" style={{ backgroundImage: `url(${service.image})` }} />
        </div>
      </div>
    </div>
  )
}

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)
  const eyebrow = useReveal()
  const heading = useReveal()

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="offer" id="offer">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          Services
        </div>
        <h2 ref={heading.ref} className={heading.className} style={{ marginTop: 16 }}>
          What we offer?
        </h2>
        <div style={{ marginTop: 44 }}>
          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={service}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
