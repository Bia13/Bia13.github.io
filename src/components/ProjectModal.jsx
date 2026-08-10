import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import portfolio from "../data/portfolio";
import { useLanguage } from "./LanguageContext";

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

  const { t, locale } = useLanguage();
  const project = portfolio.projects.find((item) => item.slug === slug);

  const localeProject = project?.translations?.[locale] || project;
  const projectTitle = localeProject?.title || project?.title;
  const projectCategory = localeProject?.category || project?.category;
  const projectDescription = localeProject?.description || project?.description;
  const projectHighlights = localeProject?.highlights || project?.highlights;
  const projectLink = localeProject?.details?.link || project?.details?.link;
  const projectDetails = {
    overview:
      localeProject?.details?.overview || project?.details?.overview,
    problem: localeProject?.details?.problem || project?.details?.problem,
    solution: localeProject?.details?.solution || project?.details?.solution,
    role: localeProject?.details?.role || project?.details?.role,
    workReduction:
      localeProject?.details?.workReduction || project?.details?.workReduction,
    metrics:
      project?.details?.metrics?.map((metric, index) => ({
        value: metric.value,
        label:
          localeProject?.details?.metrics?.[index]?.label || metric.label,
        description:
          localeProject?.details?.metrics?.[index]?.description ||
          metric.description,
      })) || [],
    images:
      localeProject?.details?.images?.length
        ? localeProject?.details?.images
        : project?.details?.images,
  };

  useEffect(() => {
    if (project) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.title = `${projectTitle} | Beatriz Dantas`;
    } else {
      document.title = "Beatriz Dantas";
    }
  }, [project, projectTitle]);

  if (!project) return null;

  const images = projectDetails.images?.length ? projectDetails.images : [project.image];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-8 md:px-8 lg:px-12">
        <button
          onClick={() => navigate("/")}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.projectModal.back}
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
                {projectCategory}
              </span>
              <h1
                style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.05 }}
                className="mt-3 text-4xl font-semibold text-white md:text-5xl"
              >
                {projectTitle}
              </h1>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-zinc-400"
              >
                {projectDescription}
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
                {t.projectModal.impact}
              </span>
            </div>

            {projectDetails.workReduction && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-300">
                  {t.projectModal.reduction}
                </p>
                <p className="mt-2 text-base text-white">{projectDetails.workReduction}</p>
              </div>
            )}

            {projectDetails.metrics.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {projectDetails.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-zinc-400">{metric.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3">
              <Section title={t.projectModal.category}>{projectCategory}</Section>
              <Section title={t.projectModal.overview}>{projectDetails.overview}</Section>
              <Section title={t.projectModal.problem}>{projectDetails.problem}</Section>
              <Section title={t.projectModal.solution}>{projectDetails.solution}</Section>
              <Section title={t.projectModal.role}>{projectDetails.role}</Section>
            </div>

            {projectHighlights?.length > 0 && (
              <div>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
                >
                  {t.projectModal.technologies}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projectHighlights.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            )}

            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.projectModal.viewProject}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              {t.projectModal.screens}
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
                <img src={image} alt={`${projectTitle} - ${t.projectModal.screenAlt} ${index + 1}`} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
