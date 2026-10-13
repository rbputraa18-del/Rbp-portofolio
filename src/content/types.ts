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
 * One screenshot shown inside a case study. Real evidence only — never
 * fabricated (PROJECT_BRIEF.md — Content Integrity). `src`, `width` and
 * `height` are wired once in src/data/assets.ts; `alt` and `caption` are
 * localized copy and live in the dictionaries.
 */
export interface CaseStudyImage {
  src: string
  /** Intrinsic dimensions — reserved for layout before the image loads. */
  width: number
  height: number
  /** Meaningful alt text per language (DESIGN_SYSTEM.md — Imagery). */
  alt: string
  /** Optional short figure caption. */
  caption?: string
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
  /**
   * Hero visual — a real screenshot when one exists; otherwise the
   * typographic diagram (e.g. the product's learning path).
   */
  visual: { caption: string; path?: string[]; image?: CaseStudyImage }
}

export interface CaseStudySection {
  id: string
  heading: string
  /** Optional status tag rendered beside the heading (e.g. "IN DEVELOPMENT"). */
  tag?: string
  /** Optional lead statement rendered in display type. */
  lead?: string
  paragraphs: string[]
  /** Optional supporting bullet list. */
  list?: string[]
  /** Optional step flow (e.g. the learning loop); `term` is the product's own name for the step. */
  steps?: { label: string; term?: string; description: string }[]
  /** Optional label + description capability rows. */
  features?: { label: string; description: string }[]
  /** Optional labeled groups of items (e.g. project tiers). */
  groups?: { label: string; items: { text: string; note?: string }[] }[]
  /** Optional screenshot evidence; the first image is rendered full-width. */
  images?: CaseStudyImage[]
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
