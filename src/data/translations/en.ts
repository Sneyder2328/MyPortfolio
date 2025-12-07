export const en = {
  // Meta
  title: "Sneyder Angulo | Software Developer",
  description: "Software developer specialized in web and mobile applications",

  // Navigation
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.blog": "Blog",
  "nav.contact": "Contact",

  // Hero
  "hero.greeting": "Hi, I'm",
  "hero.name": "Sneyder Angulo",
  "hero.role": "Software Developer",
  "hero.description": "Crafting quality web experiences with passion and attention to detail",
  "hero.cta": "View My Work",
  "hero.contact": "Get in Touch",

  // Projects
  "projects.title": "Featured Projects",
  "projects.subtitle": "A selection of my recent work",
  "projects.see_live": "Live Demo",
  "projects.github_repo": "Source Code",
  "projects.get_app": "Get App",
  "projects.view_all": "View All Projects",

  // About
  "about.title": "About Me",
  "about.bio":
    "I started coding at 14 out of pure curiosity, and it quickly became a lifelong passion. I value craftsmanship, clean code, and continuous growth, while also caring deeply about the business value behind software. For me, code matters most when it solves real problems for real people. I specialize in modern web development and enjoy building full-stack applications with a focus on React, TypeScript, and backend architecture.",
  "about.skills": "Technologies",
  "about.view_cv": "Download CV",
  "about.experience": "Experience",
  "about.years": "Years of Experience",

  // Contact
  "contact.title": "Get in Touch",
  "contact.subtitle": "Let's work together",
  "contact.description":
    "Feel free to contact me. Send a general message or details of a project you'd like me to be a part of and I'll get back to you within 24 hours.",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.message": "Message",
  "contact.form.send": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.form.success":
    "Thanks for reaching out! I'll get back to you as soon as possible.",
  "contact.form.error": "Something went wrong. Please try again.",
  "contact.info.title": "Contact Information",
  "contact.info.email": "Email",
  "contact.info.phone": "Phone",
  "contact.info.location": "Location",

  // Footer
  "footer.designed": "Designed and built by",
  "footer.rights": "All rights reserved",
} as const;

export type TranslationKey = keyof typeof en;

