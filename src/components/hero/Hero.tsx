import { HERO_PORTRAIT_SRC } from '../../data/assets'
import { useDictionary } from '../../lib/language'
import './Hero.css'

/**
 * Hero — the main identity section (PROJECT_BRIEF.md — Hero).
 * Editorial composition: dominant staggered headline, mono metadata column,
 * tall cropped portrait integrated into the grid. Typography leads;
 * the portrait is a replaceable slot (see src/data/assets.ts).
 */
export function Hero() {
  const t = useDictionary()
  const [headlineLine1, headlineLine2] = t.hero.headline

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner container">
        <div className="hero-grid">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-rule" aria-hidden="true" />
            <span className="type-eyebrow">{t.hero.eyebrow}</span>
          </p>
          <h1 id="hero-heading" className="hero-headline type-display">
            <span className="hero-headline-line">{headlineLine1}</span>
            <span className="hero-headline-line">{headlineLine2}</span>
          </h1>
          <div className="hero-portrait">
            {HERO_PORTRAIT_SRC ? (
              <img
                className="hero-portrait-image"
                src={HERO_PORTRAIT_SRC}
                alt={t.hero.portraitAlt}
              />
            ) : (
              /* Neutral placeholder — replaced by the real portrait once the owner selects it. */
              <div className="hero-portrait-placeholder" role="img" aria-label={t.hero.portraitAlt}>
                Portrait placeholder
              </div>
            )}
          </div>
          <div className="hero-meta">
            <p className="hero-role">{t.hero.role}</p>
            <p className="hero-supporting">{t.hero.supporting}</p>
            <div className="hero-cta-row">
              <a className="hero-cta" href="#work">
                {t.hero.cta}
                <span className="hero-cta-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
