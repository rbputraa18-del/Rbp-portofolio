import type { Dictionary } from '../types'

/**
 * Konten situs bahasa Indonesia.
 * DRAFT — terjemahan dari docs/CONTENT.md. Menunggu peninjauan pemilik proyek.
 * Bidang tanpa bukti terdokumentasi dibiarkan null.
 */
export const id = {
  meta: {
    siteName: 'REKHA',
    siteTitle: 'Rekha Bahama Putra — Portofolio',
  },
  a11y: {
    skipLink: 'Langsung ke konten',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    primaryNav: 'Utama',
    language: 'Bahasa',
  },
  nav: {
    work: 'KARYA',
    about: 'TENTANG',
    contact: 'KONTAK',
  },
  hero: {
    eyebrow: 'HALO, SAYA REKHA',
    headline: ['SAYA MEMBANGUN PRODUK DIGITAL', 'DARI MASALAH NYATA.'],
    portraitAlt: 'Potret Rekha Bahama Putra',
    role: 'Web Developer · Product Builder · Pengembangan Berbantuan AI',
    supporting: 'Mengubah masalah sehari-hari menjadi alat digital yang praktis.',
    cta: 'Lihat Karya Saya',
  },
  philosophy: {
    heading: 'Saya tidak hanya membangun website. Saya membangun sesuatu yang membuat masalah lebih mudah.',
    body: 'Dari operasional toko dan platform belajar hingga ruang kerja pribadi dan website bisnis.',
  },
  selectedWork: {
    heading: 'KARYA PILIHAN',
    subheading: 'Hal-hal yang telah saya bangun selama ini.',
  },
  howIBuild: {
    heading: 'DARI MASALAH MENJADI PRODUK.',
    steps: ['Pahami', 'Rancang', 'Bangun', 'Iterasi'],
  },
  aiDevelopment: {
    heading: 'DIBANGUN DENGAN AI. DIARAHKAN OLEH SAYA.',
    body: 'Saya menggunakan AI sebagai asisten pengembangan untuk mengeksplorasi ide, mempercepat implementasi, men-debug masalah, dan beriterasi lebih cepat — sambil menjaga arah produk dan keputusan sistem tetap dalam kendali saya.',
  },
  about: {
    heading: 'SAYA SUKA MEMECAHKAN MASALAH DENGAN KODE.',
    paragraphs: [
      'Saya seorang developer yang senang mengubah masalah dunia nyata menjadi alat digital yang praktis.',
      'Saya suka memahami cara kerja sebuah proses, menemukan apa yang membuatnya sulit, dan membangun sesuatu yang membuatnya lebih mudah.',
    ],
  },
  contact: {
    heading: 'PUNYA MASALAH YANG LAYAK DIPECAHKAN?',
    subheading: 'Mari kita ubah menjadi sesuatu yang berguna.',
  },
  status: {
    'in-development': 'Dalam pengembangan',
    early: 'Tahap awal / sedang berjalan',
  },
  projects: {
    're17-control': {
      title: 'RE17 Control',
      type: 'Operasional Toko & Ruang Kerja Tim',
      description:
        'Ruang kerja digital yang dirancang untuk membantu tim toko memantau dan mengelola operasional harian dari satu tempat.',
      problem:
        'Informasi dan instruksi toko tersebar di berbagai kanal, sehingga lebih sulit memantau target, mengidentifikasi prioritas, dan mengatur pekerjaan harian.',
      thinking: null,
      solution:
        'Ruang kerja operasional terpusat untuk pemantauan, tugas harian, jadwal, visibilitas penjualan/target, dukungan stock-opname, pembelajaran, dan aktivitas toko lainnya.',
      result: null,
    },
    'personal-os': {
      title: 'Personal OS',
      type: 'Ruang Kerja Kehidupan Digital',
      description:
        'Ruang kerja pribadi yang dirancang untuk menyatukan berpikir, belajar, merencanakan, dan aktivitas sehari-hari dalam satu tempat.',
      problem: null,
      thinking: 'Ruang kerja digital pribadi yang tenang — bukan dashboard yang penuh widget.',
      solution: null,
      result: null,
    },
    kodingid: {
      title: 'KodingID',
      type: 'Platform Belajar Pemrograman',
      description:
        'Platform belajar yang menggabungkan materi pemrograman berbahasa Indonesia, latihan, kuis, dan proyek praktis.',
      problem:
        'Sebagian pembelajar merasa materi pemrograman lebih sulit diakses karena banyak materi tersedia dalam bahasa Inggris.',
      thinking: null,
      solution: 'Materi belajar berbahasa Indonesia yang dipadukan dengan latihan dan penerapan dalam proyek nyata.',
      result: null,
    },
    'maw-inventory': {
      title: 'Maw Inventory',
      type: 'Manajemen Inventaris Offline',
      description:
        'Aplikasi inventaris berorientasi offline yang dirancang untuk membantu mengelola produk dan alur kerja terkait stok.',
      problem: null,
      thinking: null,
      solution: null,
      result: null,
    },
    'web-umkm': {
      title: 'Web UMKM',
      type: 'Website Bisnis / Landing Page',
      description:
        'Website bisnis modern yang dirancang untuk menampilkan bisnis, penawarannya, dan pengalaman kontak bagi pelanggan.',
      problem: null,
      thinking: null,
      solution: null,
      result: null,
    },
  },
} satisfies Dictionary
