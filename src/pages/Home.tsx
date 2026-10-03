import { About } from '../components/about/About'
import { CurrentlyBuilding } from '../components/about/CurrentlyBuilding'
import { Contact } from '../components/contact/Contact'
import { Hero } from '../components/hero/Hero'
import { Philosophy } from '../components/philosophy/Philosophy'
import { AiDevelopment } from '../components/process/AiDevelopment'
import { HowIBuild } from '../components/process/HowIBuild'
import { SelectedWork } from '../components/work/SelectedWork'

/**
 * Homepage, ordered per PROJECT_BRIEF.md:
 * hero, philosophy, selected work, how I build, AI development,
 * about, currently building, contact.
 * The footer lives in App (outside <main>).
 */
export function Home() {
  return (
    <main id="main">
      <Hero />
      <Philosophy />
      <SelectedWork />
      <HowIBuild />
      <AiDevelopment />
      <About />
      <CurrentlyBuilding />
      <Contact />
    </main>
  )
}
