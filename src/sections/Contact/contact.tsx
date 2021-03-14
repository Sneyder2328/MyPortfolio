import React from "react"
import {
    faPhoneAlt, faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
    faTelegram, faLinkedin, faGithub, faTwitter, faLinkedinIn, faGithubSquare, faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import * as styles from './styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Contact = () => {
    return (
        <section id="contact" className={styles.contactWrapper}>
            <h3 className="section-title">Contact me</h3>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <h4>Contact information</h4>
                    <p>Feel free to contact me. Send a general message or details of a project you'd like me to be a part of and I'll get back to you within 24 hours.</p>
                    <div className={styles.mediums}>
                        <div>
                            <FontAwesomeIcon icon={faPhoneAlt} size="1x" color={"#FFF"} />
                            <span>+58 412 850 3559</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} size="1x" color={"#FFF"} />
                            <span>sneyder2328@gmail.com</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faTelegram} size="1x" color={"#FFF"} />
                            <span>stas2328</span>
                        </div>
                    </div>
                    <div className={styles.socialLinks}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color={"#FFF"} />
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" color={"#FFF"} />
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x" color={"#FFF"} />
                    </div>
                </div>
                <div className={styles.form}>
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <textarea placeholder="Message" />
                    <button>Send Message</button>
                </div>
            </div>
        </section>
    )
}