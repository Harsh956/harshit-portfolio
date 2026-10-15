'use client';

import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Sprout,
  Ticket,
  Footprints,
  Trophy,
  Target,
  Play,
  Pause,
  RotateCcw,
  Check,
  Flame,
  Shield,
  Heart,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  SlidersHorizontal,
  Wifi,
  Scan,
  Activity,
  Compass,
  MapPin,
  Clock,
  CheckCircle2,
  Volume2,
  Share2,
  RefreshCw,
  QrCode,
  Zap,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractivePhonePlayground() {
  const [selectedApp, setSelectedApp] = useState<'rapagra' | 'immortal' | 'step' | 'starting5' | 'meetgoals'>('rapagra');
  
  // App 1: Rapagra state
  const [leafScanned, setLeafScanned] = useState(false);
  const [scanningActive, setScanningActive] = useState(false);

  // App 2: Immortal Seats state
  const [selectedSeat, setSelectedSeat] = useState<string>('VIP-1');
  const [bookedSeats, setBookedSeats] = useState<string[]>(['B1', 'C3', 'A4']);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // App 3: Step App state
  const [stepCount, setStepCount] = useState(8420);
  const [coinsDonated, setCoinsDonated] = useState(84);
  const [stepGoal] = useState(10000);

  // App 4: Starting 5 state
  const [drillPlaying, setDrillPlaying] = useState(false);
  const [drillProgress, setDrillProgress] = useState(65);
  const [drillCompleted, setDrillCompleted] = useState(false);

  // App 5: MeetGoals state
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hilt DI setup in Android', done: true },
    { id: 2, text: 'Kotlin Coroutines StateFlow', done: true },
    { id: 3, text: 'Room DB entity indexing', done: false },
  ]);

  // Pomodoro countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  // Basketball drill video progress simulation
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (drillPlaying) {
      interval = setInterval(() => {
        setDrillProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [drillPlaying]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const handleScanLeaf = () => {
    setScanningActive(true);
    setTimeout(() => {
      setScanningActive(false);
      setLeafScanned(true);
      triggerConfetti();
    }, 1200);
  };

  const appTabs = [
    {
      id: 'rapagra' as const,
      title: 'Rapagra Smart Agri',
      domain: 'AgriTech • IoT & Edge AI',
      subtitle: 'IoT BLE Sensors & TFLite Neural Leaf Disease Scanner',
      icon: Sprout,
      color: '#059669',
      techBadge: 'CameraX + TFLite',
      playStore: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    },
    {
      id: 'immortal' as const,
      title: 'Immortal Seats',
      domain: 'Concert Ticketing • 360° Arena',
      subtitle: 'Real-Time MetLife Arena Seat Map & Live Booking',
      icon: Ticket,
      color: '#0284c7',
      techBadge: 'Canvas 360° + Retrofit',
      playStore: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    },
    {
      id: 'step' as const,
      title: 'Step App Charity',
      domain: 'Health & Charity Pedometer',
      subtitle: 'Hardware Step Sensor & European Cancer Fund Donator',
      icon: Footprints,
      color: '#0d9488',
      techBadge: 'Hardware Step Counter',
    },
    {
      id: 'starting5' as const,
      title: 'Starting 5 (Flutter)',
      domain: 'Sports & Video Coaching',
      subtitle: 'Youth Basketball Tactical Court Player & Drill Analytics',
      icon: Trophy,
      color: '#db2777',
      techBadge: 'Flutter 60 FPS Video',
      playStore: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    },
    {
      id: 'meetgoals' as const,
      title: 'MeetGoals Focus',
      domain: 'Productivity & Habits',
      subtitle: 'WorkManager Background Flow & Circular Pomodoro Cycle',
      icon: Target,
      color: '#7c3aed',
      techBadge: 'WorkManager + Room DB',
      playStore: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    },
  ];

  const currentApp = appTabs.find((a) => a.id === selectedApp)!;

  return (
    <section id="simulator" className="py-12 sm:py-16 lg:py-20 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-indigo-700 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Mobile Device Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live Interactive <span className="text-gradient-vibrant">Simulator</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience real production user flows, camera vision detection, 360° ticketing, pedometer sensors, and Flutter coaching directly on the simulated device below.
          </p>
        </div>

        {/* Studio Grid: Left Control Selector & Right Phone Device */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Interactive App Catalog Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-mono text-indigo-700 uppercase tracking-widest font-bold">
                Select Production App:
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                5 CV Experiences Available
              </span>
            </div>

            {appTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedApp === tab.id;
              return (
                <div
                  key={tab.id}
                  onClick={() => setSelectedApp(tab.id)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-white border-2 shadow-lg shadow-indigo-500/10'
                      : 'bg-white/80 border border-stone-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                  style={{
                    borderColor: isSelected ? tab.color : undefined,
                  }}
                >
                  {/* Left Accent indicator */}
                  {isSelected && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: tab.color }}
                    />
                  )}

                  <div className="flex items-center gap-3 sm:gap-4 pl-1">
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 shadow-xs"
                      style={{
                        backgroundColor: `${tab.color}15`,
                        color: tab.color,
                        border: `1px solid ${tab.color}35`,
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="text-left space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                          {tab.title}
                        </span>
                        {isSelected && (
                          <span
                            className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full text-white"
                            style={{ backgroundColor: tab.color }}
                          >
                            RUNNING
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-indigo-700 font-semibold font-mono">
                        {tab.domain}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {tab.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1.5 shrink-0 pl-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-100 text-slate-600 font-semibold border border-stone-200 hidden sm:inline-block">
                      {tab.techBadge}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'translate-x-1' : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                      style={{ color: isSelected ? tab.color : undefined }}
                    />
                  </div>
                </div>
              );
            })}

            {/* Launch App Store Action Banner */}
            <div className="pt-2">
              {currentApp.playStore ? (
                <a
                  href={currentApp.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white hover:opacity-95 transition-all text-xs sm:text-sm shadow-md shadow-indigo-500/20 text-center"
                >
                  <span>Launch {currentApp.title} on Google Play</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl font-bold bg-white border border-stone-200 text-slate-600 text-xs sm:text-sm text-center shadow-xs">
                  <span>Delivered Enterprise Project (Documented in CV)</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Ultra-Realistic Interactive Smartphone */}
          <div className="lg:col-span-7 flex justify-center items-center relative select-none">
            
            {/* Dynamic Halo Glow matching active app */}
            <div
              className="absolute -inset-4 sm:-inset-6 rounded-[60px] blur-3xl opacity-40 pointer-events-none transition-colors duration-700"
              style={{ backgroundColor: currentApp.color }}
            />

            {/* Titanium Chassis Frame */}
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[52px] p-3 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3),0_0_0_1px_rgba(255,255,255,0.2)] border-2 border-slate-700/80 ring-1 ring-slate-900">
              
              {/* Metallic Hardware Side Buttons */}
              <div className="absolute -left-[4px] top-24 w-[3px] h-9 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -left-[4px] top-52 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
              <div className="absolute -right-[4px] top-32 w-[3px] h-16 bg-slate-600 rounded-r shadow-sm" />

              {/* Inner Phone Screen Display */}
              <div className="relative w-full h-[600px] sm:h-[660px] bg-[#FAFAFC] rounded-[42px] overflow-hidden flex flex-col border border-slate-300 shadow-inner">
                
                {/* Diagonal Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/40 pointer-events-none z-30" />

                {/* Top Status Bar with Dynamic Island */}
                <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-800 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
                  <span>9:41</span>

                  {/* Dynamic Island Capsule */}
                  <div className="px-3 py-0.5 rounded-full bg-slate-950 flex items-center gap-1.5 shadow-sm border border-slate-800">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: currentApp.color }}
                    />
                    <span className="text-[10px] text-white font-mono font-bold">
                      {currentApp.title.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="text-[10px] font-mono font-bold text-emerald-600">5G</span>
                    <Wifi className="w-3 h-3 text-slate-700" />
                    <div className="w-3.5 h-2 bg-slate-800 rounded-sm p-[1px] flex items-center">
                      <div className="w-2.5 h-full bg-emerald-500 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Interactive Screen Scrollable Canvas */}
                <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 scrollbar-none text-slate-800 text-left">
                  
                  {/* ========================================================= */}
                  {/* APP 1: RAPAGRA (Smart Agri & AI Leaf Scanner) */}
                  {/* ========================================================= */}
                  {selectedApp === 'rapagra' && (
                    <div className="space-y-3">
                      
                      {/* App Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                            <Sprout className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Rapagra Smart Agri</div>
                            <div className="text-[9px] text-emerald-700 font-mono font-semibold">Plot #4 • Solanum Lycopersicum</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900">
                          BLE Live
                        </span>
                      </div>

                      {/* Camera Viewport with AI Scanner */}
                      <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 border-2 border-emerald-500/60 shadow-md flex items-center justify-center group">
                        
                        {/* Realistic Plant Foliage Background Image/Pattern */}
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-80"
                          style={{
                            backgroundImage: `radial-gradient(circle at center, rgba(16, 185, 129, 0.4) 0%, rgba(6, 78, 59, 0.9) 100%), linear-gradient(135deg, #064e3b 0%, #022c22 100%)`
                          }}
                        />

                        {/* Plant Leaf SVG Outline in Viewfinder */}
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <Sprout className="w-20 h-20 text-emerald-400/90 animate-pulse-glow" />
                          <span className="text-[10px] font-mono font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-full mt-2 border border-emerald-400/40">
                            Target: Leaf Tissue Core
                          </span>
                        </div>

                        {/* HUD Camera Reticles */}
                        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

                        {/* Animated Laser Scanning Beam */}
                        {scanningActive && (
                          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 shadow-[0_0_15px_#34d399] z-20 animate-bounce" />
                        )}

                        {/* Top HUD Tag */}
                        <div className="absolute top-3 inset-x-0 flex justify-center z-10">
                          <span className="text-[9px] font-mono text-emerald-300 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-emerald-400/30 font-bold">
                            {scanningActive ? 'Processing TFLite Tensor...' : leafScanned ? '✓ AI Diagnosis: 99.4% Healthy' : 'CameraX 60 FPS Viewfinder'}
                          </span>
                        </div>
                      </div>

                      {/* Interactive Trigger Button */}
                      <button
                        onClick={handleScanLeaf}
                        disabled={scanningActive}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs hover:from-emerald-500 hover:to-teal-500 transition shadow-sm flex items-center justify-center gap-2"
                      >
                        <Scan className="w-4 h-4" />
                        <span>{scanningActive ? 'Analyzing Foliage...' : leafScanned ? 'Scan Next Foliage Leaf' : 'Run CameraX AI Disease Scan'}</span>
                      </button>

                      {/* Live IoT Telemetry Metrics */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                          <div className="text-[10px] text-slate-500 font-mono">Soil Moisture</div>
                          <div className="text-base font-extrabold text-emerald-700 font-mono mt-0.5">78% Optimal</div>
                          <div className="text-[9px] text-emerald-600 font-semibold">IoT Probe #2 Synced</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-xs">
                          <div className="text-[10px] text-slate-500 font-mono">Nitrogen (NPK)</div>
                          <div className="text-base font-extrabold text-sky-700 font-mono mt-0.5">140 ppm</div>
                          <div className="text-[9px] text-sky-600 font-semibold">Nutrient Balance OK</div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* APP 2: IMMORTAL SEATS (360° Arena Ticketing) */}
                  {/* ========================================================= */}
                  {selectedApp === 'immortal' && (
                    <div className="space-y-3">
                      
                      {/* Event Banner */}
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-xs">
                        <div className="flex items-center justify-between text-[9px] font-mono text-sky-100 font-bold mb-0.5">
                          <span>METLIFE STADIUM • NEW YORK</span>
                          <span className="bg-white/20 px-1.5 py-0.5 rounded">360° SEAT MAP</span>
                        </div>
                        <h4 className="text-sm font-extrabold leading-tight">Coldplay: Music of the Spheres</h4>
                        <div className="text-[10px] text-sky-100 mt-1 flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>Sat, Oct 24 • 8:00 PM EST</span>
                        </div>
                      </div>

                      {/* Interactive Stadium Seat Viewport */}
                      <div className="p-3 rounded-2xl bg-white border border-sky-200 shadow-xs space-y-2 text-center">
                        <div className="py-1 rounded-lg bg-sky-50 text-[10px] font-mono text-sky-800 font-bold border border-sky-200">
                          🏟️ MAIN ARENA STAGE (CENTER VIEW)
                        </div>

                        <div className="text-[10px] text-slate-500 font-mono">
                          Tap any seat to select live panoramic view:
                        </div>

                        {/* Interactive Seat Matrix */}
                        <div className="grid grid-cols-4 gap-1.5 py-1">
                          {['VIP-1', 'VIP-2', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((seat) => {
                            const isChosen = selectedSeat === seat;
                            const isBooked = bookedSeats.includes(seat);
                            return (
                              <button
                                key={seat}
                                disabled={isBooked}
                                onClick={() => {
                                  setSelectedSeat(seat);
                                  setCheckoutComplete(false);
                                }}
                                className={`py-1.5 rounded-xl text-xs font-mono font-bold transition flex flex-col items-center ${
                                  isChosen
                                    ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300'
                                    : isBooked
                                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed line-through'
                                    : 'bg-stone-50 border border-stone-200 text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                                }`}
                              >
                                <span>{seat}</span>
                                <span className="text-[8px] font-normal opacity-80">
                                  {isBooked ? 'Sold' : seat.startsWith('VIP') ? '$249' : '$149'}
                                </span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="flex items-center justify-center gap-4 text-[9px] font-mono text-slate-500 pt-1">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-sky-600" /> Selected
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-stone-200 border" /> Available
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-slate-400" /> Booked
                          </span>
                        </div>
                      </div>

                      {/* Ticket Digital Pass */}
                      <div className="p-3 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between text-xs pb-2 border-b border-dashed border-stone-200">
                          <div>
                            <div className="text-[10px] text-slate-500 font-mono">Tier & Location</div>
                            <div className="font-bold text-slate-900">{selectedSeat} • Section 104</div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] text-slate-500 font-mono">Price</div>
                            <div className="font-extrabold text-sky-700 font-mono text-sm">
                              {selectedSeat.startsWith('VIP') ? '$249.00' : '$149.00'}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setCheckoutComplete(true);
                            triggerConfetti();
                          }}
                          className={`w-full py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm ${
                            checkoutComplete
                              ? 'bg-emerald-600 text-white'
                              : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:opacity-95'
                          }`}
                        >
                          {checkoutComplete ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Pass Reserved & QR Generated</span>
                            </>
                          ) : (
                            <span>Instant Reserve via Google Pay</span>
                          )}
                        </button>
                      </div>

                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* APP 3: STEP APP (Pedometer & Cancer Charity Fund) */}
                  {/* ========================================================= */}
                  {selectedApp === 'step' && (
                    <div className="space-y-3">
                      
                      {/* Charity Banner */}
                      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-teal-50 border border-teal-200 shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                            <Heart className="w-4 h-4 fill-white" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Step Charity Fund</div>
                            <div className="text-[9px] text-teal-700 font-mono font-semibold">European Cancer Research</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-200 text-teal-900">
                          Sensor Active
                        </span>
                      </div>

                      {/* Large SVG Circular Pedometer Ring */}
                      <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-xs text-center space-y-2">
                        <div className="relative w-36 h-36 mx-auto flex flex-col items-center justify-center">
                          {/* Circular SVG Ring */}
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#e2e8f0"
                              strokeWidth="8"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#0d9488"
                              strokeWidth="8"
                              strokeDasharray={2 * Math.PI * 42}
                              strokeDashoffset={2 * Math.PI * 42 * (1 - Math.min(stepCount / stepGoal, 1))}
                              strokeLinecap="round"
                              className="transition-all duration-700"
                            />
                          </svg>

                          {/* Inner Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <Footprints className="w-5 h-5 text-teal-600 animate-pulse" />
                            <div className="text-2xl font-extrabold font-mono text-slate-900 mt-0.5">
                              {stepCount.toLocaleString()}
                            </div>
                            <div className="text-[9px] font-mono text-slate-500">
                              / {stepGoal.toLocaleString()} Steps
                            </div>
                          </div>
                        </div>

                        {/* Tri-metrics */}
                        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-stone-100 text-center">
                          <div className="p-1.5 rounded-lg bg-stone-50">
                            <div className="text-[8px] text-slate-500 font-mono">Distance</div>
                            <div className="text-xs font-bold font-mono text-slate-800">
                              {(stepCount * 0.00076).toFixed(2)} km
                            </div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-stone-50">
                            <div className="text-[8px] text-slate-500 font-mono">Calories</div>
                            <div className="text-xs font-bold font-mono text-amber-600">
                              {Math.round(stepCount * 0.045)} kcal
                            </div>
                          </div>
                          <div className="p-1.5 rounded-lg bg-stone-50">
                            <div className="text-[8px] text-slate-500 font-mono">Charity Coins</div>
                            <div className="text-xs font-bold font-mono text-teal-600">
                              {coinsDonated} 🪙
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setStepCount((prev) => prev + 500)}
                          className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition shadow-xs"
                        >
                          +500 Steps Walk
                        </button>
                        <button
                          onClick={() => {
                            setCoinsDonated((prev) => prev + 10);
                            triggerConfetti();
                          }}
                          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold text-xs hover:opacity-95 transition shadow-xs"
                        >
                          Donate 10 Coins
                        </button>
                      </div>

                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* APP 4: STARTING 5 (Flutter Basketball Trainer) */}
                  {/* ========================================================= */}
                  {selectedApp === 'starting5' && (
                    <div className="space-y-3">
                      
                      {/* Drill Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-pink-50 border border-pink-200 shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-xs">
                            <Trophy className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Starting 5 Coach</div>
                            <div className="text-[9px] text-pink-700 font-mono font-semibold">Guard Shooting Drill #4</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-pink-200 text-pink-900">
                          Flutter 60 FPS
                        </span>
                      </div>

                      {/* Simulated Tactical Court Video Screen */}
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-amber-900 via-amber-800 to-amber-950 border-2 border-pink-300 shadow-md flex flex-col justify-between p-3 text-white">
                        
                        {/* Court Markings */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                          backgroundImage: `radial-gradient(circle at 50% 0%, white 40px, transparent 41px), linear-gradient(to right, white 1px, transparent 1px)`
                        }} />

                        {/* Top Video HUD */}
                        <div className="flex items-center justify-between text-[10px] font-mono z-10">
                          <span className="bg-black/60 px-2 py-0.5 rounded-full font-bold">Pick & Pop Drill</span>
                          <span className="bg-pink-600 px-2 py-0.5 rounded-full font-bold">LIVE COACHING</span>
                        </div>

                        {/* Center Animated Player Diagram */}
                        <div className="flex items-center justify-center gap-6 my-auto z-10">
                          <div className="w-8 h-8 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center justify-center shadow-md">
                            #1
                          </div>
                          <div className="h-0.5 w-12 border-t-2 border-dashed border-yellow-300 animate-pulse" />
                          <div className="w-8 h-8 rounded-full bg-pink-500 text-white font-bold text-xs flex items-center justify-center shadow-md">
                            #5
                          </div>
                        </div>

                        {/* Bottom Scrubber & Play Control */}
                        <div className="space-y-1.5 z-10 bg-black/50 p-2 rounded-xl backdrop-blur-xs">
                          <div className="flex items-center justify-between text-[9px] font-mono">
                            <button
                              onClick={() => setDrillPlaying(!drillPlaying)}
                              className="text-white hover:text-pink-300 font-bold flex items-center gap-1"
                            >
                              {drillPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                              <span>{drillPlaying ? 'Pause Video' : 'Play Drill'}</span>
                            </button>
                            <span>{drillProgress}% Completed</span>
                          </div>
                          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-pink-400 h-full transition-all duration-300"
                              style={{ width: `${drillProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Coach Performance Evaluation */}
                      <div className="p-3 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-mono text-[10px]">Shot Accuracy:</span>
                          <span className="font-extrabold text-pink-600 font-mono">92% (23/25 Made)</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-mono text-[10px]">Coach Rating:</span>
                          <span className="text-amber-500 font-bold">★★★★★ (Elite Form)</span>
                        </div>

                        <button
                          onClick={() => {
                            setDrillCompleted(true);
                            triggerConfetti();
                          }}
                          className="w-full py-2 rounded-xl bg-pink-600 text-white font-bold text-xs hover:bg-pink-700 transition shadow-xs"
                        >
                          {drillCompleted ? '✓ Completed Drill Logged' : 'Log Completed Drill in Flutter App'}
                        </button>
                      </div>

                    </div>
                  )}

                  {/* ========================================================= */}
                  {/* APP 5: MEETGOALS FOCUS (Pomodoro Timer & Habits) */}
                  {/* ========================================================= */}
                  {selectedApp === 'meetgoals' && (
                    <div className="space-y-3">
                      
                      {/* Sprint Header */}
                      <div className="flex items-center justify-between p-2.5 rounded-2xl bg-purple-50 border border-purple-200 shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                            <Target className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">MeetGoals Pro</div>
                            <div className="text-[9px] text-purple-700 font-mono font-semibold">Deep Focus Pomodoro Block</div>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-200 text-purple-900 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-orange-600 fill-orange-600" />
                          18 Days
                        </span>
                      </div>

                      {/* Animated Circular Pomodoro Ring */}
                      <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-xs text-center space-y-2">
                        <div className="relative w-36 h-36 mx-auto flex flex-col items-center justify-center">
                          {/* Circular SVG Ring */}
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#f1f5f9"
                              strokeWidth="8"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="42"
                              fill="none"
                              stroke="#7c3aed"
                              strokeWidth="8"
                              strokeDasharray={2 * Math.PI * 42}
                              strokeDashoffset={2 * Math.PI * 42 * (1 - timerSeconds / (25 * 60))}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                          </svg>

                          {/* Digits in Center */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-3xl font-black font-mono text-purple-800 tracking-wider">
                              {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                            </div>
                            <div className="text-[9px] font-mono text-slate-500">
                              {timerRunning ? 'Session Active' : 'Ready to Focus'}
                            </div>
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center gap-2 pt-1">
                          <button
                            onClick={() => setTimerRunning(!timerRunning)}
                            className="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition flex items-center gap-1.5 shadow-xs"
                          >
                            {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                            <span>{timerRunning ? 'Pause' : 'Start Sprint'}</span>
                          </button>
                          <button
                            onClick={() => {
                              setTimerSeconds(25 * 60);
                              setTimerRunning(false);
                            }}
                            className="p-2 rounded-xl bg-stone-100 text-slate-700 hover:bg-stone-200 transition"
                            title="Reset Timer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Interactive Task Checklist */}
                      <div className="p-3 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-1.5">
                        <div className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                          Sprint Tasks (Tap to Toggle):
                        </div>
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() =>
                              setTasks((prev) =>
                                prev.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
                              )
                            }
                            className={`p-2 rounded-xl text-xs font-mono transition cursor-pointer flex items-center justify-between ${
                              task.done
                                ? 'bg-purple-50 text-purple-800 line-through opacity-75'
                                : 'bg-stone-50 text-slate-800 hover:bg-purple-50/50'
                            }`}
                          >
                            <span>{task.text}</span>
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                task.done ? 'text-purple-600' : 'text-slate-300'
                              }`}
                            />
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                </div>

                {/* Bottom Android Gesture Navigation Bar */}
                <div className="p-2 bg-white border-t border-slate-200 flex items-center justify-center">
                  <div className="w-24 sm:w-28 h-1 bg-slate-300 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
