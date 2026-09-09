import useReveal from '../hooks/useReveal'
import { whyCreatorStats, collaborationFormats } from '../data/content'

function WhyCard({ item, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={`wc ${reveal.className}`} style={reveal.style}>
      <b>{item.stat}</b>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </div>
  )
}

function FormatChip({ label, index, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <i>{String(index + 1).padStart(2, '0')}</i>
      {label}
    </div>
  )
}

export default function WhyCreators() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const source = useReveal()
  const eyebrow2 = useReveal()
  const heading2 = useReveal()

  return (
    <section className="sec why">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          Why creators
        </div>
        <h2
          ref={heading.ref}
          className={heading.className}
          style={{ marginTop: 16, fontSize: 'clamp(30px,4.2vw,52px)' }}
        >
          Because people
          <br />
          trust people.
        </h2>
        <div className="wg">
          {whyCreatorStats.map((item, i) => (
            <WhyCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>
        <p ref={source.ref} className={`src ${source.className}`}>
          First two figures are widely reported industry benchmarks, not EmergeX results.
        </p>
        <div ref={eyebrow2.ref} className={`eyebrow ${eyebrow2.className}`} style={{ marginTop: 80 }}>
          Collaboration formats
        </div>
        <h2
          ref={heading2.ref}
          className={heading2.className}
          style={{ marginTop: 16, fontSize: 'clamp(26px,3.4vw,40px)' }}
        >
          Six ways we put a creator to work
        </h2>
        <div className="fmt">
          {collaborationFormats.map((label, i) => (
            <FormatChip key={label} label={label} index={i} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
