import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEnrolment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrolment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3 h-3 mr-1" /> Term Enrolment Open
            </span>
            <span>Leaving Cert & Junior Cycle Grinds at Scoil Áine Naofa, Lucan</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Newcastle Rd, Lucan (Opp. SuperValu)
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href="tel:016284171" className="hover:text-emerald-400 transition-colors font-medium">
              Call 01 6284171
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-md py-3' : 'bg-white/95 py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-900 to-brand-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-900">
                  SOLOMON
                </span>
                <span className="font-semibold text-xl sm:text-2xl tracking-tight text-emerald-600">
                  GRINDS
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase -mt-1 hidden sm:block">
                The Solomon Grinds Difference
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#difference" className="hover:text-emerald-600 transition-colors">Our Difference</a>
            <a href="#timetable" className="hover:text-emerald-600 transition-colors">Timetable & Subjects</a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">Fees & Bundles</a>
            <a href="#faculty" className="hover:text-emerald-600 transition-colors">Examiner Faculty</a>
            <a href="#specialized" className="hover:text-emerald-600 transition-colors">Easter & Oral Prep</a>
            <a href="#location" className="hover:text-emerald-600 transition-colors">Location & Buses</a>
            <a href="#faqs" className="hover:text-emerald-600 transition-colors">FAQs</a>
          </nav>

          {/* Quick CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Caitriona</span>
            </a>

            <button
              onClick={onOpenEnrolment}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-sm hover:shadow transition-all transform active:scale-95"
            >
              <span>Enrol / Reserve Seat</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-brand-900 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
              <a 
                href="#difference" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Our Difference
              </a>
              <a 
                href="#timetable" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Timetable & Subjects
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Fees & Bundle Calculator
              </a>
              <a 
                href="#faculty" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Examiner Faculty
              </a>
              <a 
                href="#specialized" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Easter & Oral Immersion
              </a>
              <a 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Location & Bus Routes
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrolment();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
              >
                Enrol / Reserve Seat
              </button>
              <a
                href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-xl flex items-center justify-center gap-2 border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Message Caitriona on WhatsApp</span>
              </a>
              <a
                href="tel:016284171"
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 01 6284171</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
