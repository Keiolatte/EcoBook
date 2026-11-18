'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/jelajahi', label: 'Jelajahi Buku' },
  { href: '/tentang', label: 'Tentang Kami' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-forest rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-forest">EcoBook</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-forest'
                    : 'text-charcoal hover:text-forest'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="block h-0.5 bg-forest mt-1 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2.5 text-sm font-semibold text-forest border-2 border-forest rounded-lg hover:bg-forest/5 transition-colors">
              Masuk
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-forest rounded-lg hover:bg-forest/90 transition-colors">
              Daftar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-offwhite"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-charcoal" /> : <Menu className="w-6 h-6 text-charcoal" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-forest bg-forest/5'
                      : 'text-charcoal hover:bg-offwhite'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <button className="w-full py-2.5 text-sm font-semibold text-forest border-2 border-forest rounded-lg hover:bg-forest/5 transition-colors">
                  Masuk
                </button>
                <button className="w-full py-2.5 text-sm font-semibold text-white bg-forest rounded-lg hover:bg-forest/90 transition-colors">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
