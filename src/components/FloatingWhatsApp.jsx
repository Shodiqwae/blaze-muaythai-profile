import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ onOpenBooking }) {
  return (
    <aside className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble on desktop */}
      <div className="hidden md:flex items-center gap-2 bg-neutral-900/95 backdrop-blur-md border border-red-900/40 text-neutral-200 text-xs px-3.5 py-2 rounded-2xl shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-semibold text-white">Coach Usep Online</span>
        <span className="text-neutral-400">• Tanya Jadwal</span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => onOpenBooking('Quick Consultation via Floating Button')}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-90 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/80 transition-all duration-300 relative group cursor-pointer"
        aria-label="Hubungi Coach Usep via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
      </button>
    </aside>
  );
}
