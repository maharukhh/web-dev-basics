# Unit Converter

A multi-category unit converter supporting Length, Weight, and Temperature conversions.

## Features
- Three conversion categories: Length, Weight, Temperature
- Length: mm, cm, m, km, in, ft, yd, mi
- Weight: mg, g, kg, t, oz, lb
- Temperature: Celsius, Fahrenheit, Kelvin
- Swap button to instantly reverse the "from" and "to" units
- Live conversion as you type — no submit button needed

## How to Run
1. Opens in any browser — no installation or server needed
2. Pick a category tab, enter a value, and choose your "from" and "to" units

## How It Works
- **Length and Weight** conversions work by converting the input value to a common base unit (meters for length, kilograms for weight) using a lookup table of conversion factors, then converting from that base unit to the target unit.
- **Temperature** conversion is handled separately since it requires formulas rather than simple multiplication (e.g. `F = C × 9/5 + 32`), so the app converts everything through Celsius as an intermediate step.
- Switching tabs repopulates the unit dropdowns for that category and re-runs the conversion automatically.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (Sora)

## Key Concepts Practiced
- Multi-unit conversion logic
- Working with lookup tables / conversion factors
- Conditional formulas (temperature vs. linear unit conversion)

## Possible Improvements
- Add more categories (area, volume, speed, data storage)
- Add a "copy result" button
- Remember the last-used category and units between visits

## Known Limitations
- Very large or very small numbers may show in a slightly rounded form due to floating-point precision
