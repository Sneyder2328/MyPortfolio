import * as React from "react"
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
    <SEO title="Sneyder Angulo - Software developer" description="Informatics engineering student based in Venezuela. Started coding since high school because wanted to be a hacker, now mostly focused on Web and Mobile apps, overall, a passionate products builder and lifelong learner."/>
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage