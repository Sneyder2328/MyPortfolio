# Sneyder Angulo - Portfolio

A modern, elegant personal portfolio website built with Astro, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 5.x with React integration
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React
- **Package Manager**: pnpm

## ✨ Design

- **Theme**: Dark mode only
- **Colors**: Minimalist black & white palette with subtle grays
- **Style**: Apple-like minimalism with clean typography and generous whitespace
- **Animations**: Smooth, subtle scroll-triggered animations

## 🌟 Features

- 🌐 **Bilingual**: Full English and Spanish support with localStorage persistence
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Astro's partial hydration for optimal performance
- 🎨 **Modern Design**: Clean, elegant Apple-inspired aesthetics
- 📧 **Contact Form**: Integrated with Formspree
- 🔍 **SEO Optimized**: Complete meta tags and Open Graph support

## 🛠️ Getting Started

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

The development server runs at `http://localhost:4321`

## 📁 Project Structure

```
├── public/             # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/
│   │   ├── ui/         # Reusable UI components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── sections/   # Page sections (Hero, Projects, About, Contact)
│   ├── context/        # React context providers
│   ├── data/           # Static data and translations
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Astro layouts
│   ├── pages/          # Astro pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🌍 Internationalization

The site supports English and Spanish. Language preference is automatically saved to localStorage. Toggle between languages using the language picker in the navigation bar.

## 📬 Contact Form

The contact form is powered by [Formspree](https://formspree.io). To use your own form:

1. Create a Formspree account
2. Create a new form
3. Replace the form ID in `src/components/sections/Contact.tsx`

## 🚢 Deployment

This site is configured for deployment on Netlify. The `public/_redirects` file handles any necessary redirects.

```bash
# Build for production
pnpm build
```

The built files will be in the `dist/` directory.

## 📄 License

MIT © Sneyder Angulo

---

Built with ❤️ using [Astro](https://astro.build)
