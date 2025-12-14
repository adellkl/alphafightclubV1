import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { PROGRAMS, REGISTRATION_LINK } from '../constants';
import seoConfig from '../seo-config';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Disciplines: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.disciplines} />
      {/* Simple Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Nos Disciplines
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Découvrez le Grappling, un art martial moderne alliant lutte et soumission.
        </p>
      </div>

      <Section gray className="pt-10">
        <div className="space-y-20">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden shadow-2xl aspect-[4/3] group border-4 border-white rounded-sm">
                    <img
                        src={program.image}
                        alt="Grappling No-Gi Saint-Ouen - Technique de soumission - Combat au sol MMA JJB - Alpha Fight Club 93" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
                    />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-display font-bold text-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-12 h-2 bg-brand-red"></span>
                    {program.title}
                </h3>
                <div className="text-gray-600 text-lg leading-relaxed mb-8 space-y-4">
                  <p>
                    Le Grappling est un système moderne de lutte et de soumissions pratiqué debout et au sol. C'est un combat hybride sans kimono (No-Gi).
                  </p>
                  <p>
                     Il intègre les projections de la Lutte et du Judo, ainsi que le travail au sol du Jiu-Jitsu Brésilien (clés de bras, clés de jambes, étranglements).
                  </p>
                  <p className="font-bold text-black">
                     La discipline est gérée par la Fédération Française de Lutte et Disciplines Associées (FFLDA) et est un sport agréé par l'État.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href={REGISTRATION_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-brand-red text-white font-bold uppercase text-sm tracking-widest hover:bg-black transition-colors inline-flex justify-center items-center gap-2"
                    >
                        S'inscrire au cours <ArrowRight size={16} />
                    </a>
                    <a href="https://www.fflutte.com/" target="_blank" rel="noreferrer" className="px-8 py-4 border-2 border-black text-black font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors inline-flex justify-center items-center gap-2">
                        Site Officiel FFLDA <ExternalLink size={16} />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Disciplines;