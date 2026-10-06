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
          'Platform belajar pengembangan web berbahasa Indonesia — tutorial, latihan langsung, kuis, dan proyek terpandu, terhubung dalam satu jalur belajar.',
        stack: 'HTML · CSS · JavaScript · Gemini API',
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          paragraphs: [
            'Bagi pemula Indonesia, belajar web development biasanya dimulai dengan hambatan bahasa: sebagian besar materi pemrograman yang tersedia ditulis dalam bahasa Inggris. Konsepnya saja sudah cukup sulit, apalagi harus melewati bahasa yang belum tentu dikuasai terlebih dahulu.',
            'Ada jarak kedua juga — memahami konsep tidak sama dengan bisa menuliskannya. Membaca tentang HTML baru terasa nyata ketika pembelajar membangun sesuatu dengannya.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          paragraphs: [
            'KodingID adalah platform belajar yang dibangun untuk pemula Indonesia: materi, latihan, penilaian, dan proyek nyata — semuanya dalam Bahasa Indonesia, dalam satu jalur yang terhubung.',
            'Alih-alih sumber belajar terpisah yang disambung-sambung, setiap langkah mengalir ke langkah berikutnya: konsep dipelajari di tutorial, diterapkan di latihan, diuji di kuis, dan akhirnya dirangkai menjadi proyek.',
          ],
        },
        {
          id: 'learning-loop',
          heading: 'ALUR BELAJAR',
          paragraphs: [
            'Seluruh platform dibangun di sekitar satu jalur — alur yang dilalui setiap topik.',
          ],
          steps: [
            {
              label: 'BELAJAR',
              description:
                'Tutorial bertahap dalam Bahasa Indonesia — HTML, CSS, dan JavaScript, mulai dari yang paling dasar.',
            },
            {
              label: 'LATIHAN',
              description:
                'Latihan coding bertingkat yang dikerjakan langsung di browser, dengan petunjuk dan umpan balik instan.',
            },
            {
              label: 'UJI',
              description:
                'Kuis per topik dengan koreksi langsung dan penjelasan yang mudah dipahami untuk setiap jawaban.',
            },
            {
              label: 'BANGUN',
              description:
                'Proyek terpandu yang mengubah potongan-potongan materi menjadi website utuh yang berfungsi.',
            },
          ],
        },
        {
          id: 'interactive-learning',
          heading: 'BELAJAR INTERAKTIF',
          paragraphs: [
            'Belajar terjadi lewat praktik, jadi latihannya berjalan di browser. Pembelajar menulis kode di editor bawaan, memeriksa jawaban, dan langsung melihat hasilnya: jawaban JavaScript dieksekusi dan keluarannya ditangkap, sementara jawaban HTML ditampilkan dalam pratinjau langsung.',
            'Kuisnya dibangun dengan cara yang sama. Setiap jawaban langsung dikoreksi dan diikuti penjelasan singkat dalam Bahasa Indonesia — jawaban salah menjadi pelajaran, bukan jalan buntu.',
          ],
          list: [
            '9 latihan coding dari level Easy, Medium, Hard, sampai Pro, masing-masing bernilai poin',
            '30 soal kuis untuk HTML, CSS, dan JavaScript, plus mode campuran',
            'Live preview di tutorial CSS — ubah satu style dan lihat halamannya berubah',
            'Code runner di tutorial JavaScript — jalankan kode dan baca keluarannya di browser',
          ],
        },
        {
          id: 'project-based-learning',
          heading: 'BELAJAR BERBASIS PROYEK',
          paragraphs: [
            'Modul proyek mengubah alur belajar menjadi sesuatu yang nyata. Setiap proyek terpandu adalah website utuh yang dibangun langkah demi langkah, dengan kode yang bisa disalin dan target hasil yang jelas.',
            'Proyek disusun dalam tiga tingkat — pemula, menengah, dan profesional. Lima sudah tersedia hari ini; beberapa lagi — termasuk aplikasi cuaca, toko online mini, blog, dan website portofolio — ditandai sebagai segera hadir.',
          ],
        },
        {
          id: 'ai-assistant',
          heading: 'ASISTEN AI',
          paragraphs: [
            'Kodi adalah asisten belajar bawaan: chat yang menjawab pertanyaan dalam Bahasa Indonesia, menjelaskan error dengan sabar, dan menunjukkan contoh kode dalam blok yang bisa disalin.',
            'Kodi ditenagai oleh Gemini API dan masih merupakan kemampuan yang sedang dikembangkan — antarmukanya sendiri mengingatkan pembelajar bahwa jawabannya mungkin tidak sempurna dan perlu diverifikasi.',
          ],
        },
        {
          id: 'my-role',
          heading: 'PERAN SAYA',
          paragraphs: [
            'KodingID adalah proyek saya sendiri, dirancang dan dibangun dari ide awal sampai implementasi saat ini.',
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
          paragraphs: [
            'KodingID masih dalam pengembangan — produk tahap awal, belum selesai.',
            'Yang sudah berjalan hari ini: kursus HTML dengan enam pelajaran, pengenalan CSS dan JavaScript, 9 latihan coding, 30 soal kuis, lima proyek terpandu, dan versi pertama asisten AI.',
            'Arah selanjutnya terlihat langsung di produknya — pelajaran yang masih terkunci di tiga kurikulum dan proyek mendatang bertanda "segera hadir".',
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
