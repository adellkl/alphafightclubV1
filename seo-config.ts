interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  jsonLd?: object | object[];
}

const baseUrl = 'https://alphafightclub.com';
const alternateUrl = 'https://alphafightclub.net';

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

  // Île-de-France - TOUTES les villes (référencement local complet)
  'île-de-france', 'ile de france', 'région parisienne', 'grand paris',
  // Paris (75) - arrondissements
  'paris 1', 'paris 2', 'paris 3', 'paris 4', 'paris 5', 'paris 6', 'paris 7', 'paris 8', 'paris 9', 'paris 10',
  'paris 11', 'paris 12', 'paris 13', 'paris 14', 'paris 15', 'paris 16', 'paris 17', 'paris 18', 'paris 19', 'paris 20',
  'paris nord', 'paris ouest', 'paris est', 'paris sud', 'paris centre',
  // Seine-Saint-Denis (93)
  'aubervilliers', 'aubervilliers 93', 'bobigny', 'bobigny 93', 'drancy', 'drancy 93', 'pantin', 'pantin 93',
  'noisy-le-grand', 'noisy le grand', 'aulnay-sous-bois', 'aulnay sous bois', 'aulnay 93',
  'bondy', 'bondy 93', 'la courneuve', 'la courneuve 93', 'stains', 'stains 93',
  'romainville', 'les lilas', 'bagnolet', 'bagnolet 93', 'noisy-le-sec', 'noisy le sec',
  'rosny-sous-bois', 'rosny sous bois', 'villepinte', 'le blanc-mesnil', 'blanc mesnil',
  'sevran', 'livry-gargan', 'villemomble', 'montreuil', 'montreuil 93',
  // Hauts-de-Seine (92)
  'nanterre', 'nanterre 92', 'boulogne-billancourt', 'boulogne billancourt', 'boulogne 92',
  'colombes', 'colombes 92', 'courbevoie', 'courbevoie 92', 'levallois-perret', 'levallois perret', 'levallois 92',
  'neuilly-sur-seine', 'neuilly sur seine', 'neuilly 92', 'rueil-malmaison', 'rueil malmaison', 'rueil 92',
  'antony', 'antony 92', 'issy-les-moulineaux', 'issy les moulineaux', 'issy 92',
  'clamart', 'suresnes', 'puteaux', 'puteaux 92', 'vanves', 'malakoff',
  'châtenay-malabry', 'meudon', 'bagneux', 'sceaux', 'asnières-sur-seine', 'asnières 92',
  'bois-colombes', 'bois colombes', 'la garenne-colombes', 'garenne colombes',
  // Val-de-Marne (94)
  'vitry-sur-seine', 'vitry sur seine', 'vitry 94', 'saint-maur-des-fossés', 'saint maur',
  'champigny-sur-marne', 'champigny 94', 'ivry-sur-seine', 'ivry sur seine', 'ivry 94',
  'villejuif', 'villejuif 94', 'vincennes', 'vincennes 94', 'alfortville', 'alfortville 94',
  'charenton-le-pont', 'charenton', 'créteil', 'créteil 94', 'maisons-alfort', 'maisons alfort',
  'fontenay-sous-bois', 'fontenay sous bois', 'nogent-sur-marne', 'nogent sur marne',
  // Val-d'Oise (95)
  'argenteuil', 'argenteuil 95', 'sarcelles', 'sarcelles 95', 'cergy', 'cergy 95',
  'garges-lès-gonesse', 'garges', 'franconville', 'pontoise', 'pontoise 95',
  'bezons', 'bezons 95', 'ermont', 'villiers-le-bel', 'gonesse', 'goussainville',
  'taverny', 'sannois', 'montigny-lès-cormeilles', 'herblay-sur-seine', 'herblay',
  // Yvelines (78)
  'versailles', 'versailles 78', 'sartrouville', 'sartrouville 78', 'mantes-la-jolie', 'mantes 78',
  'saint-germain-en-laye', 'saint germain en laye', 'poissy', 'poissy 78',
  'conflans-sainte-honorine', 'conflans', 'montigny-le-bretonneux', 'saint-quentin-en-yvelines',
  'les mureaux', 'trappes', 'plaisir', 'maisons-laffitte', 'chatou', 'le chesnay',
  'velizy-villacoublay', 'rambouillet', 'guyancourt',
  // Essonne (91)
  'évry', 'evry', 'évry-courcouronnes', 'evry courcouronnes', 'corbeil-essonnes', 'corbeil',
  'massy', 'massy 91', 'savigny-sur-orge', 'savigny 91',
  'palaiseau', 'palaiseau 91', 'viry-châtillon', 'yerres', 'ris-orangis', 'ris orangis',
  'brunoy', 'draveil', 'longjumeau', 'grigny', 'sainte-geneviève-des-bois', 'sainte geneviève des bois',
  // Seine-et-Marne (77)
  'meaux', 'meaux 77', 'melun', 'melun 77', 'pontault-combault', 'villeparisis',
  'chelles', 'chelles 77', 'lagny-sur-marne', 'lagny', 'fontainebleau', 'combs-la-ville',

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

  // Cours enfants - Grappling, Jiu-Jitsu, Luta Livre (mots-clés stratégiques SEO)
  'cours enfants', 'cours enfant', 'grappling enfants', 'jjb enfants', 'jiu jitsu enfants',
  'cours enfant grappling', 'cours enfant jiu jitsu', 'cours enfant luta livre',
  'grappling enfant saint-ouen', 'jiu jitsu enfant saint-ouen', 'luta livre enfant saint-ouen',
  'cours grappling enfant paris', 'cours jjb enfant paris', 'cours luta livre enfant paris',
  'grappling enfants saint-ouen', 'jiu jitsu enfants saint-ouen', 'luta livre enfants saint-ouen',
  'grappling enfants paris', 'jiu jitsu enfants paris', 'luta livre enfants paris',
  'grappling enfants 93', 'jiu jitsu enfants 93', 'luta livre enfants 93',
  'cours grappling enfants île de france', 'cours jjb enfants île de france', 'cours luta livre enfants',
  'meilleur club grappling enfant', 'meilleur club jiu jitsu enfant', 'club grappling enfant saint-ouen',
  'club jiu jitsu enfant saint-ouen', 'club luta livre enfant', 'école grappling enfant',
  'école jiu jitsu enfant', 'école luta livre enfant', 'sport combat enfants',
  'arts martiaux enfants', 'cours enfants saint-ouen', 'activité sportive enfants',
  'club enfants', 'école jjb enfants', 'école grappling enfants', 'école luta livre enfants',
  'inscrire mon enfant grappling', 'inscrire mon enfant jjb', 'inscrire mon enfant luta livre',
  'cours jjb jeunes', 'grappling pour enfants', 'jiu jitsu brésilien enfants',
  'luta livre pour enfants', 'jiu jitsu pour enfants', 'grappling pour enfants saint-ouen',
  'no-gi enfants', 'nogi enfants', 'sport de combat 6 ans', 'sport de combat 7 ans',
  'sport de combat 8 ans', 'sport de combat 9 ans', 'sport de combat 10 ans',
  'arts martiaux 6-14 ans', 'grappling 6 ans', 'jiu jitsu 6 ans', 'luta livre 6 ans',
  'cours jjb enfants paris', 'grappling enfants 93', 'jjb enfants saint-ouen',
  'luta livre enfants 93', 'activité enfant saint-ouen', 'sport enfant 93',
  'cours lutte enfants', 'lutte libre enfants', 'submission wrestling enfants',
  'self défense enfants', 'confiance en soi enfants', 'discipline enfants',
  'cours martial arts enfants', 'ecole combat enfants', 'stage grappling enfants',
  'stage jiu jitsu enfants', 'stage luta livre enfants', 'baby grappling',
  'grappling 6-9 ans', 'grappling 10-14 ans', 'jjb 6-9 ans', 'jjb 10-14 ans',
  'club grappling enfant 93', 'club jjb enfant 93', 'cours combat sol enfants',

  // Longue traîne - requêtes locales Île-de-France (toutes villes)
  'club grappling près de moi', 'cours grappling près de moi', 'jjb près de moi',
  'club grappling paris', 'club grappling saint-denis', 'club grappling clichy',
  'club grappling aubervilliers', 'club grappling pantin', 'club grappling bobigny',
  'club grappling montreuil', 'club grappling nanterre', 'club grappling colombes',
  'club grappling boulogne', 'club grappling levallois', 'club grappling courbevoie',
  'club grappling argenteuil', 'club grappling vitry', 'club grappling créteil',
  'club grappling évry', 'club grappling versailles', 'club grappling massy',
  'cours grappling paris', 'cours grappling saint-denis', 'cours grappling clichy',
  'cours grappling 93', 'cours grappling 92', 'cours grappling 94',
  'meilleur club grappling île de france', 'meilleur club grappling paris',
  'meilleur club jjb île de france', 'club grappling accessible métro',
  'jjb paris nord', 'grappling paris nord', 'où pratiquer grappling paris',
  'où pratiquer grappling saint-denis', 'où pratiquer jiu jitsu 93',
  'cours grappling débutant saint-ouen', 'apprendre grappling 93',
  'club mma accessible métro 13', 'sport combat saint-ouen', 'sport combat 93',
  'cours soumission paris', 'lutte brésilienne paris', 'no-gi training paris',
  'grappling femmes saint-ouen', 'cours arts martiaux mixtes',
  'entraînement grappling adultes', 'club combat sportif 93',
  'pankration france', 'luta livre paris', 'luta livre saint-ouen', 'luta livre enfants', 'submission wrestling',
  'cours combat au sol', 'jiu jitsu sans kimono', 'grappling competition training',
  'club champion grappling', 'entraînement mma saint-ouen',
  'cours self defense efficace', 'sport combat femmes paris',
  'grappling île de france', 'jjb île de france', 'club mma île de france'
].join(', ');

// Image OG par défaut
const defaultOgImage = `${baseUrl}/images/illustration-grappling.png`;

// Schema Organisation principal
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['SportsOrganization', 'LocalBusiness'],
  name: 'Alpha Fight Club',
  alternateName: ['AFC Saint-Ouen', 'Alpha Fight Club Saint-Ouen'],
  description: 'Alpha Fight Club Saint-Ouen : club de Grappling, Jiu-Jitsu et Luta Livre #1 en Île-de-France. Accessible depuis Paris, 92, 93, 94, 95, 77, 78, 91. Meilleur club de sport de combat pour toute la région parisienne.',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  image: defaultOgImage,
  telephone: '+33-X-XX-XX-XX-XX',
  email: 'contact@alphafightclub.fr',
  foundingDate: '2003',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Rue Salvador Allende, Centre Sportif Pablo Neruda',
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
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Monday',
      opens: '17:00',
      closes: '19:00',
      description: 'Cours Grappling, Jiu-Jitsu et Luta Livre Enfants (6-14 ans)'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Wednesday',
      opens: '20:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '20:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '13:00'
    }
  ],
  priceRange: '€€',
  areaServed: [
    'Saint-Ouen-sur-Seine',
    'Paris',
    'Hauts-de-Seine',
    'Seine-Saint-Denis',
    'Val-de-Marne',
    'Val-d\'Oise',
    'Yvelines',
    'Essonne',
    'Seine-et-Marne',
    'Île-de-France',
    'Aubervilliers', 'Saint-Denis', 'Clichy', 'Pantin', 'Bobigny', 'Montreuil',
    'Nanterre', 'Boulogne-Billancourt', 'Colombes', 'Levallois-Perret', 'Argenteuil',
    'Créteil', 'Vitry-sur-Seine', 'Versailles', 'Évry', 'Meaux', 'Melun', 'Cergy'
  ],
  sport: ['Grappling', 'Brazilian Jiu-Jitsu', 'Jiu-Jitsu', 'Luta Livre', 'MMA', 'Wrestling', 'Submission Grappling', 'No-Gi'],
  memberOf: {
    '@type': 'Organization',
    name: 'Fédération Française de Lutte et Disciplines Associées',
    alternateName: 'FFLDA',
    url: 'https://www.fflutte.com/'
  },
  sameAs: [
    'https://www.facebook.com/alphafightclub',
    'https://www.instagram.com/alphafightclub'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1'
  }
};

// Helper function pour créer BreadcrumbList
const createBreadcrumb = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const seoConfig: { [key: string]: SEOConfig } = {
  home: {
    title: 'AFC | #1 Club Grappling Île-de-France | Saint-Ouen 93 | Paris 92 94 95',
    description: 'Alpha Fight Club Saint-Ouen : club de Grappling #1 en Île-de-France. Cours enfants et adultes. Accessible Paris, 92, 93, 94, 95, 77, 78, 91. Meilleur club Jiu-Jitsu et Luta Livre pour toute la région. Essai gratuit.',
    keywords: `${baseKeywords}, club grappling île de france, club grappling paris, club grappling 93, club grappling 92, club grappling 94, club grappling saint-denis, club grappling clichy, club grappling nanterre, club grappling montreuil, club grappling argenteuil, club grappling créteil, club grappling versailles, meilleur club grappling paris, meilleur club jjb île de france`,
    canonicalUrl: baseUrl,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: [
      organizationSchema,
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl }
      ]),
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
              'text': 'Les cours de Grappling adultes ont lieu le mercredi de 20h à 22h et le vendredi de 20h à 22h. Les cours pour enfants (6-14 ans) sont proposés le lundi : 17h-18h pour les 6-9 ans et 18h-19h pour les 10-14 ans. Un entraînement compétition est également proposé le dimanche de 10h à 13h sur avis du professeur.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Proposez-vous des cours pour enfants ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, Alpha Fight Club propose des cours de JJB No-Gi spécialement adaptés aux enfants tous les lundis. Deux créneaux sont disponibles : 17h-18h pour les 6-9 ans et 18h-19h pour les 10-14 ans. Les cours sont encadrés par Mathis et Anis, avec un enseignement ludique et adapté à chaque tranche d\'âge.'
            }
          },
          {
            '@type': 'Question',
            'name': 'À partir de quel âge mon enfant peut-il pratiquer le Grappling ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Les enfants peuvent commencer le JJB No-Gi dès 6 ans à Alpha Fight Club. Nous proposons deux groupes : 6-9 ans et 10-14 ans, avec des cours adaptés au développement physique et mental de chaque tranche d\'âge. Un cours d\'essai gratuit est disponible pour tous les enfants.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Où trouver des cours de Jiu-Jitsu pour enfants à Saint-Ouen ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Alpha Fight Club propose des cours de Jiu-Jitsu Brésilien No-Gi pour enfants à Saint-Ouen (93) au Centre Sportif Pablo Neruda. Les cours ont lieu tous les lundis : 17h-18h pour les 6-9 ans et 18h-19h pour les 10-14 ans. Métro ligne 13, Mairie de Saint-Ouen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Où pratiquer le Grappling pour enfants en Île-de-France ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Alpha Fight Club à Saint-Ouen (93) est l\'un des meilleurs clubs de Grappling pour enfants en Île-de-France. Nos cours enfants intègrent le Grappling, le Jiu-Jitsu Brésilien et le Luta Livre dans un enseignement ludique adapté aux 6-14 ans. Accessible depuis Paris, Clichy et Saint-Denis.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Proposez-vous des cours de Luta Livre pour enfants ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, nos cours enfants à Alpha Fight Club intègrent les techniques de Luta Livre, Grappling et Jiu-Jitsu Brésilien No-Gi. Les enfants découvrent la lutte brésilienne sans kimono dans un cadre sécurisé et pédagogique. Cours le lundi 17h-19h pour les 6-14 ans à Saint-Ouen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Alpha Fight Club dessert-il toute l\'Île-de-France ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Oui, Alpha Fight Club à Saint-Ouen (93) accueille les pratiquants de toute l\'Île-de-France : Paris, Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d\'Oise (95), Yvelines (78), Essonne (91), Seine-et-Marne (77). Accessible en métro ligne 13 (Mairie de Saint-Ouen) depuis Paris, Clichy, Saint-Denis, Aubervilliers, Pantin et toute la région.'
            }
          }
        ]
      }
    ]
  },

  disciplines: {
    title: 'AFC | Grappling, Jiu-Jitsu & Luta Livre | #1 Île-de-France | Saint-Ouen 93',
    description: 'Grappling, Jiu-Jitsu et Luta Livre à Saint-Ouen : club #1 en Île-de-France. Cours enfants et adultes. Accessible Paris, 92, 93, 94, 95. Lutte, soumissions, combat au sol No-Gi. Essai gratuit.',
    keywords: `${baseKeywords}, club grappling île de france, cours grappling paris, cours grappling 93, cours grappling saint-denis, cours grappling clichy, grappling no-gi, technique grappling, jjb enfants paris, cours enfant grappling, luta livre 93`,
    canonicalUrl: `${baseUrl}/disciplines`,
    ogImage: defaultOgImage,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Grappling', url: `${baseUrl}/disciplines` }
      ]),
      {
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
    ]
  },

  pricing: {
    title: 'AFC | Tarifs Cours Enfants Grappling, Jiu-Jitsu & Luta Livre | Saint-Ouen 93',
    description: 'Tarifs cours enfants Grappling, Jiu-Jitsu et Luta Livre à Saint-Ouen. 230€ Audoniens, 245€ autres. Licence FFLDA incluse. Essai gratuit enfants et adultes. Paris, 93.',
    keywords: `${baseKeywords}, tarif cours enfant grappling, prix cours jiu jitsu enfant saint-ouen, tarif cours luta livre enfant, inscription enfant grappling 93, prix jjb enfants paris, adhésion cours enfant sport combat saint-ouen`,
    canonicalUrl: `${baseUrl}/pricing`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Tarifs', url: `${baseUrl}/pricing` }
      ]),
      {
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
    ]
  },

  schedule: {
    title: 'AFC | Horaires | Club Grappling Île-de-France | Saint-Ouen 93',
    description: 'Planning Alpha Fight Club : cours enfants Lundi 17h-19h, adultes Mer & Ven 20h-22h. Club Grappling #1 Île-de-France. Accessible Paris, 92, 93, 94, 95. Métro 13 Mairie Saint-Ouen.',
    keywords: `${baseKeywords}, horaire club grappling paris, planning grappling 93, cours grappling saint-denis, horaire jjb île de france, cours enfants lundi saint-ouen, planning sport combat 92, horaire grappling 94`,
    canonicalUrl: `${baseUrl}/schedule`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Planning', url: `${baseUrl}/schedule` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Schedule',
        name: 'Horaires des cours de Grappling',
        scheduleTimezone: 'Europe/Paris',
        byDay: ['Monday', 'Wednesday', 'Friday', 'Sunday']
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: 'Cours Grappling, Jiu-Jitsu et Luta Livre pour Enfants',
        description: 'Cours de Grappling, Jiu-Jitsu Brésilien No-Gi et Luta Livre pour enfants de 6 à 14 ans à Saint-Ouen. Apprentissage ludique du combat au sol, projections et soumissions adapté à chaque tranche d\'âge.',
        provider: {
          '@type': 'SportsOrganization',
          name: 'Alpha Fight Club',
          sameAs: baseUrl
        },
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: 'student',
          audienceType: 'Children',
          suggestedMinAge: 6,
          suggestedMaxAge: 14
        },
        hasCourseInstance: [
          {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            courseSchedule: {
              '@type': 'Schedule',
              byDay: 'Monday',
              startTime: '17:00',
              endTime: '18:00',
              scheduleTimezone: 'Europe/Paris'
            },
            instructor: {
              '@type': 'Person',
              name: 'Mathis & Anis'
            },
            location: {
              '@type': 'Place',
              name: 'Centre Sportif Pablo Neruda',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '17 Rue Salvador Allende',
                addressLocality: 'Saint-Ouen-sur-Seine',
                postalCode: '93400',
                addressCountry: 'FR'
              }
            }
          },
          {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            courseSchedule: {
              '@type': 'Schedule',
              byDay: 'Monday',
              startTime: '18:00',
              endTime: '19:00',
              scheduleTimezone: 'Europe/Paris'
            },
            instructor: {
              '@type': 'Person',
              name: 'Mathis & Anis'
            },
            location: {
              '@type': 'Place',
              name: 'Centre Sportif Pablo Neruda',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '17 Rue Salvador Allende',
                addressLocality: 'Saint-Ouen-sur-Seine',
                postalCode: '93400',
                addressCountry: 'FR'
              }
            }
          }
        ],
        offers: {
          '@type': 'Offer',
          category: 'Cours d\'essai gratuit',
          price: '0',
          priceCurrency: 'EUR'
        }
      }
    ]
  },

  team: {
    title: 'AFC | Équipe | Alpha Fight Club Saint-Ouen 93',
    description: 'Thomas Le Godec, Champion de France, Ceinture Noire Grappling & JJB. Équipe de coachs expérimentés à Saint-Ouen (93). Formation MMA, Grappling, JJB en Île-de-France.',
    keywords: `${baseKeywords}, professeur grappling paris, coach mma saint-ouen, entraîneur jjb 93, ceinture noire grappling, champion france grappling, coach sportif saint-ouen`,
    canonicalUrl: `${baseUrl}/team`,
    ogImage: '/images/coatch/thomas-coach.webp',
    ogType: 'profile',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Équipe', url: `${baseUrl}/team` }
      ]),
      {
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
    ]
  },

  results: {
    title: 'AFC | Résultats | Alpha Fight Club Saint-Ouen 93',
    description: 'Plus de 50 titres en Pankration. Club le plus titré de France depuis 2003. Championnat de France Grappling, compétitions MMA et JJB. Saint-Ouen, Île-de-France.',
    keywords: `${baseKeywords}, palmarès grappling, résultats compétition mma, champion france pankration, victoire jjb, médaille grappling, performance sportive saint-ouen`,
    canonicalUrl: `${baseUrl}/results`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: createBreadcrumb([
      { name: 'Accueil', url: baseUrl },
      { name: 'Résultats', url: `${baseUrl}/results` }
    ])
  },

  contact: {
    title: 'AFC | Contact | Club Grappling Île-de-France | Saint-Ouen 93',
    description: 'Contactez Alpha Fight Club : club Grappling #1 en Île-de-France. Inscription cours enfants et adultes. Saint-Ouen (93), accessible Paris, 92, 94, 95. Essai gratuit.',
    keywords: `${baseKeywords}, contact club grappling paris, inscription club grappling 93, contact jjb saint-denis, inscrire club grappling île de france, essai gratuit grappling 92, contact sport combat 94`,
    canonicalUrl: `${baseUrl}/contact`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Contact', url: `${baseUrl}/contact` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Alpha Fight Club',
        description: 'Contactez-nous pour rejoindre le club ou obtenir plus d\'informations'
      }
    ]
  },

  shop: {
    title: 'AFC | Boutique | Alpha Fight Club Saint-Ouen 93',
    description: 'Rashguard Alpha Fight Club et équipement Grappling No-Gi. Tenue officielle club MMA Saint-Ouen. Short combat, rashguard compétition. Livraison Île-de-France.',
    keywords: `${baseKeywords}, rashguard grappling, équipement mma, tenue no-gi, short jjb, equipement combat, vetement grappling, materiel mma paris`,
    canonicalUrl: `${baseUrl}/shop`,
    ogImage: '/images/shop/rashgard.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Boutique', url: `${baseUrl}/shop` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Rashguard Alpha Compétition',
        description: 'Rashguard officiel Alpha Fight Club pour Grappling et MMA',
        image: `${baseUrl}/images/shop/rashgard.png`,
        offers: {
          '@type': 'Offer',
          price: '45.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock'
        }
      }
    ]
  },

  partners: {
    title: 'AFC | Partenaires | Alpha Fight Club Saint-Ouen 93',
    description: 'Nos partenaires : Ville de Saint-Ouen, FFLDA, Comité Français de Grappling, Fight House. Soutiens du club MMA et Grappling en Île-de-France.',
    keywords: `${baseKeywords}, partenaires club sportif, sponsors mma, fflda, comité grappling france, ville saint-ouen sport`,
    canonicalUrl: `${baseUrl}/partners`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Partenaires', url: `${baseUrl}/partners` }
      ])
    ]
  },

  photos: {
    title: 'AFC | Photos | Alpha Fight Club Saint-Ouen 93',
    description: 'Photos des entraînements, compétitions et vie du club Alpha Fight Club. Grappling, MMA, JJB à Saint-Ouen (93). Événements sportifs Île-de-France.',
    keywords: `${baseKeywords}, photos grappling, images mma, galerie jjb, competition photos, entrainement club saint-ouen`,
    canonicalUrl: `${baseUrl}/photos`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Photos', url: `${baseUrl}/photos` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Galerie Photos Alpha Fight Club',
        description: 'Photos des entraînements et compétitions de Grappling, MMA et JJB'
      }
    ]
  },

  videos: {
    title: 'AFC | Vidéos | Alpha Fight Club Saint-Ouen 93',
    description: 'Vidéos techniques Grappling, combats MMA, entraînements JJB. Alpha Fight Club Saint-Ouen. Tutoriels arts martiaux, highlights compétitions Île-de-France.',
    keywords: `${baseKeywords}, videos grappling, tutoriel mma, technique jjb video, combat grappling, démonstration arts martiaux, cours video grappling`,
    canonicalUrl: `${baseUrl}/videos`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'player',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Vidéos', url: `${baseUrl}/videos` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Vidéos Alpha Fight Club',
        description: 'Vidéos techniques et combats de Grappling, MMA et JJB',
        publisher: {
          '@type': 'Organization',
          name: 'Alpha Fight Club'
        }
      }
    ]
  },

  links: {
    title: 'AFC | Liens | Alpha Fight Club Saint-Ouen 93',
    description: 'Liens utiles : FFLDA, Comité Français de Grappling, ressources MMA et JJB. Informations sports de combat en Île-de-France et France.',
    keywords: `${baseKeywords}, liens grappling, ressources mma, sites jjb, federation lutte, informations sports combat`,
    canonicalUrl: `${baseUrl}/links`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Liens Utiles', url: `${baseUrl}/links` }
      ])
    ]
  },

  fighters: {
    title: 'AFC | Combattants | Alpha Fight Club Saint-Ouen 93',
    description: 'Nos combattants d\'élite : champions de Grappling, JJB et No-Gi. Palmarès, résultats et titres des compétiteurs Alpha Fight Club Saint-Ouen (93). Champions Île-de-France.',
    keywords: `${baseKeywords}, combattants grappling, champions jjb, fighters mma, competiteurs grappling, athletes combat, elite fighters saint-ouen, champions grappling paris, medaille jjb, champion france grappling`,
    canonicalUrl: `${baseUrl}/fighters`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Combattants d\'Élite', url: `${baseUrl}/fighters` }
      ]),
      {
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
    ]
  },

  legal: {
    title: 'AFC | Mentions Légales | Alpha Fight Club Saint-Ouen 93',
    description: 'Mentions légales du site Alpha Fight Club Saint-Ouen. Informations juridiques, éditeur, hébergement, propriété intellectuelle.',
    keywords: `alpha fight club, mentions légales, informations juridiques, saint-ouen 93`,
    canonicalUrl: `${baseUrl}/legal`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Mentions Légales', url: `${baseUrl}/legal` }
      ])
    ]
  },

  privacy: {
    title: 'AFC | Confidentialité | Alpha Fight Club Saint-Ouen 93',
    description: 'Politique de confidentialité et protection des données personnelles Alpha Fight Club. RGPD, cookies, droits utilisateurs.',
    keywords: `alpha fight club, politique confidentialité, rgpd, protection données, vie privée`,
    canonicalUrl: `${baseUrl}/privacy`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Politique de Confidentialité', url: `${baseUrl}/privacy` }
      ])
    ]
  },
  
  clubLife: {
    title: 'AFC | Vie du Club | Alpha Fight Club Saint-Ouen 93',
    description: 'Stages techniques, événements sociaux et vie du club Alpha Fight Club. Découvrez l\'esprit d\'équipe en dehors du tatami à Saint-Ouen (93).',
    keywords: `${baseKeywords}, vie du club, stages grappling, événements mma, esprit d'équipe, club sportif saint-ouen, stages techniques grappling`,
    canonicalUrl: `${baseUrl}/club-life`,
    ogImage: defaultOgImage,
    ogType: 'website',
    twitterCard: 'summary',
    jsonLd: [
      createBreadcrumb([
        { name: 'Accueil', url: baseUrl },
        { name: 'Vie du Club', url: `${baseUrl}/club-life` }
      ])
    ]
  }
};

export default seoConfig;
