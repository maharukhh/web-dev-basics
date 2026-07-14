# Mahrukh's app — To-Do List App

A CRUD to-do list with persistent storage, filtering, and a clean minimalist interface.

## Features
- Add, complete, and delete tasks
- Tasks persist across page reloads using `localStorage`
- Filter view: All / Active / Done
- "Clear completed" button to bulk-remove finished tasks
- Live counter showing tasks remaining

## How to Run
1. Download `todo-list.html`
2. Open it in any browser — no installation or server needed
3. Tasks you add will still be there next time you open the file, in the same browser

## How It Works
- Tasks are stored as an array of objects (`{ id, text, done }`) in a JavaScript variable, and synced to `localStorage` every time the list changes.
- On page load, the app reads from `localStorage` to restore your previous list.
- The filter buttons don't delete or hide data permanently — they just control which subset of the `tasks` array gets rendered.
- User input is escaped before being inserted into the page, to avoid breaking the layout if someone types HTML-like text.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks)
- Browser `localStorage` API
- Google Fonts (Inter)

## Key Concepts Practiced
- CRUD operations (Create, Read, Update, Delete)
- localStorage for persistence
- Array filtering and rendering
- Basic input sanitization

## Possible Improvements
- Drag-and-drop reordering
- Due dates / reminders
- Categories or tags per task
- Sync across devices (would require a backend)

## Known Limitations
- Data is stored only in the browser that created it — clearing browser data will erase tasks
- No multi-device sync (this is a frontend-only project)
