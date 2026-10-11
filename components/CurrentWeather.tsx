'use client';

import { WeatherResponse } from '@/types/weather';
import { getWeatherIconUrl, capitalizeFirstLetter } from '@/utils/formatWeather';

interface CurrentWeatherProps {
  weather: WeatherResponse | null;
}

const weatherIconMap: Record<string, string> = {
  '01d': '☀️', '01n': '🌙',
  '02d': '🌤️', '02n': '☁️',
  '03d': '☁️', '03n': '☁️',
  '04d': '☁️', '04n': '☁️',
  '09d': '🌧️', '09n': '🌧️',
  '10d': '🌦️', '10n': '🌧️',
  '11d': '⛈️', '11n': '⛈️',
  '13d': '❄️', '13n': '❄️',
  '50d': '🌫️', '50n': '🌫️',
};

export function CurrentWeather({ weather }: CurrentWeatherProps) {
  if (!weather) return null;

  const { main, weather: weatherArray, sys, name } = weather;
  const condition = weatherArray[0];
  const iconCode = condition.icon;
  const iconEmoji = weatherIconMap[iconCode] || '🌤️';

  return (
    <section className="text-center animate-fade-in" aria-label="Current weather">
      <h2 className="city-name mb-1">{name}, {sys.country}</h2>
      <p className="weather-desc mb-8">{capitalizeFirstLetter(condition.description)}</p>
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="weather-icon-red text-7xl" aria-hidden="true">{iconEmoji}</span>
        <div className="temp-large">{Math.round(main.temp)}°C</div>
      </div>
    </section>
  );
}