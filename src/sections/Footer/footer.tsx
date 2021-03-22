import React from "react"
import { FormattedMessage } from "react-intl"
import * as styles from './styles.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FormattedMessage id="footer.title">
                {(txt) => (
                    <span>{txt + (new Date().getFullYear()).toString()}</span>
                )}
            </FormattedMessage>
            
        </footer>
    )
}