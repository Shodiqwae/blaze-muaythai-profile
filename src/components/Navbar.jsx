import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Phone, MessageSquare, ChevronRight, Shield } from 'lucide-react';
import blazeLogo from '../assets/blaze-logo.png';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Tentang Coach', href: '#coach' },
    { name: 'Lokasi & Fleksibilitas', href: '#locations' },
    { name: 'Program Latihan', href: '#programs' },
    { name: 'Paket & Harga', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-red-950/50 py-2.5 shadow-xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-neutral-950/50 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none">
            <div className="relative shrink-0">
              <img
                src={blazeLogo}
                alt="Blaze Muaythai Logo"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-bebas text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-white">
                  BLAZE
                </span>
                <span className="font-bebas text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-500">
                  MUAYTHAI
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-widest text-neutral-400 -mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Personal Coaching
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-neutral-300 hover:text-red-500 transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking('Sesi Trial')}
              className="relative group overflow-hidden rounded-full p-px font-semibold text-xs uppercase tracking-wider active:scale-95 transition-transform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-500 to-orange-600 rounded-full animate-gradient"></span>
              <span className="relative block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-neutral-950 text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Book Sesi Trial</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-200 hover:text-white hover:border-red-600/60 active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-neutral-950/98 backdrop-blur-2xl pt-20 px-6 pb-8 animate-fadeIn overflow-y-auto">
          
          {/* Links list */}
          <div className="space-y-2 py-4">
            <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold px-3 mb-2">
              Navigasi Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-medium text-neutral-200 hover:text-white hover:bg-neutral-900/80 active:bg-neutral-900 transition-all border border-transparent hover:border-neutral-800"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </div>

          {/* Quick CTA inside Mobile Menu */}
          <div className="pt-6 border-t border-neutral-900 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Sesi Trial via Mobile Menu');
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-red-900/50"
            >
              <Flame className="w-5 h-5 text-white" />
              <span>Book Sesi Trial via WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 text-center">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Ramah Pemula & Door-to-Door</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
