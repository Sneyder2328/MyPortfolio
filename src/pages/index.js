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
    <Contact />
    <About />
    <Footer />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </div>
)

export default IndexPage