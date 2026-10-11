import { ForecastResponse, ProcessedForecastDay } from '@/types/weather';

export function processForecastData(forecast: ForecastResponse, timezoneOffset: number): ProcessedForecastDay[] {
  const dailyData = new Map<string, ProcessedForecastDay>();

  forecast.list.forEach(item => {
    const date = new Date((item.dt + timezoneOffset) * 1000);
    const dateKey = date.toISOString().split('T')[0];

    if (!dailyData.has(dateKey)) {
      dailyData.set(dateKey, {
        date: dateKey,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
        tempMax: item.main.temp_max,
        tempMin: item.main.temp_min,
      });
    } else {
      const existing = dailyData.get(dateKey)!;
      existing.tempMax = Math.max(existing.tempMax, item.main.temp_max);
      existing.tempMin = Math.min(existing.tempMin, item.main.temp_min);
    }
  });

  return Array.from(dailyData.values()).slice(0, 5);
}

export function getWeatherIconUrl(iconCode: string, size: '2x' | '4x' = '2x'): string {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertWindSpeed(mps: number): number {
  return Math.round(mps * 3.6);
}

export function convertVisibility(meters: number): number {
  return Math.round(meters / 1000);
}