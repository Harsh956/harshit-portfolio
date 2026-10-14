import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Smartphone, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-16 relative z-10 luxury-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & title */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-200 to-slate-400 p-[1px] shadow-lg">
              <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center font-mono font-bold text-white text-sm">
                HS
              </div>
            </div>
            <div>
              <div className="font-bold text-white text-base">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.title}
              </div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-7 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#simulator" className="hover:text-white transition">App Simulator</a>
            <a href="#projects" className="hover:text-white transition">Projects (14)</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Right badge */}
          <div className="text-xs text-slate-500 font-mono text-center md:text-right space-y-1">
            <div>© {currentYear} Harshit Saxena. All rights reserved.</div>
            <div className="text-[11px] text-slate-400">
              High-Precision Mobile Engineering • Vercel Ready
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
