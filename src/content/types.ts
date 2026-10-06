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
 * One case-study page (CONTENT.md — Case Study Template).
 * The page component only renders; all copy lives in the dictionaries so
 * every case study is bilingual and centrally editable.
 */
export interface CaseStudyHero {
  eyebrow: string
  title: string
  positioning: string
  /** Verified technology only (CONTENT.md — Content Rules). */
  stack: string
}

export interface CaseStudySection {
  id: string
  heading: string
  paragraphs: string[]
  /** Optional supporting bullet list. */
  list?: string[]
  /** Optional step flow (e.g. the learning loop). */
  steps?: { label: string; description: string }[]
}

export interface CaseStudyCopy {
  hero: CaseStudyHero
  sections: CaseStudySection[]
  next: { heading: string; items: string[] }
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
  caseStudy: {
    readLabel: string
    backToWork: string
    meta: { type: string; status: string; stack: string }
  }
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
  /**
   * Case-study pages. The intersection keeps `kodingid` required in both
   * languages while allowing other projects to be added in later phases.
   */
  caseStudies: { kodingid: CaseStudyCopy } & Partial<Record<ProjectId, CaseStudyCopy>>
}
