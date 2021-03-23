import React from "react"
import { useIntl } from "react-intl"
import * as styles from './styles.module.scss'
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CustomLink } from "../../components/UI/CustomLink"

export const Home = () => {
    const intl = useIntl()

    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <h2 className={styles.title}>{intl.formatMessage({ id: "home.title" })}</h2>
                <h3 className={styles.desc}>{intl.formatMessage({ id: "home.subTitle" })}</h3>
            </div>
            <CustomLink className={styles.cta} to="projects">
                <span>{intl.formatMessage({ id: "home.what_do" })}</span>
                <FontAwesomeIcon icon={faChevronDown} size="2x" color={"#FFF"} />
            </CustomLink>
        </section>
    )
}