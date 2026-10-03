import type { ProjectMeta } from '../../data/projects'
import type { ProjectCopy } from '../../content/types'
import { useDictionary } from '../../lib/language'
import './ProjectPreview.css'

interface ProjectPreviewProps {
  project: ProjectMeta
  copy: ProjectCopy
  /** 0-based position in the showcase — drives numbering and layout. */
  index: number
}

/**
 * One editorial project row: number, title, type, status, description and a
 * visual slot. The visual slot currently renders a neutral placeholder —
 * real screenshots are evidence and will only be added once the owner
 * supplies them (PROJECT_BRIEF.md — Content Integrity).
 * Case-study links arrive with the case-study pages in Phase 5.
 */
export function ProjectPreview({ project, copy, index }: ProjectPreviewProps) {
  const t = useDictionary()
  const number = String(index + 1).padStart(2, '0')
  const featured = index === 0
  const flipped = index % 2 === 1

  const className = ['project-preview']
  if (featured) className.push('is-featured')
  if (flipped) className.push('is-flipped')

  return (
    <article className={className.join(' ')}>
      <div className="project-preview-text">
        <div className="project-preview-header">
          <span className="project-preview-number" aria-hidden="true">
            {number}
          </span>
          <h3 className="project-preview-title type-display">{copy.title}</h3>
        </div>
        <div className="project-preview-meta">
          <span className="project-preview-type">{copy.type}</span>
          <span className="project-preview-status">{t.status[project.status]}</span>
        </div>
        <p className="project-preview-description">{copy.description}</p>
      </div>
      <div className="project-preview-visual">
        <span className="project-preview-visual-label">{t.selectedWork.visualPending}</span>
      </div>
    </article>
  )
}
