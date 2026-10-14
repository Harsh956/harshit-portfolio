'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/data/portfolioData';
import {
  Smartphone,
  ExternalLink,
  Award,
  Zap,
  CheckCircle2,
  Send,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';

// Dynamic import with ssr: false for Three.js 3D Phone component
const AndroidPhone3D = dynamic(() => import('./AndroidPhone3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[550px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-slate-600 border-t-sky-400 rounded-full animate-spin" />
        <span className="text-xs font-mono text-slate-400 tracking-wider">INITIALIZING 3D STUDIO...</span>
      </div>
    </div>
  ),
});

export default function Hero3D() {
  const metrics = [
    { label: 'Published Play Store Apps', value: '14+', sub: 'Active in Production' },
    { label: 'Senior Mobile Experience', value: '7+ Yrs', sub: 'Kotlin • Java • Flutter' },
    { label: 'Production Crash-Free Rate', value: '99.9%', sub: 'Google Play Console' },
    { label: 'Cumulative User Installs', value: '100K+', sub: 'Global Mobile Reach' },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center bg-mesh-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Executive Badge Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full luxury-glass border border-white/10 text-xs font-mono text-slate-300 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior Mobile Roles & High-Impact Contracts</span>
            </div>

            {/* Typography Hierarchy */}
            <div className="space-y-3">
              <div className="text-sm sm:text-base font-mono tracking-widest text-sky-400 uppercase font-semibold">
                Senior Android & Mobile Architect
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Crafting Flagship <br className="hidden sm:block" />
                <span className="text-shimmer">Mobile Experiences.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 pt-2">
                I am <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. 
                I design, architect, and deploy high-concurrency mobile systems with 
                <span className="text-sky-300 font-semibold"> Kotlin</span>, 
                <span className="text-emerald-300 font-semibold"> Modern Jetpack</span>, and 
                <span className="text-purple-300 font-semibold"> Flutter</span>.
              </p>
            </div>

            {/* Objective Quote Box */}
            <div className="p-4 rounded-2xl luxury-glass border-l-4 border-l-sky-400 text-left max-w-2xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "{PERSONAL_INFO.careerObjective}"
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-950 hover:bg-slate-200 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]"
              >
                <Smartphone className="w-5 h-5 text-slate-900" />
                <span>View 14 CV Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </a>

              <a
                href="#simulator"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold luxury-glass border border-white/10 text-white hover:border-sky-400/50 hover:bg-white/5 transition-all"
              >
                <Zap className="w-4 h-4 text-sky-400" />
                Test Interactive 3D Studio
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <Send className="w-4 h-4 text-slate-400" />
                Contact
              </a>
            </div>

            {/* Executive Impact Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="text-center lg:text-left space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">{m.label}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{m.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Titanium Smartphone */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Lighting Dome */}
            <div className="absolute w-80 h-80 sm:w-[440px] sm:h-[440px] bg-gradient-to-tr from-sky-500/15 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative w-full max-w-[500px]">
              <AndroidPhone3D />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 text-center flex flex-col items-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center text-xs font-mono text-slate-500 hover:text-sky-400 transition-colors"
          >
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
            <ChevronDown className="w-4 h-4 mt-1.5 animate-bounce text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
