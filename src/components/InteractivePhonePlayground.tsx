'use client';

import React, { useState } from 'react';
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
  SlidersHorizontal
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
      color: '#10b981',
      playStore: 'https://play.google.com/store/apps/details?id=com.orelogic.rapagraApp&hl=en',
    },
    {
      id: 'immortal',
      title: 'Immortal Seats',
      subtitle: 'Concert Ticketing & 360° Real-Time Seat View',
      icon: Ticket,
      color: '#00f0ff',
      playStore: 'https://play.google.com/store/apps/details?id=com.immortalSeats.android&hl=en',
    },
    {
      id: 'step',
      title: 'Step App Charity',
      subtitle: 'Pedometer Sensor & European Cancer Fund Donator',
      icon: Footprints,
      color: '#059669',
      // No Play Store link - completed project from CV
    },
    {
      id: 'starting5',
      title: 'Starting 5 (Flutter)',
      subtitle: 'Youth Basketball Coaching & Video Drill Player',
      icon: Trophy,
      color: '#ec4899',
      playStore: 'https://play.google.com/store/apps/details?id=com.ogrelogic.startingfive&hl=en_IN',
    },
    {
      id: 'meetgoals',
      title: 'MeetGoals Focus',
      subtitle: 'WorkManager Habit Tracker & Pomodoro Flow',
      icon: Target,
      color: '#8b5cf6',
      playStore: 'https://play.google.com/store/apps/details?id=com.meetgoals.App&hl=en_IN',
    },
  ];

  const currentAppMeta = appTabs.find((a) => a.id === selectedApp)!;

  return (
    <section id="simulator" className="py-20 sm:py-28 lg:py-32 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-sky-300 shadow-md">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Device Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Live App <span className="text-gradient-vibrant">Simulator</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Test real architectural user flows, state management, and edge AI detection directly on the simulated device below.
          </p>
        </div>

        {/* Device Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* App Selector Controls (Left Side) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest font-bold mb-2">
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
                      ? 'luxury-glass border-l-4 shadow-xl'
                      : 'bg-slate-900/60 border border-white/10 hover:border-white/20'
                  }`}
                  style={{
                    borderLeftColor: isSelected ? tab.color : undefined,
                    boxShadow: isSelected ? `0 10px 30px -10px ${tab.color}40` : undefined,
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 shadow-md"
                      style={{ backgroundColor: `${tab.color}25`, color: tab.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                        {tab.title}
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: tab.color }} />
                        )}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                        {tab.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-500'
                    }`}
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
                  className="w-full flex items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white hover:opacity-95 transition-all text-xs sm:text-sm shadow-xl shadow-indigo-500/25 text-center"
                >
                  <span>Launch {currentAppMeta.title} on Play Store</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full flex items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl font-bold luxury-glass border border-white/10 text-slate-300 text-xs sm:text-sm text-center">
                  <span>Completed Project (Documented in CV)</span>
                </div>
              )}
            </div>
          </div>

          {/* Simulated Smartphone Frame (Mobile Responsive Size) */}
          <div className="lg:col-span-7 flex justify-center mt-4 lg:mt-0">
            {/* Phone Outer Bezel */}
            <div
              className="relative w-full max-w-[310px] sm:max-w-[360px] h-[580px] sm:h-[660px] bg-[#0c1429] rounded-[44px] sm:rounded-[52px] p-3 shadow-2xl border-[3px] sm:border-4 transition-all duration-500 select-none"
              style={{
                borderColor: `${currentAppMeta.color}80`,
                boxShadow: `0 20px 50px -15px ${currentAppMeta.color}35`,
              }}
            >
              
              {/* Screen Inner Frame */}
              <div className="relative w-full h-full bg-[#060c1e] rounded-[36px] sm:rounded-[42px] overflow-hidden flex flex-col border border-white/10">
                
                {/* Dynamic Island Status Bar */}
                <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-300 z-20 border-b border-white/10 bg-[#09122a]">
                  <span className="font-bold text-white">9:41</span>
                  
                  {/* Dynamic Island Capsule */}
                  <div className="px-2.5 py-0.5 rounded-full bg-black/80 border border-white/15 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentAppMeta.color }} />
                    <span className="text-[9px] sm:text-[10px] text-slate-300 font-mono font-bold">{currentAppMeta.title.split(' ')[0]}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="font-bold text-emerald-400">5G</span>
                    <span className="w-3.5 h-2 bg-emerald-400 rounded-sm inline-block" />
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="flex-1 p-3.5 sm:p-5 overflow-y-auto space-y-3.5">
                  
                  {/* APP 1: RAPAGRA */}
                  {selectedApp === 'rapagra' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Sprout className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-xs sm:text-sm text-white">Rapagra Smart Agri</span>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                          IoT Active
                        </span>
                      </div>

                      {/* Sensor telemetry */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-900 border border-emerald-500/30">
                          <div className="text-slate-400 text-[10px]">Soil Moisture</div>
                          <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">76% Optimal</div>
                        </div>
                        <div className="p-3 rounded-2xl bg-gradient-to-b from-sky-950/40 to-slate-900 border border-sky-500/30">
                          <div className="text-slate-400 text-[10px]">Crop Quality</div>
                          <div className="text-base sm:text-lg font-bold text-sky-400 font-mono mt-0.5">Grade A (98%)</div>
                        </div>
                      </div>

                      {/* AI Leaf Scanner */}
                      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-emerald-500/40 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-white font-bold text-[11px] sm:text-xs">CameraX AI Disease Detector</span>
                          <span className="text-emerald-400 font-mono text-[9px] font-bold">TFLite</span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-slate-300 leading-relaxed">
                          {cropScanned
                            ? 'Diagnostic result: Leaf tissue healthy. Zero pest infection. Pesticide savings: +42%.'
                            : 'Trigger simulated CameraX frame analysis on crop foliage.'}
                        </p>
                        <button
                          onClick={() => {
                            setCropScanned(!cropScanned);
                            triggerConfetti();
                          }}
                          className="w-full py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs hover:opacity-90 transition shadow-md"
                        >
                          {cropScanned ? 'Reset Analysis' : 'Run Neural Foliage Scan'}
                        </button>
                      </div>

                      {/* Chemical Optimizer */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 space-y-1.5 text-xs">
                        <div className="flex justify-between font-mono text-[10px] text-slate-300">
                          <span>Chemical Spraying Reduced</span>
                          <span className="text-emerald-400 font-bold">-42% Saved</span>
                        </div>
                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full w-[58%]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* APP 2: IMMORTAL SEATS */}
                  {selectedApp === 'immortal' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-4 h-4 text-cyan-400" />
                          <span className="font-bold text-xs sm:text-sm text-white">Immortal Seats</span>
                        </div>
                        <span className="text-[9px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-bold">
                          Live Ticket Map
                        </span>
                      </div>

                      {/* Stage view */}
                      <div className="p-3.5 rounded-2xl bg-[#091126] border border-cyan-500/30 text-center space-y-2">
                        <div className="py-1 rounded-lg bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-[11px] font-mono text-cyan-300 font-bold">
                          MAIN STAGE / ARENA
                        </div>
                        <div className="text-[10px] text-slate-300">Tap interactive seat tier:</div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {(['A1', 'A2', 'B3', 'VIP-1'] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => setSelectedSeat(s)}
                              className={`py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                                selectedSeat === s
                                  ? 'bg-cyan-400 text-slate-950 ring-2 ring-cyan-200'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Booking summary */}
                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 space-y-2 text-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">Selected Tier:</span>
                          <span className="text-cyan-300 font-mono font-bold">{selectedSeat} (Center View)</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">Total Price:</span>
                          <span className="text-white font-mono font-bold">$125.00</span>
                        </div>
                        <button
                          onClick={triggerConfetti}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs hover:opacity-90 transition shadow-lg"
                        >
                          Checkout via Gateway
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 3: STEP APP */}
                  {selectedApp === 'step' && (
                    <div className="space-y-3.5 text-center">
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-left">
                        <div className="flex items-center gap-2">
                          <Footprints className="w-4 h-4 text-emerald-400" />
                          <span className="font-bold text-xs sm:text-sm text-white">Step App Charity</span>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                          Sensor Active
                        </span>
                      </div>

                      {/* Step Circle */}
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto flex flex-col items-center justify-center rounded-full border-4 border-emerald-400/50 bg-emerald-500/10 shadow-lg shadow-emerald-500/20">
                        <Footprints className="w-5 h-5 text-emerald-400 mb-0.5" />
                        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                          {stepCount.toLocaleString()}
                        </span>
                        <span className="text-[9px] text-slate-300 font-mono">/ 10,000 Target</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs text-left">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                          <div className="text-slate-400 text-[9px]">Calories Burned</div>
                          <div className="text-sm sm:text-base font-bold text-amber-400 font-mono">412 kcal</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10">
                          <div className="text-slate-400 text-[9px]">Charity Coins</div>
                          <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono">{coinsDonated} Coins</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setStepCount((prev) => prev + 500)}
                          className="flex-1 py-2 rounded-xl bg-slate-800 text-white text-[11px] font-semibold hover:bg-slate-700 transition"
                        >
                          +500 Steps
                        </button>
                        <button
                          onClick={() => {
                            setCoinsDonated((prev) => prev + 10);
                            triggerConfetti();
                          }}
                          className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[11px] font-bold hover:opacity-90 transition"
                        >
                          Donate Coins
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 4: STARTING 5 */}
                  {selectedApp === 'starting5' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-pink-400" />
                          <span className="font-bold text-xs sm:text-sm text-white">Starting 5 (Flutter)</span>
                        </div>
                        <span className="text-[9px] font-mono bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded-full font-bold">
                          Flutter 60 FPS
                        </span>
                      </div>

                      {/* Video Player */}
                      <div className="relative aspect-video rounded-2xl bg-gradient-to-tr from-pink-950/40 to-slate-900 border border-pink-500/40 flex items-center justify-center overflow-hidden group cursor-pointer shadow-lg shadow-pink-500/20">
                        <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                          <Play className="w-5 h-5 ml-0.5" />
                        </div>
                        <span className="absolute bottom-2 left-2.5 text-[10px] sm:text-xs font-semibold text-white">
                          Shooting Drill #3
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 space-y-2 text-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">Drill Completion:</span>
                          <span className="text-pink-400 font-mono font-bold">88% Mastered</span>
                        </div>
                        <button
                          onClick={triggerConfetti}
                          className="w-full py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold text-xs hover:opacity-90 transition"
                        >
                          Book Coach Evaluation
                        </button>
                      </div>
                    </div>
                  )}

                  {/* APP 5: MEETGOALS */}
                  {selectedApp === 'meetgoals' && (
                    <div className="space-y-3.5 text-center">
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-left">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-purple-400" />
                          <span className="font-bold text-xs sm:text-sm text-white">MeetGoals Focus</span>
                        </div>
                        <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-bold">
                          WorkManager
                        </span>
                      </div>

                      {/* Pomodoro */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/50 via-indigo-950/40 to-slate-900 border border-purple-500/40 space-y-2.5 shadow-lg shadow-purple-500/20">
                        <div className="text-[10px] text-purple-300 font-mono font-bold">Deep Focus Cycle</div>
                        <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-widest">
                          {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                        </div>
                        <div className="flex justify-center gap-2 pt-1.5">
                          <button
                            onClick={() => setTimerRunning(!timerRunning)}
                            className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-xs hover:opacity-90 transition flex items-center gap-1.5 shadow-md"
                          >
                            {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                            {timerRunning ? 'Pause' : 'Start'}
                          </button>
                          <button
                            onClick={() => {
                              setTimerSeconds(1500);
                              setTimerRunning(false);
                            }}
                            className="p-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-between text-xs text-left">
                        <div>
                          <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-orange-400" />
                            18 Days Streak
                          </div>
                          <div className="text-[9px] text-slate-300">Clean Architecture habit</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[9px]">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Home Indicator */}
                <div className="p-2.5 bg-[#09122a] border-t border-white/10 flex items-center justify-center">
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
