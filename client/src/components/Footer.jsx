import useReveal from '../hooks/useReveal'
import { footerLinks } from '../data/content'

export default function Footer() {
  const eyebrow = useReveal()
  const heading = useReveal()
  const cta = useReveal()

  return (
    <footer className="ft" id="contact">
      <div className="wrap">
        <div className="ftop">
          <div ref={eyebrow.ref} className={`eyebrow ${eyebrow.className}`} style={{ justifyContent: 'center' }}>
            Let&apos;s talk
          </div>
          <h2 ref={heading.ref} className={heading.className} style={{ marginTop: 20 }}>
            Tell us the one number
            <br />
            that matters right now.
          </h2>
          <a ref={cta.ref} className={`btn solid ${cta.className}`} href="mailto:hello@emergexmedia.com">
            Connect with us →
          </a>
        </div>
        <div className="fcols">
          <div className="bd">
            <b>
              emergex<i>.</i>
            </b>
            <p>
              The execution engine behind ads, content and the systems that make them convert. Guwahati,
              Assam — serving pan-India.
            </p>
          </div>
          <div>
            <em>Company</em>
            {footerLinks.company.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <em>Services</em>
            {footerLinks.services.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <em>Contact</em>
            {footerLinks.contact.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="fb">
          <span>© 2026 EmergeX Media. All rights reserved.</span>
          <span>Terms &amp; Conditions · Privacy Policy</span>
        </div>
      </div>
    </footer>
  )
}
