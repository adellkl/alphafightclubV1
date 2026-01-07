import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { ChevronDown } from 'lucide-react';
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
            const isMathis = fighter.name.toLowerCase().includes("mathis");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={fighter.image}
                    alt={`${fighter.name} ${fighter.nickname ? `"${fighter.nickname}"` : ''} - Combattant d'élite Grappling MMA Alpha Fight Club Saint-Ouen - ${fighter.belt} - ${fighter.weight}`}
                    className="w-full h-full object-cover"
                    style={isMathis ? { objectPosition: 'center 10%' } : undefined}
                    loading={idx < 3 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="bg-black/70 backdrop-blur-sm rounded-sm px-4 py-3 shadow-sm">
                      <p className="text-xs uppercase tracking-widest text-gray-200 mb-1">{fighter.weight}</p>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight text-white">
                        {fighter.name}
                      </h3>
                      {fighter.nickname && (
                        <p className="text-sm text-gray-200 mt-1">{fighter.nickname}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-[11px] uppercase text-gray-500 tracking-wide">Ceinture</div>
                      <div className="text-sm font-semibold text-black">{fighter.belt}</div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase text-gray-500 tracking-wide">Victoires</div>
                      <div className="text-sm font-semibold text-black">
                        {fighter.record.wins}
                      </div>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="bg-gray-50 border border-gray-100 rounded-sm p-3">
                    <p className="text-sm text-gray-700">{fighter.specialty}</p>
                  </div>

                  {/* Toggle Achievements */}
                  <button
                    onClick={() => toggleFighter(idx)}
                    className="w-full flex items-center justify-between text-left text-sm font-semibold text-black border border-gray-200 rounded-sm px-3 py-2 hover:bg-gray-50"
                  >
                    <span>{isExpanded ? "Masquer le palmarès" : "Afficher le palmarès"}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Achievements */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <div className="border border-gray-200 rounded-sm p-3 bg-white">
                          <h4 className="text-sm font-bold text-black mb-2">Palmarès</h4>
                          <ul className="space-y-2">
                            {fighter.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                {achievement}
                              </li>
                            ))}
                            {fighter.achievements.length === 0 && (
                              <li className="text-sm text-gray-500">À venir.</li>
                            )}
                          </ul>
                        </div>
                        <div className="border border-gray-200 rounded-sm p-3 bg-white">
                          <h4 className="text-sm font-bold text-black mb-2">Citation</h4>
                          <p className="text-sm text-gray-700 italic leading-relaxed">
                            "{fighter.quote}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Fighters;
