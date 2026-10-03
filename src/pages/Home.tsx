import { PROJECTS } from '../data/projects'
import { LANGUAGES, useDictionary, useLanguage } from '../lib/language'
import './Home.css'

/**
 * TEMPORARY — Phase 1 foundation verification page.
 * The real homepage is built from Phase 2 onward and replaces this file.
 */

const TOKEN_SWATCHES = [
  '--color-bg',
  '--color-surface',
  '--color-text',
  '--color-text-secondary',
  '--color-accent',
  '--color-border',
] as const

const PROJECT_DETAIL_FIELDS = [
  { key: 'problem', label: 'Problem' },
  { key: 'thinking', label: 'Thinking' },
  { key: 'solution', label: 'Solution' },
  { key: 'result', label: 'Result / status' },
] as const

export function Home() {
  const { language, setLanguage } = useLanguage()
  const t = useDictionary()

  return (
    <main className="container">
      <header className="foundation-header">
        <span className="type-eyebrow">{t.hero.eyebrow}</span>
        <h1 className="type-display">{t.hero.headline}</h1>
        <p>{t.hero.role}</p>
        <p className="text-secondary">{t.hero.supporting}</p>
      </header>

      <section className="foundation-section" aria-labelledby="foundation-language">
        <h2 id="foundation-language" className="type-display">
          Language foundation
        </h2>
        <p>
          Current language: <strong>{language.toUpperCase()}</strong> — the selection is stored in{' '}
          <code>localStorage</code> and restored on reload. The provider keeps{' '}
          <code>&lt;html lang&gt;</code> and the document title in sync.
        </p>
        {/* TEMPORARY control to verify centralized language state.
            The designed EN/ID switch arrives in Phase 2. */}
        <div className="lang-controls">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              className="lang-button"
              aria-pressed={language === lang}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="foundation-section" aria-labelledby="foundation-typography">
        <h2 id="foundation-typography" className="type-display">
          Typography foundation
        </h2>
        <p className="type-eyebrow">Eyebrow · mono · tracked</p>
        <h3>Heading level 3</h3>
        <h4>Heading level 4</h4>
        <p>
          Body copy sits on a comfortable line height. This is a long-enough paragraph to show
          measure and rhythm — nothing here is final copy, only typographic scaffolding.
        </p>
      </section>

      <section className="foundation-section" aria-labelledby="foundation-tokens">
        <h2 id="foundation-tokens" className="type-display">
          Design tokens
        </h2>
        <ul className="swatch-list">
          {TOKEN_SWATCHES.map((token) => (
            <li key={token} className="swatch">
              <span className="swatch-chip" style={{ backgroundColor: `var(${token})` }} />
              {token}
            </li>
          ))}
        </ul>
      </section>

      <section className="foundation-section" aria-labelledby="foundation-projects">
        <h2 id="foundation-projects" className="type-display">
          Project content foundation
        </h2>
        <ul className="project-list">
          {PROJECTS.map((project) => {
            const copy = t.projects[project.id]
            return (
              <li key={project.id}>
                <h3>{copy.title}</h3>
                <span className="type-eyebrow">{copy.type}</span>
                <p className="project-meta">
                  {t.status[project.status]} · {project.caseStudyRoute}
                </p>
                <p>{copy.description}</p>
                {PROJECT_DETAIL_FIELDS.map(({ key, label }) => (
                  <p key={key} className="project-detail">
                    <strong>{label}</strong>
                    {copy[key] ?? '(not yet documented)'}
                  </p>
                ))}
              </li>
            )
          })}
        </ul>
      </section>

      <footer className="foundation-footer">
        <span className="type-eyebrow">{t.meta.siteName}</span>
        <span className="text-secondary">© {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
