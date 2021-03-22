import React from "react"
import * as styles from './styles.module.scss'

export const LanguagePicker = () => {
    return (<div className={styles.languagePicker}>
        <a href={"/"} className={styles.langLabel}>EN</a>
        <span className={styles.separator}>/</span>
        <a href={"/es/"} className={styles.langLabel}>ES</a>
    </div>)
}