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

const DEFAULT_LOCALE = 'en'

export const Index = () => {
  const [langKey, setLangKey] = React.useState(DEFAULT_LOCALE)

  React.useEffect(() => {
    window && window.localStorage && setLangKey(window.localStorage.getItem('language') || DEFAULT_LOCALE)
  }, [])

  const handleChangeLanguage = (lang) => {
    setLangKey(lang)
    window?.localStorage?.setItem('language', lang)
  }

  return (
    <IntlProvider locale={langKey} messages={messages[langKey]}>
      <SEO lang={langKey} />
      <NavBar langKey={langKey} onChangeLang={handleChangeLanguage} />
      <Home />
      <Projects langKey={langKey} />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </IntlProvider>
  )
}