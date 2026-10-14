/*!
 * Weather™ Landing Page
 */

import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const features = [
  { id: 'f1', title: 'See Your Weather', subtitle: 'How You Choose To', desc: 'Fully customizable interface.' },
  { id: 'f2', title: 'Real-Time Accuracy', subtitle: 'OpenWeatherMap', desc: 'Precise forecasts with timezone-aware data.' },
  { id: 'f3', title: 'Cross-Platform', subtitle: 'Web & Mobile', desc: 'Web, Android APK, and PC widget.' },
  { id: 'f4', title: 'Offline Mode', subtitle: 'PWA Cached', desc: 'Cached forecasts for offline viewing.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <nav className="border-b border-red-500/10 px-4 py-3 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-red-500 hover:text-red-700 transition-colors">
            Weather™
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/features" className="text-sm text-gray-600 hover:text-black transition-colors">Features</Link>
            <Link href="/download" className="text-sm text-gray-600 hover:text-black transition-colors">Download</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-black transition-colors">Docs</Link>
            <Link href="/register" className="text-red-500 hover:text-red-500 transition-colors">Register</Link>
          </div>
        </div>
      </nav>

      <header className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-black opacity-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            See Your Weather{' '}
            <span className="italic">How You Choose To</span>
          </h1>

          <p className="text-lg md:text-xl text-red-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Highly customizable weather experience across web, mobile, and desktop.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-red-500 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-colors">
              Register with Email
            </Link>
            <Link href="/features" className="bg-white text-red-500 font-medium px-8 py-3 rounded-full text-lg border border-red-500 hover:bg-red-50/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </header>

      <main className="py-20 px-4 max-w-7xl mx-auto">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
            Why Choose Our Weather App?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.id} className="p-6 border-rounded bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                <div className="text-red-500 text-4xl mb-3">{feature.id}</div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
            Download Android APK
          </h2>

          <div className="text-center">
            <p className="text-gray-500 mb-6">
              Get the Android APK to enjoy weather on your mobile device. The app is
              lightweight, fast, and works offline thanks to the Progressive Web App
              technology.
            </p>

            <div className="inline-flex gap-3">
              <a
                href="#"
                className="bg-red-500 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <line x1="12" y1="19" x2="12" y2="18" />
                  <line x1="12" y1="15" x2="12.01" y2="15" />
                </svg>
                Download APK
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              No account? <Link href="/register" className="font-medium text-red-500 hover:text-black transition-colors">Register now</Link>
              in under 30 seconds.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
            Documentation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-rounded bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <h3 className="text-xl font-medium mb-3">Getting Started</h3>
              <ul className="text-gray-500 space-y-2">
                <li>Register with email</li>
                <li>Download APK or use web app</li>
                <li>Customize your weather view</li>
                <li>Enable offline caching</li>
              </ul>
            </div>

            <div className="p-6 border-rounded bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <h3 className="text-xl font-medium mb-3">API Integration</h3>
              <ul className="text-gray-500 space-y-2">
                <li>OpenWeatherMap API key required</li>
                <li>CORS configured for openweathermap.org</li>
                <li>Standalone output for PWA</li>
                <li>Service worker for caching</li>
              </ul>
            </div>

            <div className="p-6 border-rounded bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <h3 className="text-xl font-medium mb-3">Customization</h3>
              <ul className="text-gray-500 space-y-2">
                <li>Theme: white and red-black</li>
                <li>Font: Inter with system-ui fallback</li>
                <li>Colors: accent #ff0000, text #000000</li>
                <li>Radius: 0px (fully customizable)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-red-500/10 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Weather™ 2026 • Built with Next.js 14, React 18, and Tailwind CSS
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