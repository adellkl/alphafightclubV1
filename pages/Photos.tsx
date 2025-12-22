import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import seoConfig from '../seo-config';
import { Instagram, X } from 'lucide-react';

// Photos du club depuis le dossier images/insta
const CLUB_PHOTOS = [
  '/images/insta/531613204_18520256770007907_8549364080914176159_n..webp',
  '/images/insta/561501447_18531786697007907_1716523285305783474_n..jpg',
  '/images/insta/562776136_17997733769831064_7204937683214354968_n..webp',
  '/images/insta/563020894_17997733733831064_2412993592873034601_n..webp',
  '/images/insta/565096287_18533290318007907_2398988794238233058_n..webp',
  '/images/insta/572127678_17999949683831064_4556576617676400686_n..webp',
  '/images/insta/572136890_17999949605831064_2872212016790235713_n..webp',
  '/images/insta/572913096_17999949704831064_3738966706350703991_n..webp',
  '/images/insta/573626654_17999949623831064_3725110345491017770_n..webp',
  '/images/insta/584363708_18002313842831064_7590153648042110549_n..webp',
  '/images/insta/586243813_18002997911831064_5188299574086606178_n..webp',
  '/images/insta/586308196_18002313707831064_836195861680105401_n..webp',
  '/images/insta/586999423_18002313710831064_7283011729234997424_n..webp',
  '/images/insta/587268226_18002997887831064_5330261651318319392_n..webp',
  '/images/insta/587278136_18002997917831064_7711283162133838897_n..webp',
  '/images/insta/587285977_18002312054831064_8409044603678150778_n..webp',
  '/images/insta/587290984_18002313863831064_1319239101545951571_n..webp',
  '/images/insta/587297760_18002313692831064_7435129233032330190_n..webp',
  '/images/insta/587776548_18542843560007907_3654783473968760821_n..webp',
  '/images/insta/587778823_18542843563007907_3424829890969323806_n..jpg',
  '/images/insta/588665312_18002313845831064_5034459616968797775_n. (1).webp',
  '/images/insta/588665312_18002313845831064_5034459616968797775_n..webp',
  '/images/insta/590831518_18545175304007907_6622457472258366492_n..webp',
];

const Photos: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main className="pt-32">
      <SEO {...seoConfig.photos} />
      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
            Photos
          </h1>
          <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
             Suivez le quotidien du club sur Instagram <span className="text-brand-red font-bold">@thomas_alpha_fight_club</span>
          </p>
        </div>
        
        <a 
          href="https://www.instagram.com/thomas_alpha_fight_club/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white px-4 md:px-6 py-2.5 md:py-3 font-bold uppercase tracking-widest text-xs md:text-sm hover:opacity-90 transition-opacity rounded-sm flex items-center gap-2 shadow-lg"
        >
          <Instagram size={18} /> Suivre
        </a>
      </div>

      <Section gray className="pt-6 md:pt-10">
        {/* Grille mosaïque avec tailles variées */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[200px]">
          {CLUB_PHOTOS.map((photo, idx) => {
            // Pattern de tailles variées pour effet mosaïque
            let gridClasses = '';

            // Pattern: Grand, petit, petit, moyen, grand, petit...
            // Sur mobile, on simplifie la grille
            if (idx === 0) gridClasses = 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2';
            else if (idx === 1) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 2) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 3) gridClasses = 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1';
            else if (idx === 4) gridClasses = 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2';
            else if (idx === 5) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 6) gridClasses = 'col-span-1 row-span-2 sm:col-span-1 sm:row-span-2';
            else if (idx === 7) gridClasses = 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1';
            else if (idx === 8) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 9) gridClasses = 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2';
            else if (idx === 10) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 11) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 12) gridClasses = 'col-span-1 row-span-2 sm:col-span-1 sm:row-span-2';
            else if (idx === 13) gridClasses = 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1';
            else if (idx === 14) gridClasses = 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2';
            else if (idx === 15) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 16) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 17) gridClasses = 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1';
            else if (idx === 18) gridClasses = 'col-span-1 row-span-2 sm:col-span-1 sm:row-span-2';
            else if (idx === 19) gridClasses = 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2';
            else if (idx === 20) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 21) gridClasses = 'col-span-1 row-span-1';
            else if (idx === 22) gridClasses = 'col-span-2 row-span-1 sm:col-span-2 sm:row-span-1';

            return (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo)}
                className={`relative group overflow-hidden bg-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${gridClasses}`}
              >
                <img
                  src={photo}
                  alt={`Alpha Fight Club - Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedPhoto}
              alt="Alpha Fight Club"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Photos;