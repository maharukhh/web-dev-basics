# ⏳ Countdown Timer

A responsive countdown timer built with vanilla HTML, CSS, and JavaScript.

## Overview

A single-file countdown timer that allows users to set a custom target date and time, then tracks the remaining days, hours, minutes, and seconds with a live progress bar and real-time updates.

## Features

- Custom target date & time input
- Optional event name
- Quick presets (+5 min, +15 min, +1 hour, +24 hours)
- Live countdown display
- Progress bar showing elapsed time
- Real-time digital clock
- Automatic countdown completion status
- Fully responsive layout

## Tech Stack

- **HTML5**
- **CSS3** — custom properties, responsive design, grid layout
- **JavaScript (Vanilla)** — `Date` object, `setInterval`, DOM manipulation

No frameworks or dependencies — everything runs directly in the browser.

## Project Structure

```
├── README.md
├── Output mp4
└── countdown-timer.html      # Complete application (HTML, CSS & JavaScript)
```

## Usage

1. Open **countdown-timer.html** in any modern web browser.
2. Enter an optional event name.
3. Select a target date and time or choose one of the preset options.
4. Click **Start Count** to begin the countdown.
5. Monitor the live timer, progress bar, and current status.
6. Click **Reset** to start a new countdown.

## How It Works

- Calculates the remaining time using JavaScript's **Date API**.
- Updates the countdown every second using `setInterval()`.
- Displays the remaining days, hours, minutes, and seconds.
- Updates the progress bar based on elapsed time.
- Automatically changes the status once the countdown reaches zero.

## Highlights

- Clean and responsive interface
- Lightweight single-file application
- Real-time countdown updates
- Live progress visualization
- Beginner-friendly source code
- Easy to customize

## Future Improvements

- Pause and resume functionality
- Multiple countdown timers
- Sound notification on completion
- Browser notifications
- Local storage support
- Dark/Light mode

## Author

**Mahrukh Owais**  
Robotics & Intelligent Systems Student, Bahria University

**GitHub:** https://github.com/maharukhh  
**LinkedIn:** https://www.linkedin.com/in/mahrukhowais
