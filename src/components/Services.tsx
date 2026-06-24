import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import IconRenderer from './IconRenderer';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="servicios" className="py-24 md:py-32 bg-white relative">
      {/* Decorative side accent blur */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-light/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-light px-3 py-1.5 rounded-full">
            Nuestras Especialidades
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
            Servicios Clínicos Especializados
          </h2>
          <div className="mt-4 w-12 h-1 bg-brand-green mx-auto rounded-full" />
          <p className="mt-5 font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos terapias de vanguardia adaptadas a tus necesidades individuales, respaldadas por la ciencia y guiadas por la calidez profesional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => toggleExpand(service.id)}
                className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full select-none hover:-translate-y-1.5 ${
                  isExpanded 
                    ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/10' 
                    : 'border-gray-100 hover:border-brand-green/20 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-green mb-6 transition-transform duration-300 hover:scale-105">
                    <IconRenderer name={service.iconName} className="text-brand-green" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-brand-dark tracking-tight">
                    {service.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="mt-3 font-sans text-sm text-gray-500 leading-relaxed min-h-[40px]">
                    {service.description}
                  </p>

                  {/* Expandable treatment details inside card */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-5 border-t border-brand-light space-y-3">
                          <p className="font-sans text-xs font-semibold text-brand-accent tracking-wider uppercase mb-2">
                            ¿Qué abordamos?
                          </p>
                          {service.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 size={14} className="text-brand-green mt-0.5 shrink-0" />
                              <span className="font-sans text-xs text-gray-600 leading-tight">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card footer CTA trigger */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-brand-green">
                  <span className="font-sans text-xs font-semibold tracking-wide">
                    {isExpanded ? 'Ver menos' : 'Saber más...'}
                  </span>
                  <div className="p-1 rounded-full bg-brand-light">
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
