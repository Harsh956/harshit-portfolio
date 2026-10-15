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
      color: 'from-sky-600 to-blue-600',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      title: 'Mobile Technologies',
      icon: Smartphone,
      skills: TECHNICAL_SKILLS.mobileTechnologies,
      color: 'from-emerald-600 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Layers,
      skills: TECHNICAL_SKILLS.librariesFrameworks,
      color: 'from-indigo-600 to-purple-600',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      title: 'APIs & Integrations',
      icon: Globe,
      skills: TECHNICAL_SKILLS.apisIntegrations,
      color: 'from-pink-600 to-rose-600',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: TECHNICAL_SKILLS.databases,
      color: 'from-amber-600 to-orange-600',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      title: 'Tools & IDEs',
      icon: Wrench,
      skills: TECHNICAL_SKILLS.tools,
      color: 'from-purple-600 to-indigo-600',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  return (
    <section id="skills" className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-sky-700 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Technical Skills from CV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Technical <span className="text-gradient-vibrant">Skills</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="luxury-card p-6 sm:p-7 rounded-3xl border border-stone-200/90 hover:border-indigo-300 transition-all duration-300 relative group overflow-hidden shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-stone-200">
                  <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-xs shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
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
        <div className="mt-8 bg-white p-5 sm:p-7 rounded-3xl border border-stone-200/90 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Technologies & Knowledge (from CV)
              </h3>
              <p className="text-xs text-slate-500">
                Core domain capabilities utilized across mobile development
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs sm:text-sm font-mono text-slate-700">
            {TECHNICAL_SKILLS.technologiesAndKnowledge.map((item) => (
              <div
                key={item}
                className="p-3 rounded-2xl bg-stone-50 border border-stone-200 hover:border-sky-300 transition-all flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities Section directly from CV */}
        <div className="mt-5 bg-white p-5 sm:p-7 rounded-3xl border border-stone-200/90 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Key Responsibilities (from CV)
              </h3>
              <p className="text-xs text-slate-500">
                Primary responsibilities executed across Android application lifecycle
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm font-mono text-slate-700">
            {TECHNICAL_SKILLS.keyResponsibilities.map((resp) => (
              <div
                key={resp}
                className="p-3.5 rounded-2xl bg-stone-50 border border-purple-200 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                <span className="font-semibold">{resp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
