import useReveal from '../hooks/useReveal'
import { whyUs } from '../data/content'

function WhyUsCard({ item, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={reveal.className} style={reveal.style}>
      <b>{item.title}</b>
      <p>{item.body}</p>
    </div>
  )
}

export default function WhyUs() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const limiter = useReveal()

  return (
    <section className="sec only">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`} style={{ justifyContent: 'center' }}>
          Why us
        </div>
        <h2 ref={heading.ref} className={heading.className} style={{ marginTop: 16 }}>
          You will not need a second agency.
        </h2>
        <div className="og">
          {whyUs.map((item, i) => (
            <WhyUsCard key={item.title} item={item} delay={i * 0.1} />
          ))}
        </div>
        <p ref={limiter.ref} className={`lim ${limiter.className}`}>
          We take on a limited number of partners at a time, because the production calendar is finite. If
          we say yes to you, we have said no to someone else.
        </p>
      </div>
    </section>
  )
}
