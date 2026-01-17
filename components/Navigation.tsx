'use client';

import { Github } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="w-full p-6 flex justify-between items-center z-50 relative">
      <div className="flex items-center gap-3 cursor-pointer group">
        {/* We can keep the icon if desired, or just text. User said "clean". Let's use text primarily but maybe the icon if it looks good. 
            Actually, let's stick to the text "GITBAR" as per my previous reliable design. */}
        <span className="text-xl font-black tracking-tighter text-white hover:text-[#3366E6] transition-colors">
          GITBAR
        </span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://github.com/burhanusman/gitbar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </nav>
  );
}
