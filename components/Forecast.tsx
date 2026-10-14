'use client';

import { ForecastResponse } from '@/types/weather';
import { processForecastData } from '@/utils/formatWeather';
import { WeatherIcon } from './WeatherIcon';

interface ForecastProps {
  forecast: ForecastResponse | null;
  timezoneOffset: number;
  unit: 'metric' | 'imperial';
}

export function Forecast({ forecast, timezoneOffset, unit }: ForecastProps) {
  if (!forecast) return null;

  const forecastDays = processForecastData(forecast, timezoneOffset);

  return (
    <section className="animate-fade-in mt-2 mb-1" aria-label="5-day forecast">
      <h3 className="forecast-section-title text-center mb-4">5-DAY FORECAST</h3>
      <div className="flex gap-2.5 overflow-x-auto pb-1 snap-x">
        {forecastDays.map((day, index) => (
          <article
            key={day.date}
            className="forecast-card flex-1 min-w-0 p-4 text-center animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            <p className="forecast-day mb-2">{day.dayName}</p>
            <WeatherIcon iconCode={day.icon} size={40} className="mx-auto mb-2" />
            <p className="forecast-temp">
              {Math.round(day.tempMax)}
              <span className="text-base font-medium">
                {unit === 'metric' ? '°C' : '°F'}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}