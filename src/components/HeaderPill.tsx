import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GraduationCap, Phone, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

interface HeaderPillProps {
  onOpenEnrolment: () => void;
}

export const HeaderPill: React.FC<HeaderPillProps> = ({ onOpenEnrolment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Difference', path: '/our-difference' },
    { label: 'Timetable', path: '/timetable' },
    { label: 'Fees & Bundles', path: '/fees' },
    { label: 'Examiners', path: '/faculty' },
    { label: 'Easter & Orals', path: '/specialized' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Pill Container (Fixed at top) */}
      <header className="fixed top-3 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-6xl w-full rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2 ${
            isScrolled
              ? 'glass-pill shadow-pill-hover border border-crimson-900/10 bg-white/95'
              : 'glass-pill shadow-pill border border-slate-200/90 bg-white/90'
          }`}
        >
          {/* Logo Pill */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-crimson-800 to-crimson-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-extrabold text-base tracking-tight text-crimson-950">SOLOMON</span>
                <span className="font-bold text-base tracking-tight text-crimson-700">GRINDS</span>
              </div>
              <span className="text-[9px] font-semibold tracking-wider text-slate-500 uppercase leading-none mt-0.5 hidden sm:block">
                Scoil Áine Naofa • Lucan
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Pill Items) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-crimson-800 text-white shadow-sm font-bold'
                      : 'text-slate-700 hover:text-crimson-800 hover:bg-white/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick WhatsApp Pill */}
            <a
              href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-all"
              title="Message Caitriona on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Quick Call Pill */}
            <a
              href="tel:016284171"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
              title="Call Centre Office"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>01 6284171</span>
            </a>

            {/* Primary Action Button (Enrol Pill) */}
            <button
              onClick={onOpenEnrolment}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-crimson-700 via-crimson-800 to-crimson-900 hover:from-crimson-800 hover:to-crimson-950 shadow-md hover:shadow-glow-crimson transition-all active:scale-95 flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Enrol Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-crimson-800">
                Solomon Grinds Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-crimson-50 text-crimson-800 font-bold border-l-4 border-crimson-800'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrolment();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-crimson-700 to-crimson-900 rounded-xl shadow-md"
              >
                Enrol / Reserve Seat
              </button>

              <a
                href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl flex items-center justify-center gap-2 border border-emerald-200"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Message Caitriona on WhatsApp</span>
              </a>

              <a
                href="tel:016284171"
                className="w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Centre: 01 6284171</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
