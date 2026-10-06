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
 * project; the content decides which sections exist. The hero visual is a
 * typographic diagram, not a screenshot — real visuals are evidence and are
 * never fabricated (PROJECT_BRIEF.md — Content Integrity).
 */
export function CaseStudy({ projectId }: CaseStudyProps) {
  const t = useDictionary()
  const project = getProjectMeta(projectId)
  const copy = t.projects[projectId]
  const caseStudy = t.caseStudies[projectId]

  if (!caseStudy) return null

  const nextSection: CaseStudySection = {
    id: 'case-study-next',
    heading: caseStudy.next.heading,
    paragraphs: [],
    list: caseStudy.next.items,
  }

  return (
    <main id="main" className="case-study">
      <div className="container">
        <a className="case-study-back" href="#work">
          ← {t.caseStudy.backToWork}
        </a>

        <header className="case-study-hero">
          <div className="case-study-hero-content">
            <p className="case-study-eyebrow type-eyebrow">
              <span className="case-study-eyebrow-rule" aria-hidden="true" />
              {caseStudy.hero.eyebrow}
            </p>
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
          </div>

          {/* Typographic diagram — the product's learning path (verified
              against the KodingID source; not a fabricated screenshot). */}
          <div className="case-study-hero-visual" aria-label={caseStudy.hero.visual.caption}>
            <span className="case-study-hero-visual-caption">
              {caseStudy.hero.visual.caption}
            </span>
            <ol className="case-study-path">
              {caseStudy.hero.visual.path.map((step, index) => (
                <li key={step} className="case-study-path-step">
                  <span className="case-study-path-name">{step}</span>
                  {index < caseStudy.hero.visual.path.length - 1 ? (
                    <span className="case-study-path-arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </header>

        {caseStudy.sections.map((section, index) => (
          <CaseStudySectionView key={section.id} section={section} index={index} />
        ))}

        <CaseStudySectionView section={nextSection} index={caseStudy.sections.length} />

        <div className="case-study-footer-nav">
          <a className="case-study-back" href="#work">
            ← {t.caseStudy.backToWork}
          </a>
        </div>
      </div>
    </main>
  )
}

function CaseStudySectionView({ section, index }: { section: CaseStudySection; index: number }) {
  return (
    <section
      className="case-study-section"
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="case-study-section-header">
        <span className="case-study-section-number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 id={`${section.id}-heading`} className="case-study-section-heading type-display">
          {section.heading}
        </h2>
        {section.tag ? <span className="case-study-tag">{section.tag}</span> : null}
      </div>
      <div className="case-study-section-body">
        {section.lead ? <p className="case-study-lead">{section.lead}</p> : null}
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
                  {step.term ? <span className="case-study-step-term">{step.term}</span> : null}
                  <p className="case-study-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
        {section.features ? (
          <ul className="case-study-features">
            {section.features.map((feature) => (
              <li key={feature.label} className="case-study-feature">
                <span className="case-study-feature-label">{feature.label}</span>
                <p className="case-study-feature-description">{feature.description}</p>
              </li>
            ))}
          </ul>
        ) : null}
        {section.groups ? (
          <div className="case-study-groups">
            {section.groups.map((group) => (
              <div key={group.label} className="case-study-group">
                <h3 className="case-study-group-label">{group.label}</h3>
                <ul className="case-study-group-items">
                  {group.items.map((item) => (
                    <li key={item.text} className="case-study-group-item">
                      <span>{item.text}</span>
                      {item.note ? (
                        <span className="case-study-group-note">{item.note}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
