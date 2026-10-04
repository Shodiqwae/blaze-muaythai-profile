import React from 'react';
import { Flame, ShieldCheck, Zap, Award, ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import blazeLogo from '../assets/blaze-logo.png';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-hero">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] bg-red-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 -left-20 sm:-left-32 w-60 sm:w-80 h-60 sm:h-80 bg-red-700/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/70 border border-red-800/40 text-red-400 text-[11px] sm:text-xs font-semibold tracking-wide shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>PRIVATE COACHING • DOOR-TO-DOOR</span>
            </div>

            {/* Main Headline with responsive font scaling */}
            <h1 className="font-bebas text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[0.95] max-w-2xl mx-auto lg:mx-0">
              Bakar Lemak, Bangun Mental & Kuasai Seni{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-orange-400">
                8 Anggota Tubuh
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Pelatihan privat Muay Thai 1-on-1 eksklusif langsung di rumah, apartemen, atau ruang terbuka pilihan Anda. 
              Dipandu intensif dari nol oleh Coach bersertifikat dengan jadwal yang fleksibel.
            </p>

            {/* Quick Benefits Badge Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 pt-1 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm bg-neutral-900/70 border border-neutral-800/80 rounded-xl px-3 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Coach datang ke lokasi Anda</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm bg-neutral-900/70 border border-neutral-800/80 rounded-xl px-3 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Peralatan lengkap disediakan</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm bg-neutral-900/70 border border-neutral-800/80 rounded-xl px-3 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>100% Ramah pemula (Zero exp)</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300 text-xs sm:text-sm bg-neutral-900/70 border border-neutral-800/80 rounded-xl px-3 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Waktu fleksibel pagi / malam</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => onOpenBooking('Sesi Trial')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Flame className="w-5 h-5 group-hover:rotate-12 transition-transform text-amber-200" />
                <span>Book Sesi Trial Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-red-600/60 active:scale-95 text-neutral-200 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Lihat Paket & Harga</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garansi bimbingan teknik presisi & aman bebas cedera</span>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Visual Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Showcase Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900/95 via-neutral-950 to-neutral-950 border border-red-900/40 p-5 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden group">
                
                {/* Ambient glow in card */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Header of the visual card with Official Logo */}
                <div className="flex items-center justify-between pb-5 border-b border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-950 border border-red-900/60 p-1 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <img
                        src={blazeLogo}
                        alt="Blaze Muaythai Logo"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                      />
                    </div>
                    <div>
                      <h3 className="font-bebas text-lg sm:text-xl tracking-wide text-white">BLAZE COACHING SYSTEM</h3>
                      <p className="text-[11px] sm:text-xs text-neutral-400">Personalized Striking & Conditioning</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-[11px] font-bold">
                    ONLINE
                  </span>
                </div>

                {/* Workout Highlights Grid */}
                <div className="py-5 space-y-3">
                  <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800/70 hover:border-red-900/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-red-600/10 text-red-500 shrink-0">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-400">Target Kalori Terbakar</div>
                        <div className="text-xs sm:text-sm font-bold text-white">600 - 900 Kkal / Sesi</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-red-400 font-bebas text-base sm:text-lg tracking-wider">INTENSE</span>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800/70 hover:border-red-900/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-red-600/10 text-red-500 shrink-0">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-400">Fokus Latihan</div>
                        <div className="text-xs sm:text-sm font-bold text-white">Pad Work + Core + Striking</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-300 font-bebas text-base sm:text-lg tracking-wider">100% 1-ON-1</span>
                  </div>

                  <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-950/80 border border-neutral-800/70 hover:border-red-900/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-red-600/10 text-red-500 shrink-0">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-neutral-400">Lokasi Fleksibel</div>
                        <div className="text-xs sm:text-sm font-bold text-white">Rumah / Apartemen / Park</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-400 font-bebas text-base sm:text-lg tracking-wider">ON DEMAND</span>
                  </div>
                </div>

                {/* Mini Testimonial Quote Banner */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-red-950/40 to-neutral-950 border border-red-900/30 text-xs text-neutral-300 space-y-1">
                  <p className="italic font-light leading-relaxed">
                    "Latihan pad work bareng Coach Usep bener-bener bakar kalori dan tekniknya detail banget!"
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-semibold text-white text-[11px]">— Rian K., Member 6 Bulan</span>
                    <span className="text-amber-400 text-xs">★★★★★</span>
                  </div>
                </div>

              </div>

              {/* Decorative floating badge */}
              <div className="hidden xs:flex absolute -bottom-3 -right-2 sm:-right-4 bg-red-600 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bebas text-sm sm:text-base shadow-xl shadow-red-600/40 items-center gap-1.5 rotate-2">
                <Flame className="w-4 h-4 text-amber-200" />
                <span>100+ TRANSFORMATION SESSIONS</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
