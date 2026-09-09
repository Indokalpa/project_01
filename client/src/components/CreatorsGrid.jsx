import useReveal from '../hooks/useReveal'
import { creators } from '../data/content'

function CreatorCard({ creator, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={`pf ${reveal.className}`} style={reveal.style}>
      <div className="av" style={{ backgroundImage: `url(${creator.image})` }} />
      <b>{creator.name}</b>
      <span>{creator.niche}</span>
    </div>
  )
}

export default function CreatorsGrid() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const lead = useReveal()
  const source = useReveal()

  return (
    <section className="sec crt">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          Creators
        </div>
        <h2
          ref={heading.ref}
          className={heading.className}
          style={{ marginTop: 16, fontSize: 'clamp(30px,4.2vw,52px)' }}
        >
          The people who front
          <br />
          the work
        </h2>
        <p ref={lead.ref} className={`lead ${lead.className}`} style={{ marginTop: 18, maxWidth: '64ch' }}>
          We do not rent a creator for a post and move on. Every collaboration is briefed, contracted with
          written usage rights, and the content gets a second life as paid media through the creator&apos;s
          own handle.
        </p>
        <div className="cgd2">
          {creators.map((creator, i) => (
            <CreatorCard key={creator.name} creator={creator} delay={i * 0.04} />
          ))}
        </div>
        <p ref={source.ref} className={`src ${source.className}`} style={{ marginTop: 34 }}>
          Nano to macro, across Assamese, Bengali, Hindi and English. Full roster available on request.
        </p>
      </div>
    </section>
  )
}
