'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import PhoneMockup2D from './PhoneMockup2D';
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
    'Senior Android Developer',
    'Kotlin & Java Architect',
    '14 Documented CV Projects',
    '8 Verified Google Play Apps',
    'Flutter Cross-Platform'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const metrics = [
    { label: 'CV Projects', value: '14', sub: 'Documented in Resume', color: 'from-sky-400 to-blue-500' },
    { label: 'Work Experience', value: '7+ Yrs', sub: 'July 2017 – Present', color: 'from-purple-400 to-indigo-500' },
    { label: 'Live Play Store', value: '8 Apps', sub: 'Active & Verified', color: 'from-emerald-400 to-teal-500' },
    { label: 'Companies / Roles', value: '6 Roles', sub: 'Enterprise & Solutions', color: 'from-pink-400 to-rose-500' },
  ];

  return (
    <section id="about" className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Narrative & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Status & Role Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-slate-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-emerald-300">Available For Hire</span>
                <span className="text-slate-500">•</span>
                <span className="text-sky-300 font-bold">Greater Noida, India</span>
              </div>

              {/* Dynamic Animated Role Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-xs font-mono font-bold text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{roles[currentRoleIndex]}</span>
              </div>
            </div>

            {/* Differentiated Editorial Headline Hierarchy */}
            <div className="space-y-3 sm:space-y-4">
              <div className="text-xs sm:text-sm font-mono tracking-widest text-sky-400 uppercase font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400" />
                Mobile Systems Engineering
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architecting <br className="hidden sm:block" />
                <span className="text-gradient-vibrant">Mobile Systems</span> <br />
                at High Scale.
              </h1>

              {/* Distinctive Narrative Box */}
              <div className="pt-2">
                <p className="text-base sm:text-lg lg:text-xl font-normal text-slate-300 leading-relaxed max-w-2xl">
                  Hi, I am <strong className="text-white font-extrabold">{PERSONAL_INFO.name}</strong>. 
                  Senior Android Developer with <span className="text-sky-300 font-semibold font-mono">7+ years of experience</span> specializing in 
                  Kotlin, Core Java, and Flutter. I have developed and delivered <span className="text-emerald-300 font-semibold font-mono">14 production mobile applications</span> across e-commerce, agriculture, healthcare, ticketing, and coaching domains as documented in my professional CV.
                </p>
              </div>
            </div>

            {/* Differentiated Editorial Quote Box */}
            <div className="p-4 sm:p-5 rounded-2xl luxury-glass border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-950/20 via-slate-900/60 to-transparent shadow-lg">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-purple-300 uppercase tracking-wider font-bold mb-1">
                    Career Objective (from CV)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{PERSONAL_INFO.careerObjective}"
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base text-center"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <span>Explore 14 CV Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#simulator"
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-bold luxury-glass border border-sky-400/40 text-sky-200 hover:border-sky-300 hover:bg-sky-500/10 transition-all text-sm sm:text-base text-center"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Test Interactive Apps</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-2xl font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm sm:text-base text-center"
              >
                <Send className="w-4 h-4 text-pink-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Impact Metrics Bar (Mobile Responsive 2x2 Grid, Desktop 4 Columns) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 pt-6 border-t border-white/10">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 sm:p-3.5 rounded-2xl luxury-glass border border-white/10 hover:border-white/20 transition-all text-left relative overflow-hidden group"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${m.color} absolute top-0 left-0`} />
                  <div className={`text-2xl sm:text-3xl font-extrabold font-mono bg-gradient-to-r ${m.color} bg-clip-text text-transparent mt-1`}>
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5 leading-tight">{m.label}</div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 2D Smartphone Mockup (Mobile Responsive Size) */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Floating Animated Badge 1: Top Right (Hidden on small mobile to avoid overflow) */}
            <div className="absolute -top-4 -right-2 sm:-right-4 z-20 animate-float-slow hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl luxury-glass border border-purple-500/40 shadow-xl shadow-purple-500/20 bg-[#0f172a]/95">
              <div className="w-7 h-7 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Kotlin & Coroutines</div>
                <div className="text-[10px] text-purple-300 font-mono">Modern Jetpack Flow</div>
              </div>
            </div>

            {/* Floating Animated Badge 2: Bottom Left */}
            <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 animate-float-rev hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl luxury-glass border border-emerald-500/40 shadow-xl shadow-emerald-500/20 bg-[#0f172a]/95">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">8 Apps Live</div>
                <div className="text-[10px] text-emerald-300 font-mono">Google Play Verified</div>
              </div>
            </div>

            {/* Smartphone Container */}
            <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[410px]">
              <PhoneMockup2D />
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-6 sm:pt-8 text-center flex flex-col items-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
          >
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
            <ChevronDown className="w-4 h-4 mt-1.5 animate-bounce text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
