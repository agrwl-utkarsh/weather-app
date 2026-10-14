/*!
 * Features Page
 * White and Red-Black Theme
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const featureCards = [
  {
    id: 'forecast',
    title: '5-Day Forecast',
    description: 'Detailed forecast with timezone-aware data, day/night icons, and temperature ranges.',
  },
  {
    id: 'current',
    title: 'Current Conditions',
    description: 'Real-time weather with location detection, humidity, wind, and atmospheric data.',
  },
  {
    id: 'customizable',
    title: 'Highly Customizable',
    description: 'Choose what you see: temperature units, wind speed, visibility, and forecast display mode.',
  },
  {
    id: 'pwa',
    title: 'PWA & Offline',
    description: 'Service worker caches forecasts for offline viewing. Install as desktop widget or mobile app.',
  },
  {
    id: 'multi-platform',
    title: 'Cross-Platform',
    description: 'Web app, Android APK (coming soon), and PC widget (next phase). One experience, all devices.',
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="border-b border-red-500/10 px-4 py-3 fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-red-500 hover:text-red-700 transition-colors">
            Weather™
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
            <Link href="/download" className="text-sm text-gray-600 hover:text-black transition-colors">Download</Link>
            <Link href="/docs" className="text-sm text-gray-600 hover:text-black transition-colors">Docs</Link>
          </div>
        </div>
      </nav>

      <header className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-black opacity-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            Highly Customizable{' '}
            <span className="italic text-red-500">Weather Experience</span>
          </h1>

          <p className="text-lg md:text-xl text-red-500 max-w-2xl mx-auto mb-12">
            Choose exactly how you want to see your weather - from the data points to the
            display format, everything is configurable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="bg-white text-red-500 font-medium px-8 py-3 rounded-full text-lg border border-red-500 hover:bg-red-50/10 transition-colors">
              Download APK
            </Link>
            <Link href="/features" className="bg-red-500 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-colors">
              View Features
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid max-w-6xl mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
              Features Overview
            </h2>

            <div className="space-y-4">
              {featureCards.map((card) => (
                <div key={card.id} className="p-6 border-rounded bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                  <h3 className="text-xl font-medium text-red-500 mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Why Our App?</h3>
              <ul className="space-y-3 text-gray-500">
                <li>
                  <span className="font-medium">Real-time accuracy:</span>
                  OpenWeatherMap integration with proper timezone handling
                </li>
                <li>
                  <span className="font-medium">Offline ready:</span>
                  PWA service worker caches data for offline viewing
                </li>
                <li>
                  <span className="font-medium">Cross-platform:</span>
                  Web, Android, and future PC widget integration
                </li>
                <li>
                  <span className="font-medium">Customizable:</span>
                  Every aspect of the display is configurable
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Get Started</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-500">
                <li>Register with your email address</li>
                <li>Download the Android APK or use the web app</li>
                <li>Customize your weather view in seconds</li>
                <li>Enable offline caching for uninterrupted access</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-red-500/10 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Weather™ 2026 • Built with Next.js 14, React 18, Tailwind CSS
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