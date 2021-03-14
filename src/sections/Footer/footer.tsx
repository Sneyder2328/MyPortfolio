import React from "react"
import * as styles from './styles.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>© {new Date().getFullYear()}, Designed and built by Sneyder Angulo</span>
        </footer>
    )
}