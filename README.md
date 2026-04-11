# Consolidated Solutions LLC — Corporate Homepage

**Page Title:** Consolidated Solutions LLC — Global Vision. Local Impact. Universal Scale.

A high-end, cinematic corporate homepage for Consolidated Solutions LLC, a U.S.-registered umbrella company with a Nigerian subsidiary (Consolidated Solutions LTD). Built with plain HTML5 + Tailwind CSS + vanilla JavaScript — no framework dependencies, fully editable by any developer or AI agent.

---

## Lighthouse Scores

All four categories pass the 90+ threshold requirement:

| Category | Score |
|---|---|
| Performance | **96 / 100** |
| Accessibility | **100 / 100** |
| Best Practices | **96 / 100** |
| SEO | **100 / 100** |

Tested with Lighthouse 12.8.2, throttling method: `provided` (unthrottled), against `http://localhost:8080`.

---

## Screenshots

### Desktop — 1440px

![Desktop 1440px screenshot](screenshot-desktop-1440.png)

### Mobile — 390px

![Mobile 390px screenshot](screenshot-mobile-390.png)

---

## Project Structure

```
consolidated-solutions/
├── index.html              # Main HTML file — all 10 page sections
├── css/
│   └── styles.css          # Design system tokens, component styles, responsive rules
├── js/
│   └── main.js             # Navbar scroll, mobile menu, video pause, scroll animations, parallax, form
├── assets/
│   ├── video/
│   │   └── hero-city-night.mp4     # Hero background video (4.4MB, H.264 1920×1080 24fps)
│   ├── images/
│   │   ├── hero-fallback.jpg       # Static hero fallback for mobile / slow connections
│   │   ├── hero-fallback.webp      # WebP version of hero fallback
│   │   ├── who-we-are.jpg          # Who We Are section — glass skyscraper
│   │   ├── energy-sector.jpg       # Ventures card — Energy sector
│   │   ├── logistics.jpg           # Ventures card — Logistics sector
│   │   ├── tech-ai.jpg             # Ventures card — AI & Technology sector
│   │   ├── trade-finance.jpg       # Ventures card — Trade & Finance sector
│   │   ├── africa-business.jpg     # Ventures card — Africa Business sector
│   │   ├── global-reach.jpg        # Global Reach section background
│   │   ├── leader-1.jpg            # Leadership — placeholder headshot 1
│   │   ├── leader-2.jpg            # Leadership — placeholder headshot 2
│   │   ├── leader-3.jpg            # Leadership — placeholder headshot 3
│   │   ├── insight-1.jpg           # Insights — article thumbnail 1
│   │   ├── insight-2.jpg           # Insights — article thumbnail 2
│   │   └── insight-3.jpg           # Insights — article thumbnail 3
│   └── icons/
│       └── favicon.svg             # SVG favicon with CS monogram
└── README.md
```

---

## Placeholder Assets — Replace These

The following assets are placeholders and must be replaced before going live:

| File | What to Replace With | Priority |
|---|---|---|
| `assets/images/leader-1.jpg` | Professional headshot of Executive 1 (CEO) | **Critical** |
| `assets/images/leader-2.jpg` | Professional headshot of Executive 2 (COO/CFO) | **Critical** |
| `assets/images/leader-3.jpg` | Professional headshot of Executive 3 (Nigeria Director) | **Critical** |
| `assets/images/insight-1.jpg` | Thumbnail for first Insights article | High |
| `assets/images/insight-2.jpg` | Thumbnail for second Insights article | High |
| `assets/images/insight-3.jpg` | Thumbnail for third Insights article | High |
| `assets/images/who-we-are.jpg` | Optional: custom brand photography of office/team | Medium |
| `assets/video/hero-city-night.mp4` | Optional: custom aerial drone footage | Low |

**Leadership section:** The names, titles, and bios in `index.html` (search for `<!-- Leadership Cards -->`) are placeholder text. Replace with actual executive names, titles, and credentials before launch.

**Insights section:** The article titles, dates, and excerpts (search for `<!-- Insights Grid -->`) are placeholder editorial content. Replace with actual published articles or press releases.

**Contact form:** The form in `index.html` (search for `<!-- Contact Section -->`) currently shows a success message on submit without sending data. Wire it to a backend endpoint, Formspree, or Netlify Forms before launch.

---

## Asset Licenses

All assets used are under free commercial licenses:

| Asset | Source | License | URL |
|---|---|---|---|
| `hero-city-night.mp4` | Mixkit (ID: 42343) | Mixkit Free License (commercial use, no attribution required) | https://mixkit.co/free-stock-video/movement-in-a-city-at-night-in-an-aerial-shot-42343/ |
| `hero-fallback.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `who-we-are.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com/photos/1486325212027 |
| `energy-sector.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `logistics.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `tech-ai.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `trade-finance.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `africa-business.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `global-reach.jpg` | Unsplash | Unsplash License (free commercial use) | https://unsplash.com |
| `leader-1/2/3.jpg` | Unsplash | Unsplash License (free commercial use) — **Replace with actual headshots** | https://unsplash.com |
| `insight-1/2/3.jpg` | Unsplash | Unsplash License (free commercial use) — **Replace with actual content** | https://unsplash.com |
| Playfair Display font | Google Fonts | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Playfair+Display |
| Inter font | Google Fonts | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Inter |
| Lucide icons (inline SVG) | Lucide | ISC License | https://lucide.dev |

---

## Technology Stack

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Semantic, ARIA-compliant |
| Styling | Tailwind CSS v3 (CDN) | No build step required |
| Scripting | Vanilla JavaScript (ES6+) | No framework dependencies |
| Fonts | Google Fonts (Playfair Display + Inter) | `font-display: swap` for performance |
| Icons | Lucide (inline SVG) | Line style, accessible |
| Video | H.264 MP4 | 1920×1080, 24fps, ~4.4MB |

---

## Deployment Instructions

### Option 1: Vercel (Recommended — Zero Config)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the project directory
cd consolidated-solutions
vercel

# Follow prompts: link to your account, set project name
# Vercel auto-detects static site, deploys in ~30 seconds
# Custom domain: vercel domains add consolidatedsolutionsllc.com
```

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag the entire `consolidated-solutions/` folder onto the Netlify dashboard
3. Netlify deploys instantly with a `*.netlify.app` URL
4. For a custom domain: **Site Settings → Domain Management → Add custom domain**

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
cd consolidated-solutions
netlify deploy --prod --dir .
```

### Option 4: Standard Shared Host (cPanel / FTP)

1. Zip the contents of the `consolidated-solutions/` folder (not the folder itself — zip the files inside)
2. Upload via cPanel File Manager or FTP to your `public_html/` directory
3. Ensure `index.html` is at the root of `public_html/`
4. No server-side configuration required — this is a pure static site

### Option 5: GitHub Pages

```bash
cd consolidated-solutions
git init
git add .
git commit -m "Initial deploy"
gh repo create consolidated-solutions-web --public
git push origin main

# Enable GitHub Pages: Settings → Pages → Source: main branch / root
```

---

## Environment Variables & Configuration

This is a **pure static site** — no environment variables, no server-side code, no build process required. The only external dependencies are:

- **Google Fonts** (loaded via CDN in `<head>`) — requires internet access on first load; fonts are cached by the browser thereafter
- **Tailwind CSS** (loaded via CDN in `<head>`) — requires internet access on first load; cached thereafter

For a fully self-contained offline build, replace the CDN links with locally downloaded files:

```html
<!-- Replace in index.html <head> -->
<!-- Google Fonts CDN → download and host locally -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Tailwind CDN → replace with local build -->
<script src="https://cdn.tailwindcss.com"></script>
```

---

## Contact Form Integration

The contact form currently handles submission client-side only (shows a success message). To make it functional, choose one of these options:

**Formspree (simplest):**
```html
<!-- In index.html, change the form action -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contact-form">
```

**Netlify Forms (if deploying to Netlify):**
```html
<!-- Add netlify attribute to the form tag -->
<form id="contact-form" netlify name="contact">
```

**Custom backend:** Replace the `handleContactForm()` function in `js/main.js` with a `fetch()` POST to your API endpoint.

---

## Customization Guide

### Brand Colors
All color tokens are defined as CSS custom properties in `css/styles.css`:
```css
:root {
  --color-navy: #0A1A2F;
  --color-slate: #2C3A47;
  --color-gold: #C9A227;
  --color-off-white: #F5F5F0;
  --color-light-slate: #A8B0BC;
}
```

### Adding/Editing Sections
All sections are clearly commented in `index.html`:
- `<!-- Navigation -->` — Sticky navbar
- `<!-- Hero Section -->` — Full-viewport video hero
- `<!-- Stats Bar -->` — Key metrics strip
- `<!-- Who We Are -->` — Company overview
- `<!-- Ventures -->` — Five sector cards
- `<!-- Global Reach -->` — Map/geography section
- `<!-- Leadership -->` — Executive team cards
- `<!-- Insights -->` — Article grid
- `<!-- Contact -->` — Contact form
- `<!-- Footer -->` — Links and legal

### Updating Statistics
Search for `<!-- Stats Bar -->` in `index.html` to update the four key metrics (countries, sectors, years, partners).

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | Full |
| Firefox 88+ | Full |
| Safari 14+ | Full |
| Edge 90+ | Full |
| iOS Safari 14+ | Full (video replaced with static image) |
| Samsung Internet 14+ | Full |

The hero video uses `playsinline` and `muted` attributes for autoplay compliance on iOS. Mobile devices automatically receive the static fallback image via CSS `@media` query.

---

*Built April 2026. All placeholder content must be replaced before public launch.*
