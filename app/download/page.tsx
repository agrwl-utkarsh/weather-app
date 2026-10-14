/*!
 * Download Page
 * Dot Matrix Red Aesthetic
 * Android APK Download Section
 */

import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dot matrix background */}
      <div className="absolute inset-0 bg-gray-900/30"></div>

      <nav className="border-b border-gray-700 py-2.5 fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-14">
          <Link href="/" className="text-2xl font-bold text-red-500 tracking-wider">
            Weather™
          </Link>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
            <Link href="/register" className="text-red-500 hover-red-400 transition-colors">Register</Link>
          </div>
        </div>
      </nav>

      <header className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-tight mb-4 text-red-500">
            Download Android APK
          </h1>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the weather app on your Android device. Lightweight, fast, and works offline
            thanks to Progressive Web App technology with dot matrix forecast caching.
          </p>
        </div>
      </header>

      {/* Download Card */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="card-dotmatrix p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-3">
                  How to Install the APK
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Follow these steps to install the Weather™ Android APK on your device.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">1. Register</div>
                    <div>Create your free account with email</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">2. Verify Email</div>
                    <div>Check your inbox for the verification link</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M10 9l6 6 6-6" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">3. Download</div>
                    <div>Click the download link to get the Android APK</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 7h16" />
                      <line x1="10" y1="11" x2="10.01" y2="11" />
                      <line x1="14" y1="11" x2="14.01" y2="11" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">4. Install</div>
                    <div>Enable 'Unknown Sources' if prompted, then install</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold text-red-500 mb-4">System Requirements</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <circle cx="15.5" cy="8.5" r="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Android Version:</div>
                    <div>Android 6.0 (Marshmallow) or later</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v7h12V8a2 2 0 0 0-2-2zm4 12h-2v-2h2v2zm0-4h-2V8h2v4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Storage:</div>
                    <div>Minimum 50MB free space</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center text-red-400 flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v8c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Internet:</div>
                    <div>Required for initial download and verification</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="card-dotmatrix p-8 border border-gray-700 text-center">
            <p className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
              Don't Have an Account Yet?
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Register in under 30 seconds to get immediate APK access and personalized weather settings.
            </p>
            <div className="flex gap-3 justify-center">
              <Link href="/register" className="bg-red-500 text-black font-medium px-8 py-3 rounded-full hover:bg-red-400 transition-colors text-lg">
                Register Now
              </Link>
              <Link href="/features" className="bg-gray-800 border border-gray-700 px-8 py-3 rounded-full hover:bg-gray-700 transition-colors text-lg">
                Continue to Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}