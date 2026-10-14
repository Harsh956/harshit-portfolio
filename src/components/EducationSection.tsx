'use client';

import React from 'react';
import { EDUCATION_LIST, CERTIFICATIONS } from '@/data/portfolioData';
import { GraduationCap, Award, CheckCircle, Sparkles } from 'lucide-react';

export default function EducationSection() {
  const strengths = [
    'Quick learner with rapid adaptability to emergent mobile frameworks (Jetpack Compose, Flutter)',
    'High-reliability code discipline: achieving 99.9% crash-free sessions across 14 apps',
    'Full lifecycle ownership: from architectural whiteboarding to Google Play release & monitoring',
    'Effective cross-functional communication with backend engineers, designers, and stakeholders',
    'Strong foundation in Object-Oriented Programming (OOP), Data Structures, and Clean Architecture',
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 relative studio-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-white/10 text-xs font-mono text-slate-300">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            <span>Credentials & Engineering Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-shimmer">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 pb-3 border-b border-white/10">
              <GraduationCap className="w-6 h-6 text-sky-400" />
              Academic Degrees
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="luxury-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-sky-400/30 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg group-hover:text-sky-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-sky-400 font-medium mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-200 border border-white/10">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Strengths Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-3 pb-3 border-b border-white/10">
              <Award className="w-6 h-6 text-purple-400" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="luxury-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-purple-400/30 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-purple-400 font-medium mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {cert.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {cert.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="luxury-glass p-5 sm:p-6 rounded-3xl border border-emerald-500/20 mt-5 space-y-3">
              <h4 className="font-bold text-white text-sm flex items-center gap-2 text-emerald-400">
                <Sparkles className="w-4 h-4" />
                Engineering Philosophy & Core Strengths
              </h4>
              <ul className="space-y-2.5">
                {strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
