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

  // Block body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      // Block body scroll without changing position
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-[110] bg-white border-b border-gray-100 py-3 md:py-4 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src="/images/Logo-Club.jpeg"
            alt="Alpha Fight Club Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-200"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-display font-bold italic tracking-tighter uppercase flex items-center gap-1">
            <span className="text-brand-red">ALPHA</span>
            <span className="text-black">Fight Club</span>
          </span>
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
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors py-2 ${hoveredIndex === idx ? 'text-brand-red' : 'text-gray-600 hover:text-brand-red'
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
          <NavLink to="/contact" className="ml-4 bg-brand-red text-white px-4 md:px-6 py-2 md:py-2.5 font-display font-bold uppercase italic skew-x-[-10deg] hover:bg-black transition-colors shadow-lg text-xs md:text-sm">
            <span className="block skew-x-[10deg]">Essai Gratuit</span>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            className="absolute"
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-brand-red" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.4
            }}
            className="lg:hidden fixed top-[69px] right-0 w-full sm:w-96 h-[calc(100vh-69px)] bg-white shadow-2xl z-[100] overflow-y-auto"
          >
            <div className="p-4 space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="border-b border-gray-100 last:border-0 pb-1 last:pb-0"
                >
                  {item.children ? (
                    <div className="py-2">
                      <div className="text-sm font-display font-bold uppercase text-black mb-2 flex items-center gap-1.5">
                        <span className="w-0.5 h-4 bg-brand-red"></span>
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-1 pl-4 ml-0.5 border-l-2 border-brand-red/30">
                        {item.children.map((subItem, subIdx) => (
                          <motion.div
                            key={subIdx}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (idx * 0.05) + (subIdx * 0.03), duration: 0.2 }}
                          >
                            <NavLink
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 px-2 text-xs font-semibold text-gray-600 hover:text-brand-red hover:bg-gray-50 rounded-sm uppercase tracking-wider transition-all duration-200 group"
                            >
                              <span className="flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-brand-red/0 group-hover:bg-brand-red rounded-full transition-all duration-200"></span>
                                {subItem.label}
                              </span>
                            </NavLink>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2.5 px-2 text-sm font-display font-bold uppercase text-black hover:text-brand-red hover:bg-gray-50 rounded-sm transition-all duration-200 group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-0.5 h-4 bg-brand-red/0 group-hover:bg-brand-red transition-all duration-200"></span>
                        {item.label}
                      </span>
                    </NavLink>
                  )}
                </motion.div>
              ))}
              {/* Essai Gratuit Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.3 }}
                className="pt-4 mt-2 border-t border-gray-200"
              >
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-brand-red text-white px-4 py-3 font-display font-bold uppercase italic skew-x-[-10deg] hover:bg-black transition-colors shadow-lg text-sm text-center"
                >
                  <span className="block skew-x-[10deg]">Essai Gratuit</span>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;