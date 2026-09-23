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
  badge: 'Now live across Australia',
  title: ['Trade The Night Session With', 'Dusk Fundgrove', 'On Your Side'],
  // `title` is [before, highlighted, after] - the highlighted word gets
  // the dusk gradient.
  lead: 'Dusk Fundgrove is an AI-powered trading platform for Bitcoin, Ethereum and 300+ assets. Its engine scans the markets around the clock, so while you sleep, your watchlist stays covered. Bank-grade security, real human support, zero experience needed.',
  trust: ['256-bit SSL encryption', '98% cold storage', '24/7 support'],
  formTitle: 'Create Your Free Account',
  formSubtitle:
    'Join thousands of Australian investors on Dusk Fundgrove. Registration takes under two minutes.',
}

export const ABOUT_PAGE = {
  story: {
    kicker: 'Our story',
    title: 'Built For The Night Shift, Designed For Everyone',
    paragraphs: [
      'Dusk Fundgrove started with a question we kept hearing: why do serious trading tools only work while you are awake? Markets move overnight, and opportunities do not wait for office hours. So we built a platform that keeps watch for you, every hour, in every timezone.',
      'Today Dusk Fundgrove pairs an AI-driven trading engine with institutional-grade security and an interface anyone can learn in minutes. From your first Bitcoin to a diversified multi-asset portfolio, your money is never off the clock.',
    ],
    facts: ['Founded 2019', 'Melbourne HQ', '300+ instruments', '24/7 human support'],
  },
  values: {
    kicker: 'What we stand for',
    title: 'The Principles Behind Dusk Fundgrove',
    items: [
      {
        icon: 'shield',
        title: 'Security By Default',
        text: '256-bit encryption, 98% cold storage and two-factor authentication on every account. No exceptions, no shortcuts.',
      },
      {
        icon: 'scale',
        title: 'Transparency First',
        text: 'Clear fees, plain-language risk notes and no surprises in the fine print. What you see is what you get.',
      },
      {
        icon: 'sparkle',
        title: 'Simplicity',
        text: 'Powerful tools, everyday words. If a first-time investor cannot follow it, we redesign it.',
      },
      {
        icon: 'headset',
        title: 'Human Support',
        text: 'A real person picks up 24/7. Every client gets a dedicated account manager from day one.',
      },
    ],
  },
  difference: {
    kicker: 'The Dusk difference',
    title: 'What sets us apart',
    items: [
      {
        title: 'The Engine That Never Clocks Off',
        text: 'Our AI scans global markets around the clock and delivers signals with a 92% accuracy rate. The overnight session is when it earns its keep.',
      },
      {
        title: 'Bank-Grade Custody, Not Promises',
        text: 'Client funds sit in segregated accounts, and 98% of digital assets stay in offline cold wallets. Nobody can reach them but you.',
      },
      {
        title: 'Built For The Way Australians Trade',
        text: 'Local funding options, AUD-friendly onboarding and support that knows your timezone and your questions.',
      },
    ],
  },
}

export const PRODUCT_PAGE = {
  hero: {
    title: 'Meet Your After-Hours Trading Desk',
    lead: 'Track live market moves, follow AI-driven signals and manage your portfolio with tools built for investors at every level. The desk is always open.',
  },
  intro: {
    kicker: 'Built for you',
    title: 'Everything An Investor Needs, One Platform',
  },
  features: [
    {
      icon: 'chart',
      title: 'Stats At A Glance',
      text: 'Performance, risk and allocation tracked live, so you always know where your money stands.',
    },
    {
      icon: 'pie',
      title: 'Every Asset, One Portfolio',
      text: 'Crypto, equities, forex and commodities side by side. No more jumping between apps.',
    },
    {
      icon: 'bolt',
      title: 'Live Market Signals',
      text: 'Real-time prices, clean charts and AI-driven signals, refreshed around the clock.',
    },
    {
      icon: 'device',
      title: 'Trade From Anywhere',
      text: 'Desktop, tablet or mobile. Your positions stay in sync wherever the night takes you.',
    },
    {
      icon: 'book',
      title: 'Learn As You Go',
      text: 'Structured courses and market guides that take you from first steps to confident trades.',
    },
    {
      icon: 'lock',
      title: 'Secure And Private',
      text: 'Every session runs on 256-bit SSL encryption, and 98% of assets stay in offline cold storage.',
    },
  ],
  experience: {
    kicker: 'The trading experience',
    title: 'The Dusk Fundgrove Trading Experience',
    text: 'Everything you need to trade with confidence, engineered into one calm, fast platform.',
    points: [
      'Live portfolio tracking with every position and allocation updating in real time',
      'Pro-grade charts with 80+ indicators to help time your entries',
      'Instant orders on Bitcoin, Ethereum and 300+ other markets',
      'Secure custody with 98% cold storage and two-factor protection',
    ],
  },
}

export const STATS = [
  { value: '92%', label: 'AI signal accuracy' },
  { value: '98%', label: 'of assets held in cold storage' },
  { value: '4.8/5', label: 'rated by 213 investors', hl: true },
  { value: '24/7', label: 'professional assistance' },
]

export const ABOUT = {
  kicker: 'Meet Dusk Fundgrove',
  title: 'One Secure Platform For Trading Every Hour Of The Day',
  text: 'Dusk Fundgrove brings together an advanced AI-driven trading engine, institutional-grade security and an interface anyone can master. Whether you are buying your first Bitcoin or diversifying across 300+ instruments, your capital stays covered long after the sun goes down.',
  points: [
    'AI-assisted market signals with 92% accuracy',
    'Beginner-friendly, with no prior trading experience required',
    'Bank-grade security with 256-bit encryption',
    'Full control. Deposit, trade and withdraw at any time',
  ],
}

export const ASSETS = {
  kicker: 'Global markets, one account',
  title: "Trade The World's Biggest Markets From One Simple Account",
  text: 'Trade the coins investors trust most, alongside equities, forex, commodities and precious metals. All from a single Dusk Fundgrove account.',
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
  kicker: 'How Dusk Fundgrove works',
  title: 'Three Simple Steps To Your First Trade',
  steps: [
    {
      icon: 'user',
      title: 'Create Your Free Account',
      text: 'Sign up in under two minutes with your name, email and phone number. No experience needed. Your account manager guides you from day one.',
    },
    {
      icon: 'wallet',
      title: 'Fund Your Account',
      text: 'Deposit securely by major credit card, bank transfer or PayPal. Your funds are protected the moment they arrive.',
    },
    {
      icon: 'sparkle',
      title: 'Trade With AI At Your Side',
      text: 'Follow AI-generated signals, mirror experienced investors or build your own portfolio. Desktop or mobile, day or night.',
    },
  ],
}

export const JOIN = {
  kicker: 'Start today',
  title: 'Open Your Account And Trade The Night Session',
  text: 'Opening an account takes less than two minutes. Explore the market with AI-powered insight and see why investors across Australia are choosing Dusk Fundgrove.',
  points: [
    'Free registration. No hidden fees to open an account',
    'AI-driven signals with a 92% accuracy rate',
    'Withdraw your funds whenever you want',
  ],
}

export const CALCULATOR = {
  title: 'Earnings Calculator',
  subtitle: 'See Your Estimated Potential',
  depositLabel: 'Deposit Amount',
  balanceLabel: 'Potential Future Balance',
  monthlyLabel: 'Estimated Monthly Earnings',
  disclaimer:
    'Illustrative projection based on an 8.2% monthly rate over 12 months. Trading involves significant risk. Projections are not a guarantee of profit.',
}

export const BENEFITS = {
  kicker: 'Why investors choose us',
  title: 'What Makes Dusk Fundgrove The Smart Choice?',
  text: 'From AI-powered precision to beginner-friendly tools, Dusk Fundgrove is built to give every investor an edge.',
  items: [
    {
      icon: 'bolt',
      title: 'AI-Powered Market Engine',
      text: 'Our AI scans global markets around the clock, surfacing signals with a 92% accuracy rate.',
    },
    {
      icon: 'copy',
      title: 'Copy Trading',
      text: 'Mirror the moves of experienced, profitable investors automatically, with a single click.',
    },
    {
      icon: 'pie',
      title: 'Fractional Shares',
      text: 'Start small. Own fractions of high-value assets and grow your position over time.',
    },
    {
      icon: 'book',
      title: 'Educational Resources',
      text: 'Beginner guides, market explainers and strategy courses, all at your own pace.',
    },
    {
      icon: 'device',
      title: 'Mobile App And Multi-Device',
      text: 'Trade across desktop, tablet and mobile. Your account stays in sync everywhere.',
    },
    {
      icon: 'headset',
      title: '24/7 Human Support',
      text: 'Real people, real answers, around the clock, every day of the year.',
    },
  ],
}

export const OVERVIEW = {
  kicker: 'Platform overview',
  title: 'The Platform At A Glance',
  text: 'Everything you need to know about Dusk Fundgrove at a glance.',
  rows: [
    { label: 'Technology', value: 'AI-powered trading engine' },
    { label: 'Accuracy', value: '92%' },
    { label: 'Security', value: '256-bit SSL encryption · 98% cold storage' },
    { label: 'Funding Methods', value: 'Credit cards, bank transfers and PayPal' },
    { label: 'Trading Instruments', value: 'Equities, forex, commodities, precious metals, CFDs and crypto' },
    { label: 'Account Setup', value: 'Fast, guided onboarding' },
    { label: 'Compatibility', value: 'Desktop, tablet and mobile' },
    { label: 'Support', value: '24/7 support from real people' },
  ],
}

export const RATING = { score: '4.8', stars: 5, meta: 'based on 213 reviews' }

export const TESTIMONIALS = {
  kicker: 'Testimonials',
  title: 'Real Words From Real Investors',
  text: 'Hear from investors across Australia who made the switch to Dusk Fundgrove.',
  items: [
    {
      name: 'Liam P.',
      place: 'Townsville, Australia',
      text: "I work nights, so I miss most of the trading day. Dusk Fundgrove's AI does the watching for me. Signals land in my pocket and my account manager checks in when something big moves. Six months in and my portfolio is steadily up.",
      stars: 5,
    },
    {
      name: 'Hannah G.',
      place: 'Wollongong, Australia',
      text: 'The copy trading won me over. I mirror two experienced investors, check my phone on the train, and withdrawals arrive within a couple of days. Clean, quick and quiet. Exactly what I wanted.',
      stars: 5,
    },
    {
      name: 'Daniel K.',
      place: 'Bendigo, Australia',
      text: 'Security was the thing keeping me out of crypto. 98% cold storage and two-factor on every withdrawal finally got me over the line. Eight months on Dusk Fundgrove and not one moment of worry.',
      stars: 5,
    },
    {
      name: 'Priya N.',
      place: 'Toowoomba, Australia',
      text: 'I started from zero with the free courses and a $250 deposit. The mobile app is genuinely easy on the eyes at 1am, and the learning library got me reading charts within a few weeks.',
      stars: 4,
    },
    {
      name: 'Jack W.',
      place: 'Launceston, Australia',
      text: 'I messaged support at 2am with a funding question and a real person replied in minutes. That is when I decided to stay. The platform is smooth, but the human support is the reason I recommend it.',
      stars: 5,
    },
    {
      name: 'Olivia F.',
      place: 'Ballarat, Australia',
      text: 'The accuracy claims sounded too good, so I started small. My results have tracked the projections closely enough that I have since moved my main portfolio across. The calculator on the site is surprisingly honest.',
      stars: 5,
    },
  ],
}

export const SECURITY = {
  kicker: 'Security first',
  title: 'Bank-Grade Protection, Round The Clock',
  text: 'We built Dusk Fundgrove on one principle: your assets and your data deserve bank-grade protection at every hour, every day.',
  bigStat: '98%',
  bigStatLabel: 'of assets held in offline cold wallets with no internet connection',
  items: [
    {
      icon: 'lock',
      title: '256-Bit SSL Encryption',
      text: 'Every connection and transaction is protected with the same encryption standard used by global banks.',
    },
    {
      icon: 'shield',
      title: 'Two-Factor Authentication',
      text: 'An extra layer of protection on every login and every withdrawal request.',
    },
    {
      icon: 'scale',
      title: 'KYC And AML Compliant',
      text: 'We verify every account to keep the platform free of fraud and financial crime.',
    },
    {
      icon: 'wallet',
      title: 'Segregated Accounts',
      text: 'Client funds are held separately from company operating funds, always.',
    },
  ],
}

export const CAPABILITIES = {
  kicker: 'Inside the toolkit',
  title: 'Inside The Dusk Toolkit',
  text: 'A full toolkit, engineered for the overnight session.',
  items: [
    {
      icon: 'chart',
      title: 'Advanced Charting',
      text: 'Professional-grade charts with live data and 80+ indicators.',
    },
    {
      icon: 'bolt',
      title: 'Real-Time AI Signals',
      text: 'Entry and exit signals delivered the moment opportunities appear.',
    },
    {
      icon: 'copy',
      title: 'One-Click Copy Trading',
      text: 'Replicate top-performing strategies automatically.',
    },
    {
      icon: 'device',
      title: 'Multi-Device Sync',
      text: 'Start on desktop, finish on mobile. Perfectly in sync.',
    },
    {
      icon: 'pie',
      title: 'Portfolio Analytics',
      text: 'Track performance, risk and allocation in one dashboard.',
    },
    {
      icon: 'globe',
      title: '300+ Global Markets',
      text: 'Crypto, equities, forex, commodities and more in one place.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Start Your Journey With Dusk Fundgrove',
  text: 'Create your free account today and see why investors across Australia trade the night session with Dusk Fundgrove.',
  trust: '256-bit SSL encryption · Free registration · Withdraw anytime',
}

export const FAQS = [
  {
    q: 'What Is Dusk Fundgrove?',
    a: 'Dusk Fundgrove is an AI-powered trading platform where you can trade Bitcoin, Ethereum and 300+ other assets, including equities, forex, commodities and CFDs, from one secure account. It is built for beginners and experienced investors alike.',
  },
  {
    q: 'How Do I Get Started With Dusk Fundgrove?',
    a: 'Create a free account with your name, email and phone number. Once your account is verified, fund it by credit card, bank transfer or PayPal and start trading right away.',
  },
  {
    q: 'Is Dusk Fundgrove Safe?',
    a: 'Yes. Dusk Fundgrove protects your assets with 256-bit SSL encryption, two-factor authentication and cold storage. 98% of assets are held in offline wallets with no internet connection. We are also fully KYC/AML compliant.',
  },
  {
    q: 'What Assets Can I Trade On Dusk Fundgrove?',
    a: 'You can trade major cryptocurrencies like Bitcoin, Ethereum, Solana and Dogecoin, as well as equities, forex pairs, commodities, precious metals and CFDs. Over 300 instruments in total.',
  },
  {
    q: 'Do I Need Trading Experience To Use Dusk Fundgrove?',
    a: 'Not at all. The platform is built for beginners. AI signals, copy trading and the learning library do the heavy lifting while you learn at your own pace.',
  },
  {
    q: 'How Do I Withdraw My Funds?',
    a: 'Request a withdrawal at any time from your account dashboard. Withdrawals are processed quickly and sent back to your registered payment method.',
  },
  {
    q: 'What Does It Cost To Open An Account?',
    a: 'Nothing. Registration is free and there are no hidden fees to open an account. Once verified, you fund your account at your own pace and trade whenever you are ready.',
  },
]

export const FOOTER = {
  blurb:
    'Dusk Fundgrove is an AI-powered multi-asset trading platform offering cryptocurrencies, equities, forex and more, with 256-bit encryption and 98% cold storage.',
  navTitle: 'Company',
  legalTitle: 'Legal',
  contactTitle: 'Contact',
  contact: [
    { icon: 'mail', text: SUPPORT_EMAIL },
    { icon: 'clock', text: 'Support available 24/7' },
    { icon: 'globe', text: 'Now available in Australia' },
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
