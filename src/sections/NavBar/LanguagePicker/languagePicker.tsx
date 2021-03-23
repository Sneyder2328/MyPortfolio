import { Link } from "gatsby"
import React from "react"
import classNames from "classnames";
import * as styles from './styles.module.scss'

export const LanguagePicker = ({langKey}) => {
    return (<div className={styles.languagePicker}>
        <Link to={"/"} className={classNames(styles.langLabel, {[styles.active]: langKey === "en"})}>EN</Link>
        <span className={styles.separator}>/</span>
        <Link to={"/es"} className={classNames(styles.langLabel, {[styles.active]: langKey === "es"})}>ES</Link>
    </div>)
}