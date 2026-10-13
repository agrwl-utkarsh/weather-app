'use client';

import { useState, useCallback } from 'react';
import { WeatherResponse, ForecastResponse } from '@/types/weather';
import { SearchBar } from '@/components/SearchBar';
import { CurrentWeather } from '@/components/CurrentWeather';
import { WeatherDetails } from '@/components/WeatherDetails';
import { Forecast } from '@/components/Forecast';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { UnitSlider } from '@/components/UnitSlider';
import { useWeather } from '@/hooks/useWeather';
import { setLastCity } from '@/utils/cookies';

interface ClientHomeProps {
  initialWeather: WeatherResponse | null;
  initialForecast: ForecastResponse | null;
  initialUnit: 'metric' | 'imperial';
}

export default function ClientHome({ initialWeather, initialForecast, initialUnit }: ClientHomeProps) {
  const { currentWeather, forecast, loading, error, fetchWeather, unit, toggleUnit } = useWeather({
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

  const handleRetry = useCallback(() => {
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
    } else {
      handleSearch('Lucknow');
    }
  }, [lastSearchedCity, fetchWeather, handleSearch]);

  if (loading && !currentWeather) {
    return (
      <main className="min-h-screen bg-background py-8 px-4 flex items-center justify-center" suppressHydrationWarning>
        <div className="w-full max-w-md mx-auto">
          <div className="main-card p-10 text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-6 text-text-muted font-medium text-sm">Loading weather data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:py-12 sm:px-6" suppressHydrationWarning>
      <div className="max-w-[440px] mx-auto">
        {/* Top Header with Brand and Modern Slider Toggle */}
        <header className="flex items-center justify-between mb-6 px-1">
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Weather</h1>
          <UnitSlider unit={unit} onToggle={toggleUnit} />
        </header>

        {/* Main aesthetic card */}
        <article className="main-card p-6 sm:p-7">
          <SearchBar onSearch={handleSearch} disabled={loading} />

          {error && (
            <div className="mt-5">
              <ErrorMessage message={error} onRetry={handleRetry} />
            </div>
          )}

          {currentWeather && (
            <div className="mt-2">
              <CurrentWeather weather={currentWeather} unit={unit} />
              <WeatherDetails weather={currentWeather} unit={unit} />
              <Forecast forecast={forecast} timezoneOffset={currentWeather.timezone} unit={unit} />
            </div>
          )}

          {!loading && !currentWeather && !error && (
            <div className="text-center py-14">
              <p className="text-text-muted text-sm font-medium">Enter a city to get started</p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}