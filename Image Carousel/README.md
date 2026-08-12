# Image Carousel

A smooth, auto-playing carousel component with navigation arrows, dot indicators, keyboard control, and touch swipe support.

## Features
- 5 sample slides with gradient backgrounds, icons, titles, and descriptions
- Previous/Next arrow navigation
- Clickable dot indicators
- Autoplay (advances every 3.5 seconds) with an on/off toggle
- Keyboard support (Left/Right arrow keys)
- Touch swipe support for mobile


## How It Works
- All slides live in a single flex container that's wider than the visible viewport; moving between slides is done by shifting that container horizontally with a CSS `transform: translateX()`, animated with a `transition`.
- Dots and the slide counter are generated dynamically based on the number of slides in the data array, so adding more slides doesn't require touching the HTML.
- Autoplay uses `setInterval` and resets its timer whenever the user manually navigates, so manual clicks don't fight with the automatic advance.
- Touch swipe is detected by comparing the X position where a touch started vs. where it ended.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- CSS transitions for the slide animation
- Google Fonts (Inter)

## Key Concepts Practiced
- DOM traversal and dynamic rendering
- CSS transitions
- Timer-based autoplay
- Touch event handling

## Possible Improvements
- Support real uploaded images instead of gradient placeholders
- Add lazy-loading for large image sets
- Add a lightbox/fullscreen view on click

## Known Limitations
- Uses gradient placeholders + emoji instead of real photos — swap in your own `<img>` tags to use real images
- Very rapid clicking on navigation can occasionally overlap animations on slower devices
