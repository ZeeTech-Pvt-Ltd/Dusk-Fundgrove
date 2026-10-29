'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />

        <nav className="site-header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            // All nav links are exact single-segment paths, so exact
            // comparison replicates react-router's `end` behaviour.
            const isActive = pathname === item.to
            return (
              <Link
                key={item.label}
                href={item.to}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="site-header__actions">
          <Link className="btn btn--ink" href="/sign-up" onClick={() => setOpen(false)}>
            Sign Up
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu container${open ? ' is-open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map((item) => (
          <Link key={item.label} href={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <div className="mobile-menu__actions">
          <Link className="btn btn--ink btn--block" href="/sign-up" onClick={() => setOpen(false)}>
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  )
}
