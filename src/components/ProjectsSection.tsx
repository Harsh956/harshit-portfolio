'use client';

import React, { useState, useEffect } from 'react';
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
  Image as ImageIcon,
  Maximize2,
  ZoomIn
} from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'All' | 'Live' | 'Android' | 'Flutter'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullscreenScreenshot, setFullscreenScreenshot] = useState<{
    url: string;
    title: string;
    playStoreUrl?: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setFullscreenScreenshot(null);
      }
    };
    if (selectedProject || fullscreenScreenshot) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, fullscreenScreenshot]);

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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200/90 text-xs font-mono text-sky-700 shadow-sm">
              <FolderGit2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Professional Projects from CV</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              14 Professional <br className="hidden sm:block" />
              <span className="text-gradient-vibrant">Projects</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              All 14 projects directly from Harshit Saxena's CV. Live Play Store apps feature authentic full-length store screenshots. Completed projects without active store listings have external links cleanly omitted.
            </p>
          </div>

          {/* Quick Counter Badges */}
          <div className="flex flex-wrap gap-2 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-emerald-50 border border-emerald-300 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-emerald-900">8 Live on Play Store</div>
                <div className="text-[10px] text-emerald-700">Full Screenshots Attached</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="text-left font-mono">
                <div className="text-xs font-bold text-slate-800">6 Production Projects</div>
                <div className="text-[10px] text-slate-500">Enterprise / Client Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 mb-6">
          
          {/* Segmented Filter Pills */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm overflow-x-auto gap-1.5 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-1.5">
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
                    ? 'bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-sky-600 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-stone-200 text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition shadow-xs"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="luxury-card rounded-3xl p-5 sm:p-6 border border-stone-200/90 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md"
            >
              {/* Colorful Top Accent Stripe */}
              <div
                className="h-1.5 w-full absolute top-0 left-0 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="space-y-4 pt-1">
                
                {/* Full Uncropped Play Store Screenshot Container */}
                {project.isLiveOnPlayStore && project.screenshotUrl ? (
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-stone-200/90 bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200/60 p-2.5 flex items-center justify-center group/screen transition-all">
                    
                    {/* Uncropped Mobile Screenshot */}
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.title} Google Play Screenshot`}
                      className="h-full w-auto max-w-full object-contain rounded-xl shadow-md transition-transform duration-300 group-hover/screen:scale-105 cursor-pointer"
                      loading="lazy"
                      onClick={() =>
                        setFullscreenScreenshot({
                          url: project.screenshotUrl!,
                          title: project.title,
                          playStoreUrl: project.playStoreUrl,
                        })
                      }
                    />

                    {/* Google Play Store Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-emerald-300 text-[10px] font-mono text-emerald-800 font-bold flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Play Store App
                    </div>

                    {/* Zoom / Full View Button on Hover */}
                    <button
                      onClick={() =>
                        setFullscreenScreenshot({
                          url: project.screenshotUrl!,
                          title: project.title,
                          playStoreUrl: project.playStoreUrl,
                        })
                      }
                      className="absolute bottom-3 right-3 p-2 rounded-xl bg-white/95 backdrop-blur-sm border border-stone-200 text-slate-700 hover:text-indigo-600 hover:bg-white shadow-md transition opacity-90 sm:opacity-0 sm:group-hover/screen:opacity-100"
                      title="View Full Screenshot"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-24 rounded-2xl border border-stone-200 bg-stone-50 p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                      Production Project from CV
                    </span>
                    <span className="text-xs text-slate-700 font-semibold mt-0.5">
                      Client / Enterprise Delivered Application
                    </span>
                  </div>
                )}

                {/* Header Row: Category Badge & Status */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: `${project.accentColor}15`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}40`,
                    }}
                  >
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Team: {project.teamSize}</span>
                  </div>
                </div>

                {/* Title & Tagline from CV */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-600 font-semibold mt-1 leading-snug">
                    {project.tagline}
                  </p>
                </div>

                {/* Description from CV */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips from CV */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Conditional Linking */}
              <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn transition"
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
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-600 hover:text-white transition-all shadow-xs shrink-0"
                  >
                    <span>Play Store</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono font-bold text-slate-500 px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200">
                    Completed Project
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details from CV */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border border-stone-200 shadow-2xl max-h-[88vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2.5 mb-6 pr-8 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase"
                    style={{
                      backgroundColor: `${selectedProject.accentColor}20`,
                      color: selectedProject.accentColor,
                      border: `1px solid ${selectedProject.accentColor}50`,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    Team Size: {selectedProject.teamSize}
                  </span>
                  {selectedProject.isLiveOnPlayStore ? (
                    <span className="text-xs font-mono text-emerald-700 font-bold">
                      ● Active on Google Play
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      ● Client / Enterprise Project
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Full Uncropped Screenshot in Modal */}
              {selectedProject.isLiveOnPlayStore && selectedProject.screenshotUrl && (
                <div className="mb-6 rounded-2xl overflow-hidden border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 p-3 flex items-center justify-center max-h-[480px]">
                  <img
                    src={selectedProject.screenshotUrl}
                    alt={`${selectedProject.title} screenshot`}
                    className="max-h-[440px] w-auto object-contain rounded-xl shadow-lg cursor-pointer"
                    onClick={() =>
                      setFullscreenScreenshot({
                        url: selectedProject.screenshotUrl!,
                        title: selectedProject.title,
                        playStoreUrl: selectedProject.playStoreUrl,
                      })
                    }
                  />
                </div>
              )}

              {/* Description directly from CV */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 text-left">
                <div className="space-y-1.5">
                  <h4 className="font-mono text-xs text-sky-700 uppercase tracking-wider font-bold">
                    Project Description (from CV)
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Responsibilities & Highlights */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-emerald-700 uppercase tracking-wider font-bold">
                    Key Features & Technical Implementation
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs text-purple-700 uppercase tracking-wider font-bold">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Conditional */}
              <div className="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {selectedProject.isLiveOnPlayStore && selectedProject.playStoreUrl ? (
                  <>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified Google Play Store Link</span>
                    </div>
                    <a
                      href={selectedProject.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 transition shadow-md text-xs sm:text-sm"
                    >
                      <span>Open on Google Play Store</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </>
                ) : (
                  <div className="w-full text-center text-xs font-mono text-slate-500 py-2">
                    This project was delivered for client/enterprise operations (No public Play Store link).
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Fullscreen Screenshot Lightbox */}
        {fullscreenScreenshot && (
          <div
            onClick={() => setFullscreenScreenshot(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center max-h-[92vh]"
            >
              <button
                onClick={() => setFullscreenScreenshot(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-3">
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {fullscreenScreenshot.title}
                </h3>
                <p className="text-xs text-emerald-700 font-mono font-semibold">
                  Google Play Store App Full Screenshot
                </p>
              </div>

              {/* High-Resolution Uncropped Full Mobile View */}
              <div className="w-full flex items-center justify-center overflow-auto max-h-[72vh] p-2 bg-stone-50 rounded-2xl border border-stone-200">
                <img
                  src={fullscreenScreenshot.url}
                  alt={`${fullscreenScreenshot.title} Full View`}
                  className="max-h-[68vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              {fullscreenScreenshot.playStoreUrl && (
                <div className="mt-3.5 w-full flex justify-end">
                  <a
                    href={fullscreenScreenshot.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
                  >
                    <span>View on Play Store</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
