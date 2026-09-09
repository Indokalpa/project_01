import useReveal from '../hooks/useReveal'
import useCountUp from '../hooks/useCountUp'
import { trustedBrands, trustedStats } from '../data/content'

function StatCard({ label, to, suffix, note, delay }) {
  const reveal = useReveal(delay)
  const count = useCountUp(to, suffix)

  return (
    <div ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <em>{label}</em>
      <b ref={count.ref}>{count.value}</b>
      <span>{note}</span>
    </div>
  )
}

export default function TrustedStats() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const lead = useReveal()
  const logos = useReveal(0.1)

  return (
    <section className="sec trust">
      <div className="wrap">
        <div className="tgrid">
          <div>
            <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
              Brands
            </div>
            <h2 ref={heading.ref} className={heading.className}>
              Trusted by
              <br />
              Industry <span className="ac">Leaders.</span>
            </h2>
            <p
              ref={lead.ref}
              className={`lead ${lead.className}`}
              style={{ marginTop: 24, maxWidth: '46ch' }}
            >
              Direct clients and white-label work behind other agencies — across real estate, food, retail,
              automotive and education.
            </p>
          </div>
          <div ref={logos.ref} className={`lgrid ${logos.className}`} style={logos.style}>
            {trustedBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
        <div className="tstats">
          {trustedStats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
