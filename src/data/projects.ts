/**
 * Project registry — structured, language-neutral metadata (ARCHITECTURE.md — Content Model).
 * Localized copy lives in src/content/{en,id}/site.ts under `projects`.
 */

export const PROJECT_STATUSES = ['in-development', 'early'] as const
export type ProjectStatus = (typeof PROJECT_STATUSES)[number]

/** 'public' = shown in full · 'selective' = shown but restricted (RE17 — never expose confidential store information). */
export type ProjectVisibility = 'public' | 'selective'

export interface ProjectImage {
  src: string
  /** Meaningful alt text per language (DESIGN_SYSTEM.md — Imagery). */
  alt: { en: string; id: string }
}

export interface ProjectImages {
  preview: ProjectImage | null
  screenshots: readonly ProjectImage[]
}

export interface ProjectMeta {
  id: string
  status: ProjectStatus
  visibility: ProjectVisibility
  caseStudyRoute: string
  images: ProjectImages
}

/*
 * All images are currently empty on purpose: screenshots are evidence and must
 * be real, supplied assets — never generated (PROJECT_BRIEF.md — Content Integrity).
 *
 * Convention for future real assets:
 *   src/assets/images/projects/<id>/…
 *
 * The hero portrait stays in reference/hero/ until the owner picks the final
 * image after visual review; the optimized copy will then live in
 * src/assets/images/.
 */
export const PROJECTS = [
  {
    id: 're17-control',
    status: 'in-development',
    visibility: 'selective',
    caseStudyRoute: '/work/re17-control',
    images: { preview: null, screenshots: [] },
  },
  {
    id: 'personal-os',
    status: 'in-development',
    visibility: 'public',
    caseStudyRoute: '/work/personal-os',
    images: { preview: null, screenshots: [] },
  },
  {
    id: 'kodingid',
    status: 'early',
    visibility: 'public',
    caseStudyRoute: '/work/kodingid',
    images: { preview: null, screenshots: [] },
  },
  {
    id: 'maw-inventory',
    status: 'in-development',
    visibility: 'public',
    caseStudyRoute: '/work/maw-inventory',
    images: { preview: null, screenshots: [] },
  },
  {
    id: 'web-umkm',
    status: 'early',
    visibility: 'public',
    caseStudyRoute: '/work/web-umkm',
    images: { preview: null, screenshots: [] },
  },
] as const satisfies readonly ProjectMeta[]

export type ProjectId = (typeof PROJECTS)[number]['id']

export function getProjectMeta(id: ProjectId): ProjectMeta {
  const meta = PROJECTS.find((project) => project.id === id)
  if (!meta) throw new Error(`Unknown project id: ${id}`)
  return meta
}
