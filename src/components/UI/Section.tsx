import { useRef, type ReactNode } from "react";
import { clsx } from "clsx";
import { useOnScreen } from "../../hooks/useOnScreen";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
  delay?: number;
}

export function Section({
  children,
  className,
  id,
  animate = true,
  delay = 0,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref, { threshold: 0.1 });

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
    <section
      ref={ref}
      id={id}
      className={clsx(
        "relative",
        animate && "opacity-0",
        animate && isVisible && "animate-fade-in-up",
        animate && delayClasses[delay],
        className
      )}
      style={animate ? { animationFillMode: "forwards" } : undefined}
    >
      {children}
    </section>
  );
}

