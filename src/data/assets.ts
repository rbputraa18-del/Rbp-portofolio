import heroPortrait from '../assets/images/hero-portrait.webp'
import personalOsHome from '../assets/images/projects/personal-os/01-home-desktop-1440x900.webp'
import personalOsLibrary from '../assets/images/projects/personal-os/04-library-bookshelf-desktop-1440x900.webp'
import personalOsReaderLight from '../assets/images/projects/personal-os/05-reader-sample-chapter-desktop-1440x900.webp'
import personalOsReaderDark from '../assets/images/projects/personal-os/06-reader-dark-reading-desktop-1440x900.webp'
import kodingidHomepage from '../assets/images/projects/kodingid/homepage-desktop-1440x900.webp'
import kodingidCssLesson from '../assets/images/projects/kodingid/css-lesson-desktop-1440x900.webp'
import kodingidJsLesson from '../assets/images/projects/kodingid/js-lesson-desktop-1440x900.webp'
import kodingidLatihan from '../assets/images/projects/kodingid/latihan-desktop-1440x900.webp'
import kodingidQuizWrong from '../assets/images/projects/kodingid/quiz-wrong-desktop-1440x900.webp'
import kodingidQuizCorrect from '../assets/images/projects/kodingid/quiz-correct-desktop-1440x900.webp'
import kodingidProyek from '../assets/images/projects/kodingid/proyek-desktop-1440x900.webp'
import mawDashboard from '../assets/images/projects/maw-inventory/dashboard-desktop-1440x900.webp'
import mawProducts from '../assets/images/projects/maw-inventory/products-desktop-1440x900.webp'
import mawStockHistory from '../assets/images/projects/maw-inventory/stock-history-desktop-1440x900.webp'
import mawSalesReport from '../assets/images/projects/maw-inventory/sales-report-desktop-1440x900.webp'
import mawTransactions from '../assets/images/projects/maw-inventory/transactions-desktop-1440x900.webp'
import umkmKopiTanah from '../assets/images/projects/web-umkm/kopi-tanah-desktop-1440x900.webp'
import umkmBarber from '../assets/images/projects/web-umkm/blade-barber-desktop-1440x900.webp'
import umkmMbokAni from '../assets/images/projects/web-umkm/dapur-mbok-ani-desktop-1440x900.webp'
import umkmKala from '../assets/images/projects/web-umkm/kala-coffee-desktop-1440x900.webp'
import umkmUndanganSage from '../assets/images/projects/web-umkm/undangan-sage-mobile-390x844.webp'
import umkmUndanganGold from '../assets/images/projects/web-umkm/undangan-gold-mobile-390x844.webp'
import re17Dashboard from '../assets/images/projects/re17-control/operations-dashboard-desktop-1440x900.jpg'

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

/**
 * KodingID case-study screenshots — genuine captures of the live app
 * (quiz feedback states driven through the real quiz flow), WebP-optimized
 * into src/assets/images/projects/kodingid/. Same wiring convention as
 * PERSONAL_OS_SCREENSHOTS.
 */
export const KODINGID_SCREENSHOTS = {
  homepage: { src: kodingidHomepage, width: 1440, height: 900 },
  cssLesson: { src: kodingidCssLesson, width: 1440, height: 900 },
  jsLesson: { src: kodingidJsLesson, width: 1440, height: 900 },
  latihan: { src: kodingidLatihan, width: 1440, height: 900 },
  quizWrong: { src: kodingidQuizWrong, width: 1440, height: 900 },
  quizCorrect: { src: kodingidQuizCorrect, width: 1440, height: 900 },
  proyek: { src: kodingidProyek, width: 1440, height: 900 },
} as const

/**
 * Maw Inventory case-study screenshots — genuine captures of the running
 * Electron app against a temp database seeded with fictional demo data
 * (no real store information). Same wiring convention as the other
 * case-study screenshot sets.
 */
export const MAW_INVENTORY_SCREENSHOTS = {
  dashboard: { src: mawDashboard, width: 1440, height: 900 },
  products: { src: mawProducts, width: 1440, height: 900 },
  stockHistory: { src: mawStockHistory, width: 1440, height: 900 },
  salesReport: { src: mawSalesReport, width: 1440, height: 900 },
  transactions: { src: mawTransactions, width: 1440, height: 900 },
} as const

/**
 * Web UMKM case-study screenshots — genuine captures of the example
 * business sites in PROJEK 1. All content in those sites is fictional
 * demo copy with dummy contact details.
 */
export const WEB_UMKM_SCREENSHOTS = {
  kopiTanah: { src: umkmKopiTanah, width: 1440, height: 900 },
  barber: { src: umkmBarber, width: 1440, height: 900 },
  mbokAni: { src: umkmMbokAni, width: 1440, height: 900 },
  kala: { src: umkmKala, width: 1440, height: 900 },
  undanganSage: { src: umkmUndanganSage, width: 390, height: 844 },
  undanganGold: { src: umkmUndanganGold, width: 390, height: 844 },
} as const

/**
 * RE17 Control preview — the owner-approved operations-dashboard capture
 * from the RE17 V2 prototype materials, cropped to the site's 16:10
 * preview convention (source: 1213x1296 full-page capture, top band).
 * RE17 remains a selective-visibility project; the capture shows the
 * dashboard layout only.
 */
export const RE17_SCREENSHOTS = {
  dashboard: { src: re17Dashboard, width: 1440, height: 900 },
} as const
