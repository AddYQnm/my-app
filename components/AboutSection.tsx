// components/AboutSection.tsx
import StatCard from "./StatCard";

export default function AboutSection() {
  return (
    <section className=" text-white py-16 px-6 ">
 <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
  {/* Bloc gauche : titre + sous-titre */}
  <div className="flex-shrink-0">
    <h2 className="text-4xl font-bold text-black dark:text-white lg:-ml-5">
      A Propos
    </h2>
    <p className="text-xl font-semibold mt-4 text-neutral-700 dark:text-neutral-300 lg:-ml-5">
      Historique et valeurs <br /> de l’entreprise
    </p>
  </div>



        {/* Bloc droite : Statistiques */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <StatCard value="10+" label="Années d’expérience" />
          <StatCard value="50+" label="Clients accompagnés" />
          <StatCard value="80+" label="Projets réalisés" />
        </div>
      </div>
    </section>
  );
}

