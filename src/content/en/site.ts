import {
  KODINGID_SCREENSHOTS,
  MAW_INVENTORY_SCREENSHOTS,
  PERSONAL_OS_SCREENSHOTS,
  WEB_UMKM_SCREENSHOTS,
} from '../../data/assets'
import type { Dictionary } from '../types'

/**
 * English site content.
 * Copy is taken verbatim from docs/CONTENT.md. Do not invent content here —
 * fields with no documented evidence stay null.
 */
export const en = {
  meta: {
    siteName: 'REKHA',
    siteTitle: 'Rekha Bahama Putra — Portfolio',
  },
  a11y: {
    skipLink: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primaryNav: 'Primary',
    language: 'Language',
    footerNav: 'Footer',
  },
  nav: {
    work: 'WORK',
    about: 'ABOUT',
    contact: 'CONTACT',
  },
  hero: {
    eyebrow: "HELLO, I'M REKHA",
    headline: ['I BUILD DIGITAL PRODUCTS', 'FROM REAL PROBLEMS.'],
    portraitAlt: 'Portrait of Rekha Bahama Putra',
    role: 'Web Developer · Product Builder · AI-Assisted Development',
    supporting: 'Turning everyday problems into practical digital tools.',
    cta: 'Explore My Work',
  },
  philosophy: {
    heading: "I don't just build websites. I build things that make problems easier.",
    body: 'From store operations and learning platforms to personal workspaces and business websites.',
  },
  selectedWork: {
    heading: 'SELECTED WORK',
    subheading: "Things I've built along the way.",
    visualPending: 'Visual preview pending',
  },
  howIBuild: {
    heading: 'FROM PROBLEM TO PRODUCT.',
    steps: ['Understand', 'Design', 'Build', 'Iterate'],
  },
  aiDevelopment: {
    heading: 'BUILT WITH AI. DIRECTED BY ME.',
    body: 'I use AI as a development assistant to explore ideas, accelerate implementation, debug problems, and iterate faster — while keeping product direction and system decisions under my control.',
  },
  about: {
    heading: 'I LIKE SOLVING PROBLEMS WITH CODE.',
    paragraphs: [
      "I'm a developer who enjoys turning real-world problems into practical digital tools.",
      'I like understanding how a process works, finding what makes it difficult, and building something that makes it easier.',
    ],
  },
  currentlyBuilding: {
    heading: 'CURRENTLY BUILDING',
    subheading: "Projects I'm still shaping, improving, and developing.",
  },
  contact: {
    heading: 'HAVE A PROBLEM WORTH SOLVING?',
    subheading: "Let's turn it into something useful.",
    channels: {
      email: {
        label: 'rb.putraa18@gmail.com',
        href: 'mailto:rb.putraa18@gmail.com',
      },
      whatsapp: {
        label: 'Chat on WhatsApp',
        href: 'https://wa.me/6281808167759',
      },
    },
  },
  footer: {
    copyright: '© 2026 Rekha Bahama Putra',
  },
  status: {
    'in-development': 'In development',
    early: 'Early / in progress',
  },
  projects: {
    're17-control': {
      title: 'RE17 Control',
      type: 'Store Operations & Team Workspace',
      description:
        'A digital workspace designed to help store teams monitor and manage daily operations from one place.',
      problem:
        'Store information and instructions were scattered across different channels, making it harder to monitor targets, identify priorities, and organize daily work.',
      thinking: null,
      solution:
        'A centralized operational workspace for monitoring, daily tasks, schedules, sales/target visibility, stock-opname support, learning, and other store activities.',
      result: null,
    },
    'personal-os': {
      title: 'Personal OS',
      type: 'Digital Life Workspace',
      description:
        'A personal workspace designed to bring thinking, learning, planning, and everyday activities into one place.',
      problem: null,
      thinking: 'A calm personal digital workspace rather than a dashboard overloaded with widgets.',
      solution: null,
      result: null,
    },
    kodingid: {
      title: 'KodingID',
      type: 'Programming Learning Platform',
      description:
        'A learning platform that combines Indonesian programming materials, exercises, quizzes, and practical projects.',
      problem:
        'Some learners find programming material harder to access because much available material is in English.',
      thinking: null,
      solution: 'Indonesian learning material combined with practice and real project application.',
      result: null,
    },
    'maw-inventory': {
      title: 'Maw Inventory',
      type: 'Offline Inventory Management',
      description:
        'An offline-oriented inventory application designed to help manage products and stock-related workflows.',
      problem:
        'Small stores still track stock by hand, and existing tools assume stable internet and trained operators.',
      thinking:
        'An offline-first desktop app as simple as a phone app — with automatic backups.',
      solution:
        'A local-first inventory system covering products, stock movements, POS sales, reports, and backups.',
      result: null,
    },
    'web-umkm': {
      title: 'Web UMKM',
      type: 'Business Website / Landing Page',
      description:
        'A modern business website designed to present a business, its offering, and customer contact experience.',
      problem:
        'Many small businesses still have no proper online presence, and generic templates do not represent them.',
      thinking:
        'One strong single-page design per business — built around the personality of the business itself.',
      solution:
        'A set of single-file example websites for different business types, from barbershops and home cooking to coffee shops and digital invitations.',
      result: null,
    },
  },
  caseStudy: {
    readLabel: 'Read case study →',
    backToWork: 'Back to work',
    meta: { type: 'Type', status: 'Status', stack: 'Stack' },
  },
  // Case-study copy is verified against the KodingID source
  // (E:\Tugas\XAMPP\htdocs\koding.id) — only what actually exists.
  caseStudies: {
    'personal-os': {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'Personal OS',
        positioning:
          'A warm personal digital home — a workspace designed to bring thinking, learning, planning, and everyday activities into one calm place.',
        stack: 'Next.js · React · TypeScript · Tailwind CSS · TipTap · Framer Motion',
        visual: {
          caption: 'The Home workspace',
          image: {
            ...PERSONAL_OS_SCREENSHOTS.home,
            alt: 'The Personal OS Home workspace — greeting, today’s focus with progress, sticky notes, and quick access on a warm wood background',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          lead: 'My digital life was scattered across apps — and none of them felt like mine.',
          paragraphs: [
            'Notes in one app, books in another, plans and reminders somewhere else. Every task meant opening a different tool, and every tool looked and felt like software — gray panels, busy menus, widgets competing for attention.',
            'I wanted the opposite of that. A single place for everyday thinking and reading that I actually wanted to spend time in.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          lead: 'Not another dashboard — a digital home.',
          paragraphs: [
            'Personal OS is built as a warm personal workspace rather than a productivity app trying to do everything. The interface draws on wood, paper, and warm surfaces, and the Library and Reader are designed around an editorial reading experience.',
            'Each workspace has one clear job: Home gathers the day, Notes captures thinking in whatever form fits, and Library keeps books, reading progress, and highlights on one shelf.',
          ],
        },
        {
          id: 'workspaces',
          heading: 'THE WORKSPACES',
          lead: 'Eight planned rooms. Three are built.',
          paragraphs: [
            'The plan covers eight workspaces: Home, Notes, Library, Finance, AI Workspace, Gallery, Planning, and Achievement. Today, three of them exist: Home, Notes, and Library with its Reader.',
          ],
          features: [
            {
              label: 'Home',
              description:
                'The starting point — today’s focus, sticky notes, and quick access to everyday tools.',
            },
            {
              label: 'Notes',
              description:
                'Documents in multiple working modes, from rich text and Markdown to spreadsheet, canvas, presentation, mindmap, database, diagram, and media.',
            },
            {
              label: 'Library & Reader',
              description:
                'A bookshelf for reading, with progress tracking, notes, highlights, and an editorial reading page.',
            },
          ],
        },
        {
          id: 'inside-notes',
          heading: 'INSIDE NOTES',
          lead: 'One note system, nine working modes.',
          paragraphs: [
            'Notes is the technical centerpiece. A note is not limited to text — every document can open in one of nine working modes: rich text, Markdown, spreadsheet, canvas, presentation, mindmap, database, diagram, and media.',
            'What has been verified in use so far: creating and editing notes with automatic saving and persistence, the spreadsheet editor, and the everyday mechanics around notes — notebooks, collections, favorites, pinning, search, and filtering.',
          ],
          features: [
            {
              label: 'Nine working modes',
              description:
                'Rich text, Markdown, spreadsheet, canvas, presentation, mindmap, database, diagram, and media — every document opens in the mode that fits it.',
            },
            {
              label: 'Creation & persistence',
              description:
                'New notes are created through a dialog with mode, color, favorite, and pin options; documents are saved automatically and persisted locally.',
            },
            {
              label: 'Spreadsheet editor',
              description: 'A working spreadsheet mode inside the note system.',
            },
            {
              label: 'Organization',
              description:
                'Notebooks, collections, favorites, pinning, search, and filtering keep notes findable as they grow.',
            },
          ],
        },
        {
          id: 'interface',
          heading: 'THE INTERFACE',
          lead: 'Wood, paper, and room to think.',
          paragraphs: [
            'The visual language is deliberately un-dashboard-like: warm surfaces, paper-inspired panels, and an editorial reading experience. The Library shelf and the Reader’s page-turn and theme behavior are its clearest expression.',
          ],
          images: [
            {
              ...PERSONAL_OS_SCREENSHOTS.library,
              alt: 'The Library workspace — a wooden bookshelf of sample books with reading progress and a detail panel',
              caption: 'Library — 15 sample books on the shelf',
            },
            {
              ...PERSONAL_OS_SCREENSHOTS.readerLight,
              alt: 'The Reader workspace in light theme — an open two-page sample chapter with a notes and highlights panel',
              caption: 'Reader — sample chapter, light theme',
            },
            {
              ...PERSONAL_OS_SCREENSHOTS.readerDark,
              alt: 'The Reader workspace in dark reading mode — the same sample chapter with the reading theme switched to dark',
              caption: 'Reader — the same page in dark reading mode',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'MY ROLE',
          paragraphs: [
            'Personal OS is my own project — I shaped the concept, designed the experience, and built the workspaces that exist today, with AI as my development assistant.',
          ],
          list: [
            'Product thinking — the workspace concept, the eight-room structure, and the calm, home-like direction',
            'UI/UX design — the wood-and-paper visual identity and the editorial Library and Reader experience',
            'Frontend development — the Home, Notes, and Library workspaces, built with Next.js and TypeScript',
            'AI-assisted development — using AI for exploration, implementation speed, and iteration, with product direction kept under my control',
          ],
        },
        {
          id: 'current-status',
          heading: 'CURRENT STATUS',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'Personal OS is a work in progress, not a finished product. It has not been released to users, and there are no usage numbers or business outcomes to report.',
          ],
          list: [
            'Three of eight planned workspaces are implemented: Home, Notes, and Library with its Reader',
            'The Library holds 15 sample book records; the Reader content is a generic sample chapter',
            'Notes data is persisted locally in the browser — there is no cloud sync yet',
            'The remaining five workspaces — Finance, AI Workspace, Gallery, Planning, and Achievement — are still planned',
          ],
        },
      ],
      next: {
        heading: "WHAT'S NEXT",
        items: [
          'Build the remaining workspaces — Finance, AI Workspace, Gallery, Planning, and Achievement',
          'Deepen the reading experience and move the Library beyond sample data',
          'Add cloud sync so notes and library data can follow the user across devices',
          'Complete a full mobile responsive pass — the interface is currently designed around desktop screens',
        ],
      },
    },
    'maw-inventory': {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'Maw Inventory',
        positioning:
          'An offline-first desktop inventory system built for small-store counters — simple enough for staff who have never used business software.',
        stack: 'Electron · React · TypeScript · Prisma + SQLite · Tailwind CSS',
        visual: {
          caption: 'The dashboard — stock and sales at a glance',
          image: {
            ...MAW_INVENTORY_SCREENSHOTS.dashboard,
            alt: 'The Maw Inventory dashboard — KPI cards for revenue, products, and stock health, with revenue trend and sales versus profit charts',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          lead: 'Inventory tools feel built for offices — not for a busy store counter.',
          paragraphs: [
            'Small stores still run on paper notes and memory. Stock is counted by hand, reorders are guessed, and mistakes only surface when a product is already gone.',
            'Existing software does not help much. It assumes a stable internet connection, a trained operator, and a business process that small stores simply do not have.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          lead: 'Stock management that works at the counter — offline, automatic, and phone-simple.',
          paragraphs: [
            'Maw Inventory is a desktop application that runs fully offline on a local database, so a store keeps working even when the internet does not.',
            'The interface follows one rule: it should feel as familiar as a smartphone app. Every screen is in Indonesian, every action is one click away, and the data backs itself up automatically.',
          ],
        },
        {
          id: 'system',
          heading: 'THE SYSTEM',
          lead: 'From product shelf to sales report in one app.',
          paragraphs: [
            'The system follows the store’s daily loop: register products, move stock, sell at the counter, and read the results.',
          ],
          features: [
            {
              label: 'Product catalog',
              description:
                'Every item gets an SKU, purchase price, and live stock count — searchable from anywhere with Ctrl+F.',
            },
            {
              label: 'Inventory engine',
              description:
                'Stock in, stock out, and adjustments are recorded atomically with a complete audit trail — reference, notes, and who made each change.',
            },
            {
              label: 'POS & cashier shifts',
              description:
                'A counter-ready cashier screen with a product catalog, cart, shift opening and closing, and cash or QRIS payment.',
            },
            {
              label: 'Reports & export',
              description:
                'Sales reports from daily to custom ranges — top products, payment methods, and recent transactions — plus one-click Excel export.',
            },
            {
              label: 'Automatic backups',
              description: 'Local backups run automatically; cloud backup is on the roadmap.',
            },
          ],
          images: [
            {
              ...MAW_INVENTORY_SCREENSHOTS.products,
              alt: 'The product list — SKU, live stock, and purchase price for every item, with search and one-click actions',
              caption: 'Products — the master catalog with live stock',
            },
            {
              ...MAW_INVENTORY_SCREENSHOTS.stockHistory,
              alt: 'The stock history — every stock movement with its type, quantity, reference, and note',
              caption: 'Stock history — every movement with its audit trail',
            },
          ],
        },
        {
          id: 'interface',
          heading: 'THE INTERFACE',
          lead: 'Dark, dense, and readable — designed for a real counter.',
          paragraphs: [
            'The interface is a dark, high-contrast workspace built for focus: dense tables stay readable, frequent actions sit one click away, and every screen follows the same navigation pattern.',
          ],
          images: [
            {
              ...MAW_INVENTORY_SCREENSHOTS.salesReport,
              alt: 'The sales report — total sales, transaction count, payment methods, and top products for the selected period',
              caption: 'Sales report — from daily to custom ranges',
            },
            {
              ...MAW_INVENTORY_SCREENSHOTS.transactions,
              alt: 'The transactions list — completed sales with invoice numbers, cashier, and payment method',
              caption: 'Transactions — every sale with its invoice and status',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'MY ROLE',
          paragraphs: [
            'Maw Inventory is my own product — I shaped the concept, designed the workflows and interface, and built the application end to end, with AI as my development assistant.',
          ],
          list: [
            'Product thinking — the offline-first concept and the store’s daily loop from catalog to report',
            'UI/UX design — the dark workspace, the phone-like simplicity, and the Indonesian-language flows',
            'Full-stack implementation — the React frontend and the Electron main process with Prisma and SQLite',
            'Quality & tooling — TypeScript strict mode, automated tests, and the Windows packaging setup',
          ],
        },
        {
          id: 'current-status',
          heading: 'CURRENT STATUS',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'Maw Inventory is a working desktop application in active development — not a finished product, and not yet in use by real stores.',
          ],
          list: [
            'The application runs offline on a local SQLite database with automatic local backups',
            'This case study runs on fictional demo data — no real store information is shown',
            'Cloud backup and distribution are still being worked on',
          ],
        },
      ],
      next: {
        heading: "WHAT'S NEXT",
        items: [
          'Wire cloud backup so store data is safe even if the computer fails',
          'Deepen reporting — profit margins, stock aging, and purchase history',
          'Polish the POS flow and finish distribution packaging',
        ],
      },
    },
    'web-umkm': {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'Web UMKM',
        positioning:
          'Example business websites for Indonesian small businesses — each one designed around the personality of the business it represents.',
        stack: 'HTML · CSS · JavaScript',
        visual: {
          caption: 'Kopi Tanah — an editorial coffee-shop concept',
          image: {
            ...WEB_UMKM_SCREENSHOTS.kopiTanah,
            alt: 'The Kopi Tanah coffee shop website — a split hero with a serif headline, gold script accent, and a CSS-drawn coffee bean',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          lead: 'Most small-business websites do not look like the business.',
          paragraphs: [
            'Small businesses often end up with a generic template that could belong to anyone — or no website at all. The result looks the same as every competitor and does nothing for the customer walking in the door.',
            'These example sites start from the opposite direction: the personality of the business itself.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          lead: 'One page, one personality.',
          paragraphs: [
            'Each example is a single self-contained page designed around one business: a bold barbershop, a warm home kitchen, an editorial coffee shop — each with its own type, palette, and voice.',
            'Every site does the same three jobs: present the business, explain the offer, and route the customer to order or contact.',
          ],
        },
        {
          id: 'showcase',
          heading: 'THE SHOWCASE',
          lead: 'Four businesses, four very different designs.',
          paragraphs: [
            'The collection spans different kinds of small businesses — each page is a complete design exercise in its own right.',
          ],
          features: [
            {
              label: 'Blade & Co.',
              description:
                'A barbershop concept with heavy condensed typography, red accents, and a marquee of services.',
            },
            {
              label: 'Dapur Mbok Ani',
              description:
                'A home-cooking business with a warm maroon palette and a friendly, appetising layout.',
            },
            {
              label: 'Kopi Tanah',
              description:
                'An editorial coffee-shop concept with a split hero, serif typography, and gold accents.',
            },
            {
              label: 'KALA Coffee',
              description: 'A dark, moody coffee concept with italic serif headlines.',
            },
          ],
          images: [
            {
              ...WEB_UMKM_SCREENSHOTS.barber,
              alt: 'The Blade & Co. barbershop website — a black hero with condensed typography, red accents, and a services marquee',
              caption: 'Blade & Co. — a barbershop with attitude',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.mbokAni,
              alt: 'The Dapur Mbok Ani home-cooking website — a warm maroon hero with a menu CTA and ratings',
              caption: 'Dapur Mbok Ani — home cooking, warmly presented',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.kala,
              alt: 'The KALA Coffee website — a dark sepia hero with italic serif headlines',
              caption: 'KALA Coffee — a moody, minimal concept',
            },
          ],
        },
        {
          id: 'invitations',
          heading: 'DIGITAL INVITATIONS',
          lead: 'Invitations designed for the phone, not the printer.',
          paragraphs: [
            'Alongside the business sites, the collection includes two digital wedding-invitation designs — mobile-first pages that put the couple, the date, and the RSVP route front and center.',
            'The couples and venues shown are fictional demo personas; each invitation is designed to be personalized per couple.',
          ],
          images: [
            {
              ...WEB_UMKM_SCREENSHOTS.undanganSage,
              alt: 'A sage-green digital wedding invitation cover on mobile — script names, the date, and corner flourishes',
              caption: 'A calm sage invitation, opened on a phone',
            },
            {
              ...WEB_UMKM_SCREENSHOTS.undanganGold,
              alt: 'A black-and-gold digital wedding invitation cover on mobile — serif and script names with a framed date',
              caption: 'A black-and-gold invitation, opened on a phone',
            },
          ],
        },
        {
          id: 'my-role',
          heading: 'MY ROLE',
          paragraphs: [
            'The Web UMKM collection is my own work — each concept, layout, and build was shaped and written by me, with AI as my development assistant.',
          ],
          list: [
            'Concept & art direction — a distinct personality for each business type',
            'UI design & build — complete single-file pages in HTML, CSS, and JavaScript',
            'Responsive design — layouts tuned for phone browsing where it matters most',
          ],
        },
        {
          id: 'current-status',
          heading: 'CURRENT STATUS',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'The collection is a set of demonstration builds — design exercises that show how different businesses could be presented, not deployed client websites.',
          ],
          list: [
            'All business names, addresses, and contact details shown are fictional placeholders',
            'The sites are single-file HTML pages; fonts load from Google Fonts',
            'Some sections are still placeholders — including image areas that will become real photography',
          ],
        },
      ],
      next: {
        heading: "WHAT'S NEXT",
        items: [
          'Replace CSS illustrations and emoji with real photography for each business',
          'Complete the placeholder sections and dead links in the earlier builds',
          'Extend the collection to more business types',
        ],
      },
    },
    kodingid: {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'KodingID',
        positioning:
          'An Indonesian-first interactive platform for learning web development — one connected path from material to practice, assessment, and real projects.',
        stack: 'HTML · CSS · JavaScript · Gemini API',
        visual: {
          caption: 'The KodingID homepage',
          image: {
            ...KODINGID_SCREENSHOTS.homepage,
            alt: 'The KodingID homepage — the hero with a syntax-highlighted code window, the learning stats, and Indonesian learning materials below',
          },
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          lead: 'Learning to code is hard enough. Doing it in a language you do not fully understand makes it harder.',
          paragraphs: [
            'Much of the web development material available online is written in English. For Indonesian beginners, that adds a language barrier on top of the concepts themselves.',
            'There is a second gap as well — understanding a concept is not the same as being able to write it. Reading about HTML only becomes real when the learner builds something with it.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          lead: 'One connected path: learn, practice, test, build — in Indonesian.',
          paragraphs: [
            'KodingID brings learning material, coding practice, assessment, and project-based learning together in one Indonesian-language experience.',
            'Every step feeds the next: a concept is learned in a tutorial, applied in an exercise, tested in a quiz, and finally assembled into a guided project.',
          ],
        },
        {
          id: 'learning-loop',
          heading: 'THE LEARNING LOOP',
          paragraphs: [
            'The whole platform is built around one loop — the path every topic follows.',
          ],
          steps: [
            {
              label: 'LEARN',
              term: 'Materi',
              description:
                'Step-by-step tutorials in Indonesian — HTML, CSS, and JavaScript, starting from the very basics.',
            },
            {
              label: 'PRACTICE',
              term: 'Latihan coding',
              description:
                'Leveled coding exercises answered directly in the browser, with hints and instant feedback.',
            },
            {
              label: 'TEST',
              term: 'Quiz',
              description:
                'Topic-based quizzes with immediate correction and a plain-language explanation for every answer.',
            },
            {
              label: 'BUILD',
              term: 'Proyek',
              description:
                'Guided projects that turn the learned pieces into complete, working websites.',
            },
          ],
          images: [
            {
              ...KODINGID_SCREENSHOTS.cssLesson,
              alt: 'The CSS tutorial — a before-and-after comparison showing the same page without CSS and with CSS',
              caption: 'CSS tutorial — before and after CSS',
            },
            {
              ...KODINGID_SCREENSHOTS.jsLesson,
              alt: 'The JavaScript tutorial — concept cards comparing how HTML, CSS, and JavaScript each contribute to a page',
              caption: 'JavaScript tutorial — the three languages compared',
            },
          ],
        },
        {
          id: 'interactive-learning',
          heading: 'INTERACTIVE LEARNING',
          lead: 'The learner does not only read — they practice.',
          paragraphs: [
            'The exercises run entirely in the browser: write code, check the answer, and see the result immediately. The same principle carries through the quizzes and the tutorials.',
          ],
          features: [
            {
              label: 'Coding exercises',
              description:
                '9 exercises across Easy, Medium, Hard, and Pro levels — each worth points, with hints and instant validation.',
            },
            {
              label: 'Answer validation',
              description:
                'JavaScript answers are executed and their output captured; HTML answers render a live preview right below the editor.',
            },
            {
              label: 'Quiz with explanations',
              description:
                '30 questions across HTML, CSS, and JavaScript plus a mixed mode — every answer is corrected on the spot and explained, with a full review at the end.',
            },
            {
              label: 'In-tutorial tools',
              description:
                'A live preview in the CSS tutorial and a code runner in the JavaScript tutorial — edit, run, and watch the result.',
            },
          ],
          images: [
            {
              ...KODINGID_SCREENSHOTS.latihan,
              alt: 'The coding exercises page — level filters from Easy to Pro, a score panel, and an in-browser editor with instant checking',
              caption: 'Latihan — coding exercises with instant checking',
            },
            {
              ...KODINGID_SCREENSHOTS.quizWrong,
              alt: 'A quiz question after a wrong answer — the chosen option marked red, the correct one revealed in green, and an explanation below',
              caption: 'Quiz — instant correction with an explanation',
            },
            {
              ...KODINGID_SCREENSHOTS.quizCorrect,
              alt: 'A quiz question answered correctly — the green confirmation, ten points added, and the explanation below',
              caption: 'Quiz — a correct answer earns ten points',
            },
          ],
        },
        {
          id: 'project-based-learning',
          heading: 'PROJECT-BASED LEARNING',
          lead: 'From a profile card to a portfolio website.',
          paragraphs: [
            'The project module turns the loop into something tangible. Each guided project is a complete website built step by step, with copyable code and a clear target result.',
          ],
          groups: [
            {
              label: 'Beginner',
              items: [{ text: 'Kartu Profil' }, { text: 'Halaman Resep Makanan' }, { text: 'Landing Page Sederhana' }],
            },
            {
              label: 'Intermediate',
              items: [
                { text: 'To-Do List' },
                { text: 'Kalkulator' },
                { text: 'Aplikasi Cuaca', note: 'Coming soon' },
              ],
            },
            {
              label: 'Professional',
              items: [
                { text: 'Toko Online Mini', note: 'Coming soon' },
                { text: 'Blog Pribadi', note: 'Coming soon' },
                { text: 'Website Portofolio', note: 'Coming soon' },
              ],
            },
          ],
          images: [
            {
              ...KODINGID_SCREENSHOTS.proyek,
              alt: 'The projects module — guided beginner projects with level steps, time estimates, and the files each project covers',
              caption: 'Proyek — guided projects, from beginner to professional',
            },
          ],
        },
        {
          id: 'ai-assistant',
          heading: 'AI ASSISTANT',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'Kodi is the built-in learning assistant: a chat that answers questions in Indonesian, explains errors patiently, and shows example code in copyable blocks.',
            'Kodi is built on the Gemini API (Gemini 2.0 Flash) and is still a young capability — the interface itself reminds learners that answers may be imperfect and should be verified.',
          ],
        },
        {
          id: 'my-role',
          heading: 'MY ROLE',
          paragraphs: [
            'KodingID is my own project — I shaped the idea, designed the experience, and built the product that exists today.',
          ],
          list: [
            'Product thinking — shaping the learning path and the loop the platform is built around',
            'UI/UX & frontend development — designing and building the platform itself',
            'Interactive learning logic — exercise validation, quiz flow, live preview, and code runner',
            'AI-assisted development — integrating the Gemini-powered learning assistant',
          ],
        },
        {
          id: 'current-status',
          heading: 'CURRENT STATUS',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'KodingID is still in development — an early-stage product being shaped and improved, not a finished one.',
          ],
          list: [
            'An HTML course with six lessons, plus the CSS and JavaScript introductions',
            '9 practice exercises and 30 quiz questions',
            'Five guided projects, with more marked as coming soon',
            'The first version of the AI assistant',
          ],
        },
      ],
      next: {
        heading: "WHAT'S NEXT",
        items: [
          'Continue the curricula — the HTML, CSS, and JavaScript lessons that are planned but still locked',
          'Release the upcoming guided projects, from the weather app to the portfolio website',
          'Develop the AI assistant further — it is still the newest part of the platform',
        ],
      },
    },
    're17-control': {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'RE17 Control',
        positioning:
          'A centralized operational workspace for store teams — daily monitoring, tasks, schedules, and sales/target visibility in one place.',
        stack: 'HTML · CSS · JavaScript (interactive prototype)',
        visual: {
          caption: 'The operational workspace, from monitoring to knowledge',
          path: ['Operasional', 'Checklist / Rundown', 'Stock Opname', 'Jadwal Pegawai', 'Pusat Pengetahuan'],
        },
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          lead: 'Store information was everywhere — and nowhere useful.',
          paragraphs: [
            'Store information and instructions were scattered across different channels. Targets, priorities, and daily work were harder to monitor, and organizing the day meant checking several places at once.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          lead: 'One operational workspace for the whole store day.',
          paragraphs: [
            'RE17 Control brings the store’s daily operations together in one place: monitoring, daily tasks, schedules, sales and target visibility, stock-opname support, learning, and other store activities.',
            'This case study is a selective showcase — the project is presented without exposing confidential store information.',
          ],
        },
        {
          id: 'prototype',
          heading: 'THE PROTOTYPE',
          lead: 'Explore the interactive prototype below.',
          paragraphs: [
            'The prototype is the operational workspace itself: the operations dashboard, checklist and rundown, stock opname, staff schedules, store layout, and the knowledge and training centers. All store names and figures shown are demo content.',
          ],
          prototype: {
            // Relative path — resolves correctly under any deploy base
            // (Vite preview at /, or a GitHub Pages subpath like /Rbp-portofolio/).
            src: 'demos/re17/index.html',
            caption: 'RE17 v2 — Operational Workspace · interactive prototype',
            openLabel: 'Open in new tab',
          },
        },
        {
          id: 'current-status',
          heading: 'CURRENT STATUS',
          tag: 'IN DEVELOPMENT',
          paragraphs: [
            'RE17 Control is an internal operational workspace prototype in active development — not a finished product, and not yet in use by real stores.',
          ],
          list: [
            'The prototype is an interactive HTML build covering the operational dashboard and its modules',
            'All store names and data shown are demo content — no confidential store information is exposed',
            'The workspace continues to be shaped and extended',
          ],
        },
      ],
      next: {
        heading: "WHAT'S NEXT",
        items: [
          'Continue shaping the workspace modules with the store team',
          'Refine the daily operational flows — checklist, schedule, and stock opname',
          'Extend the knowledge and training centers',
        ],
      },
    },
  },
} satisfies Dictionary
