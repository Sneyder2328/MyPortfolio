# Portfolio Migration Plan: Gatsby → Astro

## Overview
Migrating the personal portfolio from Gatsby (React + SCSS) to Astro + React + TypeScript + Tailwind CSS with a modern, elegant Apple-like design in dark mode with black/white color scheme.

## Tech Stack
- **Framework**: Astro 5.x with React integration
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Package Manager**: pnpm
- **Internationalization**: Custom i18n with English & Spanish support

## Design Direction
- **Theme**: Dark mode only
- **Colors**: Black and white with subtle grays
- **Style**: Apple-like minimalism, clean typography, generous whitespace
- **Typography**: Inter (Google Fonts)
- **Animations**: Subtle, smooth scroll-triggered transitions

---

## Tasks Checklist

### Phase 1: Project Setup ✅
- [x] **1.1** Create new Astro project in `astro-version/` folder
- [x] **1.2** Configure TypeScript (`tsconfig.json`)
- [x] **1.3** Install and configure Tailwind CSS
- [x] **1.4** Install React integration for Astro
- [x] **1.5** Set up project structure and folders
- [x] **1.6** Configure base Tailwind theme (dark mode, colors, fonts)
- [x] **1.7** Set up global styles and CSS variables

### Phase 2: Core Infrastructure ✅
- [x] **2.1** Create i18n system (language context, translations)
- [x] **2.2** Port English translations (`en.ts`)
- [x] **2.3** Port Spanish translations (`es.ts`)
- [x] **2.4** Create language switcher component
- [x] **2.5** Set up localStorage language persistence
- [x] **2.6** Create base layout component with SEO

### Phase 3: UI Components ✅
- [x] **3.1** Create reusable Button component
- [x] **3.2** Create Section wrapper with scroll animations
- [x] **3.3** Create smooth scroll navigation (SmoothLink)
- [x] **3.4** Create animated container component
- [x] **3.5** Set up icon system (Lucide React)

### Phase 4: Sections - Layout ✅
- [x] **4.1** Create Navbar component with glass morphism effect
- [x] **4.2** Add mobile hamburger menu
- [x] **4.3** Create Footer component
- [x] **4.4** Create main page layout structure

### Phase 5: Sections - Content ✅
- [x] **5.1** Create Hero/Home section with modern typography
- [x] **5.2** Port projects data (`projects.ts`)
- [x] **5.3** Create Projects section with grid layout
- [x] **5.4** Create individual Project card component
- [x] **5.5** Create About section with photo and bio
- [x] **5.6** Create Skills display component
- [x] **5.7** Create Contact section with form
- [x] **5.8** Integrate Formspree for contact form

### Phase 6: Assets & Media ✅
- [x] **6.1** Copy and organize image assets
- [x] **6.2** Set up static files (CV PDFs, privacy policies)
- [x] **6.3** Create favicon

### Phase 7: Animations & Polish ✅
- [x] **7.1** Add scroll-triggered fade-in animations
- [x] **7.2** Add hover effects on interactive elements
- [x] **7.3** Fine-tune typography and spacing
- [x] **7.4** Add animation delays for staggered reveals

### Phase 8: SEO & Meta ✅
- [x] **8.1** Configure Astro SEO in Layout
- [x] **8.2** Set up Open Graph meta tags
- [x] **8.3** Set up Twitter Card meta tags
- [x] **8.4** Configure proper head elements

### Phase 9: Testing & Deployment ✅
- [x] **9.1** Test responsive design (mobile, tablet, desktop)
- [x] **9.2** Test language switching functionality
- [x] **9.3** Test contact form submission
- [x] **9.4** Test all navigation links
- [x] **9.5** Verify SEO meta tags
- [x] **9.6** Build production version successfully

### Phase 10: Cleanup & Finalization ⏳
- [ ] **10.1** Remove old Gatsby project files
- [ ] **10.2** Move `astro-version/` contents to root
- [ ] **10.3** Update repository README
- [ ] **10.4** Final review and testing

---

## File Structure (Implemented)

```
astro-version/
├── public/
│   ├── images/           # All project images
│   ├── es/
│   │   └── CurriculumVitae.pdf
│   ├── CurriculumVitae.pdf
│   ├── favicon.svg
│   ├── meta.jpg
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SmoothLink.tsx
│   │   │   └── AnimatedContainer.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguagePicker.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   └── App.tsx
│   ├── context/
│   │   └── LanguageContext.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── translations/
│   │       ├── en.ts
│   │       └── es.ts
│   ├── hooks/
│   │   └── useOnScreen.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Commands

```bash
# Install dependencies
cd astro-version
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Preview production build
pnpm preview
```

---

## Design System

### Colors (Tailwind CSS v4)
```css
--color-background: #000000;
--color-foreground: #ffffff;
--color-muted: #a1a1aa;
--color-muted-foreground: #71717a;
--color-border: #27272a;
--color-card: #09090b;
--color-accent: #ffffff;
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Section padding: 6rem (96px) on desktop, 4rem on mobile
- Container max-width: 1200px

---

## Current Progress

**Status**: 🟢 Complete - Ready for Final Review

**Last Updated**: December 7, 2025

**Build Status**: ✅ Successful

---

## What's Completed

1. ✅ **Project Setup**: Astro 5.x with React, TypeScript, Tailwind CSS 4
2. ✅ **i18n System**: Full English/Spanish support with localStorage persistence
3. ✅ **UI Components**: Button, Section, SmoothLink, AnimatedContainer
4. ✅ **Layout**: Navbar with glass effect, mobile menu, Footer with social links
5. ✅ **Sections**: Hero, Projects grid, About with skills, Contact form
6. ✅ **Assets**: All images, PDFs, and static files migrated
7. ✅ **Animations**: Scroll-triggered fade-in with staggered delays
8. ✅ **SEO**: Complete meta tags (OG, Twitter Cards)
9. ✅ **Testing**: Responsive design, language switching, navigation

## Next Steps (Phase 10)

When ready to finalize:
1. Review the new site thoroughly
2. Remove the old Gatsby files (keeping only `astro-version`)
3. Move contents of `astro-version` to root
4. Update `package.json` and `README.md`
5. Deploy to Netlify

---

## Notes
- Build completed successfully with Astro 5.x
- All images and assets copied from original project
- Contact form uses Formspree ID: `mgepgjea`
- Language preference persists in localStorage
- Smooth scroll navigation implemented
- Scroll-triggered animations with staggered delays
- Clean Apple-like dark theme with black/white palette
