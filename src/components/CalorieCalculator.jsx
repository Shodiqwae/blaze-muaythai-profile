import React, { useState } from 'react';
import { Calculator, Flame, TrendingDown, Target, Zap, ArrowRight, Scale, Clock, Activity, Info, CheckCircle2 } from 'lucide-react';

export default function CalorieCalculator({ onOpenBooking }) {
  const [goal, setGoal] = useState('fatloss'); // 'fatloss', 'technique', 'conditioning', 'women'
  const [frequency, setFrequency] = useState(2); // 1x, 2x, 3x per week
  const [weight, setWeight] = useState(70); // in kg

  // Scientific Muay Thai MET (Metabolic Equivalent of Task):
  // - Technique/Beginner: ~8.0 MET
  // - Fat Loss Pad Work: ~9.5 MET
  // - Fighter Conditioning: ~11.0 MET
  // Formula: Cal/hour = MET * Weight(kg) * 1.05 approx
  const getMET = () => {
    switch (goal) {
      case 'fatloss':
        return 9.5;
      case 'conditioning':
        return 11.0;
      case 'women':
        return 8.5;
      case 'technique':
      default:
        return 8.0;
    }
  };

  const caloriesPerHour = Math.round(getMET() * weight * 1.05);
  const caloriesPer30Min = Math.round(caloriesPerHour * 0.5);
  const monthlySessions = frequency * 4;
  const totalMonthlyCalories = caloriesPerHour * monthlySessions;
  // 1 kg fat deficit ~ 7,700 kcal
  const estimatedFatLossKg = (totalMonthlyCalories / 7700).toFixed(1);

  const getProgramInfo = () => {
    switch (goal) {
      case 'fatloss':
        return {
          name: 'Blaze Fat Loss & Shred',
          badge: 'Fokus Pembakaran Maksimal',
          desc: 'High-tempo pad work intervals yang memicu Afterburn Effect hingga 24 jam pasca latihan.',
          packRec: frequency >= 2 ? 'Paket 10 Sesi (1 Orang: Rp 3jt / 2 Orang: Rp 4.5jt)' : 'Single Drop-in (Rp 350k)',
        };
      case 'conditioning':
        return {
          name: 'Strength & Fighter Conditioning',
          badge: 'Stamina & Ledakan Tenaga',
          desc: 'Latihan intensitas tinggi dengan kombinasi power striking dan circuit core petarung.',
          packRec: 'Paket 10 Sesi Komitmen (2x/Minggu)',
        };
      case 'women':
        return {
          name: 'Women’s Fitness & Toning',
          badge: 'Ramah Pemula & Ramping',
          desc: 'Latihan privat nyaman yang membentuk tubuh lean & kencang tanpa rasa terintimidasi.',
          packRec: 'Paket 10 Sesi (Bisa Sendiri / Bareng Partner Duo)',
        };
      case 'technique':
      default:
        return {
          name: 'Striking & Self-Defense Mastery',
          badge: 'Teknik 8 Anggota Tubuh',
          desc: 'Penguasaan biomekanika pukulan, tendangan, siku, lutut, dan pertahanan diri dari nol.',
          packRec: 'Single Trial Session (Rp 350k) atau Paket 10 Sesi',
        };
    }
  };

  const program = getProgramInfo();

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator & Fakta Pembakaran Kalori</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Berapa Kalori yang Anda Bakar Saat{' '}
            <span className="text-red-500">Latihan Muay Thai?</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Muay Thai membakar <strong className="text-white">500 hingga 1.000+ kalori per jam</strong>. Hitung potensi pembakaran kalori Anda berdasarkan berat badan & tujuan program!
          </p>
        </div>

        {/* Fact Sheet Cards (30 Menit vs 60 Menit & Faktor Penentu) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-5xl mx-auto">
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-600/10 text-red-500 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-red-400">Rincian Durasi</div>
              <div className="text-white font-bold text-sm sm:text-base mt-0.5">300 – 420 Kkal / 30 Menit</div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Cocok untuk pemanasan & conditioning awal.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-red-900/40 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-600/20 text-red-500 shrink-0 mt-0.5">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-red-400">1 Sesi Penuh (60 Menit)</div>
              <div className="text-white font-bold text-sm sm:text-base mt-0.5">500 – 800+ Kkal / Sesi</div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Bisa tembus 1.000+ Kkal pada sesi pad work intensif.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-red-600/10 text-red-500 shrink-0 mt-0.5">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs uppercase font-bold text-red-400">Faktor Penentu</div>
              <div className="text-white font-bold text-sm sm:text-base mt-0.5">Berat Badan & Intensitas</div>
              <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                Semakin dinamis gerak pad work, kalori terbakar makin tinggi.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Widget */}
        <div className="max-w-5xl mx-auto bg-neutral-900/80 border border-red-900/40 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              
              {/* Goal / Program Selection */}
              <div>
                <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2">
                  1. Pilih Target Program Latihan:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('fatloss')}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer active:scale-95 ${
                      goal === 'fatloss'
                        ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white font-bold shadow-lg shadow-red-600/30'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Flame className="w-4 h-4 mx-auto mb-1 text-amber-300" />
                    <span className="text-[10px] sm:text-[11px] block leading-tight font-medium">Fat Loss & Shred</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('technique')}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer active:scale-95 ${
                      goal === 'technique'
                        ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white font-bold shadow-lg shadow-red-600/30'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Target className="w-4 h-4 mx-auto mb-1 text-rose-300" />
                    <span className="text-[10px] sm:text-[11px] block leading-tight font-medium">Bela Diri / Teknik</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('women')}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer active:scale-95 ${
                      goal === 'women'
                        ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white font-bold shadow-lg shadow-red-600/30'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Activity className="w-4 h-4 mx-auto mb-1 text-pink-300" />
                    <span className="text-[10px] sm:text-[11px] block leading-tight font-medium">Women Toning</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('conditioning')}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all cursor-pointer active:scale-95 ${
                      goal === 'conditioning'
                        ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white font-bold shadow-lg shadow-red-600/30'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <Zap className="w-4 h-4 mx-auto mb-1 text-amber-300" />
                    <span className="text-[10px] sm:text-[11px] block leading-tight font-medium">Fighter Power</span>
                  </button>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-neutral-300">
                    2. Berat Badan Anda:
                  </label>
                  <span className="text-xs sm:text-sm font-bold text-white bg-neutral-950 border border-neutral-800 px-3 py-1 rounded-lg">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="120"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2.5 bg-neutral-950 rounded-lg appearance-none cursor-pointer accent-red-600 touch-pan-x"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                  <span>45 kg</span>
                  <span>70 kg (Standar)</span>
                  <span>120 kg</span>
                </div>
              </div>

              {/* Frequency Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] sm:text-xs uppercase tracking-wider font-bold text-neutral-300">
                    3. Rencana Latihan per Minggu:
                  </label>
                  <span className="text-sm font-bold text-red-400 font-bebas text-lg">
                    {frequency}x Seminggu ({monthlySessions} Sesi/Bulan)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`py-2.5 sm:py-3 rounded-xl border font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95 ${
                        frequency === f
                          ? 'bg-neutral-800 border-red-500 text-red-400'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {f}x Seminggu
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Output Calculation Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-neutral-950 to-neutral-900 border border-red-900/60 p-5 sm:p-6 space-y-4 shadow-inner">
                
                <div className="text-center pb-3 border-b border-neutral-800">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                    Estimasi Pembakaran per Sesi (60 Menit)
                  </div>
                  <div className="font-bebas text-3xl sm:text-5xl text-red-500 font-bold tracking-wide mt-1">
                    ~{caloriesPerHour.toLocaleString()} <span className="text-lg sm:text-xl text-neutral-300">Kkal</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    (atau ~{caloriesPer30Min} Kkal per 30 menit)
                  </div>
                </div>

                {/* Monthly Total & Fat Deficit */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                    <span className="text-neutral-400">Total Kalori / Bulan ({monthlySessions} Sesi):</span>
                    <span className="font-bold text-white font-bebas text-lg">~{totalMonthlyCalories.toLocaleString()} Kkal</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                    <span className="text-emerald-300 flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                      Potensi Defisit Lemak:
                    </span>
                    <span className="font-bold text-emerald-400">-{estimatedFatLossKg} kg / bulan*</span>
                  </div>
                </div>

                {/* Target Program & Recommended Package */}
                <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider">
                      Target Program:
                    </span>
                    <span className="text-[10px] font-semibold text-neutral-400 px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                      {program.badge}
                    </span>
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    {program.name}
                  </div>
                  <div className="text-[11px] text-neutral-300 leading-tight">
                    {program.desc}
                  </div>
                  <div className="text-[10px] text-neutral-400 pt-1 border-t border-neutral-800">
                    💡 <strong className="text-neutral-200">Rekomendasi Paket:</strong> {program.packRec}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() =>
                    onOpenBooking(
                      `Target: ${program.name}, BB ${weight}kg, ${frequency}x/minggu (~${caloriesPerHour} Kkal/sesi)`
                    )
                  }
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
                >
                  <span>Konsultasi Target Ini via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
