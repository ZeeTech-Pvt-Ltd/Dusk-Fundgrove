// Inline SVG artworks drawn for the Evening Ledger theme (no stock
// photos). Kept as components so the homepage stays self-contained.

/**
 * The evening ledger: a printed report card with ruled rows, serif
 * labels, a dusk-gradient chart and a wax seal. Used in the About
 * section and the About Us page.
 */
export function DashboardArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Illustration of the Dusk Fundgrove evening ledger">
      <defs>
        <linearGradient id="ledger-dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d2556e" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7a5fd0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ledger-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e08a3c" />
          <stop offset="0.5" stopColor="#d2556e" />
          <stop offset="1" stopColor="#7a5fd0" />
        </linearGradient>
      </defs>

      {/* paper card */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#fffdf6" stroke="#cdc2a8" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="#e4dcc9" />

      {/* header */}
      <text x="36" y="52" fontFamily="'Newsreader', Georgia, serif" fontSize="24" fontWeight="700" fill="#201c2b">The Evening Ledger</text>
      <text x="36" y="74" fontFamily="'Roboto Mono', Consolas, monospace" fontSize="11" letterSpacing="1" fill="#6d6679">NIGHT SESSION REPORT · 03:42 AEST</text>
      <line x1="36" y1="88" x2="524" y2="88" stroke="#e4dcc9" />

      {/* wax seal */}
      <circle cx="502" cy="48" r="20" fill="#b93a2d" />
      <circle cx="502" cy="48" r="15" fill="none" stroke="#f7f2e6" strokeWidth="1" opacity="0.6" />
      <text x="502" y="54" textAnchor="middle" fontFamily="'Roboto Mono', Consolas, monospace" fontSize="12" fontWeight="700" fill="#f7f2e6">DF</text>

      {/* KPI row */}
      <g fontFamily="'Roboto Mono', Consolas, monospace">
        <rect x="36" y="106" width="150" height="72" rx="8" fill="#faf6ec" stroke="#e4dcc9" />
        <text x="52" y="130" fontSize="10" letterSpacing="1" fill="#6d6679">PORTFOLIO</text>
        <text x="52" y="160" fontSize="24" fontWeight="700" fill="#201c2b">$124,560</text>
        <rect x="204" y="106" width="150" height="72" rx="8" fill="rgba(185,58,45,0.07)" stroke="rgba(185,58,45,0.3)" />
        <text x="220" y="130" fontSize="10" letterSpacing="1" fill="#b93a2d">RETURN · 12 MO</text>
        <text x="220" y="160" fontSize="24" fontWeight="700" fill="#b93a2d">+7.6%</text>
        <rect x="372" y="106" width="150" height="72" rx="8" fill="#faf6ec" stroke="#e4dcc9" />
        <text x="388" y="130" fontSize="10" letterSpacing="1" fill="#6d6679">AI SIGNALS</text>
        <text x="388" y="160" fontSize="24" fontWeight="700" fill="#7a5fd0">92%</text>
      </g>

      {/* ruled chart area */}
      <g stroke="#e4dcc9">
        <line x1="36" y1="210" x2="524" y2="210" />
        <line x1="36" y1="258" x2="524" y2="258" />
        <line x1="36" y1="306" x2="524" y2="306" />
        <line x1="36" y1="354" x2="524" y2="354" />
      </g>

      {/* dusk area chart */}
      <path
        d="M36 330 C 90 322, 130 300, 180 306 S 260 254, 300 260 S 380 200, 420 210 S 490 148, 524 154 L 524 354 L 36 354 Z"
        fill="url(#ledger-dusk)"
      />
      <path
        d="M36 330 C 90 322, 130 300, 180 306 S 260 254, 300 260 S 380 200, 420 210 S 490 148, 524 154"
        fill="none"
        stroke="#b93a2d"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* seal diamond markers on the line */}
      <g fill="#b93a2d" stroke="#fffdf6" strokeWidth="2.5">
        <rect x="292" y="252" width="14" height="14" transform="rotate(45 299 259)" />
        <rect x="412" y="202" width="14" height="14" transform="rotate(45 419 209)" />
        <rect x="516" y="146" width="14" height="14" transform="rotate(45 523 153)" />
      </g>

      {/* footer note */}
      <line x1="36" y1="372" x2="524" y2="372" stroke="#e4dcc9" />
      <text x="36" y="398" fontFamily="'Public Sans', Arial, sans-serif" fontSize="12" fill="#6d6679">Printed by the night watch. Trading involves significant risk.</text>
      <rect x="36" y="404" width="90" height="3" fill="url(#ledger-line)" opacity="0.9" />
    </svg>
  )
}
