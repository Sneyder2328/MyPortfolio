import { useEffect, useState } from "react"

export const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false)

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.01
    };

    const handleObserver = ([entry]: IntersectionObserverEntry[]): void => {
        if (entry.isIntersecting !== isIntersecting) {
            setIntersecting(entry.isIntersecting);
        }
    };
    const observer = new IntersectionObserver(handleObserver, options)

    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}