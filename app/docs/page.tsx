/*!
 * Documentation Page
 * White and Red-Black Theme
 * Docs for the Weather App
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DocsPage() {
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
          </div>
        </div>
      </nav>

      <header className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-black opacity-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            Documentation
          </h1>

          <p className="text-lg md:text-xl text-red-500 max-w-2xl mx-auto mb-12">
            Guides, API references, and getting started documentation for the Weather App.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="bg-white text-red-500 font-medium px-8 py-3 rounded-full text-lg border border-red-500 hover:bg-red-50/10 transition-colors">
              Download APK
            </Link>
            <Link href="/features" className="bg-red-500 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-colors">
              Features Guide
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="prose lg:prose-xl max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-red-500 mb-6 border-b border-red-500/20 pb-4">
            Getting Started Documentation
          </h1>

          <h2 className="text-2xl font-bold text-black mb-4">Installation</h2>

          <h3 className="text-xl font-medium text-black mb-3">Web App</h3>
          <p className="text-gray-500 mb-4">
            No installation required. Visit the website and register with your email
            address to start using the weather app immediately.
          </p>

          <h3 className="text-xl font-medium text-black mb-3">Android APK</h3>
          <p className="text-gray-500 mb-4">
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
            5. Install the APK and enjoy the weather app
          </p>

          <details className="bg-white/50 backdrop-blur-sm p-4 rounded-md mb-6">
            <summary className="text-red-500 font-medium cursor-pointer">
              Troubleshooting APK Installation
            </summary>
            <ul className="list-disc list-inside text-gray-500 space-y-2">
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

          <h2 className="text-2xl font-bold text-black mb-4">Configuration</h2>

          <h3 className="text-xl font-medium text-black mb-3">Environment Variables</h3>
          <p className="text-gray-500 mb-4">
            To use the full weather functionality, add your OpenWeatherMap API key to
            your .env.local file:
          </p>

          <div className="bg-gray-50 p-4 rounded-md mb-6 code-font">
            <code>NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here</code>
          </div>

          <h3 className="text-xl font-medium text-black mb-3">Available Scripts</h3>
          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>
              <code>npm run dev</code> - Starts the development server
            </li>
            <li>
              <code>npm run build</code> - Builds the app for production
            </li>
            <li>
              <code>npm start</code> - Starts the production server
            </li>
          </ul>

          <h3 className="text-xl font-medium text-black mb-3">API Integration</h3>
          <p className="text-gray-500 mb-4">
            The app uses OpenWeatherMap API for weather data. The following endpoints
            are supported:
          </p>

          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>
              <strong>Current Weather:</strong> City name + API key
            </li>
            <li>
              <strong>5-Day Forecast:</strong> City name + API key
            </li>
            <li>
              <strong>Timezone Data:</strong> Included in response for local time conversion
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Customization</h2>

          <p className="text-gray-500 mb-4">
            The Weather App is highly customizable. Here's how to modify the appearance:
          </p>

          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>
              <strong>Theme Colors:</strong> Modify the Tailwind config to change the
              accent color (#ff0000), text color (#000000), and background (#ffffff)
            </li>
            <li>
              <strong>Font:</strong> Update the fontFamily in tailwind.config.ts.
              Currently set to 'Inter' with system-ui fallback
            </li>
            <li>
              <strong>Radius:</strong> Border radius can be adjusted in the config
              (currently 0px for flat design, or 24px for rounded cards)
            </li>
            <li>
              <strong>Colors:</strong> The current palette:
              <br />
              <br />
              <span className="bg-red-500 text-white px-2 py-1 rounded">Accent: #ff0000</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Background: #ffffff</span>
              <span className="text-black">Text: #000000</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-black mb-4">Support</h2>

          <ul className="list-disc list-inside text-gray-500 space-y-2">
            <li>
              For help, email support@weatherapp.com or visit the support forum on
              the website
            </li>
            <li>
              Response time: Within 48 hours for registered users
            </li>
            <li>
              Average resolution time: 24 hours for common issues
            </li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-red-500/10 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Weather™ 2026 • Documentation • Built with Next.js 14, React 18, Tailwind CSS
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