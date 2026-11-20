import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-crimson-950 text-white border-t border-crimson-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-crimson-900/40">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-crimson-800 flex items-center justify-center text-white border border-crimson-700 shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-amber-300" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SOLOMON <span className="text-amber-300">GRINDS</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-crimson-100 leading-relaxed">
              The Solomon Grinds Difference: Strictly capped small groups, individual attention, and hand-picked teachers who are all past or present State Examiners.
            </p>
            <div className="pt-2 text-xs text-crimson-300">
              Serving Lucan, Celbridge, Leixlip, Maynooth, Palmerstown, and Clondalkin for over 25 years.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-crimson-100">
              <li><Link to="/our-difference" className="hover:text-amber-300 transition">Our Difference vs City Centre</Link></li>
              <li><Link to="/timetable" className="hover:text-amber-300 transition">Timetable & Subjects</Link></li>
              <li><Link to="/fees" className="hover:text-amber-300 transition">Fees & Bundle Calculator</Link></li>
              <li><Link to="/faculty" className="hover:text-amber-300 transition">Examiner Teaching Staff</Link></li>
              <li><Link to="/specialized" className="hover:text-amber-300 transition">Easter Revision & Oral Immersion</Link></li>
              <li><Link to="/location" className="hover:text-amber-300 transition">Location & Bus Routes</Link></li>
              <li><Link to="/contact" className="hover:text-amber-300 transition">Contact & Enrolment</Link></li>
            </ul>
          </div>

          {/* Col 3: Location & Operating Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Location & Schedule
            </h4>
            <div className="space-y-3 text-xs text-crimson-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin, K78 PF65 (Opposite SuperValu)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Wednesdays:</strong> 5:30 PM – 9:00 PM</p>
                  <p><strong>Saturdays:</strong> 9:30 AM – 2:15 PM</p>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-crimson-300">
                Ample free drop-off parking available inside school gates.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Director */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              Contact & Enrolment
            </h4>
            <div className="space-y-3 text-xs text-crimson-100">
              <p className="text-white">
                <strong>Centre Director:</strong><br />
                Caitriona Hayes
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300" />
                <a href="tel:016284171" className="hover:text-white transition">01 6284171</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <a href="https://wa.me/353872745234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">087 2745234 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300" />
                <a href="mailto:caitrionahayes@yahoo.ie" className="hover:text-white transition">caitrionahayes@yahoo.ie</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and SEC disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-crimson-300">
          <p>© {new Date().getFullYear()} Solomon Grinds. All rights reserved. Operating in Lucan, Co. Dublin.</p>
          <div className="flex items-center gap-2 text-crimson-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>State Examinations Commission (SEC) syllabus-aligned curriculum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
