import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Saya belum pernah olahraga bela diri sama sekali, apakah aman untuk pemula?',
      a: 'Sangat aman! Lebih dari 80% klien Blaze Muaythai memulai dari nol tanpa pengalaman bela diri atau bahkan jarang berolahraga. Coach Usep akan memandu langkah demi langkah secara sabar mulai dari pernapasan, postur, hingga teknik dasar tanpa risiko cedera.',
    },
    {
      q: 'Peralatan apa saja yang harus saya siapkan sebelum sesi pertama?',
      a: 'Anda cukup menyiapkan pakaian olahraga yang nyaman, handuk kecil, dan air minum. Semua perlengkapan teknis seperti Thai pads, focus mitts, belly pad, skipping rope, hingga sarung tinju (gloves) cadangan sudah disiapkan dan dibawa langsung oleh Coach.',
    },
    {
      q: 'Berapa luas ruangan yang dibutuhkan untuk latihan door-to-door di rumah / apartemen?',
      a: 'Ruang kosong berukuran sekitar 2 x 2 meter atau 2 x 3 meter sudah sangat cukup untuk melakukan gerakan striking, footwork, dan pad work secara leluasa.',
    },
    {
      q: 'Bagaimana jika saya ada kendala mendadak dan ingin reschedule jadwal?',
      a: 'Reschedule sangat fleksibel dan tidak hangus, asalkan Anda menginformasikan kepada Coach minimal H-1 atau maksimal 6 jam sebelum jam sesi yang disepakati.',
    },
    {
      q: 'Wilayah mana saja yang bisa dijangkau untuk latihan door-to-door?',
      a: 'Layanan privat door-to-door Coach Usep berfokus khusus di wilayah Jakarta Selatan (Tebet, Cilandak, Kebayoran, Kemang, Jagakarsa, Pasar Minggu, Mampang, dll) dan Kota Depok (Margonda, Cinere, Sawangan, Beji, Cimanggis, Sukmajaya, dll) serta area sekitarnya. Coach siap datang langsung membawa peralatan ke rumah atau apartemen Anda.',
    },
    {
      q: 'Bagaimana cara mendaftar dan memulai sesi pertama?',
      a: 'Cukup klik tombol "Book Sesi Trial" atau chat WhatsApp kami. Anda bisa berdiskusi tentang goal latihan, menentukan waktu luang Anda, dan Coach akan mengatur kedatangan ke lokasi Anda.',
    },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Pertanyaan yang Sering{' '}
            <span className="text-red-500">Diajukan (FAQ)</span>
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            Semua hal yang perlu Anda ketahui sebelum memulai sesi latihan bersama Blaze Muaythai.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-900/90 border-red-800/60 shadow-lg'
                    : 'bg-neutral-950 border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-xs sm:text-sm md:text-base text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/60 pt-3.5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
