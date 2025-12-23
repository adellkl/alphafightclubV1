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

      {/* En-tête */}
      <div className="container mx-auto px-4 sm:px-6 mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase">
            Planning Hebdomadaire
          </h1>
          <div className="w-20 h-1 bg-brand-red"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Centre Sportif Pablo Neruda — 17 Rue Salvador Allende, Saint-Ouen (93).
          </p>
        </div>
      </div>

      {/* Semaine type */}
      <Section className="py-10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase text-gray-500">
            <Calendar size={18} className="text-brand-red" />
            <span>Semaine type</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weekSchedule.map((day, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                  <div>
                    <div className="text-xs uppercase text-gray-500 tracking-wide">{day.short}</div>
                    <div className="text-base font-semibold text-black">{day.day}</div>
                  </div>
                  {day.active ? (
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${day.special ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-brand-red'}`}>
                      {day.special ? 'Compétition' : 'Cours'}
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-500">Repos</span>
                  )}
                </div>

                <div className="p-4 space-y-3 min-h-[170px] flex flex-col">
                  {day.active ? (
                    <>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Clock size={16} className="text-brand-red" />
                        <span>{day.time}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-display font-bold text-black leading-snug">{day.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{day.level}</p>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                      <div className="mt-auto pt-3 border-t border-gray-100 text-sm text-gray-700">
                        {day.coach}
                      </div>
                    </>
                  ) : (
                    <div className="text-sm text-gray-500">Repos / récupération</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Infos pratiques */}
      <Section gray className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 bg-white rounded-md p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="text-brand-red" size={18} />
              <h3 className="font-display font-bold uppercase text-sm text-black">À savoir</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Arriver 15 minutes avant le cours.</li>
              <li>Rashguard + short obligatoires, pas de fermetures éclair.</li>
              <li>Cours d'essai gratuit.</li>
            </ul>
          </div>

          <div className="border border-gray-200 bg-white rounded-md p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-brand-red" size={18} />
              <h3 className="font-display font-bold uppercase text-sm text-black">Lieu</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Centre Sportif Pablo Neruda<br />
              17 Rue Salvador Allende<br />
              93400 Saint-Ouen<br />
              Métro 13 — Mairie de Saint-Ouen (5 min à pied)
            </p>
            <a
              href="https://www.google.com/maps/place/Centre+Sportif+Pablo+Neruda"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-red px-3 py-2 rounded-sm hover:bg-black transition-colors"
            >
              <MapPin size={14} /> Voir la carte
            </a>
          </div>

          <div className="border border-gray-200 bg-black text-white rounded-md p-6 md:p-7 shadow-md flex flex-col justify-between min-h-[220px]">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-sm">
                <Trophy className="text-white" size={20} />
                <span className="text-xs font-semibold uppercase tracking-wide text-white/90">Essai Gratuit</span>
              </div>
              <h3 className="font-display font-bold uppercase text-xl md:text-2xl text-white leading-tight">
                Prêt à commencer ?
              </h3>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                Essai gratuit sans engagement pour découvrir le Grappling.
              </p>
            </div>
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center bg-white text-black px-5 py-3 font-bold uppercase text-sm rounded-sm hover:bg-brand-red hover:text-white transition-colors"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Schedule;