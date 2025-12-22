import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { PARTNERS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-100 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Structure 3 Colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* COLONNE 1 (GAUCHE) : Logo, Adresse & Réseaux Sociaux */}
          <div className="flex flex-col gap-4 md:gap-6">
            <NavLink to="/" className="text-2xl sm:text-3xl font-display font-bold italic uppercase">
              <span className="text-brand-red">Alpha</span> Fight Club
            </NavLink>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              <strong>Centre Sportif Pablo Neruda</strong><br/>
              17 Rue Salvador Allende<br/>
              93400 Saint-Ouen
            </p>

            <div className="flex gap-3 md:gap-4 mt-2">
              <a href="https://www.instagram.com/thomas_alpha_fight_club/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-gray-100 text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/home.php#!/Alphafightclub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-gray-100 text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCqAvUIFQ8abPvkdVqGMRXYQ" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-sm bg-gray-100 text-black flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* COLONNE 2 (CENTRE) : Liens Importants */}
          <div className="flex flex-col gap-4 sm:items-start lg:items-center">
             <div className="flex flex-col gap-4">
                <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest border-b border-gray-100 pb-2 mb-1">Accès Rapide</h4>
                <div className="flex flex-col gap-2">
                    <NavLink to="/schedule" className="font-bold uppercase text-sm hover:text-brand-red transition-colors">Planning Hebdomadaire</NavLink>
                    <NavLink to="/pricing" className="font-bold uppercase text-sm hover:text-brand-red transition-colors">Tarifs & Inscription</NavLink>
                    <NavLink to="/disciplines" className="font-bold uppercase text-sm hover:text-brand-red transition-colors">Le Grappling</NavLink>
                    <NavLink to="/contact" className="font-bold uppercase text-sm hover:text-brand-red transition-colors">Contact / Accès</NavLink>
                    <NavLink to="/team" className="font-bold uppercase text-sm hover:text-brand-red transition-colors">L'Équipe</NavLink>
                </div>
             </div>
          </div>

          {/* COLONNE 3 (DROITE) : Partenaires */}
          <div className="flex flex-col items-start sm:items-start lg:items-end gap-4">
             <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest border-b border-gray-100 pb-2 mb-1 w-full lg:w-auto text-left lg:text-right">Nos Partenaires</h4>
             <div className="flex flex-wrap justify-start lg:justify-end items-center gap-2 md:gap-3">
                {PARTNERS.map((partner, idx) => (
                  <a 
                    key={idx} 
                    href={partner.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group bg-white border border-gray-200 p-2 rounded-sm hover:border-brand-red transition-all w-16 h-10 md:w-20 md:h-12 flex items-center justify-center"
                    title={partner.name}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" 
                    />
                  </a>
                ))}
             </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3 md:gap-4">
           <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Alpha Fight Club. Association Loi 1901.</p>
           <div className="flex flex-wrap justify-center sm:justify-end gap-3 md:gap-4">
             <NavLink to="/legal" className="hover:text-black transition-colors">Mentions Légales</NavLink>
             <NavLink to="/privacy" className="hover:text-black transition-colors">Politique de confidentialité</NavLink>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;