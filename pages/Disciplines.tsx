import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { REGISTRATION_LINK, PROGRAMS } from '../constants';
import seoConfig from '../seo-config';
import { ArrowRight, Shield, Users, Target } from 'lucide-react';

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
        <h2 className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
          L'art du combat au sol moderne
        </h2>
      </div>

      {/* Description Principale */}
      <Section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-4 md:mb-6">
                Qu'est-ce que le Grappling ?
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                {PROGRAMS[0].description}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                C'est un combat hybride pratiqué en short et rashguard, intégrant des techniques de lutte, de judo et de combat au sol (JJB). 
                Discipline gérée par la Fédération Française de Lutte et Disciplines Associées (FFLDA).
              </p>
            </div>
            <div className="relative order-first md:order-last">
              <img
                src={PROGRAMS[0].image}
                alt="Grappling No-Gi"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Points Clés */}
      <Section gray className="py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-black uppercase mb-8 md:mb-12 text-center">
            Pourquoi le Grappling ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Target,
                title: 'Technique avant Force',
                desc: 'La maîtrise technique prime sur la force brute. Accessible à tous les niveaux.'
              },
              {
                icon: Shield,
                title: 'Sans Impact',
                desc: 'Pratique sécurisée sans frappes, limitant les risques de blessures.'
              },
              {
                icon: Users,
                title: 'Mixte & Accessible',
                desc: 'Ouvert à tous dès 15 ans. Débutants bienvenus, progression adaptée.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-sm border-l-4 border-brand-red shadow-md"
              >
                <item.icon className="text-brand-red mb-3 md:mb-4" size={28} />
                <h3 className="font-display font-bold text-lg md:text-xl uppercase mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-8 md:py-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold uppercase mb-3 md:mb-4">
            Prêt à Commencer ?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8">
            Rejoignez-nous et découvrez le Grappling.<br/>
            Cours d'essai gratuit - Sans engagement.
          </p>
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-10 py-3 md:py-4 bg-brand-red text-white font-bold uppercase tracking-wider hover:bg-black transition-colors text-sm md:text-base"
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
