import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { PARTNERS } from '../constants';
import seoConfig from '../seo-config';

const Partners: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.partners} />
      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Partenaires
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Ils nous soutiennent dans notre développement.
        </p>
      </div>

      <Section className="pt-6 md:pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 items-center max-w-4xl mx-auto">
            {PARTNERS.map((partner, idx) => (
                <a key={idx} href={partner.url} className="group flex flex-col items-center text-center p-4 sm:p-6 md:p-8 border-2 border-transparent hover:border-gray-100 hover:shadow-2xl rounded-sm transition-all bg-white">
                    <img src={partner.logo} alt={`${partner.name} - Partenaire Alpha Fight Club Saint-Ouen - Club Grappling MMA`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain mb-3 sm:mb-4 md:mb-6 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" />
                    <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs sm:text-sm group-hover:text-black transition-colors">{partner.name}</h3>
                </a>
            ))}
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 bg-brand-black text-white p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase mb-3 sm:mb-4 text-white">Devenir Partenaire</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Vous souhaitez associer l'image de votre entreprise aux valeurs de combat, de respect et de dépassement de soi ?
            </p>
            <a href="#/contact" className="inline-block border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-black transition-colors rounded-sm">
                Nous contacter
            </a>
        </div>
      </Section>
    </main>
  );
};

export default Partners;