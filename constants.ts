import { Dumbbell, Users, Medal, Clock, MapPin, Shield, Trophy } from 'lucide-react';
import { NavItem, Program, Coach, PricePlan, ScheduleItem, Feature, Result, Product, Partner } from './types';

export const REGISTRATION_LINK = "https://alpha-fight-club.assoconnect.com/collect/description/584398-x-inscriptions-a-l-afc-2025-2026";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Grappling', path: '/disciplines' },
  {
    label: "S'inscrire",
    path: '#',
    children: [
      { label: 'Horaires & Tarifs', path: '/pricing' },
      { label: 'Planning', path: '/schedule' },
      { label: 'Contact', path: '/contact' },
    ]
  },
  {
    label: 'Le Club',
    path: '#',
    children: [
      { label: "L'Équipe", path: '/team' },
      { label: "Combattants d'Élite", path: '/fighters' },
      { label: "Résultats Sportifs", path: '/results' },
      { label: "Nos Partenaires", path: '/partners' },
      { label: "Liens Utiles", path: '/links' },
    ]
  },
  {
    label: 'Médias',
    path: '#',
    children: [
      { label: 'Photos', path: '/photos' },
      { label: 'Vidéos', path: '/videos' },
    ]
  },
  { label: 'Boutique', path: '/shop' },
];

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Club Historique",
    description: "Créé en 2003, premier club de Pankration en France et le plus titré. Une référence à Saint-Ouen."
  },
  {
    icon: Users,
    title: "Mixte & Accessible",
    description: "Ouvert à tous (hommes et femmes) dès 15 ans (avec autorisation parentale). Débutants bienvenus."
  },
  {
    icon: Trophy,
    title: "Excellence Sportive",
    description: "Dirigé par Thomas Le Godec, Champion de France et sélectionné mondial. Club récompensé par la ville."
  },
  {
    icon: MapPin,
    title: "Saint-Ouen (93)",
    description: "Centre Sportif Pablo Neruda, à deux pas du Métro 13 (Mairie de Saint-Ouen)."
  }
];

export const PROGRAMS: Program[] = [
  {
    title: "Le Grappling",
    description: "Le Grappling est un système moderne de lutte et soumissions debout et au sol. C'est un combat hybride pratiqué en short et rashguard, intégrant des techniques de lutte, de judo et de combat au sol (JJB). Discipline gérée par la Fédération Française de Lutte et Disciplines Associées (FFLDA).",
    image: "/images/illustration-grappling.png"
  }
];

export const COACHES: Coach[] = [
  {
    name: "Thomas Le Godec",
    role: "Secrétaire & Professeur Principal",
    bio: "BMF 2°, Champion de France, Ceinture Noire de Grappling et JJB. Enseigne depuis 2008, plusieurs sélections mondiales à son actif.",
    image: "/images/coatch/thomas-coach.webp"
  },
  {
    name: "Sébastien Haddadj",
    role: "Assistant & Compétiteur",
    bio: "Récompensé par le prix de la ville de Saint-Ouen en 2015 pour ses performances sportives.",
    image: "/images/sebastien.jpg"
  },
  {
    name: "Théodore Aslamatzidis",
    role: "Président",
    bio: "Pilier du club depuis sa création en 2003, il veille au bon développement de l'association.",
    image: "/images/theodore.jpg"
  },
  {
    name: "Yannick Aslamatzidis",
    role: "Trésorière",
    bio: "Gestion administrative et financière du club.",
    image: "/images/yannick.jpg"
  }
];

export const PRICING: PricePlan[] = [
  {
    name: "Adhésion Audonien",
    price: "230,00 €",
    features: [
      "Réservé aux habitants de Saint-Ouen",
      "Accès intégral (Mercredi & Vendredi)",
      "Licence FFLDA incluse",
      "Assurance sportive incluse"
    ],
    recommended: true
  },
  {
    name: "Adhésion Autre",
    price: "245,00 €",
    features: [
      "Pour les habitants hors Saint-Ouen",
      "Accès intégral (Mercredi & Vendredi)",
      "Licence FFLDA incluse",
      "Assurance sportive incluse"
    ],
    recommended: false
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "Mercredi",
    classes: [
      { time: "20:00 - 22:00", name: "Grappling (Tous niveaux)", type: "nogi" }
    ]
  },
  {
    day: "Vendredi",
    classes: [
      { time: "20:00 - 22:00", name: "Grappling (Tous niveaux)", type: "nogi" }
    ]
  },
  {
    day: "Dimanche",
    classes: [
      { time: "10:00 - 13:00", name: "Compétition (Sur avis du professeur)", type: "open" }
    ]
  }
];

export const RESULTS: Result[] = [
  {
    event: "Historique du Club",
    date: "2003 - 2017",
    medals: [
      { gold: 50, athlete: "Club le plus titré", category: "Pankration" },
      { silver: 1, athlete: "Sami Dali", category: "Prix Ville St-Ouen 2015" },
      { bronze: 1, athlete: "Sébastien Haddadj", category: "Prix Ville St-Ouen 2015" }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    name: "Rashguard Alpha Compétition",
    price: "45€",
    image: "/images/shop/rashgard.png",
    category: "Tenue"
  },
  {
    name: "Short de Grappling",
    price: "35€",
    image: "/images/shop/short.png",
    category: "Tenue"
  }
];

export const PARTNERS: Partner[] = [
  {
    name: "Comité Français de Grappling",
    logo: "/images/partenaires/image.jpg",
    url: "https://www.grappling-france.com/"
  },
  {
    name: "Fédération Française de Lutte",
    logo: "https://placehold.co/150x80/EEE/31343C?text=FFLDA",
    url: "https://www.fflutte.com/"
  },
  {
    name: "Ville de Saint-Ouen",
    logo: "/images/partenaires/_wsb_226x165_ville-saintouen.jpg",
    url: "#"
  },
  {
    name: "Fight House",
    logo: "/images/partenaires/fight+house.png",
    url: "#"
  },
  {
    name: "Macif",
    logo: "/images/partenaires/logo_macif2006.gif",
    url: "#"
  },
  {
    name: "CIC",
    logo: "/images/partenaires/_wsb_184x133_542px-Cic_logo_svg.png",
    url: "#"
  }
];