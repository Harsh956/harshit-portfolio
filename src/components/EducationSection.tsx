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
    <section className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-sky-700 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
            <span>Credentials & Engineering Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="text-gradient-vibrant">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Education Column */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 pb-3 border-b border-stone-200">
              <GraduationCap className="w-6 h-6 text-sky-600" />
              Academic Degrees
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="luxury-card p-6 sm:p-7 rounded-3xl border border-stone-200/90 hover:border-sky-300 group shadow-xs hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-sky-700 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-sky-700 font-semibold mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {edu.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-stone-100 text-slate-700 border border-stone-200">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Strengths Column */}
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3 pb-3 border-b border-stone-200">
              <Award className="w-6 h-6 text-purple-600" />
              Professional Certifications
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="luxury-card p-6 sm:p-7 rounded-3xl border border-stone-200/90 hover:border-purple-300 group shadow-xs hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg group-hover:text-purple-700 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-purple-700 font-semibold mt-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {cert.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      {cert.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div className="p-5 sm:p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 mt-5 space-y-3 shadow-xs">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2 text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Engineering Philosophy & Core Strengths
              </h4>
              <ul className="space-y-2.5">
                {strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
