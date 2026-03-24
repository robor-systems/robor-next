# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Robor Systems marketing/portfolio website built with **Next.js 12.2.2** and **React 17.0.2**. Deployed on **Netlify**.

## Commands

```bash
yarn install          # Install dependencies
yarn dev              # Start dev server (localhost:3000)
yarn build            # Production build
yarn build-export     # Static export (next build && next export)
yarn start            # Start production server
yarn lint             # ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

### Component Organization (Atomic Design)

- **`components/Elements/`** — Atomic UI components (TextField, TextArea, IconButton, ImageNext, SectionHeader, Toast, etc.)
- **`components/Icons/`** — SVG icon components with theme-aware coloring via `SVG_COLORS` constants
- **`components/Modules/`** — Layout primitives (Layout, Header, Footer, Container, Carousel, Snackbar)
- **`components/Templates/`** — Page-level compositions organized by page (Home/, Work/, CaseStudy/, Solutions/)

Each subdirectory has an `index.js` barrel export.

### Routing & Pages

- File-based routing in `pages/`
- Dynamic case study pages at `pages/clients/[slug].jsx` using `getStaticPaths`/`getStaticProps`
- `/work` redirects to `/clients` (configured in `next.config.js`)
- `react-scroll` used for same-page section navigation on homepage

### Data & Content

- All page content lives in **`constants/content/`** as static JS objects (work, clients, team, features, techStack, process)
- No database or CMS — content changes go through constant files
- Form submission uses native HTML forms with Netlify integration

### Styling

- **Tailwind CSS 3.1.6** with JIT mode and class-based dark mode (`darkMode: "class"`)
- **`next-themes`** handles dark/light mode toggle
- Custom theme colors defined via CSS variables in `styles/globals.css`
- Tailwind extended with custom colors (primary, light/dark bg, shade) and a `3xl` breakpoint (1680px)
- Custom component classes (btn-primary, btn-large, form styles) in globals.css `@layer components`
- `clsx` for conditional class composition

### Animation

- **Framer Motion** for component animations
- Predefined variants in `constants/animations/variants.constant.js` (opacity, scale, translate, gradient, etc.)
- **react-intersection-observer** (`InView` component) triggers animations on scroll into view

### Path Aliases

- `@/components/*` maps to `components/*` (configured in `jsconfig.json`)

## Key Configuration

- **next.config.js**: Image domains (unsplash, AWS S3, GitHub, WikiMedia), asset caching, `/work` → `/clients` redirects, Netlify plugin
- **tailwind.config.js**: JIT mode, custom theme colors, Typography/Forms/Line-Clamp plugins
- **middleware.js**: Upstash Redis rate limiting on `/api/stable-diffusion` (6 req / 30 days)

## Environment Variables

- `NEXT_PUBLIC_GOOGLE_ANALYTICS` — GA tracking ID
- `UPSTASH_REDIS_REST_URL` — Rate limiting backend
- `UPSTASH_REDIS_REST_TOKEN` — Rate limiting token

## Conventions

- Functional components with hooks (no class components)
- Manual form state with `useState` + Yup validation (react-hook-form is installed but not actively used)
- Theme constants (`THEME.LIGHT`, `THEME.DARK`) in `constants/theme/theme.constant.js`
- Google Analytics page view tracking on route changes in `_app.jsx`
