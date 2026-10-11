'use client';

import { useState, useCallback } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CurrentWeather } from '@/components/CurrentWeather';
import { WeatherDetails } from '@/components/WeatherDetails';
import { Forecast } from '@/components/Forecast';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useWeather } from '@/hooks/useWeather';

export default function Home() {
  const { currentWeather, forecast, loading, error, fetchWeather, fetchWeatherByCoords } = useWeather();
  const [lastSearchedCity, setLastSearchedCity] = useState<string | null>(null);

  const handleSearch = useCallback((city: string) => {
    setLastSearchedCity(city);
    fetchWeather(city);
  }, [fetchWeather]);

  const handleLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          handleSearch('Lucknow');
        }
      );
    } else {
      handleSearch('Lucknow');
    }
  }, [fetchWeatherByCoords, handleSearch]);

  const handleRetry = useCallback(() => {
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
    } else {
      handleSearch('Lucknow');
    }
  }, [lastSearchedCity, fetchWeather, handleSearch]);

  if (loading && !currentWeather) {
    return (
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-md mx-auto">
          <div className="main-card p-8 text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-6 text-text-muted">Loading weather data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-12 md:px-8">
      <div className="max-w-md mx-auto">
        {/* Header with title and °C toggle */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-text-primary">Weather</h1>
          <button
            className="px-4 py-1.5 bg-text-primary text-white text-sm font-semibold rounded-full"
            disabled
            aria-label="Temperature unit: Celsius"
          >
            °C
          </button>
        </header>

        {/* Main Card */}
        <article className="main-card p-6 md:p-8">
          <SearchBar onSearch={handleSearch} onLocation={handleLocation} disabled={loading} />

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
            <div className="text-center py-12">
              <p className="text-text-muted">Enter a city to get started</p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}