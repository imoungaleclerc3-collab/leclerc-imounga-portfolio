
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "Dakar Étudiant",
    category: "Plateforme étudiante",
    description:
      "Une plateforme pensée pour accompagner les étudiants dans leur vie à Dakar, avec des rubriques dédiées aux écoles, au logement, au budget et aux guides pratiques.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/projects/dakar-etudiant.png",
    alt: "Page d'accueil de la plateforme Dakar Étudiant",
    featured: true,
    href: "",
  },
  {
    number: "02",
    name: "Entre Nous Bar",
    category: "Site vitrine",
    description:
      "Un univers digital immersif pour un établissement à Libreville, mettant en valeur son identité, ses événements et son ambiance.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/entre-nous-bar.png",
    alt: "Page d'accueil du site Entre Nous Bar",
    featured: false,
    href: "https://entre-nous-bar.vercel.app/",
  },
  {
    number: "03",
    name: "Momo Fashion",
    category: "E-commerce",
    description:
      "Une boutique en ligne dédiée à la mode, avec une présentation des produits et des services de la boutique.",
    technologies: ["WordPress", "WooCommerce", "Elementor Pro"],
    image: "/projects/momo-fashion.png",
    alt: "Boutique en ligne Momo Fashion",
    featured: false,
    href: "",
  },
  {
    number: "04",
    name: "TH VISION",
    category: "Photo & vidéo",
    description:
      "Un site portfolio conçu pour présenter un univers audiovisuel, des prestations créatives et des réalisations photographiques.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/th-vision.png",
    alt: "Site portfolio de TH VISION",
    featured: false,
    href: "https://th-vision.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projets"
      className="bg-[#080808] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D6A83A]">
              Portfolio sélectionné
            </p>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Des idées devenues
              <br />
              <span className="text-[#D6A83A]">réalisations.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/50">
            Quatre projets, quatre univers et une même ambition :
            concevoir des expériences digitales soignées et utiles.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#101010] transition-colors duration-500 hover:border-[#D6A83A]/40 ${
                project.featured ? "lg:col-span-3" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#151515] ${
                  project.featured
                    ? "aspect-[16/8] sm:aspect-[16/7]"
                    : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1366}
                  height={768}
                  sizes={
                    project.featured
                      ? "(max-width: 1024px) 100vw, 90vw"
                      : "(max-width: 1024px) 100vw, 45vw"
                  }
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs text-white backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute bottom-5 right-6 text-5xl font-bold text-white/80 sm:text-6xl">
                  {project.number}
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D6A83A]">
                  Projet {project.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#D6A83A]/40 px-5 py-3 text-sm font-medium text-[#D6A83A] transition-colors hover:bg-[#D6A83A] hover:text-black"
                  >
                    Visiter le projet <span>↗</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
