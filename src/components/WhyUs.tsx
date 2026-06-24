import React from 'react';
import { motion } from 'motion/react';
import { WHY_US } from '../data';
import IconRenderer from './IconRenderer';
import PsiIcon from './PsiIcon';

export default function WhyUs() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-brand-light/30 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Clinic Narrative & Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-green/10 px-3 py-1.5 rounded-full">
              ¿Por qué elegirnos?
            </span>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight leading-tight">
              Acompañamiento clínico de excelencia
            </h2>
            <div className="mt-4 w-12 h-1 bg-brand-green rounded-full" />
            
            <p className="mt-6 font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
              En el <strong>Centro de Especialidades Psicológicas</strong> de Celaya, entendemos que dar el paso hacia la terapia requiere confianza y valentía. Por eso, nuestro enfoque va más allá de escuchar de manera empática: nos comprometemos a brindarte herramientas prácticas y eficaces que impacten de forma medible en tu calidad de vida.
            </p>
            
            <p className="mt-4 font-sans text-sm sm:text-base text-gray-600 leading-relaxed">
              Trabajamos desde modelos psicoterapéuticos contemporáneos centrados en el desarrollo de la flexibilidad psicológica, ayudándote a construir una vida plena y con dirección.
            </p>

            {/* Decorative stamp seal illustration */}
            <div className="mt-8 flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-brand-green/10 max-w-sm">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-brand-green/40 flex items-center justify-center text-brand-green">
                <PsiIcon size={20} className="animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm font-bold text-brand-dark">Sello de Calidad CEP</span>
                <span className="font-sans text-xs text-gray-500">Práctica Ética y Científica</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Columns of Why Us features */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-6">
            {WHY_US.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-brand-green/15 transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row gap-5 items-start"
              >
                {/* Icon Column */}
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-green shrink-0 shadow-inner">
                  <IconRenderer name={item.iconName} size={22} className="text-brand-green" />
                </div>

                {/* Text Column */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-dark tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
