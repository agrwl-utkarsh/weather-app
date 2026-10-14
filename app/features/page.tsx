/*!
 * Features Page
 * Dot Matrix Red Aesthetic
 * Highly Customizable Weather Experience
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Feature cards data
const featureCards = [
  {
    id: 'forecast',
    title: '5-DAY FORECAST',
    subtitle: 'DOT MATRIX PRECISION',
    desc: 'Detailed 5-day forecast with timezone-aware data, day/night dot matrix icons, and temperature ranges in your choice of units.',
  },
  {
    id: 'current',
    title: 'CURRENT CONDITIONS',
    subtitle: 'REAL-TIME DATA',
    desc: 'Real-time weather with location detection, humidity, wind speed, visibility, and atmospheric pressure - all displayed in customizable dot matrix format.',
  },
  {
    id: 'customize',
    title: 'HIGHLY CUSTOMIZABLE',
    subtitle: 'YOUR WEATHER YOUR WAY',
    desc: 'Choose exactly what you see: temperature units (C/F), wind speed (km/h,mph), visibility (km,miles), forecast display mode, card radius, color scheme, and more.',
  },
  {
    id: 'pwa',
    title: 'PWA & OFFLINE',
    subtitle: 'SERVICE WORKER CACHED',
    desc: 'Dot matrix forecasts cached via service worker for offline viewing. Install as desktop widget (Windows/macOS) or mobile PWA (Android/iOS).',
  },
  {
    id: 'platforms',
    title: 'CROSS-PLATFORM',
    subtitle: 'EVERYWHERE',
    desc: 'Web app (this site), Android APK (downloadable), and PC widget (next phase). One experience, all devices, dot matrix style throughout.',
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <nav className="border-b border-gray-700 py-2.5 fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-14">
          <Link href="/" className="text-2xl font-bold text-red-500 tracking-wider">
            Weather™
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/download" className="hover:text-white transition-colors">Download</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/register" className="text-red-500 hover-red-400 transition-colors">Register</Link>
          </div>
        </div>
      </nav>

      <header className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight mb-4 text-red-500">
            Highly Customizable{' '}
            <span className="italic text-red-400">Weather Experience</span>
          </h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Choose exactly how you want to see your weather - from the data points to the display format, everything is configurable with dot matrix precision.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold border-b border-gray-700 border-b-2 text-white pb-3 mb-8 neon-glow">
              Features Overview
            </h2>

            <div className="space-y-6">
              {featureCards.map((card) => (
                <div key={card.id} className="card-dotmatrix p-6 border-b border-gray-700 last:border-0 last:pb-0 hover:bg-gray-800 transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                      <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        {card.id === 'forecast' && <path d="M14 2H6a2 2 0 0 0-2 2v7h12V8a2 2 0 0 0-2-2zm4 12h-2v-2h2v2zm0-4h-2V8h2v4z" />}
                        {card.id === 'current' && <circle cx="12" cy="12" r="10" />}
                        {card.id === 'customize' && <rect x="6" y="6" width="12" height="12" rx="2" ry="2" />}
                        {card.id === 'pwa' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v8c0 6 8 10 8 10z" />}
                        {card.id === 'platforms' && <line x1="3" y1="15" x2="21" y2="15" />}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-white mb-1">{card.title}</h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-base text-white/70 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-4 neon-glow">Why Our App?</h3>
              <ul className="space-y-3 text-white/70">
                <li>
                  <span className="font-medium text-red-400">Real-time accuracy:</span>
                  OpenWeatherMap integration with proper timezone handling and dot matrix precision
                </li>
                <li>
                  <span className="font-medium text-red-400">Offline ready:</span>
                  PWA service worker caches data for offline viewing in dot matrix format
                </li>
                <li>
                  <span className="font-medium text-red-400">Cross-platform:</span>
                  Web, Android, and PC widget integration with consistent dot matrix aesthetic
                </li>
                <li>
                  <span className="font-medium text-red-400">Customizable:</span>
                  Every aspect of the display is configurable - you choose what you see
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-4 neon-glow">Get Started</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/70">
                <li>Register with your email address</li>
                <li>Download the Android APK or use the web app</li>
                <li>Customize your weather view in seconds</li>
                <li>Enable offline caching for uninterrupted access</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}