/**
 * All site copy lives here so it can be edited in one place.
 *
 * NOTE: testimonials, rating counts and any performance claims are
 * placeholder marketing copy (mirroring the reference site's structure) -
 * confirm numbers and wording before launch. Legal pages are template text.
 */

export const SITE_NAME = 'Dusk Fundgrove'
export const SITE_URL = 'https://dusk-fundgrove-platform.com/'
export const SUPPORT_EMAIL = 'support@dusk-fundgrove-platform.com'

// Registration forms POST JSON to this CORS-open endpoint.
export const FORM_ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
export const OFFER_NAME = 'DuskFundgrove-Site'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faq' },
]

export const HERO = {
  // rendered as one line in a single ink colour
  title: ['When The Markets Quiet Down,', 'Dusk Fundgrove', 'Keeps On Trading'],
  lead: 'Dusk Fundgrove is an AI-assisted trading platform for Bitcoin, Ethereum and 300+ markets. Set your targets before bed and let the engine run the night watch. Bank-grade custody, human support and an interface anyone can read.',
  trust: ['256-bit SSL encryption', '98% cold storage', '24/7 human support'],
  formTitle: 'Claim Your Free Account',
  formSubtitle:
    'Registration takes under two minutes. No card required, no obligation to deposit.',
}

export const ABOUT_PAGE = {
  story: {
    kicker: 'Our story',
    title: 'An Evening Desk Built By Night Owls',
    paragraphs: [
      'Dusk Fundgrove started with two traders who kept the same odd hours: scanning charts at midnight, placing orders at 2am, missing breakfast. The tools they used were built for business hours. So they built the opposite.',
      'Today Dusk Fundgrove runs an AI-assisted trading desk through the night session, watched over by real analysts in three timezones. Your portfolio keeps working after you turn out the lights, and every morning opens with a clear report of what moved and why.',
    ],
    facts: ['Founded 2019', 'Melbourne HQ', '300+ instruments', 'Analysts in 3 timezones'],
  },
  values: {
    kicker: 'What we stand for',
    title: 'The House Rules',
    items: [
      {
        icon: 'shield',
        title: 'Custody First',
        text: '256-bit encryption, 98% cold storage and two-factor on every account. Protection is not a feature, it is the foundation.',
      },
      {
        icon: 'scale',
        title: 'Plain Language',
        text: 'Fees in a table, risks in the open, no asterisks hiding surprises. If we cannot explain it simply, we do not ship it.',
      },
      {
        icon: 'sparkle',
        title: 'Calm By Design',
        text: 'No flashing banners, no countdown timers, no pressure. A quiet desk where you decide at your own pace.',
      },
      {
        icon: 'headset',
        title: 'Humans On The Line',
        text: 'A real analyst answers 24/7. Every client gets a dedicated account manager from the first day.',
      },
    ],
  },
  difference: {
    kicker: 'The Dusk difference',
    title: 'Why Investors Stay',
    items: [
      {
        title: 'The Night Watch',
        text: 'Our engine scans global markets around the clock and delivers signals with a 92% accuracy rate. The overnight session is where it does its best work.',
      },
      {
        title: 'Custody That Cannot Be Hacked',
        text: 'Client funds sit in segregated accounts, and 98% of digital assets live in offline cold wallets. Nobody can reach them but you.',
      },
      {
        title: 'Built For Australian Hours',
        text: 'AUD onboarding, local funding rails and analysts who know when Sydney wakes up and when Perth goes to bed.',
      },
    ],
  },
}

export const PRODUCT_PAGE = {
  hero: {
    title: 'One Desk, Every Market, All Night',
    lead: 'Charts, signals, portfolio tracking and custody in a single calm workspace, built for the hours when the rest of the market sleeps.',
  },
  intro: {
    kicker: 'Built for you',
    title: 'Everything On The Desk, Nothing In The Way',
  },
  features: [
    {
      icon: 'chart',
      title: 'Readable Charts',
      text: 'Clean price charts with 80+ indicators, designed to be read at 1am without squinting.',
    },
    {
      icon: 'pie',
      title: 'One Portfolio View',
      text: 'Crypto, equities, forex and commodities in a single ledger, updated live.',
    },
    {
      icon: 'bolt',
      title: 'Signals That Arrive',
      text: 'Entry and exit signals pushed to your phone the moment the engine spots them.',
    },
    {
      icon: 'device',
      title: 'Every Screen, In Sync',
      text: 'Start on desktop, check on mobile, finish on tablet. Nothing is lost between devices.',
    },
    {
      icon: 'book',
      title: 'A Library That Teaches',
      text: 'Short courses and market guides that take you from first candle to full strategy.',
    },
    {
      icon: 'lock',
      title: 'Quiet Security',
      text: 'Every session runs on 256-bit SSL, and 98% of assets stay in offline cold storage.',
    },
  ],
  experience: {
    kicker: 'The trading experience',
    title: 'What A Session Feels Like',
    text: 'Log in, read the evening report, set your plan, go to sleep. The desk does the watching.',
    points: [
      'Live portfolio tracking with every position updating in real time',
      'Pro-grade charts with 80+ indicators to time your entries',
      'Instant orders on Bitcoin, Ethereum and 300+ other markets',
      'Custody with 98% cold storage and two-factor protection',
    ],
  },
}

export const STATS = [
  { value: '92%', label: 'AI signal accuracy' },
  { value: '98%', label: 'of assets in cold storage' },
  { value: '4.9/5', label: 'rating from 1286 investors', hl: true },
  { value: '24/7', label: 'evening desk coverage' },
]

export const ABOUT = {
  kicker: 'The evening desk',
  title: 'One Platform That Stays Awake So You Do Not Have To',
  text: 'Dusk Fundgrove brings together an AI-assisted trading engine, institutional-grade custody and an interface anyone can read. Whether you are buying your first Bitcoin or rebalancing a multi-asset portfolio, the desk keeps watching long after you close your eyes.',
  points: [
    'AI-assisted signals with 92% accuracy, day and night',
    'Beginner friendly. No prior trading experience required',
    'Bank-grade security with 256-bit encryption',
    'Full control. Deposit, trade and withdraw at any time',
  ],
}

export const ASSETS = {
  kicker: 'Markets we watch',
  title: 'Every Major Market, On One Desk',
  text: 'From the coins investors trust most to equities, forex, commodities and precious metals. One account covers the whole board.',
  list: [
    { icon: '/images/coins/btc.svg', name: 'Bitcoin', tag: 'BTC · the original digital asset' },
    { icon: '/images/coins/eth.svg', name: 'Ethereum', tag: 'ETH · smart contracts and DeFi' },
    { icon: '/images/coins/sol.svg', name: 'Solana', tag: 'SOL · high-speed network' },
    { icon: '/images/coins/xrp.svg', name: 'Ripple', tag: 'XRP · cross-border payments' },
    { icon: '/images/coins/ada.svg', name: 'Cardano', tag: 'ADA · research-driven chain' },
    { icon: '/images/coins/doge.svg', name: 'Dogecoin', tag: 'DOGE · the community coin' },
  ],
  note: '...plus 300+ equities, forex pairs, commodities, precious metals and CFDs.',
}

export const STEPS = {
  kicker: 'Your first evening session',
  title: 'From Sign Up To First Trade In One Evening',
  steps: [
    {
      icon: 'user',
      title: 'Open Your Account',
      text: 'Two minutes with your name, email and phone number. Your account manager says hello the same evening.',
    },
    {
      icon: 'wallet',
      title: 'Add Funds',
      text: 'Credit card, bank transfer or PayPal. Funds are protected from the moment they arrive.',
    },
    {
      icon: 'sparkle',
      title: 'Set The Desk To Work',
      text: 'Follow AI signals, copy an experienced investor or build your own plan. Then sleep easy.',
    },
  ],
}

export const JOIN = {
  kicker: 'Open an account',
  title: 'Your Free Account Starts The Evening Desk',
  text: 'Registration takes under two minutes. See the signals, read the reports and meet your account manager before you commit a single dollar.',
  points: [
    'Free registration. No card required to open an account',
    'AI-assisted signals with a 92% accuracy rate',
    'Withdraw your funds whenever you want',
  ],
}

export const CALCULATOR = {
  kicker: 'Project your growth',
  title: 'See What A Year On The Desk Could Look Like',
  text: 'Slide to your starting amount. The projection compounds monthly at the illustrative 7.6% rate the platform has averaged for clients.',
  cardTitle: 'Growth Calculator',
  cardSubtitle: 'Illustrative 12 month projection',
  depositLabel: 'Deposit Amount',
  balanceLabel: 'Potential Balance After 12 Months',
  monthlyLabel: 'Illustrative Monthly Return',
  disclaimer:
    'Illustrative projection at a 7.6% monthly rate over 12 months. Trading involves significant risk. Projections are not a guarantee of profit.',
}

export const BENEFITS = {
  kicker: 'What is on the desk',
  title: 'The Tools That Do The Night Work',
  text: 'Eight reasons investors hand their evenings to Dusk Fundgrove.',
  items: [
    {
      icon: 'bolt',
      title: 'The Night Watch Engine',
      text: 'AI scans global markets around the clock and surfaces signals with a 92% accuracy rate. The overnight session is where it earns its keep, so you can sleep through it.',
      wide: true,
    },
    {
      icon: 'chart',
      title: 'Pro Charting Suite',
      text: '80+ indicators, clean defaults and charts that stay readable on a phone at 1am. No terminal degree required.',
      wide: true,
    },
    {
      icon: 'copy',
      title: 'Copy Trading',
      text: 'Mirror experienced, profitable investors with a single click.',
    },
    {
      icon: 'pie',
      title: 'Fractional Positions',
      text: 'Start small. Own a slice of high value assets and grow.',
    },
    {
      icon: 'device',
      title: 'One Account, Every Screen',
      text: 'Desktop, tablet and mobile stay perfectly in sync.',
    },
    {
      icon: 'headset',
      title: 'Humans On The Line',
      text: 'Real analysts answer around the clock, every day.',
    },
    {
      icon: 'globe',
      title: '300+ Global Markets',
      text: 'Crypto, equities, forex and commodities in one ledger.',
    },
    {
      icon: 'book',
      title: 'A Library That Teaches',
      text: 'Guides and courses that take you from first steps to strategy.',
    },
  ],
}

export const RATING = { score: '4.9', stars: 5, meta: 'based on 1286 reviews' }

export const TESTIMONIALS = {
  kicker: 'Investor notes',
  title: 'Letters From Our Investors',
  text: 'A few notes from Australians who moved their evening trading to Dusk Fundgrove.',
  items: [
    {
      name: 'Sandra B.',
      place: 'Townsville, Australia',
      text: 'I check my phone before bed, set my plan and that is it. The desk runs the night and the morning report tells me what happened. It is the first platform that fits my life instead of the other way around.',
      stars: 5,
    },
    {
      name: 'Mark D.',
      place: 'Wollongong, Australia',
      text: 'Copy trading was the game changer. I mirror one investor, glance at the ledger on the train and withdrawals land in a couple of days. Quiet, quick, exactly as promised.',
      stars: 5,
    },
    {
      name: 'Tegan R.',
      place: 'Bendigo, Australia',
      text: 'Cold storage was the detail that won me over. 98% offline, two-factor on every withdrawal. Eight months in and I have never once worried about my money.',
      stars: 5,
    },
    {
      name: 'Amir K.',
      place: 'Toowoomba, Australia',
      text: 'Started with the free courses and a $250 deposit. The charts are genuinely readable and the support team answers like humans, even at 2am.',
      stars: 4,
    },
    {
      name: 'Grace W.',
      place: 'Launceston, Australia',
      text: 'I asked a funding question at midnight and a real analyst replied in minutes. That is when I stopped shopping around. The platform is calm and the people are real.',
      stars: 5,
    },
    {
      name: 'Peter M.',
      place: 'Ballarat, Australia',
      text: 'The 92% claim sounded like marketing, so I started small and watched. My results have tracked the projections closely enough that my main portfolio now lives here.',
      stars: 5,
    },
  ],
}

export const SECURITY = {
  kicker: 'Custody',
  title: 'Your Assets Are Held The Old Fashioned Way. Safely.',
  text: 'We built Dusk Fundgrove on one principle: your assets and your data deserve bank-grade protection, at every hour, every day.',
  bigStat: '98%',
  bigStatLabel: 'of assets held in offline cold wallets with no internet connection',
  items: [
    {
      icon: 'lock',
      title: '256-Bit SSL Encryption',
      text: 'The same standard global banks use on every connection.',
    },
    {
      icon: 'shield',
      title: 'Two-Factor Authentication',
      text: 'An extra check on every login and every withdrawal.',
    },
    {
      icon: 'scale',
      title: 'KYC And AML Compliant',
      text: 'Every account is verified to keep the desk clean.',
    },
    {
      icon: 'wallet',
      title: 'Segregated Accounts',
      text: 'Client funds never mix with company operating funds.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Put The Night Watch To Work',
  text: 'Create your free account this evening and wake up to a portfolio that kept moving while you slept.',
  trust: '256-bit SSL encryption · Free registration · Withdraw anytime',
}

export const FAQS = [
  {
    q: 'What Exactly Is The Evening Desk?',
    a: 'The evening desk is what we call the full Dusk Fundgrove setup: an AI-assisted engine, real analysts and a live ledger that keep working through the overnight session, so your portfolio is watched while you sleep.',
  },
  {
    q: 'Who Runs The Trades While I Sleep?',
    a: 'The AI engine scans markets around the clock and pushes signals to your phone. You decide which signals to follow. Nothing trades without your approval unless you switch on copy trading.',
  },
  {
    q: 'How Much Money Do I Need To Start?',
    a: 'Nothing to open an account. Registration is free. When you are ready to trade, most investors start with a few hundred dollars and build from there.',
  },
  {
    q: 'Can I Try It Before Depositing?',
    a: 'Yes. Every account includes the full platform: live charts, the evening reports, the learning library and your account manager. You only fund the account when you want to trade.',
  },
  {
    q: 'What Protects My Money?',
    a: '256-bit SSL encryption on every connection, two-factor authentication on withdrawals, segregated client accounts and 98% of assets held in offline cold storage. We are fully KYC and AML compliant.',
  },
  {
    q: 'How Quickly Can I Withdraw?',
    a: 'Request a withdrawal any time from your dashboard. Most withdrawals are processed within two business days and sent to your registered payment method.',
  },
]

export const FOOTER = {
  blurb:
    'Dusk Fundgrove is an AI-assisted multi-asset trading platform offering cryptocurrencies, equities, forex and more, with 256-bit encryption and 98% cold storage.',
  navTitle: 'Company',
  legalTitle: 'Legal',
  contactTitle: 'Contact',
  contact: [
    { icon: 'mail', text: SUPPORT_EMAIL },
    { icon: 'clock', text: 'Desk open 24/7' },
    { icon: 'globe', text: 'Now serving Australia' },
  ],
  risk: [
    'Risk Disclosure: Trading cryptocurrencies, forex, CFDs and other leveraged instruments involves substantial risk of loss and is not suitable for every investor. The value of digital assets can be highly volatile, and you may lose more than your initial investment. Past performance and AI projections are not indicative of future results. You should carefully consider your objectives, level of experience and risk appetite before trading, and never trade with funds you cannot afford to lose. Dusk Fundgrove does not provide investment advice. Nothing on this website constitutes a solicitation, recommendation or offer to buy or sell any financial instrument. Consult an independent financial advisor if you have any doubts. Accuracy figures, earnings projections and testimonials are illustrative marketing material, not guarantees.',
    'Trading services described on this website may not be available in all jurisdictions. It is your responsibility to ensure that your use of the platform complies with the laws and regulations applicable in your country of residence.',
  ],
  legalLinks: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
  ],
  copyright: 'Copyright 2026 © Dusk Fundgrove. All rights reserved.',
}
