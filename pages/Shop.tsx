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
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 mb-10 md:mb-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-black uppercase">
            Boutique
          </h1>
          <div className="w-20 h-1 bg-brand-red"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Rashguard, short et équipement officiel Alpha Fight Club. Disponible au club.
          </p>
        </div>
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
                  className="bg-white border border-gray-200 group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 rounded-md"
                >
                    {/* Image Container */}
                    <div className="aspect-square bg-gray-50 overflow-hidden relative">
                        <img
                          src={product.image}
                          alt={`${product.name} - Équipement Grappling MMA No-Gi - Alpha Fight Club Saint-Ouen`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                          {product.category}
                        </div>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 md:p-6 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display font-bold text-black text-lg md:text-xl uppercase leading-tight group-hover:text-brand-red transition-colors">
                            {product.name}
                          </h3>
                          <div className="text-right">
                            <div className="text-[11px] uppercase text-gray-500">Prix</div>
                            <div className="text-xl md:text-2xl font-bold text-brand-red">{product.price}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-3 py-2 rounded-sm w-fit">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Disponible au club
                        </div>

                        <button className="w-full bg-black text-white px-4 md:px-5 py-2.5 md:py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-all duration-200 rounded-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                            <ShoppingBag size={14} />
                            Commander au club
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 md:mt-16 max-w-3xl mx-auto px-4">
          <div className="bg-white border border-gray-200 p-5 md:p-6 shadow-sm rounded-md space-y-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-brand-red" size={18} />
              <h4 className="font-display font-bold text-base md:text-lg uppercase">Comment commander ?</h4>
            </div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Commandes directement au club auprès de l'accueil. Plusieurs tailles disponibles.
              Venez essayer sur place pour trouver la coupe parfaite.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Shop;