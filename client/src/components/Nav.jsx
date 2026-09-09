export default function Nav({ stuck }) {
  return (
    <nav className={`nav${stuck ? ' stuck' : ''}`}>
      <div className="lg">
        emergex<i>.</i>
      </div>
      <div className="lk">
        <a href="#offer">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
      </div>
      <a className="btn" href="#contact">
        Contact Us →
      </a>
    </nav>
  )
}
