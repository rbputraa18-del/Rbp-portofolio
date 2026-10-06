/**
 * Minimal hash routing (ARCHITECTURE.md — Routes).
 * Case-study pages live at "#/work/<id>". Every other hash is an in-page
 * anchor on the home page — the navbar/footer already use plain "#work",
 * "#about", "#contact" anchors, so the two kinds of hash never collide.
 *
 * Deliberately dependency-free: hash URLs work on any static host, which
 * keeps the deployment target open (ARCHITECTURE.md — Deployment). A
 * path-based router can replace this file later without touching pages.
 */
import { useEffect, useState } from 'react'

/** Returns "/work/<id>" for route hashes, null for anchors or no hash. */
export function parseHashRoute(hash: string): string | null {
  return hash.startsWith('#/') ? hash.slice(1) : null
}

/** The current route (path without the leading "#"), null on the home page. */
export function useHashRoute(): string | null {
  const [route, setRoute] = useState<string | null>(() =>
    parseHashRoute(window.location.hash),
  )

  useEffect(() => {
    const onChange = () => setRoute(parseHashRoute(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
