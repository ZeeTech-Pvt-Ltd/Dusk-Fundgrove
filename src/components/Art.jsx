// Inline SVG artworks drawn for the Night Desk theme (no stock photos).
// Kept as components so the homepage stays self-contained and fast.

/**
 * Night-desk trading dashboard: framed terminal window with a candlestick
 * chart, KPI tiles and mono numerals. Used in the About section and the
 * About Us page.
 */
export function DashboardArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Line-art illustration of the Dusk Fundgrove trading dashboard">
      <defs>
        <linearGradient id="night-dash-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00e58f" stopOpacity="0.22" />
          <stop offset="1" stopColor="#00e58f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="night-dusk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb35c" />
          <stop offset="0.5" stopColor="#ff6b8a" />
          <stop offset="1" stopColor="#9a6bff" />
        </linearGradient>
      </defs>

      {/* window frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#0e1420" stroke="rgba(148,163,190,0.25)" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="rgba(0,229,143,0.22)" />

      {/* title bar */}
      <line x1="24" y1="46" x2="536" y2="46" stroke="rgba(148,163,190,0.18)" />
      <circle cx="42" cy="32" r="4.5" fill="#00e58f" />
      <circle cx="60" cy="32" r="4.5" fill="none" stroke="#00a868" />
      <circle cx="78" cy="32" r="4.5" fill="#9a6bff" />
      <text x="98" y="38" fontFamily="'Chivo Mono', Consolas, monospace" fontSize="13" fontWeight="600" fill="#8a94a8">NIGHT DESK · ALL ASSETS</text>

      {/* KPI tiles */}
      <g>
        <rect x="36" y="70" width="150" height="74" rx="8" fill="#111a29" stroke="rgba(148,163,190,0.18)" />
        <text x="52" y="96" fontSize="11" fontWeight="600" fill="#8a94a8" fontFamily="'Chivo Mono', Consolas, monospace">PORTFOLIO VALUE</text>
        <text x="52" y="128" fontSize="25" fontWeight="700" fill="#e8eef7" fontFamily="'Chivo Mono', Consolas, monospace">$124,560</text>
        <rect x="204" y="70" width="150" height="74" rx="8" fill="rgba(0,229,143,0.1)" stroke="rgba(0,229,143,0.3)" />
        <text x="220" y="96" fontSize="11" fontWeight="600" fill="#00e58f" fontFamily="'Chivo Mono', Consolas, monospace">RETURN · 12 MO</text>
        <text x="220" y="128" fontSize="25" fontWeight="700" fill="#00e58f" fontFamily="'Chivo Mono', Consolas, monospace">+8.2%</text>
        <rect x="372" y="70" width="150" height="74" rx="8" fill="#111a29" stroke="rgba(148,163,190,0.18)" />
        <text x="388" y="96" fontSize="11" fontWeight="600" fill="#8a94a8" fontFamily="'Chivo Mono', Consolas, monospace">AI SIGNALS</text>
        <text x="388" y="128" fontSize="25" fontWeight="700" fill="#9a6bff" fontFamily="'Chivo Mono', Consolas, monospace">92%</text>
      </g>

      {/* chart grid */}
      <g stroke="rgba(148,163,190,0.1)">
        <line x1="36" y1="180" x2="524" y2="180" />
        <line x1="36" y1="232" x2="524" y2="232" />
        <line x1="36" y1="284" x2="524" y2="284" />
        <line x1="36" y1="336" x2="524" y2="336" />
      </g>

      {/* candlestick series */}
      <g stroke="#00e58f" strokeWidth="2">
        <line x1="70" y1="330" x2="70" y2="300" /><line x1="78" y1="320" x2="78" y2="304" stroke="#9a6bff" />
        <line x1="110" y1="336" x2="110" y2="284" /><line x1="118" y1="322" x2="118" y2="290" stroke="#9a6bff" />
        <line x1="150" y1="318" x2="150" y2="262" /><line x1="158" y1="306" x2="158" y2="268" stroke="#9a6bff" />
        <line x1="190" y1="330" x2="190" y2="246" /><line x1="198" y1="314" x2="198" y2="252" stroke="#9a6bff" />
      </g>
      <g fill="#00e58f">
        <rect x="70" y="302" width="8" height="26" rx="2" />
        <rect x="110" y="286" width="8" height="48" rx="2" />
        <rect x="150" y="264" width="8" height="52" rx="2" />
        <rect x="190" y="248" width="8" height="80" rx="2" />
      </g>
      <g stroke="#ff6b8a" strokeWidth="2">
        <line x1="230" y1="300" x2="230" y2="256" /><line x1="238" y1="288" x2="238" y2="262" stroke="#9a6bff" />
        <line x1="270" y1="290" x2="270" y2="240" /><line x1="278" y1="278" x2="278" y2="246" stroke="#9a6bff" />
      </g>
      <g fill="#ff6b8a">
        <rect x="230" y="258" width="8" height="40" rx="2" />
        <rect x="270" y="242" width="8" height="46" rx="2" />
      </g>
      <g stroke="#00e58f" strokeWidth="2">
        <line x1="310" y1="270" x2="310" y2="214" /><line x1="318" y1="256" x2="318" y2="220" stroke="#9a6bff" />
        <line x1="350" y1="258" x2="350" y2="188" /><line x1="358" y1="242" x2="358" y2="194" stroke="#9a6bff" />
        <line x1="390" y1="240" x2="390" y2="164" /><line x1="398" y1="224" x2="398" y2="170" stroke="#9a6bff" />
        <line x1="430" y1="226" x2="430" y2="138" /><line x1="438" y1="208" x2="438" y2="144" stroke="#9a6bff" />
      </g>
      <g fill="#00e58f">
        <rect x="310" y="216" width="8" height="52" rx="2" />
        <rect x="350" y="190" width="8" height="66" rx="2" />
        <rect x="390" y="166" width="8" height="72" rx="2" />
        <rect x="430" y="140" width="8" height="84" rx="2" />
      </g>
      <g stroke="#4dffb8" strokeWidth="2">
        <line x1="470" y1="206" x2="470" y2="112" /><line x1="478" y1="188" x2="478" y2="118" stroke="#9a6bff" />
        <line x1="510" y1="190" x2="510" y2="92" /><line x1="518" y1="172" x2="518" y2="98" stroke="#9a6bff" />
      </g>
      <g fill="#4dffb8">
        <rect x="470" y="114" width="8" height="90" rx="2" />
        <rect x="510" y="94" width="8" height="94" rx="2" />
      </g>

      {/* dusk glow under the series */}
      <rect x="36" y="200" width="488" height="136" fill="url(#night-dash-glow)" opacity="0.35" />

      {/* caption */}
      <text x="36" y="398" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#8a94a8">Live portfolio tracking · desktop, tablet and mobile</text>
      <rect x="470" y="386" width="90" height="3" fill="url(#night-dusk)" opacity="0.8" />
    </svg>
  )
}

/**
 * Night-session motif: rising candlesticks under a starfield with a
 * horizon gradient. Used on the Product page's trading-experience block.
 */
export function GrowthArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Line-art illustration of trading through the night with Dusk Fundgrove">
      <defs>
        <linearGradient id="night-growth-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00e58f" stopOpacity="0.35" />
          <stop offset="1" stopColor="#00e58f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="night-dusk2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffb35c" />
          <stop offset="0.5" stopColor="#ff6b8a" />
          <stop offset="1" stopColor="#9a6bff" />
        </linearGradient>
      </defs>

      {/* frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#0e1420" stroke="rgba(148,163,190,0.25)" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="rgba(0,229,143,0.2)" />

      {/* starfield */}
      <g fill="#e8eef7">
        <circle cx="60" cy="60" r="1.4" opacity="0.7" />
        <circle cx="140" cy="40" r="1" opacity="0.5" />
        <circle cx="230" cy="70" r="1.3" opacity="0.65" />
        <circle cx="330" cy="46" r="1" opacity="0.45" />
        <circle cx="420" cy="66" r="1.4" opacity="0.7" />
        <circle cx="510" cy="42" r="1" opacity="0.5" />
        <circle cx="90" cy="96" r="1" opacity="0.4" />
        <circle cx="480" cy="100" r="1.1" opacity="0.55" />
        <circle cx="370" cy="110" r="1" opacity="0.4" />
      </g>

      {/* chart grid */}
      <g stroke="rgba(148,163,190,0.08)">
        <path d="M0 140 H560 M0 190 H560 M0 240 H560 M0 290 H560 M0 340 H560" />
      </g>

      {/* candlesticks */}
      <g stroke="#00e58f" strokeWidth="2">
        <line x1="70" y1="340" x2="70" y2="300" /><line x1="78" y1="330" x2="78" y2="306" stroke="#9a6bff" />
        <line x1="110" y1="350" x2="110" y2="280" /><line x1="118" y1="334" x2="118" y2="288" stroke="#9a6bff" />
        <line x1="150" y1="330" x2="150" y2="252" /><line x1="158" y1="316" x2="158" y2="260" stroke="#9a6bff" />
        <line x1="190" y1="344" x2="190" y2="232" /><line x1="198" y1="326" x2="198" y2="240" stroke="#9a6bff" />
      </g>
      <g fill="#00e58f">
        <rect x="70" y="302" width="8" height="36" rx="2" />
        <rect x="110" y="282" width="8" height="66" rx="2" />
        <rect x="150" y="254" width="8" height="74" rx="2" />
        <rect x="190" y="234" width="8" height="108" rx="2" />
      </g>

      {/* growth path */}
      <path
        d="M40 330 C 110 318, 160 268, 220 258 S 320 190, 370 172 S 470 96, 530 78 L 530 360 L 40 360 Z"
        fill="url(#night-growth-glow)"
      />
      <path
        d="M40 330 C 110 318, 160 268, 220 258 S 320 190, 370 172 S 470 96, 530 78"
        fill="none"
        stroke="#00e58f"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* signal nodes */}
      <g fill="#4dffb8" stroke="#070b12" strokeWidth="2.5">
        <rect x="212" y="250" width="15" height="15" rx="3" />
        <rect x="362" y="164" width="15" height="15" rx="3" />
        <rect x="518" y="68" width="17" height="17" rx="3" />
      </g>

      {/* labels */}
      <g>
        <text x="40" y="96" fontFamily="'Bricolage Grotesque', Arial, sans-serif" fontWeight="800" fontSize="24" fill="#e8eef7">Trade The Night Session</text>
        <text x="40" y="122" fontSize="14" fill="#8a94a8" fontFamily="Inter, Arial, sans-serif">AI signals · copy trading · 300+ markets</text>
        <rect x="40" y="142" width="140" height="44" rx="22" fill="#00e58f" />
        <text x="110" y="170" textAnchor="middle" fontSize="15" fontWeight="700" fill="#04281a" fontFamily="Inter, Arial, sans-serif">Get started</text>
      </g>

      <text x="40" y="398" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#8a94a8">Illustrative artwork. Trading involves significant risk</text>
      <rect x="470" y="386" width="90" height="3" fill="url(#night-dusk2)" opacity="0.8" />
    </svg>
  )
}
