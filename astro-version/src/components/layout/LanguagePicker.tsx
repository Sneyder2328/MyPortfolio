import { clsx } from "clsx";
import { useLanguage } from "../../context/LanguageContext";

export function LanguagePicker() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLanguage("en")}
        className={clsx(
          "px-2 py-1 rounded-md transition-all duration-200",
          language === "en"
            ? "text-white bg-white/10"
            : "text-white/50 hover:text-white/80"
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-white/30">/</span>
      <button
        onClick={() => setLanguage("es")}
        className={clsx(
          "px-2 py-1 rounded-md transition-all duration-200",
          language === "es"
            ? "text-white bg-white/10"
            : "text-white/50 hover:text-white/80"
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}

