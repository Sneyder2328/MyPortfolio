import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import * as styles from './styles.module.scss'
import { LanguagePicker } from "./LanguagePicker/languagePicker";
import { FormattedMessage } from "react-intl";
import { CustomLink } from "../../components/UI/CustomLink";

export const NavBar = ({ langKey }) => {
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
    setAlpha(scrollY / (window.innerHeight * 0.9))
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
              <CustomLink to="projects">
                {txt}
              </CustomLink>
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
              <CustomLink to="about">
                {txt}
              </CustomLink>
            </li>)}
          </FormattedMessage>
          <FormattedMessage id="header.contact">
            {(txt) => (<li>
              <CustomLink to="contact">
                {txt}
              </CustomLink>
            </li>)}
          </FormattedMessage>
        </ul>
        <LanguagePicker langKey={langKey} />
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