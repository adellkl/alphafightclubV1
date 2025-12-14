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
    name: "Anis Afsi",
    nickname: "Le Titan",
    weight: "-84kg",
    belt: "Ceinture Marron Grappling",
    record: { wins: 15, losses: 3, draws: 1 },
    achievements: [
      "Prix Ville de Saint-Ouen 2015",
      "Médaille d'Or Paris Open 2016",
      "Champion Régional 2017",
      "Top 3 Championnat de France 2018"
    ],
    image: "/images/competitor/get.jpeg",
    specialty: "Contrôle au sol • Soumissions",
    quote: "La victoire appartient à celui qui refuse d'abandonner."
  },
  {
    name: "Younes Soliman",
    nickname: "La Machine",
    weight: "-77kg",
    belt: "Ceinture Violette Grappling",
    record: { wins: 12, losses: 4, draws: 0 },
    achievements: [
      "Médaille de Bronze Spirit Challenge 2017",
      "Finaliste Open de Paris 2018",
      "Champion IDF 2019",
      "Médaille d'Argent Gino Gi Challenge 2020"
    ],
    image: "/images/competitor/get (1).jpeg",
    specialty: "Explosivité • Takedowns",
    quote: "Chaque combat est une opportunité de progresser."
  },
  {
    name: "Samir Benali",
    nickname: "L'Éclair",
    weight: "-70kg",
    belt: "Ceinture Violette JJB",
    record: { wins: 18, losses: 2, draws: 1 },
    achievements: [
      "Médaille d'Or Paris Open 2019",
      "Champion de France Juniors 2018",
      "Top 5 Championnat Europe 2020",
      "Médaille d'Or Gino Gi Challenge 2021"
    ],
    image: "/images/competitor/get.jpg",
    specialty: "Vitesse • Transitions",
    quote: "La technique bat toujours la force brute."
  },
  {
    name: "Malik Rashid",
    nickname: "Le Prédateur",
    weight: "-92kg",
    belt: "Ceinture Noire Grappling",
    record: { wins: 22, losses: 5, draws: 2 },
    achievements: [
      "Vice-Champion de France 2019",
      "Médaille d'Or Open International 2020",
      "Champion IDF 3 années consécutives",
      "Sélectionné Équipe de France 2021"
    ],
    image: "/images/competitor/Première compétition de la saison, première compétition en violette… et première médaille. Je su.jpg",
    specialty: "Pression • Finitions",
    quote: "Dominer ou être dominé. Il n'y a pas de milieu."
  }
];
