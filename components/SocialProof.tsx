'use client';

import { Star } from 'lucide-react';

export function SocialProof() {
  return (
    <section className="relative px-6 py-20 overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* GitHub stars */}
        <div className="flex flex-col items-center mb-16">
          <a
            href="https://github.com/burhanusman/gitbar"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 group-hover:border-white/20 transition-all">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">Star us on GitHub</span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-sm text-gray-300">
                Open Source
              </span>
            </div>
          </a>
        </div>

        {/* Works with section */}
        <div className="text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">Works with</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Claude Code */}
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                <span className="text-xl">🧠</span>
              </div>
              <span className="font-medium">Claude Code</span>
            </div>

            {/* OpenAI Codex */}
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                <span className="text-xl">🤖</span>
              </div>
              <span className="font-medium">OpenAI Codex</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="font-medium">GitHub</span>
            </div>

            {/* GitLab */}
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
                </svg>
              </div>
              <span className="font-medium">GitLab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
