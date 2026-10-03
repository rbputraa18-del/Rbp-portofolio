import { PROJECTS } from '../../data/projects'
import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './CurrentlyBuilding.css'

/**
 * Currently Building — the projects with confirmed in-development status
 * (owner-approved framing). Data-driven from data/projects.ts; only
 * documented copy is reused — no metrics, claims, or details invented.
 */
export function CurrentlyBuilding() {
  const t = useDictionary()
  const inDevelopment = PROJECTS.filter((project) => project.status === 'in-development')

  return (
    <section
      id="currently-building"
      className="currently-building"
      aria-labelledby="currently-building-heading"
    >
      <div className="container">
        <SectionHeading
          id="currently-building"
          heading={t.currentlyBuilding.heading}
          subheading={t.currentlyBuilding.subheading}
        />
        <ul className="currently-building-list">
          {inDevelopment.map((project) => {
            const copy = t.projects[project.id]
            return (
              <li key={project.id} className="currently-building-item">
                <div className="currently-building-header">
                  <h3 className="currently-building-title type-display">{copy.title}</h3>
                  <span className="currently-building-status">{t.status[project.status]}</span>
                </div>
                <div className="currently-building-body">
                  <p className="currently-building-type">{copy.type}</p>
                  <p className="currently-building-description">{copy.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
