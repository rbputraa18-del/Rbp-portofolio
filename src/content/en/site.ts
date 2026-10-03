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
      problem: null,
      thinking: null,
      solution: null,
      result: null,
    },
    'web-umkm': {
      title: 'Web UMKM',
      type: 'Business Website / Landing Page',
      description:
        'A modern business website designed to present a business, its offering, and customer contact experience.',
      problem: null,
      thinking: null,
      solution: null,
      result: null,
    },
  },
} satisfies Dictionary
