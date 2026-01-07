import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import DischargeForm from '../components/DischargeForm';

const Contact: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.contact} />
       {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Contact
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Une question ? Envie de venir faire un essai ? Retrouvez toutes nos coordonnées.
        </p>
      </div>

      <Section className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Info Side */}
          <div>
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <MapPin size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-black uppercase mb-2">Centre Sportif Pablo Neruda</h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    17 rue Salvador Allende<br/>
                    93400 Saint-Ouen
                  </p>
                  <div className="mt-2 sm:mt-3 inline-block bg-gray-100 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase text-brand-red tracking-wide border border-gray-200">
                     Métro 13 : Mairie de Saint-Ouen
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <Clock size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-black uppercase mb-2">Horaires</h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">Mercredi & Vendredi : 20h00 - 22h00</p>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">Dimanche : 10h00 - 13h00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-6 md:gap-8 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <Facebook size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-black uppercase mb-2">Suivez-nous</h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-2">Toute l'actualité du club.</p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
                    <a href="https://www.facebook.com/home.php#!/Alphafightclub" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors text-xs sm:text-sm">Facebook</a>
                    <a href="https://www.instagram.com/thomas_alpha_fight_club/" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors text-xs sm:text-sm">Instagram</a>
                    <a href="https://www.youtube.com/channel/UCqAvUIFQ8abPvkdVqGMRXYQ" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors text-xs sm:text-sm">Youtube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Map */}
          <div className="h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 relative shadow-2xl border-2 sm:border-4 border-white transform md:rotate-1 hover:rotate-0 transition-transform duration-500 rounded-sm overflow-hidden">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.367098485642!2d2.331200376483564!3d48.90835597133957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e632d431cdd%3A0x6336592231e33c2a!2sCentre%20sportif%20Pablo%20N%C3%A9ruda!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>
        </div>
      </Section>

      {/* Formulaire de décharge Open Mat */}
      <Section className="py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase mb-2">
              Formulaire de Décharge - Open Mat
            </h2>
            <div className="w-20 h-1 bg-brand-red mb-4"></div>
            <p className="text-gray-600 text-base">
              Les participants aux Open Mat du dimanche doivent remplir ce formulaire obligatoirement.
            </p>
          </div>
          <DischargeForm />
        </div>
      </Section>
    </main>
  );
};

export default Contact;