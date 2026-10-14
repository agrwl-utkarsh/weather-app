/*!
 * Download Page
 * White and Red-Black Theme
 * Android APK Download Section
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DownloadPage() {
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
            <Link href="/docs" className="text-sm text-gray-600 hover:text-black transition-colors">Docs</Link>
          </div>
        </div>
      </nav>

      <header className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-black opacity-10"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
            Download Android APK
          </h1>

          <p className="text-lg md:text-xl text-red-500 max-w-2xl mx-auto mb-12">
            Get the weather app on your Android device. Lightweight, fast, and works
            offline thanks to Progressive Web App technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white text-red-500 font-medium px-8 py-3 rounded-full text-lg border border-red-500">
              <svg
                className="h-5 w-5 mr-2 text-red-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
                <line x1="12" y1="15" x2="12.01" y2="15" />
              </svg>
              Download Now
            </div>
            <Link href="/register" className="bg-red-500 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 transition-colors">
              Register First
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">
              No account yet? <Link href="/register" className="font-medium text-red-500 hover:text-black transition-colors">Register in under 30 seconds</Link>
            </p>
            <p className="text-xs text-gray-400">
              The APK will be available after registration. For now, you can explore
              the web app features immediately.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid max-w-6xl mx-auto grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
              How to Install the APK
            </h2>

            <ol className="list-decimal list-inside space-y-4 text-gray-500">
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                  </svg>
                  <div>
                    <div className="font-medium">1. Register</div>
                    <div>Create your free account with email</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <div>
                    <div className="font-medium">2. Verify Email</div>
                    <div>Check your inbox for the verification link</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M10 9l6 6 6-6" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                  </svg>
                  <div>
                    <div className="font-medium">3. Download</div>
                    <div>Click the download link to get the Android APK</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M4 7h16" />
                    <line x1="10" y1="11" x2="10.01" y2="11" />
                    <line x1="14" y1="11" x2="14.01" y2="11" />
                  </svg>
                  <div>
                    <div className="font-medium">4. Install</div>
                    <div>Enable 'Unknown Sources' if prompted, then install</div>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-12 border-b border-red-500/20 pb-4">
              System Requirements
            </h2>

            <ul className="space-y-3 text-gray-500">
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <circle cx="15.5" cy="8.5" r="1.5" />
                  </svg>
                  <div>
                    <div className="font-medium">Android Version:</div>
                    <div>Android 6.0 (Marshmallow) or later</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v7h12V8a2 2 0 0 0-2-2zm4 12h-2v-2h2v2zm0-4h-2V8h2v4z" />
                  </svg>
                  <div>
                    <div className="font-medium">Storage:</div>
                    <div>Minimum 50MB free space</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <svg
                    className="text-red-500 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v8c0 6 8 10 8 10z" />
                  </svg>
                  <div>
                    <div className="font-medium">Internet:</div>
                    <div>Required for initial download and verification</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-red-500/10 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Weather™ 2026 • APK distribution for registered users
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