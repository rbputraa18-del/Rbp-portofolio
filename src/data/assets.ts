import heroPortrait from '../assets/images/hero-portrait.webp'
import personalOsHome from '../assets/images/projects/personal-os/01-home-desktop-1440x900.webp'
import personalOsLibrary from '../assets/images/projects/personal-os/04-library-bookshelf-desktop-1440x900.webp'
import personalOsReaderLight from '../assets/images/projects/personal-os/05-reader-sample-chapter-desktop-1440x900.webp'
import personalOsReaderDark from '../assets/images/projects/personal-os/06-reader-dark-reading-desktop-1440x900.webp'

/**
 * Static asset wiring.
 *
 * Final hero portrait (owner-selected): full-body portrait on a gray
 * background, subject positioned right with negative space around.
 * The web-optimized copy lives in src/assets/images/hero-portrait.webp;
 * the original stays untouched in reference/hero/.
 */
export const HERO_PORTRAIT_SRC: string | null = heroPortrait

/**
 * Personal OS case-study screenshots — genuine captures from the source
 * project's workflow/evidence/final folder, WebP-optimized into
 * src/assets/images/projects/personal-os/ (ARCHITECTURE.md — Media).
 * `src`/`width`/`height` are asset facts; localized alt text and captions
 * live in the content dictionaries (src/content/types.ts — CaseStudyImage).
 */
export const PERSONAL_OS_SCREENSHOTS = {
  home: { src: personalOsHome, width: 1440, height: 900 },
  library: { src: personalOsLibrary, width: 1440, height: 900 },
  readerLight: { src: personalOsReaderLight, width: 1440, height: 900 },
  readerDark: { src: personalOsReaderDark, width: 1440, height: 900 },
} as const
