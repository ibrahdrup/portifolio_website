# README.md

This document provides guidance for working with the code in this repository.

---

## Project Overview

This is a static single-page portfolio website for a graphic designer (Gladys Siso).

Tech stack:
- Plain HTML
- SCSS (compiled to CSS)
- Vanilla JavaScript

There are:
- No frameworks
- No package manager
- No build system
- No test runner

---

## Development

### Previewing the Project

You can run the project in two ways:

**Option 1 — Open directly**
- Open `index.html` in your browser.

**Option 2 — Local server (recommended)**

```bash
python3 -m http.server
```

Then visit:
```
http://localhost:8000
```

---

## SCSS Compilation

The source of truth for styling is:

```
assets/scss/styles.scss
```

The compiled CSS output is:

```
assets/css/styles.css
```

If you modify the SCSS file, recompile it with:

```bash
sass assets/scss/styles.scss assets/css/styles.css
```

If Sass is not installed:
- Edit `assets/css/styles.css` directly
- Ensure changes are mirrored in the SCSS file

There are no linters or formatting tools configured.

---

## Architecture

### Single-Page Structure (`index.html`)

The site consists of one HTML file with anchored sections:

- Home
- About
- Skills
- Work
- Contact

Navigation links scroll to sections using:

```html
href="#sectionId"
```

The layout uses a `.bd-grid` container with a max-width of 1024px.

---

## Styling

### File Structure

```
assets/scss/styles.scss   → source
assets/css/styles.css     → compiled output
```

### Theming

CSS custom properties are defined in `:root`.

Primary color is controlled by:

```css
--hue-color: 224;
```

Changing this value recolors the entire site (HSL-based theme).

---

### Naming Convention

Uses a BEM-like structure:

- Block → `home`
- Element → `home__title`
- Modifier → `home__title-color`

SCSS nesting is used for organization.

---

### Responsive Breakpoints

- 320px — small phones
- 576px — larger phones
- 768px — tablets (desktop navigation activates)
- 992px — desktop (centers grid)

Mobile navigation is an off-screen panel toggled via the `.show` class.

---

## JavaScript (`assets/js/main.js`)

All JavaScript logic lives in a single file.

### Features

### 1. Mobile Navigation Toggle
`showMenu()` toggles the `.show` class on the navigation menu.

### 2. Scroll-Active Link
`scrollActive()` highlights the navigation link of the currently visible section.

### 3. Skill Bar Animation
On `DOMContentLoaded`:
- Reads `.skills__percentage` values
- Dynamically sets corresponding `.skills__bar` widths

No manual CSS width configuration is required for new skills.

### 4. Work Gallery with Modal

`modal_work()`:

- Dynamically builds the portfolio grid
- Uses a hardcoded media array (images + `.mp4` videos)
- Opens a fullscreen modal
- Supports:
    - Keyboard arrow navigation
    - Touch swipe navigation
    - Thumbnail strip
    - Image zoom toggle

`modal_work2()` is an older image-only version that is not currently used.

### 5. ScrollReveal Animations

ScrollReveal (via CDN) is used for scroll-triggered animations.

---

## External Dependencies (CDN)

Loaded directly via CDN:

- BoxIcons (icon font)
- ScrollReveal (animations)
- Google Fonts — Poppins (400, 600, 700)

---

## Media Files

All images and videos are located in:

```
assets/img/
```

Portfolio media items are defined inside the `workMedia` array in:

```
assets/js/main.js
```

To add or remove portfolio items, update that array.

---

## Development Patterns

### Adding a New Section

Follow this structure:

```html
<section class="newsection section" id="newsection">
  <h2 class="section-title">New Section</h2>
  <div class="bd-grid">
    <!-- content -->
  </div>
</section>
```

Then add a matching navigation link:

```html
<a href="#newsection" class="nav__link">New Section</a>
```

---

## Important Notes

- The compiled CSS file contains manual modifications.
- Some styles (e.g., `.home`) differ between SCSS and CSS.
- Always check both files before making styling changes.
- Keep SCSS and CSS in sync.

---