import { LANGUAGES, useDictionary, useLanguage } from '../../lib/language'
import './LanguageSwitch.css'

/**
 * Physical-switch-inspired EN/ID control (PROJECT_BRIEF.md — Language).
 * Uses the centralized LanguageProvider — no second language state.
 */
export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()
  const t = useDictionary()

  return (
    <div
      className={`language-switch${language === 'id' ? ' is-id' : ''}`}
      role="group"
      aria-label={t.a11y.language}
    >
      <span className="language-switch-knob" aria-hidden="true" />
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          className="language-switch-option"
          aria-pressed={language === lang}
          onClick={() => setLanguage(lang)}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
