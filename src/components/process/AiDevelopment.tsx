import { useDictionary } from '../../lib/language'
import { SectionHeading } from '../ui/SectionHeading'
import './AiDevelopment.css'

/**
 * AI Development — positioning statement (PROJECT_BRIEF.md — AI Positioning).
 */
export function AiDevelopment() {
  const t = useDictionary()

  return (
    <section id="ai-development" className="ai-development" aria-labelledby="ai-development-heading">
      <div className="container">
        <div className="ai-development-inner">
          <SectionHeading
            id="ai-development"
            heading={t.aiDevelopment.heading}
            subheading={t.aiDevelopment.body}
          />
        </div>
      </div>
    </section>
  )
}
