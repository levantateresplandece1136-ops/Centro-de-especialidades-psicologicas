import React from 'react';
import { CLINIC_INFO } from '../data';
import PsiIcon from './PsiIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-dark text-brand-light py-16 border-t border-brand-green/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center border-b border-white/10 pb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div 
              onClick={handleScrollToTop}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm group-hover:scale-105 transition-transform duration-300">
                <PsiIcon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white leading-tight">
                  Centro de Especialidades
                </span>
                <span className="font-sans text-xs font-semibold tracking-wider text-brand-accent uppercase leading-none">
                  Psicológicas
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-brand-light/75 max-w-sm mt-2 leading-relaxed">
              Atención psicológica ética, profesional y científicamente fundada. Nuestro compromiso es acompañarte a construir una vida plena y con propósito.
            </p>
          </div>

          {/* Quick links & Details */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Contact details */}
            <div className="space-y-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-accent">Ubicación</h4>
              <p className="font-sans text-xs text-brand-light/80 leading-relaxed max-w-xs mx-auto sm:mx-0">
                {CLINIC_INFO.address}
              </p>
              <p className="font-sans text-xs text-brand-light/50">
                Celaya, Guanajuato, México.
              </p>
            </div>

            {/* Specialties taglines */}
            <div className="space-y-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-accent">Enfoque Clínico</h4>
              <ul className="font-sans text-xs text-brand-light/80 space-y-1">
                <li>• Terapia Cognitivo Conductual (TCC)</li>
                <li>• Terapia de Aceptación y Compromiso (ACT)</li>
                <li>• Mindfulness y Regulación Emocional</li>
                <li>• Psicoterapia basada en evidencia</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copy */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-sans text-xs text-brand-light/40">
            &copy; {currentYear} {CLINIC_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 font-sans text-xs text-brand-light/40">
            <a href="#contacto" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <span>•</span>
            <span>Cédula Profesional Especializada</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
