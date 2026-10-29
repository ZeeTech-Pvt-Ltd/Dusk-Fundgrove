import ComingSoon from '@/components/ComingSoon'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Offer - What You Get with Dusk Fundgrove',
  description: 'See what is included with a Dusk Fundgrove account: AI signals, education, 24/7 support and more.',
  alternates: { canonical: `${SITE_URL}offer` },
}

export default function Offer() {
  return (
    <ComingSoon
      title="The Dusk Fundgrove Offer"
      description="The full breakdown of what every Dusk Fundgrove account includes is coming in the next iteration."
    />
  )
}
