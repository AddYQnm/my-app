// components/CyberSecurityDiagram.tsx

export default function CyberSecurityDiagram() {
  const items = [
    {
      id: 1,
      title: "Infrastructure Sécurisée",
      subtitle: "Fondation technique robuste",
    },
    {
      id: 2,
      title: "Protection des Données",
      subtitle: "Protocoles et cryptage avancés",
    },
    {
      id: 3,
      title: "Formation des Équipes",
      subtitle: "Culture de vigilance",
    },
    {
      id: 4,
      title: "Surveillance Proactive",
      subtitle: "Détection précoce des menaces",
    },
  ];

  return (
    <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] mx-auto">
      {/* Cercle décoratif animé */}
      <div className="absolute inset-0 rounded-full border-[6px] border-indigo-500 opacity-20 animate-pulse" />

      {/* Centre */}
      <div className="absolute top-1/2 left-1/2 w-[110px] h-[110px] bg-white rounded-full flex items-center justify-center shadow-md transform -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="text-center text-black font-bold text-sm leading-tight">
          Cyber<br />Sécurité
        </span>
      </div>

      {/* Éléments autour */}
      {items.map((item, index) => {
        const angle = (360 / items.length) * index;
        const radius = 150;
        const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = radius * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <div
            key={item.id}
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              width: "160px",
            }}
          >
            {/* Point indicateur */}
            <div className="w-4 h-4 bg-indigo-500 rounded-full mb-2 shadow-md" />

            {/* Titre et sous-titre */}
            <div className="text-white text-sm font-bold">{item.title}</div>
            <div className="text-gray-300 text-xs mt-1">{item.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}
