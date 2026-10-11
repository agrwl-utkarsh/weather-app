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
      <h3 className="forecast-section-title text-center mb-6">5-DAY FORECAST</h3>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
        {forecastDays.slice(0, 5).map((day, index) => (
          <ForecastCard key={day.date} day={day} index={index} />
        ))}
      </div>
    </section>
  );
}