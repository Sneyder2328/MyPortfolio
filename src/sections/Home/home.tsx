import React from "react"
import * as styles from './styles.module.scss'

export const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.content}>
                <h2 className={styles.title}>Hi, I'm Sneyder Angulo</h2>
                <h3 className={styles.desc}>A passionate Software developer</h3>
            </div>
        </section>
    )
}