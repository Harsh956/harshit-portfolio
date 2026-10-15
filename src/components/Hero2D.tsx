'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/data/portfolioData';

const Real3DPhone = dynamic(() => import('./Real3DPhone'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[390px] h-[560px] mx-auto rounded-[48px] bg-white/70 border border-stone-200/90 shadow-lg flex flex-col items-center justify-center p-8 backdrop-blur-md">
      <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin mb-4" />
      <span className="text-xs font-mono font-bold text-slate-800">Initializing 3D Hardware Device...</span>
      <span className="text-[10px] font-mono text-slate-500 mt-1">WebGL 3D Engine • Three.js</span>
    </div>
  ),
});
import {
  Smartphone,
  ExternalLink,
  Award,
  Zap,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Layers,
  Flame,
  Code2,
  Terminal,
  Compass
} from 'lucide-react';

export default function Hero2D() {
  const roles = [
    'Android Developer',
    'Kotlin & Java Developer',
    '14 Documented CV Projects',
    '8 Verified Google Play Apps',
    'Flutter Mobile Development'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const metrics = [
    { label: 'CV Projects', value: '14', sub: 'Documented in Resume', color: 'from-sky-600 to-blue-600' },
    { label: 'Work Experience', value: '6 Years', sub: 'Android Development', color: 'from-purple-600 to-indigo-600' },
    { label: 'Live Play Store', value: '8 Apps', sub: 'Active & Verified', color: 'from-emerald-600 to-teal-600' },
    { label: 'Companies / Roles', value: '6 Roles', sub: 'Professional Career', color: 'from-pink-600 to-rose-600' },
  ];

  return (
    <section id="about" className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Narrative & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
            
            {/* Top Status & Role Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-slate-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-emerald-700">Available For Hire</span>
                <span className="text-slate-400">•</span>
                <span className="text-indigo-600 font-bold">Greater Noida, India</span>
              </div>

              {/* Dynamic Animated Role Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-mono font-bold text-purple-700 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{roles[currentRoleIndex]}</span>
              </div>
            </div>

            {/* Headline Hierarchy */}
            <div className="space-y-3">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-sky-700 uppercase font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-600" />
                Android Mobile Application Development
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Developing <br className="hidden sm:block" />
                <span className="text-gradient-vibrant">Production Mobile Apps</span> <br />
                with Kotlin & Java.
              </h1>

              {/* Distinctive Narrative Box */}
              <div className="pt-1">
                <p className="text-base sm:text-lg lg:text-xl font-normal text-slate-600 leading-relaxed max-w-2xl">
                  Hi, I am <strong className="text-slate-900 font-extrabold">{PERSONAL_INFO.name}</strong>. 
                  Android Developer with <span className="text-indigo-600 font-semibold font-mono">6 years of experience</span> specializing in 
                  Kotlin, Core Java, and Flutter. I have developed and delivered <span className="text-emerald-600 font-semibold font-mono">14 production mobile applications</span> across e-commerce, agriculture, healthcare, ticketing, and coaching domains as documented in my professional CV.
                </p>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/95 border-l-4 border-l-purple-600 border border-stone-200/90 shadow-sm">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-purple-700 uppercase tracking-wider font-bold mb-1">
                    Career Objective (from CV)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{PERSONAL_INFO.careerObjective}"
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base text-center"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <span>Explore 14 CV Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#simulator"
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-bold bg-white border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 transition-all text-sm sm:text-base text-center shadow-xs"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Test Interactive Apps</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-semibold bg-white border border-stone-200 text-slate-700 hover:bg-stone-50 transition-all text-sm sm:text-base text-center shadow-xs"
              >
                <Send className="w-4 h-4 text-pink-600" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Impact Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-5 border-t border-stone-200/80">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white border border-stone-200/90 hover:border-indigo-200 transition-all text-left relative overflow-hidden group shadow-xs hover:shadow-sm"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${m.color} absolute top-0 left-0`} />
                  <div className={`text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r ${m.color} bg-clip-text text-transparent mt-1`}>
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5 leading-tight">{m.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Hardware Smartphone Model */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            <Real3DPhone />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 sm:pt-8 text-center flex flex-col items-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center text-xs font-mono text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <span>SCROLL TO EXPLORE 14 CV PROJECTS</span>
            <ChevronDown className="w-4 h-4 mt-1.5 animate-bounce text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
