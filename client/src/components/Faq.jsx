import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import { faqs, faqSidebarImage } from '../data/content'

export default function Faq() {
  // Uncontrolled <details> elements, closed imperatively via refs — mirrors the
  // original vanilla-JS behavior exactly. A React-controlled `open` prop here
  // creates a toggle-event feedback loop (setting `open` programmatically fires
  // another 'toggle' event, which fights the state update that caused it).
  const detailRefs = useRef([])
  const eyebrow = useReveal()
  const heading = useReveal()
  const sidebar = useReveal()
  const list = useReveal(0.1)

  return (
    <section className="sec faq" id="faq">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          FAQ
        </div>
        <h2
          ref={heading.ref}
          className={heading.className}
          style={{ marginTop: 16, fontSize: 'clamp(30px,4.2vw,52px)' }}
        >
          Questions we get all the time
        </h2>
        <div className="fg">
          <aside ref={sidebar.ref} className={`fside ${sidebar.className}`}>
            <div style={{ backgroundImage: `url(${faqSidebarImage})` }} />
            <b>Still not sure?</b>
            <p>
              Send us your ad account and your last three creatives. We&apos;ll send back a teardown with
              the three things we&apos;d change first — free, whether or not you hire us.
            </p>
            <a className="btn solid" href="#contact">
              Request a teardown →
            </a>
          </aside>
          <div ref={list.ref} className={list.className} style={list.style}>
            {faqs.map((item, i) => (
              <details
                key={item.q}
                ref={(el) => (detailRefs.current[i] = el)}
                defaultOpen={i === 0}
                onToggle={(e) => {
                  if (!e.target.open) return
                  detailRefs.current.forEach((el) => {
                    if (el && el !== e.target) el.open = false
                  })
                }}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
