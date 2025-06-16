"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site web?",
    answer:
      "Le temps de création dépend de la complexité du projet. En général, un site vitrine peut être prêt en 2 à 4 semaines, tandis qu’un site e-commerce peut prendre de 4 à 8 semaines.",
  },
  {
    question: "Quelles mesures de sécurité proposez-vous?",
    answer:
      "Nous mettons en place des protocoles SSL, des sauvegardes régulières, une protection anti-DDoS, des pare-feux applicatifs, et nous formons vos équipes à la cybersécurité.",
  },
  {
    question: "Comment mesurez-vous l'efficacité des campagnes marketing?",
    answer:
      "Nous utilisons des indicateurs comme le taux de clics, le retour sur investissement (ROI), les conversions, le coût par acquisition (CPA) et d’autres KPIs en fonction des objectifs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto w-full rounded-3xl my-12 px-4 sm:px-6 lg:px-8 bg-[#0D0B29] p-26">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Questions Fréquentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#2A2850] rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#1A183D] transition-colors duration-200"
            >
              <span className="text-lg font-medium text-[#B9B8FF]">
                {faq.question}
              </span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-sm text-[#D1D1E9]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
