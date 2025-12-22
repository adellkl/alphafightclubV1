import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { PRODUCTS } from '../constants';
import seoConfig from '../seo-config';
import { ShoppingBag } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <main className="pt-32">
      <SEO {...seoConfig.shop} />
      {/* Simple Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase mb-3 md:mb-4 text-left">
          Boutique
        </h1>
        <div className="w-20 h-1 bg-brand-red mb-4 md:mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl text-left">
           Équipements officiels du club.
        </p>
      </div>

      <Section gray className="pt-6 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 rounded-sm"
                >
                    {/* Image Container */}
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={`${product.name} - Équipement Grappling MMA No-Gi - Alpha Fight Club Saint-Ouen`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider shadow-lg">
                          {product.category}
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 md:p-6">
                        <h3 className="font-display font-bold text-black text-xl md:text-2xl uppercase mb-2 md:mb-3 group-hover:text-brand-red transition-colors">
                          {product.name}
                        </h3>

                        {/* Price & CTA */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4 md:mt-6 pt-4 border-t-2 border-gray-100">
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Prix</p>
                              <span className="text-2xl md:text-3xl font-bold text-brand-red">{product.price}</span>
                            </div>
                            <button className="w-full sm:w-auto bg-black text-white px-4 md:px-6 py-2.5 md:py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-300 rounded-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                                <ShoppingBag size={14} />
                                Commander
                            </button>
                        </div>

                        {/* Availability */}
                        <div className="mt-3 md:mt-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">Disponible au club</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 md:mt-16 max-w-3xl mx-auto px-4">
          <div className="bg-white border-l-4 border-brand-red p-4 md:p-6 shadow-md rounded-sm">
            <div className="flex items-start gap-3 md:gap-4">
              <ShoppingBag className="text-brand-red shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-display font-bold text-base md:text-lg uppercase mb-2">Comment commander ?</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Les commandes se font directement au club auprès de l'accueil.
                  Nos équipements sont disponibles en plusieurs tailles.
                  Venez essayer sur place pour trouver la taille parfaite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Shop;