import { Link } from 'react-router-dom'

/**
 * Brand mark: the setting sun - a dusk-gradient half disc sinking below
 * the horizon line, the Evening Ledger signature.
 */
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Dusk Fundgrove - home">
      <svg className="logo__mark" viewBox="0 0 36 36" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="logo-dusk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e08a3c" />
            <stop offset="0.5" stopColor="#d2556e" />
            <stop offset="1" stopColor="#7a5fd0" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="34" height="34" rx="9" fill="#fffdf6" stroke="#cdc2a8" />
        {/* horizon line */}
        <line x1="6" y1="25" x2="30" y2="25" stroke="#201c2b" strokeWidth="1.6" />
        {/* setting sun */}
        <path d="M8 25 A 10 10 0 0 1 28 25 Z" fill="url(#logo-dusk)" />
        {/* sun rays */}
        <line x1="8" y1="15" x2="8" y2="10" stroke="#e08a3c" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18" y1="8" x2="18" y2="4" stroke="#d2556e" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="28" y1="15" x2="28" y2="10" stroke="#7a5fd0" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="logo__word">Dusk Fundgrove</span>
    </Link>
  )
}
