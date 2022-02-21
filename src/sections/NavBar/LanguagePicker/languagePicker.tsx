import { Link } from "gatsby"
import React from "react"
import classNames from "classnames";
import * as styles from './styles.module.scss'

export const LanguagePicker = ({ langKey, onChangeLang }) => {
  return (<div className={styles.languagePicker}>
    <span
      onClick={() => onChangeLang('en')}
      className={classNames(styles.langLabel, { [styles.active]: langKey === "en" })}>EN</span>
    <span
      className={styles.separator}>/</span>
    <span
      onClick={() => onChangeLang('es')}
      className={classNames(styles.langLabel, { [styles.active]: langKey === "es" })}>ES</span>
  </div>)
}