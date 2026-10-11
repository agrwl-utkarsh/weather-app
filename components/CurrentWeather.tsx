'use client';

import { WeatherResponse } from '@/types/weather';
import { capitalizeFirstLetter } from '@/utils/formatWeather';
import { WeatherIcon } from './WeatherIcon';

interface CurrentWeatherProps {
  weather: WeatherResponse | null;
  unit: 'metric' | 'imperial';
}

export function CurrentWeather({ weather, unit }: CurrentWeatherProps) {
  if (!weather) return null;

  const { main, weather: weatherArray, sys, name } = weather;
  const condition = weatherArray[0];
  const tempSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <section className="text-center animate-fade-in" aria-label="Current weather">
      <h2 className="city-name mb-1">{name}, {sys.country}</h2>
      <p className="weather-desc mb-8">{capitalizeFirstLetter(condition.description)}</p>
      
      <div className="flex items-center justify-center gap-4 mb-8">
        <WeatherIcon iconCode={condition.icon} size={80} />
        <div className="temp-large">{Math.round(main.temp)}<span className="text-3xl font-semibold">{tempSymbol}</span></div>
      </div>
    </section>
  );
}