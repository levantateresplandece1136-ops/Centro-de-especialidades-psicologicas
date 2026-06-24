import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import PsiIcon from './PsiIcon';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20"
    >
      {/* Background radial gradient decoration for "warm-clinical" feel */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-light/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-light/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Signature full-width Watermark Psi symbol - Rendered large, elegant, and low opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-brand-green w-full max-w-4xl px-4 flex items-center justify-center"
        >
          <PsiIcon size="100%" className="max-h-[60vh] max-w-[60vh] stroke-[0.7]" />
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-center flex flex-col items-center">
        {/* Subtle badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light text-brand-green font-sans text-xs font-semibold tracking-wider uppercase mb-6 border border-brand-green/10"
        >
          <Sparkles size={12} className="text-brand-accent animate-pulse" />
          Celaya, Guanajuato
        </motion.div>

        {/* Main Headline - Playfair Display for warmth & authority */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brand-dark tracking-tight leading-[1.1] max-w-4xl"
        >
          {CLINIC_INFO.tagline}
        </motion.h1>

        {/* Subheadline - Inter for extreme legibility & clean look */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-sans text-lg sm:text-xl md:text-2xl text-gray-600 font-normal max-w-3xl leading-relaxed"
        >
          {CLINIC_INFO.specialties}
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('contacto')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-green hover:bg-brand-dark text-white font-sans text-base font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 duration-200 flex items-center justify-center gap-2 group"
          >
            Agenda tu cita hoy
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo('servicios')}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gray-300 hover:border-brand-green bg-white hover:bg-brand-light/30 text-gray-700 hover:text-brand-green font-sans text-base font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 duration-200 flex items-center justify-center"
          >
            Conoce nuestros servicios
          </button>
        </motion.div>

        {/* Clinic features snippet */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-xs font-sans tracking-wide text-gray-400 uppercase flex items-center gap-6 flex-wrap justify-center"
        >
          <span>✦ Acompañamiento Profesional</span>
          <span className="hidden sm:inline">•</span>
          <span>✦ Enfoque Científico</span>
          <span className="hidden sm:inline">•</span>
          <span>✦ Espacio Confidencial y Humano</span>
        </motion.div>
      </div>
    </section>
  );
}
