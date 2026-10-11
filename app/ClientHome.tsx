'use client';

import { useState, useCallback } from 'react';
import { WeatherResponse, ForecastResponse } from '@/types/weather';
import { SearchBar } from '@/components/SearchBar';
import { CurrentWeather } from '@/components/CurrentWeather';
import { WeatherDetails } from '@/components/WeatherDetails';
import { Forecast } from '@/components/Forecast';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useWeather } from '@/hooks/useWeather';
import { setLastCity } from '@/utils/cookies';

interface ClientHomeProps {
  initialWeather: WeatherResponse | null;
  initialForecast: ForecastResponse | null;
  initialUnit: 'metric' | 'imperial';
}

export default function ClientHome({ initialWeather, initialForecast, initialUnit }: ClientHomeProps) {
  const { currentWeather, forecast, loading, error, fetchWeather, fetchWeatherByCoords, unit, toggleUnit } = useWeather({
    initialWeather,
    initialForecast,
    initialUnit,
  });
  const [lastSearchedCity, setLastSearchedCity] = useState<string | null>(null);

  const handleSearch = useCallback((city: string) => {
    setLastSearchedCity(city);
    setLastCity(city);
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
      <main className="min-h-screen bg-background py-8 px-4" suppressHydrationWarning>
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
    <main className="min-h-screen bg-background py-8 px-4 md:py-12 md:px-8" suppressHydrationWarning>
      <div className="max-w-md mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-text-primary">Weather</h1>
          <button
            onClick={toggleUnit}
            className="px-4 py-1.5 bg-text-primary text-white text-sm font-semibold rounded-full transition-colors hover:opacity-90"
            aria-label={`Switch to ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}`}
          >
            {unit === 'metric' ? '°C' : '°F'}
          </button>
        </header>

        <article className="main-card p-6 md:p-8">
          <SearchBar onSearch={handleSearch} onLocation={handleLocation} disabled={loading} />

          {error && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}

          {!loading && currentWeather && (
            <>
              <CurrentWeather weather={currentWeather} unit={unit} />
              <WeatherDetails weather={currentWeather} unit={unit} />
              <Forecast forecast={forecast} timezoneOffset={currentWeather.timezone} unit={unit} />
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