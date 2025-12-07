# Sneyder Angulo - Portfolio

A modern, elegant personal portfolio website built with Astro, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: [Astro](https://astro.build) with React integration
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Design

- **Theme**: Dark mode only
- **Colors**: Minimalist black & white palette with subtle grays
- **Style**: Apple-like minimalism with clean typography and generous whitespace
- **Animations**: Smooth, subtle scroll-triggered animations

## Features

- 🌐 **Bilingual**: Full English and Spanish support with localStorage persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Astro's partial hydration for optimal performance
- 🎨 **Modern Design**: Clean, elegant Apple-inspired aesthetics
- 📧 **Contact Form**: Integrated with Formspree
- 🔍 **SEO Optimized**: Complete meta tags and Open Graph support

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── sections/     # Page sections (Hero, Projects, About, Contact)
├── context/          # React context providers
├── data/             # Static data and translations
├── hooks/            # Custom React hooks
├── layouts/          # Astro layouts
├── pages/            # Astro pages
└── styles/           # Global styles
```

## Deployment

This site is configured for deployment on Netlify. The `public/_redirects` file handles any necessary redirects.

```bash
# Build for production
pnpm build
```

The built files will be in the `dist/` directory.

## License

MIT © Sneyder Angulo
