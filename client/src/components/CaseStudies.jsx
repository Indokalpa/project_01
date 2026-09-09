import useReveal from '../hooks/useReveal'
import { caseStudies } from '../data/content'

function CaseCard({ item }) {
  const reveal = useReveal()
  return (
    <article ref={reveal.ref} className={`ccard ${reveal.className}`}>
      <div
        className="cim"
        style={{ backgroundImage: `url(${item.image})`, backgroundPosition: item.imagePosition }}
      >
        <b>{item.tag}</b>
      </div>
      <div className="ctx">
        <h3>{item.title}</h3>
        <p className="sm">{item.summary}</p>
        <div className="cbl">
          {item.blocks.map((block) => (
            <div key={block.label}>
              <em>{block.label}</em>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
        {item.numbers.length > 0 && (
          <div className="cnum">
            {item.numbers.map((n) => (
              <div key={n.label}>
                <b>{n.value}</b>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="chon">
          <em>What we&apos;d do differently</em>
          <p>{item.honest}</p>
        </div>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const intro = useReveal()
  const footnote = useReveal()

  return (
    <section className="cases" id="work">
      <div className="wrap">
        <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`}>
          Work
        </div>
        <h2 ref={heading.ref} className={heading.className} style={{ marginTop: 16 }}>
          See how we have delivered
        </h2>
        <p ref={intro.ref} className={intro.className} style={{ marginTop: 14, color: '#5A616B', fontSize: 15 }}>
          Every result carries what was spent, how long it took, and the number it started from.
        </p>
        <div className="cgrid">
          {caseStudies.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
        <div ref={footnote.ref} className={`chon ${footnote.className}`} style={{ marginTop: 26 }}>
          <em>Worth saying plainly</em>
          <p>
            MasterChef Nayan is a brand we co-own through Culinario Edge, so we were never at risk of being
            fired. Judge it as evidence of what we can build end to end — and judge the client work for
            delivery under pressure.
          </p>
        </div>
      </div>
    </section>
  )
}
