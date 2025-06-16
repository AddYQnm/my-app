"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center bg- justify-center mt-[70px] ">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-[86px] dark:text-slate-300">
          {"Marketing Digital 360°& Cybersécurité"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Bienvenue dans notre univers de création et de marketing digital. 
          Nous vous aidons à transformer votre marque grâce à nos expertises 
          en conception de site web, cyber sécurité, création de photos de produits,
           et stratégies marketing innovantes.
          up.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
        <button className="w-60 transform rounded-lg bg-[#b00056] px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-[#b00056] dark:text-white dark:hover:bg-gray-200">
  Demander un devis
</button>

<button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
  En savoir plus
</button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
      <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
      <Image
        src="/img/Group2.png" // ✅ sans "public"
        alt="Landing page preview"
        className="aspect-[16/9] h-auto w- object-fill"
        width={1000}
        height={1000}
        priority // optionnel, pour le chargement immédiat
      />
    </div>
        </motion.div>
      </div>
    </div>
  );
}

