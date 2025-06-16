'use client';

import React from 'react';

type HeroSectionProps = {
  backgroundImage?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = '/img/bg.png', // ✅ SLASH initial
}) => {
  return (
    <section
      className="relative w-full min-h-full flex items-center justify-center px-0 py-20 text-black"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white/80 p-8 pl-[80px] w-full shadow-lg">
        <h1 className="text-4xl md:text-[96px] font-bold mb-4">
          Marketing Digital 360° <br /> & Cybersécurité
        </h1>
        <p className="text-[16px] font-medium mb-6 pr-[70%]">
          Bienvenue dans notre univers de création et de marketing digital. Nous vous aidons à transformer votre marque
          grâce à nos expertises en conception de site web, cyber sécurité, création de photos de produits, et
          stratégies marketing innovantes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#b00056] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#920047] transition">
            Demander un devis
          </button>
          <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
