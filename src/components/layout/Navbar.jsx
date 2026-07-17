import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/treatments', label: 'Treatments' },
  { path: '/doctors', label: 'Doctors' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/testimonials', label: 'Reviews' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl x-auto px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md transition-transform group-hover:scale-105">
            AM
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-textDark to-primary bg-clip-text text-transparent">
            A M Dental
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-slate-600 hover:text-primary hover:bg-white/50'
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <a href="tel:+919999999999" className="p-2.5 rounded-full glass-card hover:text-primary transition-colors">
            <Phone size={18} />
          </a>
          <Link to="/contact" className="flex items-center space-x-2 px-5 py-2.5 bg-textDark text-white font-medium text-sm rounded-full hover:bg-primary transition-colors shadow-sm">
            <Calendar size={16} />
            <span>Book Visit</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-xl glass-card text-textDark">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 glass-panel border-t border-slate-200/50 shadow-xl overflow-hidden lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive ? 'bg-primary text-white' : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <a href="tel:+919999999999" className="flex items-center justify-center space-x-2 p-3 glass-card rounded-xl text-primary font-medium">
                  <Phone size={18} />
                  <span>Call +91 99999 99999</span>
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center space-x-2 p-3 bg-primary text-white font-medium rounded-xl">
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}