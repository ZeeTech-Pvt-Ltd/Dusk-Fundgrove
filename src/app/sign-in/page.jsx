import SignInForm from './SignInForm'
import { SITE_URL } from '@/data/content'

export const metadata = {
  title: 'Sign In - Dusk Fundgrove Client Area',
  description: 'Sign in to your Dusk Fundgrove account to access your trading dashboard.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}sign-in` },
}

export default function SignIn() {
  return (
    <section className="auth-wrap">
      <div className="container">
        <SignInForm />
      </div>
    </section>
  )
}
