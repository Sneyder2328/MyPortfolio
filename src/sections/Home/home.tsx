import React from "react"
import { FormattedMessage } from "react-intl"
import * as styles from './styles.module.scss'
import {
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CustomLink } from "../../components/UI/CustomLink"

export const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <FormattedMessage id="home.title">
                    {(txt) => (<h2 className={styles.title}>{txt}</h2>)}
                </FormattedMessage>
                <FormattedMessage id="home.subTitle">
                    {(txt) => (<h3 className={styles.desc}>{txt}</h3>)}
                </FormattedMessage>
            </div>
            <CustomLink className={styles.cta} to="projects">
                <span>What I do?</span>
                <FontAwesomeIcon icon={faChevronDown} size="2x" color={"#FFF"} />
            </CustomLink>
        </section>
    )
}