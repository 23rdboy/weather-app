export default function WeatherCard({ date, maxTemp, minTemp, wind, weatherCode }) {
  // Weather code to description mapping
  const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Partly cloudy',
    2: 'Partly cloudy',
    3: 'Cloudy',
    45: 'Foggy',
    51: 'Light drizzle',
    61: 'Drizzle',
    71: 'Snow',
    80: 'Rainy',
    95: 'Thunderstorm',
  };

  // Get the weather description from the mapping
  const description = weatherDescriptions[weatherCode] || 'Unknown weather';

  // Format the date as DD/MM/YYYY
  const formattedDate = new Date(date).toLocaleDateString('en-GB');

  // Get the day of the week
  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

  // Weather icons mapping
  const icons = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 51: '🌦️', 61: '🌧️', 71: '❄️',
    80: '🌧️', 95: '⛈️'
  };

  return (
    <div className="p-4 border rounded shadow text-center bg-blue-200 w-100 m-1 shadow-md">
      <h3 className="font-semibold text-2xl">{dayName}</h3>
      <p className="text-gray-500">{formattedDate}</p> {/* Display date in DD/MM/YYYY */}
      
      {/* Weather Icon */}
      <div className="text-4xl my-2">
        {icons[weatherCode] || '❓'}
      </div>

      {/* Weather Description */}
      <p className="text-sm text-gray-700 mb-2">{description}</p> {/* Weather description here */}
      
      {/* Temperature and Wind speed */}
      <p className="text-lg">{maxTemp}°C / {minTemp}°C</p>
      <p className="text-sm text-gray-700">💨 {wind} km/h</p>
    </div>
  );
}
