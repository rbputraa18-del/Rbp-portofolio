import { PROJECTS } from '../../data/projects'
import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectPreview } from './ProjectPreview'
import './SelectedWork.css'

/**
 * Selected Work — editorial showcase of all five projects
 * (PROJECT_BRIEF.md — Project Presentation). Data-driven from
 * data/projects.ts + the active dictionary; RE17 (first entry) receives
 * the strongest treatment.
 */
export function SelectedWork() {
  const t = useDictionary()

  return (
    <section id="work" className="selected-work" aria-labelledby="work-heading">
      <div className="container">
        <SectionHeading
          id="work"
          heading={t.selectedWork.heading}
          subheading={t.selectedWork.subheading}
        />
        <div className="selected-work-list">
          {PROJECTS.map((project, index) => (
            <ProjectPreview
              key={project.id}
              project={project}
              copy={t.projects[project.id]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
