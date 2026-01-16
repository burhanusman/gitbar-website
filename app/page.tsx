export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <main className="flex flex-col items-center justify-center text-center max-w-4xl">
        {/* Icon/Logo placeholder */}
        <div className="mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          GitBar
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-400 mb-4 max-w-2xl">
          Elegant GitHub status in your macOS menu bar
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-12 max-w-xl">
          Monitor your repositories with real-time status updates. Track branches, commits, and changes at a glance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="https://github.com/burhanusman/gitbar/releases/latest"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download for macOS
          </a>
          <a
            href="https://github.com/burhanusman/gitbar"
            className="px-8 py-4 border border-gray-700 text-white rounded-lg font-semibold hover:border-gray-500 hover:bg-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-3xl">
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-white">Fast & Lightweight</h3>
            <p className="text-gray-400 text-sm">
              Native macOS app with minimal resource usage
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl mb-3">🔔</div>
            <h3 className="text-lg font-semibold mb-2 text-white">Real-time Updates</h3>
            <p className="text-gray-400 text-sm">
              Stay in sync with automatic status checks
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2 text-white">Beautiful Design</h3>
            <p className="text-gray-400 text-sm">
              Clean interface that fits perfectly in your menu bar
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-sm text-gray-600">
          <p>
            Open source on{" "}
            <a
              href="https://github.com/burhanusman/gitbar"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
