"use client";

import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import MarketingDiagram from "@/components/MarketingDiagram";
import CyberSecurityDiagram from "@/components/CyberSecurityDiagram";

interface ModalContent {
  title: string;
  content: string;
  visual: React.ReactNode;
}

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleOpenModal = (
    title: string,
    content: string,
    visual: React.ReactNode
  ) => {
    setModalContent({ title, content, visual });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      {/* --- Cards --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Card 1 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
              Conception de Site Web
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              Créons des expériences web uniques et engageantes.
            </p>
            <div className="mt-6">
              <button
                onClick={() =>
                  handleOpenModal(
                    "Conception de Site Web",
                    "Nous créons des sites web performants, esthétiques et adaptés à vos objectifs. Chaque projet est conçu avec soin pour refléter votre identité visuelle et vos valeurs.",
                    <Image
                      src="/web-design.svg"
                      alt="web design"
                      width={256}
                      height={256}
                      className="w-64 h-auto"
                    />
                  )
                }
                className="z-10 relative bg-white text-black text-sm font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition"
              >
                En savoir plus
              </button>
            </div>
          </div>
          <Image
            src="/img/dev.png"
            width={300}
            height={300}
            alt="dev"
            className="absolute -right-10 md:-right-[10%] lg:right-[10%] bottom-2 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* Card 2 */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="max-w-xs">
            <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
              Marketing Produits
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              Mettez vos produits en lumière avec des visuels qui vendent.
            </p>
            <div className="mt-6">
              <button
                onClick={() =>
                  handleOpenModal(
                    "Marketing Produits",
                    "Nos stratégies visuelles et rédactionnelles augmentent vos conversions et renforcent votre image.",
                    <MarketingDiagram />
                  )
                }
                className="z-10 relative bg-white text-black text-sm font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </WobbleCard>

        {/* Card 3 */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="text-left text-xl lg:text-3xl font-semibold text-white">
              Cyber Sécurité
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              Sécurisez vos systèmes avec des technologies de pointe.
            </p>
            <div className="mt-6">
              <button
                onClick={() =>
                  handleOpenModal(
                    "Cyber Sécurité",
                    "Notre équipe met en place des solutions proactives pour protéger vos données, anticiper les attaques et garantir la continuité de vos activités.",
                    <CyberSecurityDiagram />
                  )
                }
                className="z-10 relative bg-white text-black text-sm font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition"
              >
                En savoir plus
              </button>
            </div>
          </div>
          <Image
            src="/img/secu.png"
            width={300}
            height={300}
            alt="cyber"
            className="absolute -right-10 md:-right-[10%] lg:right-[10%] bottom-2 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>

      {/* --- Modal --- */}
      {modalOpen && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-xl p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-2">{modalContent.title}</h3>
            <p className="text-gray-700 mb-4">{modalContent.content}</p>
            <div className="w-full flex justify-center items-center">
              {modalContent.visual}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
