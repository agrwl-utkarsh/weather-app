import { NextRequest, NextResponse } from 'next/server';

interface GeoCity {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.trim();

  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json([]);
  }

  try {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=5&appid=${apiKey}`;
    const res = await fetch(geoUrl, { next: { revalidate: 3600 } });

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const data: GeoCity[] = await res.json();
    
    // Deduplicate and format suggestions
    const seen = new Set<string>();
    const suggestions = [];

    for (const item of data) {
      const parts = [item.name];
      if (item.state) parts.push(item.state);
      if (item.country) parts.push(item.country);
      const label = parts.join(', ');

      if (!seen.has(label)) {
        seen.add(label);
        suggestions.push({
          name: item.name,
          state: item.state,
          country: item.country,
          label,
          lat: item.lat,
          lon: item.lon,
        });
      }
    }

    return NextResponse.json(suggestions);
  } catch {
    return NextResponse.json([]);
  }
}
