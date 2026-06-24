import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data';
import { ShieldAlert, Users, HeartHandshake, CalendarClock } from 'lucide-react';

export default function SocialProof() {
  const getStatIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Users className="text-brand-green" size={24} />;
      case 1:
        return <HeartHandshake className="text-brand-green" size={24} />;
      case 2:
        return <CalendarClock className="text-brand-green" size={24} />;
      default:
        return <Users className="text-brand-green" size={24} />;
    }
  };

  return (
    <section className="bg-brand-light/40 border-y border-brand-green/10 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-green/15">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center px-4 pt-6 md:pt-0 first:pt-0"
            >
              <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                {getStatIcon(idx)}
              </div>
              
              <span className="font-serif text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
                {stat.value}
              </span>
              
              <span className="mt-2 font-sans text-base font-semibold text-gray-800">
                {stat.label}
              </span>
              
              <p className="mt-1 font-sans text-xs text-gray-500 max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
