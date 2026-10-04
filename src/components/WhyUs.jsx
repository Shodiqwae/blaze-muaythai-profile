import React from 'react';
import { Home, Dumbbell, ShieldCheck, Clock, HeartHandshake, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: <Home className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: 'Door-to-Door & Hemat Waktu',
      description:
        'Lupakan macet di jalan menuju gym. Coach langsung datang ke rumah, apartemen, taman kompleks, atau private space Anda.',
    },
    {
      icon: <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: 'Peralatan Pro Lengkap Disediakan',
      description:
        'Coach membawa Thai pads premium, focus mitts, belly pad, skipping rope, hingga resistance band. Anda cukup siapkan baju olahraga.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: '100% Zero-Experience Friendly',
      description:
        'Belum pernah olahraga bela diri? Tenang, 80% klien Blaze mulai dari nol tanpa dasar bela diri sama sekali. Pendekatan sabar & aman.',
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: 'Jadwal Fleksibel Menyesuaikan Anda',
      description:
        'Bisa sesi pagi sebelum aktivitas kantor, sesi sore, atau malam. Atur jadwal latihan mingguan dengan mudah dan fleksibel.',
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: 'Pad Work Intensif & Bikin Nagih',
      description:
        'Kombinasi pad work dinamis yang tidak membosankan seperti treadmill biasa. Membakar lemak dengan cepat sekaligus melampiaskan stres harian.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: 'Koreksi Teknik Presisi 1-on-1',
      description:
        'Setiap pukulan, tendangan, dan kuda-kuda diawasi langsung sehingga terhindar dari salah gerak atau cedera sendi.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <span>Kenapa Pilih Private Coach?</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Pengalaman Latihan Eksklusif Bersama{' '}
            <span className="text-red-500">Blaze Muaythai</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Dapatkan efektivitas latihan 3x lebih cepat dibanding kelas gym massal dengan bimbingan personal yang 100% fokus pada Anda.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-red-600/50 hover:bg-neutral-900/90 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 group-hover:bg-red-600/20 transition-all">
                {item.icon}
              </div>
              <h3 className="font-bebas text-xl sm:text-2xl tracking-wide text-white mb-1.5 sm:mb-2 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
