import { useRef, type ReactNode } from "react";
import { clsx } from "clsx";
import { useOnScreen } from "../../hooks/useOnScreen";

type AnimationType =
  | "fade-in-up"
  | "fade-in"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in";

interface AnimatedContainerProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  threshold?: number;
}

export function AnimatedContainer({
  children,
  animation = "fade-in-up",
  delay = 0,
  className,
  as: Component = "div",
  threshold = 0.1,
}: AnimatedContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref, { threshold });

  const animationClasses: Record<AnimationType, string> = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  };

  const delayClasses: Record<number, string> = {
    0: "",
    100: "animation-delay-100",
    200: "animation-delay-200",
    300: "animation-delay-300",
    400: "animation-delay-400",
    500: "animation-delay-500",
    600: "animation-delay-600",
    700: "animation-delay-700",
  };

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={clsx(
        "opacity-0",
        isVisible && animationClasses[animation],
        delayClasses[delay],
        className
      )}
      style={{ animationFillMode: "forwards" }}
    >
      {children}
    </Component>
  );
}

