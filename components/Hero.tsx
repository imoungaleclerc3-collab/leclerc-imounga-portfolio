
"use client";

import Image from "next/image";
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
      className="relative isolate overflow-hidden bg-[#080808] px-6 pb-16 pt-32 text-white sm:px-10 lg:min-h-screen lg:px-16 lg:pb-20"
    >
      {/* Lumières dorées */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#D6A83A]/10 blur-[140px]"
      />
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#D6A83A]/10 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:min-h-[650px] lg:grid-cols-2 lg:gap-8">
        {/* Présentation */}
        <div className="relative z-10">
          <motion.div
            {...reveal(0.1)}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#D6A83A]" />
            <span className="text-xs tracking-wide text-white/70 sm:text-sm">
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          <motion.p
            {...reveal(0.2)}
            className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#D6A83A] sm:text-sm"
          >
            ÉTUDIANT · ENTREPRENEUR · DÉVELOPPEUR WEB
          </motion.p>

          <motion.h1
            {...reveal(0.3)}
            className="text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Bonjour,
            <br />
            moi c’est
            <br />
            <span className="text-[#D6A83A]">Leclerc Imounga.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.4)}
            className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
          >
            Étudiant en Entrepreneuriat et Gestion des PME, passionné par le
            digital, la création de projets et le développement web.
            J’accompagne les entreprises et les entrepreneurs dans leur
            présence en ligne grâce à des sites modernes et performants.
          </motion.p>

          {/* Boutons */}
          <motion.div
            {...reveal(0.55)}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projets"
              className="inline-flex items-center gap-3 rounded-full bg-[#D6A83A] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#e8bd53]"
            >
              Voir mes projets <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D6A83A] hover:text-[#D6A83A]"
            >
              Me contacter <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          {/* Indicateurs */}
          <motion.div
            {...reveal(0.7)}
            className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6"
          >
            <div className="pr-3">
              <p className="text-2xl font-bold text-white">3 ans+</p>
              <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                Études en gestion
              </p>
            </div>

            <div className="border-l border-white/10 px-4">
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                Projets digitaux
              </p>
            </div>

            <div className="border-l border-white/10 pl-4">
              <p className="text-2xl font-bold text-white">33K+</p>
              <p className="mt-1 text-xs leading-5 text-white/50 sm:text-sm">
                Abonnés TikTok
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portrait personnel */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-xl"
        >
          {/* Halo doré */}
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-[#D6A83A]/20 blur-[90px]"
          />

          {/* Cadre du portrait */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#D6A83A]/20 bg-gradient-to-br from-[#282115] via-[#121212] to-[#080808] sm:min-h-[520px] lg:min-h-[590px]">
            <Image
              src="/images/leclerc-portrait.jpeg"
              alt="Portrait de Leclerc Imounga"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_25%]"
            />

            {/* Dégradé pour fondre la photo dans le design */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-black/10"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6A83A]">
                Étudiant · Entrepreneur
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Construire.
                <br />
                Innover.
                <span className="text-[#D6A83A]"> Entreprendre.</span>
              </h2>
              <p className="mt-3 text-sm text-white/60">
                Basé à Dakar, Sénégal
              </p>
            </div>
          </div>

          {/* Carte flottante */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.8,
            }}
            className="absolute -bottom-5 right-3 rounded-2xl border border-white/10 bg-[#111111]/95 px-5 py-4 shadow-2xl backdrop-blur-md sm:-right-5"
          >
            <p className="text-xs text-white/45">Mon domaine</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Web & stratégie digitale
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}