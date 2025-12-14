import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.contact} />
       {/* Simple Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Contact
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
           Une question ? Envie de venir faire un essai ? Retrouvez toutes nos coordonnées.
        </p>
      </div>

      <Section className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-black uppercase mb-2">Centre Sportif Pablo Neruda</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    17 rue Salvador Allende<br/>
                    93400 Saint-Ouen
                  </p>
                  <div className="mt-3 inline-block bg-gray-100 px-3 py-1 text-xs font-bold uppercase text-brand-red tracking-wide border border-gray-200">
                     Métro 13 : Mairie de Saint-Ouen
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-black uppercase mb-2">Horaires</h4>
                  <p className="text-gray-600 text-lg">Mercredi & Vendredi : 20h00 - 22h00</p>
                  <p className="text-gray-600 text-lg">Dimanche : 10h00 - 13h00</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0 text-white shadow-xl group-hover:bg-brand-red transition-colors duration-300 rounded-sm">
                  <Facebook size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-black uppercase mb-2">Suivez-nous</h4>
                  <p className="text-gray-600 text-lg mb-2">Toute l'actualité du club.</p>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.facebook.com/home.php#!/Alphafightclub" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors">Facebook</a>
                    <a href="https://www.instagram.com/thomas_alpha_fight_club/" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors">Instagram</a>
                    <a href="https://www.youtube.com/channel/UCqAvUIFQ8abPvkdVqGMRXYQ" target="_blank" rel="noopener noreferrer" className="text-black font-bold uppercase border-b-2 border-brand-red hover:text-brand-red transition-colors">Youtube</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Map */}
          <div className="h-[500px] bg-gray-200 relative shadow-2xl border-4 border-white transform md:rotate-1 hover:rotate-0 transition-transform duration-500 rounded-sm overflow-hidden">
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
    </main>
  );
};

export default Contact;