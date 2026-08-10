import { useLanguage } from "./LanguageContext";

const sections = [
  { id: "top", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "projects", labelKey: "projects" },
  { id: "gallery", labelKey: "gallery" },
  { id: "experience", labelKey: "experience" },
  { id: "skills", labelKey: "skills" },
  { id: "contact", labelKey: "contact" },
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
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/20">
            Bia
          </div>
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

        <button
          type="button"
          onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
        >
          {locale === "pt" ? "EN" : "PT"}
        </button>
      </div>
    </header>
  );
}
