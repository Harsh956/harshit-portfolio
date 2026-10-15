'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  ExternalLink,
  Layers,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

export default function PhoneMockup2D() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const heroApps = [
    {
      id: 'rapagra',
      name: 'Rapagra Smart Agri',
      domain: 'AgriTech • IoT & Edge AI',
      color: '#059669',
      icon: Sprout,
      rating: '4.8',
      downloads: '10K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
      screenshot: appScreenshotsData['rapagra']?.[0] || '/screenshots/rapagra.webp',
      badgeText: 'CameraX + TFLite Disease Scanner',
    },
    {
      id: 'immortal-seats',
      name: 'Immortal Seats',
      domain: 'Concert Ticketing • 360° Arena',
      color: '#0284c7',
      icon: Ticket,
      rating: '4.9',
      downloads: '50K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
      screenshot: appScreenshotsData['immortal-seats']?.[0] || '/screenshots/immortal-seats.webp',
      badgeText: 'Interactive 360° MetLife Arena Map',
    },
    {
      id: 'meetgoals',
      name: 'MeetGoals Focus',
      domain: 'Productivity • WorkManager',
      color: '#7c3aed',
      icon: Target,
      rating: '4.8',
      downloads: '5K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
      screenshot: appScreenshotsData['meetgoals']?.[0] || '/screenshots/meetgoals.webp',
      badgeText: 'Circular Pomodoro & Habit Streak',
    },
    {
      id: 'starting-5',
      name: 'Starting 5 Coach',
      domain: 'Flutter Sports • 60 FPS Video',
      color: '#db2777',
      icon: Trophy,
      rating: '4.7',
      downloads: '5K+',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
      screenshot: appScreenshotsData['starting-5']?.[0] || '/screenshots/starting-5.webp',
      badgeText: 'Tactical Playbook Court Video',
    },
  ];

  const currentApp = heroApps[activeAppIndex];

  // Mouse 3D perspective tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Base 3D rotation angles
  const rotateX = isHovered ? 6 - mousePos.y * 14 : 7;
  const rotateY = isHovered ? -12 + mousePos.x * 16 : -13;

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto select-none py-6 cursor-pointer"
      style={{ perspective: '1400px' }}
    >
      {/* Dynamic Ambient Glow matching the active app behind the phone */}
      <div
        className="absolute -inset-4 sm:-inset-6 rounded-[60px] blur-3xl opacity-35 pointer-events-none transition-colors duration-700 animate-pulse-glow"
        style={{ backgroundColor: currentApp.color }}
      />

      {/* Floating 3D Badge 1: Top Right */}
      <div
        className="absolute -top-3 -right-2 sm:-right-5 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-purple-200 shadow-xl shadow-purple-500/15 backdrop-blur-md transition-transform duration-300"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 45px)`,
        }}
      >
        <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
          <Code2 className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-slate-900">Kotlin & Coroutines</div>
          <div className="text-[10px] text-purple-700 font-mono font-semibold">StateFlow • Clean MVVM</div>
        </div>
      </div>

      {/* Floating 3D Badge 2: Bottom Left */}
      <div
        className="absolute -bottom-3 -left-2 sm:-left-5 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 border border-emerald-200 shadow-xl shadow-emerald-500/15 backdrop-blur-md transition-transform duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -12}px, ${mousePos.y * -12}px, 50px)`,
        }}
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-slate-900">8 Apps Published</div>
          <div className="text-[10px] text-emerald-700 font-mono font-semibold">Google Play Verified ★ 4.8</div>
        </div>
      </div>

      {/* 3D Physical Phone Chassis Container */}
      <div
        className="relative transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(1.5deg)`,
        }}
      >
        {/* Physical 3D Extruded Titanium Chassis with Beveled Depth Shadow */}
        <div
          className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 rounded-[48px] sm:rounded-[54px] p-3 sm:p-3.5 border-2 border-slate-700/90 ring-1 ring-slate-900"
          style={{
            boxShadow: `
              -6px 6px 0px rgba(51, 65, 85, 0.9),
              -12px 14px 0px rgba(30, 41, 59, 0.85),
              -18px 22px 0px rgba(15, 23, 42, 0.8),
              -26px 36px 45px rgba(15, 23, 42, 0.35)
            `,
          }}
        >
          {/* Hardware Side Buttons with Metallic Highlights */}
          <div className="absolute -left-[5px] top-24 w-[3.5px] h-9 bg-slate-600 rounded-l shadow-md" />
          <div className="absolute -left-[5px] top-36 w-[3.5px] h-12 bg-slate-600 rounded-l shadow-md" />
          <div className="absolute -left-[5px] top-52 w-[3.5px] h-12 bg-slate-600 rounded-l shadow-md" />
          <div className="absolute -right-[5px] top-32 w-[3.5px] h-16 bg-slate-600 rounded-r shadow-md" />

          {/* Inner Phone Display Container */}
          <div className="relative w-full h-[580px] sm:h-[620px] bg-slate-950 rounded-[38px] sm:rounded-[44px] overflow-hidden flex flex-col border border-slate-700 shadow-inner group/screen">
            
            {/* 3D Specular Glass Glare Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/25 pointer-events-none z-30" />

            {/* Android 14 Status Bar with Dynamic Island */}
            <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-100 z-20 border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
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
                  <div className="w-2.5 h-full bg-emerald-400 rounded-xs" />
                </div>
              </div>
            </div>

            {/* App Switcher Pills inside the 3D Phone Screen */}
            <div className="px-2.5 pt-2 pb-1.5 z-20 bg-slate-900/90 backdrop-blur-sm border-b border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {heroApps.map((app, idx) => (
                <button
                  key={app.id}
                  onClick={(e) => {
                    e.stopPropagation();
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

            {/* Main Screen: Real Full-Resolution Google Play Screenshot */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-slate-950">
              <img
                key={currentApp.id}
                src={currentApp.screenshot}
                alt={`${currentApp.name} Play Store Screen`}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
                loading="eager"
              />

              {/* Glass Floating Overlay Card inside phone */}
              <div className="absolute bottom-3 inset-x-3 z-20 p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center justify-between">
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {currentApp.rating}
                    </span>
                    <span className="text-slate-400 text-[10px]">•</span>
                    <span className="text-[10px] font-mono text-emerald-300 font-semibold">
                      Verified Store App
                    </span>
                  </div>
                  <div className="text-xs font-extrabold truncate max-w-[190px]">
                    {currentApp.name}
                  </div>
                  <div className="text-[9px] font-mono text-slate-300 truncate max-w-[190px]">
                    {currentApp.badgeText}
                  </div>
                </div>

                <a
                  href={currentApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl text-xs font-bold transition shadow-sm shrink-0 flex items-center gap-1"
                  style={{ backgroundColor: currentApp.color }}
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
      </div>

      {/* Interactive Hint under 3D phone */}
      <div className="mt-3 text-center">
        <span className="text-[11px] font-mono text-slate-500 bg-white/80 border border-stone-200 px-3 py-1 rounded-full shadow-xs inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-indigo-600" />
          <span>Move cursor to tilt 3D perspective • Tap tabs to switch live apps</span>
        </span>
      </div>
    </div>
  );
}
