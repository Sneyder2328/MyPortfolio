import React from "react"
import * as styles from './styles.module.scss'
import photo from "../../images/photo.jpg"
import kotlinLogo from "../../images/ic_kotlin.svg"
import tsLogo from "../../images/ic_ts.svg"
import nodejsLogo1 from "../../images/ic_nodejs1.svg"
import reactLogo from "../../images/react.svg"
import androidLogo from "../../images/ic_android.svg"
import gitLogo from "../../images/ic_git.svg"
import firebaseLogo from "../../images/ic_firebase.svg"

export const About = () => {
    return (
        <section id={"about"} className={styles.aboutWrapper}>
            <h3 className="section-title">About</h3>
            <div className={styles.about}>
                <img className={styles.avatar} src={photo} />
                <div className={styles.info}>
                    <p>
                        Informatics engineering student based in Venezuela.
                        Started coding since high school because wanted to be a hacker, now I´m mostly focused on Web and Mobile apps, overall, a passionate products builder and lifelong learner.
                    </p>
                    <a href="CurriculumVitae.pdf" target="_blank">
                        <button className="button">View CV</button>
                    </a>
                </div>
                <div className={styles.skills}>
                    <h4>Skills</h4>
                    <div>
                        <img src={kotlinLogo} />
                        <img src={reactLogo} />
                        <img src={androidLogo} />
                        <img src={nodejsLogo1} />
                        <img src={tsLogo} />
                        <img src={gitLogo} />
                        <img src={firebaseLogo} />
                    </div>
                </div>
            </div>
        </section>
    )
}