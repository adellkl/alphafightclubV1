import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Handshake } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { PARTNERS } from '../constants';
import seoConfig from '../seo-config';

const Partners: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.partners} />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase">
            Nos Partenaires
          </h1>
          <div className="w-20 h-1 bg-brand-red"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Des partenaires de confiance qui nous accompagnent dans notre développement et partagent nos valeurs d'excellence.
          </p>
        </motion.div>
      </div>

      <Section className="pt-6 md:pt-10">
        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16 md:mb-20">
          {PARTNERS.map((partner, idx) => (
            <motion.a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Logo Container */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 min-h-[200px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
                <img
                  src={partner.logo}
                  alt={`${partner.name} - Partenaire Alpha Fight Club Saint-Ouen - Club Grappling MMA 93`}
                  className="relative z-10 max-w-full max-h-24 md:max-h-28 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors duration-300 transform rotate-45 translate-x-8 -translate-y-8"></div>
              </div>

              {/* Partner Info */}
              <div className="p-5 md:p-6 border-t border-gray-100 bg-white">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-black text-base md:text-lg uppercase leading-tight group-hover:text-brand-red transition-colors flex-1">
                    {partner.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 group-hover:text-brand-red transition-colors flex-shrink-0"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Become Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-brand-black to-gray-900 text-white p-8 md:p-12 lg:p-16 rounded-lg relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-red-600 to-brand-red"></div>
            <div className="absolute top-4 left-4 w-2 h-2 bg-brand-red rounded-full"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-brand-red rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-brand-red/20 p-4 rounded-full">
                  <Handshake size={32} className="text-brand-red" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase mb-4 md:mb-6 text-white">
                Devenir Partenaire
              </h3>

              <p className="text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Vous souhaitez associer l'image de votre entreprise aux valeurs de combat, de respect et de dépassement de soi ?
                Rejoignez notre réseau de partenaires et soutenez un club d'excellence.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-8 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest text-sm md:text-base hover:bg-red-700 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Handshake size={18} />
                Nous contacter
              </Link>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
              }}></div>
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
};

export default Partners;