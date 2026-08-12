# BMI Calculator

A Body Mass Index calculator supporting both metric and imperial units, with a visual category scale.

## Features
- Toggle between Metric (kg/cm) and Imperial (lb/in)
- Calculates BMI and classifies it into Underweight / Normal / Overweight / Obese
- Color-coded result with a visual scale showing where your BMI falls
- Input validation (rejects empty or invalid values)

## How It Works
- **Metric formula**: `BMI = weight(kg) / height(m)²`
- **Imperial formula**: `BMI = 703 × weight(lb) / height(in)²`
- The result is matched against standard BMI category thresholds (18.5, 25, 30) to determine the label and color shown.
- Switching units resets the input fields and hides the previous result to avoid mixing unit systems by accident.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (Manrope)

## Key Concepts Practiced
- Form input handling
- Conditional logic (category classification)
- Unit conversion between measurement systems

## Possible Improvements
- Store a history of past BMI checks over time (with a chart)
- Add age/sex-adjusted healthy weight ranges
- Add a "healthy weight range" calculation for the entered height

## Known Limitations
- BMI is a general screening tool — it doesn't account for muscle mass, bone density, age, or body composition. This app includes a note about that limitation directly in the results.
- Not a substitute for professional medical advice
