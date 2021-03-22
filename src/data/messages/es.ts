import LSNImg1 from "../../images/lsn1.jpg"
import frapp1 from "../../images/frapp1.jpg"
import cryptotracker1 from "../../images/cryptotracker1.png"
import barcafansclub1 from "../../images/barcafansclub1.png"
import portfolio from "../../images/screenshot_portfolio.png"
import USConstitution from "../../images/screenshot_us_constitution.png"
import TicTacToe from "../../images/screenshot_tic_tac_toe.png"

export const es = {
    title: 'Sneyder Angulo | Desarrollador de software',
    "header.home": 'Principal',
    "header.about": 'Sobre mi',
    "header.blog": 'Blog',
    "header.contact": 'Contacto',
    "header.projects": 'Proyectos',
    "home.title": 'Hola, Soy Sneyder Angulo',
    "home.subTitle": 'Un desarrollador de software apasionado',
    "projects.title": 'Aca estan algunos de mis proyectos',
    "projects.items": [
        {
            title: "LaSocialNetwork",
            date: "2020",
            description: "Social network designed and built from scratch",
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
            description: "Cryptocurrencies tracker project with alert price notifications included.",
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
            description: "One of the most loved, classic games of all time perfectly recreated for your mobile.",
            tags: ["Java"],
            googlePlay: "https://play.google.com/store/apps/details?id=com.twismart.games.tictactoe",
            images: [TicTacToe],
            category: "android"
        },
    ],
    "about.title": "Sobre mi",
    "about.bio": "Estudiante de Ingenieria en informatica de Venezuela.",
    "about.skills": "Habilidades",
    "about.view_cv": "Ver Hoja de Vida",
    "contact.title": "Contact me",
    "contact.subtitle": "Información de contacto",
    "contact.desc": "No dude en ponerse en contacto conmigo. Envíe un mensaje en general o los detalles de algún proyecto del que le gustaría que forme parte y me pondré en contacto con usted tan pronto como sea posible.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar mensaje",
    "footer.title": "Diseñado y creado por Sneyder Angulo © 2021",
};
