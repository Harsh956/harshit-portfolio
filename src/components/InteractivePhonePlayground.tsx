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
  Wifi
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InteractivePhonePlayground() {
  const [selectedApp, setSelectedApp] = useState<'rapagra' | 'immortal' | 'step' | 'starting5' | 'meetgoals'>('rapagra');
  const [stepCount, setStepCount] = useState(8420);
  const [coinsDonated, setCoinsDonated] = useState(84);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(1500);
  const [selectedSeat, setSelectedSeat] = useState<'A1' | 'A2' | 'B3' | 'VIP-1'>('VIP-1');
  const [cropScanned, setCropScanned] = useState(false);

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

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const appTabs: {
    id: 'rapagra' | 'immortal' | 'step' | 'starting5' | 'meetgoals';
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    playStore?: string;
  }[] = [
    {
      id: 'rapagra',
      title: 'Rapagra Smart Agri',
      subtitle: 'IoT Sensor Sync & AI Crop Leaf Scanner',
      icon: Sprout,
      color: '#059669',
      playStore: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    },
    {
      id: 'immortal',
      title: 'Immortal Seats',
      subtitle: 'Concert Ticketing & 360° Real-Time Seat View',
      icon: Ticket,
      color: '#0284c7',
      playStore: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    },
    {
      id: 'step',
      title: 'Step App Charity',
      subtitle: 'Pedometer Sensor & European Cancer Fund Donator',
      icon: Footprints,
      color: '#047857',
    },
    {
      id: 'starting5',
      title: 'Starting 5 (Flutter)',
      subtitle: 'Youth Basketball Coaching & Video Drill Player',
      icon: Trophy,
      color: '#db2777',
      playStore: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    },
    {
      id: 'meetgoals',
      title: 'MeetGoals Focus',
      subtitle: 'WorkManager Habit Tracker & Pomodoro Flow',
      icon: Target,
      color: '#7c3aed',
      playStore: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    },
  ];

  const currentAppMeta = appTabs.find((a) => a.id === selectedApp)!;

  return (
    <section id="simulator" className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-sky-700 shadow-sm">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Device Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live App <span className="text-gradient-vibrant">Simulator</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Test real architectural user flows, state management, and edge AI detection directly on the simulated device below.
          </p>
        </div>

        {/* Device Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* App Selector Controls (Left Side) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono text-sky-700 uppercase tracking-widest font-bold mb-2">
              Select Production Experience:
            </h3>

            {appTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = selectedApp === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedApp(tab.id as any)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-l-4 shadow-md'
                      : 'bg-white/80 border border-stone-200 hover:border-slate-300 shadow-xs'
                  }`}
                  style={{
                    borderLeftColor: isSelected ? tab.color : undefined,
                    boxShadow: isSelected ? `0 10px 30px -10px ${tab.color}30` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 shadow-xs"
                      style={{ backgroundColor: `${tab.color}15`, color: tab.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                        {tab.title}
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: tab.color }} />
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {tab.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'translate-x-1' : 'text-slate-400'
                    }`}
                    style={{ color: isSelected ? tab.color : undefined }}
                  />
                </button>
              );
            })}

            <div className="pt-3">
              {currentAppMeta.playStore ? (
                <a
                  href={currentAppMeta.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white hover:opacity-95 transition-all text-xs sm:text-sm shadow-md shadow-indigo-500/20 text-center"
                >
                  <span>Launch {currentAppMeta.title} on Play Store</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl font-bold bg-white border border-stone-200 text-slate-600 text-xs sm:text-sm text-center shadow-xs">
                  <span>Completed Project (Documented in CV)</span>
                </div>
              )}
            </div>
          </div>

          {/* Simulated Smartphone Frame */}
          <div className="lg:col-span-7 flex justify-center mt-4 lg:mt-0">
            {/* Phone Outer Bezel */}
            <div
              className="relative w-full max-w-[310px] sm:max-w-[360px] h-[580px] sm:h-[660px] bg-slate-900 rounded-[46px] sm:rounded-[52px] p-3 shadow-2xl border-2 border-slate-700/80 transition-all duration-500 select-none ring-1 ring-slate-800"
              style={{
                boxShadow: `0 20px 50px -15px ${currentAppMeta.color}35`,
              }}
            >
              
              {/* Screen Inner Frame */}
              <div className="relative w-full h-full bg-[#FAFAFC] rounded-[38px] sm:rounded-[42px] overflow-hidden flex flex-col border border-slate-300/80">
                
                {/* Dynamic Island Status Bar */}
                <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-800 z-20 border-b border-slate-200/80 bg-white/95">
                  <span className="font-bold text-slate-900">9:41</span>
                  
                  {/* Dynamic Island Capsule */}
                  <div className="px-2.5 py-0.5 rounded-full bg-slate-950 flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentAppMeta.color }} />
                    <span className="text-[9px] sm:text-[10px] text-white font-mono font-bold">{currentAppMeta.title.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="font-bold text-emerald-600">5G</span>
                    <Wifi className="w-3 h-3 text-slate-700" />
                    <div className="w-3.5 h-2 bg-slate-800 rounded-sm p-[1px] flex items-center">
                      <div className="w-2.5 h-full bg-emerald-500 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-1 p-3.5 sm:p-5 overflow-y-auto space-y-3.5 text-slate-800">
                  
                  {/* APP 1: RAPAGRA */}
                  {selectedApp === 'rapagra' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <Sprout className="w-4 h-4 text-emerald-600" />
                          <span className="font-bold text-xs sm:text-sm text-slate-900">Rapagra Smart Agri</span>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          IoT Active
                        </span>
                      </div>

                      {/* Sensor telemetry */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-2xl bg-white border border-emerald-100 shadow-xs">
                          <div className="text-slate-500 text-[10px]">Soil Moisture</div>
                          <div className="text-base sm:text-lg font-bold text-emerald-700 font-mono mt-0.5">76% Optimal</div>
                        </div>
                        <div className="p-3 rounded-2xl bg-white border border-sky-100 shadow-xs">
                          <div className="text-slate-500 text-[10px]">Crop Quality</div>
                          <div className="text-base sm:text-lg font-bold text-sky-700 font-mono mt-0.5">Grade A (98%)</div>
                        </div>
                      </div>

                      {/* AI Leaf Scanner */}
                      <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-900 font-bold text-[11px] sm:text-xs">CameraX AI Disease Detector</span>
                          <span className="text-emerald-700 font-mono text-[9px] font-bold">TFLite</span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed">
                          {cropScanned
                            ? 'Diagnostic result: Leaf tissue healthy. Zero pest infection. Pesticide savings: +42%.'
                            : 'Trigger simulated CameraX frame analysis on crop foliage.'}
                        </p>
                        <button
                          onClick={() => {
                            setCropScanned(!cropScanned);
                            triggerConfetti();
                          }}
                          className="w-full py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition shadow-xs"
                        >
                          {cropScanned ? 'Reset Analysis' : 'Run Neural Foliage Scan'}
                        </button>
                      </div>

                      {/* Chemical Optimizer */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs shadow-xs">
                        <div className="flex justify-between font-mono text-[10px] text-slate-600">
                          <span>Chemical Spraying Reduced</span>
                          <span className="text-emerald-600 font-bold">-42% Saved</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-[58%]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* APP 2: IMMORTAL SEATS */}
                  {selectedApp === 'immortal' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-sky-600" />
                          <span className="font-bold text-xs sm:text-sm text-slate-900">Immortal Seats</span>
                        </div>
                        <span className="text-[9px] font-mono bg-sky-50 text-sky-700 border border-sky-200 px-2 py-0.5 rounded-full font-bold">
                          Live Ticket Map
                        </span>
                      </div>

                      {/* Stage view */}
                      <div className="p-3.5 rounded-2xl bg-white border border-sky-100 text-center space-y-2 shadow-xs">
                        <div className="py-1 rounded-lg bg-sky-50 text-[11px] font-mono text-sky-700 font-bold border border-sky-200">
                          MAIN STAGE / ARENA
                        </div>
                        <div className="text-[10px] text-slate-500">Tap interactive seat tier:</div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {(['A1', 'A2', 'B3', 'VIP-1'] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => setSelectedSeat(s)}
                              className={`py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                                selectedSeat === s
                                  ? 'bg-sky-600 text-white ring-2 ring-sky-300 shadow-xs'
                                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Booking summary */}
                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs shadow-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">Selected Tier:</span>
                          <span className="text-sky-700 font-mono font-bold">{selectedSeat} (Center View)</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">Total Price:</span>
                          <span className="text-slate-900 font-mono font-bold">$125.00</span>
                        </div>
                        <button
                          onClick={triggerConfetti}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-bold text-xs hover:opacity-90 transition shadow-sm"
                        >
                          Checkout via Gateway
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 3: STEP APP */}
                  {selectedApp === 'step' && (
                    <div className="space-y-3.5 text-center">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-left">
                        <div className="flex items-center gap-2">
                          <Footprints className="w-4 h-4 text-emerald-600" />
                          <span className="font-bold text-xs sm:text-sm text-slate-900">Step App Charity</span>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                          Sensor Active
                        </span>
                      </div>

                      {/* Step Circle */}
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto flex flex-col items-center justify-center rounded-full border-4 border-emerald-500/40 bg-emerald-50 shadow-md">
                        <Footprints className="w-5 h-5 text-emerald-600 mb-0.5" />
                        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                          {stepCount.toLocaleString()}
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">/ 10,000 Target</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-left">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                          <div className="text-slate-500 text-[9px]">Calories Burned</div>
                          <div className="text-sm sm:text-base font-bold text-amber-600 font-mono">412 kcal</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                          <div className="text-slate-500 text-[9px]">Charity Coins</div>
                          <div className="text-sm sm:text-base font-bold text-emerald-600 font-mono">{coinsDonated} Coins</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setStepCount((prev) => prev + 500)}
                          className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-semibold hover:bg-slate-200 transition"
                        >
                          +500 Steps
                        </button>
                        <button
                          onClick={() => {
                            setCoinsDonated((prev) => prev + 10);
                            triggerConfetti();
                          }}
                          className="flex-1 py-2 rounded-xl bg-emerald-600 text-white text-[11px] font-bold hover:bg-emerald-700 transition shadow-xs"
                        >
                          Donate Coins
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 4: STARTING 5 */}
                  {selectedApp === 'starting5' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-pink-600" />
                          <span className="font-bold text-xs sm:text-sm text-slate-900">Starting 5 (Flutter)</span>
                        </div>
                        <span className="text-[9px] font-mono bg-pink-50 text-pink-700 border border-pink-200 px-2 py-0.5 rounded-full font-bold">
                          Flutter 60 FPS
                        </span>
                      </div>

                      {/* Video Player */}
                      <div className="relative aspect-video rounded-2xl bg-gradient-to-tr from-pink-100 to-purple-100 border border-pink-200 flex items-center justify-center overflow-hidden group cursor-pointer shadow-xs">
                        <div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                        <span className="absolute bottom-2 left-2.5 text-[10px] sm:text-xs font-semibold text-slate-800">
                          Shooting Drill #3
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs shadow-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-500">Drill Completion:</span>
                          <span className="text-pink-600 font-mono font-bold">88% Mastered</span>
                        </div>
                        <button
                          onClick={triggerConfetti}
                          className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs hover:opacity-90 transition shadow-xs"
                        >
                          Book Coach Evaluation
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 5: MEETGOALS */}
                  {selectedApp === 'meetgoals' && (
                    <div className="space-y-3.5 text-center">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 text-left">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-purple-600" />
                          <span className="font-bold text-xs sm:text-sm text-slate-900">MeetGoals Focus</span>
                        </div>
                        <span className="text-[9px] font-mono bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-full font-bold">
                          WorkManager
                        </span>
                      </div>

                      {/* Pomodoro */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 space-y-2.5 shadow-xs">
                        <div className="text-[10px] text-purple-700 font-mono font-bold">Deep Focus Cycle</div>
                        <div className="text-4xl sm:text-5xl font-black font-mono text-purple-800 tracking-widest">
                          {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                        </div>
                        <div className="flex justify-center gap-2 pt-1.5">
                          <button
                            onClick={() => setTimerRunning(!timerRunning)}
                            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs hover:opacity-90 transition flex items-center gap-1.5 shadow-xs"
                          >
                            {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                            {timerRunning ? 'Pause' : 'Start'}
                          </button>
                          <button
                            onClick={() => {
                              setTimerSeconds(1500);
                              setTimerRunning(false);
                            }}
                            className="p-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs text-left shadow-xs">
                        <div>
                          <div className="font-bold text-slate-900 text-[11px] flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                            18 Days Streak
                          </div>
                          <div className="text-[9px] text-slate-500">Clean Architecture habit</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono font-bold text-[9px] border border-emerald-200">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Home Indicator */}
                <div className="p-2.5 bg-white border-t border-slate-200 flex items-center justify-center">
                  <div className="w-20 sm:w-24 h-1 bg-slate-300 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
