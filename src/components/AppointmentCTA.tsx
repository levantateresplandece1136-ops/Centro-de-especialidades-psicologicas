import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import PsiIcon from './PsiIcon';

export default function AppointmentCTA() {
  return (
    <section className="relative bg-brand-green text-white py-20 md:py-24 overflow-hidden z-10">
      {/* Dynamic graphic details in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -right-16 -top-16 w-96 h-96 border-4 border-white rounded-full" />
        <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] border border-white/40 rounded-full" />
        <div className="absolute right-1/4 bottom-1/4 text-white">
          <PsiIcon size={300} strokeWidth={0.5} />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          {/* Calendar Check Icon */}
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
            <CalendarCheck size={26} className="text-white animate-bounce" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            Da el primer paso hacia tu bienestar
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg text-brand-light/90 max-w-2xl leading-relaxed">
            Agenda una cita hoy, la primera sesión es una evaluación sin compromiso. Permítenos acompañarte en tu proceso psicoterapéutico.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            {/* Llámanos now Button (White button, green text as requested) */}
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-brand-green hover:bg-brand-light font-sans text-base font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200 w-full sm:w-auto justify-center"
            >
              <Phone size={18} className="shrink-0" />
              Llámanos ahora: {CLINIC_INFO.phone}
            </a>

            {/* Alternativo: WhatsApp direct click */}
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-dark/40 hover:bg-brand-dark/60 text-white font-sans text-base font-semibold border border-white/20 transition-all hover:-translate-y-0.5 active:translate-y-0 duration-200 w-full sm:w-auto justify-center"
            >
              <span>O envíanos un WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
