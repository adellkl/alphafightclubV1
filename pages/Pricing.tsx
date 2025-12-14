import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { PRICING, REGISTRATION_LINK } from '../constants';
import seoConfig from '../seo-config';
import { Check, AlertCircle, MapPin, Calendar, Clock, FileText, Smartphone } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.pricing} />
      {/* Simple Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          S'inscrire
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Rejoignez l'Alpha Fight Club pour la saison 2025-2026.
        </p>
      </div>

      <Section gray className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Info Card (Left) */}
          <div className="bg-black text-white p-10 shadow-2xl relative overflow-hidden group rounded-sm flex flex-col gap-10">
             <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <MapPin size={200} />
             </div>

             {/* Block Infos */}
             <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold uppercase mb-8 border-b border-gray-700 pb-4 text-white">Infos Pratiques</h3>
                <div className="space-y-8">
                    <div className="flex gap-4">
                       <MapPin className="text-brand-red shrink-0 mt-1" size={24} />
                       <div>
                          <h4 className="font-bold uppercase text-lg text-white">Lieu</h4>
                          <p className="text-gray-300">Centre Sportif Pablo Neruda</p>
                          <p className="text-gray-400">17 rue Salvador Allende, 93400 Saint-Ouen</p>
                          <p className="text-brand-red text-sm font-bold mt-2">Métro 13 : Mairie de Saint-Ouen</p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <Clock className="text-brand-red shrink-0 mt-1" size={24} />
                       <div>
                          <h4 className="font-bold uppercase text-lg text-white">Horaires</h4>
                          <ul className="text-gray-300 space-y-1 mt-1">
                             <li><strong className="text-white">Mercredi & Vendredi :</strong> 20h00 - 22h00</li>
                             <li><strong className="text-white">Dimanche :</strong> 10h00 - 13h00 <span className="text-xs text-gray-500">(Compétiteurs)</span></li>
                          </ul>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <Calendar className="text-brand-red shrink-0 mt-1" size={24} />
                       <div>
                          <h4 className="font-bold uppercase text-lg text-white">Rentrée 2025</h4>
                          <p className="text-gray-300">Reprise des cours le <strong>Mercredi 3 Septembre 2025</strong>.</p>
                       </div>
                    </div>
                 </div>
             </div>

             {/* Block Documents */}
             <div className="relative z-10 pt-6 border-t border-gray-700">
                <h3 className="text-2xl font-display font-bold uppercase mb-6 flex items-center gap-3 text-white">
                    <FileText className="text-brand-red" />
                    Documents Requis
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                    <li className="flex items-center gap-3">
                        <Check size={16} className="text-brand-red" /> Certificat médical (Apitude sports de combat)
                    </li>
                    <li className="flex items-center gap-3">
                        <Check size={16} className="text-brand-red" /> Photo d'identité numérique
                    </li>
                    <li className="flex items-center gap-3">
                        <Check size={16} className="text-brand-red" /> Autorisation parentale (pour les mineurs)
                    </li>
                </ul>
             </div>
          </div>

          {/* Pricing & Digital Registration (Right) */}
          <div className="space-y-8">
            
            {/* Banner 100% Numérique */}
            <div className="bg-gradient-to-r from-brand-red to-red-800 text-white p-6 rounded-sm shadow-lg flex items-center gap-4 animate-pulse-slow">
                <div className="bg-white/20 p-3 rounded-full">
                    <Smartphone size={32} className="text-white" />
                </div>
                <div>
                    <h3 className="text-xl font-bold uppercase leading-none mb-1 text-white">Inscription 100% Numérique</h3>
                    <p className="text-white/90 text-sm">Plus de papier ! Inscrivez-vous directement en ligne.</p>
                </div>
            </div>

            {PRICING.map((plan, idx) => (
              <div key={idx} className={`bg-white p-8 border hover:border-brand-red shadow-sm hover:shadow-xl transition-all relative rounded-sm group ${plan.recommended ? 'border-brand-red ring-1 ring-brand-red/10' : 'border-gray-200'}`}>
                {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase">Habitant St-Ouen</div>
                )}
                
                <h3 className="text-2xl font-display font-bold uppercase mb-2 text-black">{plan.name}</h3>
                <div className="text-4xl font-bold text-brand-red mb-6">{plan.price} <span className="text-sm text-gray-400 font-normal">/ saison</span></div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Check size={20} className="text-brand-red shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-black text-white py-4 font-display font-bold uppercase tracking-widest hover:bg-brand-red transition-colors text-lg group-hover:shadow-lg"
                >
                  J'adhère !
                </a>
              </div>
            ))}
            
            <div className="bg-blue-50 p-6 border-l-4 border-blue-500 flex gap-4 rounded-sm">
                <AlertCircle className="text-blue-600 shrink-0" />
                <p className="text-sm text-blue-900 leading-relaxed">
                   <strong>Note :</strong> L'accès au cours compétition du dimanche matin est soumis à l'approbation du professeur principal.
                </p>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
};

export default Pricing;