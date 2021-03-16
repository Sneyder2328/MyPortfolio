import React from "react"
import * as styles from './styles.module.scss'
import photo from "../../images/photo.jpg"

export const About = () => {
    return (
        <section className={styles.aboutWrapper}>
            <h3 className="section-title">About</h3>
            <div className={styles.about}>
                <img src={photo} />
                <div className={styles.info}>
                    <p>Informatics engineering student based in Venezuela.
Started coding since high school because wanted to be a hacker, now I´m mostly focused on Web and Mobile apps, overall, a passionate products builder and lifelong learner.</p>
                    <button className="button">View CV</button>
                </div>
                <div className={styles.skills}>
                    <h4>Skills</h4>

                </div>
            </div>
        </section>
    )
}