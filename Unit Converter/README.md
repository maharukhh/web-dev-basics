# Unit Converter

A single-page unit converter with three categories — Length, Weight, and Temperature — featuring a clean tabbed interface and instant, live conversion as you type.

## Features
- Three conversion categories: Length, Weight, and Temperature, switchable via tabs
- Live conversion — updates instantly as you type or change units, no "Convert" button needed
- Swap button to instantly flip the "From" and "To" units
- Clean, minimal card-based UI with a custom Google Fonts typeface

## How It Works
- **Length and Weight** conversions work by defining every unit relative to a common base unit (meters for length, kilograms for weight). The input value is first converted to the base unit, then converted from the base unit to the target unit.
- **Temperature** conversion is handled separately with dedicated formulas (Celsius, Fahrenheit, Kelvin), since temperature scales don't share a simple multiplicative relationship the way length/weight units do.
- Switching category tabs repopulates the "From" and "To" dropdowns with the relevant units and re-runs the conversion.
- Every input, dropdown change, and tab switch triggers an immediate recalculation via event listeners — the result updates live with no page reload or button click.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (Sora)

## Key Concepts Practiced
- Unit conversion logic (base-unit normalization)
- DOM manipulation and dynamic dropdown population
- Event-driven live UI updates
- Basic UI/UX design (tabs, card layout)

## Possible Improvements
- Add more categories (area, volume, speed, data storage)
- Add a dark mode toggle
- Remember the last-used category and units between visits (e.g. via `localStorage`)
- Add copy-to-clipboard for the result

## Known Limitations
- Requires an internet connection to load the Google Fonts stylesheet — the converter itself still works offline, but falls back to the browser's default font without internet
- Results are rounded/trimmed to 6 decimal places, so extremely precise conversions may lose a small amount of accuracy in display
