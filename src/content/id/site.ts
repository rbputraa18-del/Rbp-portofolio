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
    footerNav: 'Navigasi footer',
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
    visualPending: 'Pratinjau visual menyusul',
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
  currentlyBuilding: {
    heading: 'SEDANG DIKERJAKAN',
    subheading: 'Project yang masih saya kembangkan, perbaiki, dan sempurnakan.',
  },
  contact: {
    heading: 'PUNYA MASALAH YANG LAYAK DIPECAHKAN?',
    subheading: 'Mari kita ubah menjadi sesuatu yang berguna.',
    channels: {
      email: {
        label: 'rb.putraa18@gmail.com',
        href: 'mailto:rb.putraa18@gmail.com',
      },
      whatsapp: {
        label: 'Chat di WhatsApp',
        href: 'https://wa.me/6281808167759',
      },
    },
  },
  footer: {
    copyright: '© 2026 Rekha Bahama Putra',
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
  caseStudy: {
    readLabel: 'Baca studi kasus →',
    backToWork: 'Kembali ke karya',
    meta: { type: 'Jenis', status: 'Status', stack: 'Teknologi' },
  },
  // Konten studi kasus diverifikasi terhadap sumber KodingID
  // (E:\Tugas\XAMPP\htdocs\koding.id) — hanya yang benar-benar ada.
  caseStudies: {
    kodingid: {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'KodingID',
        positioning:
          'Platform interaktif berbahasa Indonesia untuk belajar pengembangan web — satu jalur terhubung dari materi ke latihan, penilaian, dan proyek nyata.',
        stack: 'HTML · CSS · JavaScript · Gemini API',
        visual: {
          caption: 'Jalur belajar',
          path: ['HTML', 'CSS', 'JavaScript', 'Latihan & Quiz', 'Proyek'],
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          lead: 'Belajar coding saja sudah sulit. Mengerjakannya dalam bahasa yang belum sepenuhnya dipahami membuatnya lebih sulit lagi.',
          paragraphs: [
            'Sebagian besar materi pengembangan web yang tersedia di internet ditulis dalam bahasa Inggris. Bagi pemula Indonesia, itu menambah hambatan bahasa di atas konsepnya sendiri.',
            'Ada jarak kedua juga — memahami konsep tidak sama dengan bisa menuliskannya. Membaca tentang HTML baru terasa nyata ketika pembelajar membangun sesuatu dengannya.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          lead: 'Satu jalur terhubung: belajar, latihan, uji, bangun — dalam Bahasa Indonesia.',
          paragraphs: [
            'KodingID menyatukan materi belajar, latihan coding, penilaian, dan pembelajaran berbasis proyek dalam satu pengalaman berbahasa Indonesia.',
            'Setiap langkah mengalir ke langkah berikutnya: konsep dipelajari di tutorial, diterapkan di latihan, diuji di kuis, dan akhirnya dirangkai menjadi proyek terpandu.',
          ],
        },
        {
          id: 'learning-loop',
          heading: 'ALUR BELAJAR',
          paragraphs: [
            'Seluruh platform dibangun di sekitar satu alur — jalur yang dilalui setiap topik.',
          ],
          steps: [
            {
              label: 'BELAJAR',
              term: 'Materi',
              description:
                'Tutorial bertahap dalam Bahasa Indonesia — HTML, CSS, dan JavaScript, mulai dari yang paling dasar.',
            },
            {
              label: 'LATIHAN',
              term: 'Latihan coding',
              description:
                'Latihan coding bertingkat yang dikerjakan langsung di browser, dengan petunjuk dan umpan balik instan.',
            },
            {
              label: 'UJI',
              term: 'Quiz',
              description:
                'Kuis per topik dengan koreksi langsung dan penjelasan yang mudah dipahami untuk setiap jawaban.',
            },
            {
              label: 'BANGUN',
              term: 'Proyek',
              description:
                'Proyek terpandu yang mengubah potongan-potongan materi menjadi website utuh yang berfungsi.',
            },
          ],
        },
        {
          id: 'interactive-learning',
          heading: 'BELAJAR INTERAKTIF',
          lead: 'Pembelajar tidak hanya membaca — mereka praktik.',
          paragraphs: [
            'Latihannya berjalan sepenuhnya di browser: tulis kode, periksa jawaban, dan langsung lihat hasilnya. Prinsip yang sama mengalir ke kuis dan tutorial.',
          ],
          features: [
            {
              label: 'Latihan coding',
              description:
                '9 latihan dari level Easy, Medium, Hard, sampai Pro — masing-masing bernilai poin, dengan petunjuk dan validasi instan.',
            },
            {
              label: 'Validasi jawaban',
              description:
                'Jawaban JavaScript dieksekusi dan keluarannya ditangkap; jawaban HTML ditampilkan sebagai pratinjau langsung di bawah editor.',
            },
            {
              label: 'Kuis dengan penjelasan',
              description:
                '30 soal untuk HTML, CSS, dan JavaScript plus mode campuran — setiap jawaban langsung dikoreksi dan dijelaskan, dengan review lengkap di akhir.',
            },
            {
              label: 'Alat di dalam tutorial',
              description:
                'Live preview di tutorial CSS dan code runner di tutorial JavaScript — ubah, jalankan, dan lihat hasilnya.',
            },
          ],
        },
        {
          id: 'project-based-learning',
          heading: 'BELAJAR BERBASIS PROYEK',
          lead: 'Dari kartu profil sampai website portofolio.',
          paragraphs: [
            'Modul proyek mengubah alur belajar menjadi sesuatu yang nyata. Setiap proyek terpandu adalah website utuh yang dibangun langkah demi langkah, dengan kode yang bisa disalin dan target hasil yang jelas.',
          ],
          groups: [
            {
              label: 'Pemula',
              items: [{ text: 'Kartu Profil' }, { text: 'Halaman Resep Makanan' }, { text: 'Landing Page Sederhana' }],
            },
            {
              label: 'Menengah',
              items: [
                { text: 'To-Do List' },
                { text: 'Kalkulator' },
                { text: 'Aplikasi Cuaca', note: 'Segera hadir' },
              ],
            },
            {
              label: 'Profesional',
              items: [
                { text: 'Toko Online Mini', note: 'Segera hadir' },
                { text: 'Blog Pribadi', note: 'Segera hadir' },
                { text: 'Website Portofolio', note: 'Segera hadir' },
              ],
            },
          ],
        },
        {
          id: 'ai-assistant',
          heading: 'ASISTEN AI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'Kodi adalah asisten belajar bawaan: chat yang menjawab pertanyaan dalam Bahasa Indonesia, menjelaskan error dengan sabar, dan menunjukkan contoh kode dalam blok yang bisa disalin.',
            'Kodi dibangun di atas Gemini API (Gemini 2.0 Flash) dan masih merupakan kemampuan yang masih muda — antarmukanya sendiri mengingatkan pembelajar bahwa jawabannya mungkin tidak sempurna dan perlu diverifikasi.',
          ],
        },
        {
          id: 'my-role',
          heading: 'PERAN SAYA',
          paragraphs: [
            'KodingID adalah proyek saya sendiri — saya merancang idenya, mendesain pengalamannya, dan membangun produk yang ada hari ini.',
          ],
          list: [
            'Product thinking — merancang jalur belajar dan alur yang menjadi fondasi platform',
            'UI/UX & pengembangan frontend — mendesain dan membangun platformnya sendiri',
            'Logika pembelajaran interaktif — validasi latihan, alur kuis, live preview, dan code runner',
            'Pengembangan berbantuan AI — mengintegrasikan asisten belajar berbasis Gemini',
          ],
        },
        {
          id: 'current-status',
          heading: 'STATUS SAAT INI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'KodingID masih dalam pengembangan — produk tahap awal yang terus dibentuk dan diperbaiki, bukan produk jadi.',
          ],
          list: [
            'Kursus HTML dengan enam pelajaran, plus pengenalan CSS dan JavaScript',
            '9 latihan coding dan 30 soal kuis',
            'Lima proyek terpandu, dengan beberapa lagi bertanda segera hadir',
            'Versi pertama asisten AI',
          ],
        },
      ],
      next: {
        heading: 'SELANJUTNYA',
        items: [
          'Melanjutkan kurikulum — pelajaran HTML, CSS, dan JavaScript yang sudah direncanakan tapi masih terkunci',
          'Merilis proyek terpandu berikutnya, dari aplikasi cuaca sampai website portofolio',
          'Mengembangkan asisten AI lebih jauh — bagian terbaru dari platform ini',
        ],
      },
    },
  },
} satisfies Dictionary
