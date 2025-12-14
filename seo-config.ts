interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

const baseUrl = 'https://alphafightclub.fr';

// Mots-clés de base pour toutes les pages
const baseKeywords = [
  // Sports de combat
  'grappling', 'club grappling', 'cours grappling', 'jiu jitsu brésilien', 'jjb', 'no-gi', 'nogi',
  'mma', 'club mma', 'cours mma', 'mixed martial arts', 'arts martiaux mixtes',
  'lutte', 'soumission', 'combat au sol', 'judo', 'bjj', 'brazilian jiu jitsu',
  'pankration', 'club combat', 'sport de combat', 'arts martiaux',

  // Localisations - Saint-Ouen et communes limitrophes
  'saint-ouen', 'saint ouen', 'saint-ouen-sur-seine', 'saint ouen 93', 'saint-ouen 93400',
  'clichy', 'clichy 92', 'saint-denis', 'saint denis', 'saint-denis 93',
  'paris 17', 'paris 18', 'batignolles', 'épinay-sur-seine', 'épinay', 'l\'île-saint-denis',
  'gennevilliers', 'villeneuve-la-garenne', 'asnières', 'asnières-sur-seine',

  // Île-de-France - départements
  'hauts-de-seine', 'hauts de seine', '92', 'seine-saint-denis', 'seine saint denis', '93',
  'paris', '75', 'val-de-marne', '94', 'yvelines', '78', 'essonne', '91',
  'val-d\'oise', '95', 'seine-et-marne', '77',

  // Île-de-France - villes principales
  'île-de-france', 'ile de france', 'région parisienne', 'grand paris',
  'nanterre', 'boulogne-billancourt', 'boulogne', 'neuilly-sur-seine', 'neuilly',
  'levallois-perret', 'levallois', 'courbevoie', 'puteaux', 'la défense',
  'colombes', 'rueil-malmaison', 'argenteuil', 'montreuil', 'créteil',
  'versailles', 'évry', 'cergy', 'pontoise',

  // Quartiers et transports
  'métro 13', 'ligne 13', 'métro saint-ouen', 'mairie de saint-ouen',
  'porte de clichy', 'porte de saint-ouen', 'garibaldi',

  // Mots-clés génériques
  'club sportif', 'association sportive', 'cours arts martiaux', 'entraînement combat',
  'self défense', 'self defense', 'fitness combat', 'cardio combat', 'renforcement musculaire',
  'club de sport', 'salle de sport', 'école grappling', 'école jjb',
  'compétition grappling', 'compétition jjb', 'championnat france',
  'débutant', 'cours débutant', 'adultes', 'ados', 'mixte',
  'fflda', 'fédération française de lutte',

  // Longue traîne et requêtes spécifiques
  'club grappling près de moi', 'cours mma près de moi', 'jjb paris nord',
  'où pratiquer grappling paris', 'meilleur club grappling île de france',
  'cours grappling débutant saint-ouen', 'apprendre grappling 93',
  'club mma accessible métro 13', 'sport combat saint-ouen',
  'cours soumission paris', 'lutte brésilienne paris', 'no-gi training paris',
  'grappling femmes saint-ouen', 'cours arts martiaux mixtes',
  'entraînement grappling adultes', 'club combat sportif 93',
  'pankration france', 'luta livre paris', 'submission wrestling',
  'cours combat au sol', 'jiu jitsu sans kimono', 'grappling competition training',
  'club champion grappling', 'entraînement mma saint-ouen',
  'cours self defense efficace', 'sport combat femmes paris'
].join(', ');

// Schema Organisation principal
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'Alpha Fight Club',
  alternateName: ['AFC Saint-Ouen', 'Alpha Fight Club Saint-Ouen'],
  description: 'Club de Grappling et arts martiaux à Saint-Ouen (93). Cours de Grappling No-Gi, JJB, lutte et soumissions. Premier club de Pankration en France.',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  image: `${baseUrl}/images/og-default.jpg`,
  telephone: '+33-X-XX-XX-XX-XX',
  email: 'contact@alphafightclub.fr',
  foundingDate: '2003',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Centre Sportif Pablo Neruda',
    addressLocality: 'Saint-Ouen-sur-Seine',
    postalCode: '93400',
    addressRegion: 'Île-de-France',
    addressCountry: 'FR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.9116,
    longitude: 2.3339
  },
  areaServed: [
    'Saint-Ouen-sur-Seine',
    'Paris',
    'Hauts-de-Seine',
    'Seine-Saint-Denis',
    'Île-de-France'
  ],
  sport: ['Grappling', 'Brazilian Jiu-Jitsu', 'MMA', 'Wrestling', 'Submission Grappling'],
  memberOf: {
    '@type': 'Organization',
    name: 'Fédération Française de Lutte et Disciplines Associées',
    alternateName: 'FFLDA'
  }
};

export const seoConfig: { [key: string]: SEOConfig } = {
  home: {
    title: 'Alpha Fight Club Saint-Ouen (93) | Club MMA, Grappling & JJB Île-de-France',
    description: 'Club de Grappling, MMA et Jiu-Jitsu Brésilien à Saint-Ouen (93). Cours No-Gi adultes et ados. Premier club de Pankration en France depuis 2003. Métro ligne 13. Île-de-France, Paris, Hauts-de-Seine, Seine-Saint-Denis.',
    keywords: `${baseKeywords}, club saint-ouen, club mma paris, club grappling paris, club jjb paris, cours mma ile de france, arts martiaux saint-ouen`,
    canonicalUrl: baseUrl,
    jsonLd: [
      organizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Qu\'est-ce que le Grappling ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Le Grappling est un système moderne de lutte et de soumissions pratiqué debout et au sol. C\'est un combat hybride sans kimono (No-Gi) qui intègre les projections de la Lutte et du Judo, ainsi que le travail au sol du Jiu-Jitsu Brésilien.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Où se trouve Alpha Fight Club ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Alpha Fight Club est situé au Centre Sportif Pablo Neruda, 17 Rue Salvador Allende à Saint-Ouen-sur-Seine (93400). Le club est facilement accessible en métro ligne 13, arrêt Mairie de Saint-Ouen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quels sont les tarifs d\'adhésion ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'L\'adhésion est de 230€ pour les Audoniens et 245€ pour les personnes extérieures à Saint-Ouen. Ce tarif inclut la licence FFLDA et l\'assurance sportive, ainsi que l\'accès à tous les cours (Mercredi et Vendredi).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Le club est-il ouvert aux débutants ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, Alpha Fight Club accueille les débutants à partir de 15 ans. Les cours sont adaptés à tous les niveaux et nos coachs diplômés accompagnent chaque pratiquant dans sa progression.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Quels sont les horaires des cours ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les cours de Grappling ont lieu le mercredi de 20h à 22h et le vendredi de 20h à 22h. Un entraînement compétition est également proposé le dimanche de 10h à 13h sur avis du professeur.'
            }
          }
        ]
      }
    ]
  },

  disciplines: {
    title: 'Grappling No-Gi | MMA & JJB Saint-Ouen 93 | Alpha Fight Club Paris',
    description: 'Découvrez le Grappling No-Gi : lutte, soumissions, combat au sol. Alternative au MMA et JJB traditionnel. Cours à Saint-Ouen (93), accessible depuis Paris, Clichy, Saint-Denis. Débutants bienvenus.',
    keywords: `${baseKeywords}, qu'est-ce que le grappling, grappling no-gi, technique grappling, cours grappling paris, grappling vs jjb, grappling vs mma, combat au sol paris`,
    canonicalUrl: `${baseUrl}/#/disciplines`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Cours de Grappling No-Gi',
      description: 'Formation complète en Grappling No-Gi : projections, lutte, soumissions et combat au sol',
      provider: {
        '@type': 'SportsOrganization',
        name: 'Alpha Fight Club',
        sameAs: baseUrl
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        location: {
          '@type': 'Place',
          name: 'Centre Sportif Pablo Neruda',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Saint-Ouen-sur-Seine',
            postalCode: '93400',
            addressCountry: 'FR'
          }
        }
      }
    }
  },

  pricing: {
    title: 'Tarifs 2025-2026 | Club Grappling MMA Saint-Ouen 93 | Île-de-France',
    description: 'Tarifs adhésion Alpha Fight Club Saint-Ouen : 230€ Audoniens, 245€ autres. Licence FFLDA incluse. Cours de Grappling, MMA, JJB. Accessible Paris, 92, 93, Île-de-France.',
    keywords: `${baseKeywords}, tarif club grappling, prix cours mma, adhésion club combat, tarif jjb paris, prix club sportif saint-ouen, licence fflda`,
    canonicalUrl: `${baseUrl}/#/pricing`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Adhésion Alpha Fight Club',
      description: 'Adhésion annuelle avec licence FFLDA et assurance',
      price: '230.00',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-09-01',
      category: 'Sports Membership'
    }
  },

  schedule: {
    title: 'Planning Cours Grappling MMA | Saint-Ouen 93 | Horaires Île-de-France',
    description: 'Horaires cours Grappling à Saint-Ouen : Mercredi & Vendredi 20h-22h, Dimanche 10h-13h (compétition). Métro ligne 13. Accessible Paris, Clichy, Saint-Denis, Hauts-de-Seine.',
    keywords: `${baseKeywords}, horaire cours grappling, planning mma paris, horaire jjb saint-ouen, cours soir grappling, entraînement mma ile de france`,
    canonicalUrl: `${baseUrl}/#/schedule`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Schedule',
      name: 'Horaires des cours de Grappling',
      scheduleTimezone: 'Europe/Paris',
      byDay: ['Wednesday', 'Friday', 'Sunday']
    }
  },

  team: {
    title: 'Équipe & Coachs | Alpha Fight Club Saint-Ouen | Professeurs MMA Grappling 93',
    description: 'Thomas Le Godec, Champion de France, Ceinture Noire Grappling & JJB. Équipe de coachs expérimentés à Saint-Ouen (93). Formation MMA, Grappling, JJB en Île-de-France.',
    keywords: `${baseKeywords}, professeur grappling paris, coach mma saint-ouen, entraîneur jjb 93, ceinture noire grappling, champion france grappling, coach sportif saint-ouen`,
    canonicalUrl: `${baseUrl}/#/team`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Thomas Le Godec',
      jobTitle: 'Professeur Principal & Secrétaire',
      worksFor: {
        '@type': 'SportsOrganization',
        name: 'Alpha Fight Club'
      },
      description: 'Champion de France de Grappling, Ceinture Noire de Grappling et JJB',
      knowsAbout: ['Grappling', 'Brazilian Jiu-Jitsu', 'MMA', 'Wrestling']
    }
  },

  results: {
    title: 'Résultats & Palmarès | Alpha Fight Club | Champions Grappling MMA 93',
    description: 'Plus de 50 titres en Pankration. Club le plus titré de France depuis 2003. Championnat de France Grappling, compétitions MMA et JJB. Saint-Ouen, Île-de-France.',
    keywords: `${baseKeywords}, palmarès grappling, résultats compétition mma, champion france pankration, victoire jjb, médaille grappling, performance sportive saint-ouen`,
    canonicalUrl: `${baseUrl}/#/results`
  },

  contact: {
    title: 'Contact | Alpha Fight Club Saint-Ouen 93 | Rejoindre Club MMA Grappling Paris',
    description: 'Contactez Alpha Fight Club Saint-Ouen. Centre Sportif Pablo Neruda, Métro ligne 13 Mairie de Saint-Ouen. Cours de Grappling, MMA, JJB en Île-de-France (93, 92, Paris).',
    keywords: `${baseKeywords}, contact club grappling, inscription mma saint-ouen, rejoindre club jjb, essai gratuit grappling, cours découverte mma paris`,
    canonicalUrl: `${baseUrl}/#/contact`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Alpha Fight Club',
      description: 'Contactez-nous pour rejoindre le club ou obtenir plus d\'informations'
    }
  },

  shop: {
    title: 'Boutique | Rashguard & Équipement Grappling MMA | Alpha Fight Club 93',
    description: 'Rashguard Alpha Fight Club et équipement Grappling No-Gi. Tenue officielle club MMA Saint-Ouen. Short combat, rashguard compétition. Livraison Île-de-France.',
    keywords: `${baseKeywords}, rashguard grappling, équipement mma, tenue no-gi, short jjb, equipement combat, vetement grappling, materiel mma paris`,
    canonicalUrl: `${baseUrl}/#/shop`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Rashguard Alpha Compétition',
      description: 'Rashguard officiel Alpha Fight Club pour Grappling et MMA',
      offers: {
        '@type': 'Offer',
        price: '45.00',
        priceCurrency: 'EUR'
      }
    }
  },

  partners: {
    title: 'Partenaires | Alpha Fight Club Saint-Ouen | Sponsors Grappling MMA 93',
    description: 'Nos partenaires : Ville de Saint-Ouen, FFLDA, Comité Français de Grappling, Fight House. Soutiens du club MMA et Grappling en Île-de-France.',
    keywords: `${baseKeywords}, partenaires club sportif, sponsors mma, fflda, comité grappling france, ville saint-ouen sport`,
    canonicalUrl: `${baseUrl}/#/partners`
  },

  photos: {
    title: 'Photos | Alpha Fight Club Saint-Ouen | Galerie Grappling MMA JJB 93',
    description: 'Photos des entraînements, compétitions et vie du club Alpha Fight Club. Grappling, MMA, JJB à Saint-Ouen (93). Événements sportifs Île-de-France.',
    keywords: `${baseKeywords}, photos grappling, images mma, galerie jjb, competition photos, entrainement club saint-ouen`,
    canonicalUrl: `${baseUrl}/#/photos`
  },

  videos: {
    title: 'Vidéos | Alpha Fight Club Saint-Ouen | Techniques Grappling MMA 93',
    description: 'Vidéos techniques Grappling, combats MMA, entraînements JJB. Alpha Fight Club Saint-Ouen. Tutoriels arts martiaux, highlights compétitions Île-de-France.',
    keywords: `${baseKeywords}, videos grappling, tutoriel mma, technique jjb video, combat grappling, démonstration arts martiaux, cours video grappling`,
    canonicalUrl: `${baseUrl}/#/videos`
  },

  links: {
    title: 'Liens Utiles | Alpha Fight Club | Ressources Grappling MMA JJB France',
    description: 'Liens utiles : FFLDA, Comité Français de Grappling, ressources MMA et JJB. Informations sports de combat en Île-de-France et France.',
    keywords: `${baseKeywords}, liens grappling, ressources mma, sites jjb, federation lutte, informations sports combat`,
    canonicalUrl: `${baseUrl}/#/links`
  },

  fighters: {
    title: 'Combattants d\'Élite | Alpha Fight Club Saint-Ouen | Champions Grappling MMA 93',
    description: 'Nos combattants d\'élite : champions de Grappling, JJB et No-Gi. Palmarès, résultats et titres des compétiteurs Alpha Fight Club Saint-Ouen (93). Champions Île-de-France.',
    keywords: `${baseKeywords}, combattants grappling, champions jjb, fighters mma, competiteurs grappling, athletes combat, elite fighters saint-ouen, champions grappling paris, medaille jjb, champion france grappling`,
    canonicalUrl: `${baseUrl}/#/fighters`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SportsTeam',
      name: 'Équipe Compétition Alpha Fight Club',
      sport: 'Grappling',
      description: 'Équipe de combattants d\'élite spécialisés en Grappling, JJB et No-Gi',
      memberOf: {
        '@type': 'SportsOrganization',
        name: 'Alpha Fight Club'
      }
    }
  },

  legal: {
    title: 'Mentions Légales | Alpha Fight Club Saint-Ouen 93',
    description: 'Mentions légales du site Alpha Fight Club Saint-Ouen. Informations juridiques, éditeur, hébergement, propriété intellectuelle.',
    keywords: `alpha fight club, mentions légales, informations juridiques, saint-ouen 93`,
    canonicalUrl: `${baseUrl}/#/legal`
  },

  privacy: {
    title: 'Politique de Confidentialité | Alpha Fight Club Saint-Ouen 93',
    description: 'Politique de confidentialité et protection des données personnelles Alpha Fight Club. RGPD, cookies, droits utilisateurs.',
    keywords: `alpha fight club, politique confidentialité, rgpd, protection données, vie privée`,
    canonicalUrl: `${baseUrl}/#/privacy`
  }
};

export default seoConfig;
