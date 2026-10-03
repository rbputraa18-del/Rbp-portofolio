# PORTFOLIO — ARCHITECTURE

## Goal
Build a maintainable responsive portfolio with reusable components, clean content, bilingual support, case-study pages, performant media, simple deployment, and minimal dependencies.

## Conceptual Structure
```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── work/
│   ├── about/
│   ├── process/
│   ├── contact/
│   └── ui/
├── pages/ or routes/
├── content/
│   ├── en/
│   └── id/
├── data/
├── assets/
├── styles/
└── lib/
```

Exact framework structure must follow the actual repository.

## Content Model
Project data should contain, where available:
- id
- title
- type
- description
- status
- role
- technologies
- images
- problem
- thinking
- solution
- result/status
- visibility
- case-study route

Never put confidential RE17 information into public content.

## Language
Use centralized language state. Toggle EN/ID, persist selection, preserve language during navigation, and update all translatable content. Avoid scattered language conditionals.

## Routes
Conceptually:
```text
/
 /work
 /work/re17-control
 /work/personal-os
 /work/kodingid
 /work/maw-inventory
 /work/web-umkm
 /about
```
Exact routing can follow the selected framework.

## Components
Reusable components may include:
- Navbar
- LanguageSwitch
- Button
- SectionHeading
- ProjectPreview
- ProjectMeta
- CaseStudySection
- Footer
- MobileMenu

Do not over-abstract one-off elements.

## Media
Optimize portrait and project screenshots. Use suitable formats, lazy loading below the fold, correct dimensions, and meaningful alt text.

## Performance
Prioritize fast initial load, optimized images, limited dependencies, minimal unnecessary JavaScript, and efficient animations.

## Privacy
Never expose RE17 confidential data, credentials, API keys, private company information, private repository secrets, or internal operational information.

## Development Rule
Before changing architecture:
1. inspect repository
2. identify conventions
3. explain why change is necessary
4. make the smallest appropriate change

Do not replace working architecture merely to use a preferred stack.

## Deployment
Choose deployment target after repository discovery. Avoid deployment-specific complexity until the target is known.
