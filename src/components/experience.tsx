import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

// ── Constants ─────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// ── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    company: "Procfit",
    role: "Product Designer Pleno",
    period: "Jan 2026 — Atual",
    current: true,
    description: [
      "Definição e evolução da identidade visual e Design System dos produtos",
      "Atuação end-to-end em UI/UX mobile, do discovery à entrega, com foco em soluções intuitivas e centradas no usuário",
      "Condução de pesquisas qualitativas e quantitativas",
      "Mapeamento e otimização de jornadas, melhorando usabilidade e eficiência das interfaces",
      "Redesign e evolução contínua dos produtos, garantindo consistência e qualidade da experiência",
    ],
    translations: {
      en: {
        role: "Product Designer (Mid-level)",
        period: "Jan 2026 — Present",
        description: [
          "Defining and evolving the products' visual identity and Design System",
          "End-to-end UI/UX mobile work, from discovery to delivery, focused on intuitive, user-centered solutions",
          "Conducting qualitative and quantitative research",
          "Mapping and optimizing journeys, improving interface usability and efficiency",
          "Ongoing product redesign and evolution, ensuring consistency and quality of the experience",
        ],
      },
      es: {
        role: "Product Designer (Nivel intermedio)",
        period: "Ene 2026 — Actual",
        description: [
          "Definición y evolución de la identidad visual y el Design System de los productos",
          "Trabajo end-to-end en UI/UX móvil, desde el discovery hasta la entrega, con foco en soluciones intuitivas y centradas en el usuario",
          "Conducción de investigaciones cualitativas y cuantitativas",
          "Mapeo y optimización de recorridos, mejorando la usabilidad y eficiencia de las interfaces",
          "Rediseño y evolución continua de los productos, garantizando consistencia y calidad de la experiencia",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Assistente UI/UX Designer",
    period: "Jul 2025 — Jan 2026",
    description: [
      "Responsável pela criação de interfaces, protótipos interativos e fluxos de navegação",
      "Estruturação de design systems do zero, garantindo padronização, escalabilidade e alinhamento com desenvolvimentos",
      "Colaboração com produto e desenvolvimento na definição e entrega das soluções",
      "Apoio em pesquisas de usuário, testes de usabilidade e análise de métricas para otimização contínua das interfaces",
      "Atuação integrada com desenvolvimento (dailys, handoff e validação técnica de protótipos), reduzindo retrabalho e ciclos de ajuste",
    ],
    translations: {
      en: {
        role: "UI/UX Design Assistant",
        period: "Jul 2025 — Jan 2026",
        description: [
          "Responsible for creating interfaces, interactive prototypes and navigation flows",
          "Structuring design systems from scratch, ensuring standardization, scalability and alignment with development",
          "Collaborating with product and development teams to define and deliver solutions",
          "Supporting user research, usability testing and metrics analysis for continuous interface optimization",
          "Working closely with development (dailies, handoff and technical validation of prototypes), reducing rework and adjustment cycles",
        ],
      },
      es: {
        role: "Asistente de Diseño UI/UX",
        period: "Jul 2025 — Ene 2026",
        description: [
          "Responsable de la creación de interfaces, prototipos interactivos y flujos de navegación",
          "Estructuración de design systems desde cero, garantizando estandarización, escalabilidad y alineación con desarrollo",
          "Colaboración con producto y desarrollo en la definición y entrega de las soluciones",
          "Apoyo en investigaciones de usuario, pruebas de usabilidad y análisis de métricas para la optimización continua de las interfaces",
          "Trabajo integrado con desarrollo (dailies, handoff y validación técnica de prototipos), reduciendo retrabajo y ciclos de ajuste",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Auxiliar em Design Gráfico e Front-end",
    period: "Jan 2025 — Jun 2025",
    description: [
      "Criação de peças para marketplaces e páginas de produto",
      "Implementação front-end com HTML, CSS, JavaScript, React e Tailwind",
      "Apoio em melhorias de interfaces e experiência do usuário",
    ],
    translations: {
      en: {
        role: "Graphic Design & Front-end Assistant",
        period: "Jan 2025 — Jun 2025",
        description: [
          "Creating assets for marketplaces and product pages",
          "Front-end implementation with HTML, CSS, JavaScript, React and Tailwind",
          "Supporting interface and user experience improvements",
        ],
      },
      es: {
        role: "Asistente de Diseño Gráfico y Front-end",
        period: "Ene 2025 — Jun 2025",
        description: [
          "Creación de piezas para marketplaces y páginas de producto",
          "Implementación front-end con HTML, CSS, JavaScript, React y Tailwind",
          "Apoyo en mejoras de interfaces y experiencia de usuario",
        ],
      },
    },
  },
  {
    company: "Mamba Digital",
    role: "Estagiária em Design Gráfico",
    period: "Set 2024 — Jan 2025",
    description: [
      "Criação de peças para marketplaces",
      "Design gráfico e identidade visual",
    ],
    translations: {
      en: {
        role: "Graphic Design Intern",
        period: "Sep 2024 — Jan 2025",
        description: [
          "Creating assets for marketplaces",
          "Graphic design and visual identity",
        ],
      },
      es: {
        role: "Pasante de Diseño Gráfico",
        period: "Sep 2024 — Ene 2025",
        description: [
          "Creación de piezas para marketplaces",
          "Diseño gráfico e identidad visual",
        ],
      },
    },
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function TimelineDot({ current }: { current?: boolean }) {
  const { t } = useLanguage();
  return (
    <div className="absolute left-0 top-[1.1rem] flex items-center justify-center">
      {current ? (
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>
      ) : (
        <span className="h-2 w-2 rounded-full bg-zinc-700 ring-4 ring-zinc-950" />
      )}
    </div>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { t, locale } = useLanguage();
  const localized = exp.translations?.[locale as "en" | "es"];
  const role = localized?.role ?? exp.role;
  const period = localized?.period ?? exp.period;
  const description = localized?.description ?? exp.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      <TimelineDot current={exp.current} />

      <div className="rounded-3xl border border-white/8 bg-zinc-900 p-7 md:p-9 transition-colors duration-300 hover:border-white/14">

        {/* header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              {role}
            </h3>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="mt-1 text-sm text-zinc-500"
            >
              {exp.company}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {exp.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-[11px] font-medium text-emerald-400"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t.experience.currentLabel}
              </span>
            )}
            <span
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[11px] font-medium tracking-wide text-zinc-600 tabular-nums"
            >
              {period}
            </span>
          </div>
        </div>

        {/* divider */}
        <div className="mb-5 h-px bg-white/[0.06]" />

        {/* description */}
        <ul className="space-y-2.5">
          {description.map((item) => (
            <li
              key={item}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="flex gap-3 text-sm leading-relaxed text-zinc-400 font-light"
            >
              <span className="mt-[0.45rem] h-1 w-1 flex-shrink-0 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
          >
            {t.experience.label}
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="mt-3 text-5xl md:text-6xl font-semibold text-white"
          >
            {t.experience.titleLine1}
            <br />
            <span className="italic font-light text-zinc-400">{t.experience.titleLine2}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[5px] top-3 bottom-0 w-px bg-gradient-to-b from-white/15 via-white/6 to-transparent" />

          {experiences.map((exp, i) => (
            <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}