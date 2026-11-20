import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TimetableSlot } from './types';
import { HeaderPill } from './components/HeaderPill';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { SolomonGuideChat } from './components/SolomonGuideChat';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { DifferencePage } from './pages/DifferencePage';
import { TimetablePage } from './pages/TimetablePage';
import { FeesPage } from './pages/FeesPage';
import { FacultyPage } from './pages/FacultyPage';
import { SpecializedPage } from './pages/SpecializedPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';

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

  const handleSelectBundle = (count: number) => {
    setSelectedSlot(null);
    setBundleCount(count);
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-crimson-800 selection:text-white">
        {/* Enterprise Floating Pill Header */}
        <HeaderPill onOpenEnrolment={handleOpenEnrolment} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenEnrolment={handleOpenEnrolment}
                  onSelectSlot={handleSelectSlot}
                  onSelectBundle={handleSelectBundle}
                />
              }
            />
            <Route
              path="/our-difference"
              element={<DifferencePage onOpenEnrolment={handleOpenEnrolment} />}
            />
            <Route
              path="/timetable"
              element={
                <TimetablePage
                  onSelectSlot={handleSelectSlot}
                  onOpenEnrolment={handleOpenEnrolment}
                />
              }
            />
            <Route
              path="/fees"
              element={
                <FeesPage
                  onSelectBundle={handleSelectBundle}
                  onOpenEnrolment={handleOpenEnrolment}
                />
              }
            />
            <Route
              path="/faculty"
              element={<FacultyPage onOpenEnrolment={handleOpenEnrolment} />}
            />
            <Route
              path="/specialized"
              element={<SpecializedPage onOpenEnrolment={handleOpenEnrolment} />}
            />
            <Route
              path="/location"
              element={<LocationPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenEnrolment={handleOpenEnrolment} />}
            />
            {/* Catch-all fallback */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenEnrolment={handleOpenEnrolment}
                  onSelectSlot={handleSelectSlot}
                  onSelectBundle={handleSelectBundle}
                />
              }
            />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* 3-Step Interactive Booking & Enrolment Modal Wizard */}
        <EnrollmentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          preselectedSlot={selectedSlot}
          initialBundleCount={bundleCount}
        />

        {/* 24/7 AI Admissions Assistant Widget (Solomon Guide) */}
        <SolomonGuideChat />
      </div>
    </BrowserRouter>
  );
}

export default App;
