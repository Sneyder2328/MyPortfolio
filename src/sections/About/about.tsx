import React from "react"
import * as styles from './styles.module.scss'
import classNames from "classnames"
import photo from "../../images/photo.jpg"
import kotlinLogo from "../../images/ic_kotlin.svg"
import tsLogo from "../../images/ic_ts.svg"
import nodejsLogo1 from "../../images/ic_nodejs1.svg"
import reactLogo from "../../images/react.svg"
import androidLogo from "../../images/ic_android.svg"
import gitLogo from "../../images/ic_git.svg"
import firebaseLogo from "../../images/ic_firebase.svg"
import { FormattedMessage, useIntl } from "react-intl"
import { Section } from "../../components/UI/Section"

export const About = () => {
    const intl = useIntl()

    return (
        <Section id={"about"} className={styles.aboutWrapper} >
            <FormattedMessage id="about.title">
                {(txt) => (
                    <h3 className="section-title">{txt}</h3>
                )}
            </FormattedMessage>
            <div className={styles.about}>
                <img className={styles.avatar} src={photo} alt="Sneyder Angulo" />
                <div className={styles.info}>
                    <p className={styles.bio}>{intl.formatMessage({ id: "about.bio" })}</p>
                    <a className={classNames("button", styles.button)} href={`CurriculumVitae.pdf`} target="_blank" rel="noopener">
                        {intl.formatMessage({ id: "about.view_cv" })}
                    </a>
                </div>
                <div className={styles.skills}>
                    <h4>{intl.formatMessage({ id: "about.skills" })}</h4>
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
        </Section>
    )
}