'use client';

import { useState } from 'react';
import { Download, Package } from 'lucide-react';
import { CodeBlock } from './CodeBlock';
import { Button } from './Button';

type Tab = 'homebrew' | 'direct';

export function Installation() {
  const [activeTab, setActiveTab] = useState<Tab>('homebrew');

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'homebrew', label: 'Homebrew', icon: <Package className="w-4 h-4" /> },
    { id: 'direct', label: 'Direct Download', icon: <Download className="w-4 h-4" /> },
  ];

  return (
    <section id="installation" className="relative px-6 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get started in <span className="gradient-text">seconds</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Install via Homebrew or download directly. Either way, you&apos;ll be up and running fast.
          </p>
        </div>

        {/* Tabs */}
        <div className="glass-card rounded-2xl p-2 mb-8">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="space-y-6">
          {activeTab === 'homebrew' && (
            <div className="animate-fade-in">
              <p className="text-gray-400 text-sm mb-4">
                The easiest way to install GitBar. Run this in your terminal:
              </p>
              <CodeBlock code="brew install --cask gitbar" />
              <p className="text-gray-500 text-sm mt-4">
                Don&apos;t have Homebrew?{' '}
                <a
                  href="https://brew.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Install it here
                </a>
              </p>
            </div>
          )}

          {activeTab === 'direct' && (
            <div className="animate-fade-in">
              <p className="text-gray-400 text-sm mb-6">
                Download the DMG, drag GitBar to Applications, and launch. That&apos;s it.
              </p>
              <div className="glass-card rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Download className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">GitBar.dmg</p>
                    <p className="text-sm text-gray-500">Universal binary · macOS 13+</p>
                  </div>
                </div>
                <Button
                  variant="primary"
                  href="https://github.com/burhanusman/gitbar/releases/latest"
                >
                  Download DMG
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Additional info */}
        <div className="mt-12 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
          <h3 className="text-sm font-semibold text-white mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              macOS 13.0 (Ventura) or later
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Apple Silicon or Intel Mac
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Less than 10MB disk space
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
