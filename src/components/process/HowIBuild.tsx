import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './HowIBuild.css'

/**
 * How I Build — the four-step process (CONTENT.md — How I Build).
 * Steps are a real ordered list for assistive tech.
 */
export function HowIBuild() {
  const t = useDictionary()

  return (
    <section id="process" className="how-i-build" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading id="process" heading={t.howIBuild.heading} />
        <ol className="how-i-build-steps">
          {t.howIBuild.steps.map((step, index) => (
            <li key={step} className="how-i-build-step">
              <span className="how-i-build-step-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="how-i-build-step-label">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
