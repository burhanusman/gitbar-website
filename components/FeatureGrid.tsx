'use client';

import { Bot, Zap, MousePointerClick, FolderTree, Cpu, RefreshCw } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Bot,
    title: 'AI Project Detection',
    description: 'Auto-discovers Claude Code & Codex projects. See which repos have AI-generated changes at a glance.',
  },
  {
    icon: Zap,
    title: 'Instant Status',
    description: 'Branch name, commits ahead/behind, dirty state. All your repo info in milliseconds.',
  },
  {
    icon: MousePointerClick,
    title: 'Quick Actions',
    description: 'Stage, commit, and push without opening a terminal. Fast keyboard shortcuts for common operations.',
  },
  {
    icon: FolderTree,
    title: 'Multi-Repo Support',
    description: 'Track unlimited repositories from a single menu bar icon. Organize with folders and favorites.',
  },
  {
    icon: Cpu,
    title: 'Native & Fast',
    description: 'Built with Swift for macOS. Uses less than 10MB RAM and launches in under 200ms.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Updates',
    description: 'Silent updates via Sparkle framework. Always running the latest version without interruption.',
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything you need, <span className="gradient-text">nothing you don&apos;t</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful features packed into a lightweight menu bar app.
            No clutter, no complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
