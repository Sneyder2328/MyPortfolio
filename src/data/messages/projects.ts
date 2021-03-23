import LSNImg1 from "../../images/lsn1.jpg"
import frapp1 from "../../images/frapp1.jpg"
import cryptotracker1 from "../../images/cryptotracker1.png"
import barcafansclub1 from "../../images/barcafansclub1.png"
import portfolio from "../../images/screenshot_portfolio.png"
import USConstitution from "../../images/screenshot_us_constitution.png"
import TicTacToe from "../../images/screenshot_tic_tac_toe.png"

export const projects = {
    en: [
        {
            title: "LaSocialNetwork",
            date: "2020",
            description: "SPA Web App built from scratch that covers all the basic functionalities of a social network, including the publication of posts, comments, likes, dislikes, profiles, instant messaging, etc.",
            tags: ["React", "Nodejs", "Express", "Socket.io"],
            website: "https://sneyder-lsn.netlify.app/",
            githubRepo: "https://github.com/Sneyder2328/LaSocialNetwork",
            images: [LSNImg1],
            category: "web"
        },
        {
            title: "Funding rates for Binance",
            date: "2021",
            description: "The express server gathers every 8 hours the data from Binance´s Api, process it and stores it in Firebase firestore. The app takes care of displaying the data.",
            tags: ["Kotlin", "MVVM", "Firebase firestore", "Nodejs", "Express"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.sneyder.fundingrates",
            githubRepo: "https://github.com/Sneyder2328/FundingRatesForBinanceApp",
            images: [frapp1],
            category: "android"
        },
        {
            title: "CryptoTracker",
            date: "2018",
            description: "Android app and web server that collects information about cryptocurrencies. It allows setting price alerts and portfolio management.",
            tags: ["Kotlin", "MVVM", "FCM", "Room", "Retrofit"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.sneyder.cryptotracker",
            githubRepo: "https://github.com/Sneyder2328/CryptoTracker",
            images: [cryptotracker1],
            category: "android"
        },
        {
            title: "BarcaFansClub",
            date: "2018",
            description: "Social network designed around the FC Barcelona fans theming, with integrated News and La Liga´s table sections.",
            tags: ["Kotlin", "Firebase messaging", "DynamoDB"],
            githubRepo: "https://github.com/Sneyder2328/BarcaFansClub",
            images: [barcafansclub1],
            category: "android"
        },
        {
            title: "Portfolio Website",
            date: "2021",
            description: "Personal porfolio website fully designed and built from scratch while learning Gatsby framework",
            tags: ["React", "Sass", "Gatsby"],
            website: "/",
            githubRepo: "https://github.com/Sneyder2328/MyPorfolio",
            images: [portfolio],
            category: "web"
        },
        {
            title: "US Constitution App",
            date: "2016",
            description: "United States Constitution available as an app in an easy to read manner.",
            tags: ["Java", "Web scrapper"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.twismart.usconstitution",
            images: [USConstitution],
            category: "android"
        },
        {
            title: "Tic Tac Toe Game",
            date: "2017",
            description: "Mobile version of the popular game Tic Tac Toe, made several years ago while learning the basics of Android app development.",
            tags: ["Java"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.twismart.games.tictactoe",
            images: [TicTacToe],
            category: "android"
        },
    ],
    es: [
        {
            title: "LaSocialNetwork",
            date: "2020",
            description: `
            App Web SPA construida desde cero que cubre todas las funcionales básicas de una red social, incluyendo así la publicación de posts, comentarios, likes, dislikes, perfiles, mensajería instantánea, etc.
          `,
            tags: ["React", "Nodejs", "Express", "Socket.io"],
            website: "https://sneyder-lsn.netlify.app/",
            githubRepo: "https://github.com/Sneyder2328/LaSocialNetwork",
            images: [LSNImg1],
            category: "web"
        },
        {
            title: "Funding rates for Binance",
            date: "2021",
            description: "App Android que permite visualizar la data correspondiente a las tasas de financiación de la plataforma de Binance Futures.",
            tags: ["Kotlin", "MVVM", "Firebase firestore", "Nodejs", "Express"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.sneyder.fundingrates",
            githubRepo: "https://github.com/Sneyder2328/FundingRatesForBinanceApp",
            images: [frapp1],
            category: "android"
        },
        {
            title: "CryptoTracker",
            date: "2018",
            description: `App Android y servidor web que recopila información sobre las criptomonedas. Permite establecer alertas de precio y el manejo de portafolio.`,
            tags: ["Kotlin", "MVVM", "FCM", "Room", "Retrofit"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.sneyder.cryptotracker",
            githubRepo: "https://github.com/Sneyder2328/CryptoTracker",
            images: [cryptotracker1],
            category: "android"
        },
        {
            title: "BarcaFansClub",
            date: "2018",
            description: `Red social con temática del FB Barcelona, además de las funciones típicas de una RRSS la misma incluye la tabla de posiciones de la liga española e información relevante sobre el club.`,
            tags: ["Kotlin", "Firebase messaging", "DynamoDB"],
            githubRepo: "https://github.com/Sneyder2328/BarcaFansClub",
            images: [barcafansclub1],
            category: "android"
        },
        {
            title: "Portfolio Website",
            date: "2021",
            description: "Sitio web personal de portafolio desarrollado y diseñado mientras aprendía a usar el framework GatsbyJs.",
            tags: ["React", "Sass", "Gatsby"],
            website: "/",
            githubRepo: "https://github.com/Sneyder2328/MyPorfolio",
            images: [portfolio],
            category: "web"
        },
        {
            title: "US Constitution App",
            date: "2016",
            description: "Versión digital de la Constitución de EEUU que permite su cómoda lectura e interacción con las diferentes secciones de la misma desde cualquier dispositivo Android.",
            tags: ["Java", "Web scrapper"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.twismart.usconstitution",
            images: [USConstitution],
            category: "android"
        },
        {
            title: "Tic Tac Toe Game",
            date: "2017",
            description: `Versión móvil del popular juego Tres en Raya, realizado hace ya varios años mientras aprendía las bases del desarrollo de apps Android.`,
            tags: ["Java"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.twismart.games.tictactoe",
            images: [TicTacToe],
            category: "android"
        },
    ]
}