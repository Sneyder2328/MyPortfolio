import React, { useRef } from "react"
import { useOnScreen } from "../../hooks/useOnScreen"
import classNames from "classnames"

export const Section = ({ className, children, ...props }) => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    return (<div className={classNames(className, "animated", { "fadeInUpBig": isVisible })}
        ref={ref} {...props}>
        {children}
    </div>)
}