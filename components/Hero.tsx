'use client';

import { ArrowRight, Copy, Check, Terminal } from 'lucide-react';
import FabricGraphic from '@/components/FabricGraphic';
import { useState } from 'react';

interface HeroProps {
  version: string;
  dmgUrl: string;
}

export function Hero({ version, dmgUrl }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const installCommand = 'brew install --cask burhanusman/gitbar/gitbar';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0c]">
      {/* Retro grid background */}
      <div className="absolute inset-0 retro-grid pointer-events-none" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* 3D Graphic - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[55%] lg:w-[50%] h-[100%] z-0 opacity-50 pointer-events-auto">
        <FabricGraphic className="scale-125 lg:scale-150 translate-x-[10%]" />
      </div>

      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-[20%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#00f5d4] to-transparent opacity-40" />
      <div className="hidden md:block absolute bottom-[30%] right-[25%] w-24 h-px bg-gradient-to-r from-transparent via-[#00f5d4] to-transparent opacity-40" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 py-24 md:py-0 max-w-4xl">

        {/* Version badge */}
        <div className="opacity-0 animate-fade-up mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border border-[#00f5d4]/30 bg-[#00f5d4]/5">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00f5d4] animate-pulse" />
            <span className="font-[family-name:var(--font-mono)] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-[#00f5d4] uppercase">
              {version} — Free & Open Source
            </span>
          </div>
        </div>

        {/* Headline - Blocky Orbitron font */}
        <div className="opacity-0 animate-fade-up delay-100">
          <h1 className="font-[family-name:var(--font-headline)] text-[clamp(2rem,8vw,6rem)] font-bold tracking-wide leading-[1.1] mb-6 md:mb-8">
            <span className="block text-[#e8e6e3] whitespace-nowrap">YOUR REPOS.</span>
            <span className="block text-[#00f5d4] neon-text-subtle whitespace-nowrap mt-1 sm:mt-2">ONE GLANCE.</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="opacity-0 animate-fade-up delay-200 max-w-xl mb-8 md:mb-12">
          <p className="font-[family-name:var(--font-display)] text-base sm:text-lg md:text-xl text-[#8a8a96] leading-relaxed">
            GitBar lives in your menu bar, auto-discovering{' '}
            <span className="text-[#ffbe0b]">Claude Code</span> and{' '}
            <span className="text-[#ffbe0b]">Codex</span> projects so you never lose track of AI-generated changes.
          </p>
        </div>

        {/* Terminal install block */}
        <div className="opacity-0 animate-fade-up delay-300 mb-8 md:mb-10">
          <div
            onClick={handleCopy}
            className="group relative terminal-block p-4 sm:p-5 cursor-pointer max-w-full sm:max-w-lg hover:border-[#00f5d4]/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <code className="font-[family-name:var(--font-mono)] text-xs sm:text-sm md:text-base text-[#e8e6e3] overflow-hidden">
                <span className="text-[#00f5d4]">$</span>{' '}
                <span className="text-[#8a8a96] break-all sm:break-normal">{installCommand}</span>
              </code>
              <div className="flex-shrink-0 flex items-center gap-2 text-[#5a5a66] group-hover:text-[#00f5d4] transition-colors">
                {copied ? (
                  <Check className="w-4 h-4 text-[#00f5d4]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTAs - Stack on mobile */}
        <div className="opacity-0 animate-fade-up delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href={dmgUrl}
            download
            className="btn-retro-solid px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-3 text-sm sm:text-base"
          >
            <Terminal className="w-4 h-4" />
            <span>Download .dmg</span>
          </a>

          <a
            href="https://github.com/burhanusman/gitbar"
            className="btn-retro px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-3 group text-sm sm:text-base"
          >
            <span>View on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile-only tech badge */}
        <div className="md:hidden opacity-0 animate-fade-up delay-500 mt-10">
          <div className="flex items-center gap-3 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[#5a5a66]">
            <span>MACOS NATIVE</span>
            <span className="text-[#00f5d4]">•</span>
            <span className="text-[#00f5d4]">SWIFT + SWIFTUI</span>
          </div>
        </div>
      </div>

      {/* Bottom decorative line - hidden on mobile */}
      <div className="hidden md:block absolute bottom-12 left-16 lg:left-24 right-1/2 opacity-0 animate-fade-up delay-500">
        <div className="hr-retro" />
      </div>

      {/* Side info panel - desktop only */}
      <div className="hidden md:block absolute bottom-12 right-8 md:right-16 lg:right-24 z-10 opacity-0 animate-fade-up delay-600">
        <div className="flex flex-col items-end gap-1 font-[family-name:var(--font-mono)] text-xs tracking-wider text-[#5a5a66]">
          <span>MACOS NATIVE</span>
          <span className="text-[#00f5d4]">SWIFT + SWIFTUI</span>
        </div>
      </div>

      {/* Coordinates decoration - desktop only */}
      <div className="hidden md:block absolute top-24 right-8 md:right-16 lg:right-24 z-10 opacity-0 animate-fade-up delay-700">
        <div className="font-[family-name:var(--font-mono)] text-xs tracking-wider text-[#3a3a44]">
          <div>SYS//ACTIVE</div>
          <div>BUILD_001</div>
        </div>
      </div>
    </section>
  );
}
