import type { ReactNode, MouseEvent } from "react";
import { clsx } from "clsx";

interface SmoothLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function SmoothLink({
  to,
  children,
  className,
  offset = -80,
}: SmoothLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={clsx(className)}>
      {children}
    </a>
  );
}

