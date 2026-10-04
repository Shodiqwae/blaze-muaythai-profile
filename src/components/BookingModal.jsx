import React, { useState, useEffect } from 'react';
import { X, Flame, Send, CheckCircle2, Phone, MapPin, User, Target, Users, FileText, Clock } from 'lucide-react';
import blazeLogo from '../assets/blaze-logo.png';

export default function BookingModal({ isOpen, onClose, initialPackage = '1 Orang - Single Session (Rp 350.000)' }) {
  // Official WhatsApp Number for Coach Usep
  const COACH_PHONE_NUMBER = '6289680544568';

  // Form States
  const [participantCount, setParticipantCount] = useState('1 Orang (Private 1-on-1)');
  const [selectedPack, setSelectedPack] = useState('Paket Komitmen 10 Sesi');
  const [sessionDuration, setSessionDuration] = useState('1 Jam (60 Menit)');
  const [cityArea, setCityArea] = useState('Jakarta Selatan');
  const [addressDetail, setAddressDetail] = useState('');
  const [locationType, setLocationType] = useState('Rumah / Apartemen Pribadi');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Bakar Lemak & Fat Loss (Afterburn)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialPackage) {
      if (initialPackage.includes('2 Orang') || initialPackage.includes('Duo')) {
        setParticipantCount('2 Orang (Duo / Pasangan)');
      } else {
        setParticipantCount('1 Orang (Private 1-on-1)');
      }
      
      if (initialPackage.includes('Single')) {
        setSelectedPack('Single Visit (1 Sesi)');
      } else if (initialPackage.includes('10 Sesi')) {
        setSelectedPack('Paket Komitmen 10 Sesi ⭐');
      } else {
        setSelectedPack(initialPackage);
      }
    }
  }, [initialPackage]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    let priceEstimate = '';
    if (participantCount.includes('1 Orang')) {
      priceEstimate = selectedPack.includes('10 Sesi') ? 'Rp 3.000.000 (10 Sesi - Hemat 500k)' : 'Rp 350.000 / sesi';
    } else {
      priceEstimate = selectedPack.includes('10 Sesi') ? 'Rp 4.500.000 (10 Sesi Duo - Hemat 500k)' : 'Rp 500.000 / sesi (Rp 250k/org)';
    }

    const message = `🔥 *BOOKING KONSULTASI / SESI - BLAZE MUAYTHAI* 🔥
----------------------------------------
👤 *Nama Lengkap:* ${name || '-'}
📱 *No. WhatsApp:* ${phone || '-'}
👥 *Jumlah Peserta:* ${participantCount}
🥊 *Paket Dipilih:* ${selectedPack} (${priceEstimate})
⏱️ *Durasi Latihan:* ${sessionDuration}
🗺️ *Domisili Layanan:* ${cityArea} ${addressDetail ? `(${addressDetail})` : ''}
📍 *Tipe Lokasi:* ${locationType}
🎯 *Target Latihan:* ${goal}
📝 *Catatan / Kondisi Fisik:* ${notes || 'Tidak ada (Pemula)'}
----------------------------------------
Halo Coach Usep, saya ingin konsultasi & booking sesi latihan Muay Thai di area ${cityArea}.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${COACH_PHONE_NUMBER}?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-red-800/60 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[92vh] my-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-red-600 transition-colors cursor-pointer active:scale-90 z-10"
          aria-label="Tutup formulir"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-4 sm:pb-5 border-b border-neutral-800/80">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-neutral-900 border border-red-900/60 p-1.5 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-red-900/40">
            <img
              src={blazeLogo}
              alt="Blaze Muaythai Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"
            />
          </div>
          <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
            FORMULIR BOOKING & KONSULTASI
          </h3>
          <p className="text-neutral-400 text-xs mt-0.5 max-w-xs mx-auto">
            Khusus Layanan Door-to-Door: <strong className="text-red-400">Jakarta Selatan & Depok</strong>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          
          {/* Section 1: Peserta, Paket, & Durasi Waktu */}
          <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
            <div className="text-[10px] uppercase font-bold tracking-wider text-red-400">
              1. Peserta, Paket & Durasi Sesi
            </div>

            {/* Peserta (1 Orang vs 2 Orang) */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setParticipantCount('1 Orang (Private 1-on-1)')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  participantCount.includes('1 Orang')
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>1 Orang (1-on-1)</span>
              </button>

              <button
                type="button"
                onClick={() => setParticipantCount('2 Orang (Duo / Pasangan)')}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  participantCount.includes('2 Orang')
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30'
                    : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>2 Orang (Duo)</span>
              </button>
            </div>

            {/* Paket Selection */}
            <div>
              <label className="block text-[11px] font-semibold text-neutral-300 mb-1">
                Pilihan Paket:
              </label>
              <select
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
              >
                {participantCount.includes('1 Orang') ? (
                  <>
                    <option value="Paket Komitmen 10 Sesi ⭐">⭐ Paket 10 Sesi — Rp 3.000.000 (Hemat 500k / 300k per sesi)</option>
                    <option value="Single Visit (1 Sesi)">Single Visit (1 Sesi) — Rp 350.000 / sesi</option>
                    <option value="Konsultasi Jadwal & Trial Dulu">Konsultasi Jadwal & Trial Dulu</option>
                  </>
                ) : (
                  <>
                    <option value="Paket Komitmen 10 Sesi Duo 🔥">🔥 Paket 10 Sesi Duo — Rp 4.500.000 (Hemat 500k / 225k per orang)</option>
                    <option value="Single Visit Duo (1 Sesi)">Single Visit Duo (1 Sesi) — Rp 500.000 (250k/orang)</option>
                    <option value="Konsultasi Jadwal & Trial Duo Dulu">Konsultasi Jadwal & Trial Duo Dulu</option>
                  </>
                )}
                <option value="Small Group (3+ Orang / Kantor) - Custom">Small Group (3+ Orang / Kantor) - Custom Rate</option>
              </select>
            </div>

            {/* Durasi Sesi: Maksimal 1 Jam atau 1J 30M */}
            <div>
              <label className="block text-[11px] font-semibold text-neutral-300 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                Pilihan Durasi Sesi Latihan:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSessionDuration('1 Jam (60 Menit)')}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    sessionDuration === '1 Jam (60 Menit)'
                      ? 'bg-neutral-800 border-red-500 text-red-400 font-bold shadow-sm'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  ⏱️ 1 Jam (60 Menit)
                </button>

                <button
                  type="button"
                  onClick={() => setSessionDuration('1 Jam 30 Menit (90 Menit / 1J 30M)')}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                    sessionDuration.includes('30 Menit')
                      ? 'bg-neutral-800 border-red-500 text-red-400 font-bold shadow-sm'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  ⚡ 1J 30M (90 Menit)
                </button>
              </div>
            </div>
          </div>

          {/* Section 2: Data Diri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-red-500" />
                Nama Anda:
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                No. WhatsApp Anda:
              </label>
              <input
                type="tel"
                required
                placeholder="Contoh: 08123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Section 3: Domisili Khusus (Depok & Jakarta Selatan) */}
          <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-3">
            <div className="text-[10px] uppercase font-bold tracking-wider text-red-400">
              2. Wilayah Layanan (Khusus Jaksel & Depok)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  Pilih Domisili:
                </label>
                <select
                  value={cityArea}
                  onChange={(e) => setCityArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500 font-semibold"
                >
                  <option value="Jakarta Selatan">📍 Jakarta Selatan (Jaksel)</option>
                  <option value="Depok">📍 Kota Depok</option>
                  <option value="Perbatasan Jaksel - Depok (Cinere/Jagakarsa)">📍 Perbatasan Jaksel - Depok</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1">
                  Kecamatan / Area Spesifik:
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    cityArea === 'Depok'
                      ? 'Contoh: Margonda / Cinere / Sawangan / Beji'
                      : 'Contoh: Tebet / Cilandak / Kemang / Kebayoran'
                  }
                  value={addressDetail}
                  onChange={(e) => setAddressDetail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1">
                Tipe Tempat Latihan:
              </label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
              >
                <option value="Rumah / Apartemen Pribadi">Rumah / Apartemen Pribadi</option>
                <option value="Taman / Ruang Terbuka Hijau Kompleks">Taman / Ruang Terbuka Hijau Kompleks</option>
                <option value="Gym Fasilitas Gedung / Apartemen">Gym Fasilitas Gedung Apartemen</option>
                <option value="Studio Rekanan">Studio Rekanan</option>
              </select>
            </div>
          </div>

          {/* Section 4: Target Latihan */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-red-500" />
              Target Utama:
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs focus:outline-none focus:border-red-500"
            >
              <option value="Bakar Lemak & Fat Loss (Afterburn)">Bakar Lemak & Fat Loss (Afterburn)</option>
              <option value="Belajar Teknik Striking 8 Limbs & Bela Diri">Belajar Teknik 8 Limbs & Bela Diri</option>
              <option value="Women Fitness & Body Toning">Women Fitness & Body Toning</option>
              <option value="Strength & Fighter Conditioning">Strength & Fighter Conditioning</option>
            </select>
          </div>

          {/* Section 5: Catatan Tambahan (Opsional) */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-neutral-300 mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              Catatan Fisik / Riwayat Cedera <span className="text-[10px] text-neutral-400 font-normal lowercase">(opsional)</span>:
            </label>
            <input
              type="text"
              placeholder="Contoh: Pemula total, ada riwayat cedera lutut, dll."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-red-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 active:scale-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim & Hubungi Coach Usep via WhatsApp</span>
            </button>
          </div>

          <p className="text-[10px] text-neutral-400 text-center">
            🔒 WhatsApp Resmi Coach Usep: <strong className="text-neutral-300">+62 896-8054-4568</strong>
          </p>

        </form>

      </div>
    </div>
  );
}
