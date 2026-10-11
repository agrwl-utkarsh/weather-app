'use client';

import { ForecastResponse } from '@/types/weather';
import { processForecastData } from '@/utils/formatWeather';
import { ForecastCard } from './ForecastCard';

interface ForecastProps {
  forecast: ForecastResponse | null;
  timezoneOffset: number;
}

export function Forecast({ forecast, timezoneOffset }: ForecastProps) {
  if (!forecast) return null;

  const forecastDays = processForecastData(forecast, timezoneOffset);

  return (
    <section className="animate-fade-in" aria-label="5-day forecast">
      <h3 className="text-xl font-semibold text-text-primary mb-6">5-Day Forecast</h3>
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide"
        role="list"
        aria-label="Forecast days"
      >
        {forecastDays.map((day, index) => (
          <ForecastCard key={day.date} day={day} index={index} />
        ))}
      </div>
    </section>
  );
}