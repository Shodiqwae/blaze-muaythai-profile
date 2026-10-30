import React from 'react';
import { Flame, Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';
import blazeLogo from '../assets/blaze-logo.png';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-red-950/60 pt-12 sm:pt-16 pb-10 sm:pb-12 relative overflow-hidden text-neutral-400">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-neutral-900">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-red-900/40 p-1 flex items-center justify-center shadow-lg shadow-red-900/30">
                <img
                  src={blazeLogo}
                  alt="Blaze Muaythai Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bebas text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  BLAZE
                </span>
                <span className="font-bebas text-2xl sm:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  MUAYTHAI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Layanan pelatihan privat Muay Thai 1-on-1 & Small Group door-to-door bersama Coach Usep. 
              Membakar lemak, melatih teknik bela diri presisi, dan membangun fisik terbaik Anda.
            </p>

            <div className="flex items-center gap-3 pt-1 sm:pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-600 active:scale-95 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button
                onClick={() => onOpenBooking('Kontak Footer')}
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-red-500 hover:border-red-600 active:scale-95 transition-all cursor-pointer"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Menu Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#coach" className="hover:text-red-400 transition-colors">
                  Profil & Pengalaman Coach
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-red-400 transition-colors">
                  Lokasi & Cara Latihan
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-red-400 transition-colors">
                  Program Latihan Khusus
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-red-400 transition-colors">
                  Paket & Biaya Sesi
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Pertanyaan Populer (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operational Area & Schedule */}
          <div className="lg:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white">
              Wilayah & Waktu Operasional
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Khusus melayani door-to-door di wilayah <strong className="text-white">Jakarta Selatan</strong> dan <strong className="text-white">Kota Depok</strong>.
                </span>
              </div>
              <div className="pt-1 sm:pt-2">
                <div className="text-white font-semibold mb-0.5">Kontak & WhatsApp Resmi:</div>
                <a
                  href="https://wa.me/6289680544568?text=Halo%20Coach%20Usep,%20saya%20tertarik%20dengan%20Blaze%20Muaythai"
                  target="_blank"
                  rel="noreferrer"
                  className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+62 896-8054-4568 (Coach Usep)</span>
                </a>
              </div>
              <div className="pt-1">
                <div className="text-white font-semibold mb-0.5">Jam Sesi Tersedia:</div>
                <p>Senin – Minggu: 06:00 – 21:00 WIB (Berdasarkan Booking)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Blaze Muaythai</span>. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer py-1 active:scale-95"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
