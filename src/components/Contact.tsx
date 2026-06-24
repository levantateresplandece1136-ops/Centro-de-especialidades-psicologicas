import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Instagram, 
  Check, 
  Send, 
  MessageSquare,
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data';
import { AppointmentFormInput } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<AppointmentFormInput>({
    name: '',
    phone: '',
    email: '',
    service: '',
    modality: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showWhatsAppOption, setShowWhatsAppOption] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate standard clinical form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setShowWhatsAppOption(true);
      
      // Save query locally to simulate persistent intake records
      const existingInquiries = JSON.parse(localStorage.getItem('cep_inquiries') || '[]');
      existingInquiries.push({
        ...formData,
        date: new Date().toISOString(),
        id: Math.random().toString(36).substr(2, 9)
      });
      localStorage.setItem('cep_inquiries', JSON.stringify(existingInquiries));
    }, 1200);
  };

  // Generate a personalized WhatsApp text message with the patient request details
  const getWhatsAppURL = () => {
    const serviceName = SERVICES.find(s => s.id === formData.service)?.title || formData.service || 'Valoración General';
    const modalityName = formData.modality === 'presencial' ? 'Presencial (Celaya)' : 'En línea (Videollamada)';
    
    const text = `Hola Centro de Especialidades Psicológicas. Me gustaría agendar una cita.

*Mis datos de contacto:*
• *Nombre:* ${formData.name}
• *Teléfono:* ${formData.phone}
• *Correo:* ${formData.email || 'No proporcionado'}
• *Servicio:* ${serviceName}
• *Modalidad:* ${modalityName}
${formData.message ? `• *Mensaje:* ${formData.message}` : ''}`;

    return `https://wa.me/524611808151?text=${encodeURIComponent(text)}`;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      modality: '',
      message: ''
    });
    setSubmitSuccess(false);
    setShowWhatsAppOption(false);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light/35 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-light px-3 py-1.5 rounded-full">
            Contáctanos
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
            Comienza tu proceso terapéutico
          </h2>
          <div className="mt-4 w-12 h-1 bg-brand-green mx-auto rounded-full" />
          <p className="mt-5 font-sans text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para escucharte y resolver cualquier duda. Agenda tu espacio de atención presencial en Celaya o en línea.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark tracking-tight">
                Datos de Contacto
              </h3>
              <p className="mt-2 font-sans text-sm text-gray-500 leading-relaxed">
                Nuestras oficinas se encuentran en una de las zonas con mejor conectividad y comodidad de Celaya, Gto.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a 
                href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                className="group flex gap-4 p-5 rounded-2xl bg-brand-light/40 border border-brand-green/5 hover:border-brand-green/20 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-accent tracking-wider uppercase">Teléfono de atención</h4>
                  <p className="mt-1 font-serif text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">{CLINIC_INFO.phone}</p>
                  <p className="font-sans text-xs text-gray-400">Llamada telefónica directa</p>
                </div>
              </a>

              {/* Address Card */}
              <a 
                href={CLINIC_INFO.addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-5 rounded-2xl bg-brand-light/40 border border-brand-green/5 hover:border-brand-green/20 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-accent tracking-wider uppercase">Dirección física</h4>
                  <p className="mt-1 font-serif text-base font-bold text-brand-dark group-hover:text-brand-green transition-colors leading-snug">{CLINIC_INFO.address}</p>
                  <p className="font-sans text-xs text-gray-400">Ver ubicación en Google Maps ↗</p>
                </div>
              </a>

              {/* Instagram Card */}
              <a 
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-5 rounded-2xl bg-brand-light/40 border border-brand-green/5 hover:border-brand-green/20 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <Instagram size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-accent tracking-wider uppercase">Instagram</h4>
                  <p className="mt-1 font-serif text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">{CLINIC_INFO.instagram}</p>
                  <p className="font-sans text-xs text-gray-400">Síguenos para consejos de bienestar ↗</p>
                </div>
              </a>

              {/* Email Card */}
              <a 
                href={`mailto:${CLINIC_INFO.email}`}
                className="group flex gap-4 p-5 rounded-2xl bg-brand-light/40 border border-brand-green/5 hover:border-brand-green/20 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green shrink-0 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-accent tracking-wider uppercase">Correo Electrónico</h4>
                  <p className="mt-1 font-sans text-base font-medium text-brand-dark group-hover:text-brand-green transition-colors">{CLINIC_INFO.email}</p>
                  <p className="font-sans text-xs text-gray-400">Respuestas en menos de 24 horas</p>
                </div>
              </a>
            </div>

            {/* Office Schedule Info */}
            <div className="p-5 rounded-2xl border border-dashed border-brand-green/20 bg-white flex items-start gap-4">
              <Clock size={18} className="text-brand-accent mt-0.5 shrink-0" />
              <div>
                <h5 className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">Horario de Consultas</h5>
                <p className="mt-1 font-sans text-sm text-gray-600 leading-snug">{CLINIC_INFO.schedule}</p>
                <p className="font-sans text-xs text-gray-400">Programación ágil vía WhatsApp o teléfono.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Intake Request Form */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="intake-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brand-dark tracking-tight">
                        Solicita tu Valoración
                      </h3>
                      <p className="mt-1.5 font-sans text-sm text-gray-500">
                        Por favor, llena los datos siguientes y nos pondremos en contacto contigo de inmediato.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Nombre Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ej. Sofía García"
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none font-sans text-sm bg-gray-50/50 transition-colors"
                        />
                      </div>

                      {/* Phone field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Teléfono de Contacto <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ej. 461 123 4567"
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none font-sans text-sm bg-gray-50/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Correo Electrónico (Opcional)
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ejemplo@correo.com"
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none font-sans text-sm bg-gray-50/50 transition-colors"
                        />
                      </div>

                      {/* Service selection dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="service" className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                          Servicio Requerido <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none font-sans text-sm bg-gray-50/50 transition-colors cursor-pointer"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="depression">Depresión y Estado de Ánimo</option>
                          <option value="anxiety">Ansiedad y Regulación de Estrés</option>
                          <option value="couples">Terapia de Pareja</option>
                          <option value="family">Terapia Familiar</option>
                          <option value="other">Otro Motivo de Consulta</option>
                        </select>
                      </div>
                    </div>

                    {/* Modality options */}
                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                        Modalidad de Preferencia <span className="text-red-500">*</span>
                      </span>
                      <div className="grid grid-cols-2 gap-4">
                        <label 
                          className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border cursor-pointer text-sm font-semibold transition-all select-none ${
                            formData.modality === 'presencial'
                              ? 'border-brand-green bg-brand-light/40 text-brand-green'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="modality"
                            value="presencial"
                            required
                            checked={formData.modality === 'presencial'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>Presencial (Celaya)</span>
                        </label>
                        
                        <label 
                          className={`flex items-center justify-center gap-2 p-3.5 rounded-xl border cursor-pointer text-sm font-semibold transition-all select-none ${
                            formData.modality === 'linea'
                              ? 'border-brand-green bg-brand-light/40 text-brand-green'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <input
                            type="radio"
                            name="modality"
                            value="linea"
                            required
                            checked={formData.modality === 'linea'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span>En Línea (Internet)</span>
                        </label>
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">
                        Motivo de consulta / Mensaje (Opcional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Platícanos brevemente qué te gustaría abordar en tu proceso terapéutico para prepararnos mejor..."
                        className="px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none font-sans text-sm bg-gray-50/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-green hover:bg-brand-dark text-white font-sans text-base font-bold transition-all shadow-md hover:shadow-lg focus:outline-none disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Procesando solicitud...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Enviar Solicitud</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 px-4 flex flex-col items-center"
                  >
                    {/* Circle Success Icon */}
                    <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-green mb-6 shadow-sm">
                      <CheckCircle2 size={36} className="text-brand-green" />
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-brand-dark tracking-tight">
                      ¡Solicitud Registrada!
                    </h3>
                    
                    <p className="mt-4 font-sans text-sm text-gray-500 max-w-md leading-relaxed">
                      Muchas gracias, <strong>{formData.name}</strong>. Hemos registrado tus detalles de valoración de manera correcta en nuestro sistema de admisiones clínicas.
                    </p>

                    <p className="mt-2 font-sans text-xs text-brand-accent font-medium bg-brand-light px-3 py-1 rounded-full">
                      Nos pondremos en contacto contigo vía telefónica o por correo en breve.
                    </p>

                    {/* Elite feature: direct WhatsApp routing */}
                    {showWhatsAppOption && (
                      <div className="mt-8 p-6 rounded-2xl border border-brand-green/10 bg-brand-light/20 w-full max-w-md">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Sparkles size={14} className="text-brand-accent" />
                          <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider">Aceleración de Trámite</span>
                        </div>
                        <p className="font-sans text-xs text-gray-500 mb-4 leading-normal">
                          ¿Te gustaría enviar tus datos directamente a nuestro coordinador clínico por WhatsApp para agendar tu horario hoy mismo?
                        </p>
                        <a
                          href={getWhatsAppURL()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-brand-green hover:bg-brand-dark text-white font-sans text-sm font-bold transition-all shadow hover:shadow-md cursor-pointer"
                        >
                          <MessageSquare size={16} />
                          Enviar por WhatsApp Clínico
                        </a>
                      </div>
                    )}

                    {/* Reset Button */}
                    <button
                      onClick={handleReset}
                      className="mt-8 font-sans text-xs text-gray-400 hover:text-brand-green underline transition-colors cursor-pointer"
                    >
                      Registrar otra solicitud o modificar mis datos
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
