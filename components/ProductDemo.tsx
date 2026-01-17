'use client';

export function ProductDemo() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple. Powerful. <span className="gradient-text">Elegant.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            GitBar lives in your menu bar, providing instant visibility into your
            repository status without disrupting your workflow.
          </p>
        </div>

        {/* Screenshot showcase with glassmorphism frame */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl opacity-50" />

          {/* Frame */}
          <div className="relative glass-card rounded-3xl p-2 sm:p-3">
            {/* Menu bar mock */}
            <div className="bg-gray-900/80 rounded-2xl overflow-hidden">
              {/* macOS menu bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-sm">🍎</span>
                  <span className="text-sm font-medium text-white">Finder</span>
                  <span className="text-sm text-gray-400">File</span>
                  <span className="text-sm text-gray-400">Edit</span>
                  <span className="text-sm text-gray-400">View</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">🔋</span>
                  <span className="text-sm text-gray-400">📶</span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-gray-300">GitBar</span>
                  </div>
                  <span className="text-sm text-gray-400">3:42 PM</span>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative">
                {/* Placeholder content */}
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/10">
                    <span className="text-4xl">📸</span>
                  </div>
                  <p className="text-gray-400 text-lg mb-2">Screenshot Coming Soon</p>
                  <p className="text-gray-500 text-sm max-w-md">
                    Add a screenshot of GitBar showing the menu bar popover with repos,
                    ideally featuring a Claude Code project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats below */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: '<10MB', label: 'Memory usage' },
            { value: '200ms', label: 'Launch time' },
            { value: '∞', label: 'Repos supported' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
