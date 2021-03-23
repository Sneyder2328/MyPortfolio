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
import { FormattedMessage } from "react-intl";

export const Contact = () => {
    const [state, handleSubmit] = useForm("mgepgjea");

    useEffect(() => {
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
            <FormattedMessage id="contact.title">
                {(txt) => (
                    <h3 className="section-title">{txt}</h3>
                )}
            </FormattedMessage>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <FormattedMessage id="contact.subtitle">
                        {(txt) => (
                            <h4>{txt}</h4>
                        )}
                    </FormattedMessage>
                    <FormattedMessage id="contact.desc">
                        {(txt) => (
                            <p>{txt}</p>
                        )}
                    </FormattedMessage>
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
                    <FormattedMessage id="contact.form.name">
                        {(txt) => (<input placeholder={txt} name="name" />)}
                    </FormattedMessage>
                    <FormattedMessage id="contact.form.email">
                        {(txt) => (<input placeholder={txt} type="email" name="_replyto" />)}
                    </FormattedMessage>
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    <FormattedMessage id="contact.form.message">
                        {(txt) => (<textarea placeholder={txt} name="message" />)}
                    </FormattedMessage>

                    <FormattedMessage id="contact.form.send">
                        {(txt) => (
                            <button className="button" type="submit" disabled={state.submitting}>{txt}</button>
                        )}
                    </FormattedMessage>

                </form>
            </div>
        </section>
    )
}