import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';

const ClubLife: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.clubLife} />
      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Vie du Club
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Stages, événements et esprit d'équipe en dehors du tatami.
        </p>
      </div>

      <Section className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-16 sm:mb-20 md:mb-24">
            <div className="order-2 md:order-1 px-4 sm:px-6 md:px-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4 sm:mb-6">Stages Techniques</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Nous organisons régulièrement des stages avec des experts internationaux pour perfectionner notre technique. 
                    Ces moments sont l'occasion d'échanger et de découvrir de nouvelles approches du combat.
                </p>
                <div className="inline-block bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold uppercase tracking-widest text-sm sm:text-base hover:bg-brand-red transition-colors rounded-sm">
                    Prochain stage : Juin 2024
                </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="relative p-3 sm:p-4 border-2 border-black rounded-sm">
                     <img src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800&auto=format&fit=crop" alt="Stage" className="w-full grayscale hover:grayscale-0 transition-all duration-500" />
                     <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-brand-red z-[-1]"></div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
                 <div className="relative p-3 sm:p-4 border-2 border-black rounded-sm">
                    <img src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop" alt="Event" className="w-full grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 z-[-1]"></div>
                 </div>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4 sm:mb-6">Événements Sociaux</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Après l'effort, le réconfort. Nous organisons des sorties, des repas d'équipe et des visionnages de combats UFC pour renforcer la cohésion du groupe en dehors du tatami.
                </p>
            </div>
        </div>
      </Section>
    </main>
  );
};

export default ClubLife;