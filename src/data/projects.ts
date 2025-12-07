export interface Project {
  id: string;
  title: string;
  date: string;
  description: {
    en: string;
    es: string;
  };
  tags: string[];
  image: string;
  website?: string;
  githubRepo?: string;
  googlePlay?: string;
  category: "web" | "android";
}

export const projects: Project[] = [
  {
    id: "tech-blog",
    title: "Sneyder's Chronicles",
    date: "2025",
    description: {
      en: "Personal tech blog exploring web development, software architecture, and the latest in technology. Features thoughts, tutorials, and deep dives into tools and frameworks.",
      es: "Blog personal de tecnología explorando desarrollo web, arquitectura de software y las últimas tendencias. Incluye tutoriales y análisis profundos sobre herramientas y frameworks.",
    },
    tags: ["React", "TypeScript", "Astro", "MDX"],
    image: "/images/screenshot_tech_blog.png",
    website: "https://sneyder-chronicles.vercel.app/",
    githubRepo: "https://github.com/Sneyder2328/tech-blog",
    category: "web",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    date: "2025",
    description: {
      en: "Personal portfolio website. Fully designed and built from scratch while learning the Astro framework for fun.",
      es: "Sitio web personal de portafolio. Desarrollado y diseñado desde cero mientras aprendía a usar el framework Astro.",
    },
    tags: ["React", "TypeScript", "Astro", "Tailwind"],
    image: "/images/screenshot_portfolio.png",
    website: "/",
    githubRepo: "https://github.com/Sneyder2328/MyPorfolio",
    category: "web",
  },
  {
    id: "la-social-network",
    title: "LaSocialNetwork",
    date: "2020",
    description: {
      en: "SPA Web App that covers all the basic functionalities of a social network, including the publication of posts, comments, likes, dislikes, profiles, instant messaging, etc.",
      es: "App Web SPA construida desde cero que cubre todas las funcionales básicas de una red social, incluyendo así la publicación de posts, comentarios, likes, dislikes, perfiles, mensajería instantánea, etc.",
    },
    tags: ["React", "Node.js", "Express", "Socket.io"],
    image: "/images/lsn1.jpg",
    website: "https://sneyder-lsn.netlify.app/",
    githubRepo: "https://github.com/Sneyder2328/LaSocialNetwork",
    category: "web",
  },
  {
    id: "funding-rates",
    title: "Funding Rates for Binance",
    date: "2021",
    description: {
      en: "The express server gathers every 8 hours the data from Binance's Api, process it and stores it in Firebase firestore. The app takes care of displaying the data.",
      es: "App Android que permite visualizar la data correspondiente a las tasas de financiación de la plataforma de Binance Futures.",
    },
    tags: ["Kotlin", "MVVM", "Firebase", "Node.js", "Express"],
    image: "/images/frapp1.jpg",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.sneyder.fundingrates",
    githubRepo: "https://github.com/Sneyder2328/FundingRatesForBinanceApp",
    category: "android",
  },
  {
    id: "crypto-tracker",
    title: "CryptoTracker",
    date: "2018",
    description: {
      en: "Android app and web server that collects information about cryptocurrencies. It allows setting price alerts and portfolio management.",
      es: "App Android y servidor web que recopila información sobre las criptomonedas. Permite establecer alertas de precio y el manejo de portafolio.",
    },
    tags: ["Kotlin", "MVVM", "FCM", "Room", "Retrofit"],
    image: "/images/cryptotracker1.png",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.sneyder.cryptotracker",
    githubRepo: "https://github.com/Sneyder2328/CryptoTracker",
    category: "android",
  },
  {
    id: "barca-fans-club",
    title: "BarcaFansClub",
    date: "2018",
    description: {
      en: "Social network designed around the FC Barcelona fans theming, with integrated News and La Liga's table sections.",
      es: "Red social con temática del FC Barcelona, además de las funciones típicas de una RRSS la misma incluye la tabla de posiciones de la liga española e información relevante sobre el club.",
    },
    tags: ["Kotlin", "Firebase", "DynamoDB"],
    image: "/images/barcafansclub1.jpg",
    githubRepo: "https://github.com/Sneyder2328/BarcaFansClub",
    category: "android",
  },
  {
    id: "us-constitution",
    title: "US Constitution App",
    date: "2016",
    description: {
      en: "Interactive, user-friendly United States Constitution app built with android native technologies.",
      es: "Versión digital de la Constitución de EEUU amigable al usuario e interactiva, construida de forma nativa para Android.",
    },
    tags: ["Java", "Android", "Web Scrapper"],
    image: "/images/screenshot_us_constitution.png",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.twismart.usconstitution",
    category: "android",
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Game",
    date: "2017",
    description: {
      en: "Mobile version of the popular game Tic Tac Toe, made several years ago while learning the basics of Android app development.",
      es: "Versión móvil del popular juego Tres en Raya, realizado hace ya varios años mientras aprendía las bases del desarrollo de apps Android.",
    },
    tags: ["Java", "Android"],
    image: "/images/screenshot_tic_tac_toe.png",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.twismart.games.tictactoe",
    category: "android",
  },
];

