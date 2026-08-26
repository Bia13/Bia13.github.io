import { useLanguage } from "./LanguageContext";

const sections = [
  { id:"bia", labelKey:"bia"},
  { id: "top", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "projects", labelKey: "projects" },
  { id: "gallery", labelKey: "gallery" },
  { id: "experience", labelKey: "experience" },
  { id: "contact", labelKey: "contact" },
];

const locales = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="flex items-center gap-4">
          
          <nav className="hidden items-center gap-3 md:flex" aria-label="Main navigation">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav[section.labelKey]}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
          {locales.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLocale(l.code)}
              aria-current={locale === l.code}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                locale === l.code
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
