/**
 * Project registry — structured, language-neutral metadata (ARCHITECTURE.md — Content Model).
 * Localized copy lives in src/content/{en,id}/site.ts under `projects`.
 */
import {
  KODINGID_SCREENSHOTS,
  MAW_INVENTORY_SCREENSHOTS,
  PERSONAL_OS_SCREENSHOTS,
  RE17_SCREENSHOTS,
  WEB_UMKM_SCREENSHOTS,
} from './assets'

export const PROJECT_STATUSES = ['in-development', 'early'] as const
export type ProjectStatus = (typeof PROJECT_STATUSES)[number]

/** All project ids — declared before ProjectMeta so `id` can be typed as the union. */
export const PROJECT_IDS = [
  're17-control',
  'personal-os',
  'kodingid',
  'maw-inventory',
  'web-umkm',
] as const
export type ProjectId = (typeof PROJECT_IDS)[number]

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
  id: ProjectId
  status: ProjectStatus
  visibility: ProjectVisibility
  caseStudyRoute: string
  images: ProjectImages
}

/*
 * Previews are genuine case-study screenshots (PROJECT_BRIEF.md — Content
 * Integrity: real evidence only). RE17's preview is the owner-approved
 * operations-dashboard capture from the RE17 V2 prototype materials;
 * the project itself stays selective-visibility (no confidential store
 * information is exposed).
 *
 * Convention for assets:
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
    images: {
      preview: {
        src: RE17_SCREENSHOTS.dashboard.src,
        alt: {
          en: 'RE17 Control — the operations dashboard with daily store monitoring and sales visibility',
          id: 'RE17 Control — dashboard operasional dengan pemantauan harian toko dan visibilitas penjualan',
        },
      },
      screenshots: [],
    },
  },
  {
    id: 'personal-os',
    status: 'in-development',
    visibility: 'public',
    caseStudyRoute: '/work/personal-os',
    images: {
      preview: {
        src: PERSONAL_OS_SCREENSHOTS.home.src,
        alt: {
          en: 'Personal OS — the warm Home workspace with today’s focus and sticky notes',
          id: 'Personal OS — ruang kerja Home yang hangat dengan fokus hari ini dan catatan tempel',
        },
      },
      screenshots: [],
    },
  },
  {
    id: 'kodingid',
    status: 'early',
    visibility: 'public',
    caseStudyRoute: '/work/kodingid',
    images: {
      preview: {
        src: KODINGID_SCREENSHOTS.homepage.src,
        alt: {
          en: 'KodingID — the Indonesian learning platform homepage with its hero code window',
          id: 'KodingID — beranda platform belajar berbahasa Indonesia dengan jendela kode di hero',
        },
      },
      screenshots: [],
    },
  },
  {
    id: 'maw-inventory',
    status: 'in-development',
    visibility: 'public',
    caseStudyRoute: '/work/maw-inventory',
    images: {
      preview: {
        src: MAW_INVENTORY_SCREENSHOTS.dashboard.src,
        alt: {
          en: 'Maw Inventory — the desktop dashboard with stock and sales KPIs and charts',
          id: 'Maw Inventory — dashboard desktop dengan KPI stok dan penjualan beserta grafik',
        },
      },
      screenshots: [],
    },
  },
  {
    id: 'web-umkm',
    status: 'early',
    visibility: 'public',
    caseStudyRoute: '/work/web-umkm',
    images: {
      preview: {
        src: WEB_UMKM_SCREENSHOTS.kopiTanah.src,
        alt: {
          en: 'Web UMKM — the Kopi Tanah coffee-shop example website',
          id: 'Web UMKM — contoh website kedai kopi Kopi Tanah',
        },
      },
      screenshots: [],
    },
  },
] as const satisfies readonly ProjectMeta[]

export function isProjectId(value: string): value is ProjectId {
  return PROJECTS.some((project) => project.id === value)
}

export function getProjectMeta(id: ProjectId): ProjectMeta {
  const meta = PROJECTS.find((project) => project.id === id)
  if (!meta) throw new Error(`Unknown project id: ${id}`)
  return meta
}
