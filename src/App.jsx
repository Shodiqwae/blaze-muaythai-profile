import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import CoachProfile from './components/CoachProfile';
import HowItWorks from './components/HowItWorks';
import Programs from './components/Programs';
import DailySessionStructure from './components/DailySessionStructure';
import CalorieCalculator from './components/CalorieCalculator';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState('1 Orang - Single Session (Rp 350.000)');

  const handleOpenBooking = (packName) => {
    if (packName) {
      setSelectedPackageForBooking(packName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <WhyUs />
        <CoachProfile onOpenBooking={handleOpenBooking} />
        <HowItWorks />
        <Programs onOpenBooking={handleOpenBooking} />
        <DailySessionStructure />
        <CalorieCalculator onOpenBooking={handleOpenBooking} />
        <Pricing onOpenBooking={handleOpenBooking} />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & WhatsApp Link Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialPackage={selectedPackageForBooking}
      />
    </div>
  );
}
