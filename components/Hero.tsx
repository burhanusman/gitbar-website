'use client';

import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fade-in opacity-0">
          <Badge variant="gradient">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Built for AI-Assisted Development
          </Badge>
        </div>

        {/* App Icon */}
        <div className="my-8 animate-fade-in opacity-0 delay-100">
          <div className="relative">
            <Image
              src="/app-icon.png"
              alt="GitBar App Icon"
              width={120}
              height={120}
              className="rounded-[26px] animate-float"
              priority
            />
            <div className="absolute inset-0 rounded-[26px] glow-subtle" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in opacity-0 delay-200">
          Your repos. Your AI projects.{' '}
          <span className="gradient-text">One glance.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-fade-in opacity-0 delay-300">
          GitBar lives in your menu bar, auto-discovering Claude Code and Codex projects
          so you never lose track of AI-generated changes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0 delay-400">
          <Button
            variant="primary"
            size="lg"
            href="https://github.com/burhanusman/gitbar/releases/latest"
          >
            <Download className="w-5 h-5 mr-2" />
            Download for macOS
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="https://github.com/burhanusman/gitbar"
          >
            View on GitHub
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Version info */}
        <p className="mt-8 text-sm text-gray-500 animate-fade-in opacity-0 delay-500">
          v1.0.0 · Free & Open Source · macOS 13+
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050507] to-transparent" />
    </section>
  );
}
