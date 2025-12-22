import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Clock, ChevronRight, Shield, Award, Medal, CheckCircle } from 'lucide-react';
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

      {/* NOUVEAU HERO BANNER */}
      <div className="relative h-screen min-h-[600px] md:min-h-[800px] flex flex-col justify-center overflow-hidden bg-black">

        {/* 1. Image de fond sombre (Photo de Groupe) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Club Grappling MMA Saint-Ouen - Alpha Fight Club - Équipe de combattants en No-Gi"
            className="w-full h-full object-cover object-center opacity-30 grayscale"
          />
          {/* Gradients pour fondre l'image et assombrir pour le texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>

        {/* 2. TEXTE GÉANT DÉFILANT (Outline Style) - Arrière-plan */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden z-0 opacity-20 select-none pointer-events-none hidden md:block">
          <motion.div
            className="whitespace-nowrap flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
             {/* Répétition du texte pour le flux continu */}
             {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-[15vh] md:text-[20vh] leading-none font-display font-bold uppercase text-transparent px-6 md:px-10" style={{ WebkitTextStroke: "2px rgba(255,255,255, 0.5)" }}>
                  GRAPPLING • LUTA LIVRE • WRESTLING • SAINT-OUEN •
                </div>
             ))}
          </motion.div>
        </div>

        {/* 3. Contenu Principal (Au premier plan) */}
        <div className="container mx-auto px-4 sm:px-6 z-10 relative pt-20 md:pt-10">
          <motion.div
            initial={isFirstVisit ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isFirstVisit ? { duration: 0.8, ease: "easeOut", delay: 1.2 } : { duration: 0 }}
            className="max-w-5xl"
          >
            {/* Petit badge supérieur */}
            <div className="inline-flex items-center gap-2 border border-brand-red/50 bg-black/50 backdrop-blur-md text-white px-3 md:px-4 py-2 font-display font-bold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Saison 2025-2026
            </div>
            
            {/* Titre Principal */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-display font-bold text-white uppercase leading-[0.85] tracking-tighter mb-6 md:mb-8 drop-shadow-2xl">
              Alpha <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-red to-red-800">Fight</span><br/>
              Club
            </h1>
            
            {/* Sous-titre */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-xl border-l-4 border-brand-red pl-4 md:pl-6 mb-8 md:mb-12 leading-relaxed">
              L'excellence du <strong>Grappling</strong> à Saint-Ouen. <br className="hidden sm:block"/>
              Technique. Combat. Performance.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
               <a 
                href={REGISTRATION_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 md:px-10 py-4 md:py-5 font-display font-bold uppercase text-base md:text-lg tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(217,4,41,0.4)] flex items-center justify-center gap-3 group"
               >
                  S'inscrire Maintenant
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </a>
               <Link 
                to="/schedule" 
                className="px-6 md:px-10 py-4 md:py-5 border border-white/30 text-white font-display font-bold uppercase text-base md:text-lg tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
               >
                  Voir le Planning
               </Link>
            </div>
          </motion.div>
        </div>

        {/* 4. Scroll Banner (Informations défilantes en bas) */}
        <div className="absolute bottom-0 w-full bg-white border-t-4 border-brand-red py-3 md:py-4 z-20 shadow-2xl hidden sm:block">
           <motion.div 
            className="whitespace-nowrap flex gap-8 md:gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-6 md:gap-12">
                 <div className="flex items-center gap-2 md:gap-3 text-black font-display font-bold uppercase text-sm md:text-lg tracking-wider">
                    <MapPin className="text-brand-red" size={20} />
                    <span className="hidden md:inline">17 Rue Salvador Allende, Saint-Ouen</span>
                    <span className="md:hidden">Saint-Ouen</span>
                 </div>
                 <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                 <div className="flex items-center gap-2 md:gap-3 text-black font-display font-bold uppercase text-sm md:text-lg tracking-wider">
                    <Clock className="text-brand-red" size={20} />
                    <span>Mer & Ven 20h-22h</span>
                 </div>
                 <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                 <div className="flex items-center gap-2 md:gap-3 text-black font-display font-bold uppercase text-sm md:text-lg tracking-wider">
                    <Calendar className="text-brand-red" size={20} />
                    <span className="hidden md:inline">Reprise le 3 Septembre</span>
                    <span className="md:hidden">3 Sept</span>
                 </div>
                 <div className="w-8 md:w-12 h-[2px] bg-brand-red"></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Intro Section - STYLE BENTO GRID */}
      <Section id="intro" className="bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Bloc 1 : Main Text (Large) */}
          <div className="md:col-span-8 md:row-span-2 bg-white p-6 sm:p-8 md:p-12 border border-gray-200 shadow-sm flex flex-col justify-center rounded-sm">
             <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="w-3 h-3 bg-brand-red rounded-full animate-pulse"></span>
                <span className="text-brand-red font-bold uppercase tracking-widest text-xs md:text-sm">Philosophie du Club</span>
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-black uppercase mb-4 md:mb-6 leading-[0.9]">
               L'Art du <span className="text-brand-red">Combat</span> <br/>Moderne
             </h2>
             <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
               <p>
                 <strong>Alpha Fight Club</strong> se consacre exclusivement au Grappling (No-Gi). C'est un combat hybride sans kimono, pur et technique, intégrant des projections de lutte et le travail au sol avec soumissions.
               </p>
               <p>
                 Loin des bagarres de rue, nous enseignons une science du mouvement. Le club est mixte, ouvert à tous dès 15 ans, et prône le respect, l'humilité et le dépassement de soi.
               </p>
             </div>
             <div className="mt-6 md:mt-8 flex gap-4">
                <Link to="/disciplines" className="inline-flex items-center gap-2 font-bold uppercase text-sm md:text-base text-black border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
                  En savoir plus sur la discipline <ChevronRight size={16} />
                </Link>
             </div>
          </div>

          {/* Bloc 2 : Historical Stat (Black) */}
          <div className="md:col-span-4 bg-black text-white p-6 md:p-8 flex flex-col justify-center items-center text-center border-l-4 border-brand-red shadow-lg rounded-sm relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-red/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-3xl"></div>
             <Shield size={40} className="md:size-48 text-brand-red mb-3 md:mb-4" />
             <div className="text-4xl md:text-6xl font-display font-bold mb-2">2003</div>
             <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm font-bold">Année de création</p>
             <p className="text-xs text-gray-500 mt-2">Pionnier du Pankration en France</p>
          </div>

          {/* Bloc 3 : Image Visuelle */}
          <div className="md:col-span-2 bg-gray-200 relative overflow-hidden group rounded-sm min-h-[200px] md:min-h-0">
             <img
               src="/images/illustration-grappling.png"
               alt="Grappling No-Gi - Combat au sol - Entraînement MMA Saint-Ouen"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-display font-bold text-lg md:text-2xl uppercase border-2 border-white px-3 md:px-4 py-2 rotate-[-5deg]">No-Gi Only</h3>
             </div>
          </div>

          {/* Bloc 4 : Affiliation (Red) */}
          <div className="md:col-span-2 bg-brand-red text-white p-5 md:p-6 flex flex-col justify-between rounded-sm relative overflow-hidden">
             <CheckCircle className="absolute -right-4 -bottom-4 text-white/20 w-24 h-24 md:w-32 md:h-32 rotate-12" />
             <div>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase mb-1">Affilié FFLDA</h3>
                <p className="text-white/80 text-xs md:text-sm">Structure officielle agréée par l'État.</p>
             </div>
             <div className="mt-4">
               <a href={REGISTRATION_LINK} className="inline-block bg-white text-brand-red px-3 md:px-4 py-2 text-xs font-bold uppercase rounded-sm hover:bg-black hover:text-white transition-colors">
                 Nous Rejoindre
               </a>
             </div>
          </div>

        </div>
      </Section>

      {/* Head Coach Highlight - STYLE PRO / CLEAN */}
      <Section className="!bg-zinc-950 py-12 md:py-24 relative overflow-hidden">
        {/* Decor elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 skew-x-12 translate-x-32 z-0 hidden lg:block"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full md:w-5/12 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10 shadow-2xl group">
                 <img
                   src={COACHES[0].image}
                   alt="Thomas Le Godec - Professeur Grappling MMA Saint-Ouen - Champion de France - Ceinture Noire JJB"
                   className="w-full h-full object-cover transition-all duration-700 absolute inset-0"
                 />
                 <img
                   src="/images/coatch/531613204_18520256770007907_8549364080914176159_n..webp"
                   alt="Thomas Le Godec - Professeur Grappling MMA Saint-Ouen - Champion de France - Ceinture Noire JJB"
                   className="w-full h-full object-cover transition-all duration-700 absolute inset-0 opacity-0 group-hover:opacity-100"
                 />
              </div>
              {/* Decor border behind */}
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-full h-full border-2 border-brand-red z-0"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-7/12 text-white">
               <div className="flex items-center gap-2 mb-4 md:mb-6">
                   <span className="w-6 md:w-8 h-1 bg-brand-red"></span>
                   <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-gray-400">Expertise & Pédagogie</span>
               </div>
               
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase mb-3 md:mb-4 leading-none text-white">
                  Thomas <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Le Godec</span>
               </h2>
               <p className="text-lg md:text-xl text-brand-red font-display font-bold uppercase tracking-wider mb-6 md:mb-8">
                  Head Coach • Ceinture Noire
               </p>

               <div className="border-l-2 border-gray-700 pl-4 md:pl-6 mb-6 md:mb-8">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed italic">
                    "La technique l'emporte toujours sur la force brute. Fort de plus de 15 ans d'expérience, mon objectif est de transmettre un Grappling moderne, technique et efficace, dans le respect de l'intégrité de chacun."
                  </p>
               </div>

               {/* Certification Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                   <div className="flex items-center gap-3 md:gap-4 bg-zinc-900 p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Shield className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-xs md:text-sm text-white">Diplômé d'État</h4>
                          <p className="text-xs text-gray-500">BMF 2° Degré</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-3 md:gap-4 bg-zinc-900 p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Medal className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-xs md:text-sm text-white">Champion</h4>
                          <p className="text-xs text-gray-500">Champion de France CFG</p>
                       </div>
                   </div>
                   <div className="flex items-center gap-3 md:gap-4 bg-zinc-900 p-3 md:p-4 border border-zinc-800 rounded-sm hover:border-brand-red transition-colors group">
                       <Award className="text-gray-500 group-hover:text-brand-red transition-colors shrink-0" size={20} />
                       <div>
                          <h4 className="font-bold uppercase text-xs md:text-sm text-white">Ceinture Noire</h4>
                          <p className="text-xs text-gray-500">Grappling & JJB</p>
                       </div>
                   </div>
               </div>

               <Link to="/team" className="inline-flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all rounded-sm">
                  Découvrir le Staff <ArrowRight size={16} />
               </Link>
            </div>

          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;