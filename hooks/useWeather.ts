'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { WeatherResponse, ForecastResponse } from '@/types/weather';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface UseWeatherOptions {
  initialWeather?: WeatherResponse | null;
  initialForecast?: ForecastResponse | null;
  initialUnit?: 'metric' | 'imperial';
}

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

export function useWeather(options: UseWeatherOptions = {}): UseWeatherReturn {
  const { initialWeather = null, initialForecast = null, initialUnit = 'metric' } = options;

  const [currentWeather, setCurrentWeather] = useState<WeatherResponse | null>(initialWeather);
  const [forecast, setForecast] = useState<ForecastResponse | null>(initialForecast);
  const [loading, setLoading] = useState(!initialWeather);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>(initialUnit);

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

  const currentCityRef = useRef<string>(initialWeather?.name || 'Lucknow');
  const prevUnitRef = useRef(unit);

  useEffect(() => {
    if (currentWeather?.name) {
      currentCityRef.current = currentWeather.name;
    }
  }, [currentWeather]);

  // When unit is toggled, refetch with the current city
  useEffect(() => {
    if (prevUnitRef.current !== unit) {
      prevUnitRef.current = unit;
      if (currentCityRef.current) {
        fetchWeather(currentCityRef.current);
      }
    }
  }, [unit, fetchWeather]);

  // If no initial weather was provided (e.g. server-side key missing or error), fetch on client mount
  useEffect(() => {
    if (!initialWeather) {
      fetchWeather(currentCityRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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