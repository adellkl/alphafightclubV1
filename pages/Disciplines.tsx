import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { REGISTRATION_LINK } from '../constants';
import seoConfig from '../seo-config';
import {
  ArrowRight,
  ExternalLink,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
  Dumbbell,
  Brain,
  TrendingUp,
  Activity,
  Smile,
  UserPlus,
  Award,
  Check,
  Star,
  Baby,
  User,
  UserCog,
  Trophy,
  Flame
} from 'lucide-react';

const Disciplines: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string>('respect');

  const values = [
    {
      id: 'respect',
      icon: Heart,
      title: 'Le Respect',
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
      description: 'Au cœur de notre pratique, le respect mutuel entre les pratiquants est primordial. C\'est à travers la discipline et l\'écoute que nous construisons une communauté saine et bienveillante.',
      details: [
        'Respect des partenaires d\'entraînement',
        'Écoute des consignes du coach',
        'Bienveillance envers tous les niveaux',
        'Discipline dans la pratique'
      ]
    },
    {
      id: 'resilience',
      icon: Shield,
      title: 'La Résilience',
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
      description: 'Le grappling enseigne à surmonter les défis. Chaque défaite est une leçon, chaque victoire est une étape. Nous apprenons à nous relever, à nous adapter et à progresser constamment.',
      details: [
        'Apprentissage par l\'échec',
        'Capacité d\'adaptation',
        'Persévérance face aux difficultés',
        'Développement mental progressif'
      ]
    },
    {
      id: 'excellence',
      icon: Target,
      title: 'L\'Excellence Technique',
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
      description: 'Nous croyons que la technique prime la force. En maîtrisant les bonnes mouvements, même les plus faibles peuvent dominer les plus forts. C\'est la beauté et la philosophie du grappling.',
      details: [
        'Technique avant la force brute',
        'Précision des mouvements',
        'Efficacité maximale',
        'Perfectionnement continu'
      ]
    },
    {
      id: 'inclusion',
      icon: Users,
      title: 'L\'Inclusion',
      color: 'text-brand-red',
      bgColor: 'bg-red-50',
      description: 'Peu importe votre âge, votre sexe ou votre condition physique initiale, le grappling est pour vous. Nous accueillons débutants, amateurs et compétiteurs dans une atmosphère positive et motivante.',
      details: [
        'Ouvert à tous les âges et niveaux',
        'Mixité homme/femme',
        'Adaptation à chaque profil',
        'Ambiance conviviale et motivante'
      ]
    }
  ];

  const activeValueData = values.find(v => v.id === activeValue) || values[0];

  return (
    <main className="pt-32">
      <SEO {...seoConfig.disciplines} />

      {/* Simple Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-5xl font-display font-bold text-black uppercase mb-4 text-left">
          Le Grappling
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-6"></div>
        <p className="text-gray-500 text-lg max-w-2xl text-left mb-8">
          Un système moderne de lutte et de soumissions debout et au sol, porté par la Fédération Française de Lutte et Disciplines Associées, agrémenté par l'État.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand-red text-white font-bold uppercase text-sm tracking-widest hover:bg-black transition-colors inline-flex justify-center items-center gap-2"
          >
            S'inscrire au cours <ArrowRight size={16} />
          </a>
          <a
            href="https://www.fflutte.com/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-black text-black font-bold uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors inline-flex justify-center items-center gap-2"
          >
            Site Officiel FFLDA <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Section Valeurs - Layout Spécial */}
      <Section className="py-20">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-display font-bold text-black uppercase mb-4">
            Nos Valeurs Fondamentales
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Des principes qui guident notre pratique et notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Liste des Valeurs - Gauche */}
          <div className="space-y-4">
            {values.map((value, idx) => (
              <motion.button
                key={value.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveValue(value.id)}
                className={`w-full text-left p-6 rounded-sm transition-all duration-300 ${
                  activeValue === value.id
                    ? `${value.bgColor} border-l-4 border-brand-red shadow-lg`
                    : 'bg-gray-50 border-l-4 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${activeValue === value.id ? 'bg-white' : 'bg-gray-200'}`}>
                    <value.icon className={activeValue === value.id ? value.color : 'text-gray-400'} size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase text-black">
                      {value.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Détails de la Valeur - Droite */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${activeValueData.bgColor} p-8 rounded-sm border-2 border-brand-red`}
          >
            <div className="flex items-center gap-3 mb-6">
              <activeValueData.icon className={activeValueData.color} size={40} />
              <h3 className="font-display font-bold text-3xl uppercase text-black">
                {activeValueData.title}
              </h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {activeValueData.description}
            </p>

            <div className="space-y-3">
              {activeValueData.details.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="text-brand-red shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Avantages en Bento Grid */}
      <Section gray className="py-20">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-display font-bold text-black uppercase mb-4">
            Les Avantages du Grappling
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
        </div>

        {/* Avantages Physiques */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Dumbbell className="text-brand-red" size={32} />
            <h3 className="text-3xl font-display font-bold uppercase text-black">Avantages Physiques</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Zap, title: 'Force Musculaire Complète', desc: 'Sollicite tous les muscles du corps, créant un renforcement global harmonieux.' },
              { icon: Activity, title: 'Endurance Cardiovasculaire', desc: 'Amélioration de 30% de votre capacité cardiorespiratoire observée chez les pratiquants.' },
              { icon: TrendingUp, title: 'Souplesse et Mobilité', desc: 'Développement progressif de votre amplitude de mouvement et flexibilité.' },
              { icon: Flame, title: 'Perte de Poids', desc: 'Brûlez des calories en vous amusant et en apprenant.' },
              { icon: Shield, title: 'Sécurité Articulaire', desc: 'Pratique progressive qui protège vos articulations à long terme.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border-l-4 border-brand-red shadow-md hover:shadow-xl transition-all"
              >
                <item.icon className="text-brand-red mb-4" size={32} />
                <h4 className="font-display font-bold text-lg uppercase mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Avantages Mentaux */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-gray-700" size={32} />
            <h3 className="text-3xl font-display font-bold uppercase text-black">Avantages Mentaux</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Star, title: 'Confiance en Soi', desc: 'Développez une assurance inébranlable dans tous les domaines de la vie.' },
              { icon: Smile, title: 'Gestion du Stress', desc: 'Libération d\'endorphines naturelles évacuant tensions et anxiété.' },
              { icon: Target, title: 'Discipline', desc: 'Forgez votre volonté, concentration et rigueur personnelle.' },
              { icon: Zap, title: 'Décision Rapide', desc: 'Apprenez à analyser et adapter votre stratégie instantanément.' },
              { icon: Heart, title: 'Santé Mentale', desc: 'Thérapie physique complète et naturelle pour l\'équilibre mental.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border-l-4 border-gray-300 shadow-md hover:shadow-xl transition-all"
              >
                <item.icon className="text-gray-700 mb-4" size={32} />
                <h4 className="font-display font-bold text-lg uppercase mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Avantages Sociaux */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-brand-red" size={32} />
            <h3 className="text-3xl font-display font-bold uppercase text-black">Avantages Sociaux</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, title: 'Communauté Solidaire', desc: 'Rejoignez une famille partageant respect et persévérance.' },
              { icon: UserPlus, title: 'Sortir de l\'Isolement', desc: 'Créez des liens authentiques lors des entraînements.' },
              { icon: Heart, title: 'Rencontres Positives', desc: 'Connectez-vous avec des personnes motivées et bienveillantes.' },
              { icon: Award, title: 'Développement Personnel', desc: 'Opportunités en compétition, enseignement ou entrepreneuriat.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-sm border-l-4 border-brand-red shadow-md hover:shadow-xl transition-all"
              >
                <item.icon className="text-brand-red mb-4" size={32} />
                <h4 className="font-display font-bold text-lg uppercase mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pourquoi Choisir Notre Club */}
      <Section className="py-20">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-display font-bold text-black uppercase mb-4">
            Pourquoi Choisir Notre Club ?
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: UserPlus,
              title: 'Une Discipline Accessible',
              desc: 'Le grappling ne nécessite pas de prérequis. Que vous soyez complètement débutant ou athlète confirmé, notre club vous accueille et vous encadre selon votre niveau.'
            },
            {
              icon: Shield,
              title: 'Sans Impact, Sans Danger',
              desc: 'Contrairement aux sports de frappe, le grappling limite les risques de blessures graves. Nous travaillons progressivement, en respectant le rythme de chaque pratiquant.'
            },
            {
              icon: Award,
              title: 'Un Sport Moderne et Reconnu',
              desc: 'Agréé par la FFLDA et soutenu par l\'État, notre discipline jouit d\'une reconnaissance officielle et d\'une structure encadrée.'
            },
            {
              icon: Trophy,
              title: 'Tous les Types de Grappling',
              desc: 'NO-GI (sans kimono), GI (avec kimono), Fight (avec percussions) - Choisissez votre style.'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-sm border-2 border-gray-200 hover:border-brand-red transition-all shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-brand-red rounded-sm">
                  <item.icon className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl uppercase mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pour Qui */}
      <Section gray className="py-20">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-display font-bold text-black uppercase mb-4">
            Pour Qui ?
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Le grappling s'adresse à tous, quel que soit votre profil
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Baby, title: 'Les Jeunes', desc: 'Discipline, respect et développement équilibré' },
            { icon: User, title: 'Les Adultes', desc: 'Forme physique optimale et gestion du stress' },
            { icon: UserCog, title: 'Les Seniors', desc: 'Maintien de la condition physique sans impacts' },
            { icon: Trophy, title: 'Les Compétiteurs', desc: 'Entraînement sérieux vers les tournois officiels' },
            { icon: Heart, title: 'Les Loisirs', desc: 'Simple plaisir de pratiquer un art martial complet' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-sm shadow-lg hover:shadow-2xl hover:border-brand-red border-2 border-transparent transition-all text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                <item.icon className="text-gray-600" size={32} />
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="py-20 bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-display font-bold uppercase mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Rejoignez-nous et découvrez pourquoi le grappling transforme des vies.
            Cours d'essai gratuit - Sans engagement.
          </p>
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-brand-red text-white font-bold uppercase text-lg tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Réserver Mon Cours d'Essai
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Disciplines;
