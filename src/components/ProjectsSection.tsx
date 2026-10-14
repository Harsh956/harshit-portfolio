'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import {
  ExternalLink,
  Users,
  Smartphone,
  Search,
  CheckCircle,
  X,
  Layers,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight,
  FolderGit2,
  Image as ImageIcon
} from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Live' | 'Android' | 'Flutter'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter =
      filter === 'All'
        ? true
        : filter === 'Live'
        ? p.isLiveOnPlayStore
        : filter === 'Android'
        ? p.category === 'Android'
        : p.category === 'Flutter';

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-10 sm:py-14 lg:py-16 relative colored-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full luxury-glass border border-sky-400/30 text-xs font-mono text-sky-300 shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Professional Projects from CV</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              14 Professional <br className="hidden sm:block" />
              <span className="text-gradient-vibrant">Projects</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              All 14 projects directly from Harshit Saxena's CV. Live Play Store apps include authentic store screenshots and verified links. Completed projects without active store listings have external links cleanly omitted.
            </p>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex flex-wrap gap-2 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl luxury-glass border border-emerald-500/30 bg-emerald-950/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">8 Live on Play Store</div>
                <div className="text-[10px] text-emerald-400">With Real Screenshots</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl luxury-glass border border-white/10">
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-white">6 Production Projects</div>
                <div className="text-[10px] text-slate-400">Enterprise / Client Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-5">
          
          {/* Segmented Filter Pills */}
          <div className="flex items-center p-1.5 rounded-2xl luxury-glass border border-white/10 overflow-x-auto gap-1.5 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-1.5">
            {[
              { id: 'All', label: 'All Projects (14)' },
              { id: 'Live', label: '★ Live on Play Store (8)' },
              { id: 'Android', label: 'Android Native' },
              { id: 'Flutter', label: 'Flutter' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-sky-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl luxury-glass border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400/60 transition shadow-inner"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="luxury-card rounded-3xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Colorful Top Accent Stripe */}
              <div
                className="h-1.5 w-full absolute top-0 left-0 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="space-y-4 pt-1">
                
                {/* Real Google Play Screenshot Attached */}
                {project.isLiveOnPlayStore && project.screenshotUrl ? (
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-[#070d1e] group-hover:border-sky-400/40 transition">
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.title} Google Play Screenshot`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-black/20 opacity-80" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-sm border border-emerald-400/50 text-[10px] font-mono text-emerald-300 font-bold flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Play Store Screenshot
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-20 rounded-2xl border border-white/5 bg-slate-900/40 p-3.5 flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                      Production Project from CV
                    </span>
                    <span className="text-xs text-slate-300 mt-0.5">
                      Client / Enterprise Delivered Application
                    </span>
                  </div>
                )}

                {/* Header Row: Category Badge & Status */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: `${project.accentColor}25`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}50`,
                    }}
                  >
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Team: {project.teamSize}</span>
                  </div>
                </div>

                {/* Title & Tagline from CV */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-300/90 font-medium mt-1 leading-snug">
                    {project.tagline}
                  </p>
                </div>

                {/* Description from CV */}
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips from CV */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Conditional Linking (Requirement 3) */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 group/btn transition"
                >
                  <span>CV Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Only render Play Store button if isLiveOnPlayStore is true */}
                {project.isLiveOnPlayStore && project.playStoreUrl ? (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-md shrink-0"
                  >
                    <span>Play Store</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono font-bold text-slate-400 px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">
                    Completed Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details from CV */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <div className="relative w-full max-w-2xl luxury-glass rounded-3xl p-5 sm:p-8 lg:p-10 border border-sky-400/30 shadow-2xl max-h-[88vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2.5 mb-6 pr-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase"
                    style={{
                      backgroundColor: `${selectedProject.accentColor}30`,
                      color: selectedProject.accentColor,
                      border: `1px solid ${selectedProject.accentColor}60`,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    Team Size: {selectedProject.teamSize}
                  </span>
                  {selectedProject.isLiveOnPlayStore ? (
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      ● Active on Google Play
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400">
                      ● Client / Enterprise Project
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-300">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Screenshot in Modal if Live */}
              {selectedProject.isLiveOnPlayStore && selectedProject.screenshotUrl && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 max-h-60">
                  <img
                    src={selectedProject.screenshotUrl}
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Description directly from CV */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="space-y-1.5">
                  <h4 className="font-mono text-xs text-sky-400 uppercase tracking-wider font-bold">
                    Project Description (from CV)
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Responsibilities & Highlights */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-bold">
                    Key Features & Technical Implementation
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-purple-400 uppercase tracking-wider font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Conditional */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {selectedProject.isLiveOnPlayStore && selectedProject.playStoreUrl ? (
                  <>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified Google Play Store Link</span>
                    </div>
                    <a
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:from-emerald-400 hover:to-teal-500 transition shadow-lg text-xs sm:text-sm"
                    >
                      <span>Open on Google Play Store</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </>
                ) : (
                  <div className="w-full text-center text-xs font-mono text-slate-400 py-2">
                    This project was delivered for client/enterprise operations (No public Play Store link).
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
