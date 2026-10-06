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
  caseStudy: {
    readLabel: 'Read case study →',
    backToWork: 'Back to work',
    meta: { type: 'Type', status: 'Status', stack: 'Stack' },
  },
  // Case-study copy is verified against the KodingID source
  // (E:\Tugas\XAMPP\htdocs\koding.id) — only what actually exists.
  caseStudies: {
    kodingid: {
      hero: {
        eyebrow: 'CASE STUDY',
        title: 'KodingID',
        positioning:
          'An Indonesian-first platform for learning web development — tutorials, hands-on practice, quizzes, and guided projects, connected in one learning path.',
        stack: 'HTML · CSS · JavaScript · Gemini API',
      },
      sections: [
        {
          id: 'problem',
          heading: 'THE PROBLEM',
          paragraphs: [
            'For Indonesian beginners, learning web development usually starts with a language barrier: much of the available programming material is written in English. The concepts are hard enough without first working through a language the learner may not be comfortable with.',
            'There is a second gap as well — understanding a concept is not the same as being able to write it. Reading about HTML only becomes real when the learner builds something with it.',
          ],
        },
        {
          id: 'idea',
          heading: 'THE IDEA',
          paragraphs: [
            'KodingID is a learning platform built for Indonesian beginners: material, practice, assessment, and real projects — all in Indonesian, in one connected path.',
            'Instead of separate resources patched together, every step feeds the next: a concept is learned in a tutorial, applied in an exercise, tested in a quiz, and finally assembled into a project.',
          ],
        },
        {
          id: 'learning-loop',
          heading: 'THE LEARNING LOOP',
          paragraphs: [
            'The whole platform is built around one path — the loop every topic follows.',
          ],
          steps: [
            {
              label: 'LEARN',
              description:
                'Step-by-step tutorials in Indonesian — HTML, CSS, and JavaScript, starting from the very basics.',
            },
            {
              label: 'PRACTICE',
              description:
                'Leveled coding exercises answered directly in the browser, with hints and instant feedback.',
            },
            {
              label: 'TEST',
              description:
                'Topic-based quizzes with immediate correction and a plain-language explanation for every answer.',
            },
            {
              label: 'BUILD',
              description:
                'Guided projects that turn the learned pieces into complete, working websites.',
            },
          ],
        },
        {
          id: 'interactive-learning',
          heading: 'INTERACTIVE LEARNING',
          paragraphs: [
            'Learning happens by doing, so the exercises run in the browser. Learners write code in a built-in editor, check the answer, and see the result immediately: JavaScript answers are executed and their output captured, and HTML answers are rendered in a live preview.',
            'The quizzes are built the same way. Every answer is corrected on the spot and followed by a short explanation in Indonesian — a wrong answer becomes a lesson instead of a dead end.',
          ],
          list: [
            '9 practice exercises across Easy, Medium, Hard, and Pro levels, each worth points',
            '30 quiz questions across HTML, CSS, and JavaScript, plus a mixed mode',
            'Live preview in the CSS tutorial — edit a style and watch the page update',
            'Code runner in the JavaScript tutorial — run code and read the output in the browser',
          ],
        },
        {
          id: 'project-based-learning',
          heading: 'PROJECT-BASED LEARNING',
          paragraphs: [
            'The project module turns the loop into something tangible. Each guided project is a complete website built step by step, with copyable code and a clear target result.',
            'Projects are organized in three tiers — beginner, intermediate, and professional. Five are available today; several more, including a weather app, a mini online store, a blog, and a portfolio website, are marked as coming soon.',
          ],
        },
        {
          id: 'ai-assistant',
          heading: 'AI ASSISTANT',
          paragraphs: [
            'Kodi is the built-in learning assistant: a chat that answers questions in Indonesian, explains errors patiently, and shows example code in copyable blocks.',
            'Kodi is powered by the Gemini API and is still an in-development capability — the interface itself reminds learners that answers may be imperfect and should be verified.',
          ],
        },
        {
          id: 'my-role',
          heading: 'MY ROLE',
          paragraphs: [
            'KodingID is my own project, designed and built from the first idea to the current implementation.',
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
          paragraphs: [
            'KodingID is still in development — an early-stage product, not a finished one.',
            'What works today: an HTML course with six lessons, the CSS and JavaScript introductions, 9 practice exercises, 30 quiz questions, five guided projects, and the first version of the AI assistant.',
            'The direction ahead is visible in the product itself — locked lessons across the three curricula and upcoming projects marked "coming soon".',
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
  },
} satisfies Dictionary
