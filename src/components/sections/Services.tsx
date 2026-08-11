import {
  LayoutDashboard,
  Smartphone,
  ShoppingCart,
  Workflow,
  Bot,
  Globe,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";
import {
  capabilities,
  processSteps,
  industries,
  type Capability,
} from "../../data/services";
import { whatsappLink } from "../../data/contact";
import { Button } from "../ui/Button";
import { AnimatedContainer } from "../ui/AnimatedContainer";

const CAPABILITY_ICONS: Record<Capability["icon"], typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  mobile: Smartphone,
  store: ShoppingCart,
  automation: Workflow,
  chatbot: Bot,
  website: Globe,
};

const DELAYS = [0, 100, 200, 300, 400, 500] as const;

export function Services() {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </AnimatedContainer>

        {/* What I build */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {capabilities.map((capability, index) => {
            const Icon = CAPABILITY_ICONS[capability.icon];
            return (
              <AnimatedContainer
                key={capability.id}
                delay={DELAYS[index % DELAYS.length]}
                className="flex flex-col gap-4 p-6 bg-zinc-950 border border-white/5 rounded-2xl hover:border-white/10 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center">
                  <Icon size={20} className="text-white/70" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold">
                  {capability.name[language]}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {capability.description[language]}
                </p>
              </AnimatedContainer>
            );
          })}
        </div>

        {/* How I work */}
        <AnimatedContainer className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            {t("services.process_title")}
          </h3>
        </AnimatedContainer>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 mt-12">
          {processSteps.map((step, index) => (
            <AnimatedContainer
              key={step.id}
              as="li"
              delay={DELAYS[index % DELAYS.length]}
              className="flex flex-col gap-3 pt-6 border-t border-white/10"
            >
              <span className="text-sm font-mono text-white/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-lg font-semibold">{step.name[language]}</h4>
              <p className="text-sm text-white/50 leading-relaxed">
                {step.description[language]}
              </p>
            </AnimatedContainer>
          ))}
        </ol>

        {/* Who I work with */}
        <AnimatedContainer className="mb-16">
          <h3 className="text-xs font-medium uppercase tracking-widest text-white/40 mb-8 text-center">
            {t("services.audience_title")}
          </h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <li
                key={industry.en}
                className="px-4 py-2 text-sm font-medium text-white/70 bg-zinc-950 border border-white/5 rounded-full hover:border-white/15 hover:text-white transition-colors duration-200"
              >
                {industry[language]}
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/40 text-center text-balance mt-6 max-w-2xl mx-auto">
            {t("services.audience_note")}
          </p>
        </AnimatedContainer>

        {/* Straight answer + free diagnosis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedContainer
            delay={100}
            className="flex flex-col gap-3 p-8 bg-zinc-950 border border-white/5 rounded-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-white/40">
              {t("services.honest_label")}
            </p>
            <p className="text-white/70 leading-relaxed">
              {t("services.honest_body")}
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={200}
            className="flex flex-col gap-4 p-8 bg-zinc-900 border border-white/10 rounded-2xl"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-white/40">
              {t("services.diagnosis_label")}
            </p>
            <p className="text-white/70 leading-relaxed">
              {t("services.diagnosis_body")}
            </p>
            <div className="mt-2">
              <Button
                variant="primary"
                size="md"
                href={whatsappLink(language)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("services_diagnosis_cta")}
              >
                <MessageCircle size={18} />
                {t("services.diagnosis_cta")}
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
