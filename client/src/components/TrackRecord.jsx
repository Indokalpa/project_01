import useReveal from '../hooks/useReveal'
import { trackRecord } from '../data/content'

function TrackCard({ item, delay }) {
  const reveal = useReveal(delay)
  return (
    <div ref={reveal.ref} className={`tk ${reveal.className}`} style={reveal.style}>
      <div className="bn">{item.brand}</div>
      <p>{item.note}</p>
      <div className="kv">
        <div>
          <b>{item.creators}</b>
          <span>Creators</span>
        </div>
        <div>
          <b>{item.views}</b>
          <span>Views</span>
        </div>
      </div>
    </div>
  )
}

export default function TrackRecord() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const lead = useReveal()

  return (
    <section className="sec trk">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          Track record
        </div>
        <h2
          ref={heading.ref}
          className={heading.className}
          style={{ marginTop: 16, fontSize: 'clamp(30px,4.2vw,52px)' }}
        >
          Campaigns that moved
          <br />
          at national scale
        </h2>
        <p ref={lead.ref} className={`lead ${lead.className}`} style={{ marginTop: 20, maxWidth: '66ch' }}>
          Gaming, FMCG and automotive campaigns our team has built and run — hundreds of creators briefed,
          contracted and measured across a single decade of work.
        </p>
        <div className="tkg">
          {trackRecord.map((item, i) => (
            <TrackCard key={item.brand} item={item} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
