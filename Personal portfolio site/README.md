# Mahrukh Owais — Portfolio Website

A fully data-driven personal portfolio site built with vanilla HTML, CSS, and JavaScript — showcasing robotics, AI, and full-stack projects.

**Live Site:** [maharukhh.github.io](https://maharukhh.github.io)

## Overview

This portfolio is designed around a single-source-of-truth architecture: all content — experience, projects, skills, certifications — lives in one data file, and the entire page renders dynamically from it. Updating the site means editing data, not markup.

## Features

- **Data-driven rendering** — all sections (hero, timeline, projects, skills, certifications) generate dynamically from a central data object
- **Category-filtered project grid** — projects can be filtered by track (Robotics, AI, Personal)
- **Auto-rotating hero slideshow** with manual dot navigation
- **Scroll-based reveal animations** using the Intersection Observer API
- **Fully responsive** with a mobile navigation menu
- **Custom design system** — blueprint-inspired grid background, consistent typography and color tokens via CSS variables

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, responsive grid/flexbox layouts, animations
- **JavaScript (Vanilla)** — DOM rendering, Intersection Observer, event handling

No frameworks or build tools — everything runs directly in the browser.

## Project Structure
├── index.html          # Page structure and section containers
├── resume-data.js       # All content — the only file that needs editing for updates
├── script.js            # Renders data into the DOM, handles interactions & animations
└── style.css             # Design system and layout

## Updating Content

All personal content — experience, projects, skills, certifications, contact info — is centralized in `resume-data.js`. No changes to `index.html`, `script.js`, or `style.css` are needed for routine content updates.

## Author

**Mahrukh Owais**
Robotics & Intelligent Systems Student, Bahria University
[GitHub](https://github.com/maharukhh) · [LinkedIn](https://linkedin.com/in/mahrukh-owais-49a8b7315)
