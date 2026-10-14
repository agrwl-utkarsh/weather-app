/*!
 * Register Page
 * White and Red-Black Theme
 * Email Registration Form
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="border-b border-red-500/10 px-4 py-3 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-red-500 hover:text-red-700 transition-colors">
            Weather™
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link href="/features" className="text-sm text-gray-600 hover:text-black transition-colors">Features</Link>
            <Link href="/download" className="text-sm text-gray-600 hover:text-black transition-colors">Download</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-black transition-colors">Docs</Link>
          </div>
        </div>
      </nav>

      <header className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-black opacity-10"></div>

        <div className="max-w-md mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            Register with Email
          </h1>

          <p className="text-lg text-red-500 max-w-xl mb-12">
            Create your free account in under 30 seconds. Get immediate access to the
            weather app, including the Android APK download.
          </p>

          <div className="bg-white p-8 rounded-xl max-w-md mx-auto shadow-xl border border-red-500/20">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-red-500/50 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                  placeholder="you@email.com"
                  aria-label="Email address"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-red-500/50 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-colors"
                  placeholder="Enter your password"
                  aria-label="Password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white font-medium py-3 rounded-xl text-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/20"
                aria-label="Register account"
              >
                Register Account
              </button>

              <p className="text-sm text-gray-500">
                By registering, you agree to our <Link href="#" className="font-medium text-red-500 hover:text-black transition-colors">Terms of Service</Link>
                and <Link href="#" className="font-medium text-red-500 hover:text-black transition-colors">Privacy Policy</Link>.
                <br />
                <br />
                Already have an account? <Link href="/" className="font-medium text-red-500 hover:text-black transition-colors">Sign in</Link>
                instead.
              </p>
            </form>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid max-w-6xl mx-auto grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
              Why Register?
            </h2>

            <ul className="list-disc list-inside text-gray-500 space-y-3">
              <li>
                <span className="font-medium">Immediate APK access:</span>
                Download the Android APK after email verification
              </li>
              <li>
                <span className="font-medium">Personalized experience:</span>
                Save your favorite weather locations and settings
              </li>
              <li>
                <span className="font-medium">Offline caching:</span>
                Your forecast data is saved for offline viewing
              </li>
              <li>
                <span className="font-medium">Cross-device sync:</span>
                Your customizations sync across web and mobile
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Security</h2>

            <ul className="list-disc list-inside text-gray-500 space-y-2">
              <li>
                <strong>Email verification required:</strong>
                All accounts must verify before APK download
              </li>
              <li>
                <strong>No spam:</strong>
                We promise not to share your email with third parties
              </li>
              <li>
                <strong>Data privacy:</strong>
                Your weather location data is stored locally on your device
              </li>
              <li>
                <strong>Secure transmission:</strong>
                All data is encrypted in transit via HTTPS
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Beta Access</h2>

            <p className="text-gray-500 mb-4">
              Registered users get early access to new features including:
            </p>

            <ul className="list-disc list-inside text-gray-500 space-y-2">
              <li>PC widget (next phase)</li>
              <li>Enhanced customization options</li>
              <li>New weather data sources</li>
              <li>Community feedback influence</li>
            </ul>

            <p className="text-sm text-gray-500 mt-4">
              Limited beta spots available. Register now to secure your place!
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-red-500/10 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Weather™ 2026 • Register for free • Weather App Beta
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}