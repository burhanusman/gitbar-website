import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl">
          {/* App Icon */}
          <div className="mb-8">
            <Image
              src="/app-icon.png"
              alt="GitBar App Icon"
              width={120}
              height={120}
              className="rounded-[26px]"
              priority
            />
          </div>

          {/* Main heading */}
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 text-white">
            GitBar
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl">
            Git repository status at a glance. Lives in your menu bar.
          </p>

          {/* Primary CTA */}
          <a
            href="https://github.com/burhanusman/gitbar/releases/latest"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors text-lg"
          >
            Download for macOS
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Native & Fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built with Swift for macOS. Minimal resource usage, maximum performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Status at a Glance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                See uncommitted changes, branch status, and sync state instantly from your menu bar.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Auto-Updates</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Integrated Sparkle framework keeps the app updated with the latest features and fixes.
              </p>
            </div>

            {/* Feature 4 */}
            <div>
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold mb-2 text-white">Minimal UI</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clean, distraction-free interface. No clutter, just the information you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot/Demo Section */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Simple. Powerful. Elegant.
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            GitBar lives in your menu bar, providing instant visibility into your repository status without disrupting your workflow.
          </p>

          {/* Placeholder for screenshot - will be added later */}
          <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center">
            <p className="text-gray-500 text-sm">
              Screenshot coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Installation
          </h2>

          {/* Homebrew */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-white mb-4">
              Homebrew
            </h3>
            <div className="bg-black/50 border border-gray-800 rounded-lg p-4 font-mono text-sm">
              <code className="text-gray-300">
                brew install --cask gitbar
              </code>
            </div>
          </div>

          {/* DMG Download */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Direct Download
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Download the DMG, drag GitBar to Applications, and launch.
            </p>
            <a
              href="https://github.com/burhanusman/gitbar/releases/latest"
              className="inline-block px-6 py-3 border border-gray-700 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download DMG
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/burhanusman/gitbar"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/burhanusman"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </div>
          <div className="text-sm text-gray-600">
            v1.0.0
          </div>
        </div>
      </footer>
    </div>
  );
}
