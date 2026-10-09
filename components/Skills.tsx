
"use client";

import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Développement web",
    description: "Conception et développement de sites web.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "WordPress",
      "WooCommerce",
      "Elementor Pro",
    ],
  },
  {
    number: "02",
    title: "Design & création",
    description: "Interfaces, identité visuelle et contenus digitaux.",
    skills: [
      "Canva",
      "UI Design",
      "Responsive Design",
      "WordPress Design",
      "Création de contenu",
    ],
  },
  {
    number: "03",
    title: "Outils & technologies",
    description: "Des outils pour construire et déployer des projets.",
    skills: [
      "VS Code",
      "Git & GitHub",
      "Vercel",
      "Prisma",
      "Odoo",
      "WooCommerce",
    ],
  },
  {
    number: "04",
    title: "Business & stratégie",
    description: "Une approche digitale nourrie par l'entrepreneuriat.",
    skills: [
      "Gestion de projet",
      "Entrepreneuriat",
      "Marketing digital",
      "Community management",
      "Communication",
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="competences"
      className="bg-[#0b0b0b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D6A83A]">
            Mon savoir-faire
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Des compétences
            <br />
            <span className="text-[#D6A83A]">au service des idées.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
            Du développement web à la stratégie digitale, je mobilise
            différentes compétences pour concevoir des projets cohérents,
            utiles et adaptés à leurs objectifs.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={
                reduceMotion ? false : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-[#D6A83A]/40 hover:bg-white/[0.04] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm tracking-widest text-[#D6A83A]">
                  {group.number}
                </span>
                <span className="text-xl text-white/20 transition-colors group-hover:text-[#D6A83A]">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70 transition-colors hover:border-[#D6A83A]/40 hover:text-[#D6A83A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mt-8 text-sm text-white/35"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies et outils utilisés selon les besoins de chaque projet.
        </motion.p>
      </div>
    </section>
  );
}
