import { clsx } from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    "disabled:opacity-50 disabled:cursor-not-allowed"
  );

  const variants = {
    primary: clsx(
      "bg-white text-black",
      "hover:bg-white/90 hover:scale-[1.02]",
      "active:scale-[0.98]"
    ),
    secondary: clsx(
      "bg-transparent text-white",
      "border border-white/20",
      "hover:bg-white/5 hover:border-white/40",
      "active:bg-white/10"
    ),
    ghost: clsx(
      "bg-transparent text-white",
      "hover:bg-white/5",
      "active:bg-white/10"
    ),
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

