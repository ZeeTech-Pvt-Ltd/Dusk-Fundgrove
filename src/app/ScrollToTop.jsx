'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Scroll to top on route change (anchors on the same page are untouched).
// `behavior: 'instant'` overrides the site-wide smooth scrolling so the
// reset doesn't animate.
export default function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
