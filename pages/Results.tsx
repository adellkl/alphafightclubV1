import React, { useState, useRef } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Trophy, Medal, Camera, ImageIcon, Calendar } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

// --- DATA HISTORIQUE ---
const HISTORY_DATA = [
  {
    year: "2017",
    events: [
      {
        date: "8 Janvier",
        name: "Spirit Challenge No Gi",
        results: [
          "Younes Soliman : Bronze (-84kg débutant)",
          "Micipsa Bouaziz : Argent (-84kg intermédiaire)",
          "Yassine Soliman : Bronze (-92kg confirmé)"
        ]
      },
      {
        date: "22 Janvier",
        name: "ChristoGrapp de Créteil",
        results: [
          "Younes Soliman : Bronze (-84kg débutant)",
          "Yassine Soliman : Bronze (Confirmé - blessure en finale)"
        ]
      },
      {
        date: "26 Février",
        name: "Urban Legend Prestige",
        results: [
          "Arnaud Bretz : Victoire par soumission (Jujigatame) au 1er round après 2 magnifiques projections."
        ]
      },
      {
        date: "23 Avril",
        name: "Championnat de France de Grappling FFL",
        results: [
          "Yassine Soliman : Médaille de Bronze (Confirmé). Défaite en demi-finale face à Malik."
        ]
      }
    ]
  },
  {
    year: "2016",
    events: [
      {
        date: "3 Décembre",
        name: "Grappling Challengers",
        results: [
          "Hakim Bouzoumita : Or (-77kg junior). Palme des plus beaux combats (15-0 puis 13-0).",
          "Ulysse Dablemont : Bronze (-77kg junior).",
          "Arnaud Bretz : Bronze (-71kg senior).",
          "Lens Lesperance : Victoire au 1er tour, défaite aux points au 2nd.",
          "Gaetan Barbe : Défaite au 1er tour aux points."
        ]
      },
      {
        date: "11 Décembre",
        name: "Urban Legend Prestige",
        results: [
          "Mathieu Chiaroni : Victoire par soumission.",
          "Souliman Fatty : Victoire par soumission."
        ]
      },
      {
        date: "12 Novembre",
        name: "NAGA Amiens",
        results: [
          "Sébastien Haddadj : Argent (-69,9kg intermédiaire)."
        ]
      },
      {
        date: "14 Novembre",
        name: "Championnat IDF Grappling",
        results: [
          "Younes Soliman : Argent (-84kg débutant).",
          "Yassine Soliman : Argent (-92kg confirmé)."
        ]
      },
      {
        date: "23 Octobre",
        name: "Urban Legend Evolution",
        results: [
          "Hakim Bouzoumita : Victoire à la décision.",
          "Ulysse Dablemont : Victoire à la décision.",
          "Mathieu Chiaroni : Match nul (Grosse guerre).",
          "Moha L'égyptien : Défaite."
        ]
      },
      {
        date: "17 Avril",
        name: "Luxury Fighter",
        results: [
          "Yassine Soliman : Vainqueur de la finale par soumission (Ceinture du vainqueur)."
        ]
      },
      {
        date: "22 Février",
        name: "CLS Absolute",
        results: [
          "Participation courageuse de Hakim et Mathieu face à des adultes après 5 mois de pratique."
        ]
      },
      {
        date: "31 Janvier",
        name: "Urban Legend",
        results: [
          "Yassine Soliman : Victoire par soumission (étranglement arrière, R2)."
        ]
      }
    ]
  },
  {
    year: "2015",
    events: [
      {
        date: "6 Novembre",
        name: "Open IDF de Grappling GI",
        results: [
          "Participation exemplaire de Thomas Le Godec."
        ]
      },
      {
        date: "18 Octobre",
        name: "Urban Legend Evolution",
        results: [
          "Yassine Soliman : Victoire par soumission (R2) avec coups de genoux sautés."
        ]
      },
      {
        date: "4 Octobre",
        name: "Grappling Challengers",
        results: [
          "Yassine Soliman : Bronze.",
          "Micipsa Bouaziz : Bronze."
        ]
      },
      {
        date: "16 Mai",
        name: "Championnat de France Grappling GI (FFL)",
        results: [
          "Thomas Le Godec : Médaille de Bronze."
        ]
      },
      {
        date: "29 Mars",
        name: "Finales Open de France Kempo",
        results: [
          "Sami Dali : Victoire au 1er round (étranglement arrière).",
          "Younes Soliman : Forfait sur blessure (doigt cassé)."
        ]
      },
      {
        date: "8 Mars",
        name: "Urban Legend Evolution",
        results: [
          "Yassine Soliman : Victoire à la décision.",
          "Arthur Bigé : Défaite à la décision (combat héroïque face à +10kg).",
          "Hamza Hammou : Défaite par soumission."
        ]
      },
      {
        date: "22 Février",
        name: "CLS Challenge",
        results: [
          "Sami Dali : Or (-83kg confirmé) et Bronze en Absolute (face à 120kg)."
        ]
      },
      {
        date: "15 Février",
        name: "RVL Challenge",
        results: [
          "Thomas Le Godec : Or (Bleu -94kg).",
          "Sami Dali : Participation (Blanche -82kg)."
        ]
      },
      {
        date: "25 Janvier",
        name: "Coupe de France de Kempo (2e tour)",
        results: [
          "Sami Dali : Victoire soumission R1 (Qualif demi -77kg).",
          "Younes Soliman : Victoire décision (Qualif finale -84kg)."
        ]
      },
      {
        date: "24 Janvier",
        name: "Coupe de France de Grappling GI FFL",
        results: [
          "Thomas Le Godec : 1ère Place."
        ]
      },
      {
        date: "11 Janvier",
        name: "Spirit Challenge NO GI",
        results: [
          "Sami Dali : Or (2 victoires pts, 1 soumission).",
          "Thomas Le Godec : Bronze."
        ]
      }
    ]
  },
  {
    year: "2014",
    events: [
      {
        date: "29 Décembre",
        name: "Coupe de France de Kempo (1er tour)",
        results: ["Younès Soliman : Victoire par TKO."]
      },
      {
        date: "15 Novembre",
        name: "NAGA Grappling Levallois",
        results: ["Yassine Soliman : Bronze (Novice)."]
      },
      {
        date: "26 Octobre",
        name: "GIC International de BJJ",
        results: ["Sami Dali : Argent (-88kg blanche)."]
      },
      {
        date: "19 Octobre",
        name: "Grappling Challengers",
        results: [
          "Sébastien Haddadj : Bronze (3ème après 4 combats).",
          "Participation : Yassine Soliman, Jeremi Hubert, Danito Tavares, Arnaud Célérier, Younes Soliman."
        ]
      },
      {
        date: "8 Juin",
        name: "Golden Belts",
        results: ["Sami Dali : Défaite face au champion d'Europe Ali Maltsagov."]
      },
      {
        date: "18 Mai",
        name: "Grappling Challengers",
        results: ["Sami Dali : 1ère Place (3 combats)."]
      },
      {
        date: "11 Mai",
        name: "NSM Challenge",
        results: [
          "Sami Dali : 1ère Place (3 soumissions).",
          "Yassine Soliman : 1ère Place (2 soumissions)."
        ]
      },
      {
        date: "8 Mars",
        name: "Urban Legend",
        results: ["Sami Dali : Victoire par étranglement."]
      },
      {
        date: "23 Février",
        name: "CLS Compétition",
        results: ["Sami Dali : 1ère Place (4 combats)."]
      },
      {
        date: "27 Janvier",
        name: "Championnat de France Grappling FFL",
        results: [
          "Sébastien Haddadj : 1ère Place (4 combats).",
          "Sami Dali : 3ème Place (5 combats)."
        ]
      }
    ]
  },
  {
    year: "2013",
    events: [
      {
        date: "16 Novembre",
        name: "NAGA Levallois",
        results: [
          "Sébastien Haddadj : Bronze.",
          "Sami Dali : Bronze."
        ]
      },
      {
        date: "25 Mai",
        name: "Grappling Rouen",
        results: ["Sébastien Haddadj : Or (-70kg)."]
      },
      {
        date: "9 Mars",
        name: "Championnat de France de Bugei",
        results: [
          "Sébastien Haddadj : Or (-70kg).",
          "Mamadou Diallo : Or (+95kg).",
          "Abdel Teibi : Argent (-70kg).",
          "Dobroslav Cybulinski : Argent (-85kg)."
        ]
      }
    ]
  },
  {
    year: "2012",
    events: [
      {
        date: "18 Novembre",
        name: "Championnat IDF Pancrace FFSCDA",
        results: ["Sébastien Choquet : 4ème."]
      },
      {
        date: "10 Novembre",
        name: "NAGA Europe",
        results: [
          "Sébastien Haddadj : Argent (Featherweight NoGi Beginner).",
          "Jéremy Hubert : Bronze (Lightweight NoGi Novice)."
        ]
      },
      {
        date: "13 Mai",
        name: "Challenge Grappling NSM",
        results: ["Victoires de Sébastien Haddadj et Sébastien Choquet."]
      },
      {
        date: "22 Janvier",
        name: "Interclubs Saint-Ouen",
        results: [
          "Sébastien Haddadj : 1er (Pancrace -70kg).",
          "Momen Ferrah : 1er (Pancrace -75kg).",
          "Mohammed Benyoucef : 2ème (Pancrace -85kg).",
          "Sami Dali : 2ème (Grappling -72kg)."
        ]
      }
    ]
  },
  {
    year: "2011",
    events: [
      {
        date: "5 Novembre",
        name: "NAGA Europe",
        results: [
          "Naël Kraim : 1er (-85.5kg NoGi) et 2ème (Seniors ADCC Rules)."
        ]
      },
      {
        date: "13 Mars",
        name: "Tournoi de Pomponne",
        results: ["Joël Aman : 2ème (-88kg)."]
      },
      {
        date: "30 Janvier",
        name: "Interclubs Pancrace",
        results: ["Marvin Leveille : 2ème."]
      }
    ]
  },
  {
    year: "2010",
    events: [
      {
        date: "11 Décembre",
        name: "1er Tournoi International NAGA",
        results: [
          "Thomas Le Godec : 2ème.",
          "Dimitri Milosevic : 4ème."
        ]
      },
      {
        date: "24-26 Septembre",
        name: "Championnat d'Europe FILA (Pologne)",
        results: [
          "Thomas Le Godec : 2ème (-90kg Pankration) et 4ème (Palaismata)."
        ]
      },
      {
        date: "Septembre",
        name: "Sportaccord Combat Games (Pékin)",
        results: ["Dimitri Milosevic : 6ème (-90kg)."]
      }
    ]
  },
  {
    year: "2009",
    events: [
      {
        date: "11-13 Septembre",
        name: "Championnats du Monde Pankration (Lithuanie)",
        results: [
          "Sébastien Louchet : Médaille d'Argent (-66kg).",
          "Omar Baali : Médaille de Bronze (-71kg).",
          "Thomas Le Godec : 5ème (-91kg)."
        ]
      }
    ]
  }
];

// --- COMPOSANTS INTERNES ---

// Composant pour l'effet "Typewriter" sur les dates
const DateTypewriter: React.FC<{ text: string }> = ({ text }) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
    hidden: {
      opacity: 0,
      x: -5,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      className="inline-flex"
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index} className="whitespace-pre">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Composant pour l'affichage d'une image locale
const GalleryItem: React.FC<{ index: number }> = ({ index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Chemin corrigé : /images/competitor/1.jpg (singulier)
  const imageUrl = `/images/competitor/${index}.jpg`;

  if (!isVisible) return null;

  return (
    <div className={`relative group overflow-hidden aspect-[4/3] cursor-pointer bg-gray-100 rounded-sm ${isLoading ? 'animate-pulse' : ''}`}>
      <img 
        src={imageUrl} 
        alt={`Compétiteur ${index}`} 
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsVisible(false)} // Cache l'élément si l'image n'est pas trouvée
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
         <Camera className="text-white drop-shadow-lg" size={32} />
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  const imageIndexes = Array.from({ length: 30 }, (_, i) => i + 1);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  // Suivi du scroll pour la ligne temporelle
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 20%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="pt-32">
      <SEO {...seoConfig.results} />
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl lg:text-7xl font-display font-bold text-black uppercase mb-4 text-left">
          Palmarès
        </h1>
        <div className="w-24 h-2 bg-brand-red mb-8"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left leading-relaxed">
           L'histoire de l'Alpha Fight Club s'écrit sur les tatamis. Depuis 2003, nos compétiteurs défendent nos couleurs au niveau national et international.
        </p>
      </div>

      {/* TIMELINE SECTION */}
      <Section className="py-10 bg-white">
        <div ref={timelineRef} className="max-w-4xl mx-auto px-4 md:px-0 relative">
          
          {/* Ligne verticale de timeline (Arrière-plan gris) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2 hidden md:block"></div>
          
          {/* Ligne verticale de timeline (Premier plan rouge animé) */}
          <motion.div 
            style={{ scaleY: scaleY, originY: 0 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-brand-red transform md:-translate-x-1/2 hidden md:block z-0"
          ></motion.div>

          {HISTORY_DATA.map((yearGroup, yIdx) => (
            <div key={yIdx} className="mb-20 relative">
              
              {/* Year Marker */}
              <div className="flex md:justify-center items-center mb-10 sticky top-24 z-20">
                 <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-black text-white font-display font-bold text-3xl py-2 px-6 rounded-sm shadow-xl border-4 border-white"
                 >
                    {yearGroup.year}
                 </motion.div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 gap-8">
                  {yearGroup.events.map((event, eIdx) => {
                      const isLeft = eIdx % 2 !== 0; // Alternance gauche/droite
                      return (
                      <div key={eIdx} className={`relative flex flex-col md:flex-row gap-6 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                          
                          {/* Spacer for Timeline Alignment */}
                          <div className="hidden md:block w-1/2"></div>
                          
                          {/* Dot on Timeline */}
                          <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-brand-red rounded-full border-4 border-white shadow-sm transform md:-translate-x-1/2 z-10 hidden md:block"></div>

                          {/* Card Content avec Animation d'apparition latérale */}
                          <motion.div 
                             initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true, margin: "-10%" }}
                             transition={{ duration: 0.6, ease: "easeOut" }}
                             className="w-full md:w-1/2 pl-12 md:pl-0"
                          >
                             <div className={`bg-gray-50 p-6 md:p-8 rounded-sm border-l-4 border-brand-red hover:shadow-lg transition-shadow relative group ${!isLeft ? 'md:mr-8 md:text-right md:border-l-0 md:border-r-4' : 'md:ml-8'}`}>
                                
                                {/* Date Badge avec Typewriter */}
                                <div className={`inline-flex items-center gap-2 text-brand-red font-bold uppercase text-xs tracking-widest mb-3 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                                    <Calendar size={14} />
                                    <DateTypewriter text={event.date} />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-black uppercase mb-4 leading-none group-hover:text-brand-red transition-colors">
                                    {event.name}
                                </h3>

                                <ul className="space-y-3">
                                    {event.results.map((res, rIdx) => (
                                        <li key={rIdx} className={`text-gray-600 text-sm leading-relaxed flex items-start gap-2 ${!isLeft ? 'md:justify-end' : ''}`}>
                                            {/* Icon logic simple based on keywords */}
                                            {res.toLowerCase().includes('or') || res.toLowerCase().includes('1er') || res.toLowerCase().includes('victoire') ? (
                                                <Trophy size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                            ) : res.toLowerCase().includes('argent') || res.toLowerCase().includes('2e') ? (
                                                <Medal size={16} className="text-gray-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <Medal size={16} className="text-orange-400 shrink-0 mt-0.5" />
                                            )}
                                            <span>{res}</span>
                                        </li>
                                    ))}
                                </ul>

                             </div>
                          </motion.div>
                      </div>
                  )})}
              </div>

            </div>
          ))}
          
        </div>
      </Section>

      {/* GALLERY SECTION */}
      <Section gray className="py-20">
         <div className="container mx-auto px-0 md:px-6">
            <div className="mb-12 px-6 md:px-0">
                <h2 className="text-4xl font-display font-bold text-black uppercase mb-4 flex items-center gap-3">
                    <ImageIcon className="text-brand-red" size={32} />
                    Nos Compétiteurs d'Élite
                </h2>
                <div className="w-20 h-1 bg-brand-red mb-6"></div>
                <p className="text-gray-500 text-lg">
                  Galerie des athlètes qui ont marqué l'histoire du club.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {imageIndexes.map((index) => (
                   <GalleryItem key={index} index={index} />
                ))}
            </div>
         </div>
      </Section>
    </main>
  );
};

export default Results;