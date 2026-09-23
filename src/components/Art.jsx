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
 * Sunset over the market: the dusk disc setting behind a row of
 * candlesticks. Used on the Product page's trading-experience block.
 */
export function GrowthArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Illustration of the market at dusk on Dusk Fundgrove">
      <defs>
        <linearGradient id="sunset-disc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e08a3c" />
          <stop offset="0.55" stopColor="#d2556e" />
          <stop offset="1" stopColor="#7a5fd0" />
        </linearGradient>
      </defs>

      {/* paper frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#fffdf6" stroke="#cdc2a8" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="#e4dcc9" />

      {/* sky bands */}
      <rect x="15" y="15" width="530" height="120" rx="6" fill="#faf6ec" />
      <line x1="15" y1="135" x2="545" y2="135" stroke="#cdc2a8" />

      {/* setting sun */}
      <path d="M200 135 A 62 62 0 0 1 324 135 Z" fill="url(#sunset-disc)" opacity="0.9" />
      <g stroke="#e08a3c" strokeWidth="2" strokeLinecap="round" opacity="0.55">
        <line x1="262" y1="148" x2="262" y2="162" />
        <line x1="292" y1="152" x2="292" y2="170" />
        <line x1="232" y1="152" x2="232" y2="170" />
      </g>

      {/* candlestick skyline (ink silhouettes) */}
      <g stroke="#201c2b" strokeWidth="2">
        <line x1="60" y1="300" x2="60" y2="240" /><line x1="68" y1="288" x2="68" y2="248" stroke="#453e55" />
        <line x1="100" y1="310" x2="100" y2="216" /><line x1="108" y1="296" x2="108" y2="224" stroke="#453e55" />
        <line x1="140" y1="292" x2="140" y2="196" /><line x1="148" y1="278" x2="148" y2="204" stroke="#453e55" />
      </g>
      <g fill="#201c2b">
        <rect x="60" y="242" width="8" height="56" rx="2" />
        <rect x="100" y="218" width="8" height="90" rx="2" />
        <rect x="140" y="198" width="8" height="92" rx="2" />
      </g>
      <g stroke="#b93a2d" strokeWidth="2">
        <line x1="180" y1="286" x2="180" y2="176" /><line x1="188" y1="272" x2="188" y2="184" stroke="#453e55" />
        <line x1="220" y1="272" x2="220" y2="150" /><line x1="228" y1="258" x2="228" y2="158" stroke="#453e55" />
      </g>
      <g fill="#b93a2d">
        <rect x="180" y="178" width="8" height="106" rx="2" />
        <rect x="220" y="152" width="8" height="118" rx="2" />
      </g>

      {/* rising line over the candles */}
      <path
        d="M40 330 C 120 310, 180 240, 250 222 S 360 150, 420 128 S 500 84, 530 70"
        fill="none"
        stroke="#7a5fd0"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <g fill="#7a5fd0" stroke="#fffdf6" strokeWidth="2.5">
        <rect x="243" y="214" width="15" height="15" rx="3" />
        <rect x="413" y="120" width="15" height="15" rx="3" />
        <rect x="523" y="62" width="17" height="17" rx="3" />
      </g>

      {/* labels */}
      <g>
        <text x="36" y="60" fontFamily="'Newsreader', Georgia, serif" fontWeight="700" fontSize="26" fill="#201c2b">One Desk, Every Market</text>
        <text x="36" y="86" fontSize="14" fill="#6d6679" fontFamily="'Public Sans', Arial, sans-serif">AI signals · copy trading · 300+ markets</text>
        <rect x="36" y="106" width="140" height="40" rx="20" fill="#201c2b" />
        <text x="106" y="132" textAnchor="middle" fontSize="15" fontWeight="700" fill="#f7f2e6" fontFamily="'Public Sans', Arial, sans-serif">Get started</text>
      </g>

      <text x="36" y="398" fontFamily="'Public Sans', Arial, sans-serif" fontSize="12" fill="#6d6679">Illustrative artwork. Trading involves significant risk</text>
      <rect x="36" y="404" width="90" height="3" fill="url(#sunset-disc)" opacity="0.9" />
    </svg>
  )
}
