import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './Philosophy.css'

/**
 * Philosophy / introduction (CONTENT.md — Philosophy).
 * A short editorial statement, kept narrow for reading comfort.
 */
export function Philosophy() {
  const t = useDictionary()

  return (
    <section id="philosophy" className="philosophy" aria-labelledby="philosophy-heading">
      <div className="container">
        <div className="philosophy-inner">
          <SectionHeading id="philosophy" heading={t.philosophy.heading} subheading={t.philosophy.body} />
        </div>
      </div>
    </section>
  )
}
