import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
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
    <div className="border-b border-white/8 py-6 first:pt-0 last:border-none last:pb-0">
      <h4
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="mb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
      >
        {title}
      </h4>
      <p
        style={{ fontFamily: "'DM Sans', sans-serif" }}
        className="text-[0.95rem] leading-relaxed text-zinc-300 font-light"
      >
        {children}
      </p>
    </div>
  );
}

function ScreensCarousel({ images, projectTitle, screenAlt, previousLabel, nextLabel }) {
  const [index, setIndex] = useState(0);

  if (!images?.length) return null;

  const goPrevious = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="overflow-hidden rounded-[30px] border border-white/8 bg-zinc-900 p-4 md:p-6 lg:p-8">
      <div className="flex items-center gap-3">
        {images.length > 1 && (
          <button
            onClick={goPrevious}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={previousLabel}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        )}

        <div className="flex-1 overflow-hidden rounded-[24px] bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              alt={`${projectTitle} - ${screenAlt} ${index + 1}`}
              className="mx-auto h-auto max-h-[560px] w-auto max-w-full object-contain"
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <button
            onClick={goNext}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label={nextLabel}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`${screenAlt} ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
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
      <div className="mx-auto flex max-w-6xl flex-col px-6 py-8 md:px-8 lg:px-12">
        <button
          onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.projectModal.back}
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-10 max-w-3xl"
        >
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
            className="mt-4 text-[0.95rem] leading-relaxed text-zinc-400"
          >
            {projectDescription}
          </p>
        </motion.div>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-[280px] w-full object-cover md:h-[420px]"
          />
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
          className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]"
        >
          {/* Main content */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-9">
            <Section title={t.projectModal.overview}>{projectDetails.overview}</Section>
            <Section title={t.projectModal.problem}>{projectDetails.problem}</Section>
            <Section title={t.projectModal.solution}>{projectDetails.solution}</Section>
            <Section title={t.projectModal.role}>{projectDetails.role}</Section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-zinc-900 p-6">
              <div className="flex items-center gap-2 text-zinc-300">
                <Sparkles className="h-4 w-4" />
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[11px] font-medium uppercase tracking-[0.18em]"
                >
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
                <div className="space-y-3">
                  {projectDetails.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{metric.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm text-zinc-400">{metric.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {projectHighlights?.length > 0 && (
              <div className="rounded-[2rem] border border-white/10 bg-zinc-900 p-6">
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
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.projectModal.viewProject}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </aside>
        </motion.div>

        {/* Screens & flows */}
        <div className="mt-16 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500"
            >
              {t.projectModal.screens}
            </p>
          </div>

          <ScreensCarousel
            key={project.slug}
            images={images}
            projectTitle={projectTitle}
            screenAlt={t.projectModal.screenAlt}
            previousLabel={t.projectModal.previousScreen}
            nextLabel={t.projectModal.nextScreen}
          />
        </div>
      </div>
    </div>
  );
}
