import { Inter } from 'next/font/google';
import { Head, Link } from 'next/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Color palette: White/#FFFFFF, Red/#FF3366, Black/#000000

export const metadata = {
  title: 'Weather App - See Your Weather How You Choose To',
  description: 'Highly customizable weather experience for every device. Download the Android APK and see your weather your way.',
};

export default function MarketingHome() {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>

    <main className="min-h-screen bg-white text-black font-inter">
      {/* Navigation */}
      <nav className="border-b border-black/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="/" className="font-bold text-2xl tracking-wider">Weather App</a>
          <div className="hidden md:flex items-center gap-8">
            <a href "#features" className="text-black hover:text-red-600 transition-colors">Features</a>
            <a href "#download" className="text-black hover:text-red-600 transition-colors">Download</a>
            <a href "/register" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            See your weather <span className="text-red-600">how you choose to</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Highly customizable weather experience. Choose your theme, units, widgets, and layout — all in one beautiful app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href "/register" className="bg-red-600 text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-red-700 transition-colors">
              Get Started
            </a>
            <a href "#download" className="border-2 border-red-600 text-red-600 font-medium px-8 py-3 rounded-full text-lg hover:bg-red-600 hover:text-white transition-colors">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Weather App?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl hover:bg-red-50 transition-colors">
              <div className="text-red-600 text-3xl mb-4">🎛️</div>
              <h3 className="text-2xl font-bold mb-3">Fully Customizable</h3>
              <p className="text-gray-600 text-sm">
                Choose from dozens of themes, temperature units, widget layouts, and notification settings. Make the app truly yours.
              </p>
            </div>
            <div className="p-6 rounded-xl hover:bg-red-50 transition-colors">
              <div className="text-red-600 text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-600 text-sm">
                Real-time updates with minimal battery impact. Our optimized algorithms ensure you get the latest data without draining your phone.
              </p>
            </div>
            <div className="p-6 rounded-xl hover:bg-red-50 transition-colors">
              <div className="text-red-600 text-3xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Mobile First</h3>
              <p className="text-gray-600 text-sm">
                Built specifically for mobile and tablet. The website adapts beautifully to any screen size, and the app is designed for on-the-go weather checking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Get the App</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Download the Android APK and start customizing your weather experience today.
            </p>
          </div>
          <div className="border-2 border-red-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Android APK Download</h3>
            <p className="text-gray-600 text-sm mb-6">
              Lightweight (<5MB) and offline-capable. No Play Store required — install directly from our website.
            </p>
            <a href "/android-download" className="bg-red-600 text-white font-medium px-6 py-3 rounded-full hover:bg-red-700 transition-colors w-full">
              Download APK (Direct Link)
            </a>
            <div className="mt-6 text-sm text-gray-500">
              <p>Scanning safe... <span className="font-medium">100% safe & virus-free</span></p>
              <p>Requires Android 6.0+</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-xl">
              <p className="font-medium">Available on Google Play</p>
              <p className="text-sm mt-1"><a href="#" className="text-red-600 hover-underline">Google Play Badge</a></p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl">
              <p className="font-medium">Documentation</p>
              <p className="text-sm mt-1"><a href "/docs" className="text-red-600 hover-underline">Read Docs</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <h2 className="text-5xl font-bold mb-6">Start Seeing Your Weather</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who already customized their weather experience. Your weather, your way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href "/register" className="bg-white text-red-600 font-medium px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
                Create Free Account
              </a>
              <a href "#download" className="border-2 border-white text-white font-medium px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition-colors">
                Download APK
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Weather App</h4>
              <p className="text-gray-600 text-sm">See your weather how you choose to</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href "#features" className="hover-text-red transition-colors">Features</a></li>
                <li><a href "#download" className="hover-text-red transition-colors">Download</a></li>
                <li><a href "/docs" className="hover-text-red transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href "/about" className="hover-text-red transition-colors">About</a></li>
                <li><a href "/careers" className="hover-text-red transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href "/terms" className="hover-text-red transition-colors">Terms of Service</a></li>
                <li><a href "/privacy" className="hover-text-red transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">2026 Weather App. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.4 4.4 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 15 11 15 16a4.46 4.46 0 0 0-.46 1 4.43 4.43 0 0 0-1.45.53k.03.04A11.12 11.12 0 0 1 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3h5v-3A5 5 0 0 0 18 2zm-5 9.12a4.88 4.88 0 0 0-1.4 1.32 4.96 4.96 0 0 0-.38 1.51c-.59 1.37-1.27 2.85-2.09 4.28l1.51 1.25a6.9 6.9 0 0 1-4.17 1.84c-.83 0-1.65-.14-2.46-.42l-1.25-1.51A4.95 4.95 0 0 0 2 12.875c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .38-.04.75-.12 1.13l1.51 1.25c.82.68 1.7 1.35 2.65 1.99-.67 1.12-1.56 2.13-2.61 2.97l-1.25 1.51a4.88 4.88 0 0 0-.14-1.32 4.92 4.92 0 0 1-1.23-.87c-.88-.45-1.87-.67-2.95-.67-.37 0-.73.01-1.08.05a4.96 4.96 0 0 0-.67 1.32l1.25 1.51c.29.36.57.72.84 1.08l-1.51 1.25c-.67-.99-1.58-1.88-2.71-2.53l1.25-1.51a5.03 5.03 0 0 0-1.36-.57c-.37-.05-.72-.08-1.08-.08-.36 0-.7.02-1.03.05a4.96 4.96 0 0 0-.67 1.32l1.25 1.51c.29.36.57.72.84 1.08l-1.51 1.25c-.67-.99-1.58-1.88-2.71-2.53l1.25-1.51a4.88 4.88 0 0 0-.14-1.32 4.92 4.92 0 0 1-1.23-.87c-.88-.45-1.87-.67-2.95-.67-.37 0-.73.01-1.08.03l-1.51 1.25c-.9.76-1.93 1.3-3.11 1.56l1.25-1.51c-.93.77-1.91 1.38-3.04 1.72l-1.51 1.25a7.02 7.02 0 0 0-1.85-.64c-.81 0-1.56-.16-2.28-.46l-1.25-1.51a6.94 6.94 0 0 1-1.91-1.35l1.51-1.25c-.94-.78-1.93-1.55-3.09-2.06l-1.51-1.25a5.03 5.03 0 0 0-1.36-.57c-.37-.05-.72-.08-1.08-.08-.36 0-.7.02-1.03.05a4.96 4.96 0 0 0-.67 1.32l1.25 1.51c.29.36.57.72.84 1.08l-1.51 1.25c-.67-.99-1.58-1.88-2.71-2.53l1.25-1.51a4.88 4.88 0 0 0-.14-1.32 4.92 4.92 0 0 1-1.23-.87c-.88-.45-1.87-.67-2.95-.67-.37 0-.73.01-1.08.03l-1.51 1.25c-.9.76-1.93 1.3-3.11 1.56l1.25-1.51c-.93.77-1.91 1.38-3.04 1.72l-1.51 1.25a7.02 7.02 0 0 0-1.39.55c-.76 0-1.5-.1-2.18-.3l-1.25 1.51z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3h5v-3A5 5 0 0 0 18 2zm-5 9.12a4.88 4.88 0 0 0-1.4 1.32 4.96 4.96 0 0 0-.38 1.51c-.59 1.37-1.27 2.85-2.09 4.28l1.51 1.25a6.9 6.9 0 0 1-4.17 1.84c-.83 0-1.65-.14-2.46-.42l-1.25-1.51A4.95 4.95 0 0 0 2 12.875c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .38-.04.75-.12 1.13l1.51 1.25c.82.68 1.7 1.35 2.65 1.99-.67 1.12-1.56 2.13-2.61 2.97l-1.25 1.51a4.88 4.88 0 0 0-.14-1.32 4.92 4.92 0 0 1-1.23-.87c-.88-.45-1.87-.67-2.95-.67-.37 0-.73.01-1.08.05a4.96 4.96 0 0 0-.67 1.32l1.25 1.51c.29.36.57.72.84 1.08l-1.51 1.25c-.67-.99-1.58-1.88-2.71-2.53l1.25-1.51a5.03 5.03 0 0 0-1.36-.57c-.37-.05-.72-.08-1.08-.08-.36 0-.7.02-1.03.05a4.96 4.96 0 0 0-.67 1.32l1.25 1.51c.29.36.57.72.84 1.08l-1.51 1.25c-.67-.99-1.58-1.88-2.71-2.53l1.25-1.51a4.88 4.88 0 0 0-.14-1.32 4.92 4.92 0 0 1-1.23-.87c-.88-.45-1.87-.67-2.95-.67-.37 0-.73.01-1.08.03l-1.51 1.25c-.9.76-1.93 1.3-3.11 1.56l1.25-1.51c-.93.77-1.91 1.38-3.04 1.72l-1.51 1.25a7.02 7.02 0 0 0-1.39.55c-.76 0-1.5-.1-2.18-.3l-1.25 1.51z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zm0 11.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-2-3.75h.05c2.02 0 3.66 1.64 3.94 3.68.14.65.16 1.28.09 1.83a4.51 4.51 0 0 0 1.06 2.12 4.49 4.49 0 0 1-.5 1.86 4.5 4.5 0 0 1-1.02.06 4.51 4.51 0 0 1-2.42-1.28 4.5 4.5 0 0 1-1.01-2.13 4.51 4.51 0 0 1-.06-1.06zm7.5 0h-.05c-2.02 0-3.66-1.64-3.94-3.68-.14-.65-.16-1.28-.09-1.83a4.51 4.51 0 0 1-1.06-2.12 4.49 4.49 0 0 1.5-1.86 4.5 4.5 0 0 1 1.02.06c2.05 0 3.7 1.68 3.94 3.68.14.65.16 1.28.09 1.83a4.51 4.51 0 0 1-1.06 2.12 4.49 4.49 0 0 1-.5 1.86 4.5 4.5 0 0 1-1.02-.06 4.51 4.51 0 0 1-2.42 1.28 4.5 4.5 0 0 1-1.01 2.13 4.51 4.51 0 0 1-.06 1.06z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.04 7.95c-.69.71-1.1 1.6-.96 2.49.11.7.3 1.35.54 1.94a3.54 3.54 0 0 0 1.16-.05c.9-.38 1.63-.05 1.98.63.41.72.54 1.5.54 2.34 0 1.03-.02 2.04-.01 3.04a1.5 1.5 0 0 0 .7 1.84c-.28.58-.6 1.07-1.07 1.34-.53.33-1.1.53-1.73.53-.36 0-.7.01-1.07.01-.59 0-1.16-.08-1.68-.24.54.64.03 1.2.33 1.56.13.27-.1 1.5-.3 1.5-1.35a11.83 11.83 0 0 0 5.58-5.03c.38-.1.68-.21.89-.37-.16-.25-.25-.49-.26-.68a7.28 7.28 0 0 0-.2-1.05c-.01-.38-.01-.77-.01-1.15a9.29 9.29 0 0 0-.23-.79c-.06-.41-.13-.8-.18-1.18a4.7 4.7 0 0 0-.45-.78c-.25-.38-.52-.61-.87-.68-.41-.08-.81-.08-1.21 0a4.69 4.69 0 0 0-.87.67 4.66 4.66 0 0 0-.6 1.15c0 .39.01.78.01 1.16.0.78.1 1.54.29 2.23.2.1.34.12.47.08.13-.05.27-.1.3-.15.07-.06.12-.12.16-.2.05-.08.09-.17.12-.25.03-.08.05-.17.07-.26.02-.09.04-.18.06-.28.02-.1-.01-.2-.04-.29-.07a13.92 13.92 0 0 0-2.65-1.84c-.3-.3- .6-.55-.88-.63a4.58 4.58 0 0 0-1.28.14 4.52 4.52 0 0 0-.35 1.24c-.05.7.08 1.39.54 1.94.28.53.41.96.38 1.54-.05.81-.3 1.33-.7 1.63-.58.36-.96.48-1.44.37-.79-.15-1.54-.34-2.22-.63-.68-.29-1.35-.56-2.03-.75a4.5 4.5 0 0 0-.44-.36c-.06-.1-.07-.2-.07-.31a7.79 7.79 0 0 0-.28-.83c-.01-.65-.01-1.3-.01-1.95a4.59 4.59 0 0 0-.43-.88c-.28-.35-.61-.52-.97-.52-.36 0-.71.02-1.05.06a11.63 11.63 0 0 0-1.08.31 4.5 4.5 0 0 0-.5.86 4.5 4.5 0 0 0-.15 1.23c0 .65.03 1.3.07 1.93a4.53 4.53 0 0 0 .56 1.43c.24.39.48.63.66.68.18.05.38.03.57-.01.26-.05.5-.1.67-.17.17-.08.33-.17.44-.17.11 0 .22.01.33.02a4.54 4.54 0 0 1 .3 1.09c.06.4.1 .8.15 1.18.05.37.08.73.08 1.08a4.5 4.5 0 0 0 1.07.31 4.51 4.51 0 0 1 .5.85 4.5 4.5 0 0 1-.18.68c-.24.3-.48.54-.72.64a7.06 7.06 0 0 1-.6 1.07c-.26.32-.53.5-.81.5-.36 0-.71-.03-1.03-.09a4.5 4.5 0 0 1-.85-.25 4.51 4.51 0 0 1-.6-.57c-.33-.26-.5-.5-.63-.75a4.5 4.5 0 0 0-.3-.84c0-.31.08-.61.23-.89.18-.32.4-.57.58-.78.13-.18.24-.37.25-.54.01-.14-.01-.28-.02-.42a4.61 4.61 0 0 0-.18-.39 4.58 4.58 0 0 0-.11-.65c-.05-.28-.08-.56-.08-.85a5.51 5.51 0 0 0-.2-1.1 4.5 4.5 0 0 0-.32-.77 4.5 4.5 0 0 0-.27-.62c-.04-.18-.06-.37-.07-.56.01-.25.05-.5.17-.68.13-.18.3-.35.42-.54.12-.16.23-.31.31-.47.08-.16.09-.32.05-.47a11.6 11.6 0 0 0-1.62-2.55 4.44 4.44 0 0 0-1.17-.61c-.32-.07-.65-.09-.98-.08-.64 0-1.29.05-1.92.14-.65.09-1.28.24-1.91.46l-.15.15a4.52 4.52 0 0 0-.75.77 4.5 4.5 0 0 1-.66 1.12c-.05.36-.08.72-.08 1.09a4.52 4.52 0 0 0 1.06 1.32 4.5 4.5 0 0 1-.62.87c-.3.37-.55.62-.76.84-.2.21-.39.33-.58.33-.07 0-.13 0-.19 0a7.25 7.25 0 0 0-.25.53 4.47 4.47 0 0 1-.45.64c-.2.28-.4.47-.62.55a4.57 4.57 0 0 1-.58.22 4.54 4.54 0 0 1-.4-.02 4.52 4.52 0 0 1-.14-.38 4.49 4.49 0 0 0-.08-.65c-.01-.45-.01-.9-.01-1.35zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
import ClientHome from './ClientHome';
import { WeatherResponse, ForecastResponse } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

async function fetchWeatherData(city: string, unit: 'metric' | 'imperial' = 'metric'): Promise<{ current: WeatherResponse | null; forecast: ForecastResponse | null }> {
  if (!API_KEY) {
    return { current: null, forecast: null };
  }

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`, { cache: 'no-store' }),
      fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`, { cache: 'no-store' }),
    ]);

    if (!currentRes.ok || !forecastRes.ok) {
      return { current: null, forecast: null };
    }

    const [current, forecast] = await Promise.all([
      currentRes.json(),
      forecastRes.json(),
    ]);

    return { current, forecast };
  } catch {
    return { current: null, forecast: null };
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const cookieStore = await cookies();
  const lastCity = cookieStore.get('lastCity')?.value || 'Lucknow';
  const unit = 'metric';

  const { current, forecast } = await fetchWeatherData(lastCity, unit);

  return <ClientHome initialWeather={current} initialForecast={forecast} initialUnit={unit} />;
}