'use client';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  className?: string;
}

export function WeatherIcon({ iconCode, size = 64, className = '' }: WeatherIconProps) {
  // Normalize conditions
  const isNight = iconCode.endsWith('n');
  const code = iconCode.slice(0, 2);

  // Google Weather Material Vector Graphic based on weather condition
  const renderIcon = () => {
    switch (code) {
      // 01: Clear Sky (Sun / Crescent Moon)
      case '01':
        if (isNight) {
          // Google Weather Crescent Moon
          return (
            <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
              <defs>
                <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDD835" />
                  <stop offset="100%" stopColor="#FBC02D" />
                </linearGradient>
                <filter id="moonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FBC02D" floodOpacity="0.3" />
                </filter>
              </defs>
              {/* Stars */}
              <circle cx="48" cy="18" r="1.5" fill="#FDD835" opacity="0.8" />
              <circle cx="44" cy="38" r="1" fill="#FDD835" opacity="0.6" />
              <circle cx="16" cy="18" r="1" fill="#FDD835" opacity="0.6" />
              {/* Crescent Moon */}
              <path
                d="M38 12C26.95 12 18 20.95 18 32C18 43.05 26.95 52 38 52C42.06 52 45.83 50.79 49 48.71C40.66 47.45 34.29 40.23 34.29 31.43C34.29 22.63 40.66 15.41 49 14.15C45.83 12.07 42.06 12 38 12Z"
                fill="url(#moonGrad)"
                filter="url(#moonGlow)"
              />
            </svg>
          );
        }
        // Google Weather Vibrant Sun with rays
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA000" />
                <stop offset="100%" stopColor="#F57C00" />
              </linearGradient>
              <linearGradient id="sunCenter" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEB3B" />
                <stop offset="100%" stopColor="#FFC107" />
              </linearGradient>
              <filter id="sunGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFB300" floodOpacity="0.4" />
              </filter>
            </defs>
            {/* Rays */}
            <g stroke="#FFA000" strokeWidth="3.5" strokeLinecap="round">
              <line x1="32" y1="8" x2="32" y2="14" />
              <line x1="32" y1="50" x2="32" y2="56" />
              <line x1="8" y1="32" x2="14" y2="32" />
              <line x1="50" y1="32" x2="56" y2="32" />
              <line x1="15" y1="15" x2="19.5" y2="19.5" />
              <line x1="44.5" y1="44.5" x2="49" y2="49" />
              <line x1="15" y1="49" x2="19.5" y2="44.5" />
              <line x1="44.5" y1="19.5" x2="49" y2="15" />
            </g>
            {/* Sun Body */}
            <circle cx="32" cy="32" r="14" fill="url(#sunCenter)" filter="url(#sunGlow)" />
          </svg>
        );

      // 02: Few Clouds (Partly Cloudy - Sun/Moon behind cloud)
      case '02':
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CFD8DC" />
              </linearGradient>
              <linearGradient id="sunPart" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFEB3B" />
                <stop offset="100%" stopColor="#FF9800" />
              </linearGradient>
              <filter id="cloudShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#90A4AE" floodOpacity="0.4" />
              </filter>
            </defs>
            {isNight ? (
              /* Moon behind cloud */
              <path
                d="M32 12C25 12 19 18 19 25C19 27.5 19.8 29.8 21 31.8C25.5 30.5 30.5 32 33 36C34.5 31 38 27.5 42 26.5C40 18 36.5 12 32 12Z"
                fill="#FDD835"
              />
            ) : (
              /* Sun behind cloud */
              <g>
                <circle cx="24" cy="24" r="11" fill="url(#sunPart)" />
                <path
                  d="M24 8V11 M12 24H15 M15 15L17.5 17.5 M33 15L30.5 17.5 M15 33L17.5 30.5"
                  stroke="#FFA000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>
            )}
            {/* Front Cloud */}
            <path
              d="M45 48H21C16.58 48 13 44.42 13 40C13 35.85 16.14 32.44 20.2 32.04C21.6 25.17 27.67 20 35 20C43.5 20 50.48 26.73 50.97 35.15C54.43 35.87 57 38.9 57 42.5C57 45.54 51.63 48 45 48Z"
              fill="url(#cloudGrad)"
              filter="url(#cloudShadow)"
            />
          </svg>
        );

      // 03 & 04: Scattered / Broken Clouds / Overcast
      case '03':
      case '04':
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="cloudFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#CFD8DC" />
              </linearGradient>
              <linearGradient id="cloudBack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B0BEC5" />
                <stop offset="100%" stopColor="#90A4AE" />
              </linearGradient>
              <filter id="overcastShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#78909C" floodOpacity="0.35" />
              </filter>
            </defs>
            {/* Back darker cloud */}
            <path
              d="M39 36H21C17.7 36 15 33.3 15 30C15 26.9 17.3 24.3 20.4 24C21.4 18.9 25.9 15 31.4 15C37.8 15 43 20 43.4 26.3C46 26.9 48 29.1 48 31.8C48 34.1 43.9 36 39 36Z"
              fill="url(#cloudBack)"
            />
            {/* Front soft puffy white cloud */}
            <path
              d="M46 50H20C15.58 50 12 46.42 12 42C12 37.85 15.14 34.44 19.2 34.04C20.6 27.17 26.67 22 34 22C42.5 22 49.48 28.73 49.97 37.15C53.43 37.87 56 40.9 56 44.5C56 47.54 51.5 50 46 50Z"
              fill="url(#cloudFront)"
              filter="url(#overcastShadow)"
            />
          </svg>
        );

      // 09 & 10: Rain / Showers
      case '09':
      case '10':
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="rainCloud" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ECEFF1" />
                <stop offset="100%" stopColor="#90A4AE" />
              </linearGradient>
              <filter id="rainShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#607D8B" floodOpacity="0.3" />
              </filter>
            </defs>
            {/* Cloud */}
            <path
              d="M45 38H21C16.58 38 13 34.42 13 30C13 25.85 16.14 22.44 20.2 22.04C21.6 15.17 27.67 10 35 10C43.5 10 50.48 16.73 50.97 25.15C54.43 25.87 57 28.9 57 32.5C57 35.54 51.63 38 45 38Z"
              fill="url(#rainCloud)"
              filter="url(#rainShadow)"
            />
            {/* Google Blue Raindrops */}
            <g stroke="#29B6F6" strokeWidth="2.5" strokeLinecap="round">
              <line x1="22" y1="44" x2="19" y2="52" />
              <line x1="32" y1="44" x2="29" y2="52" />
              <line x1="42" y1="44" x2="39" y2="52" />
            </g>
          </svg>
        );

      // 11: Thunderstorm
      case '11':
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="stormCloud" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#78909C" />
                <stop offset="100%" stopColor="#455A64" />
              </linearGradient>
              <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF176" />
                <stop offset="100%" stopColor="#FBC02D" />
              </linearGradient>
              <filter id="stormShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#263238" floodOpacity="0.4" />
              </filter>
            </defs>
            {/* Dark Cloud */}
            <path
              d="M45 36H21C16.58 36 13 32.42 13 28C13 23.85 16.14 20.44 20.2 20.04C21.6 13.17 27.67 8 35 8C43.5 8 50.48 14.73 50.97 23.15C54.43 23.87 57 26.9 57 30.5C57 33.54 51.63 36 45 36Z"
              fill="url(#stormCloud)"
              filter="url(#stormShadow)"
            />
            {/* Lightning bolt */}
            <path
              d="M34 36L27 46H33L30 56L41 44H35L38 36H34Z"
              fill="url(#boltGrad)"
              stroke="#F57F17"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
          </svg>
        );

      // 13: Snow
      case '13':
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <defs>
              <linearGradient id="snowCloud" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ECEFF1" />
                <stop offset="100%" stopColor="#B0BEC5" />
              </linearGradient>
            </defs>
            <path
              d="M45 38H21C16.58 38 13 34.42 13 30C13 25.85 16.14 22.44 20.2 22.04C21.6 15.17 27.67 10 35 10C43.5 10 50.48 16.73 50.97 25.15C54.43 25.87 57 28.9 57 32.5C57 35.54 51.63 38 45 38Z"
              fill="url(#snowCloud)"
            />
            {/* Snow dots */}
            <circle cx="23" cy="47" r="2.2" fill="#81D4FA" />
            <circle cx="33" cy="47" r="2.2" fill="#81D4FA" />
            <circle cx="43" cy="47" r="2.2" fill="#81D4FA" />
            <circle cx="28" cy="53" r="1.8" fill="#81D4FA" />
            <circle cx="38" cy="53" r="1.8" fill="#81D4FA" />
          </svg>
        );

      // 50: Mist / Fog
      case '50':
      default:
        return (
          <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none">
            <g stroke="#90A4AE" strokeWidth="3" strokeLinecap="round">
              <line x1="16" y1="24" x2="48" y2="24" />
              <line x1="12" y1="32" x2="52" y2="32" />
              <line x1="18" y1="40" x2="46" y2="40" />
              <line x1="22" y1="48" x2="42" y2="48" />
            </g>
          </svg>
        );
    }
  };

  return <div style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{renderIcon()}</div>;
}