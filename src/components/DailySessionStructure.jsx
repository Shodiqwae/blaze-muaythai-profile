import React from 'react';
import { Timer, Activity, Zap, Dumbbell, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DailySessionStructure() {
  const steps = [
    {
      step: '01',
      duration: '15–20 Menit',
      icon: <Activity className="w-6 h-6 text-red-500" />,
      title: 'Pemanasan (Warm-Up)',
      subtitle: 'Aktivasi Otot & Detak Jantung',
      desc: 'Lompat tali (skipping) untuk melatih koordinasi kaki & kelincahan, lari ringan, dan peregangan dinamis agar otot tidak kaku dan siap bergerak bebas.',
      points: ['Skipping rope cardio', 'Dynamic stretching', 'Footwork activation'],
    },
    {
      step: '02',
      duration: '2–3 Ronde',
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      title: 'Latihan Bayangan (Shadow Boxing)',
      subtitle: 'Form, Kuda-kuda & Kecepatan',
      desc: 'Melatih kecepatan gerak, keseimbangan kuda-kuda, serta kombinasi teknik 8 anggota tubuh (pukulan, tendangan, siku, dan lutut) dengan koreksi presisi.',
      points: ['Koreksi stance & guard', 'Kombinasi 8 limbs', 'Refleks & balance drill'],
    },
    {
      step: '03',
      duration: '3–5 Ronde',
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Latihan Pad & Heavy Bag (Pad Work)',
      subtitle: 'Daya Ledak & Pembakaran Kalori Maksimal',
      desc: 'Sesi paling seru dan intens! Memukul dan menendang target/bantalan pad bersama Coach Usep dengan tenaga penuh untuk melatih power striking dan membakar lemak.',
      points: ['Full power striking pad work', 'Combo mitts & thai pads', 'High calorie burn interval'],
    },
    {
      step: '04',
      duration: '10–15 Menit',
      icon: <Dumbbell className="w-6 h-6 text-amber-500" />,
      title: 'Penguatan Otot (Conditioning & Core)',
      subtitle: 'Membentuk Otot Ramping & Perut Kuat',
      desc: 'Latihan beban tubuh (bodyweight circuit) seperti push-up, plank, sit-up, dan squat untuk memperkuat otot inti (core), bahu, dan daya tahan tubuh.',
      points: ['Core & abdominal workout', 'Functional bodyweight', 'Muscular stamina'],
    },
    {
      step: '05',
      duration: '5–10 Menit',
      icon: <HeartPulse className="w-6 h-6 text-emerald-500" />,
      title: 'Pendinginan (Cooling Down)',
      subtitle: 'Pemulihan & Cegah Cedera',
      desc: 'Peregangan statis seluruh tubuh untuk menurunkan detak jantung secara bertahap, melemaskan otot yang tegang, dan mempercepat pemulihan tubuh pasca latihan.',
      points: ['Static deep stretching', 'Heart rate recovery', 'Relaksasi & no soreness'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Timer className="w-3.5 h-3.5" />
            <span>Alur Latihan Terstruktur</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Struktur Sesi Latihan Harian Standar{' '}
            <span className="text-red-500">Coach Usep</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Dirancang sistematis 60–75 menit untuk membangun stamina, teknik striking presisi, dan kekuatan otot secara bertahap dan aman.
          </p>
        </div>

        {/* 5-Step Process Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-neutral-900/60 border border-neutral-800/80 p-5 flex flex-col justify-between hover:border-red-600/50 hover:bg-neutral-900 transition-all duration-300 group hover:-translate-y-1 shadow-xl relative"
            >
              {/* Step indicator tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:scale-105 group-hover:border-red-600/40 transition-all">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bebas text-2xl text-neutral-400 group-hover:text-red-400 transition-colors">
                    {item.step}
                  </span>
                </div>
              </div>

              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800 text-[10px] uppercase font-bold text-red-400 mb-2">
                  ⏱️ {item.duration}
                </span>
                
                <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wide mb-1 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                
                <div className="text-[11px] font-semibold text-neutral-300 mb-2.5">
                  {item.subtitle}
                </div>
                
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Bullet points */}
              <div className="pt-3 border-t border-neutral-800/80 space-y-1.5">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 sm:mt-12 text-center p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400 max-w-2xl mx-auto">
          💡 <strong className="text-white">Catatan:</strong> Porsi dan intensitas tiap ronde selalu disesuaikan secara personal dengan tingkat kebugaran dan tujuan Anda.
        </div>

      </div>
    </section>
  );
}
