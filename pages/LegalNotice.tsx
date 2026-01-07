import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Scale, Building2, Mail, Globe } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.legal} />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Mentions Légales
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
          Informations légales concernant le site Alpha Fight Club
        </p>
      </div>

      <Section gray className="pt-6 md:pt-10">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6">

          {/* Éditeur du site */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Building2 className="text-brand-red w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Éditeur du site</h2>
            </div>
            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p><strong className="text-black">Raison sociale :</strong> Alpha Fight Club</p>
              <p><strong className="text-black">Forme juridique :</strong> Association loi 1901</p>
              <p><strong className="text-black">Siège social :</strong><br/>
              Centre Sportif Pablo Neruda<br/>
              17 rue Salvador Allende<br/>
              93400 Saint-Ouen-sur-Seine</p>
              <p><strong className="text-black">Email :</strong> contact@alphafightclub.fr</p>
              <p><strong className="text-black">Directeur de publication :</strong> Théodore Aslamatzidis (Président)</p>
            </div>
          </div>

          {/* Hébergement */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Globe className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Hébergement</h2>
            </div>
            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>Le site est hébergé par :</p>
              <p><strong className="text-black">À compléter</strong><br/>
              [Nom de l'hébergeur]<br/>
              [Adresse de l'hébergeur]</p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Scale className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Propriété Intellectuelle</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite
                sauf autorisation expresse du directeur de la publication.
              </p>
              <p>
                Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la propriété intellectuelle
                et plus particulièrement par le droit d'auteur.
              </p>
            </div>
          </div>

          {/* Données personnelles */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Mail className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Protection des données</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : <strong className="text-black">contact@alphafightclub.fr</strong>
              </p>
              <p>
                Pour plus d'informations sur la protection de vos données, consultez notre{' '}
                <a href="/privacy" className="text-brand-red font-bold hover:underline">Politique de confidentialité</a>.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Cookies</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (navigation, session).
                Aucun cookie à des fins de tracking ou publicitaires n'est utilisé.
              </p>
            </div>
          </div>

          {/* Crédits */}
          <div className="bg-black text-white p-5 sm:p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase">Crédits</h2>
            </div>
            <div className="space-y-2 sm:space-y-3 leading-relaxed text-sm sm:text-base">
              <p><strong>Conception et développement :</strong> Alpha Fight Club</p>
              <p><strong>Photographies :</strong> Alpha Fight Club - Membres du club</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
                Dernière mise à jour : Décembre 2024
              </p>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
};

export default LegalNotice;
