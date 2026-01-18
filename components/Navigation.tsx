'use client';

import { Github } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full px-8 md:px-16 lg:px-24 py-6 flex justify-between items-center z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="flex items-center gap-2">
          {/* Decorative brackets */}
          <span className="text-[#00f5d4] font-[family-name:var(--font-mono)] text-sm">[</span>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-[#e8e6e3] group-hover:text-[#00f5d4] transition-colors">
            GITBAR
          </span>
          <span className="text-[#00f5d4] font-[family-name:var(--font-mono)] text-sm">]</span>
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-8">
        <a
          href="https://github.com/burhanusman/gitbar"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] text-[#5a5a66] hover:text-[#00f5d4] transition-colors uppercase"
        >
          <Github className="w-4 h-4" />
          <span className="hidden sm:inline">Source</span>
          <span className="w-1.5 h-1.5 bg-[#00f5d4] opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </nav>
  );
}
