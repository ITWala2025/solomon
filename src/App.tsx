import React, { useState } from 'react';
import { TimetableSlot } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DifferenceSection } from './components/DifferenceSection';
import { TimetableExplorer } from './components/TimetableExplorer';
import { PricingCalculator } from './components/PricingCalculator';
import { SpecializedHubs } from './components/SpecializedHubs';
import { FacultyShowcase } from './components/FacultyShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { SolomonGuideChat } from './components/SolomonGuideChat';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimetableSlot | null>(null);
  const [bundleCount, setBundleCount] = useState<number | undefined>(undefined);

  const handleOpenEnrolment = () => {
    setSelectedSlot(null);
    setBundleCount(undefined);
    setIsModalOpen(true);
  };

  const handleSelectSlot = (slot: TimetableSlot) => {
    setSelectedSlot(slot);
    setBundleCount(undefined);
    setIsModalOpen(true);
  };

  const handleBundleEnrolment = (count: number) => {
    setSelectedSlot(null);
    setBundleCount(count);
    setIsModalOpen(true);
  };

  const handleExploreTimetable = () => {
    const el = document.getElementById('timetable');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navigation */}
      <Navbar onOpenEnrolment={handleOpenEnrolment} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenEnrolment={handleOpenEnrolment}
          onExploreTimetable={handleExploreTimetable}
        />

        {/* The Solomon Grinds Difference Head-to-Head */}
        <DifferenceSection />

        {/* Interactive Timetable & Course Explorer */}
        <TimetableExplorer onSelectSlot={handleSelectSlot} />

        {/* Dynamic Pricing & Multi-Subject Savings Calculator */}
        <PricingCalculator onOpenEnrolmentWithBundle={handleBundleEnrolment} />

        {/* Easter Intensive & Language Oral Preparation Hubs */}
        <SpecializedHubs onOpenEnrolment={handleOpenEnrolment} />

        {/* Faculty & Examiner Credentials */}
        <FacultyShowcase />

        {/* Results & Student/Parent Testimonials */}
        <TestimonialsSection />

        {/* Safe Suburban Location & Commute Avoidance */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 3-Step Interactive Booking & Enrolment Wizard */}
      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedSlot={selectedSlot}
        initialBundleCount={bundleCount}
      />

      {/* AI Assistant Chat Widget (Solomon Guide) */}
      <SolomonGuideChat />
    </div>
  );
}

export default App;
