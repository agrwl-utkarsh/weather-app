import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, RefreshControl, Image, TouchableOpacity, Alert, Platform, AsyncStorage } from 'react-native';
import { useState, useEffect } from 'react';
import { Font } from '@expo/font';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY || '';

export default function App() {
  const [lastCity, setLastCity] = useState('Lucknow');
  const [unit, setUnit] = useState('metric');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Try to get last city from async storage or localStorage
    const loadLastCity = async () => {
      try {
        const result = await AsyncStorage.getItem('@weather:lastCity');
        if (result) {
          setLastCity(result);
        }
      } catch (e) {
        // Ignore errors, use default
      }
    };
    loadLastCity();
  }, []);

  // Sync last city to async storage when it changes
  useEffect(() => {
    AsyncStorage.setItem('@weather:lastCity', lastCity);
  }, [lastCity]);

  const fetchWeather = async (city) => {
    if (!API_KEY) {
      setError('Weather API key not configured. Please add EXPO_PUBLIC_WEATHER_API_KEY.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`;

      const [currentRes, forecastRes] = await Promise.all([
        fetch(currentUrl),
        fetch(forecastUrl),
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        const errorData = await forecastRes.json();
        throw new Error(errorData.message || 'City not found');
      }

      const [currentData, forecastData] = await Promise.all([
        currentRes.json(),
        forecastRes.json(),
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
  };

  const handleSearch = async (city) => {
    setLastCity(city);
    await fetchWeather(city);
  };

  const handleLocation = async () => {
    if (!navigator.geolocation) {
      Alert.alert('Geolocation', 'Geolocation is not supported');
      return;
    }

    try {
      const location = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          (err) => reject(err),
          { timeout: 10000 }
        );
      });

      const { latitude, longitude } = location;
      await fetchWeatherByCoords(latitude, longitude);
    } catch (err) {
      handleSearch('Lucknow');
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    if (!API_KEY) {
      setError('Weather API key not configured.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;

      const [currentRes, forecastRes] = await Promise.all([
        fetch(currentUrl),
        fetch(forecastUrl),
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error('Unable to fetch weather for your location');
      }

      const [currentData, forecastData] = await Promise.all([
        currentRes.json(),
        forecastRes.json(),
      ]);

      setCurrentWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to fetch weather');
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric');
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading && !currentWeather) {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
       refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
      >
        <Text style={styles.loadingText}>Loading weather data...</Text>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      refreshControl={<RefreshControl refreshing={triggerRefresh} onRefresh={triggerRefresh} />}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Weather</Text>
        <TouchableOpacity style={styles.unitButton} onPress={toggleUnit}>
          <Text style={styles.unitText}>{unit === 'metric' ? '°C' : '°F'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>

        {error && (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={() => handleSearch(lastCity)}>
              <Text style={styles.retryText}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}

        {!error && currentWeather && (
          <>
            <CurrentWeather weather={currentWeather} unit={unit} onLocation={handleLocation} />
            <WeatherDetails weather={currentWeather} unit={unit} />
            <Forecast forecast={forecast} timezoneOffset={currentWeather.timezone} unit={unit} />
          </>
        )}

        {!error && !currentWeather && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>Enter a city to get started</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}

async function triggerRefresh() {
  // Reload the app to refresh data
  // In a real app, you'd refetch the data
  // For now, just show a message
}

// Extracted components

function CurrentWeather({ weather, unit, onLocation }) {
  if (!weather) return null;

  const { main, weather: weatherArray, sys, name } = weather;
  const condition = weatherArray[0];
  const tempSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <View style={styles.currentWeatherCard}>
      <Text style={styles.cityName}>{name}, {sys.country}</Text>
      <Text style={styles.condition}>{capitalizeFirstLetter(condition.description)}</Text>
      <View style={styles.tempContainer}>
        <Text style={styles.tempValue}>{Math.round(main.temp)}{tempSymbol}</Text>
        <Image
          source={require('./weather-icon-' + condition.icon)}
          style={styles.weatherIcon}
        />
      </View>
    </View>
  );
}

function WeatherDetails({ weather, unit }) {
  if (!weather) return null;

  const { main, wind } = weather;

  return (
    <View style={styles.detailsCard}>
      <Text style={styles.detailLabel}>FEELS LIKE</Text>
      <Text style={styles.detailValue}>{Math.round(main.feels_like)}{unit === 'metric' ? '°C' : '°F'}</Text>
      
      <Text style={styles.detailLabel}>HUMIDITY</Text>
      <Text style={styles.detailValue}>{main.humidity}%</Text>
      
      <Text style={styles.detailLabel}>WIND</Text>
      <Text style={styles.detailValue}>
        {Math.round(wind.speed * 3.6)}{unit === 'metric' ? ' km/h' : ' mph'}
      </Text>
    </View>
  );
}

function Forecast({ forecast, unit }) {
  if (!forecast) return null;

  // Process forecast data
  const dailyData = new Map();

  forecast.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dateKey = date.toISOString().split('T')[0];

    if (!dailyData.has(dateKey)) {
      dailyData.set(dateKey, {
        dateKey,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        icon: item.weather[0].icon,
        description: item.weather[0].description,
        tempMax: item.main.temp_max,
        tempMin: item.main.temp_min,
      });
    } else {
      const existing = dailyData.get(dateKey);
      existing.tempMax = Math.max(existing.tempMax, item.main.temp_max);
      existing.tempMin = Math.min(existing.tempMin, item.main.temp_min);
    }
  });

  const forecastDays = Array.from(dailyData.values()).slice(0, 5);

  return (
    <View style={styles.forecastCard}>
      <Text style={styles.forecastTitle}>5-DAY FORECAST</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.forecastItems}>
        {forecastDays.map((day, index) => (
          <View key={day.dateKey} style={styles.forecastItem}>
            <Text style={styles.forecastDay}>{day.dayName}</Text>
            <Image
              source={require('./weather-icon-' + day.icon)}
              style={styles.forecastIcon}
            />
            <Text style={styles.forecastTemp}>
              {Math.round(day.tempMax)}{unit === 'metric' ? '°C' : '°F'} / {Math.round(day.tempMin)}{unit === 'metric' ? '°C' : '°F'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Style definitions
const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  unitButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    fontSize: 14,
  },
  unitText: {
    color: '#1a73e8',
  },
  currentWeatherCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  condition: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tempValue: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherIcon: {
    width: 64,
    height: 64,
  },
  errorBox: {
    backgroundColor: '#ffe0e0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  errorText: {
    color: '#ff0000',
    marginBottom: 12,
  },
  retryButton: {
    alignSelf: 'center',
  },
  retryText: {
    color: '#ff5252',
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  detailLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#888',
    marginBottom: 8,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  forecastCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  forecastTitle: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#999',
    marginBottom: 16,
  },
  forecastItems: {
    flexDirection: 'row',
    gap: 12,
  },
  forecastItem: {
    minWidth: 60,
    textAlign: 'center',
  },
  forecastDay: {
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  forecastIcon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  forecastTemp: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
  },
});