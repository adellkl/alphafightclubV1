import React, { useState } from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { COACHES } from '../constants';
import seoConfig from '../seo-config';

const Team: React.FC = () => {
  // Liste des images qui existent réellement
  const existingImages = [
    '/images/coatch/thomas-coach.webp'
  ];

  const hasImage = (imagePath: string) => {
    return existingImages.includes(imagePath);
  };

  return (
    <main className="pt-32">
      <SEO {...seoConfig.team} />
       {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          L'Équipe
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Nos coachs sont des passionnés expérimentés, prêts à vous accompagner.
        </p>
      </div>

      <Section className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {COACHES.map((coach, idx) => {
            const showImage = hasImage(coach.image);
            
            return (
              <div key={idx} className="group bg-white border-b-4 border-brand-red shadow-lg hover:shadow-2xl transition-all duration-300 rounded-sm">
                {showImage ? (
                  <>
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img 
                        src={coach.image} 
                        alt={`${coach.name} - ${coach.role} - Coach Grappling MMA JJB Saint-Ouen Alpha Fight Club 93`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        loading={idx < 2 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex items-end p-8">
                        {/* Overlay content if needed */}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 relative bg-white -mt-8 md:-mt-12 mx-3 md:mx-4 shadow-sm border border-gray-100">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase mb-2">{coach.name}</h3>
                      <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">{coach.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{coach.bio}</p>
                    </div>
                  </>
                ) : (
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-black uppercase mb-2">{coach.name}</h3>
                    <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">{coach.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{coach.bio}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Team;