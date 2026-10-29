import ComingSoon from '@/components/ComingSoon'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Our Team - The People Behind Dusk Fundgrove',
  description: 'Meet the trading, engineering and support professionals behind Dusk Fundgrove.',
  alternates: { canonical: `${SITE_URL}team` },
}

export default function Team() {
  return (
    <ComingSoon
      title="Our Team"
      description="Profiles of the traders, engineers and support professionals behind Dusk Fundgrove are on the way."
    />
  )
}
