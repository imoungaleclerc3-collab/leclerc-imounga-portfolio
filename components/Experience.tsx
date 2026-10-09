
"use client";

import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    period: "2026",
    role: "Stagiaire en gestion de projet",
    company: "Carrefour Consulting",
    description:
      "Participation à un projet entrepreneurial collectif autour de la production et de la commercialisation de savon liquide, avec un capital de départ de 50 000 FCFA.",
    type: "Stage professionnel",
  },
  {
    period: "2025 – 2026",
    role: "Community Manager & Chargé de communication",
    company: "Amicale des étudiants",
    description:
      "Participation à la communication de l'association étudiante, à la création de contenus et à la valorisation de ses activités.",
    type: "Communication digitale",
  },
  {
    period: "2022 – 2024",
    role: "Community Manager",
    company: "Belma Sweet",
    description:
      "Gestion des réseaux sociaux de la pâtisserie et création de son site web pour renforcer sa présence digitale.",
    type: "Expérience digitale",
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D6A83A]">
            Mon parcours professionnel
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Apprendre en faisant.
            <br />
            <span className="text-[#D6A83A]">Progresser en créant.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            Mes expériences me permettent de développer une vision à la fois
            entrepreneuriale, créative et opérationnelle des projets.
          </p>
        </motion.div>

        <div className="relative mt-16 space-y-6 before:absolute before:bottom-8 before:left-[7px] before:top-4 before:w-px before:bg-white/10 md:ml-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={reduceMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: "easeOut",
              }}
              className="relative pl-9 sm:pl-12"
            >
              <span className="absolute left-0 top-7 h-4 w-4 rounded-full border-4 border-[#080808] bg-[#D6A83A] ring-1 ring-[#D6A83A]/40" />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#D6A83A]/35 sm:p-8">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-medium text-[#D6A83A]">
                      {experience.period}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-white/65">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50">
                    {experience.type}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
