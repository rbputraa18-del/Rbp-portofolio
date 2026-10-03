import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './About.css'

/**
 * About — "I like solving problems with code." (CONTENT.md — About).
 * Narrow editorial statement: a lead paragraph plus a supporting one.
 */
export function About() {
  const t = useDictionary()

  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading id="about" heading={t.about.heading} />
        <div className="about-inner">
          <p className="about-lead">{t.about.paragraphs[0]}</p>
          <p className="about-supporting text-secondary">{t.about.paragraphs[1]}</p>
        </div>
      </div>
    </section>
  )
}
