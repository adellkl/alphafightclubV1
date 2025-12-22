import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Clock, MapPin, AlertCircle, Trophy, Shield, Coffee, Calendar } from 'lucide-react';
import { REGISTRATION_LINK } from '../constants';

const Schedule: React.FC = () => {
  const weekSchedule = [
    {
      day: "Lundi",
      short: "LUN",
      number: 1,
      active: false,
      label: "Repos"
    },
    {
      day: "Mardi",
      short: "MAR",
      number: 2,
      active: false,
      label: "Repos"
    },
    {
      day: "Mercredi",
      short: "MER",
      number: 3,
      active: true,
      time: "20:00 - 22:00",
      title: "Grappling No-Gi",
      level: "Tous Niveaux",
      coach: "Thomas Le Godec",
      description: "Technique, projections & sparring"
    },
    {
      day: "Jeudi",
      short: "JEU",
      number: 4,
      active: false,
      label: "Repos"
    },
    {
      day: "Vendredi",
      short: "VEN",
      number: 5,
      active: true,
      time: "20:00 - 22:00",
      title: "Grappling No-Gi",
      level: "Tous Niveaux",
      coach: "Thomas & Sébastien",
      description: "Techniques avancées & drills"
    },
    {
      day: "Samedi",
      short: "SAM",
      number: 6,
      active: false,
      label: "Fermé"
    },
    {
      day: "Dimanche",
      short: "DIM",
      number: 7,
      active: true,
      special: true,
      time: "10:00 - 13:00",
      title: "Compétition",
      level: "Confirmés",
      coach: "Thomas Le Godec",
      description: "Open mat & prépa physique"
    },
  ];

  return (
    <main className="pt-32">
      <SEO {...seoConfig.schedule} />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4">
          Planning Hebdomadaire
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl">
          Centre Sportif Pablo Neruda - Saint-Ouen (93)
        </p>
      </div>

      {/* Calendrier Moderne */}
      <Section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* En-tête du calendrier */}
          <div className="mb-6 md:mb-8 text-center">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-sm mb-4">
              <Calendar className="text-brand-red" size={20} />
              <span className="font-display font-bold text-base md:text-xl uppercase">Semaine Type</span>
            </div>
          </div>

          {/* Grille Calendrier */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
            {weekSchedule.map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  day.active 
                    ? day.special 
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' 
                      : 'bg-gradient-to-br from-brand-red to-red-700'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}
              >
                {/* Header Jour avec numéro */}
                <div className={`p-2 md:p-4 text-center ${
                  day.active 
                    ? 'bg-black/20 text-white' 
                    : 'bg-white/50 text-gray-600'
                }`}>
                  <div className="font-display font-bold text-lg md:text-2xl mb-1">
                    {day.short}
                  </div>
                  <div className="text-[10px] md:text-xs opacity-80">{day.day}</div>
                </div>

                {/* Contenu */}
                <div className={`p-3 md:p-5 min-h-[200px] md:min-h-[280px] flex flex-col ${
                  day.active ? 'text-white' : 'text-gray-500'
                }`}>
                  {day.active ? (
                    <>
                      {/* Badge Horaire */}
                      <div className="mb-2 md:mb-4">
                        <div className="inline-flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 md:py-2 rounded-full">
                          <Clock size={14} />
                          <span className="font-bold text-xs md:text-sm">{day.time}</span>
                        </div>
                      </div>

                      {/* Titre */}
                      <h3 className="font-display font-bold text-sm md:text-lg uppercase mb-2 md:mb-3 leading-tight">
                        {day.title}
                      </h3>

                      {/* Badge Niveau */}
                      <div className="mb-2 md:mb-4">
                        <span className="inline-block bg-white/30 backdrop-blur-sm px-2 md:px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full">
                          {day.level}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[10px] md:text-sm mb-4 md:mb-6 leading-relaxed opacity-90">
                        {day.description}
                      </p>

                      {/* Infos en bas */}
                      <div className="mt-auto pt-2 md:pt-4 border-t border-white/20">
                        <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                          <Shield size={14} className="shrink-0" />
                          <span className="truncate text-[10px] md:text-xs">{day.coach}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    // Jour de repos
                    <div className="flex flex-col items-center justify-center h-full">
                      <Coffee size={32} className="md:size-48 mb-2 md:mb-4 opacity-50" />
                      <p className="font-display font-bold text-sm md:text-lg uppercase">{day.label}</p>
                    </div>
                  )}
                </div>

                {/* Indicateur visuel en bas */}
                {day.active && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                    day.special ? 'bg-yellow-300' : 'bg-red-400'
                  }`}></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Informations Pratiques */}
      <Section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Infos Générales */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <AlertCircle className="text-brand-red" size={20} />
                <h3 className="font-display font-bold text-base md:text-lg uppercase">À Savoir</h3>
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-brand-red">•</span>
                  Arriver <strong>15 min avant</strong>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red">•</span>
                  Rashguard + short obligatoires
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red">•</span>
                  Pas de fermetures éclair
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-red">•</span>
                  Cours d'essai gratuit
                </li>
              </ul>
            </div>

            {/* Localisation */}
            <div className="bg-black text-white p-4 md:p-6 shadow-lg">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <MapPin className="text-brand-red" size={20} />
                <h3 className="font-display font-bold text-base md:text-lg uppercase">Lieu</h3>
              </div>
              <p className="text-xs md:text-sm mb-2 md:mb-3">
                <strong>Centre Pablo Neruda</strong><br/>
                17 Rue Salvador Allende<br/>
                93400 Saint-Ouen
              </p>
              <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">
                Métro 13 - Mairie de Saint-Ouen<br/>
                5 min à pied
              </p>
              <a
                href="https://www.google.com/maps/place/Centre+Sportif+Pablo+Neruda"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-white hover:text-black transition-colors px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs font-bold uppercase"
              >
                <MapPin size={12} /> Carte
              </a>
            </div>

            {/* CTA */}
            <div className="bg-brand-red text-white p-4 md:p-6 shadow-lg flex flex-col justify-between">
              <div>
                <Trophy className="mb-3 md:mb-4" size={24} />
                <h3 className="font-display font-bold text-lg md:text-xl uppercase mb-2 md:mb-3">
                  Prêt à Commencer ?
                </h3>
                <p className="text-xs md:text-sm mb-3 md:mb-4 text-white/90">
                  Essai gratuit sans engagement pour découvrir le Grappling
                </p>
              </div>
              <a
                href={REGISTRATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black hover:bg-white hover:text-black transition-colors px-4 md:px-6 py-2 md:py-3 font-bold uppercase text-xs md:text-sm"
              >
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Schedule;