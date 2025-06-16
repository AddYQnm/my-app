"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black text-white"
    >
      {/* Barre de séparation */}
      <div className="w-full border-t border-[#2A2850]"></div>

      {/* Contenu principal */}
      <div className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="mt-4 text-lg text-gray-300">
            Contactez-nous en ligne pour toute demande d'information ou devis. <br className="hidden sm:block" />
            Notre équipe vous répondra dans les 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coordonnées */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#B9B8FF]">Coordonnées</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>ProtekInnov</strong><br />
              89 rue Adolphe Fischer<br />
              1520 Gare, Luxembourg
            </p>
            <p className="text-gray-300">
              <strong>Fixe :</strong> 09 72 68 12 59<br />
              <strong>Email :</strong>{" "}
              <a
                href="mailto:protekinnov@hotmail.fr"
                className="text-[#B9B8FF] underline underline-offset-2 hover:text-white"
              >
                protekinnov@hotmail.fr
              </a>
            </p>
          </div>

          {/* Formulaire rapide (factice ici) */}
          <div className="bg-[#121212] rounded-2xl p-6 shadow-lg space-y-4">
            <h4 className="text-lg font-semibold text-[#B9B8FF]">Formulaire rapide</h4>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Votre message"
              className="w-full p-3 h-32 rounded-lg bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none resize-none"
            />
            <button className="w-full bg-[#B9B8FF] text-black font-semibold py-3 rounded-xl hover:bg-white transition">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
