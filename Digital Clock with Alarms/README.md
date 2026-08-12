# Digital Clock with Alarms

A live digital clock with a full alarm system — set, label, toggle, and delete alarms, with an audible beep when one goes off.

## Features
- Live-updating clock (hours, minutes, seconds) and full date display
- Set alarms with an optional custom label
- Enable/disable individual alarms without deleting them
- Delete alarms
- Audible beep + on-screen banner when an alarm goes off
- Alarms persist across page reloads using `localStorage`


## How It Works
- The clock uses `setInterval` to update the displayed time every second from `new Date()`.
- Each alarm is stored as `{ id, time, label, enabled }` and saved to `localStorage`.
- Every second, the app checks if the current `HH:MM` matches any enabled alarm's time — if so, it triggers a repeating beep using the Web Audio API (`AudioContext` + oscillator) and shows a dismiss banner.
- Clicking the banner stops the beeping and resets the "ringing" state.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Web Audio API (for the alarm sound — no external audio files needed)
- Browser `localStorage` API
- Google Fonts (Space Mono + Inter)

## Key Concepts Practiced
- Date/Time API
- Timers (`setInterval`)
- localStorage persistence
- Basic audio generation in the browser

## Possible Improvements
- Repeat alarms on specific days of the week
- Snooze button
- Multiple alarm sound options
- Browser notifications (via the Notifications API) in addition to the in-page banner

## Known Limitations
- The alarm only rings while the browser tab is open (this is a frontend-only demo, not a background service)
- Some browsers block audio until the user has interacted with the page at least once — click anywhere on the page first if the beep doesn't play
