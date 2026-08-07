# VeloCore — Landing Page

Premium, dependency-light landing page. No 3D, no scroll-jank — just CSS
transitions and a lightweight IntersectionObserver-based reveal.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What changed from the original

- **Removed framer-motion** — replaced per-card motion.div animations with a
  single lightweight `Reveal` component (IntersectionObserver + CSS
  transition). Same fade-up effect, zero animation-library weight, no
  reflow/jank on scroll.
- **Removed the WebGL/3D bits** — pure CSS glow blobs and a static grid
  background instead. Looks the same at rest, costs nothing on scroll.
- **Merged Architecture + DeploymentTimeline** into tighter grid layouts
  instead of a long vertical scroll of 15 stacked cards — same information,
  much less scrolling.
- **Consistent hover system** — `.panel`, `.btn-primary`, `.btn-secondary`,
  `.chip` utility classes in `index.css` so every card/button animates the
  same way (translateY + border glow, all under 250ms, GPU-cheap).
- **Tailwind v4** via `@tailwindcss/vite` — no separate config file needed.
- Respects `prefers-reduced-motion`.

## Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Features.jsx
    Pipeline.jsx
    Architecture.jsx
    DeploymentInfo.jsx
    TechStack.jsx
    Footer.jsx
    Reveal.jsx      <- fade-up scroll utility
  App.jsx
  index.css          <- design tokens + component classes
  main.jsx
```
