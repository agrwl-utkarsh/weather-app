'use client';

import { useState, useEffect, useCallback } from 'react';
import { WeatherResponse, ForecastResponse } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface UseWeatherReturn {
  currentWeather: WeatherResponse | null;
  forecast: ForecastResponse | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (city: string) => Promise<void>;
  fetchWeatherByCoords: (lat: number, lon: number) => Promise<void>;
  unit: 'metric' | 'imperial';
  toggleUnit: () => void;
}

export function useWeather(): UseWeatherReturn {
  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchWeatherData = useCallback(async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch weather data');
    }
    return response.json();
  }, []);

  const fetchWeather = useCallback(async (city: string) => {
    if (!API_KEY) {
      setError('Weather API key not configured. Please add NEXT_PUBLIC_WEATHER_API_KEY.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const currentUrl = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`;
      const forecastUrl = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`;

      const [currentData, forecastData] = await Promise.all([
        fetchWeatherData(currentUrl),
        fetchWeatherData(forecastUrl),
      ]);

      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'City not found. Please try again.');
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, [fetchWeatherData, unit]);

  const fetchWeatherByCoords = useCallback(async (lat: number, lon: number) => {
    if (!API_KEY) {
      setError('Weather API key not configured. Please add NEXT_PUBLIC_WEATHER_API_KEY.');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const currentUrl = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
      const forecastUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;

      const [currentData, forecastData] = await Promise.all([
        fetchWeatherData(currentUrl),
        fetchWeatherData(forecastUrl),
      ]);

      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to fetch weather for your location.');
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, [fetchWeatherData, unit]);

  const toggleUnit = useCallback(() => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchWeather('Lucknow');
        }
      );
    } else {
      fetchWeather('Lucknow');
    }
  }, [mounted, fetchWeather, fetchWeatherByCoords]);

  useEffect(() => {
    if (!mounted || !currentWeather) return;
    const city = currentWeather.name;
    fetchWeather(city);
  }, [mounted, unit, currentWeather, fetchWeather]);

  return {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeather,
    fetchWeatherByCoords,
    unit,
    toggleUnit,
  };
}