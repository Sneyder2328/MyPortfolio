import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import * as styles from './styles.module.scss'
import { LanguagePicker } from "./LanguagePicker/languagePicker";
import { FormattedMessage } from "react-intl";

export const NavBar = () => {
  const [navActive, setNavActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [alpha, setAlpha] = useState(0.0)

  const updateNavBackground = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    updateNavBackground()
    window.addEventListener("scroll", updateNavBackground)
    return () => window.removeEventListener("scroll", updateNavBackground)
  }, [])

  useEffect(() => {
    setAlpha(scrollY / window.innerHeight)
  }, [scrollY])

  const bgStyle = {
    backgroundColor: `rgba(2, 4, 74, ${alpha})`
  };
  return (
    <header className={classNames(styles.navbarWrapper, { [styles.bordered]: alpha >= 1.0 })} style={bgStyle}>
      <div className={styles.navbar}>
        <h2 className={styles.title}><b>Sneyder</b> Angulo</h2>
        <ul className={classNames(styles.navLinks,
          { [styles.navActive]: navActive })}>
          <FormattedMessage id="header.projects">
            {(txt) => (<li>
              <a href="#projects">
                {txt}
              </a>
            </li>)}
          </FormattedMessage>
          <FormattedMessage id="header.blog">
            {(txt) => (<li>
              <a href="https://medium.com/@sneyderangulo" target="_blank" rel="noopener">
                {txt}
              </a>
            </li>)}
          </FormattedMessage>
          <FormattedMessage id="header.about">
            {(txt) => (<li>
              <a href="#about">
                {txt}
              </a>
            </li>)}
          </FormattedMessage>
          <FormattedMessage id="header.contact">
            {(txt) => (<li>
              <a href="#contact">
                {txt}
              </a>
            </li>)}
          </FormattedMessage>
        </ul>
        <LanguagePicker />
        <div className={classNames(styles.burger,
          { [styles.navActive]: navActive })} onClick={() => { setNavActive(!navActive) }}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </div>
    </header>
  )
}