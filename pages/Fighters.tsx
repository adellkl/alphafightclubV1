import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Trophy, Medal, ChevronDown } from 'lucide-react';
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
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Nos Combattants d'Élite
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
          Les guerriers qui font la fierté de l'Alpha Fight Club. Champions. Compétiteurs. Légendes.
        </p>
      </div>

      {/* FIGHTERS LIST */}
      <Section gray className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {FIGHTERS_DATA.map((fighter, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white shadow-md rounded-sm overflow-hidden"
              >
                {/* Fighter Card */}
                <div className="relative">
                  {/* Image avec overlay gradient */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={fighter.image}
                      alt={`${fighter.name} - Combattant Grappling Alpha Fight Club`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Info overlay sur image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider mb-2">
                        {fighter.nickname}
                      </div>
                      <h3 className="text-3xl font-display font-bold uppercase mb-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9)' }}>
                        {fighter.name}
                      </h3>
                      <p className="text-gray-200 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{fighter.specialty}</p>
                    </div>
                  </div>

                  {/* Stats bar */}
                  <div className="bg-black text-white p-4">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-gray-400">Catégorie:</span>
                        <span className="font-bold ml-2">{fighter.weight}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Victoires:</span>
                        <span className="font-bold ml-2 text-green-400">{fighter.record.wins}</span>
                      </div>
                    </div>
                  </div>

                  {/* Belt info */}
                  <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="text-xs text-gray-500 uppercase">Grade</div>
                    <div className="font-bold text-brand-red">{fighter.belt}</div>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleFighter(idx)}
                    className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between border-t border-gray-200"
                  >
                    <span className="font-bold text-sm uppercase text-gray-700">
                      {isExpanded ? "Masquer le palmarès" : "Afficher le palmarès"}
                    </span>
                    <ChevronDown
                      className={`text-brand-red transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>
                </div>

                {/* Expandable Achievements */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 border-t border-gray-200">
                        {/* Achievements list */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Trophy className="text-yellow-600" size={20} />
                            <h4 className="font-display font-bold uppercase text-gray-900">Palmarès</h4>
                          </div>
                          <ul className="space-y-2">
                            {fighter.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                                <Medal className="text-brand-red shrink-0 mt-0.5" size={16} />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Quote */}
                        <div className="bg-white border-l-4 border-brand-red p-4 italic text-gray-700">
                          <p className="text-sm leading-relaxed">"{fighter.quote}"</p>
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

      {/* CALL TO ACTION */}
      <Section gray className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 text-lg mb-6">
            Vous souhaitez vous entraîner avec nos champions ?
          </p>
          <a
            href="/#/pricing"
            className="inline-block bg-black text-white px-8 py-3 font-bold uppercase text-sm tracking-wider hover:bg-brand-red transition-colors"
          >
            Voir les tarifs
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Fighters;
