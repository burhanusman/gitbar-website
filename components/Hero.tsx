'use client';

import { ArrowRight, Copy, Check, Terminal } from 'lucide-react';
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
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0c]">
      {/* Retro grid background */}
      <div className="absolute inset-0 retro-grid pointer-events-none" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* 3D Graphic - positioned to the right, dramatic scale */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[120%] z-0 opacity-60 pointer-events-auto">
        <FabricGraphic className="scale-150 translate-x-[15%]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#00f5d4] to-transparent opacity-40" />
      <div className="absolute bottom-[30%] right-[25%] w-24 h-px bg-gradient-to-r from-transparent via-[#00f5d4] to-transparent opacity-40" />

      {/* Main content - Left aligned, asymmetric */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-4xl">

        {/* Version badge */}
        <div className="opacity-0 animate-fade-up mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#00f5d4]/30 bg-[#00f5d4]/5">
            <span className="w-2 h-2 bg-[#00f5d4] animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] text-[#00f5d4] uppercase">
              v1.0.1 — Free & Open Source
            </span>
          </div>
        </div>

        {/* Headline - Massive, dramatic */}
        <div className="opacity-0 animate-fade-up delay-100">
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold tracking-tight leading-[0.9] mb-8">
            <span className="block text-[#e8e6e3]">YOUR REPOS.</span>
            <span className="block text-[#00f5d4] neon-text mt-2">ONE GLANCE.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="opacity-0 animate-fade-up delay-200 max-w-xl mb-12">
          <p className="font-[family-name:var(--font-display)] text-lg md:text-xl text-[#8a8a96] leading-relaxed">
            GitBar lives in your menu bar, auto-discovering{' '}
            <span className="text-[#ffbe0b]">Claude Code</span> and{' '}
            <span className="text-[#ffbe0b]">Codex</span> projects so you never lose track of AI-generated changes.
          </p>
        </div>

        {/* Terminal install block */}
        <div className="opacity-0 animate-fade-up delay-300 mb-10">
          <div
            onClick={handleCopy}
            className="group relative terminal-block p-5 cursor-pointer max-w-lg hover:border-[#00f5d4]/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <code className="font-[family-name:var(--font-mono)] text-sm md:text-base text-[#e8e6e3]">
                <span className="text-[#00f5d4]">$</span>{' '}
                <span className="text-[#8a8a96]">{installCommand}</span>
              </code>
              <div className="flex items-center gap-2 text-[#5a5a66] group-hover:text-[#00f5d4] transition-colors">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#00f5d4]" />
                    <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider hidden sm:inline">Copy</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/burhanusman/gitbar/releases/latest"
            className="btn-retro-solid px-8 py-4 inline-flex items-center justify-center gap-3"
          >
            <Terminal className="w-4 h-4" />
            <span>Download .dmg</span>
          </a>

          <a
            href="https://github.com/burhanusman/gitbar"
            className="btn-retro px-8 py-4 inline-flex items-center justify-center gap-3 group"
          >
            <span>View on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 right-1/2 opacity-0 animate-fade-up delay-500">
          <div className="hr-retro" />
        </div>
      </div>

      {/* Side info panel */}
      <div className="absolute bottom-12 right-8 md:right-16 lg:right-24 z-10 opacity-0 animate-fade-up delay-600">
        <div className="flex flex-col items-end gap-1 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[#5a5a66]">
          <span>MACOS NATIVE</span>
          <span className="text-[#00f5d4]">SWIFT + SWIFTUI</span>
        </div>
      </div>

      {/* Coordinates decoration - hidden on mobile */}
      <div className="absolute top-24 right-8 md:right-16 lg:right-24 z-10 opacity-0 animate-fade-up delay-700 hidden md:block">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-[#3a3a44]">
          <div>SYS//ACTIVE</div>
          <div>BUILD_001</div>
        </div>
      </div>
    </section>
  );
}
