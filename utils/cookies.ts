export function getLastCity(): string {
  if (typeof document === 'undefined') return 'Lucknow';
  const match = document.cookie.match(/(?:^|;\s*)lastCity=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : 'Lucknow';
}

export function setLastCity(city: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `lastCity=${encodeURIComponent(city)};path=/;max-age=31536000;SameSite=Lax`;
}