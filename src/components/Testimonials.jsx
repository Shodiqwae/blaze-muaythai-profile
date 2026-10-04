import React from 'react';
import { Star, Quote, CheckCircle, Trophy, Flame } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Amanda',
      role: 'Marketing Manager (Member 4 Bulan)',
      program: 'Blaze Fat Loss & Toning',
      comment:
        'Awalnya ragu karena ga pernah olahraga bela diri sama sekali. Ternyata Coach Usep sabar banget ngajarin dari cara genggam tangan dan kuda-kuda. 4 bulan latihan turun 7 kg dan badan jauh lebih kencang & ga gampang pegal!',
      rating: 5,
    },
    {
      name: 'Dimas Wicaksono',
      role: 'Tech Lead / Startup (Member 8 Bulan)',
      program: 'Private 1-on-1 Striking',
      comment:
        'Super praktis karena Coach datang langsung ke gym apartemen saya jam 7 pagi sebelum ngantor. Pad work-nya intens banget, bikin pikiran fresh dan stres kerjaan langsung rilis. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Jessica & Kevin',
      role: 'Couple Member (Paket Duo)',
      program: 'Duo Muay Thai Cardio',
      comment:
        'Ambil paket Duo buat olahraga bareng pacar di hari Sabtu pagi. Seru banget bisa latihan bareng dan biayanya jadi lebih hemat per orang. Coach Usep enerjik dan bikin suasana latihan ga ngebosenin.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Kisah Klien Kami</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Apa Kata Mereka Tentang{' '}
            <span className="text-red-500">Blaze Muaythai?</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Dengar langsung cerita transformasi dan pengalaman latihan dari para klien privat kami.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-neutral-900/60 border border-neutral-800/80 p-5 sm:p-7 flex flex-col justify-between hover:border-red-600/40 hover:bg-neutral-900 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 group-hover:text-red-500/50 transition-colors" />
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-red-950/50 border border-red-900/40 text-[10px] uppercase font-bold text-red-400 mb-3">
                  {rev.program}
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed italic mb-5 sm:mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3.5 border-t border-neutral-800/80 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-red-600 to-neutral-800 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-400">{rev.role}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
            <div className="font-bebas text-2xl sm:text-4xl text-red-500 font-bold">150+</div>
            <div className="text-[10px] sm:text-xs text-neutral-400">Klien Terbimbing</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
            <div className="font-bebas text-2xl sm:text-4xl text-red-500 font-bold">98%</div>
            <div className="text-[10px] sm:text-xs text-neutral-400">Tingkat Kepuasan</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
            <div className="font-bebas text-2xl sm:text-4xl text-red-500 font-bold">600-900</div>
            <div className="text-[10px] sm:text-xs text-neutral-400">Kkal / Sesi</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
            <div className="font-bebas text-2xl sm:text-4xl text-red-500 font-bold">5.0 ★</div>
            <div className="text-[10px] sm:text-xs text-neutral-400">Rating Klien</div>
          </div>
        </div>

      </div>
    </section>
  );
}
