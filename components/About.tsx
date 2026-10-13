
"use client";

import {
  Code2,
  Rocket,
  Palette,
  ChartNoAxesCombined,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Développement web",
    description:
      "Des sites modernes, responsives et adaptés aux besoins des entreprises.",
  },
  {
    icon: Rocket,
    title: "Entrepreneuriat",
    description:
      "Transformer les opportunités en projets structurés et concrets.",
  },
  {
    icon: Palette,
    title: "Création digitale",
    description:
      "Concevoir des interfaces et des contenus visuellement cohérents.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Stratégie digitale",
    description:
      "Valoriser les marques grâce au web et à la communication.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="apropos"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#D6A83A]">
              À propos de moi
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Entreprendre,
              <span className="text-[#D6A83A]"> créer </span>
              et donner vie aux idées.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            <p className="text-lg leading-9 text-white/70">
              Je suis Leclerc Imounga, étudiant en Entrepreneuriat et Gestion
              des PME, passionné par le développement web, le design et
              la communication digitale.
            </p>

            <p className="mt-6 text-base leading-8 text-white/50">
              J'aime transformer des idées en projets concrets. À travers
              mes expériences, je développe une approche qui associe
              créativité, technologie et compréhension des besoins des
              entreprises.
            </p>

            <p className="mt-6 text-base leading-8 text-white/50">
              Mon objectif : concevoir des expériences digitales utiles,
              soignées et capables de valoriser les marques, les
              entrepreneurs et leurs activités.
            </p>

            <a
              href="#projets"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#D6A83A] transition-all hover:gap-5"
            >
              Découvrir mon univers
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-[#D6A83A]/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6A83A]/20 bg-[#D6A83A]/[0.07] transition-colors duration-300 group-hover:bg-[#D6A83A]/15">
                    <Icon
                      size={25}
                      strokeWidth={1.6}
                      aria-hidden="true"
                      className="text-[#D6A83A]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}