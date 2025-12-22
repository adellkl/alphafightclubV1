import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Trophy, Medal, ChevronDown, Award, Target, Zap } from 'lucide-react';
import { FIGHTERS_DATA } from '../fighters-data';

const Fighters: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFighter = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <main className="pt-32">
      <SEO
        title="Nos Combattants d'Élite | Alpha Fight Club Saint-Ouen | Champions Grappling"
        description="Découvrez les combattants d'élite de l'Alpha Fight Club. Champions de Grappling, JJB et No-Gi. Palmarès et résultats sportifs."
        keywords="combattants grappling, champions jjb, compétiteurs mma, elite fighters, champions saint-ouen, grappling champions"
      />

      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Nos Combattants d'Élite
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
          Les guerriers qui font la fierté de l'Alpha Fight Club. Champions. Compétiteurs. Légendes.
        </p>
      </div>

      {/* FIGHTERS LIST */}
      <Section gray className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-start">
          {FIGHTERS_DATA.map((fighter, idx) => {
            const isExpanded = expandedIndex === idx;
            const winRate = Math.round((fighter.record.wins / (fighter.record.wins + fighter.record.losses + fighter.record.draws)) * 100);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100"
              >
                {/* Fighter Card */}
                <div className="relative">
                  {/* Image avec overlay gradient amélioré */}
                  <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
                    <img
                      src={fighter.image}
                      alt={`${fighter.name} - Combattant Grappling Alpha Fight Club`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient overlay amélioré */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

                    {/* Badge Nickname - Top Left */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-brand-red text-white px-4 py-2 font-display font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg border-2 border-white/20">
                        {fighter.nickname}
                      </div>
                    </div>

                    {/* Stats overlay - Top Right */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-sm border border-white/20">
                        <div className="text-xs text-gray-300 mb-1">Victoires</div>
                        <div className="text-2xl font-bold text-green-400">{fighter.record.wins}</div>
                      </div>
                    </div>

                    {/* Info overlay sur image - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] leading-tight">
                        {fighter.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-1 w-12 bg-brand-red"></div>
                        <p className="text-gray-200 text-sm md:text-base font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                          {fighter.specialty}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Cards - Modern Design */}
                  <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-5">
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                      {/* Catégorie */}
                      <div className="text-center">
                        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Catégorie</div>
                        <div className="text-sm md:text-base font-bold text-white">{fighter.weight}</div>
                      </div>
                      
                      {/* Record */}
                      <div className="text-center border-x border-gray-700">
                        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Record</div>
                        <div className="text-sm md:text-base font-bold text-white">
                          {fighter.record.wins}-{fighter.record.losses}
                          {fighter.record.draws > 0 && `-${fighter.record.draws}`}
                        </div>
                      </div>
                      
                      {/* Win Rate */}
                      <div className="text-center">
                        <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mb-1">Taux</div>
                        <div className="text-sm md:text-base font-bold text-green-400">{winRate}%</div>
                      </div>
                    </div>
                  </div>

                  {/* Belt & Grade - Modern Card */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-5 md:p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1">Grade</div>
                        <div className="font-display font-bold text-base md:text-lg text-brand-red">{fighter.belt}</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                          <Award className="text-brand-red" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Toggle button - Enhanced */}
                  <button
                    onClick={() => toggleFighter(idx)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between border-t-2 border-gray-200 group"
                  >
                    <span className="font-display font-bold text-xs md:text-sm uppercase text-gray-700 group-hover:text-brand-red transition-colors">
                      {isExpanded ? "Masquer le palmarès" : "Afficher le palmarès"}
                    </span>
                    <div className={`flex items-center gap-2 ${isExpanded ? 'text-brand-red' : 'text-gray-400'}`}>
                      <Trophy size={18} />
                      <ChevronDown
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        size={20}
                      />
                    </div>
                  </button>
                </div>

                {/* Expandable Achievements - Enhanced Design */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 border-t-2 border-brand-red">
                        {/* Achievements Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Trophy className="text-yellow-600" size={24} />
                          </div>
                          <div>
                            <h4 className="font-display font-bold uppercase text-lg text-gray-900">Palmarès</h4>
                            <p className="text-xs text-gray-500">{fighter.achievements.length} titres</p>
                          </div>
                        </div>

                        {/* Achievements list - Enhanced */}
                        <ul className="space-y-3 mb-6">
                          {fighter.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 bg-white p-3 rounded-sm border-l-4 border-brand-red shadow-sm hover:shadow-md transition-shadow"
                            >
                              <div className="mt-0.5">
                                <Medal className="text-brand-red shrink-0" size={18} />
                              </div>
                              <span className="text-sm md:text-base text-gray-700 font-medium">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Quote - Enhanced */}
                        <div className="relative bg-gradient-to-br from-brand-red/5 to-brand-red/10 border-l-4 border-brand-red p-5 rounded-sm">
                          <div className="absolute top-2 right-2 text-brand-red/20">
                            <Target size={40} />
                          </div>
                          <div className="relative">
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="text-brand-red" size={16} />
                              <span className="text-xs font-bold uppercase text-brand-red tracking-wider">Citation</span>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-gray-800 italic font-medium">
                              "{fighter.quote}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Fighters;
