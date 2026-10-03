import './SectionHeading.css'

interface SectionHeadingProps {
  /** Section id — the heading itself receives `${id}-heading`. */
  id: string
  heading: string
  subheading?: string
}

/**
 * Shared section heading pattern: display heading + optional subheading.
 * Used by every homepage section (ARCHITECTURE.md — Components).
 */
export function SectionHeading({ id, heading, subheading }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={`${id}-heading`} className="type-display">
        {heading}
      </h2>
      {subheading ? <p className="section-heading-subheading text-secondary">{subheading}</p> : null}
    </div>
  )
}
