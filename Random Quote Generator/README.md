# Mahrukh's Website — Random Quote Generator

A single-file random quote generator with a literary, "reading room" visual style, a built-in collection of 35 quotes (mixing general motivation with tech, science, and robotics/AI themed lines), and a copy-to-clipboard button.

## Features
- Click **Next Quote** to display a new random quote (never repeats the same quote twice in a row)
- Each quote shows its author and a category tag (e.g. Innovation, Engineering, Robotics, AI)
- **Copy** button copies the quote + author to your clipboard, with a checkmark confirmation
- Smooth fade transition between quotes
- Quote counter shows total collection size
- No internet connection or API required — all quotes are stored locally in the file

## How to Run
1. Download `quote-generator.html`
2. Double-click it (or open it in any browser: Chrome, Firefox, Edge, Safari)
3. Click **Next Quote** to start browsing

No installation, server, or build step needed — it's a single HTML file that runs entirely offline in the browser.

## How It Works
- All 35 quotes live in a JavaScript array (`quotes`) directly inside the file — each entry has `text`, `author`, and `tag`.
- Clicking **Next Quote** picks a random index, avoiding immediate repeats, fades the old quote out, swaps the text, and fades the new quote in.
- The **Copy** button uses the browser's `navigator.clipboard` API to copy the current quote as plain text.

## Tech Used
- Plain HTML, CSS, and JavaScript (no frameworks, no build tools)
- Google Fonts (Playfair Display + Inter) loaded via CDN
- Clipboard API

## How to Add Your Quotes
Open the file, find the `quotes` array near the top of the `<script>` section, and add a new line in this format:
```js
{ text: "Your quote here.", author: "Author Name", tag: "Category" },
```

## Possible Improvements (Good Next Steps)
- Filter quotes by category/tag
- "Share to Twitter/X" button
- Keyboard shortcut (e.g. spacebar) to get a new quote
- Favorite/save quotes to a list
- Pull quotes from a live API instead of a local array

## Known Limitations
- Quote collection is fixed at build time — no live updates unless you edit the file
- Copy button requires a browser that supports the Clipboard API (all modern browsers do)
