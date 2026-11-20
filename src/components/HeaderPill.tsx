import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { GraduationCap, Phone, MessageSquare, Menu, X, Sparkles, ChevronDown } from 'lucide-react';

interface HeaderPillProps {
  onOpenEnrolment: () => void;
}

export const HeaderPill: React.FC<HeaderPillProps> = ({ onOpenEnrolment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Streamlined primary items (clean, uncluttered pill design)
  const primaryNavItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Timetable', path: '/timetable' },
    { label: 'Fees', path: '/fees' },
    { label: 'Contact', path: '/contact' },
  ];

  const secondaryNavItems = [
    { label: 'Examiner Faculty', path: '/faculty' },
    { label: 'Easter & Oral Prep', path: '/specialized' },
    { label: 'Location & Buses', path: '/location' },
  ];

  return (
    <>
      {/* Floating Pill Container (Fixed at top) */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto max-w-5xl w-full rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2.5 ${
            isScrolled
              ? 'glass-pill shadow-pill-hover border border-stone-300 bg-white/95'
              : 'glass-pill shadow-pill border border-stone-200/90 bg-white/95'
          }`}
        >
          {/* Logo Pill */}
          <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-night-900 border border-peach-400/40 flex items-center justify-center text-peach-400 shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 text-peach-400" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-extrabold text-base tracking-tight text-night-950">SOLOMON</span>
                <span className="font-bold text-base tracking-tight text-peach-600">GRINDS</span>
              </div>
              <span className="text-[9px] font-semibold tracking-wider text-stone-500 uppercase leading-none mt-0.5 hidden sm:block">
                Scoil Áine Naofa • Lucan
              </span>
            </div>
          </Link>

          {/* Streamlined Center Navigation Links (Only 5 primary pills + More dropdown) */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100/90 p-1 rounded-full border border-stone-200/70">
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-night-900 text-peach-300 shadow-sm font-bold'
                      : 'text-stone-700 hover:text-night-950 hover:bg-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* More dropdown pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                  ['/faculty', '/specialized', '/location'].includes(location.pathname)
                    ? 'bg-night-900 text-peach-300 font-bold'
                    : 'text-stone-700 hover:text-night-950 hover:bg-white'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {secondaryNavItems.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-xs font-semibold transition-colors ${
                          isActive
                            ? 'bg-peach-50 text-night-900 font-bold border-l-2 border-peach-500'
                            : 'text-stone-700 hover:bg-stone-50 hover:text-night-900'
                        }`
                      }
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Call Pill */}
            <a
              href="tel:016284171"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-all"
              title="Call Centre Office"
            >
              <Phone className="w-3.5 h-3.5 text-stone-600" />
              <span>01 6284171</span>
            </a>

            {/* Primary Action Button (Enrol Pill in Dusty Peach with high-contrast text) */}
            <button
              onClick={onOpenEnrolment}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold text-night-950 bg-peach-400 hover:bg-peach-500 shadow-md hover:shadow-lg transition-all active:scale-95 flex-shrink-0 border border-peach-500/50"
            >
              <Sparkles className="w-3.5 h-3.5 text-night-950" />
              <span>Enrol Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-stone-200 space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-night-900">
                Solomon Grinds Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {[...primaryNavItems, ...secondaryNavItems].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-peach-50 text-night-950 font-bold border-l-4 border-peach-500'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrolment();
                }}
                className="w-full py-3 text-center text-sm font-extrabold text-night-950 bg-peach-400 hover:bg-peach-500 rounded-xl shadow-md"
              >
                Enrol / Reserve Seat
              </button>

              <a
                href="https://wa.me/353872745234?text=Hi%20Caitriona,%20I'm%20interested%20in%20grinds%20at%20Solomon%20Grinds%20Lucan."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-night-900 bg-olive-100 rounded-xl flex items-center justify-center gap-2 border border-olive-300"
              >
                <MessageSquare className="w-4 h-4 text-olive-700" />
                <span>Message Caitriona on WhatsApp</span>
              </a>

              <a
                href="tel:016284171"
                className="w-full py-2.5 text-center text-xs font-semibold text-stone-700 bg-stone-100 rounded-xl flex items-center justify-center gap-2"
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
