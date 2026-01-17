'use client';

import { Sparkles, Bot, FolderSearch } from 'lucide-react';

export function AIIntegration() {
  const features = [
    {
      icon: FolderSearch,
      title: 'Auto-Discovery',
      description: 'GitBar automatically finds projects created by Claude Code and OpenAI Codex in common directories.',
    },
    {
      icon: Bot,
      title: 'AI Change Tracking',
      description: 'See exactly which files were modified by AI assistants, with clear visual indicators.',
    },
    {
      icon: Sparkles,
      title: 'Smart Notifications',
      description: 'Get notified when AI tools make changes to your repos, so nothing slips through.',
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial-bottom" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for the AI coding era
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            As Claude Code and Codex become essential tools, GitBar helps you stay on top of
            AI-generated changes across all your projects.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card rounded-2xl p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Visual showcase */}
        <div className="mt-16 relative">
          <div className="glass-card rounded-2xl p-8 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm text-gray-500">GitBar - AI Projects</span>
            </div>

            {/* Mock project list */}
            <div className="space-y-3">
              {[
                { name: 'my-react-app', branch: 'main', status: 'claude-code', changes: 3 },
                { name: 'api-server', branch: 'feature/auth', status: 'codex', changes: 7 },
                { name: 'docs-site', branch: 'main', status: 'clean', changes: 0 },
              ].map((project) => (
                <div
                  key={project.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <span className="text-lg">📁</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">{project.name}</p>
                      <p className="text-sm text-gray-500">{project.branch}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.status === 'claude-code' && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        Claude Code
                      </span>
                    )}
                    {project.status === 'codex' && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                        Codex
                      </span>
                    )}
                    {project.changes > 0 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-300">
                        {project.changes} changes
                      </span>
                    )}
                    {project.changes === 0 && (
                      <span className="text-sm text-gray-500">✓ Clean</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-20 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
