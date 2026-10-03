/**
 * Pure storage helpers for the language preference.
 * Kept free of React/DOM imports so the logic can be tested in isolation.
 */

export const LANGUAGES = ['en', 'id'] as const
export type Language = (typeof LANGUAGES)[number]

/** English is the international-facing default (CONTENT.md). */
export const DEFAULT_LANGUAGE: Language = 'en'

export const LANGUAGE_STORAGE_KEY = 'portfolio.language'

export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value)
}

/** Returns the stored language, or null when absent, invalid, or storage is unavailable. */
export function readStoredLanguage(storage: StorageLike | undefined): Language | null {
  if (!storage) return null
  try {
    const stored = storage.getItem(LANGUAGE_STORAGE_KEY)
    return isLanguage(stored) ? stored : null
  } catch {
    return null
  }
}

export function writeStoredLanguage(storage: StorageLike | undefined, language: Language): void {
  if (!storage) return
  try {
    storage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // Storage unavailable (private mode, quota) — language still works in-memory.
  }
}
