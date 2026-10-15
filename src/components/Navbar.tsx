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
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-stone-200/90 shadow-sm'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-pink-500 p-[2px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-mono font-bold text-white text-base">
              HS
            </div>
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[11px] text-indigo-600 font-mono font-bold hidden sm:block">
              Android Developer • Kotlin & Java
            </div>
          </div>
        </a>

        {/* Desktop Navigation with Frosted Glass Pill */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="#projects"
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition-all shadow-sm"
          >
            <span>8 Live Apps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white hover:opacity-95 transition-all shadow-md shadow-indigo-500/20 hover:scale-[1.03]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-2xl bg-white border border-stone-200 text-slate-800 hover:text-indigo-600 shadow-sm transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-pink-600" /> : <Menu className="w-5 h-5 text-indigo-600" />}
        </button>
      </div>

      {/* Mobile Drawer (Responsive Overlay) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-stone-200 px-5 pt-3 pb-6 space-y-2 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-3 rounded-xl text-sm font-bold text-slate-800 hover:text-indigo-600 hover:bg-slate-50 active:bg-slate-100 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Quick Direct Actions on Mobile */}
          <div className="pt-3 border-t border-stone-200 space-y-2.5">
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.social.phone}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-mono font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                Call / WhatsApp
              </a>
              <a
                href={PERSONAL_INFO.social.email}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-sky-50 text-sky-700 border border-sky-300 text-xs font-mono font-bold"
              >
                <Mail className="w-3.5 h-3.5" />
                Send Email
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 text-white shadow-md"
            >
              Contact Harshit Saxena
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
