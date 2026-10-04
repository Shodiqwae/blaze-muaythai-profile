import React from 'react';
import { Home, Trees, Building2, Users2, MapPin, Check } from 'lucide-react';

export default function HowItWorks() {
  const locations = [
    {
      icon: <Home className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />,
      title: 'Home & Apartment Visit',
      subtitle: 'Door-to-Door Private',
      desc: 'Coach datang ke ruang tamu, garasi, rooftop, atau area gym apartemen Anda. Cukup sediakan area 2x2 meter.',
      features: ['100% Privat & Nyaman', 'Hemat waktu tanpa macet', 'Jadwal fleksibel pagi/malam'],
    },
    {
      icon: <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />,
      title: 'Outdoor & Park Session',
      subtitle: 'Fresh Air & Dynamic Cardio',
      desc: 'Latihan di taman kompleks perumahan, ruang terbuka hijau, atau jogging track favorit untuk suasana yang menyegarkan.',
      features: ['Kardio lebih plong & berenergi', 'Cocok untuk pagi hari', 'Sirkulasi udara terbuka'],
    },
    {
      icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />,
      title: 'Partner Studio / Gym Rental',
      subtitle: 'Full Boxing Facilities',
      desc: 'Ingin latihan dengan ring tinju dan sandsack gantung? Coach bisa memandu Anda di studio/gym mitra pilihan.',
      features: ['Sensasi latihan fighter sejati', 'Akses fasilitas studio', 'Bisa atur sesi akhir pekan'],
    },
    {
      icon: <Users2 className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />,
      title: 'Duo & Small Group (2-4 Orang)',
      subtitle: 'Latihan Bareng Teman / Pasangan',
      desc: 'Ajak pasangan, keluarga, atau sahabat kantor berlatih bersama. Suasana lebih kompetitif, fun, dan biaya lebih hemat!',
      features: ['Biaya patungan lebih murah', 'Motivasi bareng partner', 'Sesi seru & interaktif'],
    },
  ];

  return (
    <section id="locations" className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fleksibilitas Lokasi Latihan</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Di Mana Saja Anda Bisa Berlatih Bersama{' '}
            <span className="text-red-500">Blaze Muaythai?</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Tidak terikat pada satu tempat camp. Anda yang menentukan lokasi paling nyaman dan efisien untuk rutinitas Anda.
          </p>
        </div>

        {/* 4 Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-neutral-900/60 border border-neutral-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-red-600/50 hover:bg-neutral-900 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 group-hover:border-red-600/40 transition-all">
                  {loc.icon}
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-red-400 font-bold mb-1">
                  {loc.subtitle}
                </div>
                <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wide mb-2 sm:mb-3 group-hover:text-red-400 transition-colors">
                  {loc.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {loc.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-neutral-800/80 space-y-2">
                {loc.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Operational Area Callout */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-red-950/40 via-neutral-900/60 to-neutral-950 border border-red-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide">Wilayah Jangkauan Layanan Door-to-Door</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Khusus wilayah <strong className="text-white">Jakarta Selatan</strong> (Tebet, Cilandak, Kebayoran, Kemang, Jagakarsa, dll) dan <strong className="text-white">Kota Depok</strong> (Margonda, Cinere, Sawangan, Beji, Cimanggis, dll).
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-200 shrink-0 w-full sm:w-auto text-center">
            📍 Eksklusif Jaksel & Depok
          </span>
        </div>

      </div>
    </section>
  );
}
