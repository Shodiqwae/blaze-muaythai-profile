import React, { useState } from 'react';
import { Flame, Shield, Heart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Programs({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    {
      id: 'fat-loss',
      icon: <Flame className="w-5 h-5 text-red-500" />,
      badge: 'Paling Diminati',
      title: 'Blaze Fat Loss & Shred',
      tagline: 'Bakar 600–900 Kalori Per Sesi dengan High-Tempo Muay Thai Pad Work',
      desc: 'Program latihan intensitas tinggi (HIIT) yang mengombinasikan pukulan, tendangan pad work, dan functional core training. Efektif mengikis lemak membandel di area perut, lengan, dan pinggang tanpa rasa bosan seperti lari biasa.',
      highlights: [
        'Kombinasi pad work & dynamic bodyweight circuits',
        'Fokus percepatan metabolisme (Afterburn Effect)',
        'Membentuk otot lean & mengencangkan siluet tubuh',
        'Monitoring intensitas detak jantung & level kardio',
      ],
      idealFor: 'Pekerja kantoran / siapa saja yang ingin turun berat badan & bentuk tubuh secara cepat dan menyenangkan.',
    },
    {
      id: 'striking',
      icon: <Shield className="w-5 h-5 text-red-500" />,
      badge: 'Teknik Otentik',
      title: 'Striking & Self-Defense Mastery',
      tagline: 'Kuasai Seni 8 Anggota Tubuh (Pukulan, Siku, Lutut, & Tendangan Presisi)',
      desc: 'Belajar teknik Muay Thai asli langsung dari dasar. Coach Usep mengajarkan biomekanika gerak yang benar, pertahanan diri praktis (*practical self-defense*), teknik clinch, serta timing serangan yang efektif.',
      highlights: [
        'Koreksi detail kuda-kuda, rotasi pinggul, dan guard',
        'Teknik pukulan (Jab, Cross, Hook, Uppercut)',
        'Tendangan Thai Kick, Teep (push kick), Knee, & Elbow strikes',
        'Pertahanan dari cengkeraman & situasi darurat',
      ],
      idealFor: 'Pemula hingga intermediate yang ingin percaya diri menguasai seni bela diri otentik dengan teknik yang rapi.',
    },
    {
      id: 'women',
      icon: <Heart className="w-5 h-5 text-red-500" />,
      badge: 'Zero Intimidation',
      title: 'Women’s Fitness & Body Toning',
      tagline: 'Latihan Privat yang Nyaman, Menyenangkan, dan Membentuk Otot Ramping',
      desc: 'Dirancang khusus untuk wanita yang ingin bugar, membakar kalori, dan melatih kelincahan dalam suasana yang suportif dan 100% privat. Tidak perlu takut badan menjadi kekar/bulky—fokus latihan adalah ramping (*lean & toned*).',
      highlights: [
        'Porsi latihan bertahap yang disesuaikan fisik wanita',
        'Fokus pembentukan paha, pinggul, lengan, dan pinggang',
        'Pelepas stres kerjaan dan pemicu endorfin bahagia',
        'Teknik dasar bela diri praktis untuk proteksi diri',
      ],
      idealFor: 'Wanita modern yang mencari alternatif olahraga seru, privat, dan aman tanpa harus ke gym umum.',
    },
    {
      id: 'fighter',
      icon: <Zap className="w-5 h-5 text-red-500" />,
      badge: 'Intensitas Tinggi',
      title: 'Strength & Fighter Conditioning',
      tagline: 'Dorong Batas Fisik & Stamina Anda ke Level Atlet Profesional',
      desc: 'Bagi Anda yang sudah memiliki dasar dan ingin latihan dengan standar conditioning petarung Muay Thai. Fokus pada explosive power, kelincahan refleks, ketahanan kardio 5 ronde, dan teknik striking tingkat lanjut.',
      highlights: [
        'Speed & Power Pad Work drills',
        'Advanced footwork & slip counter combinations',
        'Hardcore core & neck strengthening conditioning',
        'Light technical sparring (opsional sesuai persetujuan)',
      ],
      idealFor: 'Praktisi bela diri, crossfitter, atau penghobi olahraga yang ingin menguji ketangguhan fisik dan mental.',
    },
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5" />
            <span>Pilihan Program Latihan</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Program yang Disesuaikan dengan{' '}
            <span className="text-red-500">Target Anda</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Tidak ada program 'satu ukuran untuk semua'. Setiap sesi disesuaikan dengan kapasitas tubuh dan tujuan personal Anda.
          </p>
        </div>

        {/* Tab Selection Buttons - Horizontally Scrollable on Mobile for App-like feel */}
        <div className="flex items-center justify-start sm:justify-center gap-2 pb-3 overflow-x-auto no-scrollbar scroll-smooth mb-6 sm:mb-8 px-1">
          {programs.map((prog, idx) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 border cursor-pointer ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-red-600 to-red-700 border-red-500 text-white shadow-lg shadow-red-600/30 scale-[1.02]'
                  : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {prog.icon}
              <span>{prog.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Program Card Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-neutral-950 border border-red-900/50 p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
            
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-5 sm:space-y-6">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-700/50 text-red-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  {programs[activeTab].badge}
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 font-medium bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                  ⏱️ 60 Menit Intensif
                </div>
              </div>

              <div>
                <h3 className="font-bebas text-2xl sm:text-4xl text-white tracking-wide">
                  {programs[activeTab].title}
                </h3>
                <p className="text-red-400 font-medium text-xs sm:text-sm mt-1">
                  {programs[activeTab].tagline}
                </p>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {programs[activeTab].desc}
              </p>

              {/* Highlights Grid */}
              <div className="pt-2">
                <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-neutral-400 mb-2.5">
                  Materi & Fokus Utama Sesi:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {programs[activeTab].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-neutral-300 leading-relaxed">
                <span className="font-bold text-red-400">Cocok untuk: </span>
                <span>{programs[activeTab].idealFor}</span>
              </div>

              {/* Action Button */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-neutral-800/80">
                <span className="text-[11px] text-neutral-400 text-center sm:text-left">
                  Dapatkan menu latihan personal yang disesuaikan dengan fisik Anda.
                </span>
                <button
                  onClick={() => onOpenBooking(`Program: ${programs[activeTab].title}`)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 group transition-all shrink-0 cursor-pointer active:scale-95"
                >
                  <span>Pilih Program Ini</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
