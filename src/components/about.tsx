import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const LEVELS = {
  nativo:        { dots: 5 },
  profissional:  { dots: 5 },
  avançado:      { dots: 4 },
  intermediário: { dots: 3 },
  básico:        { dots: 2 },
} as const;

type Level = keyof typeof LEVELS;

interface Skill {
  name: string;
  level: Level;
}

type CategoryLabel = "tech" | "design" | "languages";

interface Category {
  label: CategoryLabel;
  color: string;
  items: Skill[];
}

const categories: Category[] = [
  {
    label: "tech",
    color: "#378ADD",
    items: [
      { name: "HTML & CSS",           level: "avançado"      },
      { name: "Tailwind CSS",         level: "avançado"      },
      { name: "React / React Native", level: "intermediário" },
      { name: "N8N",                  level: "básico"        },
      { name: "SQL",                  level: "básico"        },
    ],
  },
  {
    label: "design",
    color: "#1D9E75",
    items: [
      { name: "Figma",       level: "profissional" },
      { name: "Adobe Suite", level: "avançado"     },
      { name: "Canva",       level: "avançado"     },
      { name: "Capcut",      level: "avançado"     },
    ],
  },
  {
    label: "languages",
    color: "#7F77DD",
    items: [
      { name: "Português", level: "nativo"       },
      { name: "Inglês",    level: "profissional" },
      { name: "Espanhol",  level: "básico"       },
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SkillCard({
  name,
  level,
  color,
  index,
}: Skill & { color: string; index: number }) {
  const { t } = useLanguage();
  const dots = LEVELS[level].dots;
  const label = t.about.levelLabels[level];
  const pct = dots === 5 ? "97%" : dots === 4 ? "80%" : dots === 3 ? "55%" : "25%";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-zinc-900 p-5 transition-colors duration-300 hover:border-white/16"
    >
      {/* progress bar */}
      <span
        className="absolute bottom-0 left-0 h-[2px] opacity-60 transition-all duration-700"
        style={{ width: pct, backgroundColor: color }}
      />

      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="mb-1 text-sm font-medium text-zinc-100"
      >
        {name}
      </p>
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="mb-3 text-[11px] tracking-wide text-zinc-500"
      >
        {label}
      </p>

      <div className="flex gap-[5px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full border-[1.5px] transition-colors duration-300"
            style={{
              borderColor: color,
              backgroundColor: i < dots ? color : "transparent",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CategoryBlock({ cat, catIndex }: { cat: Category; catIndex: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay: catIndex * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="h-px w-6 opacity-60"
          style={{ backgroundColor: cat.color }}
        />
        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
        >
          {t.about.categories[cat.label]}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {cat.items.map((skill, i) => (
          <SkillCard
            key={skill.name}
            {...skill}
            color={cat.color}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-8 py-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
          >
            {t.about.label}
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="mt-3 text-5xl md:text-6xl font-semibold text-white"
          >
            {t.about.titleLine1}
            <br />
            <span className="italic font-light text-zinc-400">{t.about.titleLine2}</span>
          </h2>
        </motion.div>

        {/* Bio + divider */}
        <div className="mt-12 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[0.9375rem] leading-relaxed text-zinc-400 font-light"
          >
            {t.about.bio1}
          </motion.p>

          {/* vertical rule */}
          <div className="hidden md:block w-px self-stretch bg-white/[0.06]" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[0.9375rem] leading-relaxed text-zinc-400 font-light"
          >
            {t.about.bio2}
          </motion.p>
        </div>

        {/* horizontal rule */}
        <div className="my-16 h-px bg-white/[0.06]" />

        {/* Skills */}
        <div className="space-y-12">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.label} cat={cat} catIndex={i} />
          ))}
        </div>

      </div>
    </section>
  );
}