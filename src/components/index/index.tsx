import * as React from "react"
import "@fontsource/roboto"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "../../pages/reset.css"
import "../../pages/styles.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Projects } from "../../sections/Projects/projects"
import { SEO } from "../seo"
import { NavBar } from "../../sections/NavBar/navbar"
import { Home } from "../../sections/Home/home"
import { About } from "../../sections/About/about"
import { Contact } from "../../sections/Contact/contact"
import { Footer } from "../../sections/Footer/footer"
import { IntlProvider } from "react-intl"
import { es } from "../../data/messages/es"
import { en } from "../../data/messages/en"

const messages = { en, es };

export const Index = () => {
  const [langKey, setLangKey] = React.useState((localStorage && localStorage.getItem('language')) || 'en')

  React.useEffect(() => {
    localStorage && localStorage.setItem('language', langKey)
  }, [langKey])

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <SEO lang={langKey} />
      <NavBar langKey={langKey} onChangeLang={setLangKey} />
      <Home />
      <Projects langKey={langKey} />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </IntlProvider>
  )
}