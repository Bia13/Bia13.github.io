import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import portfolio from "../data/portfolio";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const art = portfolio.graphicDesignGallery[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? portfolio.graphicDesignGallery.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === portfolio.graphicDesignGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="border-t border-white/8 py-32 px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500"
          >
            Galeria
          </span>

          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="mt-3 mb-16 text-5xl font-semibold text-white md:text-6xl"
          >
            Artes de
            <br />
            <span className="italic font-light text-zinc-400">design gráfico.</span>
          </h2>
        </motion.div>

        <div className="overflow-hidden rounded-[30px] border border-white/8 bg-zinc-900 p-4 md:p-6 lg:p-8">
        

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex w-full items-center justify-between gap-3">
              <button
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Arte anterior"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="flex-1 overflow-hidden rounded-[24px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    src={art.image}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35 }}
                    className="mx-auto h-auto max-h-[500px] w-auto max-w-full object-contain"
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Próxima arte"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {portfolio.graphicDesignGallery.map((item, index) => (
              <button
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
