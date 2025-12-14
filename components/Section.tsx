import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gray?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, gray = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 relative overflow-hidden ${gray ? 'bg-brand-gray' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;