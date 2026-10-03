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

interface NavbarProps {
  /** Controlled from App so the page behind the open menu can be made inert. */
  menuOpen: boolean
  onMenuOpenChange: (open: boolean) => void
}

/**
 * Sticky, minimal site navigation (DESIGN_SYSTEM.md — Navigation).
 * Nav targets (#work/#about/#contact) are in-page anchors; the sections
 * themselves arrive in Phases 3–4.
 */
export function Navbar({ menuOpen, onMenuOpenChange }: NavbarProps) {
  const t = useDictionary()
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
  // While open, keep keyboard focus cycling inside the header (focus trap):
  // the page behind the menu is inert, so the header is the whole
  // interactive region.
  useEffect(() => {
    if (!menuOpen) return
    const onPointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        onMenuOpenChange(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onMenuOpenChange(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !headerRef.current) return
      const focusables = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      const outside = !headerRef.current.contains(active)
      if (event.shiftKey && (active === first || outside)) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || outside)) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen, onMenuOpenChange])

  useEffect(() => {
    if (!menuOpen) return
    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.md}px)`)
    const onChange = () => {
      if (mq.matches) onMenuOpenChange(false)
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
            onClick={() => onMenuOpenChange(!menuOpen)}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
      {menuOpen && <MobileMenu links={links} onNavigate={() => onMenuOpenChange(false)} />}
    </header>
  )
}
