'use client';

import React, { useState, useEffect } from 'react';
import appScreenshotsData from '@/data/appScreenshots.json';
import {
  Smartphone,
  ShieldCheck,
  Zap,
  Code2,
  Sparkles,
  Wifi,
  Sprout,
  Ticket,
  Target,
  Trophy,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Layers,
  CheckCircle2,
  Play,
  Pause
} from 'lucide-react';

interface AppPreview {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: any;
  rating: string;
  installs: string;
  playStoreUrl: string;
  screenshot: string;
  featureTitle: string;
  featureDesc: string;
}

const PREVIEW_APPS: AppPreview[] = [
  {
    id: 'rapagra',
    name: 'Rapagra Smart Agri',
    category: 'IoT & AI Foliage Scanner',
    color: '#059669',
    icon: Sprout,
    rating: '4.8',
    installs: '10K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    screenshot: '/screenshots/rapagra-2.webp',
    featureTitle: 'Real-Time Crop Disease Risk Detection',
    featureDesc: 'TFLite edge intelligence & IoT BLE soil probe syncing',
  },
  {
    id: 'immortal-seats',
    name: 'Immortal Seats',
    category: '360° Arena Event Ticketing',
    color: '#0284c7',
    icon: Ticket,
    rating: '4.9',
    installs: '50K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    screenshot: '/screenshots/immortal-seats-2.webp',
    featureTitle: 'Interactive 360° Stadium Seating Chart',
    featureDesc: 'Live arena seat views & instant Google Pay checkout',
  },
  {
    id: 'meetgoals',
    name: 'MeetGoals Focus',
    category: 'Pomodoro Productivity & Habit Flow',
    color: '#7c3aed',
    icon: Target,
    rating: '4.8',
    installs: '5K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    screenshot: '/screenshots/meetgoals-2.webp',
    featureTitle: 'Deep Focus Pomodoro Block & Habit Streaks',
    featureDesc: 'WorkManager background service & Room DB analytics',
  },
  {
    id: 'starting-5',
    name: 'Starting 5',
    category: 'Youth Basketball Coaching (Flutter)',
    color: '#db2777',
    icon: Trophy,
    rating: '4.7',
    installs: '5K+',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    screenshot: '/screenshots/starting-5-2.webp',
    featureTitle: 'Tactical Playbook Video Coaching (60 FPS)',
    featureDesc: 'Cross-platform Flutter custom player & drill scoring',
  },
];

export default function PhoneMockup2D() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentApp = PREVIEW_APPS[activeAppIndex];

  // Auto-switch apps every 5 seconds to show multiple real views
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveAppIndex((prev) => (prev + 1) % PREVIEW_APPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setActiveAppIndex((prev) =>
      prev === 0 ? PREVIEW_APPS.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setActiveAppIndex((prev) => (prev + 1) % PREVIEW_APPS.length);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto select-none py-4">
      
      {/* Soft, Diffuse Ambient Colored Halo (Natural Lighting) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[520px] rounded-full blur-[90px] opacity-25 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentApp.color }}
      />

      {/* Floating Pill 1: Top Right */}
      <div className="absolute -top-2 -right-3 sm:-right-6 z-30 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-stone-200 shadow-lg shadow-indigo-500/10 backdrop-blur-md animate-float-slow">
        <div className="w-7 h-7 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
          <Code2 className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-slate-900">Kotlin & Coroutines</div>
          <div className="text-[10px] text-purple-700 font-mono font-semibold">StateFlow • Clean MVVM</div>
        </div>
      </div>

      {/* Floating Pill 2: Bottom Left */}
      <div className="absolute -bottom-2 -left-3 sm:-left-6 z-30 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-stone-200 shadow-lg shadow-emerald-500/10 backdrop-blur-md animate-float-rev">
        <div className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-slate-900">8 Apps Live</div>
          <div className="text-[10px] text-emerald-700 font-mono font-semibold">Google Play Verified ★ 4.8</div>
        </div>
      </div>

      {/* Realistic Flagship Smartphone Chassis (Product Photography Quality) */}
      <div className="relative mx-auto rounded-[50px] sm:rounded-[54px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.15)] border-2 border-slate-700/80 ring-1 ring-slate-900/60 transition-all duration-300">
        
        {/* Hardware Side Volume and Power Buttons */}
        <div className="absolute -left-[4px] top-28 w-[3px] h-10 bg-slate-600 rounded-l shadow-sm" />
        <div className="absolute -left-[4px] top-42 w-[3px] h-14 bg-slate-600 rounded-l shadow-sm" />
        <div className="absolute -right-[4px] top-32 w-[3px] h-16 bg-slate-600 rounded-r shadow-sm" />

        {/* Inner Curved Smartphone Screen (True 19.5:9 Flagship Ratio) */}
        <div className="relative w-full h-[580px] sm:h-[640px] bg-slate-950 rounded-[40px] sm:rounded-[44px] overflow-hidden flex flex-col border border-slate-700/90 shadow-inner group/screen">
          
          {/* Subtle Diagonal Glass Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20 pointer-events-none z-30" />

          {/* Android 14 Status Bar with Dynamic Island */}
          <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-100 z-20 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
            <span>9:41</span>

            {/* Dynamic Island Capsule */}
            <div className="px-3 py-0.5 rounded-full bg-black flex items-center gap-1.5 shadow-sm border border-slate-800">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: currentApp.color }}
              />
              <span className="text-[10px] text-white font-mono font-bold">
                {currentApp.name.split(' ')[0]}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-[10px] font-mono font-bold text-emerald-400">5G</span>
              <Wifi className="w-3 h-3 text-slate-300" />
              <div className="w-3.5 h-2 bg-slate-700 rounded-sm p-[1px] flex items-center">
                <div className="w-2.5 h-full bg-emerald-500 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Top Quick App Switcher Bar (Tappable Pills) */}
          <div className="px-2.5 py-1.5 z-20 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {PREVIEW_APPS.map((app, idx) => (
              <button
                key={app.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveAppIndex(idx);
                }}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
                  idx === activeAppIndex
                    ? 'bg-white text-slate-900 shadow-sm scale-102'
                    : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: app.color }}
                />
                <span>{app.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Real Full-Size Google Play Vertical In-App Screenshot */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-slate-950">
            <img
              key={currentApp.id}
              src={currentApp.screenshot}
              alt={`${currentApp.name} Play Store In-App Screen`}
              className="w-full h-full object-cover object-top transition-opacity duration-500"
              loading="eager"
            />

            {/* Left Slide Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black transition shadow-md opacity-85 hover:opacity-100"
              aria-label="Previous App"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Slide Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black transition shadow-md opacity-85 hover:opacity-100"
              aria-label="Next App"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Bottom Glass Overlay Card showing Real Feature Details */}
            <div className="absolute bottom-2.5 inset-x-2.5 z-20 p-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center justify-between">
              <div className="text-left space-y-0.5 max-w-[210px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {currentApp.rating}
                  </span>
                  <span className="text-slate-400 text-[10px]">•</span>
                  <span className="text-[10px] font-mono text-emerald-300 font-semibold truncate">
                    {currentApp.category}
                  </span>
                </div>
                <div className="text-xs font-extrabold truncate">
                  {currentApp.featureTitle}
                </div>
                <div className="text-[9px] font-mono text-slate-300 truncate">
                  {currentApp.featureDesc}
                </div>
              </div>

              <a
                href={currentApp.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-xl text-xs font-bold transition shadow-sm shrink-0 flex items-center gap-1 hover:scale-105"
                style={{ backgroundColor: currentApp.color }}
                title="Open on Google Play"
              >
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>

          {/* Bottom Android Gesture Bar */}
          <div className="p-2 bg-slate-950 border-t border-white/10 flex items-center justify-center relative z-20">
            <div className="w-24 sm:w-28 h-1 bg-slate-600 rounded-full" />
          </div>

        </div>
      </div>

      {/* Slide Navigation Dots and Hint under the phone */}
      <div className="mt-3 flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5">
          {PREVIEW_APPS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveAppIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === activeAppIndex ? 'w-5 bg-indigo-600' : 'w-1.5 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Switch to app ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[11px] font-mono text-slate-500 bg-white/90 border border-stone-200 px-3 py-1 rounded-full shadow-xs inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-indigo-600" />
          <span>Real Google Play Store in-app interface • Tap tabs or arrows to explore</span>
        </span>
      </div>

    </div>
  );
}
