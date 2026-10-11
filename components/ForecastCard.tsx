'use client';

import { ProcessedForecastDay } from '@/types/weather';
import { capitalizeFirstLetter } from '@/utils/formatWeather';

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

interface ForecastCardProps {
  day: ProcessedForecastDay;
  index: number;
}

export function ForecastCard({ day, index }: ForecastCardProps) {
  const iconCode = day.icon;
  const iconEmoji = weatherIconMap[iconCode] || '🌤️';

  return (
    <article
      className="forecast-card flex-1 min-w-0 p-4 text-center animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 50}ms` }}
    >
      <p className="forecast-day mb-2">{day.dayName}</p>
      <span className="weather-icon-red text-3xl mb-2 block" aria-hidden="true">{iconEmoji}</span>
      <p className="forecast-temp">{Math.round(day.tempMax)}°</p>
    </article>
  );
}