'use client';

import Image from 'next/image';
import { ArrowRight, Download, Star, Copy, Check } from 'lucide-react';
import FabricGraphic from '@/components/FabricGraphic';
import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const installCommand = 'brew install --cask burhanusman/gitbar/gitbar';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden bg-[#0a0a0a] text-[#f0f0f0] font-sans selection:bg-[#3366E6] selection:text-white">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0 opacity-80 mix-blend-screen pointer-events-auto">
        <FabricGraphic className="scale-125 md:translate-x-[20%]" />
      </div>

      {/* Floating Decor */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 z-10 pointer-events-none mix-blend-difference text-[#3366E6]">
        <div className="flex items-center gap-2">
          <Star fill="currentColor" className="w-6 h-6 animate-spin-slow" />
          <span className="font-mono text-sm">v1.0.1</span>
        </div>
        <div className="font-mono text-xs opacity-60">
          FREE & OPEN SOURCE
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl pointer-events-none w-full">

        {/* Headline - Reduced Size as requested */}
        <div className="mix-blend-difference pointer-events-auto">
          <h1 className="text-4xl md:text-6xl lg:text-[5vw] font-black tracking-tighter uppercase mb-6 leading-tight">
            Your repos.<br />
            <span className="text-[#3366E6]">At One glance.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="mt-2 max-w-2xl pointer-events-auto">
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 text-gray-300">
            GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects
            so you never lose track of AI-generated changes.
          </p>

          <div className="flex flex-col items-center gap-8 w-full">
            {/* Brew Install Command */}
            <div className="relative group w-full max-w-md">
              <div
                onClick={handleCopy}
                className="flex items-center justify-between bg-white/5 border border-white/10 hover:border-[#3366E6]/50 hover:bg-white/10 backdrop-blur-md rounded-xl p-4 cursor-pointer transition-all duration-300 group-hover:scale-[1.01]"
              >
                <code className="font-mono text-sm md:text-base text-gray-300">
                  <span className="text-[#3366E6]">$</span> {installCommand}
                </code>
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-[#3366E6]">
                Click to copy
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://github.com/burhanusman/gitbar/releases/latest"
                className="group relative px-8 py-3 bg-white text-black font-bold text-base tracking-wider uppercase overflow-hidden hover:bg-[#3366E6] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-lg">
                <span>Download .dmg</span>
              </a>

              <a href="https://github.com/burhanusman/gitbar"
                className="group relative px-8 py-3 bg-transparent border border-white/30 text-white font-bold text-base tracking-wider uppercase overflow-hidden hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-lg">
                <span>GitHub</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
