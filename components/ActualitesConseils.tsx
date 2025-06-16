"use client";

import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Les Tendances Web Design",
    description:
      "Découvrez les dernières innovations en matière de conception web et comment elles peuvent améliorer l'expérience utilisateur de votre site.",
  },
  {
    title: "Sécuriser votre E-commerce",
    description:
      "Conseils pratiques pour protéger votre boutique en ligne contre les cyberattaques et rassurer vos clients.",
  },
  {
    title: "Optimiser vos Campagnes Social Media",
    description:
      "Stratégies efficaces pour maximiser l'engagement et le ROI de vos actions sur les réseaux sociaux.",
  },
  {
    title: "Maîtriser le Référencement Naturel (SEO)",
    description:
      "Techniques avancées pour améliorer votre positionnement dans les moteurs de recherche et augmenter votre visibilité en ligne.",
  },
  {
    title: "L'Intelligence Artificielle au Service du Marketing",
    description:
      "Comment intégrer les outils IA dans votre stratégie digitale pour personnaliser l'expérience client et optimiser vos conversions.",
  },
  {
    title: "Analyse de Données pour PME",
    description:
      "Exploitez efficacement vos données clients pour prendre des décisions marketing éclairées et anticiper les tendances de votre marché.",
  },
];

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function ActualitesConseils() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0D0B29] text-white rounded-4xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Actualités & Conseils
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#14123D] border border-[#2A2850] rounded-2xl p-6 hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#B9B8FF]">
              {article.title}
            </h3>
            <p className="text-sm text-[#D1D1E9] leading-relaxed">
              {article.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
