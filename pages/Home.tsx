import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Clock, ChevronRight, Shield, Award, Medal, CheckCircle, FileText } from 'lucide-react';
import Section from '../components/Section';
import Preloader from '../components/Preloader';
import SEO from '../components/SEO';
import { REGISTRATION_LINK, COACHES } from '../constants';
import seoConfig from '../seo-config';

const Home: React.FC = () => {
  // Vérifier si c'est la première visite
  const isFirstVisit = !sessionStorage.getItem('hero-animated');

  // Si c'est la première visite, marquer comme animé
  if (isFirstVisit) {
    sessionStorage.setItem('hero-animated', 'true');
  }

  return (
    <main>
      <SEO {...seoConfig.home} />
      {/* Animation d'introduction active uniquement sur la Home */}
      <Preloader />

      {/* HERO BANNER COMPLEXE */}
      <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
        {/* Background layers */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Alpha Fight Club - Grappling"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-brand-red/40 mix-blend-multiply"></div>
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gradient-to-l from-black/70 to-transparent"></div>
          <motion.div
            className="absolute -left-20 -top-32 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full bg-brand-red/30 blur-3xl"
            animate={{ x: [0, 20, -10, 0], y: [0, -10, 15, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-120px] right-[-80px] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full bg-red-900/30 blur-3xl"
            animate={{ x: [0, -10, 10, 0], y: [0, 10, -15, 0] }}
            transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-16 pb-8 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-28 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-start lg:items-center">
            {/* Left column */}
            <motion.div
              initial={isFirstVisit ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6 order-1"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3 py-1.5 sm:py-2 rounded-sm backdrop-blur-sm text-xs sm:text-sm uppercase tracking-widest">
                Saison 2025-2026
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white uppercase leading-[1.1] sm:leading-[0.95] md:leading-[0.9] tracking-tight break-words">
                Alpha <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-red to-red-800">Fight</span> Club
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed pr-0 lg:pr-4">
                Grappling No-Gi à Saint-Ouen. Technique, intensité et pédagogie dans un club fondé en 2003.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-red text-white px-6 py-3 sm:py-4 font-display font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_25px_rgba(217,4,41,0.35)] flex items-center justify-center gap-2 rounded-sm w-full sm:w-auto"
                >
                  S'inscrire Maintenant
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/schedule"
                  className="px-6 py-3 sm:py-4 border border-white/40 text-white font-display font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 rounded-sm w-full sm:w-auto"
                >
                  Voir le Planning
                </Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN4JihjwitHvpGlFwis8nkiqBo3bc5rRmxiIpWk4hw8ZOKUA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 sm:py-4 border border-white/40 text-white font-display font-bold uppercase text-sm sm:text-base tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 rounded-sm w-full sm:w-auto"
                >
                  <FileText size={16} />
                  Décharge Open Mat
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white mt-2">
                <div className="bg-white/10 border border-white/10 rounded-sm p-3">
                  <div className="text-xs uppercase text-gray-300 mb-1">Lieu</div>
                  <div className="font-bold text-sm sm:text-base">Saint-Ouen (93)</div>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-sm p-3">
                  <div className="text-xs uppercase text-gray-300 mb-1">Horaires</div>
                  <div className="font-bold text-sm sm:text-base">Mer & Ven 20h-22h</div>
                </div>
                <div className="bg-white/10 border border-white/10 rounded-sm p-3">
                  <div className="text-xs uppercase text-gray-300 mb-1">Disciplines</div>
                  <div className="font-bold text-sm sm:text-base">Grappling / No-Gi</div>
                </div>
              </div>
            </motion.div>

            {/* Right column card */}
            <motion.div
              initial={isFirstVisit ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-5 order-2 w-full"
            >
              <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-md shadow-2xl p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs uppercase text-gray-500 tracking-widest">Essai gratuit</p>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-black">Réserve ton premier cours</h3>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-brand-red whitespace-nowrap">Semaine en cours</div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {["Mercredi 20h-22h", "Vendredi 20h-22h", "Dimanche 10h-13h"].map((slot, i) => (
                    <div key={i} className="flex items-center justify-between border border-gray-200 rounded-sm px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                        <span className="text-sm font-semibold text-black">{slot}</span>
                      </div>
                      <span className="text-xs text-gray-500">Saint-Ouen</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                  <p className="text-sm font-semibold text-black mb-1">Adresse</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Centre Sportif Pablo Neruda<br />
                    17 Rue Salvador Allende, 93400 Saint-Ouen<br />
                    Métro 13 — Mairie de Saint-Ouen
                  </p>
                </div>

                <a
                  href={REGISTRATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-brand-red text-white px-5 py-3 font-bold uppercase text-sm rounded-sm hover:bg-black transition-colors"
                >
                  Réserver mon essai
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bandeau d'infos défilant */}
        <div className="relative z-30 w-full bg-white/95 backdrop-blur border-t-4 border-brand-red py-3 sm:py-4 overflow-hidden mt-auto">
          {(() => {
            const items = [
              "Saint-Ouen (93) • Centre Pablo Neruda",
              "Mer & Ven 20h-22h",
              "Dimanche 10h-13h (compétition)",
              "Essai gratuit sans engagement",
              "No-Gi Only"
            ];
            const looped = [...items, ...items]; // duplication pour un défilement infini sans coupure
            return (
              <motion.div
                className="whitespace-nowrap flex gap-8 sm:gap-12 px-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" }}
              >
                {looped.map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-black font-display font-bold uppercase text-sm sm:text-base tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            );
          })()}
        </div>
      </div>

      {/* Intro Section - STYLE BENTO GRID */}
      <Section id="intro" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Bloc 1 : Main Text (Large) */}
          <div className="md:col-span-8 md:row-span-2 bg-white p-5 sm:p-6 md:p-8 lg:p-12 border border-gray-200 shadow-sm flex flex-col justify-center rounded-sm">
             <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-brand-red rounded-full animate-pulse"></span>
                <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm">Philosophie du Club</span>
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-black uppercase mb-3 sm:mb-4 md:mb-6 leading-[0.9]">
               L'Art du <span className="text-brand-red">Combat</span> <br/>Moderne
             </h2>
             <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
               <p>
                 <strong>Alpha Fight Club</strong> se consacre exclusivement au Grappling (No-Gi). C'est un combat hybride sans kimono, pur et technique, intégrant des projections de lutte et le travail au sol avec soumissions.
               </p>
               <p>
                 Loin des bagarres de rue, nous enseignons une science du mouvement. Le club est mixte, ouvert à tous dès 15 ans, et prône le respect, l'humilité et le dépassement de soi.
               </p>
             </div>
             <div className="mt-4 sm:mt-6 md:mt-8 flex gap-4">
                <Link to="/disciplines" className="inline-flex items-center gap-2 font-bold uppercase text-xs sm:text-sm md:text-base text-black border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
                  En savoir plus sur la discipline <ChevronRight size={14} className="sm:w-4 sm:h-4" />
                </Link>
             </div>
          </div>

          {/* Bloc 2 : Historical Stat (Black) */}
          <div className="md:col-span-4 bg-black text-white p-5 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center border-l-4 border-brand-red shadow-lg rounded-sm relative overflow-hidden group min-h-[250px] sm:min-h-[300px] md:min-h-0">
             <div className="absolute inset-0 bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl"></div>
             <Shield size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-48 lg:h-48 text-brand-red mb-2 sm:mb-3 md:mb-4" />
             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2">2003</div>
             <p className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs md:text-sm font-bold">Année de création</p>
             <p className="text-[10px] sm:text-xs text-gray-500 mt-2">Pionnier du Pankration en France</p>
          </div>

          {/* Bloc 3 : Image Visuelle */}
          <div className="md:col-span-2 bg-gray-200 relative overflow-hidden group rounded-sm min-h-[180px] sm:min-h-[200px] md:min-h-0">
             <img
               src="/images/illustration-grappling.png"
               alt="Grappling No-Gi - Combat au sol - Entraînement MMA Saint-Ouen"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-display font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase border-2 border-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rotate-[-5deg]">No-Gi Only</h3>
             </div>
          </div>

          {/* Bloc 4 : Affiliation (Red) */}
          <div className="md:col-span-2 bg-brand-red text-white p-4 sm:p-5 md:p-6 flex flex-col justify-between rounded-sm relative overflow-hidden min-h-[150px] sm:min-h-[180px] md:min-h-0">
             <CheckCircle className="absolute -right-4 -bottom-4 text-white/20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rotate-12" />
             <div>
                <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl uppercase mb-1">Affilié FFLDA</h3>
                <p className="text-white/80 text-xs sm:text-sm">Structure officielle agréée par l'État.</p>
             </div>
             <div className="mt-3 sm:mt-4">
               <a href={REGISTRATION_LINK} className="inline-block bg-white text-brand-red px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase rounded-sm hover:bg-black hover:text-white transition-colors">
                 Nous Rejoindre
               </a>
             </div>
          </div>

        </div>
      </Section>

      {/* Head Coach Highlight - STYLE PRO / CLEAN */}
      <Section className="!bg-zinc-950 py-10 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
        {/* Decor elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 skew-x-12 translate-x-32 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full md:w-5/12 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10 shadow-2xl group">
                 <img
                   src={COACHES[0].image}
                   alt="Thomas Le Godec - Professeur principal Grappling MMA Alpha Fight Club Saint-Ouen 93 - Champion de France - Ceinture Noire JJB"
                   className="w-full h-full object-cover transition-all duration-700 absolute inset-0"
                   loading="eager"
                 />
                 <img
                   src="/images/coatch/531613204_18520256770007907_8549364080914176159_n..webp"
                   alt="Thomas Le Godec en action - Coach Grappling MMA Alpha Fight Club Saint-Ouen 93"
                   className="w-full h-full object-cover transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100"
                   loading="lazy"
                 />
              </div>
              {/* Decor border behind */}
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-full h-full border-2 border-brand-red z-0"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-7/12 text-white">
               <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-6">
                   <span className="w-4 sm:w-6 md:w-8 h-1 bg-brand-red"></span>
                   <span className="font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm text-gray-400">Expertise & Pédagogie</span>
               </div>
               
               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-display font-bold uppercase mb-2 sm:mb-3 md:mb-4 leading-none text-white">
                  Thomas <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Le Godec</span>
               </h2>
               <p className="text-base sm:text-lg md:text-xl text-brand-red font-display font-bold uppercase tracking-wider mb-4 sm:mb-6 md:mb-8">
                  Head Coach • Ceinture Noire
               </p>

               <div className="border-l-2 border-gray-700 pl-3 sm:pl-4 md:pl-6 mb-4 sm:mb-6 md:mb-8">
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed italic">
                    "La technique l'emporte toujours sur la force brute. Fort de plus de 15 ans d'expérience, mon objectif est de transmettre un Grappling moderne, technique et efficace, dans le respect de l'intégrité de chacun."
                  </p>
               </div>

               {/* Certification Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-10">
                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-zinc-900 p-2.5 sm:p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Shield className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-[10px] sm:text-xs md:text-sm text-white">Diplômé d'État</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">BMF 2° Degré</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-zinc-900 p-2.5 sm:p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Medal className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-[10px] sm:text-xs md:text-sm text-white">Champion</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">Champion de France CFG</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-zinc-900 p-2.5 sm:p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Award className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0 w-4 h-4 sm:w-5 sm:h-5" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-[10px] sm:text-xs md:text-sm text-white">Ceinture Noire</h4>
                          <p className="text-[10px] sm:text-xs text-gray-500">Grappling & JJB</p>
                       </div>
                   </div>
               </div>

               <Link to="/team" className="inline-flex items-center gap-2 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all rounded-sm">
                  Découvrir le Staff <ArrowRight size={14} className="sm:w-4 sm:h-4" />
               </Link>
            </div>

          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;