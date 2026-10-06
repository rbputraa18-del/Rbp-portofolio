import { useEffect, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/navigation/Navbar'
import { isProjectId, type ProjectId } from './data/projects'
import { useDictionary } from './lib/language'
import { useHashRoute } from './lib/router'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'

const CASE_STUDY_PREFIX = '/work/'

/** Resolves a hash route to a case-study page, null for the home page. */
function resolveCaseStudy(route: string | null): ProjectId | null {
  if (!route?.startsWith(CASE_STUDY_PREFIX)) return null
  const id = route.slice(CASE_STUDY_PREFIX.length)
  return isProjectId(id) ? id : null
}

export function App() {
  const t = useDictionary()
  // Owned here so the page behind an open mobile menu can be made inert.
  const [menuOpen, setMenuOpen] = useState(false)
  const route = useHashRoute()

  // Only routes whose case-study content exists are rendered; unknown ids
  // fall back to the home page (a dedicated 404 can arrive with later phases).
  const requested = resolveCaseStudy(route)
  const caseStudyId = requested && t.caseStudies[requested] ? requested : null

  // Case-study pages open at the top. Plain anchors (#work/#about/#contact)
  // scroll to their section — including when arriving back on the home page
  // from a case study, where the target only exists after this render.
  useEffect(() => {
    if (route) {
      window.scrollTo(0, 0)
      return
    }
    const hash = window.location.hash
    if (!hash || hash.startsWith('#/')) return
    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [route])

  return (
    <div id="top">
      <a className="skip-link" href="#main" inert={menuOpen}>
        {t.a11y.skipLink}
      </a>
      <Navbar menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
      {/* Inert background while the mobile menu is open: pointer, keyboard and
          screen-reader access cannot reach the page behind the menu (a11y). */}
      <div inert={menuOpen}>
        {caseStudyId ? <CaseStudy projectId={caseStudyId} /> : <Home />}
        <Footer />
      </div>
    </div>
  )
}
