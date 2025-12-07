import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "../ui/Button";
import { SmoothLink } from "../ui/SmoothLink";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-white/60 text-lg md:text-xl mb-4 animate-fade-in">
          {t("hero.greeting")}
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
          {t("hero.name")}
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 mb-6 animate-fade-in-up animation-delay-200">
          {t("hero.role")}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 animate-fade-in-up animation-delay-300">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button variant="primary" size="lg" href="#projects">
            {t("hero.cta")}
          </Button>
          <Button variant="secondary" size="lg" href="#contact">
            {t("hero.contact")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <SmoothLink
        to="projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors animate-fade-in animation-delay-500"
      >
        <span className="text-sm font-medium uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </SmoothLink>
    </section>
  );
}

