'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#installation', label: 'Install' },
    { href: 'https://github.com/burhanusman/gitbar', label: 'GitHub', external: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/app-icon.png"
              alt="GitBar"
              width={32}
              height={32}
              className="rounded-lg transition-transform group-hover:scale-105"
            />
            <span className="font-semibold text-white">GitBar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {link.label === 'GitHub' && <Github className="w-4 h-4" />}
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              href="https://github.com/burhanusman/gitbar/releases/latest"
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {link.label === 'GitHub' && <Github className="w-4 h-4" />}
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="sm"
                href="https://github.com/burhanusman/gitbar/releases/latest"
                className="w-full mt-2"
              >
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
