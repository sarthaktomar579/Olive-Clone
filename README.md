# Olive Clone

A pixel-faithful recreation of the [Olive App](https://www.oliveapp.com/) landing page, built with **React + Vite + Tailwind CSS**.

> Built as a frontend assessment to demonstrate translating a visual design into a functional, responsive frontend.

## Tech Stack

- **React 18** with Vite
- **Tailwind CSS v3** (custom `cream` + `olive` palette)
- **Google Fonts**: Fraunces (display serif) + Inter (sans)
- Pure SVG/CSS illustrations — no proprietary assets

## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Logo.jsx              # SVG olive + "live" wordmark
    ├── Navbar.jsx            # Top navigation + Get Olive CTA
    ├── AvatarGroup.jsx       # Trust badge avatars
    ├── Hero.jsx              # Headline, subhead, CTAs
    ├── BackgroundCubes.jsx   # Floating shadow boxes
    └── PhoneMockup.jsx       # iPhone with food-scan card UI
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is deployed to Vercel. Any push to `main` triggers an automatic redeploy.

## Highlights

- Fully responsive — headline scales from `56px → 80px`, layout adapts on mobile
- Centralized theme tokens in `tailwind.config.js`
- All icons hand-coded as inline SVG for crisp rendering and no external requests
- Faithful match to the reference screenshot: trust pill, serif headline, dual CTAs, iPhone mockup with the Fig & Olive Crackers product card, red 46/100 "Avoid" score, and the "Oliver Says" callout

## License

This is a non-commercial educational recreation of the Olive landing page. All trademarks belong to their respective owners.
