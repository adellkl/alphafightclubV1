export interface Fighter {
  name: string;
  nickname: string;
  weight: string;
  belt: string;
  record: {
    wins: number;
    losses: number;
    draws: number;
  };
  achievements: string[];
  image: string;
  specialty: string;
  quote: string;
}

export const FIGHTERS_DATA: Fighter[] = [
  {
    name: "Anis Hafsi",
    nickname: "Le Titan",
    weight: "-84kg",
    belt: "Blue Belt",
    record: { wins: 15, losses: 3, draws: 1 },
    achievements: [
      "Débute le Grappling en septembre 2022",
      "Sélection EDF Junior en juin 2023",
      "Championnat du Monde (Pologne) en août 2023",
      "Champion de France Novice FFL le 16 décembre 2023",
      "Sélection EDF Seniors en janvier 2024",
      "Championnat d’Europe (Azerbaïdjan) en mai 2024",
      "Vice-champion de France Confirmé FFL en juin 2024",
      "Champion de l’Open de Paris IBJJF en novembre 2025"
    ],
    image: "/images/competitor/get.jpeg",
    specialty: "Contrôle au sol • Soumissions",
    quote: "La victoire appartient à celui qui refuse d'abandonner."
  },
  {
    name: "Mathis Londner",
    nickname: "",
    weight: "-77kg",
    belt: "Blue Belt",
    record: { wins: 6, losses: 0, draws: 0 },
    achievements: [
      "Vice champion de France U20"
    ],
    image: "/images/competitor/mathis.jpeg",
    specialty: "Soumissions",
    quote: "Toujours viser plus haut."
  },
  {
    name: "Marin Postolachi",
    nickname: "",
    weight: "-77kg",
    belt: "Purple Belt",
    record: { wins: 0, losses: 0, draws: 0 },
    achievements: [],
    image: "/images/competitor/Marin.jpg",
    specialty: "Grappling complet",
    quote: "Toujours avancer, jamais reculer."
  },
  {
    name: "Isabelle",
    nickname: "",
    weight: "-63kg",
    belt: "Purple Belt",
    record: { wins: 14, losses: 0, draws: 0 },
    achievements: [],
    image: "/images/competitor/Isabelle.jpeg",
    specialty: "Grappling",
    quote: "La constance forge la soumission."
  }
];
