# Mahrukh's app — Weather App

A single-file weather app that shows live current conditions and a 5-day forecast for any city, styled with a sunset/dusk theme that shifts between day and night colors based on the actual time at the searched location.

## Features
- Search weather by city name
- "Use my location" button (browser geolocation)
- Current temperature, "feels like", humidity, and wind speed
- 5-day forecast with daily high/low and condition icons
- Background gradient automatically switches between day and night look, based on real sunlight data at that location
- No API key required

## How to Run
1. Download `weather-app.html`
2. Double-click it (or open it in any browser: Chrome, Firefox, Edge, Safari)
3. Type a city name and hit **Search**, or click **📍** to use your current location

No installation, server, or build step needed — it's a single HTML file that runs entirely in the browser.

## How It Works
- **Geocoding**: When you search a city, the app calls the free [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) to convert the city name into latitude/longitude.
- **Forecast**: Those coordinates are sent to the [Open-Meteo Forecast API](https://open-meteo.com/en/docs) to fetch current conditions and a 5-day outlook.
- **Weather codes**: Open-Meteo returns numeric WMO weather codes (e.g. `0` = clear sky, `61` = light rain). The app maps these to a plain-language label and an emoji icon.
- **Day/night**: The API also returns an `is_day` flag for the searched location, which the app uses to switch the background gradient.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks, no build tools)
- [Open-Meteo](https://open-meteo.com/) — free weather API, no API key required
- Google Fonts (Fraunces + Inter) loaded via CDN
- Browser Geolocation API

## Possible Improvements (Good Next Steps)
- Cache recent searches in memory so switching between cities is instant
- Add hourly forecast view
- Add unit toggle (°C / °F)
- Show wind direction with a compass icon
- Handle offline/network-error states with a retry button

## Known Limitations
- Requires an internet connection (fetches live data from Open-Meteo)
- Geolocation only works if the browser/user grants permission
- City search returns the single best match — very ambiguous city names (e.g. "Springfield") may return an unexpected result
