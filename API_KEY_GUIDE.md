# API Key Setup for Weather App

## Web Application (Next.js)

### 1. Get an OpenWeatherMap API Key
1. Go to [openweathermap.org/api](https://openweathermap.org/api)
2. Click "Sign up" (free tier is sufficient)
3. Get your API key from the dashboard

### 2. Add to Web Project
Create/update `.env.local` in `C:\Users\uagar\weather-app\`:

```
NEXT_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
```

**Important**: The variable must start with `NEXT_PUBLIC_` for Next.js to expose it to the browser.

### 3. Restart Development Server
After adding the env variable, restart the dev server:
```bash
npm run dev
# or Ctrl+C then npm run dev
```

### 4. Verify it Works
Visit `http://localhost:3000` - the app should now fetch real weather data instead of showing errors.

---

## Mobile Application (React Native + Expo)

### 1. Same API Key
Use the same OpenWeatherMap API key you obtained above.

### 2. Add to Mobile Project
Create/update `.env` in `C:\Users\uagar\weather-app\weather-mobile\`:

```
EXPO_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
```

### 3. Install Dependencies (if not already done)
```bash
npm install @react-native-async-storage/async-storage
# or if already installed:
npx expo install @react-native-async-storage/async-storage
```

### 4. Configure Expo for Environment Variables
Expo requires environment variables to start with `EXPO_PUBLIC_`. Your `.env` file should look like:

```
EXPO_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
# Other Expo-specific vars can go here
```

### 5. Start the App
```bash
npx expo start
# Press 'a' for Android, 'i' for iOS, or 'w' for web
```

### 6. Troubleshooting
- Make sure the `.env` file is in the root of `weather-mobile/`
- Variable must be `EXPO_PUBLIC_WEATHER_API_KEY` (case-sensitive)
- Restart the Expo server after changing env vars
- On physical devices, ensure you're on the same network as your development machine

---

## ✅ Verification

### Web Test:
Visit `http://localhost:3000` and:
- ✅ City searches should return real weather
- ✅ Geolocation should work (allow permissions)
- ✅ Unit toggle (°C/°F) should work
- ✅ No "API key not configured" error

### Mobile Test:
Start `npx expo start` and:
- ✅ App loads without API key errors
- ✅ Search functionality works
- ✅ Location permission requests work
- ✅ Weather data displays correctly

---

## 📱 Android APK Build (Optional)

If you want to generate a production Android APK:

### Option A: Expo Go (Easiest)
```bash
npx expo build:android
# Follow the web interface to generate a debug APK
```

### Option B: EAS Build (Recommended for Production)
1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Initialize: `eas init` (follow prompts)
4. Build: `eas build --platform android`
5. Download from Expo dashboard

### Option C: Manual Gradle (Advanced)
```bash
cd weather-mobile
npx expo run:android
# Requires Android Studio installed
```

---

## 🪟 PWA Installation Test (Windows)

### How to Test:
1. Start the dev server: `npm run dev`
2. Visit `http://localhost:3000` in Microsoft Edge or Google Chrome
3. Look for the "Install" button in the browser toolbar:
   - **Edge**: Settings and more (⋯) → "Install Weather" 
   - **Chrome**: Customize and control (⋯) → "Install Weather" or click the puzzle piece → "Install"
4. Click "Install" and verify:
   - ✅ App appears in Start Menu
   - ✅ App appears in Taskbar
   - ✅ App opens as standalone window (no address bar)
   - ✅ Tile shows weather information (may need refresh)

### Troubleshooting PWA:
- Ensure `manifest.json` is valid (use Chrome DevTools → Application → Manifest)
- Check that service worker is registered (Application → Service Workers)
- Verify `theme-color` meta tag is in `<head>`
- Ensure HTTPS or localhost (PWA works on localhost for development)

---

## 📋 Quick Checklist

Before testing, verify:
- [ ] API key added to both `.env.local` (web) and `.env` (mobile)
- [ ] Web: `NEXT_PUBLIC_WEATHER_API_KEY=your_key`
- [ ] Mobile: `EXPO_PUBLIC_WEATHER_API_KEY=your_key`
- [ ] Dependencies installed: `npm install` in both directories
- [ ] Web: `npm run dev` starts without errors
- [ ] Mobile: `npx expo start` starts without errors
- [ ] Test web on `localhost:3000` with real data
- [ ] Test mobile with Expo Go on device or emulator

---

## 🐛 Common Issues

### "API key not configured" error
- ✅ Ensure `.env.local` exists in correct directory
- ✅ Variable starts with correct prefix (`NEXT_PUBLIC_` or `EXPO_PUBLIC_`)
- ✅ Restart dev server after changing env vars
- ✅ Check `.env.example` has the correct format

### "City not found" on Android
- ✅ Ensure API key is valid
- ✅ Check internet connection
- ✅ Verify device has location permissions granted
- ✅ Try searching by city name instead of geolocation

### PWA won't install
- ✅ Check manifest.json in Chrome DevTools
- ✅ Verify service worker is active
- ✅ Ensure page is loaded (not `file://` protocol)
- ✅ Check console for errors

---

## 🎯 You're Ready!

Once the API keys are set up, you'll have a fully functional end-to-end weather application across:
- **Web**: Visit and install as PWA
- **Android**: Open via Expo Go or installed APK  
- **Windows**: Installed from Edge/Chrome as native app

All platforms share the same codebase and weather data source!