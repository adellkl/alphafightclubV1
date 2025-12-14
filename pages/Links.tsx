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
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Liens Utiles
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Fédérations et partenaires institutionnels.
        </p>
      </div>

      <Section gray className="pt-10">
        <div className="max-w-3xl mx-auto space-y-4">
            {[
                "Fédération Française de Lutte (FFL)",
                "Comité Français de Grappling (CFG)",
                "International Brazilian Jiu-Jitsu Federation (IBJJF)",
                "United World Wrestling (UWW)"
            ].map((link, idx) => (
                <a key={idx} href="#" className="block bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex justify-between items-center group border-l-4 border-transparent hover:border-brand-red rounded-sm">
                    <span className="font-bold text-lg text-gray-800 group-hover:text-black uppercase">{link}</span>
                    <ExternalLink size={24} className="text-gray-300 group-hover:text-brand-red transition-colors" />
                </a>
            ))}
        </div>
      </Section>
    </main>
  );
};

export default Links;