import { cookies } from 'next/headers';
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