import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Top-Left Vibrant Cyan/Sky Glow Orb */}
      <div className="absolute -top-32 -left-20 w-[650px] h-[650px] bg-gradient-to-br from-cyan-400/25 via-sky-500/20 to-transparent rounded-full blur-[120px] animate-pulse-glow" />

      {/* 2. Top-Right Royal Purple/Indigo Glow Orb */}
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-purple-500/25 via-indigo-600/20 to-transparent rounded-full blur-[130px] animate-float-slow" />

      {/* 3. Center Vibrant Emerald/Teal Floating Aura */}
      <div className="absolute top-[40%] left-[25%] w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/18 via-teal-400/15 to-transparent rounded-full blur-[140px] animate-float-rev" />

      {/* 4. Bottom-Left Vivid Pink/Rose Glow Orb */}
      <div className="absolute -bottom-32 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-pink-500/20 via-purple-600/15 to-transparent rounded-full blur-[130px] animate-pulse-glow" />

      {/* 5. Bottom-Right Vibrant Cobalt Blue Orb */}
      <div className="absolute -bottom-20 -right-20 w-[650px] h-[650px] bg-gradient-to-tl from-blue-600/25 via-sky-500/18 to-transparent rounded-full blur-[120px] animate-float-slow" />

      {/* Fine Studio Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
