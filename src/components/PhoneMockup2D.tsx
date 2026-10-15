'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  CheckCircle,
  ShieldCheck,
  Zap,
  Code2,
  Layers,
  Activity,
  Sparkles,
  Wifi,
  BatteryCharging,
  Sprout,
  Ticket,
  Target,
  Play,
  Pause,
  RotateCcw,
  Check,
  Flame,
  ArrowRight
} from 'lucide-react';

export default function PhoneMockup2D() {
  const [activeApp, setActiveApp] = useState<'rapagra' | 'immortal' | 'meetgoals'>('rapagra');
  const [leafScanned, setLeafScanned] = useState(false);
  const [seatBooked, setSeatBooked] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);

  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerSeconds]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] mx-auto select-none">
      
      {/* Soft Multi-color Ambient Glow behind the phone */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-sky-300/30 via-indigo-300/25 to-pink-300/25 rounded-[56px] blur-2xl opacity-80 pointer-events-none animate-pulse-glow" />

      {/* Flagship Titanium Phone Chassis */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-[50px] p-3 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.2)] border-2 border-slate-700/60 ring-1 ring-slate-900/40">
        
        {/* Hardware side buttons (Metallic finish) */}
        <div className="absolute -left-[4px] top-24 w-[3px] h-9 bg-slate-600 rounded-l shadow-sm" />
        <div className="absolute -left-[4px] top-36 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
        <div className="absolute -left-[4px] top-52 w-[3px] h-12 bg-slate-600 rounded-l shadow-sm" />
        <div className="absolute -right-[4px] top-32 w-[3px] h-16 bg-slate-600 rounded-r shadow-sm" />

        {/* Inner Curved Display */}
        <div className="relative bg-[#FAFAFC] rounded-[40px] overflow-hidden border border-slate-300/80 flex flex-col h-[540px] sm:h-[600px] shadow-inner">
          
          {/* Subtle Diagonal Glass Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/40 pointer-events-none z-30" />

          {/* Top Status Bar with Dynamic Island */}
          <div className="pt-2.5 px-5 pb-2 flex items-center justify-between text-[11px] font-mono font-bold text-slate-800 border-b border-slate-200/60 bg-white/90 backdrop-blur-md relative z-20">
            <span>9:41</span>

            {/* Dynamic Island Capsule with Camera Lens Reflection */}
            <div className="px-3 py-1 rounded-full bg-slate-950 flex items-center gap-2 shadow-sm border border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-sky-500/80" />
              </span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Pixel 9 Pro
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-700">
              <span className="text-[10px] font-mono font-bold text-emerald-600">5G</span>
              <Wifi className="w-3 h-3 text-slate-700" />
              <div className="w-4 h-2 bg-slate-800 rounded-sm p-[1px] flex items-center">
                <div className="w-3 h-full bg-emerald-500 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 relative z-10 scrollbar-none">
            
            {/* Developer Live App Hub Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-white font-mono text-[9px] font-bold backdrop-blur-xs">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" />
                  GOOGLE PLAY VERIFIED
                </span>
                <span className="text-[10px] font-mono text-amber-200 font-bold bg-black/20 px-1.5 py-0.5 rounded">
                  ★ 4.8 Rating
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight flex items-center justify-between">
                <span>Harshit Saxena</span>
                <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">8 Live Apps</span>
              </h3>
              <p className="text-[11px] text-sky-100 font-medium">Senior Android & Mobile Architect</p>
            </div>

            {/* In-Phone App Navigation Tabs */}
            <div className="flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300/80">
              <button
                onClick={() => setActiveApp('rapagra')}
                className={`flex-1 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                  activeApp === 'rapagra'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sprout className="w-3 h-3 text-emerald-600" />
                <span>Rapagra</span>
              </button>
              <button
                onClick={() => setActiveApp('immortal')}
                className={`flex-1 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                  activeApp === 'immortal'
                    ? 'bg-white text-sky-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Ticket className="w-3 h-3 text-sky-600" />
                <span>Immortal</span>
              </button>
              <button
                onClick={() => setActiveApp('meetgoals')}
                className={`flex-1 py-1.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
                  activeApp === 'meetgoals'
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Target className="w-3 h-3 text-purple-600" />
                <span>MeetGoals</span>
              </button>
            </div>

            {/* Dynamic Interactive App Interface */}
            {activeApp === 'rapagra' && (
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900">Rapagra Smart Agri</div>
                      <div className="text-[9px] text-emerald-600 font-mono">IoT Sensor & AI Diagnostics</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                    BLE Online
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <div className="text-base font-extrabold text-emerald-700 font-mono">76%</div>
                    <div className="text-[9px] text-slate-600 font-medium">Soil Moisture</div>
                  </div>
                  <div className="p-2 rounded-xl bg-sky-50/60 border border-sky-100">
                    <div className="text-base font-extrabold text-sky-700 font-mono">24.5°C</div>
                    <div className="text-[9px] text-slate-600 font-medium">Ambient Temp</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-slate-800">Crop Health Index</div>
                    <div className="text-[9px] text-slate-500">
                      {leafScanned ? 'Leaf Scanned: 98% Healthy' : 'Ready to scan field'}
                    </div>
                  </div>
                  <button
                    onClick={() => setLeafScanned(!leafScanned)}
                    className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white text-[10px] font-bold shadow-xs hover:bg-emerald-700 transition"
                  >
                    {leafScanned ? 'Rescan Leaf' : 'Scan Leaf'}
                  </button>
                </div>
              </div>
            )}

            {activeApp === 'immortal' && (
              <div className="p-3.5 rounded-2xl bg-white border border-sky-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900">Immortal Seats</div>
                      <div className="text-[9px] text-sky-600 font-mono">360° Real-Time Arena</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono bg-sky-50 text-sky-700 font-bold px-1.5 py-0.5 rounded border border-sky-200">
                    Live Booking
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100 space-y-1 text-left">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>Madison Square Garden</span>
                    <span className="text-sky-700 font-mono">$249.00</span>
                  </div>
                  <div className="text-[10px] text-slate-600 font-mono">Section 104 • Row A • VIP-1</div>
                </div>

                <button
                  onClick={() => setSeatBooked(!seatBooked)}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm ${
                    seatBooked
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:opacity-95'
                  }`}
                >
                  {seatBooked ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Seat Reserved & Confirmed</span>
                    </>
                  ) : (
                    <span>Instant Reserve ($249)</span>
                  )}
                </button>
              </div>
            )}

            {activeApp === 'meetgoals' && (
              <div className="p-3.5 rounded-2xl bg-white border border-purple-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900">MeetGoals Focus</div>
                      <div className="text-[9px] text-purple-600 font-mono">WorkManager & Habit Flow</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono bg-purple-50 text-purple-700 font-bold px-1.5 py-0.5 rounded border border-purple-200 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                    18 Days
                  </span>
                </div>

                <div className="text-center py-1">
                  <div className="text-3xl font-extrabold font-mono text-purple-700 tracking-wider">
                    {formatTimer(timerSeconds)}
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono mt-0.5">Deep Focus Pomodoro Block</div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setTimerActive(!timerActive)}
                    className="flex-1 py-1.5 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-sm hover:bg-purple-700 transition"
                  >
                    {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    <span>{timerActive ? 'Pause' : 'Start Focus'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setTimerActive(false);
                      setTimerSeconds(25 * 60);
                    }}
                    className="p-1.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Architecture Telemetry Snippet */}
            <div className="p-2.5 rounded-xl bg-slate-900 text-white space-y-1 shadow-inner text-left">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-sky-400 font-bold">● Architecture Engine</span>
                <span className="text-emerald-400 font-bold">60 FPS</span>
              </div>
              <div className="text-[10px] font-mono text-slate-300 leading-tight">
                Kotlin Coroutines • StateFlow • Clean MVVM
              </div>
            </div>

          </div>

          {/* Bottom Gesture Bar */}
          <div className="p-2 bg-white/90 border-t border-slate-200/80 flex items-center justify-center relative z-20">
            <div className="w-24 sm:w-28 h-1 bg-slate-400 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
