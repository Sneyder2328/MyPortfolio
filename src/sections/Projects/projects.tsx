import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import * as styles from './styles.module.scss'
import LSNImg1 from "../../images/lsn1.jpg"
import frapp1 from "../../images/frapp1.jpg"
import cryptotracker1 from "../../images/cryptotracker1.png"
import barcafansclub1 from "../../images/barcafansclub1.png"
import portfolio from "../../images/screenshot_portfolio.png"

type ProjectProps = {
    title: string;
    date: string;
    description: string;
    tags: string[];
    images: string[];
    website?: string;
    githubRepo?: string;
    googlePlay?: string;
    category: "android" | "web";
}

const projects: Array<ProjectProps> = [
    {
        title: "LaSocialNetwork",
        date: "2020",
        description: "Social netword designed and built from scratch as a side project in order to practice full stack web development.",
        tags: ["React", "Nodejs", "Express", "Socket.io"],
        website: "https://sneyder-lsn.netlify.app/",
        githubRepo: "https://github.com/Sneyder2328/LaSocialNetwork",
        images: [LSNImg1],
        category: "web"
    },
    {
        title: "Funding rates for Binance",
        date: "2021",
        description: "",
        tags: ["Kotlin", "MVVM", "Firebase firestore"],
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
        description: "Personal porfolio website fully designed abd built from scratch while learning Gatsby framework",
        tags: ["React", "Sass", "Gatsby"],
        website: "/",
        githubRepo: "https://github.com/Sneyder2328/MyPorfolio",
        images: [portfolio],
        category: "web"
    }
]

export const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h3 className={"section-title"}>These are some of my projects</h3>
            <div className={styles.items}>
                {projects.map((project) => (<Project project={project} />))}
            </div>
        </section>
    )
}

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
    return (
        <div className={styles.project}>
            <img src={project.images[0]} />
            <div className={styles.content}>
                <h5 className={styles.title}>{project.title}</h5>
                <span className={styles.date}>
                    <FontAwesomeIcon icon={faCalendarAlt} size="1x" color={"#FFF"} />
                    <span>{project.date}</span>
                </span>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tagsWrapper}>
                    {project.tags.map((tag) => (<Tag tag={tag} />))}
                </div>
                <div className={styles.buttonsWrapper}>
                    {project.website && <Button url={project.website} type="web" />}
                    {project.googlePlay && <Button url={project.googlePlay} type="googlePlay" />}
                    {project.githubRepo && <Button url={project.githubRepo} type="github" />}
                </div>
            </div>
        </div>
    )
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
    return (
        <div className={styles.tag}>
            {tag}
        </div>
    )
}

const labelButton = {
    "web": "SEE LIVE",
    "googlePlay": "GET APP",
    "github": "GITHUB REPO",
}
const Button: React.FC<{ type: "web" | "googlePlay" | "github"; url: string }> = ({ type, url }) => {
    return (
        <a className={styles.button + " button"} href={url} target="_blank">
            {labelButton[type]}
        </a>
    )
}