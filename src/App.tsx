import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-brand-light selection:text-brand-green scroll-behavior-smooth">
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main>
        {/* 1. Hero Section with Large Watermark Psi */}
        <Hero />

        {/* 2. Social Proof / Clinic Metrics Bar */}
        <SocialProof />

        {/* 3. Interactive Clinical Services Grid */}
        <Services />

        {/* 4. Why Us / Methodology Pillar Section */}
        <WhyUs />

        {/* 5. Majestic Solid Green Appointment CTA Banner */}
        <AppointmentCTA />

        {/* 6. Form Intake and Detailed Contacts Column Block */}
        <Contact />
      </main>

      {/* Corporate Clinical Footer */}
      <Footer />
    </div>
  );
}
