"use client";
import { useState } from "react";
import { Markazi_Text } from "next/font/google";

const markaziTextFont = Markazi_Text({
  subsets: ["latin"],
  weight: "400"
});

export default function WeatherCard({ date, maxTemp, minTemp, wind, weatherCode, sunrise, sunset, precipitation }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Moderate drizzle',
    56: 'Freezing drizzle',
    57: 'Freezing drizzle',
    61: 'Slight Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    66: 'Freezing Rain',
    67: 'Freezing Rain',
    71: 'Slight Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow grains',
    80: 'Slight Rain showers',
    81: 'Moderate Rain showers',
    82: 'Heavy Rain showers',
    85: 'Slight Snow showers',
    86: 'Heavy Snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm',
    99: 'Thunderstorm',
  };

  const icons = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️', 
    51: '🌦️', 53: '🌦️', 55: '🌦️', 56: '🌦️', 57: '🌦️', 
    61: '🌧️', 63: '🌧️', 65: '🌧️', 66: '🌧️', 67: '🌧️', 
    71: '❄️', 73: '❄️', 75: '❄️', 77: '❄️',
    80: '🌧️', 81: '🌧️', 82: '🌧️', 85: '❄️', 86: '❄️', 
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };

  const description = weatherDescriptions[weatherCode] || 'Unknown';
  const formattedDate = new Date(date).toLocaleDateString('en-GB');
  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div 
      onClick={toggleExpanded} 
      className="p-4 border border-blue-400 rounded shadow text-center bg-blue-200 w-100 m-1 shadow-md cursor-pointer hover:bg-blue-300 transition"
    >
      <h3 className={`text-3xl ${markaziTextFont.className}`}>{dayName}</h3>
      <p className="text-blue-500">{formattedDate}</p>
      <div className="text-4xl my-2">{icons[weatherCode] || '❓'}</div>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="text-lg">{maxTemp}°C / {minTemp}°C</p>
      <p className="text-sm text-gray-700">💨 {wind} km/h</p>

      {expanded && (
  <div>
    <p>🌅 Sunrise: {sunrise}</p>
    <p>🌇 Sunset: {sunset}</p>
    <p>🌧 Precipitation: {precipitation} mm</p>
  </div>
)}


    </div>
  );
}
