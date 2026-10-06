import type { CaseStudySection } from '../content/types'
import { getProjectMeta, type ProjectId } from '../data/projects'
import { useDictionary } from '../lib/language'
import './CaseStudy.css'

interface CaseStudyProps {
  projectId: ProjectId
}

/**
 * Case-study page, rendered entirely from the centralized dictionaries
 * (CONTENT.md — Case Study Template). One page component serves every
 * project; the content decides which sections exist. The visual slot is a
 * neutral placeholder until real screenshots are supplied — visuals are
 * evidence and are never fabricated (PROJECT_BRIEF.md — Content Integrity).
 */
export function CaseStudy({ projectId }: CaseStudyProps) {
  const t = useDictionary()
  const project = getProjectMeta(projectId)
  const copy = t.projects[projectId]
  const caseStudy = t.caseStudies[projectId]

  if (!caseStudy) return null

  return (
    <main id="main" className="case-study">
      <div className="container">
        <a className="case-study-back" href="#work">
          ← {t.caseStudy.backToWork}
        </a>

        <header className="case-study-hero">
          <p className="case-study-eyebrow type-eyebrow">{caseStudy.hero.eyebrow}</p>
          <h1 className="case-study-title type-display">{caseStudy.hero.title}</h1>
          <p className="case-study-positioning">{caseStudy.hero.positioning}</p>
          <div className="case-study-meta">
            <div className="case-study-meta-row">
              <span className="case-study-meta-label">{t.caseStudy.meta.type}</span>
              <span className="case-study-meta-value">{copy.type}</span>
            </div>
            <div className="case-study-meta-row">
              <span className="case-study-meta-label">{t.caseStudy.meta.status}</span>
              <span className="case-study-status">{t.status[project.status]}</span>
            </div>
            <div className="case-study-meta-row">
              <span className="case-study-meta-label">{t.caseStudy.meta.stack}</span>
              <span className="case-study-meta-value">{caseStudy.hero.stack}</span>
            </div>
          </div>
        </header>

        {/* Visual slot — neutral frame until the owner supplies real screenshots. */}
        <div className="case-study-visual">
          <span className="case-study-visual-label">{t.selectedWork.visualPending}</span>
        </div>

        {caseStudy.sections.map((section) => (
          <CaseStudySectionView key={section.id} section={section} />
        ))}

        <section className="case-study-section" aria-labelledby="case-study-next-heading">
          <h2 id="case-study-next-heading" className="case-study-section-heading type-display">
            {caseStudy.next.heading}
          </h2>
          <div className="case-study-section-body">
            <ul className="case-study-list">
              {caseStudy.next.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="case-study-footer-nav">
          <a className="case-study-back" href="#work">
            ← {t.caseStudy.backToWork}
          </a>
        </div>
      </div>
    </main>
  )
}

function CaseStudySectionView({ section }: { section: CaseStudySection }) {
  return (
    <section
      className="case-study-section"
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
    >
      <h2 id={`${section.id}-heading`} className="case-study-section-heading type-display">
        {section.heading}
      </h2>
      <div className="case-study-section-body">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="case-study-paragraph">
            {paragraph}
          </p>
        ))}
        {section.steps ? (
          <ol className="case-study-steps">
            {section.steps.map((step, index) => (
              <li key={step.label} className="case-study-step">
                <span className="case-study-step-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="case-study-step-content">
                  <h3 className="case-study-step-label">{step.label}</h3>
                  <p className="case-study-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
        {section.list ? (
          <ul className="case-study-list">
            {section.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}
