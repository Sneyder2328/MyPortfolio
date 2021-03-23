import React from "react"
import { Link } from "react-scroll";

export const CustomLink = ({children, ...props}) => {
    return (
        <Link {...props} spy={true} smooth={true} offset={-20} duration={500}>
        {children}
        </Link>
    )
}