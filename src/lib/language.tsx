/**
 * Centralized language architecture (ARCHITECTURE.md — Language).
 * One provider, two hooks. Components never read localStorage or decide
 * which dictionary to use — they call useDictionary().
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from '../content/en/site'
import { id } from '../content/id/site'
import type { Dictionary } from '../content/types'
import {
  DEFAULT_LANGUAGE,
  readStoredLanguage,
  writeStoredLanguage,
  type Language,
} from './storage'

export { LANGUAGES } from './storage'
export type { Language } from './storage'

const dictionaries: Record<Language, Dictionary> = { en, id }

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const storage = typeof window !== 'undefined' ? window.localStorage : undefined
    return readStoredLanguage(storage) ?? DEFAULT_LANGUAGE
  })

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    if (typeof window !== 'undefined') {
      writeStoredLanguage(window.localStorage, next)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = dictionaries[language].meta.siteTitle
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/** The full dictionary for the current language. */
export function useDictionary(): Dictionary {
  return dictionaries[useLanguage().language]
}
