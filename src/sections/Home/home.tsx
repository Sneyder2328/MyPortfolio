import React from "react"
import { FormattedMessage } from "react-intl"
import * as styles from './styles.module.scss'

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
        </section>
    )
}