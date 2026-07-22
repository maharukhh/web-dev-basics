# Flower Bouquet

A single self-contained HTML file (`flower_bouquet.html`) that renders a colorful
mixed-flower bouquet using pure SVG — no images, no external assets, no
dependencies. Just open the file in any modern web browser.

## What's inside the bouquet

- **1 Sunflower** — center-back, with layered yellow petals and a textured
  brown seed center.
- **3 Roses** — red, pink, and yellow, each built from a radial-gradient
  base with a swirled petal overlay for depth.
- **3 Tulips** — purple, orange, and white/lavender, using soft linear
  gradients and a classic tulip silhouette.
- **3 Daisies** — white, pink, and lavender filler flowers scattered
  around the main blooms.
- **Baby's breath** — small white dots scattered throughout for texture.
- **Leaves & stems** — green gradient stems curving up from a teal vase,
  with a few leaves along the way.
- **Vase** — a teal/mint gradient vase with a pink ribbon bow tied at
  the neck.
- **Background** — a soft radial gradient (cream → peach → pink → purple)
  with a few translucent "bokeh" circles for a dreamy, glowing feel.

## How to view it

1. Download `flower_bouquet.html`.
2. Double-click it, or open it in any browser (Chrome, Firefox, Edge, Safari).
3. No build step, server, or internet connection required.

## How it's built

- Everything is a single `<svg>` element inside a plain HTML page.
- Colors use SVG `<linearGradient>` / `<radialGradient>` definitions
  (declared once in `<defs>`, reused across shapes) so each flower has
  natural-looking shading instead of flat color.
- Each flower type (rose, tulip, sunflower, daisy) is its own group of
  `<path>` / `<ellipse>` / `<circle>` elements positioned with `translate`
  and `scale` so the whole scene can be rearranged or resized easily.
- The page uses simple CSS flexbox to center the SVG on the page and adds
  a soft drop-shadow so the bouquet appears to float above the background.

## Customizing

Some easy things to tweak by editing the file directly:

- **Change flower colors** — edit the `<stop stop-color="...">` values
  inside the relevant gradient in `<defs>` (e.g. `#roseRed`, `#tulipPurple`,
  `#sunflowerCenter`).
- **Add more flowers** — copy an existing flower `<g transform="translate(x,y) scale(s)">...</g>`
  block, change its position/scale, and swap the fill color.
- **Change the background** — edit the `bgGlow` radial gradient or the
  page's CSS `background:` property.
- **Resize the bouquet** — adjust the `viewBox` on the `<svg>` element or
  the `.stage { width: ... }` CSS rule.

## File

- `flower_bouquet.html` — the complete, ready-to-open artifact.
