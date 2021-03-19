import React, { useEffect, useState } from 'react';
// import { Link } from "gatsby"
import classNames from "classnames";
import * as styles from './styles.module.scss'

export const NavBar = () => {
  const [navActive, setNavActive] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [alpha, setAlpha] = useState(0.0)

  const updateNavBackground = () => {
    console.log("window.scrollY", window.scrollY);
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
  // console.log("aplha=", alpha);

  const bgStyle = {
    backgroundColor: `rgba(2, 4, 74, ${alpha})`,
    // boxShadow: alpha >= 1.0 ? "0px 4.5px 5px -4px rgba(77,77,77,1)" : "none"
  };
  return (
    <header className={classNames(styles.navbarWrapper, {[styles.bordered]: alpha >= 1.0})} style={bgStyle}>
      <div className={styles.navbar}>
        <h2 className={styles.title}><b>Sneyder</b> Angulo</h2>
        <ul className={classNames(styles.navLinks,
          { [styles.navActive]: navActive })}>
          <li><a href="#projects">Work</a></li>
          <li><a href="https://medium.com/@sneyderangulo" target="_blank" rel="noopener">Blog</a></li>
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