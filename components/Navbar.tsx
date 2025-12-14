import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-display font-bold italic tracking-tighter uppercase flex items-center gap-1 group">
          <span className="text-brand-red group-hover:scale-105 transition-transform">ALPHA</span> 
          <span className="text-black group-hover:text-gray-700 transition-colors">Fight Club</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="relative group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item.children ? (
                <button 
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors py-2 ${
                    hoveredIndex === idx ? 'text-brand-red' : 'text-gray-600 hover:text-brand-red'
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredIndex === idx ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `text-sm font-bold uppercase tracking-widest transition-colors block py-2 ${isActive ? 'text-brand-red' : 'text-gray-600 hover:text-brand-red'}`
                  }
                >
                  {item.label}
                </NavLink>
              )}

              {/* Dropdown Menu */}
              {item.children && (
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2 w-56"
                    >
                      <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden py-2">
                        {item.children.map((subItem, subIdx) => (
                          <NavLink
                            key={subIdx}
                            to={subItem.path}
                            className="block px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-brand-red transition-colors uppercase tracking-wider"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <NavLink to="/contact" className="ml-4 bg-brand-red text-white px-6 py-2.5 font-display font-bold uppercase italic skew-x-[-10deg] hover:bg-black transition-colors shadow-lg">
            <span className="block skew-x-[10deg]">Essai Gratuit</span>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[69px] left-0 w-full bg-white flex flex-col pt-4 overflow-y-auto h-[calc(100vh-69px)] border-t border-gray-100 pb-20"
          >
            {NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-gray-50 last:border-0">
                {item.children ? (
                  <div className="px-6 py-4">
                    <div className="text-lg font-display font-bold uppercase text-black mb-3">{item.label}</div>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-brand-red/20">
                      {item.children.map((subItem, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={subItem.path}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-semibold text-gray-500 hover:text-brand-red uppercase tracking-wider"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-lg font-display font-bold uppercase text-black hover:text-brand-red hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
             <div className="p-6">
               <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-red text-white px-8 py-4 font-display font-bold uppercase italic skew-x-[-10deg]">
                  <span className="block skew-x-[10deg]">Essai Gratuit</span>
                </NavLink>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;