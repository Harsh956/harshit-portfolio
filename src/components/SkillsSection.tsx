'use client';

import React from 'react';
import { TECHNICAL_SKILLS } from '@/data/portfolioData';
import {
  Code2,
  Smartphone,
  Layers,
  Database,
  Wrench,
  CheckCircle2,
  FileCode,
  Globe,
  Radio,
  Sparkles
} from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: TECHNICAL_SKILLS.programmingLanguages,
      color: 'from-sky-500 to-blue-600',
      badgeColor: 'bg-sky-500/10 text-sky-300 border-sky-400/20'
    },
    {
      title: 'Mobile Technologies',
      icon: Smartphone,
      skills: TECHNICAL_SKILLS.mobileTechnologies,
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Layers,
      skills: TECHNICAL_SKILLS.librariesFrameworks,
      color: 'from-indigo-500 to-purple-600',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/20'
    },
    {
      title: 'APIs & Integrations',
      icon: Globe,
      skills: TECHNICAL_SKILLS.apisIntegrations,
      color: 'from-pink-500 to-rose-600',
      badgeColor: 'bg-pink-500/10 text-pink-300 border-pink-400/20'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: TECHNICAL_SKILLS.databases,
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-400/20'
    },
    {
      title: 'Tools & IDEs',
      icon: Wrench,
      skills: TECHNICAL_SKILLS.tools,
      color: 'from-purple-500 to-indigo-600',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-400/20'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-sky-300 shadow-md">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Technical Skills from CV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-vibrant">Skills</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Strictly derived from Harshit Saxena's professional resume. Covering core programming languages, 
            mobile frameworks, APIs, databases, and development tools.
          </p>
        </div>

        {/* 6 Skill Categories Grid directly from CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="luxury-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-sky-400/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-white/10">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-semibold font-mono flex items-center gap-1.5 ${cat.badgeColor}`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-80" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies & Knowledge Section directly from CV */}
        <div className="mt-14 luxury-glass p-6 sm:p-9 rounded-3xl border border-sky-400/20 shadow-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Technologies & Knowledge (from CV)
              </h3>
              <p className="text-xs text-slate-300">
                Core domain capabilities utilized across mobile development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs sm:text-sm font-mono text-slate-200">
            {TECHNICAL_SKILLS.technologiesAndKnowledge.map((item) => (
              <div
                key={item}
                className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-sky-400/40 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities Section directly from CV */}
        <div className="mt-8 luxury-glass p-6 sm:p-9 rounded-3xl border border-purple-400/20 shadow-xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-md">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Key Responsibilities (from CV)
              </h3>
              <p className="text-xs text-slate-300">
                Primary responsibilities executed across Android application lifecycle
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm font-mono text-slate-200">
            {TECHNICAL_SKILLS.keyResponsibilities.map((resp) => (
              <div
                key={resp}
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/20 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                <span className="font-semibold">{resp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
