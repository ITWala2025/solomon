import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-night-950 text-white border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-night-900 border border-peach-400/40 flex items-center justify-center text-peach-400 shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-peach-400" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SOLOMON <span className="text-peach-400">GRINDS</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              The Solomon Grinds Difference: Strictly capped small groups, individual attention, and hand-picked teachers who are all past or present State Examiners.
            </p>
            <div className="pt-2 text-xs text-olive-400 font-medium">
              Serving Lucan, Celbridge, Leixlip, Maynooth, Palmerstown, and Clondalkin for over 25 years.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-peach-400 mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><Link to="/about" className="hover:text-peach-400 transition">About The Solomon Grinds Difference</Link></li>
              <li><Link to="/timetable" className="hover:text-peach-400 transition">Timetable & Subjects</Link></li>
              <li><Link to="/fees" className="hover:text-peach-400 transition">Fees & Bundle Calculator</Link></li>
              <li><Link to="/faculty" className="hover:text-peach-400 transition">Examiner Teaching Staff</Link></li>
              <li><Link to="/specialized" className="hover:text-peach-400 transition">Easter Revision & Oral Immersion</Link></li>
              <li><Link to="/location" className="hover:text-peach-400 transition">Location & Bus Routes</Link></li>
              <li><Link to="/contact" className="hover:text-peach-400 transition">Contact & Enrolment</Link></li>
            </ul>
          </div>

          {/* Col 3: Location & Operating Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-peach-400 mb-4">
              Location & Schedule
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-olive-400 flex-shrink-0 mt-0.5" />
                <span>Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin, K78 PF65 (Opposite SuperValu)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-olive-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Wednesdays:</strong> 5:30 PM – 9:00 PM</p>
                  <p><strong>Saturdays:</strong> 9:30 AM – 2:15 PM</p>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-stone-400">
                Ample free drop-off parking available inside school gates.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Director */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-peach-400 mb-4">
              Contact & Enrolment
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <p className="text-white">
                <strong>Centre Director:</strong><br />
                Caitriona Hayes
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-peach-400" />
                <a href="tel:016284171" className="hover:text-white transition">01 6284171</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-olive-400" />
                <a href="https://wa.me/353872745234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">087 2745234 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-peach-400" />
                <a href="mailto:caitrionahayes@yahoo.ie" className="hover:text-white transition">caitrionahayes@yahoo.ie</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and SEC disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Solomon Grinds. All rights reserved. Operating in Lucan, Co. Dublin.</p>
          <div className="flex items-center gap-2 text-stone-300">
            <ShieldCheck className="w-4 h-4 text-olive-400" />
            <span>State Examinations Commission (SEC) syllabus-aligned curriculum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
