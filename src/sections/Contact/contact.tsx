import React, { useEffect } from "react"
import { useForm } from '@formspree/react';
import {
    faPhoneAlt, faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
    faTelegram, faGithub, faTwitter, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import * as styles from './styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from 'react-toastify';

export const Contact = () => {
    const [state, handleSubmit] = useForm("mgepgjea");

    useEffect(() => {
        console.log("state.errors", state.errors);
        if (state.errors?.[0]) {
            toast.error(state.errors?.[0]?.message, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [state.errors])

    if (state.succeeded) {
        return (
            <section id="contact" className={styles.contactWrapper}>
                <div className={styles.contact}>
                    <p className={styles.thanks}>Thanks for contacting me!, Will reach out to you as soon as posible.</p>
                </div>
            </section>)
    }

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
                        <a href="https://www.linkedin.com/in/sneyder-angulo/" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color={"#FFF"} />
                        </a>
                        <a href="https://github.com/Sneyder2328" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faGithub} size="2x" color={"#FFF"} />
                        </a>
                        <a href="https://twitter.com/SneyderHack" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon={faTwitter} size="2x" color={"#FFF"} />
                        </a>
                    </div>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input placeholder="Name" name="name" />
                    <input placeholder="Email" type="email" name="_replyto" minLength={2} />
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    <textarea placeholder="Message" name="message" minLength={2} />
                    <button className="button" type="submit" disabled={state.submitting}>Send Message</button>
                </form>
            </div>
        </section>
    )
}