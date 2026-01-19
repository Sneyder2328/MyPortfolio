import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { trackEvent } from "../../utils/analytics";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    analyticsId: "linkedin",
    href: "https://www.linkedin.com/in/sneyder-angulo/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    analyticsId: "github",
    href: "https://github.com/Sneyder2328",
    icon: Github,
  },
  {
    name: "Twitter",
    analyticsId: "twitter",
    href: "https://twitter.com/SneyderHack",
    icon: Twitter,
  },
  {
    name: "Email",
    analyticsId: "email",
    href: "mailto:sneyder2328@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold tracking-tight">
              <span className="font-bold">Sneyder</span>{" "}
              <span className="font-light">Angulo</span>
            </span>
            <p className="text-sm text-white/50">
              {t("footer.designed")} Sneyder Angulo
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-white transition-colors duration-200"
                aria-label={link.name}
                onClick={() =>
                  trackEvent("footer_social_click", { network: link.analyticsId })
                }
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-white/40">
            © {currentYear} Sneyder Angulo. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}

