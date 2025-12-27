import React from 'react';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { Shield, Eye, Lock, Database, Users, FileText } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.privacy} />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Politique de Confidentialité
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
          Protection de vos données personnelles et respect de votre vie privée
        </p>
      </div>

      <Section gray className="pt-6 md:pt-10">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6">

          {/* Introduction */}
          <div className="bg-brand-red text-white p-5 sm:p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Shield size={24} className="sm:w-8 sm:h-8" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase">Notre Engagement</h2>
            </div>
            <p className="leading-relaxed text-sm sm:text-base">
              Alpha Fight Club s'engage à protéger la confidentialité de vos données personnelles.
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations
              conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          {/* Responsable du traitement */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Users className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Responsable du traitement</h2>
            </div>
            <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p><strong className="text-black">Alpha Fight Club</strong><br/>
              Centre Sportif Pablo Neruda<br/>
              17 rue Salvador Allende<br/>
              93400 Saint-Ouen-sur-Seine</p>
              <p><strong className="text-black">Email :</strong> contact@alphafightclub.fr</p>
            </div>
          </div>

          {/* Données collectées */}
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Database className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" size={32} />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-black uppercase">Données collectées</h2>
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p className="font-bold text-black">Nous collectons uniquement les données nécessaires :</p>

              <div className="ml-2 sm:ml-4 space-y-3">
                <div>
                  <h3 className="font-bold text-black mb-2 text-sm sm:text-base">📋 Lors de l'inscription au club :</h3>
                  <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                    <li>Nom et prénom</li>
                    <li>Date de naissance</li>
                    <li>Adresse postale</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse email</li>
                    <li>Photo d'identité (pour la licence FFLDA)</li>
                    <li>Certificat médical</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2 text-sm sm:text-base">🌐 Navigation sur le site :</h3>
                  <ul className="list-disc ml-4 sm:ml-6 space-y-1 text-sm sm:text-base">
                    <li>Données de session (cookies techniques)</li>
                    <li>Adresse IP (logs serveur)</li>
                    <li>Pages consultées</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Finalités du traitement */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Utilisation des données</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="font-bold text-black">Vos données sont utilisées exclusivement pour :</p>

              <ul className="list-disc ml-6 space-y-2">
                <li>La gestion de votre adhésion au club</li>
                <li>L'établissement de votre licence sportive FFLDA</li>
                <li>La communication d'informations relatives au club (horaires, événements, compétitions)</li>
                <li>La gestion administrative et comptable de l'association</li>
                <li>Le respect des obligations légales et réglementaires</li>
              </ul>

              <p className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm">
                <strong className="text-black">Important :</strong> Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.
              </p>
            </div>
          </div>

          {/* Durée de conservation */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Durée de conservation</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>Vos données personnelles sont conservées pendant :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-black">Adhérents actifs :</strong> Durée de l'adhésion + 1 an</li>
                <li><strong className="text-black">Anciens adhérents :</strong> 3 ans après la dernière adhésion</li>
                <li><strong className="text-black">Documents comptables :</strong> 10 ans (obligation légale)</li>
                <li><strong className="text-black">Cookies de session :</strong> Durée de la session de navigation</li>
              </ul>
              <p className="mt-4">
                Au-delà de ces durées, vos données sont supprimées de manière sécurisée.
              </p>
            </div>
          </div>

          {/* Vos droits */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="text-brand-red" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Vos droits (RGPD)</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="font-bold text-black">Conformément au RGPD, vous disposez des droits suivants :</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">✅ Droit d'accès</h3>
                  <p className="text-xs sm:text-sm">Accéder à vos données personnelles</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">✏️ Droit de rectification</h3>
                  <p className="text-xs sm:text-sm">Corriger vos données inexactes</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">🗑️ Droit à l'effacement</h3>
                  <p className="text-xs sm:text-sm">Supprimer vos données</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">🚫 Droit d'opposition</h3>
                  <p className="text-xs sm:text-sm">Vous opposer au traitement</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">📦 Droit à la portabilité</h3>
                  <p className="text-xs sm:text-sm">Récupérer vos données</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded">
                  <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">⏸️ Droit à la limitation</h3>
                  <p className="text-xs sm:text-sm">Limiter le traitement</p>
                </div>
              </div>

              <div className="mt-6 bg-brand-red text-white p-6 rounded">
                <p className="font-bold mb-2">Pour exercer vos droits :</p>
                <p>📧 Email : <strong>contact@alphafightclub.fr</strong></p>
                <p className="text-sm mt-3 opacity-90">
                  Nous nous engageons à répondre dans un délai maximum d'un mois.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-display font-bold text-black uppercase">🍪 Cookies</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ce site utilise uniquement des <strong className="text-black">cookies techniques essentiels</strong> au bon fonctionnement :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-black">Cookies de session :</strong> Pour la navigation sur le site</li>
                <li><strong className="text-black">Préférences d'affichage :</strong> Animation du preloader (sessionStorage)</li>
              </ul>
              <p className="bg-green-50 border-l-4 border-green-500 p-4 text-sm">
                ✅ <strong className="text-black">Aucun cookie publicitaire ou de tracking</strong> n'est utilisé sur ce site.
              </p>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-gray-600" size={32} />
              <h2 className="text-3xl font-display font-bold text-black uppercase">Sécurité</h2>
            </div>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>La perte accidentelle</li>
                <li>L'utilisation ou l'accès non autorisé</li>
                <li>La modification ou la divulgation</li>
              </ul>
            </div>
          </div>

          {/* Contact CNIL */}
          <div className="bg-gray-100 p-8 rounded-sm border border-gray-300">
            <h3 className="font-bold text-black mb-3">📞 Réclamation auprès de la CNIL</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :<br/>
              <strong className="text-black">www.cnil.fr</strong>
            </p>
          </div>

          {/* Mise à jour */}
          <div className="bg-black text-white p-6 rounded-sm text-center">
            <p className="text-sm">
              Dernière mise à jour : <strong>Décembre 2024</strong>
            </p>
            <p className="text-xs mt-2 text-gray-400">
              Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications seront publiées sur cette page.
            </p>
          </div>

        </div>
      </Section>
    </main>
  );
};

export default Privacy;
