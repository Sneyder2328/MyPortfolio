import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendarAlt
} from '@fortawesome/free-solid-svg-icons'
import { useIntl } from 'react-intl'
import * as styles from './styles.module.scss'
import { FormattedMessage } from "react-intl"
import { projects } from "../../data/messages/projects"
import { Section } from "../../components/UI/Section"

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

export const Projects = ({ langKey }) => {
    const intl = useIntl()

    return (
        <div id="projects" className={styles.projects}>
            <h3 className={"section-title"}>{intl.formatMessage({ id: "projects.title" })}</h3>
            <div className={styles.items}>
                {projects[langKey].map((project) => (<Project project={project} key={project.title} />))}
            </div>
        </div>
    )
}

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
    return (
        <Section className={styles.project}>
            <img src={project.images[0]} />
            <div className={styles.content}>
                <div className={styles.topSection}>
                    <h5 className={styles.title}>{project.title}</h5>
                    <span className={styles.date}>
                        <FontAwesomeIcon icon={faCalendarAlt} size="1x" color={"#FFF"} />
                        <span>{project.date}</span>
                    </span>
                    <p className={styles.description}>{project.description}</p>
                    <div className={styles.tagsWrapper}>
                        {project.tags.map((tag) => (<Tag tag={tag} key={tag} />))}
                    </div>
                </div>
                <div className={styles.buttonsWrapper}>
                    {project.website && <Button url={project.website} type="web" />}
                    {project.googlePlay && <Button url={project.googlePlay} type="googlePlay" />}
                    {project.githubRepo && <Button url={project.githubRepo} type="github" />}
                </div>
            </div>
        </Section>
    )
}

const Tag: React.FC<{ tag: string }> = ({ tag }) => {
    return (
        <div className={styles.tag}>
            {tag}
        </div>
    )
}

// const labelButton = {
//     "web": "SEE LIVE",
//     "googlePlay": "GET APP",
//     "github": "GITHUB REPO",
// }
const Button: React.FC<{ type: "web" | "googlePlay" | "github"; url: string }> = ({ type, url }) => {
    const intl = useIntl()

    const labelButton = {
        "web": intl.formatMessage({ id: "projects.see_live" }),
        "googlePlay": intl.formatMessage({ id: "projects.get_app" }),
        "github": intl.formatMessage({ id: "projects.github_repo" })
    }
    return (
        <a className={styles.button + " button"} href={url} target="_blank" rel="noopener">
            {labelButton[type]}
        </a>
    )
}