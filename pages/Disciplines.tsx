import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { REGISTRATION_LINK, PROGRAMS } from '../constants';
import seoConfig from '../seo-config';
import { ArrowRight, Shield, Users, Target, Zap, Brain, Heart, Dumbbell, CheckCircle, Clock, MapPin } from 'lucide-react';

const Disciplines: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.disciplines} />

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Le Grappling
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
          L'art du combat au sol moderne
        </p>
      </div>

      {/* Description Principale */}
      <Section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4 md:mb-6">
                Qu'est-ce que le Grappling ?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                {PROGRAMS[0].description}
              </p>
                <p className="text-base">
                  Contrairement aux arts martiaux traditionnels, le Grappling se concentre sur le contrôle, 
                  les projections et les soumissions plutôt que sur les frappes. C'est une discipline technique 
                  où la stratégie et la maîtrise priment sur la force brute.
                </p>
                <p className="text-base">
                  Pratiqué en short et rashguard, le Grappling offre une liberté de mouvement totale et 
                  permet de développer une compréhension approfondie du combat au corps à corps.
                </p>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/3] overflow-hidden rounded-sm border border-gray-200 shadow-lg">
              <img
                src={PROGRAMS[0].image}
                alt="Grappling No-Gi - Techniques de combat au sol - Alpha Fight Club Saint-Ouen - Cours arts martiaux 93"
                className="w-full h-full object-cover"
                loading="eager"
              />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Techniques Principales */}
      <Section gray className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4">
              Les Fondamentaux du Grappling
          </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base">
              Le Grappling combine plusieurs disciplines pour créer un système de combat complet et efficace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Projections',
                desc: 'Techniques de lutte et de judo pour amener l\'adversaire au sol. Maîtrise du déséquilibre et de la prise de contrôle.',
                icon: Zap
              },
              {
                title: 'Contrôle au Sol',
                desc: 'Positions dominantes (montée, garde, dos) pour contrôler l\'adversaire et préparer les soumissions.',
                icon: Shield
              },
              {
                title: 'Soumissions',
                desc: 'Clés articulaires et étranglements pour forcer l\'abandon. Techniques de Jiu-Jitsu Brésilien adaptées au No-Gi.',
                icon: Target
              },
              {
                title: 'Transitions',
                desc: 'Passages fluides entre les positions. Développement de la fluidité et de la réactivité.',
                icon: Brain
              },
              {
                title: 'Défense',
                desc: 'Échappements, défense des soumissions et retournements. Apprentissage de la protection et de la contre-attaque.',
                icon: Shield
              },
              {
                title: 'Conditionnement',
                desc: 'Renforcement physique spécifique au combat au sol. Endurance, force et explosivité.',
                icon: Dumbbell
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border-l-4 border-brand-red shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon className="text-brand-red mb-3 md:mb-4" size={28} />
                <h3 className="font-display font-bold text-lg md:text-xl uppercase mb-2 md:mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Bienfaits */}
      <Section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4 text-center">
              Pourquoi Pratiquer le Grappling ?
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: 'Condition Physique Complète',
                  desc: 'Développement de la force, de l\'endurance, de la souplesse et de la coordination. Travail cardio-vasculaire intense.'
                },
                {
                  icon: Brain,
                  title: 'Développement Mental',
                  desc: 'Stratégie, anticipation et résolution de problèmes en temps réel. Renforcement de la confiance en soi.'
                },
                {
                  icon: Shield,
                  title: 'Sécurité & Self-Défense',
                  desc: 'Apprentissage de techniques de défense personnelle efficaces. Capacité à se protéger sans frappes.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <item.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Users,
                  title: 'Esprit d\'Équipe',
                  desc: 'Respect mutuel, humilité et entraide. Développement de valeurs humaines fortes dans un environnement bienveillant.'
                },
                {
                  icon: Target,
                  title: 'Progression Continue',
                  desc: 'Objectifs clairs et mesurables. Sentiment d\'accomplissement à chaque nouvelle technique maîtrisée.'
                },
                {
                  icon: Zap,
                  title: 'Gestion du Stress',
                  desc: 'Libération de l\'énergie et des tensions. Amélioration de la gestion émotionnelle et de la concentration.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <item.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase mb-2 text-black">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section Cours Enfants - Grappling, Jiu-Jitsu, Luta Livre */}
      <Section gray className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4">
              Cours Enfants : Grappling, Jiu-Jitsu & Luta Livre
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Alpha Fight Club propose des cours de Grappling, Jiu-Jitsu Brésilien No-Gi et Luta Livre pour les enfants de 6 à 14 ans à Saint-Ouen (93). L'un des meilleurs clubs de cours enfant grappling, jiu jitsu et luta livre en Île-de-France.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-sm border-l-4 border-blue-600 shadow-md">
              <h3 className="font-display font-bold text-lg uppercase mb-3 text-black">Cours Grappling pour Enfants</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Nos cours enfant grappling initient aux projections, au contrôle au sol et aux soumissions sans kimono. Ludique et adapté aux 6-14 ans.
              </p>
              <p className="text-sm font-semibold text-blue-600">Lundi 17h-18h (6-9 ans) • 18h-19h (10-14 ans)</p>
            </div>
            <div className="bg-white p-6 rounded-sm border-l-4 border-blue-600 shadow-md">
              <h3 className="font-display font-bold text-lg uppercase mb-3 text-black">Cours Jiu-Jitsu & Luta Livre pour Enfants</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Jiu-Jitsu Brésilien et Luta Livre pour enfants : techniques de combat au sol, lutte brésilienne No-Gi. Confiance en soi, discipline et respect.
              </p>
              <p className="text-sm font-semibold text-blue-600">Saint-Ouen • Métro 13 • Essai gratuit</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Équipement & Informations Pratiques */}
      <Section gray className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Équipement */}
            <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase mb-6">
                Matériel Nécessaire
              </h2>
              <div className="space-y-3">
                {[
                  'Rashguard (haut moulant) - Obligatoire',
                  'Short de Grappling - Sans fermetures éclair',
                  'Protège-dents - Recommandé'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-red shrink-0 mt-1" size={18} />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </div>
                ))}
                <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                  Le Grappling se pratique pieds nus sur un tatami. Pas de chaussures, pas de kimono. 
                  L'équipement est minimaliste pour favoriser la liberté de mouvement.
                </p>
              </div>
            </div>

            {/* Pour Qui */}
            <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-200 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black uppercase mb-6">
                Pour Qui ?
              </h2>
              <div className="space-y-3">
                {[
                  'Cours Enfants Grappling, Jiu-Jitsu & Luta Livre : 6-14 ans (lundis 17h-19h)',
                  'Cours Adultes : dès 15 ans (avec autorisation parentale)',
                  'Débutants absolus bienvenus',
                  'Hommes et femmes - Mixte',
                  'Tous les niveaux de condition physique',
                  'Pas de prérequis nécessaire'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-red shrink-0 mt-1" size={18} />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </div>
                ))}
                <p className="text-gray-600 text-sm mt-6 leading-relaxed">
                  Le Grappling s'adapte à chaque pratiquant. Les cours sont structurés pour permettre 
                  une progression individuelle dans un cadre collectif bienveillant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Informations Pratiques */}
      <Section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4">
              Horaires & Lieu
            </h2>
            <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black text-white p-6 rounded-sm shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-brand-red" size={20} />
                <h3 className="font-display font-bold text-lg uppercase text-white">Horaires</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1 text-blue-300">Lundi - Cours Enfants Grappling, Jiu-Jitsu & Luta Livre</p>
                  <p className="text-white">17h00 - 18h00 (6-9 ans)</p>
                  <p className="text-white">18h00 - 19h00 (10-14 ans)</p>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <p className="font-semibold mb-1 text-white">Mercredi & Vendredi</p>
                  <p className="text-white">20h00 - 22h00</p>
                  <p className="text-white text-xs mt-1">Tous niveaux</p>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <p className="font-semibold mb-1 text-white">Dimanche</p>
                  <p className="text-white">10h00 - 13h00</p>
                  <p className="text-white text-xs mt-1">Compétition (sur avis)</p>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-6 rounded-sm shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-brand-red" size={20} />
                <h3 className="font-display font-bold text-lg uppercase text-white">Lieu</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-semibold text-white">Centre Sportif Pablo Neruda</p>
                <p className="text-white">17 Rue Salvador Allende</p>
                <p className="text-white">93400 Saint-Ouen</p>
                <p className="text-white text-xs mt-3">Métro 13 - Mairie de Saint-Ouen (5 min à pied)</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section gray className="py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4">
            Prêt à Découvrir le Grappling ?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Rejoignez Alpha Fight Club et commencez votre parcours dans le Grappling.<br/>
            Cours d'essai gratuit - Sans engagement.
          </p>
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-brand-red text-white font-display font-bold uppercase tracking-wider hover:bg-black transition-colors text-sm md:text-base rounded-sm"
          >
            S'inscrire Maintenant
            <ArrowRight size={18} />
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Disciplines;
