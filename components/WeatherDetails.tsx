'use client';

import { WeatherResponse } from '@/types/weather';
import { convertWindSpeed, convertVisibility } from '@/utils/formatWeather';
import { WiHumidity, WiStrongWind, WiBarometer, WiDaySunnyOvercast } from 'react-icons/wi';

interface DetailItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface WeatherDetailsProps {
  weather: WeatherResponse | null;
}

export function WeatherDetails({ weather }: WeatherDetailsProps) {
  if (!weather) return null;

  const { main, wind, visibility } = weather;

  const details: DetailItem[] = [
    {
      label: 'Humidity',
      value: `${main.humidity}%`,
      icon: <WiHumidity className="w-6 h-6 text-accent" />,
    },
    {
      label: 'Wind Speed',
      value: `${convertWindSpeed(wind.speed)} km/h`,
      icon: <WiStrongWind className="w-6 h-6 text-accent" />,
    },
    {
      label: 'Pressure',
      value: `${main.pressure} hPa`,
      icon: <WiBarometer className="w-6 h-6 text-accent" />,
    },
    {
      label: 'Visibility',
      value: `${convertVisibility(visibility)} km`,
      icon: <WiDaySunnyOvercast className="w-6 h-6 text-accent" />,
    },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="Weather details">
      {details.map((detail, index) => (
        <div
          key={detail.label}
          className="glass-card p-5 text-center animate-fade-in stagger-1"
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          <div className="flex justify-center mb-2">{detail.icon}</div>
          <p className="text-sm text-text-muted mb-1">{detail.label}</p>
          <p className="text-xl font-semibold text-text-primary">{detail.value}</p>
        </div>
      ))}
    </section>
  );
}