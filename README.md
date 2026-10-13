# Weather App - End-to-End Project

This project aims to provide a complete weather application experience across:
1. **Web** - Full Next.js application (current state)
2. **Android** - React Native with Expo for mobile devices
3. **Windows** - PWA (Progressive Web App) for desktop/widget experience

## Current Status

- ✅ Web app built with Next.js 14, React 18, and Tailwind CSS
- 🚧 Android app setup in progress (React Native + Expo)
- 🚧 Windows PWA enhancement in progress

## Architecture

### Web (Next.js 14)
- App Router structure with `app/` directory
- Server Components for data fetching
- Client Components for interactive UI
- OpenWeatherMap API integration
- React Hooks for state management (`useWeather`)

### Android (React Native + Expo)
- Will reuse React code where possible
- Native modules for geolocation and device features
- Expo Go for rapid development
- EAS Build for production APKs

### Windows (PWA)
- Enhanced manifest.json for desktop installation
- Service Worker for offline support
- Tile and shortcut configuration for Windows 11

## Getting Started

### Web
```bash
npm run dev
# or
npm start
```

### Android (when Expo is installed)
```bash
npx expo start
```

### PWA
The web app is already configured as a PWA with:
- `manifest.json` for installation
- `sw.js` for caching
- Meta tags for theme color