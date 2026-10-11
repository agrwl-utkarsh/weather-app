'use client';

import { WeatherResponse } from '@/types/weather';
import { convertWindSpeed } from '@/utils/formatWeather';

interface WeatherDetailsProps {
  weather: WeatherResponse | null;
  unit: 'metric' | 'imperial';
}

export function WeatherDetails({ weather, unit }: WeatherDetailsProps) {
  if (!weather) return null;

  const { main, wind } = weather;

  const metrics = [
    { 
      label: 'FEELS LIKE', 
      value: `${Math.round(main.feels_like)}${unit === 'metric' ? '°C' : '°F'}` 
    },
    { 
      label: 'HUMIDITY', 
      value: `${main.humidity}%` 
    },
    { 
      label: 'WIND', 
      value: `${convertWindSpeed(wind.speed)} ${unit === 'metric' ? 'km/h' : 'mph'}` 
    },
  ];

  return (
    <section className="divider my-7 pt-6" aria-label="Weather details">
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="text-center animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            <p className="metric-label mb-1.5">{metric.label}</p>
            <p className="metric-value">{metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}