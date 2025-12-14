import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Clock, MapPin, AlertCircle, Trophy, Dumbbell, Shield, Coffee } from 'lucide-react';

const Schedule: React.FC = () => {
  const schedule = [
    { day: "Lundi", type: "rest", label: "Repos", icon: Coffee },
    { day: "Mardi", type: "rest", label: "Repos", icon: Coffee },
    { 
      day: "Mercredi", 
      type: "training", 
      time: "20h00 - 22h00", 
      title: "Grappling", 
      level: "Tous Niveaux",
      desc: "Technique & Sparring",
      icon: Shield,
      color: "border-brand-red"
    },
    { day: "Jeudi", type: "rest", label: "Repos", icon: Coffee },
    { 
      day: "Vendredi", 
      type: "training", 
      time: "20h00 - 22h00", 
      title: "Grappling", 
      level: "Tous Niveaux",
      desc: "Technique avancée",
      icon: Dumbbell,
      color: "border-brand-red"
    },
    { day: "Samedi", type: "rest", label: "Fermé", icon: Coffee },
    { 
      day: "Dimanche", 
      type: "special", 
      time: "10h00 - 13h00", 
      title: "Compétition", 
      level: "Confirmés",
      desc: "Open Mat & Physique",
      icon: Trophy,
      color: "border-yellow-500"
    },
  ];

  return (
    <main className="pt-32">
      <SEO {...seoConfig.schedule} />

      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
                Planning Hebdo
                </h1>
                <div className="w-20 h-1 bg-brand-red mb-6"></div>
                <p className="text-gray-500 text-lg max-w-2xl text-left">
                Une vision globale de votre semaine d'entraînement au Centre Pablo Neruda.
                </p>
            </div>
            {/* Quick Info Badge */}
            <div className="hidden md:block bg-black text-white px-6 py-4 rounded-sm text-right">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Lieu unique</div>
                <div className="font-display font-bold text-xl uppercase flex items-center gap-2 justify-end">
                    Centre Pablo Neruda <MapPin className="text-brand-red" />
                </div>
            </div>
        </div>
      </div>

      <Section gray className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6">

            {/* Horizontal Weekly Calendar */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {schedule.map((slot, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className={`relative overflow-hidden rounded-sm shadow-lg transition-all duration-300 ${
                        slot.type === 'rest'
                          ? 'bg-gray-200 hover:bg-gray-300'
                          : slot.type === 'special'
                          ? 'bg-black hover:-translate-y-2 hover:shadow-2xl'
                          : 'bg-brand-red hover:-translate-y-2 hover:shadow-2xl'
                      }`}
                    >
                      {/* Day Header */}
                      <div className={`py-4 text-center border-b-2 ${
                        slot.type === 'rest'
                          ? 'bg-gray-300 border-gray-400'
                          : slot.type === 'special'
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 border-yellow-600'
                          : 'bg-gradient-to-br from-red-600 to-red-700 border-red-800'
                      }`}>
                        <div className={`font-display font-bold text-lg uppercase tracking-wider ${
                          slot.type === 'rest' ? 'text-gray-600' : 'text-white'
                        }`}>
                          {slot.day}
                        </div>
                      </div>

                      {/* Calendar Body */}
                      <div className={`p-6 min-h-[280px] flex flex-col items-center justify-center text-center gap-4 ${
                        slot.type !== 'rest' ? 'text-white' : 'text-gray-500'
                      }`}>

                        {slot.type === 'rest' ? (
                          // Rest Day
                          <>
                            <div className="p-4 bg-white rounded-full">
                              <slot.icon size={40} className="text-gray-400" />
                            </div>
                            <div className="space-y-2">
                              <div className="font-display font-bold text-xl uppercase">
                                {slot.label}
                              </div>
                              <div className="h-1 w-16 bg-gray-400 mx-auto rounded-full" />
                            </div>
                          </>
                        ) : (
                          // Training Day
                          <>
                            {/* Icon */}
                            <div className={`p-4 rounded-full ${
                              slot.type === 'special' ? 'bg-yellow-400' : 'bg-white'
                            }`}>
                              <slot.icon size={40} className={
                                slot.type === 'special' ? 'text-black' : 'text-brand-red'
                              } />
                            </div>

                            {/* Time Badge */}
                            <div className={`px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 ${
                              slot.type === 'special'
                                ? 'bg-yellow-400 text-black'
                                : 'bg-white text-brand-red'
                            }`}>
                              <Clock size={16} />
                              {slot.time}
                            </div>

                            {/* Title */}
                            <div className="space-y-2">
                              <h3 className="font-display font-bold text-2xl uppercase leading-tight">
                                {slot.title}
                              </h3>
                              <div className={`h-1 w-12 mx-auto rounded-full ${
                                slot.type === 'special' ? 'bg-yellow-400' : 'bg-white'
                              }`} />
                            </div>

                            {/* Description */}
                            <p className="text-sm opacity-90 leading-relaxed px-2">
                              {slot.desc}
                            </p>

                            {/* Level Badge */}
                            <div className={`mt-auto px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider ${
                              slot.type === 'special'
                                ? 'bg-yellow-400 text-black'
                                : 'bg-white text-brand-red'
                            }`}>
                              {slot.level}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Bottom Accent */}
                      {slot.type !== 'rest' && (
                        <div className={`h-1 ${
                          slot.type === 'special' ? 'bg-yellow-400 animate-pulse' : 'bg-white animate-pulse'
                        }`} />
                      )}
                    </motion.div>
                ))}
            </div>

            {/* Bottom Info Box */}
            <div className="mt-16 bg-zinc-900 text-white p-8 rounded-sm flex flex-col md:flex-row items-start justify-between gap-6 border-l-4 border-brand-red shadow-2xl">
                <div className="flex items-start gap-4">
                    <AlertCircle className="text-brand-red shrink-0 mt-1" size={32} />
                    <div>
                        <h4 className="font-display font-bold text-xl uppercase mb-2 text-white">Note Importante</h4>
                        <p className="text-white leading-relaxed max-w-2xl text-sm">
                            Merci d'arriver <strong>15 minutes avant</strong> le début du cours pour le changement de tenue.
                            Rashguard et short de grappling obligatoires (pas de fermetures éclair).
                        </p>
                    </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Centre+Sportif+Pablo+Neruda,+17+Rue+Salvador+Allende,+93400+Saint-Ouen-sur-Seine"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-brand-red hover:bg-white hover:text-black transition-colors px-6 py-3 rounded-sm font-bold uppercase text-xs whitespace-nowrap"
                >
                    <MapPin size={16} /> Voir sur la carte
                </a>
            </div>

        </div>
      </Section>
    </main>
  );
};

export default Schedule;