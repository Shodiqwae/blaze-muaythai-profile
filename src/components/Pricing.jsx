import React, { useState } from 'react';
import { Check, Flame, Star, Zap, MessageSquare, Users, User, ArrowRight, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  // Interactive Simulator States (1 - 2 Orang)
  const [participants, setParticipants] = useState(1); // 1 or 2
  const [planType, setPlanType] = useState('pack10'); // 'single' (1 visit) or 'pack10' (10 sesi)
  const [viewMode, setViewMode] = useState('simulator'); // 'simulator' or 'cards'

  // Pricing Data Matrix
  const pricingData = {
    1: {
      single: {
        name: 'Single Drop-in Session (1 Orang)',
        title: 'Single Visit (1 Sesi)',
        price: '350.000',
        numericPrice: 350000,
        period: '1 Sesi (60–90 Menit / Maks 1J 30M)',
        perPersonRate: 'Rp 350.000 / sesi',
        savings: null,
        badge: 'Trial / Per Visit',
        desc: 'Cocok untuk Anda yang ingin mencoba 1 sesi latihan pad work intensif tanpa komitmen paket.',
        features: [
          '1 Sesi Private 1-on-1 (60–90 Menit)',
          'Coach datang langsung ke lokasi Anda',
          'Peralatan lengkap disediakan Coach',
          'Struktur latihan lengkap (Pemanasan s/d Cooling Down)',
          '100% Ramah pemula (Zero Experience)',
        ],
      },
      pack10: {
        name: 'Paket Komitmen 10 Sesi (1 Orang)',
        title: 'Paket 10 Sesi ⭐',
        price: '3.000.000',
        numericPrice: 3000000,
        period: '10 Sesi Pertemuan (Bayar Dimuka)',
        perPersonRate: 'Hanya Rp 300.000 / sesi',
        savings: 'HEMAT Rp 500.000',
        badge: '⭐ BEST VALUE (PALING DIPILIH)',
        desc: 'Pilihan paling ideal untuk akselerasi pembakaran lemak, pembentukan otot, dan penguasaan teknik striking.',
        features: [
          '10 Sesi Private 1-on-1 Intensif',
          'Harga lebih hemat Rp 50.000 per pertemuan',
          'Prioritas booking hari & jam latihan pilihan Anda',
          'Pad work bertahap & conditioning terukur',
          'Peralatan lengkap standar pro dibawa Coach',
          'Jadwal fleksibel (bisa reschedule info H-1)',
        ],
      },
    },
    2: {
      single: {
        name: 'Single Duo Session (2 Orang)',
        title: 'Single Visit Duo (1 Sesi)',
        price: '500.000',
        numericPrice: 500000,
        period: '1 Sesi untuk 2 Orang (60–90 Menit / Maks 1J 30M)',
        perPersonRate: 'Hanya Rp 250.000 / orang!',
        savings: null,
        badge: 'Trial Duo / Per Visit',
        desc: 'Latihan privat berdua bersama pasangan atau sahabat. Lebih seru, aktif, dan saling memotivasi.',
        features: [
          '1 Sesi Private 2-on-1 (60–90 Menit)',
          'Tarif patungan hanya Rp 250k / orang',
          'Coach Usep datang ke lokasi pilihan Anda',
          'Peralatan lengkap untuk 2 orang disediakan',
          'Sesi interaktif dan tidak membosankan',
        ],
      },
      pack10: {
        name: 'Paket Komitmen 10 Sesi Duo (2 Orang)',
        title: 'Paket 10 Sesi Duo 🔥',
        price: '4.500.000',
        numericPrice: 4500000,
        period: '10 Sesi untuk 2 Orang (Bayar Dimuka)',
        perPersonRate: 'Hanya Rp 225.000 / orang / sesi!',
        savings: 'HEMAT Rp 500.000 (Total Rp 2.25jt/orang)',
        badge: '🔥 SUPER VALUE DUO',
        desc: 'Paket paling hemat & seru! Dapatkan bimbingan privat 2-on-1 dengan tarif termurah per orang.',
        features: [
          '10 Sesi Private 2-on-1 untuk 2 Orang',
          'Tarif termurah: hanya Rp 225k/orang per sesi!',
          'Total hemat Rp 500.000 dibanding bayar per visit',
          'Jadwal fleksibel (atur bareng partner & Coach)',
          'Pad work, shadow boxing & core duet drills',
          'Peralatan pro lengkap untuk 2 orang dibawa Coach',
        ],
      },
    },
  };

  const selectedData = pricingData[participants][planType];

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Kalkulator & Pilihan Paket Sesi</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Simulasikan Paket & Biaya Sesi{' '}
            <span className="text-red-500">Blaze Muaythai</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Pilih jumlah peserta (1 atau 2 orang) dan jenis paket untuk melihat rincian biaya serta tarif per orang secara langsung!
          </p>

          {/* View Mode Toggle: Simulator vs Side-by-Side Cards */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="inline-flex p-1 rounded-xl bg-neutral-950 border border-neutral-800">
              <button
                type="button"
                onClick={() => setViewMode('simulator')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'simulator'
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                🎛️ Simulator Interaktif
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                📋 Tabel Semua Paket
              </button>
            </div>
          </div>
        </div>

        {/* ===================== VIEW MODE 1: INTERACTIVE SIMULATOR ===================== */}
        {viewMode === 'simulator' && (
          <div className="max-w-4xl mx-auto bg-neutral-950 border border-red-900/50 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Left Column: Interactive Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Step 1: Participant Count (Strictly 1 or 2 Orang) */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs uppercase font-bold text-neutral-300 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] flex items-center justify-center font-bold">1</span>
                      <span>Pilih Jumlah Peserta Latihan:</span>
                    </label>
                    <span className="text-xs font-bold text-red-400 font-bebas text-base">
                      {participants === 1 ? '1 ORANG (1-ON-1)' : '2 ORANG (DUO)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* 1 Orang Card Button */}
                    <button
                      type="button"
                      onClick={() => setParticipants(1)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 flex flex-col justify-between ${
                        participants === 1
                          ? 'bg-gradient-to-br from-red-600/20 via-neutral-900 to-neutral-950 border-red-500 shadow-lg shadow-red-600/20 ring-1 ring-red-500/50'
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          participants === 1 ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          <User className="w-5 h-5" />
                        </div>
                        {participants === 1 && (
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        )}
                      </div>
                      <div>
                        <div className="font-bebas text-xl text-white tracking-wide">1 ORANG</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">Private 1-on-1 Eksklusif</div>
                      </div>
                    </button>

                    {/* 2 Orang Card Button */}
                    <button
                      type="button"
                      onClick={() => setParticipants(2)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 flex flex-col justify-between ${
                        participants === 2
                          ? 'bg-gradient-to-br from-red-600/20 via-neutral-900 to-neutral-950 border-red-500 shadow-lg shadow-red-600/20 ring-1 ring-red-500/50'
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          participants === 2 ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          <Users className="w-5 h-5" />
                        </div>
                        {participants === 2 && (
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        )}
                      </div>
                      <div>
                        <div className="font-bebas text-xl text-white tracking-wide">2 ORANG</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">Duo / Bareng Pasangan</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Step 2: Plan Type Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs uppercase font-bold text-neutral-300 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] flex items-center justify-center font-bold">2</span>
                      <span>Pilih Jenis & Komitmen Paket:</span>
                    </label>
                    {planType === 'pack10' && (
                      <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                        🎉 Hemat Rp 500k
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Single Visit */}
                    <button
                      type="button"
                      onClick={() => setPlanType('single')}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 flex items-center justify-between ${
                        planType === 'single'
                          ? 'bg-neutral-900 border-red-500 text-white shadow-md'
                          : 'bg-neutral-900/40 border-neutral-800/80 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-white">Single Visit (1 Sesi)</div>
                        <div className="text-[11px] text-neutral-400">Coba dulu tanpa paket</div>
                      </div>
                      <Zap className={`w-4 h-4 ${planType === 'single' ? 'text-red-500' : 'text-neutral-500'}`} />
                    </button>

                    {/* Paket 10 Sesi */}
                    <button
                      type="button"
                      onClick={() => setPlanType('pack10')}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer active:scale-95 flex items-center justify-between ${
                        planType === 'pack10'
                          ? 'bg-gradient-to-r from-red-950/60 to-neutral-900 border-red-500 text-white shadow-lg shadow-red-900/30'
                          : 'bg-neutral-900/40 border-neutral-800/80 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-white flex items-center gap-1.5">
                          <span>Paket 10 Sesi</span>
                          <span className="text-amber-400 text-xs">⭐</span>
                        </div>
                        <div className="text-[11px] text-emerald-400 font-medium">Bayar Dimuka & Hemat 500k</div>
                      </div>
                      <Trophy className={`w-4 h-4 ${planType === 'pack10' ? 'text-amber-400' : 'text-neutral-500'}`} />
                    </button>
                  </div>
                </div>

                {/* Brief description of current choice */}
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-300 leading-relaxed">
                  <span className="font-bold text-white">Ringkasan: </span>
                  <span>{selectedData.desc}</span>
                </div>

              </div>

              {/* Right Column: Live Price & Summary Box */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-red-900/60 p-5 sm:p-6 space-y-4 shadow-xl">
                  
                  {/* Badge & Title */}
                  <div>
                    <div className="inline-block px-2.5 py-1 rounded-md bg-red-950/80 border border-red-800/50 text-[10px] uppercase font-bold text-red-400 mb-2">
                      {selectedData.badge}
                    </div>
                    <h3 className="font-bebas text-2xl text-white tracking-wide">
                      {selectedData.name}
                    </h3>
                  </div>

                  {/* Price Tag Display */}
                  <div className="py-3 border-y border-neutral-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-neutral-400">Rp</span>
                      <span className="font-bebas text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        {selectedData.price}
                      </span>
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {selectedData.period}
                    </div>

                    {/* Per person / savings highlight */}
                    <div className="mt-2.5 space-y-1.5">
                      <div className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg px-2.5 py-1 inline-flex items-center gap-1.5">
                        <span>👉</span>
                        <span>{selectedData.perPersonRate}</span>
                      </div>
                      {selectedData.savings && (
                        <div className="block text-[11px] font-bold text-amber-300">
                          🔥 {selectedData.savings}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {selectedData.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Booking Action */}
                  <button
                    onClick={() =>
                      onOpenBooking(
                        `Simulasi: ${selectedData.name} (Rp ${selectedData.price} - ${participants} Orang)`
                      )
                    }
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ambil Paket Ini via WhatsApp</span>
                  </button>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* ===================== VIEW MODE 2: SIDE-BY-SIDE CARDS ===================== */}
        {viewMode === 'cards' && (
          <div className="space-y-8 max-w-5xl mx-auto animate-fadeIn">
            
            {/* 1 Orang Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-red-500" />
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  Paket 1 Orang (Private 1-on-1)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Single 1 Orang */}
                <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded">Single Visit</span>
                    <h4 className="font-bebas text-2xl text-white mt-2">Single Drop-in (1 Orang)</h4>
                    <div className="py-3 border-y border-neutral-800 my-4">
                      <span className="font-bebas text-3xl text-white">Rp 350.000</span>
                      <span className="text-xs text-neutral-400 block">per sesi (60–75 menit)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 mb-6">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> 1 Sesi bimbingan 1-on-1</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Coach datang ke lokasi Anda</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Peralatan lengkap disediakan</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenBooking('1 Orang - Single Session (Rp 350.000)')}
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-bold uppercase transition-all"
                  >
                    Pilih Single Session
                  </button>
                </div>

                {/* 10 Sesi 1 Orang */}
                <div className="rounded-3xl bg-neutral-950 border border-red-500/80 ring-2 ring-red-600/50 p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950/80 border border-red-800/40 px-2.5 py-1 rounded">⭐ Paling Diminati</span>
                    <h4 className="font-bebas text-2xl text-white mt-2">Paket 10 Sesi (1 Orang)</h4>
                    <div className="py-3 border-y border-neutral-800 my-4">
                      <span className="font-bebas text-3xl text-white">Rp 3.000.000</span>
                      <span className="text-xs text-emerald-400 font-bold block mt-0.5">Jatuhnya Rp 300.000/sesi (Hemat 500k!)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 mb-6">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> 10 Sesi pertemuan intensif</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Prioritas booking jadwal</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Hemat Rp 500.000 bayar di awal</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenBooking('1 Orang - Paket 10 Sesi (Rp 3.000.000)')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold uppercase shadow-lg shadow-red-600/40 transition-all"
                  >
                    Ambil Paket 10 Sesi
                  </button>
                </div>
              </div>
            </div>

            {/* 2 Orang (Duo) Section */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-red-500" />
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  Paket 2 Orang (Duo / Bareng Pasangan / Teman)
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Single Duo */}
                <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded">Single Duo</span>
                    <h4 className="font-bebas text-2xl text-white mt-2">Single Visit Duo (2 Orang)</h4>
                    <div className="py-3 border-y border-neutral-800 my-4">
                      <span className="font-bebas text-3xl text-white">Rp 500.000</span>
                      <span className="text-xs text-neutral-400 block">per sesi (Rp 250.000/orang)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 mb-6">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> 1 Sesi privat untuk 2 orang</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Patungan lebih murah</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Peralatan untuk 2 orang disediakan</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenBooking('2 Orang - Single Session Duo (Rp 500.000)')}
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-bold uppercase transition-all"
                  >
                    Pilih Single Duo
                  </button>
                </div>

                {/* 10 Sesi Duo */}
                <div className="rounded-3xl bg-neutral-950 border border-red-500/80 ring-2 ring-red-600/50 p-6 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950/80 border border-red-800/40 px-2.5 py-1 rounded">🔥 SUPER HEMAT DUO</span>
                    <h4 className="font-bebas text-2xl text-white mt-2">Paket 10 Sesi Duo (2 Orang)</h4>
                    <div className="py-3 border-y border-neutral-800 my-4">
                      <span className="font-bebas text-3xl text-white">Rp 4.500.000</span>
                      <span className="text-xs text-emerald-400 font-bold block mt-0.5">Hanya Rp 225.000/orang/sesi (Hemat 500k!)</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-300 mb-6">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> 10 Sesi privat untuk 2 orang</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Tarif termurah: Rp 2.25jt/orang</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-red-500" /> Jadwal fleksibel bersama partner</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenBooking('2 Orang - Paket 10 Sesi Duo (Rp 4.500.000)')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold uppercase shadow-lg shadow-red-600/40 transition-all"
                  >
                    Ambil Paket 10 Sesi Duo
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Small Group Inquiry Box */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wide">
                Ingin Latihan Rame-Rame (3+ Orang / Komunitas / Kantor)?
              </h4>
              <p className="text-xs text-neutral-400">
                Tersedia paket khusus small group dengan harga patungan yang fleksibel.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Konsultasi Small Group (3+ Orang)')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer active:scale-95"
          >
            Tanya Rate Small Group
          </button>
        </div>

      </div>
    </section>
  );
}
