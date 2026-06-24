import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
import PsiIcon from './PsiIcon';
import { CLINIC_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Dynamic active section on scroll
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('inicio')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <PsiIcon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-brand-dark leading-tight">
                  Centro de Especialidades
                </span>
                <span className="font-sans text-xs font-semibold tracking-wider text-brand-accent uppercase leading-none">
                  Psicológicas
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`font-sans text-sm font-medium transition-colors relative py-2 ${
                      activeSection === link.id
                        ? 'text-brand-green font-semibold'
                        : 'text-gray-600 hover:text-brand-green'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={() => handleNavClick('contacto')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green hover:bg-brand-dark text-white font-sans text-sm font-medium transition-colors shadow-sm hover:shadow group"
              >
                <Calendar size={15} className="group-hover:rotate-12 transition-transform" />
                Agendar Cita
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand-green p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown with motion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-b border-brand-light overflow-hidden shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-brand-light text-brand-green font-semibold border-l-4 border-brand-green'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-brand-green'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 px-3">
                  <button
                    onClick={() => handleNavClick('contacto')}
                    className="flex w-full items-center justify-center gap-2 px-4 py-3 rounded-full bg-brand-green hover:bg-brand-dark text-white font-sans font-medium text-center shadow-sm"
                  >
                    <Calendar size={16} />
                    Agendar Cita Hoy
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
