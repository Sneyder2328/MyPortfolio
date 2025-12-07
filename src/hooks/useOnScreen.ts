import { useEffect, useState, type RefObject } from "react";

interface UseOnScreenOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useOnScreen<T extends Element>(
  ref: RefObject<T | null>,
  options: UseOnScreenOptions = {}
): boolean {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
}

