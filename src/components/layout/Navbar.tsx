import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { LanguagePicker } from "./LanguagePicker";
import { SmoothLink } from "../ui/SmoothLink";

const NAV_ITEMS = [
  { key: "nav.projects", to: "projects" },
  { key: "nav.about", to: "about" },
  { key: "nav.contact", to: "contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <SmoothLink
            to="hero"
            className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="font-bold">Sneyder</span>{" "}
            <span className="font-light">Angulo</span>
          </SmoothLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <SmoothLink
                    to={item.to}
                    className={clsx(
                      "text-sm font-medium transition-colors duration-200",
                      "text-white/70 hover:text-white"
                    )}
                  >
                    {t(item.key)}
                  </SmoothLink>
                </li>
              ))}
              <li>
                <a
                  href="https://sneyder-chronicles.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                >
                  {t("nav.blog")}
                </a>
              </li>
            </ul>
            <LanguagePicker />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <SmoothLink
                  to={item.to}
                  className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </SmoothLink>
              </li>
            ))}
            <li>
              <a
                href="https://sneyder-chronicles.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
              >
                {t("nav.blog")}
              </a>
            </li>
          </ul>
          <LanguagePicker />
        </nav>
      </div>
    </>
  );
}

