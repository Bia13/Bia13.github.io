import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/copy";

const defaultLocale = "pt";
const LanguageContext = createContext({
  locale: defaultLocale,
  setLocale: (_locale) => {},
  t: translations[defaultLocale],
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return defaultLocale;
    return window.localStorage.getItem("locale") || defaultLocale;
  });

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
