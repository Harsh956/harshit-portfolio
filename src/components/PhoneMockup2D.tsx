'use client';

import React, { useState } from 'react';
import { Smartphone, CheckCircle, ShieldCheck, Zap, Code2, Layers, Activity, Sparkles } from 'lucide-react';

export default function PhoneMockup2D() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'metrics'>('architecture');

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[410px] mx-auto select-none">
      {/* Outer Multi-color Radial Ambient Glow */}
      <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-pink-500/20 rounded-[50px] sm:rounded-[60px] blur-xl opacity-75 pointer-events-none animate-pulse-glow" />

      {/* 2D Flagship Smartphone Frame */}
      <div className="relative bg-[#0d1427] rounded-[42px] sm:rounded-[52px] p-2.5 sm:p-3.5 shadow-2xl border-[3px] sm:border-4 border-indigo-500/30 ring-1 ring-sky-400/30">
        
        {/* Hardware side buttons (hidden on very small viewports) */}
        <div className="hidden sm:block absolute -left-[6px] top-28 w-[3px] h-10 bg-indigo-400/80 rounded-l" />
        <div className="hidden sm:block absolute -left-[6px] top-42 w-[3px] h-14 bg-indigo-400/80 rounded-l" />
        <div className="hidden sm:block absolute -right-[6px] top-32 w-[3px] h-16 bg-pink-400/80 rounded-r" />

        {/* Inner Screen Container */}
        <div className="relative bg-[#070d1e] rounded-[34px] sm:rounded-[42px] overflow-hidden border border-white/10 flex flex-col h-[520px] sm:h-[580px]">
          
          {/* Top Status Bar & Dynamic Island */}
          <div className="pt-2.5 px-4 sm:px-6 pb-2 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-300 border-b border-white/10 bg-[#091126]">
            <span className="font-bold text-white tracking-wide">9:41</span>

            {/* Dynamic Island Capsule */}
            <div className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/85 border border-sky-400/30 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] sm:text-[10px] text-sky-300 font-mono font-bold">Pixel 8 Pro</span>
            </div>

            <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px]">
              <span className="text-emerald-400 font-mono font-bold">5G</span>
              <span className="w-3.5 h-2 bg-emerald-400 rounded-sm inline-block" />
            </div>
          </div>

          {/* Screen Body */}
          <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3">
            
            {/* Developer Profile Header with Rich Colors */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-900/40 via-indigo-900/40 to-purple-900/40 border border-sky-400/30 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between mb-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] sm:text-[10px] font-bold border border-emerald-500/40">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  GOOGLE PLAY VERIFIED
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-amber-300 font-bold bg-amber-500/20 px-1.5 py-0.5 rounded">
                  ★ 4.8
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Harshit Saxena
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              </h3>
              <p className="text-[11px] sm:text-xs text-sky-300 font-semibold mt-0.5">Senior Android & Mobile Architect</p>
            </div>

            {/* Quick Metrics Bar with Colorful Gradients */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
              <div className="p-2 rounded-xl bg-gradient-to-b from-sky-950/40 to-slate-900/80 border border-sky-500/30">
                <div className="text-base sm:text-lg font-black text-sky-400 font-mono">14</div>
                <div className="text-[8px] sm:text-[9px] text-sky-200 uppercase font-mono font-bold">Projects</div>
              </div>
              <div className="p-2 rounded-xl bg-gradient-to-b from-purple-950/40 to-slate-900/80 border border-purple-500/30">
                <div className="text-base sm:text-lg font-black text-purple-400 font-mono">7+ Yrs</div>
                <div className="text-[8px] sm:text-[9px] text-purple-200 uppercase font-mono font-bold">Experience</div>
              </div>
              <div className="p-2 rounded-xl bg-gradient-to-b from-emerald-950/40 to-slate-900/80 border border-emerald-500/30">
                <div className="text-base sm:text-lg font-black text-emerald-400 font-mono">8 Live</div>
                <div className="text-[8px] sm:text-[9px] text-emerald-200 uppercase font-mono font-bold">Play Store</div>
              </div>
            </div>

            {/* Tab Selector with Colorful Switch */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-indigo-500/20">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`flex-1 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                  activeTab === 'architecture'
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab('metrics')}
                className={`flex-1 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition ${
                  activeTab === 'metrics'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Performance
              </button>
            </div>

            {/* Tab 1: Architecture Code View with Colorful Syntax */}
            {activeTab === 'architecture' ? (
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#030712]/95 border border-indigo-500/30 space-y-1.5 text-[10px] sm:text-[11px] font-mono shadow-inner overflow-hidden">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-slate-400 text-[9px] sm:text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sky-400 font-bold">AppViewModel.kt</span>
                </div>
                <div className="space-y-0.5 pt-0.5 leading-relaxed">
                  <div className="text-pink-400 font-bold">@HiltViewModel</div>
                  <div className="text-slate-200">
                    class <span className="text-sky-300 font-bold">AppEngine</span> @Inject (
                  </div>
                  <div className="text-purple-300 pl-2 sm:pl-3">val repo: PlayStoreRepo</div>
                  <div className="text-slate-200">) : ViewModel() &#123;</div>
                  <div className="text-emerald-400 pl-2 sm:pl-3">val state = repo.flow</div>
                  <div className="text-amber-300 pl-4 sm:pl-5">.stateIn(viewModelScope)</div>
                  <div className="text-slate-500 pl-2 sm:pl-3">// Coroutines • Room DB</div>
                  <div className="text-slate-200">&#125;</div>
                </div>
              </div>
            ) : (
              <div className="p-3 sm:p-3.5 rounded-2xl bg-[#030712]/95 border border-purple-500/30 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-slate-200 font-bold">UI Performance</span>
                  <span className="text-emerald-400 font-mono font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded text-[10px]">60 FPS LOCKED</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-500 h-full w-[99%]" />
                </div>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono text-slate-300 pt-0.5">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-emerald-500/20">
                    <div className="text-slate-400 text-[8px] sm:text-[9px]">ANR Rate</div>
                    <div className="text-emerald-400 font-bold">&lt; 0.01%</div>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-xl bg-slate-900/80 border border-sky-500/20">
                    <div className="text-slate-400 text-[8px] sm:text-[9px]">Cold Start</div>
                    <div className="text-sky-400 font-bold">420ms</div>
                  </div>
                </div>
              </div>
            )}

            {/* Production Badge in Device */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-indigo-950/30 to-purple-950/30 border border-indigo-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-slate-200 font-semibold text-[11px]">8 Live Play Store Apps</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold px-1.5 py-0.5 rounded bg-emerald-500/20">
                VERIFIED
              </span>
            </div>

          </div>

          {/* Bottom Gesture Bar */}
          <div className="p-2 sm:p-2.5 bg-[#091126] border-t border-white/10 flex items-center justify-center">
            <div className="w-24 sm:w-28 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
