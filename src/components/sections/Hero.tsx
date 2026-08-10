import { ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";
import { whatsappLink } from "../../data/contact";
import { Button } from "../ui/Button";
import { SmoothLink } from "../ui/SmoothLink";

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-28 overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Byline */}
        <p className="text-white/50 text-sm md:text-base uppercase tracking-widest mb-6 animate-fade-in">
          {t("hero.name")} — {t("hero.role")}
        </p>

        {/* Value proposition */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 animate-fade-in-up animation-delay-100">
          {t("hero.headline")}
        </h1>

        {/* Supporting line */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
          {t("hero.description")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-300">
          <Button
            variant="primary"
            size="lg"
            href="#services"
            onClick={() => trackEvent("hero_view_services")}
          >
            {t("hero.cta")}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={whatsappLink(language)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("hero_whatsapp")}
          >
            <MessageCircle size={20} />
            {t("hero.contact")}
          </Button>
        </div>

        {/* Location */}
        <p className="flex items-center justify-center gap-2 text-sm text-white/40 animate-fade-in animation-delay-400">
          <MapPin size={14} aria-hidden="true" />
          {t("hero.location")}
        </p>
      </div>

      {/* Scroll indicator */}
      <SmoothLink
        to="services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors animate-fade-in animation-delay-500"
        onClick={() => trackEvent("hero_scroll_to_services")}
      >
        <span className="text-sm font-medium uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </SmoothLink>
    </section>
  );
}
