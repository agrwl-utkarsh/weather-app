'use client';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  className?: string;
}

// 16x16 red dot matrix grid
// 1 = active red dot, 0 = transparent
const GRID_SIZE = 16;

const p = (lines: string[]): number[][] => {
  return lines.map((row) =>
    row
      .trim()
      .split('')
      .map((ch) => (ch === '#' || ch === '1' ? 1 : 0))
  );
};

// 1. Crescent Moon (Clean curve of round red dots)
const moon16 = p([
  '......1111......',
  '....1111111.....',
  '...111111.......',
  '..11111.........',
  '..1111..........',
  '.1111...........',
  '.1111...........',
  '.1111...........',
  '.1111...........',
  '.1111...........',
  '..1111..........',
  '..11111.........',
  '...111111.......',
  '....1111111.....',
  '......1111......',
  '................',
]);

// 2. Sun: Distinct circle with perpendicular rays coming out of it
const sun16 = p([
  '.......11.......',
  '.......11.......',
  '................',
  '....11111111....',
  '...1111111111...',
  '..111111111111..',
  '..111111111111..',
  '1111111111111111',
  '1111111111111111',
  '..111111111111..',
  '..111111111111..',
  '...1111111111...',
  '....11111111....',
  '................',
  '.......11.......',
  '.......11.......',
]);

// 3. Simple Cloud without rain droplets
const cloud16 = p([
  '................',
  '................',
  '......1111......',
  '....11111111....',
  '..111111111111..',
  '.11111111111111.',
  '.11111111111111.',
  '1111111111111111',
  '1111111111111111',
  '1111111111111111',
  '1111111111111111',
  '.11111111111111.',
  '..111111111111..',
  '................',
  '................',
  '................',
]);

// 4. Raining Cloud (Cloud with rain droplets underneath)
const rainingCloud16 = p([
  '......1111......',
  '....11111111....',
  '..111111111111..',
  '.11111111111111.',
  '1111111111111111',
  '1111111111111111',
  '1111111111111111',
  '.11111111111111.',
  '................',
  '..11....11....11',
  '..11....11....11',
  '................',
  '....11....11....',
  '....11....11....',
  '................',
  '................',
]);

function getPattern(iconCode: string): number[][] {
  // Clear night -> Moon
  if (iconCode === '01n') {
    return moon16;
  }
  // Clear day -> Sun
  if (iconCode === '01d') {
    return sun16;
  }
  // Rain, drizzle, thunderstorm, snow -> Raining cloud
  if (
    iconCode.startsWith('09') ||
    iconCode.startsWith('10') ||
    iconCode.startsWith('11') ||
    iconCode.startsWith('13')
  ) {
    return rainingCloud16;
  }
  // All other conditions -> Simple cloud
  return cloud16;
}

export function WeatherIcon({ iconCode, size = 64, className = '' }: WeatherIconProps) {
  const pattern = getPattern(iconCode);
  const dotStep = size / GRID_SIZE;
  // Bigger, bold dots (90% of grid cell step)
  const dotRadius = (dotStep * 0.90) / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {pattern.map((row, y) =>
        row.map((dot, x) =>
          dot ? (
            <circle
              key={`${x}-${y}`}
              cx={x * dotStep + dotStep / 2}
              cy={y * dotStep + dotStep / 2}
              r={dotRadius}
              fill="#ff5252"
            />
          ) : null
        )
      )}
    </svg>
  );
}