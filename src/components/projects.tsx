import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portfolio from "../data/portfolio";
import { useLanguage } from "./LanguageContext";

type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  details?: {
    overview?: string;
    problem?: string;
    solution?: string;
    role?: string;
    workReduction?: string;
    metrics?: { label: string; value: string; description: string }[];
    images?: string[];
    link?: string;
  };
  translations?: {
    [locale in "pt" | "en" | "es"]?: {
      title?: string;
      category?: string;
      description?: string;
      highlights?: string[];
      details?: {
        overview?: string;
        problem?: string;
        solution?: string;
        role?: string;
        workReduction?: string;
        metrics?: { label?: string; description?: string }[];
      };
    };
  };
};

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-500"
    >
      {label}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const { t, locale } = useLanguage();
  const localeProject = project.translations?.[locale as "pt" | "en" | "es"] || project;
  const cardTitle = localeProject.title || project.title;
  const cardCategory = localeProject.category || project.category;
  const cardDescription = localeProject.description || project.description;
  const cardHighlights = localeProject.highlights || project.highlights;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      aria-label={
        locale === "en"
          ? `View details of ${cardTitle}`
          : locale === "es"
            ? `Ver detalles de ${cardTitle}`
            : `Ver detalhes de ${cardTitle}`
      }
      className="
        group relative overflow-hidden
        rounded-3xl border border-white/8 bg-zinc-900
        cursor-pointer outline-none
        focus-visible:ring-2 focus-visible:ring-white/30
        transition-colors duration-300
        hover:border-white/16
      "
    >
      <div className="relative overflow-hidden h-[260px]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="inline-flex items-center rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-[0.15em] uppercase text-zinc-400 backdrop-blur-sm"
          >
            {cardCategory}
          </span>
        </div>
      </div>

      <div className="p-7 pt-6 space-y-4">
        <h3
          style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
          className="text-3xl font-semibold text-white"
        >
          {cardTitle}
        </h3>

        <p
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-sm leading-relaxed text-zinc-400 font-light line-clamp-2"
        >
          {cardDescription}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {cardHighlights.slice(0, 3).map((h) => (
              <Tag key={h} label={h} />
            ))}
            {cardHighlights.length > 3 && (
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="inline-flex items-center px-2 text-[11px] text-zinc-600"
              >
                +{cardHighlights.length - 3}
              </span>
            )}
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="flex-shrink-0 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200 flex items-center gap-1"
          >
            {t.projects.detailsButton}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
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
            {t.projects.label}
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="text-5xl md:text-6xl font-semibold text-white mt-3 mb-16"
          >
            {t.projects.titleLine1}
            <br />
            <span className="italic font-light text-zinc-400">{t.projects.titleLine2}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => navigate(`/projects/${project.slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
