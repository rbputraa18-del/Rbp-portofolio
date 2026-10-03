import { useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/navigation/Navbar'
import { useDictionary } from './lib/language'
import { Home } from './pages/Home'

export function App() {
  const t = useDictionary()
  // Owned here so the page behind an open mobile menu can be made inert.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div id="top">
      <a className="skip-link" href="#main" inert={menuOpen}>
        {t.a11y.skipLink}
      </a>
      <Navbar menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      {/* Inert background while the mobile menu is open: pointer, keyboard and
          screen-reader access cannot reach the page behind the menu (a11y). */}
      <div inert={menuOpen}>
        <Home />
        <Footer />
      </div>
    </div>
  )
}
