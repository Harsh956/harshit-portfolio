import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Top-Left Warm Golden Amber Glow */}
      <div className="absolute -top-32 -left-20 w-[650px] h-[650px] bg-gradient-to-br from-amber-300/18 via-orange-200/12 to-transparent rounded-full blur-[120px] animate-pulse-glow" />

      {/* 2. Top-Right Soft Sky Blue Glow */}
      <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-sky-300/18 via-indigo-200/12 to-transparent rounded-full blur-[130px] animate-float-slow" />

      {/* 3. Center Vibrant Soft Mint Aura */}
      <div className="absolute top-[40%] left-[25%] w-[600px] h-[600px] bg-gradient-to-tr from-emerald-300/14 via-teal-200/10 to-transparent rounded-full blur-[140px] animate-float-rev" />

      {/* 4. Bottom-Left Soft Rose Glow */}
      <div className="absolute -bottom-32 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-rose-300/15 via-purple-200/10 to-transparent rounded-full blur-[130px] animate-pulse-glow" />

      {/* 5. Bottom-Right Elegant Cobalt/Sky Orb */}
      <div className="absolute -bottom-20 -right-20 w-[650px] h-[650px] bg-gradient-to-tl from-sky-400/15 via-blue-200/10 to-transparent rounded-full blur-[120px] animate-float-slow" />

      {/* Fine Studio Grid Texture for Light Background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
