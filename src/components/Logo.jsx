import { Link } from 'react-router-dom'

/**
 * Brand mark: three rising candlesticks on a night backdrop - the
 * after-hours trading desk signature of the Night Desk identity.
 */
export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Dusk Fundgrove - home">
      <svg className="logo__mark" viewBox="0 0 34 34" role="img" aria-hidden="true">
        <rect x="1" y="1" width="32" height="32" rx="8" fill="#0e1420" stroke="rgba(0,229,143,0.35)" />
        {/* wicks */}
        <line x1="10" y1="9" x2="10" y2="24" stroke="#4dffb8" strokeWidth="1.6" />
        <line x1="17" y1="15" x2="17" y2="26" stroke="#4dffb8" strokeWidth="1.6" />
        <line x1="24" y1="7" x2="24" y2="18" stroke="#4dffb8" strokeWidth="1.6" />
        {/* bodies */}
        <rect x="7" y="12" width="6" height="9" rx="1.5" fill="#00e58f" />
        <rect x="14" y="17" width="6" height="7" rx="1.5" fill="#00c27b" />
        <rect x="21" y="9" width="6" height="7" rx="1.5" fill="#4dffb8" />
      </svg>
      <span className="logo__word">Dusk Fundgrove</span>
    </Link>
  )
}
