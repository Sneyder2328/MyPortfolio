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
import {es} from "../../data/messages/es"
import {en} from "../../data/messages/en"

const messages = { en, es };

export const Index = (props) => {
    console.log("props", props);
    const { langKey } = props.pageContext
    console.log("pageContext", langKey);

    return (
        <IntlProvider locale={langKey} messages={messages[langKey]}>
            <SEO title="Sneyder Angulo - Software developer" lang={"en"} {...props} />
            <NavBar />
            <Home />
            <Projects />
            <About />
            <Contact />
            <Footer />
            <ToastContainer />
        </IntlProvider>
    )
}