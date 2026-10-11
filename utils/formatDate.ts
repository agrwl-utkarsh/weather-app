export function formatDate(timestamp: number, timezoneOffset: number = 0): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

export function formatDayName(timestamp: number, timezoneOffset: number = 0): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
  });
}

export function formatTime(timestamp: number, timezoneOffset: number = 0): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function formatFullDateTime(timestamp: number, timezoneOffset: number = 0): string {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}