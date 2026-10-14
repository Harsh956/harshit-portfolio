'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import AmbientBackground from '@/components/AmbientBackground';
import Hero2D from '@/components/Hero2D';
import SkillsSection from '@/components/SkillsSection';
import InteractivePhonePlayground from '@/components/InteractivePhonePlayground';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* 2D Ambient Background Mesh */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section with 2D Flagship Smartphone */}
      <Hero2D />

      {/* Technical Skills & Competencies */}
      <SkillsSection />

      {/* Interactive Mobile Device Simulator */}
      <InteractivePhonePlayground />

      {/* 14 Production Google Play Apps */}
      <ProjectsSection />

      {/* Work Experience Timeline */}
      <ExperienceSection />

      {/* Academic Degrees, Certifications & Strengths */}
      <EducationSection />

      {/* Direct Contact & Inquiry Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
