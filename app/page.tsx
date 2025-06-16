"use client";

import { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import AboutSection from "@/components/AboutSection";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeroSectionOne from "@/components/hero-section-demo-1";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems
} from "@/components/ui/resizable-navbar";
import ActualitesConseils from "@/components/ActualitesConseils";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ServiceModal from "@/components/ServiceModal";
import CyberSecurityDiagram from "@/components/CyberSecurityDiagram";
import MarketingDiagram from "@/components/MarketingDiagram";
import Image from "next/image";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "", visual: null });

  const handleOpenModal = (title: string, content: string, visual: React.ReactNode) => {
    setModalContent({ title, content, visual });
    setModalOpen(true);
  };

  return (
    <>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={[
              { name: "Accueil", link: "/" },
              { name: "Services", link: "#services" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          
          <NavbarButton href="#signup">Programme ton appel</NavbarButton>
        </NavBody>
      </Navbar>

            <MobileNav>
<MobileNavHeader>
  <MobileNavMenu/>
  <MobileNavToggle/>
</MobileNavHeader>
      </MobileNav>


      <main>
        <HeroSectionOne />

        <section id="services" className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center mb-8">
            <h1 className="col-span-1 text-3xl sm:text-4xl lg:text-[48px] font-bold">Nos Services</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <img src="/web-design.svg" alt="web design" className="w-64 h-auto" />
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
                alt="cyber"
                className="absolute -right-10 md:-right-[10%] lg:right-[10%] bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>

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
        </section>

        <AboutSection />

        <div className="max-w-7xl mx-auto w-full rounded-3xl my-12 px-4 sm:px-6 lg:px-8">
          <div className="items-center mb-8 pt-6">
            <h1 className="text-black text-[20px] font-bold text-center"></h1>
          </div>
          <ActualitesConseils />

          <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold mt-8 mb-4 text-center">
            Ce que nos clients disent sur nous...
          </h1>

          <div className="w-full flex justify-center items-center my-12">
           <InfiniteMovingCards
  items={[
    { quote: "Une vitesse fulgurante avec Gippity AI !", name: "Jean Dupont", title: "CTO chez AI Corp" },
    { quote: "C’est comme de la magie, mais réelle !", name: "Claire Martin", title: "Cheffe de produit chez MagicTech" },
    { quote: "Gippity transforme notre manière de travailler au quotidien.", name: "Luc Moreau", title: "Directeur Innovation chez FutureWorks" },
    { quote: "Simple, rapide, et incroyablement puissant.", name: "Émilie Laurent", title: "Ingénieure IA chez NovaLab" },
    { quote: "Un outil indispensable pour notre équipe tech.", name: "Marc Lefèvre", title: "Responsable technique chez CodeFusion" },
    { quote: "L’intelligence artificielle à son meilleur niveau.", name: "Sophie Bertrand", title: "CEO de VisionNext" },
  ]}
  direction="right"
  speed="slow"
/>

          </div>
        </div>

        <FaqSection />
        <Footer />

        <ServiceModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title={modalContent.title}
          content={modalContent.content}
          visual={modalContent.visual}
        />
      </main>
    </>
  );
}
