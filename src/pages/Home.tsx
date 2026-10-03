import { Hero } from '../components/hero/Hero'
import { Philosophy } from '../components/philosophy/Philosophy'
import { AiDevelopment } from '../components/process/AiDevelopment'
import { HowIBuild } from '../components/process/HowIBuild'
import { SelectedWork } from '../components/work/SelectedWork'

/**
 * Homepage, ordered per PROJECT_BRIEF.md:
 * hero, philosophy, selected work, how I build, AI development.
 * About, currently building, contact and footer arrive in Phase 4.
 */
export function Home() {
  return (
    <main id="main">
      <Hero />
      <Philosophy />
      <SelectedWork />
      <HowIBuild />
      <AiDevelopment />
    </main>
  )
}
