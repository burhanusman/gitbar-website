'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Installation', href: '#installation' },
      { label: 'Changelog', href: 'https://github.com/burhanusman/gitbar/releases', external: true },
    ],
    resources: [
      { label: 'Documentation', href: 'https://github.com/burhanusman/gitbar#readme', external: true },
      { label: 'GitHub', href: 'https://github.com/burhanusman/gitbar', external: true },
      { label: 'Report Issue', href: 'https://github.com/burhanusman/gitbar/issues', external: true },
    ],
    social: [
      { label: 'Twitter', href: 'https://twitter.com/burhanusman', icon: Twitter },
      { label: 'GitHub', href: 'https://github.com/burhanusman', icon: Github },
      { label: 'Email', href: 'mailto:hello@gitbar.app', icon: Mail },
    ],
  };

  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/app-icon.png"
                alt="GitBar"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-xl font-semibold text-white">GitBar</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Git repository status at a glance. Built for developers who use AI coding assistants.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {links.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} GitBar. Open source under MIT license.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>v1.0.0</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>macOS 13+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
