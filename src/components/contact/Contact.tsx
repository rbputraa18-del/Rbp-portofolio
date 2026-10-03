import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './Contact.css'

/**
 * Contact — "Have a problem worth solving?" (CONTENT.md — Contact).
 * Only owner-confirmed channels are shown (Email + WhatsApp);
 * labels and targets live in the content dictionaries.
 */
export function Contact() {
  const t = useDictionary()
  const { email, whatsapp } = t.contact.channels

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-inner">
          <SectionHeading
            id="contact"
            heading={t.contact.heading}
            subheading={t.contact.subheading}
          />
          <div className="contact-links">
            <a className="contact-link contact-link-primary" href={email.href}>
              {email.label}
              <span className="contact-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="contact-link"
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
            >
              {whatsapp.label}
              <span className="contact-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
