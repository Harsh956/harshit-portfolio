'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, Smartphone, Code, Briefcase, Award, Send, ExternalLink, ArrowUpRight, Sparkles, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Competencies', href: '#skills' },
    { name: 'Live Simulator', href: '#simulator' },
    { name: 'Projects (14)', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 luxury-glass border-b border-sky-400/20 shadow-lg shadow-sky-500/5'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-pink-500 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#0b132b] rounded-[14px] flex items-center justify-center font-mono font-bold text-white text-base">
              HS
            </div>
          </div>
          <div>
            <div className="font-extrabold text-white text-sm sm:text-base tracking-tight flex items-center gap-1.5 group-hover:text-sky-300 transition-colors">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[11px] text-sky-400 font-mono font-bold hidden sm:block">
              Senior Android Architect
            </div>
          </div>
        </a>

        {/* Desktop Navigation with Frosted Glass Pill */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-full luxury-glass border border-white/15 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="#projects"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-sm"
          >
            <span>8 Live Apps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 text-white hover:opacity-95 transition-all shadow-lg shadow-indigo-500/30 hover:scale-[1.03]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button with large touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-2xl luxury-glass border border-white/10 text-slate-200 hover:text-white transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-pink-400" /> : <Menu className="w-5 h-5 text-sky-400" />}
        </button>
      </div>

      {/* Mobile Drawer (Responsive Overlay) */}
      {mobileMenuOpen && (
        <div className="lg:hidden luxury-glass border-b border-sky-400/20 px-5 pt-3 pb-6 space-y-2 mt-2 shadow-2xl backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Quick Direct Actions on Mobile */}
          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.social.phone}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                Call / WhatsApp
              </a>
              <a
                href={PERSONAL_INFO.social.email}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Email
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 text-white shadow-lg"
            >
              Contact Harshit Saxena
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
