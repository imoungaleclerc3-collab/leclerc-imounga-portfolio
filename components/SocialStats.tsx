
"use client";

import { motion, useReducedMotion } from "framer-motion";

const socialNetworks = [
  {
    name: "TikTok",
    handle: "@leclerc_i",
    followers: "30K+",
    description: "Humour, tendances et divertissement.",
    symbol: "♪",
    href: "https://www.tiktok.com/@leclerc_i",
  },
  {
    name: "Instagram",
    handle: "@leclerc__i",
    followers: "15K+",
    description: "Contenus visuels et développement d'audience.",
    symbol: "◎",
    href: "https://www.instagram.com/leclerc__i/",
  },
  {
    name: "Facebook",
    handle: "Leclerc Imounga",
    followers: "2,5K+",
    description: "Contenus et interaction avec la communauté.",
    symbol: "f",
    href: "https://www.facebook.com/leclerc.imounga.7/",
  },
];

export default function SocialStats() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social"
      className="bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: "easeOut",
            }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D6A83A]">
              Présence digitale
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Créer du contenu.
              <br />
              <span className="text-[#D6A83A]">Créer du lien.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/50">
              Au-delà du développement web, je m'intéresse à la création
              de contenu, aux tendances digitales et à la manière dont les
              marques peuvent développer leur présence en ligne.
            </p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.2,
              }}
              className="mt-8 rounded-2xl border border-[#D6A83A]/20 bg-[#D6A83A]/[0.04] p-5"
            >
              <p className="text-sm text-white/50">
                Une présence sur plusieurs plateformes
              </p>
              <p className="mt-2 text-3xl font-bold text-[#D6A83A]">
                47,5K+
              </p>
              <p className="mt-2 text-xs leading-6 text-white/40">
                Abonnés cumulés sur les trois réseaux, selon les
                statistiques déclarées.
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {socialNetworks.map((network, index) => (
              <motion.a
                key={network.name}
                href={network.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter mon profil ${network.name}`}
                initial={reduceMotion ? false : { opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? undefined : { x: 5 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-[#D6A83A]/35 sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl font-bold text-[#D6A83A] transition-colors group-hover:bg-[#D6A83A]/10">
                  {network.symbol}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold">{network.name}</h3>
                  <p className="mt-1 text-xs text-white/40 sm:text-sm">
                    {network.handle}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {network.description}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-xl font-bold sm:text-2xl">
                    {network.followers}
                  </p>
                  <p className="mt-1 text-xs text-white/35">abonnés</p>
                  <span className="mt-2 inline-block text-sm text-[#D6A83A]">
                    Visiter ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="font-semibold">Retrouvons-nous sur LinkedIn</p>
            <p className="mt-2 text-sm text-white/45">
              Parcours professionnel, projets et opportunités de collaboration.
            </p>
          </div>

          <a
            href="https://sn.linkedin.com/in/leclerc-imounga-748167402"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#D6A83A]/40 px-5 py-3 text-sm font-medium text-[#D6A83A] transition-all hover:bg-[#D6A83A] hover:text-black"
          >
            Voir mon profil ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
