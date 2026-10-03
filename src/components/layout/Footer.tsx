import { useDictionary } from '../../lib/language'
import './Footer.css'

/**
 * Footer — minimal, per the owner-approved approach:
 * brand (back to top), section links, copyright. No unconfirmed channels.
 */
export function Footer() {
  const t = useDictionary()

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="footer-brand" href="#top">
            {t.meta.siteName}
          </a>
          <nav className="footer-nav" aria-label={t.a11y.footerNav}>
            {links.map((link) => (
              <a key={link.href} className="footer-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="footer-copyright">{t.footer.copyright}</p>
      </div>
    </footer>
  )
}
