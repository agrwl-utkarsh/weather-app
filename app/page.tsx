'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CurrentWeather } from '@/components/CurrentWeather';
import { WeatherDetails } from '@/components/WeatherDetails';
import { Forecast } from '@/components/Forecast';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useWeather } from '@/hooks/useWeather';
import { WeatherResponse, ForecastResponse } from '@/types/weather';

export default function Home() {
  const { currentWeather, forecast, loading, error, fetchWeather } = useWeather();
  const [lastError, setLastError] = useState<string | null>(null);

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };

  const handleRetry = () => {
    if (lastError) {
      fetchWeather(lastError);
    }
  };

  if (loading && !currentWeather) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="glass-card p-12 text-center max-w-md w-full">
          <LoadingSpinner size="lg" />
          <p className="mt-6 text-text-secondary">Loading weather data...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8 px-4 md:py-12 md:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="sr-only">Weather App</h1>
          <SearchBar onSearch={handleSearch} disabled={loading} />
        </header>

        {error && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {!loading && currentWeather && (
          <>
            <CurrentWeather weather={currentWeather} />
            <WeatherDetails weather={currentWeather} />
            <Forecast forecast={forecast} timezoneOffset={currentWeather.timezone} />
          </>
        )}

        {!loading && !currentWeather && !error && (
          <div className="glass-card p-8 text-center">
            <p className="text-text-secondary">Enter a city to get started</p>
          </div>
        )}
      </div>
    </main>
  );
}