import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  // On divise l'écran en 5 colonnes verticales
  const columns = 5;

  // Vérifier si le preloader a déjà été affiché dans cette session
  const hasSeenPreloader = sessionStorage.getItem('preloader-shown');

  // Si déjà affiché, ne rien montrer
  if (hasSeenPreloader) {
    return null;
  }

  // Marquer comme affiché
  sessionStorage.setItem('preloader-shown', 'true');

  return (
    // z-[9999] pour passer au-dessus de la Navbar (z-50)
    // pointer-events-none sur le conteneur pour ne pas bloquer le site une fois l'animation finie
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen pointer-events-none">
      {[...Array(columns)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1, // Durée de la montée
            ease: [0.76, 0, 0.24, 1], // Courbe "ease-in-out" fluide
            delay: 0.2 + (i * 0.1), // Délai initial + décalage progressif par colonne
          }}
          // pointer-events-auto sur les blocs pour cacher le site tant qu'ils sont là
          className="h-full w-full bg-neutral-950 relative pointer-events-auto border-r border-neutral-900 last:border-r-0"
        >
            {/* Liseré rouge en bas du bloc pour le style */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red shadow-[0_0_15px_rgba(217,4,41,0.6)]"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Preloader;