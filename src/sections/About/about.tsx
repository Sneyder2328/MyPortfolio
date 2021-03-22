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
import { FormattedMessage } from "react-intl"

export const About = () => {
    return (
        <section id={"about"} className={styles.aboutWrapper}>
            <FormattedMessage id="about.title">
                {(txt) => (
                    <h3 className="section-title">{txt}</h3>
                )}
            </FormattedMessage>
            <div className={styles.about}>
                <img className={styles.avatar} src={photo} alt="Sneyder Angulo" />
                <div className={styles.info}>
                    <FormattedMessage id="about.bio">
                        {(txt) => (
                            <p>{txt}</p>
                        )}
                    </FormattedMessage>
                    <a href="CurriculumVitae.pdf" target="_blank" rel="noopener">
                        <FormattedMessage id="about.view_cv">
                            {(txt) => (
                                <button className="button">{txt}</button>
                            )}
                        </FormattedMessage>
                    </a>
                </div>
                <div className={styles.skills}>
                    <FormattedMessage id="about.skills">
                        {(txt) => (
                            <h4>{txt}</h4>
                        )}
                    </FormattedMessage>
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