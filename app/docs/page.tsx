/*!
 * Documentation Page
 * Dot Matrix Red Aesthetic
 * Docs for the Weather™ App
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dot matrix background */}
      <div className="absolute inset-0 bg-gray-900/30 -z-10"></div>

      <nav className="border-b border-gray-700 fg-muted py-2.5 fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-14">
          <Link href="/" className="text-2xl font-bold text-red-500 tracking-wider">
            Weather™
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/download" className="hover:text-white transition-colors">Download</Link>
            <Link href="/register" className="text-red-500 hover-red-400 transition-colors">Register</Link>
          </div>
        </div>
      </nav>

      <header className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight mb-4 text-red-500">
            Documentation
          </h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Guides, API references, and getting started documentation for the Weather™ app.
          </p>
        </div>
      </header>

      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose lg:prose-xl max-w-2xl mx-auto text-white">
            <h1 className="text-3xl md:text-4xl font-bold border-b border-gray-700 border-b-2 text-white pb-4 mb-6 neon-glow">
              Getting Started Documentation
            </h1>

            <h2 className="text-2xl font-bold text-white mb-4">Installation</h2>

            <h3 className="text-xl font-medium text-white mb-3">Web App</h3>
            <p className="text-white/50 mb-4">
              No installation required. Visit the website and register with your email
              address to start using the weather app immediately. Dot matrix forecasts
              load instantly.
            </p>

            <h3 className="text-xl font-medium text-white mb-3">Android APK</h3>
            <p className="text-white/50 mb-4">
              1. Register with your email address on the website<br />
              <br />
              2. Verify your email address<br />
              <br />
              <br />
              3. Click the download link to get the Android APK<br />
              <br />
              <br />
              4. Enable 'Unknown Sources' in Android settings if prompted<br />
              <br />
              <br />
              5. Install the APK and enjoy the weather app with dot matrix forecasts
            </p>

            <details className="card-dotmatrix p-4 border rounded-md mb-6">
              <summary className="text-red-500 font-medium cursor-pointer text-sm uppercase tracking-wider">
                Troubleshooting APK Installation
              </summary>
              <ul className="space-y-3 text-white/50">
                <li>
                  <strong>Installation blocked:</strong> Go to Settings → Security →
                  'Unknown Sources' and enable it
                </li>
                <li>
                  <strong>App won't open:</strong> Verify your email address first,
                  then retry the installation
                </li>
                <li>
                  <strong>Missing features:</strong> Ensure you have the latest version
                  by re-downloading from the website
                </li>
              </ul>
            </details>

            <h2 className="text-2xl font-bold text-white mb-4">Configuration</h2>

            <h3 className="text-xl font-medium text-white mb-3">Environment Variables</h3>
            <p className="text-white/50 mb-4">
              To use the full weather functionality, add your OpenWeatherMap API key to
              your .env.local file:
            </p>

            <div className="bg-gray-800 p-4 rounded-md mb-6 code-font">
              <code className="text-red-500">NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here</code>
            </div>

            <h3 className="text-xl font-medium text-white mb-3">Available Scripts</h3>
            <ul className="space-y-3 text-white/50">
              <li>
                <code className="text-red-500">npm run dev</code> - Starts the development server
              </li>
              <li>
                <code className="text-red-500">npm run build</code> - Builds the app for production
              </li>
              <li>
                <code className="text-red-500">npm start</code> - Starts the production server
              </li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">API Integration</h3>
            <p className="text-white/50 mb-4">
              The app uses OpenWeatherMap API for weather data. The following endpoints
              are supported:
            </p>

            <ul className="space-y-3 text-white/50">
              <li>
                <strong className="text-red-500">Current Weather:</strong>
                City name + API key
              </li>
              <li>
                <strong className="text-red-500">5-Day Forecast:</strong>
                City name + API key
              </li>
              <li>
                <strong className="text-red-500">Timezone Data:</strong>
                Included in response for local time conversion
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Customization</h2>

            <p className="text-white/50 mb-4">
              The Weather™ App is highly customizable. Here's how to modify the appearance:
            </p>

            <ul className="space-y-3 text-white/50">
              <li>
                <strong className="text-red-500">Theme Colors:</strong>
                Modify the Tailwind config to change the accent color (#ff0000), text color (#ffffff), and background (#0a0a0a)
              </li>
              <li>
                <strong className="text-red-500">Font:</strong>
                Update the fontFamily in tailwind.config.ts. Currently set to system-ui with fallback.
              </li>
              <li>
                <strong className="text-red-500">Radius:</strong>
                Border radius can be adjusted in the config (currently 0px for flat design, or 24px for rounded cards).
              </li>
              <li>
                <strong className="text-red-500">Colors:</strong>
                The current palette:
                <br />
                <br />
                <span className="inline-block bg-red-500 text-black px-2 py-1 rounded">Accent: #ff0000</span>
                <span className="inline-block bg-gray-900 px-2 py-1 rounded">Background: #0a0a0a</span>
                <span className="text-white">Text: #ffffff</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Support</h2>

            <ul className="space-y-3 text-white/50">
              <li>
                For help, email <a href="mailto:support@weather.app" className="text-red-500 hover-red-400 transition-colors">support@weather.app</a>
                or visit the support forum on the website
              </li>
              <li>
                Response time: Within 48 hours for registered users
              </li>
              <li>
                Average resolution time: 24 hours for common issues
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <div>
            <span className="text-red-500">Weather™</span> 2026
          </div>
          <div>Dot Matrix Weather App</div>
          <div>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}