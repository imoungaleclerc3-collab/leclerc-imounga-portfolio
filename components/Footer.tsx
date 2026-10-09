
"use client";

import { motion, useReducedMotion } from "framer-motion";

const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://sn.linkedin.com/in/leclerc-imounga-748167402",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@leclerc_i",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leclerc__i/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/leclerc.imounga.7/",
  },
  {
    label: "GitHub",
    href: "https://github.com/imoungaleclerc3-collab",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      className="border-t border-white/10 bg-[#080808] px-6 py-10 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <motion.a
            href="#accueil"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="w-fit text-2xl font-bold tracking-tight"
          >
            LECLERC<span className="text-[#D6A83A]">.</span>
            <span className="mt-1 block text-xs font-normal tracking-[0.2em] text-white/40">
              IMOUNGA
            </span>
          </motion.a>

          <nav
            aria-label="Navigation de pied de page"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 8 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="text-sm text-white/50 transition-colors hover:text-[#D6A83A]"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
            Retrouve-moi en ligne
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter mon profil ${social.label}`}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 8 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/65 transition-colors duration-300 hover:border-[#D6A83A]/50 hover:text-[#D6A83A]"
              >
                {social.label} ↗
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Leclerc Imounga. Tous droits réservés.</p>

          <motion.a
            href="#accueil"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="w-fit transition-colors hover:text-[#D6A83A]"
          >
            Retour en haut ↑
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
