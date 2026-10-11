import { ForecastResponse, ProcessedForecastDay } from '@/types/weather';

export function processForecastData(forecast: ForecastResponse, timezoneOffset: number): ProcessedForecastDay[] {
  // Map of dateKey -> list of 3-hour forecast slots
  const daysSlots = new Map<string, Array<{
    date: Date;
    hour: number;
    icon: string;
    description: string;
    tempMax: number;
    tempMin: number;
  }>>();

  forecast.list.forEach(item => {
    // Convert to local time at the target city using timezoneOffset
    const localDate = new Date((item.dt + timezoneOffset) * 1000);
    const dateKey = localDate.toISOString().split('T')[0];
    const hour = localDate.getUTCHours();

    if (!daysSlots.has(dateKey)) {
      daysSlots.set(dateKey, []);
    }

    daysSlots.get(dateKey)!.push({
      date: localDate,
      hour,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
      tempMax: item.main.temp_max,
      tempMin: item.main.temp_min,
    });
  });

  const processedDays: ProcessedForecastDay[] = [];

  daysSlots.forEach((slots, dateKey) => {
    // 1. Calculate overall max and min temperatures for the entire day
    let tempMax = -Infinity;
    let tempMin = Infinity;

    slots.forEach(slot => {
      tempMax = Math.max(tempMax, slot.tempMax);
      tempMin = Math.min(tempMin, slot.tempMin);
    });

    // 2. Select the daytime weather condition:
    // Prefer the midday slot closest to 1:00 PM local time
    let bestSlot = slots[0];
    let minHourDiff = Infinity;

    slots.forEach(slot => {
      const diff = Math.abs(slot.hour - 13);
      if (diff < minHourDiff) {
        minHourDiff = diff;
        bestSlot = slot;
      }
    });

    // 3. For a daily forecast card, ensure the icon represents daytime ('d')
    const dayIcon = bestSlot.icon.replace('n', 'd');

    const firstDate = slots[0].date;
    const dayName = firstDate.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });

    processedDays.push({
      date: dateKey,
      dayName,
      icon: dayIcon,
      description: bestSlot.description,
      tempMax,
      tempMin,
    });
  });

  return processedDays.slice(0, 5);
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