'use client';

import Image from 'next/image';
import { ArrowRight, Download, Star } from 'lucide-react';
import FabricGraphic from '@/components/FabricGraphic';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 pb-12 overflow-hidden bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#ff6b00] selection:text-white">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 opacity-80 mix-blend-screen pointer-events-auto">
        <FabricGraphic className="scale-125 md:translate-x-[20%]" />
      </div>

      {/* Floating Decor */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 z-10 pointer-events-none mix-blend-difference text-[#ff6b00]">
        <div className="flex items-center gap-2">
          <Star fill="currentColor" className="w-6 h-6 animate-spin-slow" />
          <span className="font-mono text-sm">v1.0.0</span>
        </div>
        <div className="font-mono text-xs opacity-60">
          FREE & OPEN SOURCE
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center max-w-5xl pointer-events-none">

        {/* App Icon (Optional preservation, or we can skip for the bold look. Keeping it small if needed, but let's prioritize the bold text) */}

        {/* Massive Headline - Restored Copy */}
        <div className="mix-blend-difference pointer-events-auto">
          <h1 className="text-[6vw] md:text-[7vw] leading-[0.9] font-black tracking-tighter uppercase mb-6">
            Your repos.<br />
            Your AI projects.<br />
            <span className="text-[#ff6b00]">One glance.</span>
          </h1>
        </div>

        {/* Subtext - Restored Copy */}
        <div className="mt-8 max-w-2xl pointer-events-auto">
          <p className="text-xl md:text-2xl font-medium leading-tight mb-10 text-gray-300">
            GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects
            so you never lose track of AI-generated changes.
          </p>

          {/* CTAs - Restored Buttons with New Style */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://github.com/burhanusman/gitbar/releases/latest"
              className="group relative px-8 py-4 bg-white text-black font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-[#ff6b00] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              <span>Download for macOS</span>
            </a>

            <a href="https://github.com/burhanusman/gitbar"
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-2">
              <span>View on GitHub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
