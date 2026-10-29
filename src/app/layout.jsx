import { Public_Sans, Roboto_Mono } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from './ScrollToTop'
import { SITE_NAME, SITE_URL } from '@/data/content'
import '@/styles/global.css'

// Static instances instead of the full variable axes - variable files
// are heavy and slow LCP. display=optional: no font swap after first
// paint, so no CLS (matches the old Google Fonts setup).
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'optional' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['500', '700'], display: 'optional' })

const DEFAULT_TITLE = 'Dusk Fundgrove - AI-Assisted Trading Platform | Australia'
const DEFAULT_DESCRIPTION =
  'Dusk Fundgrove runs your trading desk through the night with AI signals, bank-grade custody and 24/7 human support. Create your free account today.'
const DEFAULT_KEYWORDS =
  'Dusk Fundgrove, AI trading platform, crypto trading Australia, buy Bitcoin Australia, Ethereum trading, overnight trading, evening trading desk'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: '%s' },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
  verification: { google: '8ACXhZd-j2fRfB5kYwR_TEhSKA1DXPNEjlhNR_2dMsY' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'Dusk Fundgrove - AI-Assisted Trading Platform',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: '/og-image-v4.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dusk Fundgrove - AI-Assisted Trading Platform',
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image-v4.png'],
  },
}

export const viewport = { themeColor: '#faf6ec' }

const GA_ID = 'G-RL9GPYQVGX'

// Simple Organization + WebSite schema: no rating data, so no
// review-snippet validation is triggered.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}favicon.svg`,
      email: 'support@dusk-fundgrove-platform.com',
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${publicSans.variable} ${robotoMono.variable}`}>
      <body>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', '${GA_ID}');`}
        </Script>
        {/* ARD: AI agents discover the catalog via this link */}
        <link rel="ai-catalog" href="/.well-known/ai-catalog.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
