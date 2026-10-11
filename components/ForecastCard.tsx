'use client';

import { ProcessedForecastDay } from '@/types/weather';
import { getWeatherIconUrl, capitalizeFirstLetter } from '@/utils/formatWeather';

interface ForecastCardProps {
  day: ProcessedForecastDay;
  index: number;
}

export function ForecastCard({ day, index }: ForecastCardProps) {
  const iconUrl = getWeatherIconUrl(day.icon);

  return (
    <article
      className="glass-card flex-shrink-0 w-40 md:w-44 p-4 text-center animate-fade-in"
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <p className="text-sm font-medium text-text-secondary mb-2">{day.dayName}</p>
      <img
        src={iconUrl}
        alt={day.description}
        className="w-12 h-12 mx-auto mb-2"
      />
      <p className="text-sm text-text-muted capitalize mb-2">{capitalizeFirstLetter(day.description)}</p>
      <div className="flex justify-center gap-2">
        <span className="text-lg font-semibold text-text-primary">{Math.round(day.tempMax)}°</span>
        <span className="text-lg text-text-muted">{Math.round(day.tempMin)}°</span>
      </div>
    </article>
  );
}