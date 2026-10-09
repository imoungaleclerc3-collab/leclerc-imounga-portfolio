
"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === "COLLE_TA_CLE_ICI") {
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      "Nouveau message — Portfolio Leclerc Imounga"
    );
    formData.append("from_name", "Portfolio Leclerc Imounga");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#D6A83A]/10 blur-[140px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
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
            Prenons contact
          </p>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Un projet
            <br />
            en tête ?
            <br />
            <span className="text-[#D6A83A]">Parlons-en.</span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/50">
            Tu as une idée, une entreprise à développer ou un projet
            digital à concrétiser ? Contacte-moi et discutons-en.
          </p>

          <div className="mt-10 space-y-4">
            <motion.a
              href="https://sn.linkedin.com/in/leclerc-imounga-748167402"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { x: 5 }}
              className="block rounded-2xl border border-white/10 p-5 transition-colors hover:border-[#D6A83A]/40"
            >
              <p className="font-medium">LinkedIn ↗</p>
              <p className="mt-1 text-sm text-white/45">
                Parcours professionnel et collaborations
              </p>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/leclerc__i/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { x: 5 }}
              className="block rounded-2xl border border-white/10 p-5 transition-colors hover:border-[#D6A83A]/40"
            >
              <p className="font-medium">Instagram ↗</p>
              <p className="mt-1 text-sm text-white/45">
                Contenus et présence digitale
              </p>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.15,
            ease: "easeOut",
          }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-9"
        >
          <h3 className="text-2xl font-semibold">
            Parlons de ton projet
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/45">
            Présente-moi ton idée en quelques lignes.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm text-white/70">
                Nom complet
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="Ton nom"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#D6A83A]/60"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm text-white/70">
                Adresse email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="nom@exemple.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#D6A83A]/60"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm text-white/70">
                Sujet
              </label>
              <input
                id="contact-subject"
                name="topic"
                type="text"
                required
                maxLength={150}
                placeholder="Création d'un site web..."
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#D6A83A]/60"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm text-white/70">
                Ton message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Parle-moi de ton projet..."
                className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#D6A83A]/60"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={
                reduceMotion || status === "loading"
                  ? undefined
                  : { y: -2 }
              }
              whileTap={
                reduceMotion || status === "loading"
                  ? undefined
                  : { scale: 0.99 }
              }
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#D6A83A] px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-[#e8bd53] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Envoi en cours..."
                : "Envoyer mon message ↗"}
            </motion.button>

            {status === "success" && (
              <p role="status" className="text-sm text-green-400">
                Ton message a bien été envoyé. Merci pour ton intérêt !
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm text-red-400">
                L'envoi a échoué. Vérifie la configuration et réessaie.
              </p>
            )}

            <p className="text-xs leading-6 text-white/35">
              Tes informations sont utilisées pour répondre à ta demande.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
