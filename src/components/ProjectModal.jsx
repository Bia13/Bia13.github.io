import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import portfolio from "../data/portfolio";

const EASE = [0.22, 1, 0.36, 1];

function Tag({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
      {label}
    </span>
  );
}

function Section({ title, children }) {
  if (!children) return null;

  return (
    <div className="space-y-2 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
      <h4
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
      >
        {title}
      </h4>
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-sm leading-relaxed text-zinc-400"
      >
        {children}
      </p>
    </div>
  );
}

export default function ProjectModal() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = portfolio.projects.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = project ? `${project.title} | Beatriz Dantas` : "Beatriz Dantas";
  }, [project]);

  if (!project) return null;

  const images = project.details?.images?.length ? project.details.images : [project.image];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-8 md:px-8 lg:px-12">
        <button
          onClick={() => navigate("/")}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para projetos
        </button>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <div>
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
              >
                {project.category}
              </span>
              <h1
                style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.05 }}
                className="mt-3 text-4xl font-semibold text-white md:text-5xl"
              >
                {project.title}
              </h1>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-zinc-400"
              >
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="flex items-center gap-2 text-zinc-300">
              <Sparkles className="h-4 w-4" />
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[11px] font-medium uppercase tracking-[0.18em]">
                Impacto e contexto
              </span>
            </div>

            {project.details?.workReduction && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Redução de trabalho
                </p>
                <p className="mt-2 text-lg text-white">{project.details.workReduction}</p>
              </div>
            )}

            {project.details?.metrics?.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {project.details.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-zinc-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3">
              <Section title="Overview">{project.details?.overview}</Section>
              <Section title="Problema">{project.details?.problem}</Section>
              <Section title="Solução">{project.details?.solution}</Section>
              <Section title="Meu papel">{project.details?.role}</Section>
            </div>

            {project.highlights?.length > 0 && (
              <div>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
                >
                  Tecnologias & entregas
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            )}

            {project.details?.link && (
              <a
                href={project.details.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Telas e fluxos
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {images.map((image, index) => (
              <motion.div
                key={`${project.slug}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900"
              >
                <img src={image} alt={`${project.title} - tela ${index + 1}`} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
