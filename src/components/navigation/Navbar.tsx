import { useEffect, useRef, useState } from 'react'
import { BREAKPOINTS } from '../../lib/breakpoints'
import { useDictionary } from '../../lib/language'
import { LanguageSwitch } from './LanguageSwitch'
import { MobileMenu } from './MobileMenu'
import './Navbar.css'

interface NavLink {
  href: string
  label: string
}

/**
 * Sticky, minimal site navigation (DESIGN_SYSTEM.md — Navigation).
 * Nav targets (#work/#about/#contact) are in-page anchors; the sections
 * themselves arrive in Phases 3–4.
 */
export function Navbar() {
  const t = useDictionary()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const links: NavLink[] = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on outside pointer, Escape, or desktop resize.
  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.md}px)`)
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [menuOpen])

  return (
    <header ref={headerRef} className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a className="navbar-brand" href="#top">
          {t.meta.siteName}
        </a>
        <nav className="navbar-links" aria-label={t.a11y.primaryNav}>
          {links.map((link) => (
            <a key={link.href} className="navbar-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar-actions">
          <LanguageSwitch />
          <button
            ref={toggleRef}
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      {menuOpen && <MobileMenu links={links} onNavigate={() => setMenuOpen(false)} />}
    </header>
  )
}
