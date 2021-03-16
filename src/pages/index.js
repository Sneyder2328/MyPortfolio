import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import { SEO } from "../components/seo"
import { Home } from "../sections/Home/home"
import { NavBar } from "../sections/NavBar/navbar"
import { Contact } from "../sections/Contact/contact"
import { Projects } from "../sections/Projects/projects"
import { About } from "../sections/About/about"
import "./reset.css"
import "./styles.scss"
import { Footer } from "../sections/Footer/footer"

const IndexPage = () => (
  <div>
    <NavBar />
    <SEO title="Sneyder Angulo - Software developer" />
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage