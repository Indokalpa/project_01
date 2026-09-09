import useReveal from '../hooks/useReveal'
import Marquee from './Marquee'
import HeroPlane from './HeroPlane'
import { brandNames } from '../data/content'

export default function Hero() {
  const title = useReveal()
  const lead = useReveal(0.16)
  const card = useReveal(0.26)

  return (
    <header className="hero">
      <HeroPlane />
      <div
        className="wrap"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <h1 ref={title.ref} className={title.className} style={title.style}>
          Everyone Can Run Ads.
          <br />
          We Build the <span className="ac">Engine</span>.
        </h1>
        <div className="hero-b">
          <div ref={lead.ref} className={lead.className} style={lead.style}>
            <p className="lead">
              Paid media, campaigns, influencer, high-end production and the backend behind them — one
              team, one contract, so the ad, the page and the follow-up are built by the same people and
              actually connect.
            </p>
            <a className="proof" href="#work">
              The Proof is in the Work ↓
            </a>
          </div>
          <div ref={card.ref} className={`hcard ${card.className}`} style={card.style}>
            <b>
              emergex<span className="ac">.</span>
            </b>
            <span>When brands stop guessing</span>
          </div>
        </div>
      </div>
      <Marquee items={brandNames} />
    </header>
  )
}
