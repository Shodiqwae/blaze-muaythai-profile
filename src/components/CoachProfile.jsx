import React from 'react';
import { Award, CheckCircle, Flame, ShieldAlert, Star, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import coachUsepImg from '../assets/coach-usep.jpg';
import blazeLogo from '../assets/blaze-logo.png';

export default function CoachProfile({ onOpenBooking }) {
  const credentials = [
    '7+ Tahun Pengalaman Mengajar Muay Thai & Fitness Striking',
    'Certified Functional Trainer & Conditioning Coach',
    'Berpengalaman melatih 150+ klien privat (Wanita, Pemula, Eksekutif, Remaja)',
    'Spesialis Fat Loss, Posture Alignment & Striking Biomechanics',
    'Tersertifikasi First Aid (Pertolongan Pertama) untuk Keamanan Latihan Maksimal',
  ];

  return (
    <section id="coach" className="py-16 sm:py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Real Coach Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Glowing Red Background Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 via-rose-600 to-amber-600 rounded-3xl blur-2xl opacity-25 transform -rotate-2 animate-pulse-slow"></div>

              {/* Main Photo Card */}
              <div className="relative rounded-3xl bg-neutral-950 border border-red-900/60 overflow-hidden shadow-2xl p-3 sm:p-4">
                
                {/* Photo Frame Container */}
                <div className="w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden relative group border border-neutral-800 bg-neutral-900">
                  
                  {/* Coach Usep Real Photo with Custom Center Alignment */}
                  <img
                    src={coachUsepImg}
                    alt="Coach Usep - Head Coach Blaze Muaythai"
                    className="w-full h-full object-cover object-[50%_10%] sm:object-[50%_12%] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badge: Official Logo */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-red-900/60 flex items-center gap-1.5 shadow-lg">
                    <img
                      src={blazeLogo}
                      alt="Blaze Muaythai"
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-[10px] font-bold text-white pr-1">OFFICIAL COACH</span>
                  </div>

                  {/* Dark Gradient Overlay at Bottom of Photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-95"></div>

                  {/* Overlay Text Details on Photo */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-center">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/90 border border-red-700/60 text-[10px] sm:text-[11px] text-red-400 font-bold uppercase tracking-wider mb-1.5">
                      <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                      <span>Head Coach & Founder</span>
                    </div>

                    <h3 className="font-bebas text-3xl sm:text-4xl font-bold tracking-wider text-white leading-none">
                      COACH USEP
                    </h3>
                    
                    <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[10px] sm:text-[11px] text-neutral-300 backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>4.9/5 Client Satisfaction Rating</span>
                    </div>
                  </div>

                </div>

                {/* Quick Stats Row Under Photo */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-neutral-900 text-center">
                  <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                    <div className="font-bebas text-xl sm:text-2xl text-red-500 font-bold leading-none">7+ THN</div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Pengalaman</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                    <div className="font-bebas text-xl sm:text-2xl text-red-500 font-bold leading-none">150+</div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Member</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80">
                    <div className="font-bebas text-xl sm:text-2xl text-emerald-400 font-bold leading-none">100%</div>
                    <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Dedikasi</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Coach Bio & Credentials */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Meet Your Trainer</span>
            </div>

            <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-none">
              Pelatih Bersertifikat yang Mengutamakan{' '}
              <span className="text-red-500">Hasil Nyata & Keamanan Anda</span>
            </h2>

            {/* Philosophy Quote */}
            <blockquote className="p-4 sm:p-5 rounded-2xl bg-neutral-900/70 border-l-4 border-red-600 text-neutral-300 italic text-xs sm:text-sm md:text-base leading-relaxed text-left">
              "Muay Thai adalah seni tubuh yang indah. Latihan bukan tentang saling menyakiti, melainkan membangun kepercayaan diri, membakar lemak secara intensif, dan mencapai stamina fisik terbaik yang belum pernah Anda rasakan sebelumnya."
            </blockquote>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed text-left">
              Dengan pendekatan kepelatihan yang personal dan sabar, Coach Usep merancang setiap sesi khusus menyesuaikan tujuan tubuh Anda—baik itu ingin mengikis lemak perut, membentuk postur lean, menguasai teknik bela diri dasar, maupun melepas kejenuhan kerja harian.
            </p>

            {/* Credentials List */}
            <div className="space-y-2.5 pt-2 text-left">
              <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-300">
                Kualifikasi & Pengalaman Kepelatihan Coach Usep:
              </h4>
              <div className="space-y-2">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-neutral-300 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() => onOpenBooking('Konsultasi Personal Coach Usep')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-amber-300" />
                <span>Konsultasi Goal & Jadwal dengan Coach Usep</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
