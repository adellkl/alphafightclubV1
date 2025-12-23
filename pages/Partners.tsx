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
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Partenaires
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Ils nous soutiennent dans notre développement.
        </p>
      </div>

      <Section className="pt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center max-w-4xl mx-auto">
            {PARTNERS.map((partner, idx) => (
                <a key={idx} href={partner.url} className="group flex flex-col items-center text-center p-8 border-2 border-transparent hover:border-gray-100 hover:shadow-2xl rounded-sm transition-all bg-white">
                    <img src={partner.logo} alt={`${partner.name} - Partenaire Alpha Fight Club Saint-Ouen - Club Grappling MMA`} className="w-32 h-32 object-contain mb-6 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" />
                    <h3 className="font-bold text-gray-400 uppercase tracking-widest group-hover:text-black transition-colors">{partner.name}</h3>
                </a>
            ))}
        </div>
        
        <div className="mt-20 bg-brand-black text-white p-12 text-center max-w-4xl mx-auto relative overflow-hidden rounded-sm">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-red"></div>
            <h3 className="text-3xl font-display font-bold uppercase mb-4 text-white">Devenir Partenaire</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Vous souhaitez associer l'image de votre entreprise aux valeurs de combat, de respect et de dépassement de soi ?
            </p>
            <a href="#/contact" className="inline-block border-2 border-white text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors rounded-sm">
                Nous contacter
            </a>
        </div>
      </Section>
    </main>
  );
};

export default Partners;