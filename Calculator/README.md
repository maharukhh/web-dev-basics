# Mahrukh's Calculator

A neumorphic-style calculator supporting basic arithmetic, keyboard input, and a soft-UI design.

## Features
- Addition, subtraction, multiplication, division, and modulo (%)
- Keyboard support (type numbers/operators directly, Enter to compute, Backspace to delete, Escape to clear)
- AC (clear all) and DEL (delete last digit) controls
- Displays both the running operation and the current value
- Divide-by-zero shows "Error" instead of crashing

## How to Run
1. Download `calculator.html`
2. Open it in any browser — no installation or server needed

## How It Works
- Tracks three pieces of state: the `current` number being typed, the `previous` number, and the pending `operation`.
- Pressing an operator (+, −, ×, ÷, %) locks in the previous value and waits for the next number.
- Pressing `=` runs the calculation using a `switch` statement based on the selected operator.
- Keyboard events are mapped to the same functions the on-screen buttons use, so both input methods share the same logic.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Google Fonts (JetBrains Mono) for the display

## Key Concepts Practiced
- DOM manipulation
- Event handling (click + keyboard)
- State management without a framework

## Possible Improvements
- Add scientific functions (square root, exponents)
- Add calculation history log
- Support parentheses / order of operations

## Known Limitations
- Very large numbers may lose precision (standard JavaScript floating-point behavior)
- No undo beyond single-digit delete
