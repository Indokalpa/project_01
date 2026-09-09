import useReveal from '../hooks/useReveal'
import { stripImages } from '../data/content'

function StripTile({ image, delay }) {
  const reveal = useReveal(delay)
  return (
    <div
      ref={reveal.ref}
      className={reveal.className}
      style={{ ...reveal.style, backgroundImage: `url(${image})` }}
    />
  )
}

export default function ShowcaseStrip() {
  return (
    <section className="sec" style={{ padding: '90px 0' }}>
      <div className="wrap">
        <div className="strip">
          {stripImages.map((image, i) => (
            <StripTile key={i} image={image} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  )
}
