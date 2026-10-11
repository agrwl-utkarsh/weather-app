# Weather App

A minimal, elegant weather application built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful dark glassmorphism design with smooth animations.

## Features

- 🌤️ Current weather conditions with large temperature display
- 📍 Geolocation support (with fallback to London)
- 🔍 City search with Enter key
- 📅 5-day forecast with horizontal scrolling
- 💧 Weather details (humidity, wind, pressure, visibility)
- 🌙 Dark-only theme with glassmorphism cards
- ✨ Smooth animations and micro-interactions
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Weather Icons set)
- **API**: OpenWeatherMap
- **Font**: Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenWeatherMap API key (free tier)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/agrwl-utkarsh/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your OpenWeatherMap API key:
   ```
   NEXT_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Main page component
├── components/
│   ├── SearchBar.tsx        # Search input with icon
│   ├── CurrentWeather.tsx   # Hero weather display
│   ├── WeatherDetails.tsx   # 4-card details grid
│   ├── Forecast.tsx         # 5-day forecast section
│   ├── ForecastCard.tsx     # Individual forecast day
│   ├── LoadingSpinner.tsx   # Loading indicator
│   └── ErrorMessage.tsx     # Error display
├── hooks/
│   └── useWeather.ts        # Weather data fetching logic
├── utils/
│   ├── formatDate.ts        # Date formatting utilities
│   └── formatWeather.ts     # Weather data processing
├── types/
│   └── weather.ts           # TypeScript interfaces
├── tailwind.config.ts       # Custom theme configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add `NEXT_PUBLIC_WEATHER_API_KEY` in Environment Variables
4. Deploy

### Other Platforms

```bash
npm run build
npm start
```

## Design System

### Colors
- Background: `#0f0f0f`
- Card: `rgba(255, 255, 255, 0.05)` with backdrop blur
- Accent: `#6c63ff` (purple/violet)
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0a0`
- Text Muted: `#8b8b8b`

### Typography
- Font: Inter (300, 400, 500, 600, 700)
- Hero Temperature: 72-96px, weight 700
- City Name: 28-32px, weight 600
- Details: 13-14px labels, 18-22px values

### Animations
- Fade-in on load (staggered)
- Float animation on weather icon
- Hover scale on cards
- Focus glow on search input

## API Reference

Uses OpenWeatherMap free tier:
- Current Weather: `api.openweathermap.org/data/2.5/weather`
- 5-Day Forecast: `api.openweathermap.org/data/2.5/forecast`

## License

MIT