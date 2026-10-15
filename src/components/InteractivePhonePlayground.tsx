'use client';

import React, { useState, useEffect, useRef } from 'react';
import appScreenshotsData from '@/data/appScreenshots.json';
import {
  Smartphone,
  Sprout,
  Ticket,
  Trophy,
  Target,
  Trees,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  SlidersHorizontal,
  Wifi,
  ExternalLink,
  Layers,
  CheckCircle2,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppSimulatorConfig {
  id: string;
  title: string;
  domain: string;
  tagline: string;
  color: string;
  icon: any;
  techBadge: string;
  playStoreUrl: string;
  screenshots: string[];
  captions: string[];
}

const APPS_CONFIG: AppSimulatorConfig[] = [
  {
    id: 'rapagra',
    title: 'Rapagra Smart Agri',
    domain: 'AgriTech • IoT & Edge AI',
    tagline: 'IoT BLE Sensors & TFLite Neural Leaf Disease Scanner',
    color: '#059669',
    icon: Sprout,
    techBadge: 'CameraX + TFLite',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    screenshots: appScreenshotsData['rapagra'] || [],
    captions: [
      'Crop Foliage Health Diagnosis & Disease Risk Scanning',
      'Real-Time IoT Soil Moisture & Temperature Sensor Telemetry',
      'Field Scouting Logs & Farm Plot Satellite Mapping',
      'Pesticide Spray Optimization & Chemical Cost Reduction',
      'Offline Local Data Caching via Android Room Database',
      'Historical Yield Trends & Automated Weather Alert Engine',
    ],
  },
  {
    id: 'immortal-seats',
    title: 'Immortal Seats',
    domain: 'Live Ticketing • 360° Arena',
    tagline: 'Real-Time MetLife Arena Seat Map & Dynamic Checkout',
    color: '#0284c7',
    icon: Ticket,
    techBadge: 'Canvas 360° + Retrofit',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    screenshots: appScreenshotsData['immortal-seats'] || [],
    captions: [
      'Interactive 360° Arena Seating Chart & Tier Selection',
      'Real-Time Seat View & Row Availability Matrix',
      'Event Search Filters & Category Explorer',
      'VIP Golden Circle Pass & Secure Payment Gateway',
      'Digital Ticket Pass with QR Barcode Scanner',
      'Instant Booking Confirmation & Push Notifications',
    ],
  },
  {
    id: 'starting-5',
    title: 'Starting 5 (Flutter)',
    domain: 'Sports & Video Coaching',
    tagline: 'Youth Basketball Tactical Court Player & Drill Analytics',
    color: '#db2777',
    icon: Trophy,
    techBadge: 'Flutter 60 FPS Video',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    screenshots: appScreenshotsData['starting-5'] || [],
    captions: [
      'Youth Basketball Tactical Court & Video Coaching Player',
      'Animated Playbook Diagrams & 60 FPS Drill Playback',
      'Shooting Form Metrics & Player Accuracy Tracking',
      'Team Roster Management & Coach Evaluation Notes',
      'Cross-Platform Flutter Performance Architecture',
      'Custom Training Routines & Video Uploads',
    ],
  },
  {
    id: 'meetgoals',
    title: 'MeetGoals Focus',
    domain: 'Productivity & Habits',
    tagline: 'WorkManager Background Flow & Circular Pomodoro Cycle',
    color: '#7c3aed',
    icon: Target,
    techBadge: 'WorkManager + Room DB',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    screenshots: appScreenshotsData['meetgoals'] || [],
    captions: [
      'Pomodoro Focus Timer & WorkManager Background Service',
      'Habit Streak Tracker & Flame Multiplier Analytics',
      'Daily Productivity Goals & Task Prioritization',
      'Weekly Consistency Reports & Time Distribution',
      'Custom Work Interval Cycles & Clean UI Flow',
    ],
  },
  {
    id: 'high-desert',
    title: 'High Desert Design',
    domain: 'Enterprise • Project Operations',
    tagline: 'Landscaping Task Dispatcher & Job-Site Multimedia',
    color: '#d97706',
    icon: Trees,
    techBadge: 'Drag & Drop + Camera API',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ogrelogic.highdesertdesigns&hl=en',
    screenshots: appScreenshotsData['high-desert'] || [],
    captions: [
      'Landscaping Project Management & Real-Time Job Tracking',
      'Drag-and-Drop Task Reassignment & Workload Balancing',
      'Job-Site Photo Camera Uploads & Multimedia Handling',
      'Enterprise Team Dashboards & Resource Allocation',
    ],
  },
];

export default function InteractivePhonePlayground() {
  const [selectedAppId, setSelectedAppId] = useState<string>('rapagra');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const currentApp = APPS_CONFIG.find((a) => a.id === selectedAppId) || APPS_CONFIG[0];
  const activeScreenshots = currentApp.screenshots;

  // Reset slide index when changing app
  const handleSelectApp = (appId: string) => {
    setSelectedAppId(appId);
    setCurrentSlideIndex(0);
  };

  // Next / Prev slide handlers
  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? activeScreenshots.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === activeScreenshots.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-play slideshow timer
  useEffect(() => {
    if (!isAutoPlaying || activeScreenshots.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) =>
        prev === activeScreenshots.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, activeScreenshots.length, selectedAppId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'Escape') setFullscreenImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreenshots.length]);

  return (
    <section id="simulator" className="py-12 sm:py-16 lg:py-20 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-indigo-700 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Play Store Emulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live Google Play <span className="text-gradient-vibrant">Emulator</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Slide through authentic, full-size Google Play Store screenshots for Harshit's published Android & Flutter applications directly inside the flagship smartphone emulator below.
          </p>
        </div>

        {/* Studio Grid: Left App Selection & Right Smartphone Slide Emulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: App Selector Cards */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold">
                Select Production App:
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                5 Apps • Multi-Screenshot Slides
              </span>
            </div>

            {APPS_CONFIG.map((app) => {
              const Icon = app.icon;
              const isSelected = selectedAppId === app.id;
              return (
                <div
                  key={app.id}
                  onClick={() => handleSelectApp(app.id)}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-2 shadow-lg shadow-indigo-500/10'
                      : 'bg-white/80 border border-stone-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                  style={{
                    borderColor: isSelected ? app.color : undefined,
                  }}
                >
                  {/* Left Accent Stripe */}
                  {isSelected && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: app.color }}
                    />
                  )}

                  <div className="flex items-center gap-3 sm:gap-4 pl-1">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 shadow-xs"
                      style={{
                        backgroundColor: `${app.color}15`,
                        color: app.color,
                        border: `1px solid ${app.color}35`,
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {app.title}
                        </span>
                        <span
                          className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: app.color }}
                        >
                          {app.screenshots.length} Screens
                        </span>
                      </div>
                      <div className="text-xs text-indigo-700 font-semibold font-mono">
                        {app.domain}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {app.tagline}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0 pl-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 font-semibold border border-stone-200 hidden sm:inline-block">
                      {app.techBadge}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'translate-x-1' : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                      style={{ color: isSelected ? app.color : undefined }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Direct Play Store Link for Selected App */}
            <div className="pt-2">
              <a
                href={currentApp.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white hover:opacity-95 transition-all text-xs sm:text-sm shadow-md shadow-indigo-500/20 text-center"
              >
                <span>View {currentApp.title} on Google Play Store</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Flagship Smartphone with Real Full-Size Screenshot Slider */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
            
            {/* Dynamic Halo Glow matching current app */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-[60px] blur-3xl opacity-35 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: currentApp.color }}
            />

            {/* Titanium Chassis Smartphone Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[52px] p-3 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.2)] border-2 border-slate-700/80 ring-1 ring-slate-900">
              
              {/* Metallic Side Hardware Buttons */}
              <div className="absolute -left-[4px] top-24 w-[3px] h-9 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -left-[4px] top-52 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -right-[4px] top-32 w-[3px] h-16 bg-slate-600 rounded-r shadow-sm" />

              {/* Inner Smartphone Screen Display */}
              <div className="relative w-full h-[600px] sm:h-[660px] bg-slate-950 rounded-[42px] overflow-hidden flex flex-col border border-slate-700 shadow-inner group/screen">
                
                {/* Diagonal Glass Sheen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/20 pointer-events-none z-30" />

                {/* Top Status Bar with Dynamic Island */}
                <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-100 z-20 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
                  <span>9:41</span>

                  {/* Dynamic Island Capsule */}
                  <div className="px-3 py-0.5 rounded-full bg-black flex items-center gap-1.5 shadow-sm border border-slate-800">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: currentApp.color }}
                    />
                    <span className="text-[10px] text-white font-mono font-bold">
                      {currentApp.title.split(' ')[0]}
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

                {/* Top Slide HUD Controls */}
                <div className="absolute top-12 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white shadow-md pointer-events-auto flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Slide {currentSlideIndex + 1} of {activeScreenshots.length}
                  </span>

                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    {/* Auto-play toggle */}
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="p-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white hover:bg-black transition shadow-md"
                      title={isAutoPlaying ? 'Pause Slideshow' : 'Resume Slideshow'}
                    >
                      {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>

                    {/* Fullscreen Zoom */}
                    <button
                      onClick={() => setFullscreenImage(activeScreenshots[currentSlideIndex])}
                      className="p-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white hover:bg-black transition shadow-md"
                      title="View Full Resolution"
                    >
                      <Maximize2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Main Full-Size Play Store Screenshot Canvas */}
                <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-slate-950">
                  {activeScreenshots.length > 0 ? (
                    <img
                      key={`${selectedAppId}-${currentSlideIndex}`}
                      src={activeScreenshots[currentSlideIndex]}
                      alt={`${currentApp.title} Play Store Screenshot ${currentSlideIndex + 1}`}
                      className="w-full h-full object-cover object-top transition-opacity duration-300 cursor-pointer"
                      onClick={() => setFullscreenImage(activeScreenshots[currentSlideIndex])}
                      loading="eager"
                    />
                  ) : (
                    <div className="p-6 text-center text-slate-400 font-mono text-xs">
                      Loading Play Store Screenshot...
                    </div>
                  )}

                  {/* Left Slide Arrow */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black hover:scale-110 active:scale-95 transition shadow-lg opacity-85 hover:opacity-100"
                    aria-label="Previous Screenshot"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Right Slide Arrow */}
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black hover:scale-110 active:scale-95 transition shadow-lg opacity-85 hover:opacity-100"
                    aria-label="Next Screenshot"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Indicator Dots */}
                  <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-1.5">
                    {activeScreenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlideIndex(i)}
                        className={`transition-all rounded-full ${
                          i === currentSlideIndex
                            ? 'w-5 h-1.5 bg-white shadow-md'
                            : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Android Gesture Bar */}
                <div className="p-2 bg-slate-950 border-t border-white/10 flex items-center justify-center relative z-20">
                  <div className="w-24 sm:w-28 h-1 bg-slate-600 rounded-full" />
                </div>

              </div>
            </div>

            {/* Thumbnail Strip & Feature Caption Box below the phone */}
            <div className="w-full max-w-[370px] mt-4 space-y-2.5 text-center">
              
              {/* Feature Caption Card */}
              <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase" style={{ color: currentApp.color }}>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Feature in Slide {currentSlideIndex + 1}:</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                  {currentApp.captions[currentSlideIndex] || 'Official Google Play Store in-app showcase'}
                </div>
              </div>

              {/* Clickable Mini Thumbnail Strip */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto p-1.5 bg-white/80 backdrop-blur-md rounded-2xl border border-stone-200/90 shadow-xs">
                {activeScreenshots.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`relative w-10 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      idx === currentSlideIndex
                        ? 'ring-2 ring-indigo-400 scale-105 shadow-sm'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    style={{
                      borderColor: idx === currentSlideIndex ? currentApp.color : 'transparent',
                    }}
                  >
                    <img
                      src={thumbUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* High-Resolution Fullscreen Screenshot Modal */}
        {fullscreenImage && (
          <div
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center max-h-[92vh]"
            >
              <button
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-3">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {currentApp.title}
                </h3>
                <p className="text-xs text-indigo-700 font-mono font-semibold">
                  Google Play Store Official Full-Size Screenshot (Slide {currentSlideIndex + 1})
                </p>
              </div>

              <div className="w-full flex items-center justify-center overflow-auto max-h-[72vh] p-2 bg-stone-50 rounded-2xl border border-stone-200">
                <img
                  src={fullscreenImage}
                  alt={`${currentApp.title} Full View`}
                  className="max-h-[68vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="mt-3.5 w-full flex items-center justify-between">
                <div className="text-xs font-mono text-slate-500">
                  {currentApp.captions[currentSlideIndex]}
                </div>
                <a
                  href={currentApp.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm shrink-0"
                >
                  <span>Open on Play Store</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
