import {
  KODINGID_SCREENSHOTS,
  MAW_INVENTORY_SCREENSHOTS,
  PERSONAL_OS_SCREENSHOTS,
  WEB_UMKM_SCREENSHOTS,
} from '../../data/assets'
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
      problem:
        'Toko kecil masih mencatat stok secara manual, dan perangkat lunak yang ada mengasumsikan internet stabil dan operator terlatih.',
      thinking:
        'Aplikasi desktop offline-first yang sesederhana aplikasi ponsel — dengan backup otomatis.',
      solution:
        'Sistem inventaris local-first yang mencakup produk, pergerakan stok, penjualan POS, laporan, dan backup.',
      result: null,
    },
    'web-umkm': {
      title: 'Web UMKM',
      type: 'Website Bisnis / Landing Page',
      description:
        'Website bisnis modern yang dirancang untuk menampilkan bisnis, penawarannya, dan pengalaman kontak bagi pelanggan.',
      problem:
        'Banyak usaha kecil masih belum punya kehadiran online yang layak, dan template generik tidak mewakili mereka.',
      thinking:
        'Satu desain halaman tunggal yang kuat per bisnis — dibangun di sekitar kepribadian bisnisnya sendiri.',
      solution:
        'Kumpulan website contoh satu-file untuk berbagai jenis bisnis, dari barbershop dan masakan rumahan sampai kedai kopi dan undangan digital.',
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
    'personal-os': {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'Personal OS',
        positioning:
          'Rumah digital pribadi yang hangat — ruang kerja yang dirancang untuk menyatukan berpikir, belajar, merencanakan, dan aktivitas sehari-hari dalam satu tempat yang tenang.',
        stack: 'Next.js · React · TypeScript · Tailwind CSS · TipTap · Framer Motion',
        visual: {
          caption: 'Ruang kerja Home',
          image: {
            ...PERSONAL_OS_SCREENSHOTS.home,
            alt: 'Ruang kerja Home Personal OS — sapaan, fokus hari ini dengan progres, catatan tempel, dan akses cepat di atas latar kayu yang hangat',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          lead: 'Kehidupan digital saya tersebar di berbagai aplikasi — dan tidak ada yang terasa seperti milik saya.',
          paragraphs: [
            'Catatan di satu aplikasi, buku di aplikasi lain, rencana dan pengingat di tempat lain lagi. Setiap pekerjaan berarti membuka alat yang berbeda, dan setiap alat tampak dan terasa seperti perangkat lunak — panel abu-abu, menu yang ramai, widget yang berebut perhatian.',
            'Saya menginginkan kebalikannya. Satu tempat untuk berpikir dan membaca sehari-hari yang benar-benar ingin saya huni.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          lead: 'Bukan dashboard lagi — melainkan rumah digital.',
          paragraphs: [
            'Personal OS dibangun sebagai ruang kerja pribadi yang hangat, bukan aplikasi produktivitas yang mencoba melakukan segalanya. Antarmukanya mengambil nuansa kayu, kertas, dan permukaan hangat, sementara Library dan Reader dirancang sebagai pengalaman membaca yang editorial.',
            'Setiap ruang kerja punya satu tugas yang jelas: Home mengumpulkan hari, Notes menangkap pikiran dalam bentuk apa pun yang sesuai, dan Library menyimpan buku, progres membaca, serta sorotan dalam satu rak.',
          ],
        },
        {
          id: 'workspaces',
          heading: 'RUANG KERJA',
          lead: 'Delapan ruang direncanakan. Tiga sudah dibangun.',
          paragraphs: [
            'Rencananya mencakup delapan ruang kerja: Home, Notes, Library, Finance, AI Workspace, Gallery, Planning, dan Achievement. Saat ini tiga di antaranya sudah ada: Home, Notes, serta Library beserta Reader-nya.',
          ],
          features: [
            {
              label: 'Home',
              description:
                'Titik awal — fokus hari ini, catatan tempel, dan akses cepat ke alat sehari-hari.',
            },
            {
              label: 'Notes',
              description:
                'Dokumen dalam berbagai mode kerja, dari teks kaya dan Markdown hingga spreadsheet, canvas, presentation, mindmap, database, diagram, dan media.',
            },
            {
              label: 'Library & Reader',
              description:
                'Rak buku untuk membaca, dengan pelacakan progres, catatan, sorotan, dan halaman baca yang editorial.',
            },
          ],
        },
        {
          id: 'inside-notes',
          heading: 'DI DALAM NOTES',
          lead: 'Satu sistem catatan, sembilan mode kerja.',
          paragraphs: [
            'Notes adalah pusat teknisnya. Sebuah catatan tidak terbatas pada teks — setiap dokumen bisa dibuka dalam salah satu dari sembilan mode kerja: rich text, Markdown, spreadsheet, canvas, presentation, mindmap, database, diagram, dan media.',
            'Yang sudah terverifikasi digunakan sejauh ini: membuat dan mengedit catatan dengan penyimpanan otomatis dan persistensi, editor spreadsheet, serta mekanisme sehari-hari di sekitar catatan — notebook, koleksi, favorit, pin, pencarian, dan penyaringan.',
          ],
          features: [
            {
              label: 'Sembilan mode kerja',
              description:
                'Rich text, Markdown, spreadsheet, canvas, presentation, mindmap, database, diagram, dan media — setiap dokumen dibuka dalam mode yang paling sesuai.',
            },
            {
              label: 'Pembuatan & persistensi',
              description:
                'Catatan baru dibuat lewat dialog dengan pilihan mode, warna, favorit, dan pin; dokumen tersimpan otomatis dan tersimpan secara lokal.',
            },
            {
              label: 'Editor spreadsheet',
              description: 'Mode spreadsheet yang berfungsi di dalam sistem catatan.',
            },
            {
              label: 'Pengelolaan',
              description:
                'Notebook, koleksi, favorit, pin, pencarian, dan penyaringan menjaga catatan tetap mudah ditemukan.',
            },
          ],
        },
        {
          id: 'interface',
          heading: 'ANTARMUKA',
          lead: 'Kayu, kertas, dan ruang untuk berpikir.',
          paragraphs: [
            'Bahasa visualnya sengaja anti-dashboard: permukaan hangat, panel bergaya kertas, dan pengalaman membaca yang editorial. Rak buku Library serta perilaku balik halaman dan tema Reader adalah ekspresinya yang paling jelas.',
          ],
          images: [
            {
              ...PERSONAL_OS_SCREENSHOTS.library,
              alt: 'Ruang kerja Library — rak buku kayu berisi buku contoh dengan progres membaca dan panel detail',
              caption: 'Library — 15 buku contoh di rak',
            },
            {
              ...PERSONAL_OS_SCREENSHOTS.readerLight,
              alt: 'Ruang kerja Reader dalam tema terang — bab contoh dua halaman yang terbuka dengan panel catatan dan sorotan',
              caption: 'Reader — bab contoh, tema terang',
            },
            {
              ...PERSONAL_OS_SCREENSHOTS.readerDark,
              alt: 'Ruang kerja Reader dalam mode membaca gelap — bab contoh yang sama dengan tema baca dialihkan ke gelap',
              caption: 'Reader — halaman yang sama dalam mode membaca gelap',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'PERAN SAYA',
          paragraphs: [
            'Personal OS adalah proyek saya sendiri — saya merancang konsepnya, mendesain pengalamannya, dan membangun ruang kerja yang ada hari ini, dengan AI sebagai asisten pengembangan.',
          ],
          list: [
            'Product thinking — konsep ruang kerja, struktur delapan ruang, dan arah yang tenang seperti rumah',
            'Desain UI/UX — identitas visual kayu-dan-kertas serta pengalaman Library dan Reader yang editorial',
            'Pengembangan frontend — ruang kerja Home, Notes, dan Library, dibangun dengan Next.js dan TypeScript',
            'Pengembangan berbantuan AI — menggunakan AI untuk eksplorasi, kecepatan implementasi, dan iterasi, dengan arah produk tetap di bawah kendali saya',
          ],
        },
        {
          id: 'current-status',
          heading: 'STATUS SAAT INI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'Personal OS adalah proyek yang sedang berjalan, bukan produk jadi. Belum dirilis ke pengguna, dan tidak ada angka penggunaan atau hasil bisnis yang bisa dilaporkan.',
          ],
          list: [
            'Tiga dari delapan ruang kerja sudah diimplementasikan: Home, Notes, serta Library beserta Reader-nya',
            'Library berisi 15 catatan buku contoh; konten Reader adalah bab contoh yang generik',
            'Data Notes tersimpan lokal di browser — belum ada sinkronisasi cloud',
            'Lima ruang kerja tersisa — Finance, AI Workspace, Gallery, Planning, dan Achievement — masih direncanakan',
          ],
        },
      ],
      next: {
        heading: 'SELANJUTNYA',
        items: [
          'Membangun ruang kerja tersisa — Finance, AI Workspace, Gallery, Planning, dan Achievement',
          'Memperdalam pengalaman membaca dan membawa Library melampaui data contoh',
          'Menambahkan sinkronisasi cloud agar catatan dan data library bisa mengikuti pengguna antar perangkat',
          'Menyelesaikan pass responsif mobile penuh — antarmuka saat ini dirancang di sekitar layar desktop',
        ],
      },
    },
    'maw-inventory': {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'Maw Inventory',
        positioning:
          'Sistem inventaris desktop offline-first yang dibangun untuk meja kasir toko kecil — sesederhana mungkin untuk staf yang belum pernah memakai perangkat lunak bisnis.',
        stack: 'Electron · React · TypeScript · Prisma + SQLite · Tailwind CSS',
        visual: {
          caption: 'Dashboard — stok dan penjualan dalam satu layar',
          image: {
            ...MAW_INVENTORY_SCREENSHOTS.dashboard,
            alt: 'Dashboard Maw Inventory — kartu KPI untuk pendapatan, produk, dan kesehatan stok, dengan grafik tren pendapatan dan penjualan versus profit',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          lead: 'Alat inventaris terasa dibuat untuk kantor — bukan untuk meja kasir yang sibuk.',
          paragraphs: [
            'Toko kecil masih mengandalkan catatan kertas dan ingatan. Stok dihitung manual, pemesanan ulang dikira-kira, dan kesalahan baru ketahuan ketika barang sudah habis.',
            'Perangkat lunak yang ada juga tidak banyak membantu. Ia mengasumsikan koneksi internet stabil, operator terlatih, dan proses bisnis yang tidak dimiliki toko kecil.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          lead: 'Manajemen stok yang bekerja di meja kasir — offline, otomatis, dan sesederhana ponsel.',
          paragraphs: [
            'Maw Inventory adalah aplikasi desktop yang berjalan sepenuhnya offline di database lokal, sehingga toko tetap bekerja meski internet tidak tersedia.',
            'Antarmukanya mengikuti satu aturan: harus terasa familier seperti aplikasi smartphone. Semua layar berbahasa Indonesia, semua aksi satu klik saja, dan datanya mem-backup dirinya sendiri secara otomatis.',
          ],
        },
        {
          id: 'system',
          heading: 'SISTEMNYA',
          lead: 'Dari rak produk sampai laporan penjualan dalam satu aplikasi.',
          paragraphs: [
            'Sistemnya mengikuti siklus harian toko: daftarkan produk, gerakkan stok, jual di kasir, lalu baca hasilnya.',
          ],
          features: [
            {
              label: 'Katalog produk',
              description:
                'Setiap barang punya SKU, harga beli, dan jumlah stok real-time — bisa dicari dari mana saja dengan Ctrl+F.',
            },
            {
              label: 'Mesin inventaris',
              description:
                'Stok masuk, keluar, dan penyesuaian tercatat secara atomik dengan jejak audit lengkap — referensi, catatan, dan siapa yang membuat perubahan.',
            },
            {
              label: 'POS & shift kasir',
              description:
                'Layar kasir siap pakai dengan katalog produk, keranjang, buka-tutup shift, dan pembayaran tunai atau QRIS.',
            },
            {
              label: 'Laporan & ekspor',
              description:
                'Laporan penjualan dari harian sampai rentang khusus — produk terlaris, metode pembayaran, dan transaksi terakhir — plus ekspor Excel sekali klik.',
            },
            {
              label: 'Backup otomatis',
              description: 'Backup lokal berjalan otomatis; backup cloud ada di peta jalan.',
            },
          ],
          images: [
            {
              ...MAW_INVENTORY_SCREENSHOTS.products,
              alt: 'Daftar barang — SKU, stok real-time, dan harga beli untuk setiap barang, dengan pencarian dan aksi sekali klik',
              caption: 'Produk — katalog utama dengan stok real-time',
            },
            {
              ...MAW_INVENTORY_SCREENSHOTS.stockHistory,
              alt: 'Riwayat stok — setiap pergerakan stok dengan jenis, jumlah, referensi, dan catatannya',
              caption: 'Riwayat stok — setiap pergerakan dengan jejak auditnya',
            },
          ],
        },
        {
          id: 'interface',
          heading: 'ANTARMUKA',
          lead: 'Gelap, padat, dan terbaca — dirancang untuk meja kasir sungguhan.',
          paragraphs: [
            'Antarmukanya adalah ruang kerja gelap dengan kontras tinggi yang dibangun untuk fokus: tabel padat tetap terbaca, aksi yang sering dipakai berjarak satu klik, dan setiap layar mengikuti pola navigasi yang sama.',
          ],
          images: [
            {
              ...MAW_INVENTORY_SCREENSHOTS.salesReport,
              alt: 'Laporan penjualan — total penjualan, jumlah transaksi, metode pembayaran, dan produk terlaris untuk periode terpilih',
              caption: 'Laporan penjualan — dari harian sampai rentang khusus',
            },
            {
              ...MAW_INVENTORY_SCREENSHOTS.transactions,
              alt: 'Daftar transaksi — penjualan selesai dengan nomor invoice, kasir, dan metode pembayaran',
              caption: 'Transaksi — setiap penjualan dengan invoice dan statusnya',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'PERAN SAYA',
          paragraphs: [
            'Maw Inventory adalah produk saya sendiri — saya merancang konsepnya, mendesain alur kerja dan antarmukanya, dan membangun aplikasinya dari ujung ke ujung, dengan AI sebagai asisten pengembangan.',
          ],
          list: [
            'Product thinking — konsep offline-first dan siklus harian toko dari katalog sampai laporan',
            'Desain UI/UX — ruang kerja gelap, kesederhanaan ala ponsel, dan alur berbahasa Indonesia',
            'Implementasi full-stack — frontend React dan proses utama Electron dengan Prisma dan SQLite',
            'Kualitas & perkakas — TypeScript strict mode, pengujian otomatis, dan penyiapan packaging Windows',
          ],
        },
        {
          id: 'current-status',
          heading: 'STATUS SAAT INI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'Maw Inventory adalah aplikasi desktop yang berjalan dan masih dalam pengembangan aktif — bukan produk jadi, dan belum dipakai toko sungguhan.',
          ],
          list: [
            'Aplikasi berjalan offline di database SQLite lokal dengan backup lokal otomatis',
            'Studi kasus ini berjalan di data demo fiktif — tidak ada informasi toko sungguhan yang ditampilkan',
            'Backup cloud dan distribusi masih dalam pengerjaan',
          ],
        },
      ],
      next: {
        heading: 'SELANJUTNYA',
        items: [
          'Menghubungkan backup cloud agar data toko aman bahkan jika komputer rusak',
          'Memperdalam laporan — margin profit, umur stok, dan riwayat pembelian',
          'Memoles alur POS dan menyelesaikan packaging distribusi',
        ],
      },
    },
    'web-umkm': {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'Web UMKM',
        positioning:
          'Contoh website bisnis untuk usaha kecil Indonesia — masing-masing dirancang di sekitar kepribadian bisnis yang diwakilinya.',
        stack: 'HTML · CSS · JavaScript',
        visual: {
          caption: 'Kopi Tanah — konsep kedai kopi yang editorial',
          image: {
            ...WEB_UMKM_SCREENSHOTS.kopiTanah,
            alt: 'Website kedai kopi Kopi Tanah — hero terbelah dengan judul serif, aksen skrip emas, dan biji kopi yang digambar dengan CSS',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          lead: 'Kebanyakan website usaha kecil tidak tampak seperti bisnisnya.',
          paragraphs: [
            'Usaha kecil sering berakhir dengan template generik yang bisa dimiliki siapa saja — atau tidak punya website sama sekali. Hasilnya terlihat sama dengan setiap pesaing dan tidak berarti apa-apa bagi pelanggan yang masuk ke pintu.',
            'Situs-situs contoh ini memulai dari arah sebaliknya: kepribadian bisnisnya itu sendiri.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          lead: 'Satu halaman, satu kepribadian.',
          paragraphs: [
            'Setiap contoh adalah satu halaman mandiri yang dirancang di sekitar satu bisnis: barbershop yang berani, dapur rumahan yang hangat, kedai kopi yang editorial — masing-masing dengan jenis huruf, palet, dan suara yang berbeda.',
            'Setiap situs menjalankan tiga tugas yang sama: memperkenalkan bisnis, menjelaskan penawaran, dan mengarahkan pelanggan untuk memesan atau menghubungi.',
          ],
        },
        {
          id: 'showcase',
          heading: 'GALERINYA',
          lead: 'Empat bisnis, empat desain yang sangat berbeda.',
          paragraphs: [
            'Koleksinya mencakup berbagai jenis usaha kecil — setiap halaman adalah latihan desain yang utuh dengan sendirinya.',
          ],
          features: [
            {
              label: 'Blade & Co.',
              description:
                'Konsep barbershop dengan tipografi kondensasi tebal, aksen merah, dan marquee layanan.',
            },
            {
              label: 'Dapur Mbok Ani',
              description:
                'Bisnis masakan rumahan dengan palet marun hangat dan tata letak yang ramah dan menggugah selera.',
            },
            {
              label: 'Kopi Tanah',
              description:
                'Konsep kedai kopi editorial dengan hero terbelah, tipografi serif, dan aksen emas.',
            },
            {
              label: 'KALA Coffee',
              description: 'Konsep kedai kopi gelap dan moody dengan judul serif miring.',
            },
          ],
          images: [
            {
              ...WEB_UMKM_SCREENSHOTS.barber,
              alt: 'Website barbershop Blade & Co. — hero hitam dengan tipografi kondensasi, aksen merah, dan marquee layanan',
              caption: 'Blade & Co. — barbershop dengan karakter',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.mbokAni,
              alt: 'Website masakan rumahan Dapur Mbok Ani — hero marun hangat dengan CTA menu dan penilaian',
              caption: 'Dapur Mbok Ani — masakan rumahan yang hangat',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.kala,
              alt: 'Website KALA Coffee — hero sepia gelap dengan judul serif miring',
              caption: 'KALA Coffee — konsep moody yang minimal',
            },
          ],
        },
        {
          id: 'invitations',
          heading: 'UNDANGAN DIGITAL',
          lead: 'Undangan yang dirancang untuk ponsel, bukan mesin cetak.',
          paragraphs: [
            'Di samping situs bisnis, koleksinya mencakup dua desain undangan pernikahan digital — halaman mobile-first yang menempatkan pasangan, tanggal, dan rute RSVP di baris terdepan.',
            'Pasangan dan lokasi yang ditampilkan adalah persona demo fiktif; setiap undangan dirancang untuk dipersonalisasi per pasangan.',
          ],
          images: [
            {
              ...WEB_UMKM_SCREENSHOTS.undanganSage,
              alt: 'Sampul undangan pernikahan digital hijau sage di ponsel — nama bergaya skrip, tanggal, dan ornamen sudut',
              caption: 'Undangan sage yang tenang, dibuka di ponsel',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.undanganGold,
              alt: 'Sampul undangan pernikahan digital hitam-emas di ponsel — nama serif dan skrip dengan tanggal berbingkai',
              caption: 'Undangan hitam-emas, dibuka di ponsel',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'PERAN SAYA',
          paragraphs: [
            'Koleksi Web UMKM adalah karya saya sendiri — setiap konsep, tata letak, dan build saya bentuk dan tulis sendiri, dengan AI sebagai asisten pengembangan.',
          ],
          list: [
            'Konsep & art direction — kepribadian yang berbeda untuk setiap jenis bisnis',
            'Desain & build UI — halaman satu-file lengkap dalam HTML, CSS, dan JavaScript',
            'Desain responsif — tata letak yang disesuaikan untuk browsing ponsel di tempat yang paling penting',
          ],
        },
        {
          id: 'current-status',
          heading: 'STATUS SAAT INI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'Koleksinya adalah kumpulan build demonstrasi — latihan desain yang menunjukkan bagaimana berbagai bisnis bisa ditampilkan, bukan website klien yang sudah dideploy.',
          ],
          list: [
            'Semua nama bisnis, alamat, dan detail kontak yang ditampilkan adalah placeholder fiktif',
            'Situsnya berupa halaman HTML satu-file; font dimuat dari Google Fonts',
            'Beberapa bagian masih berupa placeholder — termasuk area gambar yang akan diganti fotografi sungguhan',
          ],
        },
      ],
      next: {
        heading: 'SELANJUTNYA',
        items: [
          'Mengganti ilustrasi CSS dan emoji dengan fotografi sungguhan untuk setiap bisnis',
          'Menyelesaikan bagian placeholder dan tautan mati di build-build awal',
          'Memperluas koleksi ke lebih banyak jenis bisnis',
        ],
      },
    },
    kodingid: {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'KodingID',
        positioning:
          'Platform interaktif berbahasa Indonesia untuk belajar pengembangan web — satu jalur terhubung dari materi ke latihan, penilaian, dan proyek nyata.',
        stack: 'HTML · CSS · JavaScript · Gemini API',
        visual: {
          caption: 'Beranda KodingID',
          image: {
            ...KODINGID_SCREENSHOTS.homepage,
            alt: 'Beranda KodingID — hero dengan jendela kode ber-highlight sintaks, statistik belajar, dan materi belajar berbahasa Indonesia di bawahnya',
          },
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
          images: [
            {
              ...KODINGID_SCREENSHOTS.cssLesson,
              alt: 'Tutorial CSS — perbandingan sebelum-dan-sesudah yang menampilkan halaman yang sama tanpa CSS dan dengan CSS',
              caption: 'Tutorial CSS — sebelum dan sesudah CSS',
            },
            {
              ...KODINGID_SCREENSHOTS.jsLesson,
              alt: 'Tutorial JavaScript — kartu konsep yang membandingkan peran HTML, CSS, dan JavaScript dalam sebuah halaman',
              caption: 'Tutorial JavaScript — perbandingan tiga bahasa',
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
          images: [
            {
              ...KODINGID_SCREENSHOTS.latihan,
              alt: 'Halaman latihan coding — filter level dari Easy sampai Pro, panel skor, dan editor di browser dengan pemeriksaan instan',
              caption: 'Latihan — soal coding dengan pemeriksaan instan',
            },
            {
              ...KODINGID_SCREENSHOTS.quizWrong,
              alt: 'Soal kuis setelah jawaban salah — pilihan yang dipilih ditandai merah, jawaban benar ditampilkan hijau, dan penjelasan di bawahnya',
              caption: 'Quiz — koreksi instan dengan penjelasan',
            },
            {
              ...KODINGID_SCREENSHOTS.quizCorrect,
              alt: 'Soal kuis yang dijawab benar — konfirmasi hijau, sepuluh poin ditambahkan, dan penjelasan di bawahnya',
              caption: 'Quiz — jawaban benar mendapat sepuluh poin',
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
          images: [
            {
              ...KODINGID_SCREENSHOTS.proyek,
              alt: 'Modul proyek — proyek pemula terpandu dengan langkah level, estimasi waktu, dan file yang dicakup setiap proyek',
              caption: 'Proyek — proyek terpandu, dari pemula sampai profesional',
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
    're17-control': {
      hero: {
        eyebrow: 'STUDI KASUS',
        title: 'RE17 Control',
        positioning:
          'Ruang kerja operasional terpusat untuk tim toko — pemantauan harian, tugas, jadwal, dan visibilitas penjualan/target dalam satu tempat.',
        stack: 'HTML · CSS · JavaScript (prototipe interaktif)',
        visual: {
          caption: 'Ruang kerja operasional, dari pemantauan hingga pengetahuan',
          path: ['Operasional', 'Checklist / Rundown', 'Stock Opname', 'Jadwal Pegawai', 'Pusat Pengetahuan'],
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'MASALAHNYA',
          lead: 'Informasi toko tersebar di mana-mana — dan tidak terpakai dengan baik.',
          paragraphs: [
            'Informasi dan instruksi toko tersebar di berbagai kanal. Target, prioritas, dan pekerjaan harian menjadi lebih sulit dipantau, dan mengatur hari berarti mengecek beberapa tempat sekaligus.',
          ],
        },
        {
          id: 'idea',
          heading: 'IDENYA',
          lead: 'Satu ruang kerja operasional untuk seluruh hari kerja toko.',
          paragraphs: [
            'RE17 Control menyatukan operasional harian toko dalam satu tempat: pemantauan, tugas harian, jadwal, visibilitas penjualan/target, dukungan stock-opname, pembelajaran, dan aktivitas toko lainnya.',
            'Studi kasus ini adalah showcase selektif — proyek ditampilkan tanpa mengekspos informasi toko yang bersifat rahasia.',
          ],
        },
        {
          id: 'prototype',
          heading: 'PROTOTIPENYA',
          lead: 'Jelajahi prototipe interaktif di bawah ini.',
          paragraphs: [
            'Prototipe ini adalah ruang kerja operasionalnya itu sendiri: dashboard operasional, checklist dan rundown, stock opname, jadwal pegawai, denah toko, serta pusat pengetahuan dan training. Semua nama toko dan angka yang ditampilkan adalah konten demo.',
          ],
          prototype: {
            // Path relatif — berlaku benar di base deploy mana pun
            // (preview Vite di /, atau subpath GitHub Pages seperti /Rbp-portofolio/).
            src: 'demos/re17/index.html',
            caption: 'RE17 v2 — Operational Workspace · prototipe interaktif',
            openLabel: 'Buka di tab baru',
          },
        },
        {
          id: 'current-status',
          heading: 'STATUS SAAT INI',
          tag: 'DALAM PENGEMBANGAN',
          paragraphs: [
            'RE17 Control adalah prototipe ruang kerja operasional internal yang masih aktif dikembangkan — bukan produk jadi, dan belum digunakan oleh toko sebenarnya.',
          ],
          list: [
            'Prototipe berupa build HTML interaktif yang mencakup dashboard operasional dan modul-modulnya',
            'Semua nama toko dan data yang ditampilkan adalah konten demo — tidak ada informasi toko rahasia yang diekspos',
            'Ruang kerja ini terus dibentuk dan diperluas',
          ],
        },
      ],
      next: {
        heading: 'SELANJUTNYA',
        items: [
          'Terus membentuk modul-modul ruang kerja bersama tim toko',
          'Menyempurnakan alur operasional harian — checklist, jadwal, dan stock opname',
          'Memperluas pusat pengetahuan dan training',
        ],
      },
    },
  },
} satisfies Dictionary
