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

/**
 * Venezuela is the target market, so a visitor there gets Spanish even on a
 * device configured in English — imported phones and technical users are
 * common enough that browser language alone misses real prospects.
 */
function detectLanguage(): Language {
  if (navigator.language.toLowerCase().startsWith("es")) return "es";

  try {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone === "America/Caracas") {
      return "es";
    }
  } catch {
    // Intl unavailable: fall through to the default.
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    // A choice the visitor made themselves always wins over detection.
    const resolved: Language =
      stored === "en" || stored === "es" ? stored : detectLanguage();

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

