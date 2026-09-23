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

/**
 * Session dashboard: live candlestick chart with a watchlist and an
 * order ticket, drawn like a trading screen on printed paper. Used on
 * the Product page's trading-experience block.
 */
export function SessionArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Illustration of the Dusk Fundgrove trading dashboard">
      <defs>
        <linearGradient id="session-dusk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e08a3c" />
          <stop offset="0.5" stopColor="#d2556e" />
          <stop offset="1" stopColor="#7a5fd0" />
        </linearGradient>
      </defs>

      {/* paper frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#fffdf6" stroke="#cdc2a8" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="#e4dcc9" />

      {/* title bar */}
      <text x="36" y="50" fontFamily="'Newsreader', Georgia, serif" fontSize="22" fontWeight="700" fill="#201c2b">Night Session</text>
      <text x="36" y="72" fontFamily="'Roboto Mono', Consolas, monospace" fontSize="10.5" letterSpacing="1" fill="#6d6679">BTC/USDT · LIVE · 03:42 AEST</text>
      <line x1="36" y1="86" x2="524" y2="86" stroke="#e4dcc9" />

      {/* chart pane */}
      <rect x="36" y="100" width="330" height="238" rx="8" fill="#faf6ec" stroke="#e4dcc9" />
      <g stroke="#e4dcc9">
        <line x1="36" y1="160" x2="366" y2="160" />
        <line x1="36" y1="220" x2="366" y2="220" />
        <line x1="36" y1="280" x2="366" y2="280" />
      </g>

      {/* candlesticks */}
      <g stroke="#0e7a53" strokeWidth="2">
        <line x1="60" y1="300" x2="60" y2="270" />
        <line x1="90" y1="308" x2="90" y2="252" />
        <line x1="120" y1="290" x2="120" y2="232" />
        <line x1="150" y1="298" x2="150" y2="214" />
      </g>
      <g fill="#0e7a53">
        <rect x="56" y="272" width="8" height="26" rx="2" />
        <rect x="86" y="254" width="8" height="52" rx="2" />
        <rect x="116" y="234" width="8" height="54" rx="2" />
        <rect x="146" y="216" width="8" height="80" rx="2" />
      </g>
      <g stroke="#b93a2d" strokeWidth="2">
        <line x1="180" y1="270" x2="180" y2="236" />
        <line x1="210" y1="262" x2="210" y2="224" />
      </g>
      <g fill="#b93a2d">
        <rect x="176" y="238" width="8" height="30" rx="2" />
        <rect x="206" y="226" width="8" height="34" rx="2" />
      </g>
      <g stroke="#0e7a53" strokeWidth="2">
        <line x1="240" y1="246" x2="240" y2="196" />
        <line x1="270" y1="238" x2="270" y2="172" />
        <line x1="300" y1="224" x2="300" y2="146" />
        <line x1="330" y1="206" x2="330" y2="118" />
      </g>
      <g fill="#0e7a53">
        <rect x="236" y="198" width="8" height="46" rx="2" />
        <rect x="266" y="174" width="8" height="62" rx="2" />
        <rect x="296" y="148" width="8" height="74" rx="2" />
        <rect x="326" y="120" width="8" height="84" rx="2" />
      </g>
      <g stroke="#7a5fd0" strokeWidth="2">
        <line x1="360" y1="170" x2="360" y2="110" />
      </g>
      <g fill="#7a5fd0">
        <rect x="356" y="112" width="8" height="56" rx="2" />
      </g>

      {/* right rail: watchlist */}
      <g fontFamily="'Roboto Mono', Consolas, monospace">
        <text x="390" y="124" fontSize="12" fontWeight="700" fill="#201c2b">WATCHLIST</text>
        <text x="390" y="156" fontSize="14" fontWeight="700" fill="#201c2b">BTC</text>
        <text x="506" y="156" fontSize="13" textAnchor="end" fill="#201c2b">$67,240</text>
        <text x="390" y="174" fontSize="11" fill="#0e7a53">+2.41%</text>
        <text x="390" y="206" fontSize="14" fontWeight="700" fill="#201c2b">ETH</text>
        <text x="506" y="206" fontSize="13" textAnchor="end" fill="#201c2b">$3,512</text>
        <text x="390" y="224" fontSize="11" fill="#0e7a53">+1.86%</text>
        <text x="390" y="256" fontSize="14" fontWeight="700" fill="#201c2b">SOL</text>
        <text x="506" y="256" fontSize="13" textAnchor="end" fill="#201c2b">$182.4</text>
        <text x="390" y="274" fontSize="11" fill="#b93a2d">-0.72%</text>
      </g>

      {/* order ticket */}
      <rect x="390" y="290" width="146" height="48" rx="8" fill="#faf6ec" stroke="#e4dcc9" />
      <text x="404" y="311" fontSize="11" fill="#6d6679" fontFamily="'Roboto Mono', Consolas, monospace">ORDER · BTC</text>
      <text x="404" y="329" fontSize="15" fontWeight="700" fill="#201c2b" fontFamily="'Roboto Mono', Consolas, monospace">Buy $1,000</text>
      <rect x="462" y="298" width="58" height="24" rx="12" fill="#201c2b" />
      <text x="491" y="314" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f7f2e6" fontFamily="'Public Sans', Arial, sans-serif">Buy</text>

      {/* footer */}
      <line x1="36" y1="360" x2="524" y2="360" stroke="#e4dcc9" />
      <text x="36" y="386" fontFamily="'Public Sans', Arial, sans-serif" fontSize="12" fill="#6d6679">Illustrative dashboard. Trading involves significant risk</text>
      <rect x="36" y="392" width="90" height="3" fill="url(#session-dusk)" opacity="0.9" />
    </svg>
  )
}
