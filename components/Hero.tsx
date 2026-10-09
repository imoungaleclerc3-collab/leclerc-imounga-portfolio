
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16"
    >
      {/* Lumières décoratives */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D6A83A]/10 blur-[140px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#D6A83A]/10 blur-[120px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2 }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Présentation */}
        <div>
          <motion.div
            {...reveal(0.1)}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#D6A83A]" />
            <span className="text-xs tracking-wide text-white/70 sm:text-sm">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          <motion.p
            {...reveal(0.2)}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#D6A83A]"
          >
            ENTREPRENEUR · CRÉATEUR DIGITAL
          </motion.p>

          <motion.h1
            {...reveal(0.3)}
            className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Leclerc
            <br />
            <span className="text-[#D6A83A]">Imounga.</span>
          </motion.h1>

          <motion.h2
            {...reveal(0.4)}
            className="mt-6 text-xl font-medium text-white/85 sm:text-2xl"
          >
            Je transforme les idées
            <br className="hidden sm:block" /> en expériences digitales.
          </motion.h2>

          <motion.p
            {...reveal(0.5)}
            className="mt-5 max-w-xl text-base leading-8 text-white/55 sm:text-lg"
          >
            Développement web, design et stratégie digitale :
            je conçois des solutions modernes pour donner vie
            aux projets des entreprises et des entrepreneurs.
          </motion.p>

          {/* Boutons */}
          <motion.div
            {...reveal(0.65)}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#projets"
              className="inline-flex items-center gap-3 rounded-full bg-[#D6A83A] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8bd53]"
            >
              Découvrir mes projets <span>↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#D6A83A] hover:text-[#D6A83A]"
            >
              Me contacter
            </a>
          </motion.div>

          {/* Indicateurs */}
          <motion.div
            {...reveal(0.8)}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7"
          >
            <div>
              <p className="text-2xl font-bold text-white">Web</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Développement
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Digital</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Création & stratégie
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Business</p>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Entrepreneuriat
              </p>
            </div>
          </motion.div>
        </div>

        {/* Zone visuelle */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.35,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-[#D6A83A]/10 blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{
              duration: 5,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1d1a12] via-[#101010] to-[#080808] p-7 sm:p-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                Portfolio personnel
              </span>
              <span className="text-sm text-[#D6A83A]">01 / 04</span>
            </div>

            <div className="flex min-h-[300px] flex-col justify-center py-10 sm:min-h-[360px]">
              <motion.div
                initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : 0.7,
                }}
                className="mb-7 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#D6A83A]/30 bg-[#D6A83A]/10 text-3xl font-bold text-[#D6A83A]"
              >
                LI
              </motion.div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#D6A83A]">
                Ma vision
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Créativité.
                <br />
                Technologie.
                <br />
                <span className="text-white/40">Impact.</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                Des idées bien pensées, des expériences soignées
                et des projets conçus pour faire la différence.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm text-white/50">
                Basé à Dakar, Sénégal
              </span>
              <span className="text-xl text-[#D6A83A]">✳</span>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.9,
            }}
            className="absolute -bottom-22 left-3 rounded-2xl border border-white/10 bg-[#151515] px-5 py-4 shadow-2xl sm:-left-7"
          >
            <p className="text-xs text-white/45">Approche</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Créative & stratégique
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
