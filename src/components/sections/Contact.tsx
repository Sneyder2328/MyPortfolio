import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "../ui/Button";
import { AnimatedContainer } from "../ui/AnimatedContainer";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "contact.info.email",
    value: "sneyder2328@gmail.com",
    href: "mailto:sneyder2328@gmail.com",
  },
  {
    icon: Phone,
    label: "contact.info.phone",
    value: "+58 412 555 1727",
    href: "tel:+584125551727",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@stas2328",
    href: "https://t.me/stas2328",
  },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sneyder-angulo/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Sneyder2328",
    icon: Github,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/SneyderHack",
    icon: Twitter,
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgepgjea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center">
          <AnimatedContainer className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("contact.form.success")}
            </h2>
          </AnimatedContainer>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <AnimatedContainer className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <AnimatedContainer delay={100} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.info.title")}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {t("contact.description")}
              </p>
            </div>

            <div className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.value}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-950 border border-white/5 rounded-xl hover:border-white/10 hover:bg-zinc-900 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon size={20} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">
                      {item.label.startsWith("contact.")
                        ? t(item.label as keyof typeof t)
                        : item.label}
                    </p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                Social
              </h4>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/10 hover:bg-zinc-900 transition-all duration-200"
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedContainer>

          {/* Contact Form */}
          <AnimatedContainer delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t("contact.form.name")}
                  className={clsx(
                    "w-full px-5 py-4 bg-zinc-950 border border-white/10 rounded-xl",
                    "text-white placeholder:text-white/40",
                    "focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10",
                    "transition-all duration-200"
                  )}
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="_replyto"
                  required
                  placeholder={t("contact.form.email")}
                  className={clsx(
                    "w-full px-5 py-4 bg-zinc-950 border border-white/10 rounded-xl",
                    "text-white placeholder:text-white/40",
                    "focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10",
                    "transition-all duration-200"
                  )}
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={t("contact.form.message")}
                  className={clsx(
                    "w-full px-5 py-4 bg-zinc-950 border border-white/10 rounded-xl resize-none",
                    "text-white placeholder:text-white/40",
                    "focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10",
                    "transition-all duration-200"
                  )}
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm">{t("contact.form.error")}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  t("contact.form.sending")
                ) : (
                  <>
                    <Send size={18} />
                    {t("contact.form.send")}
                  </>
                )}
              </Button>
            </form>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}

