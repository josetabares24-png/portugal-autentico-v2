'use client';

import { useEffect, useMemo, useState } from 'react';

type WeatherState = {
  temperature: number | null;
  icon: string;
};

const LISBON_COORDS = { lat: 38.7223, lon: -9.1393 };

const weatherIconForCode = (code: number | null) => {
  if (code === null) return '⛅';
  if (code === 0) return '☀️';
  if ([1, 2, 3].includes(code)) return '🌤️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 56, 57, 61, 63, 65].includes(code)) return '🌦️';
  if ([71, 73, 75, 77].includes(code)) return '❄️';
  if ([80, 81, 82].includes(code)) return '🌧️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '⛅';
};

type LisbonStatusProps = {
  className?: string;
};

export default function LisbonStatus({ className }: LisbonStatusProps) {
  const [time, setTime] = useState('');
  const [weather, setWeather] = useState<WeatherState>({ temperature: null, icon: '⛅' });

  const timeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat('es-ES', {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
      }),
    []
  );

  useEffect(() => {
    const updateTime = () => {
      setTime(timeFormatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, [timeFormatter]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchWeather = async () => {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${LISBON_COORDS.lat}&longitude=${LISBON_COORDS.lon}&current_weather=true&timezone=Europe%2FLisbon`;
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        const temperature = data?.current_weather?.temperature;
        const code = data?.current_weather?.weathercode ?? null;
        setWeather({
          temperature: typeof temperature === 'number' ? Math.round(temperature) : null,
          icon: weatherIconForCode(code),
        });
      } catch {
        // ignore
      }
    };

    fetchWeather();
    return () => controller.abort();
  }, []);

  const baseClassName = 'items-center gap-1.5 text-xs font-semibold';
  const wrapperClassName = className
    ? `${baseClassName} ${className}`
    : `hidden md:flex ${baseClassName} text-slate-500`;

  return (
    <div className={wrapperClassName}>
      <span className="hidden md:inline">Lisboa</span>
      <span className="hidden md:inline text-slate-300">•</span>
      <span className="whitespace-nowrap font-medium">{time || '--:--'}</span>
      <span className="text-slate-300 mx-1">•</span>
      <span className="whitespace-nowrap">
        {weather.temperature !== null ? `${weather.temperature}°C` : '--°C'} {weather.icon}
      </span>
    </div>
  );
}
