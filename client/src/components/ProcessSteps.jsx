import useReveal from '../hooks/useReveal'

function StepCard({ item, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={`pc ${reveal.className}`} style={reveal.style}>
      <b>{item.step}</b>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </div>
  )
}

export default function ProcessSteps({ id, eyebrowText, heading, steps, background }) {
  const eyebrow = useReveal()
  const headingReveal = useReveal()

  return (
    <section className="sec proc" id={id} style={background ? { background } : undefined}>
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          {eyebrowText}
        </div>
        <h2
          ref={headingReveal.ref}
          className={headingReveal.className}
          style={{ marginTop: 16, fontSize: 'clamp(30px,4.2vw,52px)' }}
        >
          {heading}
        </h2>
        <div className="pg">
          {steps.map((step, i) => (
            <StepCard key={step.step} item={step} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
