import React, { useState } from 'react';
// import { Link } from "gatsby"
import classNames from "classnames";
import * as styles from './styles.module.scss'

export const NavBar = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <header className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <h2 className={styles.title}>Sneyder Angulo</h2>
        <ul className={classNames(styles.navLinks,
          { [styles.navActive]: navActive })} >
          <li><a href="#projects">Work</a></li>
          <li><a href="https://medium.com/@sneyderangulo" target="_blank">Blog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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