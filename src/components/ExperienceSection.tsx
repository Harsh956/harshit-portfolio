'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-sky-300 shadow-md">
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Track Record of Engineering Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-vibrant">Experience</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Over 7 years of progressive engineering leadership architecting Android systems, 
            driving Play Store launches, and mentoring developer teams.
          </p>
        </div>

        {/* Timeline (Mobile Responsive: left-aligned on mobile, centered on desktop) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Track with Vibrant Gradient */}
          <div className="absolute left-3.5 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-sky-400 via-indigo-500 to-pink-500 transform sm:-translate-x-1/2 rounded-full opacity-60 shadow-lg shadow-indigo-500/30" />

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node */}
                  <div className="absolute left-3.5 sm:left-1/2 w-7 h-7 sm:w-8 sm:h-8 -ml-3.5 sm:-ml-4 rounded-full bg-[#0d1427] border-2 border-sky-400 flex items-center justify-center z-10 shadow-lg shadow-sky-500/40">
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        exp.isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-gradient-to-tr from-sky-400 to-pink-400'
                      }`}
                    />
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Content Box */}
                  <div className="w-full sm:w-1/2 pl-10 sm:pl-8 sm:pr-8">
                    <div
                      className={`luxury-card p-5 sm:p-7 rounded-3xl border ${
                        exp.isCurrent
                          ? 'border-sky-400/50 shadow-xl shadow-sky-500/15'
                          : 'border-white/10 hover:border-white/20'
                      } relative group transition-all duration-300 hover:-translate-y-1`}
                    >
                      {/* Current Status Pill */}
                      {exp.isCurrent && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] sm:text-[11px] mb-3 border border-emerald-500/40 font-bold shadow-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>CURRENT SENIOR ROLE</span>
                        </div>
                      )}

                      {/* Role & Company with Gradient Accent */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-xs sm:text-sm font-bold text-sky-400 mt-1">
                        {exp.company}
                      </div>

                      {/* Date & Location */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-slate-300 mt-2 pb-3.5 border-b border-white/10">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2 mt-3.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags with Colorful Borders */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-indigo-500/30 text-slate-300 font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
