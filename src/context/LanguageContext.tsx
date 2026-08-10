import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { en, type TranslationKey } from "../data/translations/en";
import { es } from "../data/translations/es";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE: Language = "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    // Most prospects are Spanish speakers, so fall back to the browser's
    // language before defaulting — a stored choice always wins.
    const resolved: Language =
      stored === "en" || stored === "es"
        ? stored
        : navigator.language.toLowerCase().startsWith("es")
          ? "es"
          : DEFAULT_LANGUAGE;

    setLanguageState(resolved);
    document.documentElement.lang = resolved;
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  // Prevent hydration mismatch by not rendering until we've read from localStorage
  if (!isHydrated) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

