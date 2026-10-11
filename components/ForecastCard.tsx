'use client';

import { ProcessedForecastDay } from '@/types/weather';
import { capitalizeFirstLetter } from '@/utils/formatWeather';
import { WeatherIcon } from './WeatherIcon';

interface ForecastCardProps {
  day: ProcessedForecastDay;
  index: number;
  unit: 'metric' | 'imperial';
}

export function ForecastCard({ day, index, unit }: ForecastCardProps) {
  const iconCode = day.icon;
  const tempSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <article
      className="forecast-card flex-1 min-w-0 p-4 text-center animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 50}ms` }}
    >
      <p className="forecast-day mb-2">{day.dayName}</p>
      <WeatherIcon iconCode={iconCode} size={40} className="mx-auto mb-2" />
      <p className="forecast-temp">{Math.round(day.tempMax)}<span className="text-base font-medium">{tempSymbol}</span></p>
    </article>
  );
}