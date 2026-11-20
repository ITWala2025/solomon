import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#AAA77B] text-night-950 border-t border-olive-600/30 pt-9 pb-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-7 border-b border-night-950/15">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3.5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-red-700 border border-red-800 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-red-800">
                SOLOMON <span className="text-red-700 font-bold">GRINDS</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-night-950/85 leading-relaxed font-medium">
              The Solomon Grinds Difference: Strictly capped small groups, individual attention, and hand-picked teachers who are all past or present State Examiners.
            </p>
            <div className="pt-1 text-xs text-night-950 font-bold">
              Serving Lucan, Celbridge, Leixlip, Maynooth, Palmerstown, and Clondalkin for over 25 years.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-night-950 mb-3.5">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-xs text-night-950/85 font-semibold">
              <li><Link to="/about" className="hover:text-white transition">About Solomon Grinds</Link></li>
              <li><Link to="/timetable" className="hover:text-white transition">Timetable & Subjects</Link></li>
              <li><Link to="/fees" className="hover:text-white transition">Fees & Bundle Calculator</Link></li>
              <li><Link to="/faculty" className="hover:text-white transition">Examiner Teaching Staff</Link></li>
              <li><Link to="/specialized" className="hover:text-white transition">Easter Revision & Oral Immersion</Link></li>
              <li><Link to="/location" className="hover:text-white transition">Location & Bus Routes</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact & Enrolment</Link></li>
            </ul>
          </div>

          {/* Col 3: Location & Operating Hours */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-night-950 mb-3.5">
              Location & Schedule
            </h4>
            <div className="space-y-2.5 text-xs text-night-950/85 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-night-950 flex-shrink-0 mt-0.5" />
                <span>Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin, K78 PF65 (Opposite SuperValu)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-night-950 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Wednesdays:</strong> 5:30 PM – 9:00 PM</p>
                  <p><strong>Saturdays:</strong> 9:30 AM – 2:15 PM</p>
                </div>
              </div>
              <div className="pt-0.5 text-[11px] text-night-950/70 font-semibold">
                Ample free drop-off parking available inside school gates.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Director */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-night-950 mb-3.5">
              Contact & Enrolment
            </h4>
            <div className="space-y-2.5 text-xs text-night-950/85 font-medium">
              <p className="text-night-950">
                <strong className="font-bold">Centre Director:</strong><br />
                Caitriona Hayes
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-night-950" />
                <a href="tel:016284171" className="hover:text-white transition font-bold font-mono">01 6284171</a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 fill-current text-[#25D366] flex-shrink-0 bg-night-950 rounded-full p-0.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/353872745234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-bold font-mono">087 2745234 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-night-950" />
                <a href="mailto:caitrionahayes@yahoo.ie" className="hover:text-white transition">caitrionahayes@yahoo.ie</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and SEC disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-night-950/80 font-medium">
          <p>© {new Date().getFullYear()} Solomon Grinds. All rights reserved. Operating in Lucan, Co. Dublin.</p>
          <div className="flex items-center gap-2 text-night-950 font-semibold">
            <ShieldCheck className="w-4 h-4 text-night-950" />
            <span>State Examinations Commission (SEC) syllabus-aligned curriculum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
