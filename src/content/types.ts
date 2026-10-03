import type { ProjectId, ProjectStatus } from '../data/projects'

/**
 * Copy for one project, following the case-study principle
 * Problem → Thinking → Solution → Interface → Role → Technology → Status/Result.
 * Missing evidence is `null` — never fabricated (CONTENT.md — Content Rules).
 */
export interface ProjectCopy {
  title: string
  type: string
  description: string
  problem: string | null
  thinking: string | null
  solution: string | null
  result: string | null
}

/**
 * The complete translatable surface of the site.
 * The EN and ID dictionaries must have identical shapes — TypeScript enforces
 * parity because both files declare `satisfies Dictionary`.
 */
export interface Dictionary {
  meta: { siteName: string; siteTitle: string }
  a11y: {
    skipLink: string
    openMenu: string
    closeMenu: string
    primaryNav: string
    language: string
    footerNav: string
  }
  nav: { work: string; about: string; contact: string }
  hero: {
    eyebrow: string
    headline: [string, string]
    portraitAlt: string
    role: string
    supporting: string
    cta: string
  }
  philosophy: { heading: string; body: string }
  selectedWork: { heading: string; subheading: string; visualPending: string }
  howIBuild: { heading: string; steps: [string, string, string, string] }
  aiDevelopment: { heading: string; body: string }
  about: { heading: string; paragraphs: [string, string] }
  currentlyBuilding: { heading: string; subheading: string }
  contact: {
    heading: string
    subheading: string
    /** Only channels confirmed by the owner — never invented (CONTENT.md). */
    channels: {
      email: { label: string; href: string }
      whatsapp: { label: string; href: string }
    }
  }
  footer: { copyright: string }
  status: Record<ProjectStatus, string>
  projects: Record<ProjectId, ProjectCopy>
}
