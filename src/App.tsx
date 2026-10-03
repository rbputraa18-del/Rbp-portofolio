import { Navbar } from './components/navigation/Navbar'
import { useDictionary } from './lib/language'
import { Home } from './pages/Home'

export function App() {
  const t = useDictionary()

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        {t.a11y.skipLink}
      </a>
      <Navbar />
      <Home />
    </div>
  )
}
