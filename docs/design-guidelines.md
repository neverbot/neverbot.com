# neverbot.com Design Guidelines

Personal blog by Iván Alonso (neverbot). Spanish language. Pop culture, cinema, anime, books.

## Color Scheme

### Light Theme

| Role                   | Value      |
| ---------------------- | ---------- |
| Background             | `#fff`     |
| Font (body)            | `#383838`  |
| Font secondary (meta)  | `#767676`  |
| Accent / link hover    | `#ff6699`  |
| Post link              | `#ff6699`  |
| Post link hover        | `#ff276f`  |
| Border                 | `#e8e8e8`  |
| Code font              | `#c7254e`  |
| Code background        | `#f8f5ec`  |
| Table header bg        | `#ffd1e0`  |

### Dark Theme

| Role                   | Value      |
| ---------------------- | ---------- |
| Background             | `#2a2a2a`  |
| Font (body)            | `#e0e0e0`  |
| Font secondary (meta)  | `#a0a0a0`  |
| Accent / link hover    | `#ff7daa`  |
| Post link              | `#ff7daa`  |
| Border                 | `#333`     |
| Code font              | `#e8758b`  |
| Code background        | `#2a2520`  |

Dark mode is activated by system preference (`prefers-color-scheme: dark`) or manual toggle. The toggle button is in the footer (moon/sun icons). Theme preference is stored in localStorage.

## Typography

| Role     | Font                    |
| -------- | ----------------------- |
| Body     | georgia, serif          |
| Alt/Nav  | source-sans-pro, sans   |
| Title    | hamburger-heaven        |

## Header

Minimal: just the site title "neverbot" in hamburger-heaven font, linked to home. A background image (metro map, `background-header.gif`) appears behind the header in light mode. In dark mode, the header background is removed and the min-height shrinks from 270px to 80px. On mobile, the background uses `var(--header-background)` CSS variable to respect dark mode.

## Footer

Shows `┌( ಠ_ಠ)┘` and `4 8 15 16 23 42` (Lost reference). Contains the dark/light theme toggle button. StatCounter analytics script loads after the footer.

## Navigation

No visible navbar. Navigation is through the home page panel system (home, contact, social links) and post archive links.

## Home Page

Panel-based intro with animated text typing effect. Icons for social links (Archive, Twitter/X, LinkedIn, GitHub, Instagram, About). Panels switch via JavaScript with smooth transitions.

## Post Layout

- Post titles use the `#` prefix marker (same as other blogs)
- Posts have `margin: 0 10%` for title and meta
- Content uses `margin: 0 5%`
- Images have `border-radius: 9px`, zoom on hover
- Miniblog posts have bordered cards with `border-radius: 5px`

## Sidebar

Right sidebar with randomized link lists (Fisher-Yates shuffle in vanilla JS).

## Comments

No visible comment system.

## Unique Features

- Dark mode with system preference detection + manual toggle
- Header background image (metro map) only in light mode
- Animated typing text on home page
- StatCounter analytics
