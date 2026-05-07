import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled ? 'py-4 backdrop-blur-lg bg-black/50 border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#" className="font-syncopate text-xl font-bold tracking-tighter text-white">
          RV<span className="text-blue-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden text-white font-bold text-xs uppercase tracking-widest">
          Menu
        </div>
      </div>
    </motion.nav>
  );
};
