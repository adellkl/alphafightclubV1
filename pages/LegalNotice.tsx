import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Scale, Building2, Mail, Globe } from 'lucide-react';

const LegalNotice: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO
        title="Mentions Légales | Alpha Fight Club Saint-Ouen"
        description="Mentions légales du site Alpha Fight Club. Informations juridiques, éditeur du site, hébergement et propriété intellectuelle."
        keywords="mentions légales, alpha fight club, informations juridiques, éditeur site"
      />

      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Mentions Légales
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left">
          Informations légales concernant le site Alpha Fight Club
        </p>
      </div>

      <Section gray className="pt-10">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Éditeur du site */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-brand-red" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Éditeur du site</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
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
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Hébergement</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Le site est hébergé par :</p>
              <p><strong className="text-black">À compléter</strong><br/>
              [Nom de l'hébergeur]<br/>
              [Adresse de l'hébergeur]</p>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Propriété Intellectuelle</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
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
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Protection des données</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD),
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ce droit, vous pouvez nous contacter à l'adresse suivante : <strong className="text-black">contact@alphafightclub.fr</strong>
              </p>
              <p>
                Pour plus d'informations sur la protection de vos données, consultez notre{' '}
                <a href="/#/privacy" className="text-brand-red font-bold hover:underline">Politique de confidentialité</a>.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-display font-bold text-black uppercase">Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (navigation, session).
                Aucun cookie à des fins de tracking ou publicitaires n'est utilisé.
              </p>
            </div>
          </div>

          {/* Crédits */}
          <div className="bg-black text-white p-8 rounded-sm">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-display font-bold uppercase">Crédits</h2>
            </div>
            <div className="space-y-3 leading-relaxed">
              <p><strong>Conception et développement :</strong> Alpha Fight Club</p>
              <p><strong>Photographies :</strong> Alpha Fight Club - Membres du club</p>
              <p className="text-gray-400 text-sm mt-6">
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
