
"use client";

import { motion, useReducedMotion } from "framer-motion";

const education = [
  {
    period: "2026 – 2027",
    level: "Licence 3",
    title: "Entrepreneuriat et Gestion des PME",
    school: "UNIPRO",
    result: "En cours",
    status: "En cours",
  },
  {
    period: "2025 – 2026",
    level: "Licence 2",
    title: "Entrepreneuriat et Gestion des PME",
    school: "UNIPRO",
    result: "15,83 / 20",
    status: "Année validée",
  },
  {
    period: "2024 – 2025",
    level: "Licence 1",
    title: "Gestion d'entreprise",
    school: "IPG-ISTI",
    result: "13,38 / 20",
    status: "Année validée",
  },
  {
    period: "Baccalauréat",
    level: "Bac A1",
    title: "Baccalauréat littéraire",
    school: "IFB",
    result: "12,18 / 20",
    status: "Mention Assez bien",
  },
];

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="formation"
      className="bg-[#0b0b0b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
          }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D6A83A]">
            Formation académique
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Construire son avenir,
            <br />
            <span className="text-[#D6A83A]">une étape à la fois.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            Un parcours orienté vers la gestion, l'entrepreneuriat et le
            développement des compétences nécessaires à la conduite de projets.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.level}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-[#D6A83A]/40 sm:p-9"
            >
              <span className="absolute right-6 top-5 text-5xl font-bold text-white/[0.04] transition-colors group-hover:text-[#D6A83A]/10">
                0{index + 1}
              </span>

              <div className="relative">
                <span className="inline-flex rounded-full border border-[#D6A83A]/25 bg-[#D6A83A]/5 px-3 py-1.5 text-xs font-medium text-[#D6A83A]">
                  {item.period}
                </span>

                <h3 className="mt-6 text-2xl font-bold">{item.level}</h3>

                <p className="mt-3 text-base text-white/75">
                  {item.title}
                </p>

                <p className="mt-2 text-sm text-white/40">{item.school}</p>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="text-lg font-semibold text-white">
                    {item.result}
                  </span>

                  <span className="text-xs text-white/45">{item.status}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
