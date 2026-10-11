'use client';

import { WeatherResponse } from '@/types/weather';
import { getWeatherIconUrl, capitalizeFirstLetter } from '@/utils/formatWeather';
import { formatFullDateTime } from '@/utils/formatDate';

interface CurrentWeatherProps {
  weather: WeatherResponse | null;
}

export function CurrentWeather({ weather }: CurrentWeatherProps) {
  if (!weather) return null;

  const { main, weather: weatherArray, sys, dt, timezone, name } = weather;
  const condition = weatherArray[0];
  const iconUrl = getWeatherIconUrl(condition.icon);

  return (
    <section className="glass-card p-8 md:p-12 text-center animate-fade-in" aria-label="Current weather">
      <img
        src={iconUrl}
        alt={condition.description}
        className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 animate-float"
      />
      <div className="text-7xl md:text-9xl font-bold text-text-primary leading-none mb-2">
        {Math.round(main.temp)}°
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-1">
        {name}, {sys.country}
      </h2>
      <p className="text-lg text-text-secondary capitalize mb-2">
        {capitalizeFirstLetter(condition.description)}
      </p>
      <p className="text-text-muted mb-1">
        {formatFullDateTime(dt, timezone)}
      </p>
      <p className="text-text-muted">
        Feels like {Math.round(main.feels_like)}°
      </p>
    </section>
  );
}