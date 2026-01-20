import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { ExternalLink } from 'lucide-react';

const Links: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.links} />
      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Liens Utiles
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Fédérations et partenaires institutionnels.
        </p>
      </div>

      <Section gray className="pt-6 md:pt-10">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-0">
            {[
                {
                  name: "Fédération Française de Lutte (FFLDA)",
                  url: "https://www.fflutte.com/"
                },
                {
                  name: "Comité Français de Grappling (CFG)",
                  url: "https://www.grappling-france.com/"
                },
                {
                  name: "International Brazilian Jiu-Jitsu Federation (IBJJF)",
                  url: "https://ibjjf.com/"
                },
                {
                  name: "United World Wrestling (UWW)",
                  url: "https://uww.org/"
                }
            ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex justify-between items-center group border-l-4 border-transparent hover:border-brand-red rounded-sm gap-4"
                >
                    <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-black uppercase break-words flex-1">{link.name}</span>
                    <ExternalLink size={20} className="sm:w-6 sm:h-6 text-gray-300 group-hover:text-brand-red transition-colors shrink-0" />
                </a>
            ))}
        </div>
      </Section>
    </main>
  );
};

export default Links;