import { useEffect, useRef } from 'react'
import { useDictionary } from '../../lib/language'
import './MobileMenu.css'

interface MobileMenuLink {
  href: string
  label: string
}

interface MobileMenuProps {
  links: MobileMenuLink[]
  onNavigate: () => void
}

/**
 * Compact dropdown panel for small screens. Mounted only while open;
 * first link receives focus, Escape / outside click / navigation close it
 * (handled by the Navbar).
 */
export function MobileMenu({ links, onNavigate }: MobileMenuProps) {
  const t = useDictionary()
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    firstLinkRef.current?.focus()
  }, [])

  return (
    <div id="mobile-menu" className="mobile-menu">
      <nav aria-label={t.a11y.primaryNav} className="container">
        <ul className="mobile-menu-list">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                className="mobile-menu-link"
                href={link.href}
                onClick={onNavigate}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
