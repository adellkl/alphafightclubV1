import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Clock, MapPin, AlertCircle, Trophy, Shield, Coffee, Calendar } from 'lucide-react';
import DischargeForm from '../components/DischargeForm';
import { REGISTRATION_LINK } from '../constants';

const Schedule: React.FC = () => {
  const weekSchedule = [
    {
      day: "Lundi",
      short: "LUN",
      number: 1,
      active: true,
      isKids: true,
      classes: [
        { time: "17:00 - 18:00", ageGroup: "6-9 ans", title: "JJB No-Gi Enfants" },
        { time: "18:00 - 19:00", ageGroup: "10-14 ans", title: "JJB No-Gi Enfants" }
      ],
      coach: "Mathis & Anis",
      description: "Cours de Jiu-Jitsu Brésilien No-Gi pour enfants"
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
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${day.special ? 'bg-amber-100 text-amber-700' : day.isKids ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-brand-red'}`}>
                      {day.special ? 'Compétition' : day.isKids ? 'Enfants' : 'Cours'}
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-500">Repos</span>
                  )}
                </div>

                <div className="p-4 space-y-3 min-h-[170px] flex flex-col">
                  {day.active ? (
                    <>
                      {day.isKids ? (
                        <>
                          <div>
                            <h3 className="text-base font-display font-bold text-black leading-snug mb-2">{day.classes[0].title}</h3>
                          </div>
                          <div className="space-y-2">
                            {day.classes.map((classInfo, i) => (
                              <div key={i} className="flex items-center justify-between bg-gray-50 p-2 rounded-sm border border-gray-200">
                                <div className="flex items-center gap-2">
                                  <Clock size={14} className="text-brand-red" />
                                  <span className="text-sm font-semibold text-black">{classInfo.time}</span>
                                </div>
                                <span className="text-xs font-medium text-gray-600">{classInfo.ageGroup}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{day.description}</p>
                          <div className="mt-auto pt-3 border-t border-gray-100 text-sm text-gray-700">
                            {day.coach}
                          </div>
                        </>
                      ) : (
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
                      )}
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

      {/* Section Cours Enfants */}
      <Section className="py-10 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Nouveau</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase mb-2">
              Cours JJB No-Gi pour Enfants
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              L'Alpha Fight Club propose désormais des cours de Jiu-Jitsu Brésilien No-Gi spécialement conçus pour les enfants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-2 border-blue-200 rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-black">6-9 ans</h3>
                  <p className="text-sm text-gray-600">Initiation & découverte</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-blue-600" />
                  <span className="font-semibold">Lundi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-blue-600" />
                  <span>17h00 - 18h00</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 text-blue-700 rounded-full p-3">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-black">10-14 ans</h3>
                  <p className="text-sm text-gray-600">Perfectionnement</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-blue-600" />
                  <span className="font-semibold">Lundi</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-blue-600" />
                  <span>18h00 - 19h00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-blue-600" size={20} />
              <h3 className="font-display font-bold uppercase text-sm text-black">Ce que votre enfant va apprendre</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Techniques de Jiu-Jitsu Brésilien No-Gi adaptées à leur âge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Développement de la confiance en soi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Discipline et respect des valeurs du club</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Activité physique complète et ludique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Socialisation et esprit d'équipe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>Encadrement par des coachs diplômés</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 bg-blue-600 text-white rounded-md p-6 text-center">
            <h3 className="font-display font-bold text-xl mb-3">Cours d'essai gratuit !</h3>
            <p className="mb-4 text-blue-100">
              Votre enfant peut essayer un cours gratuitement avant de s'inscrire.
            </p>
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 font-bold uppercase text-sm rounded-sm hover:bg-black hover:text-white transition-colors"
            >
              Inscrire mon enfant
            </a>
          </div>
        </div>
      </Section>

      {/* Formulaire de décharge Open Mat */}
      <Section className="py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase mb-2">
              Formulaire de Décharge - Open Mat
            </h2>
            <div className="w-20 h-1 bg-brand-red mb-4"></div>
            <p className="text-gray-600 text-base">
              Les participants aux Open Mat du dimanche doivent remplir ce formulaire obligatoirement.
            </p>
          </div>
          <DischargeForm />
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