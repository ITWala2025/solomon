import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, MessageSquare, Clock, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                SOLOMON <span className="text-emerald-400">GRINDS</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Solomon Grinds Difference: Strictly capped small groups, individual attention, and hand-picked teachers who are all past or present State Examiners.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Serving Lucan, Celbridge, Leixlip, Maynooth, Palmerstown, and Clondalkin for over 25 years.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Academic Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#timetable" className="hover:text-emerald-400 transition">Leaving Certificate (6th Year)</a></li>
              <li><a href="#timetable" className="hover:text-emerald-400 transition">5th Year Foundational Grinds</a></li>
              <li><a href="#timetable" className="hover:text-emerald-400 transition">Junior Cycle (1st to 3rd Year)</a></li>
              <li><a href="#specialized" className="hover:text-emerald-400 transition">Easter Intensive Revision Courses</a></li>
              <li><a href="#specialized" className="hover:text-emerald-400 transition">Language Oral Exam Immersion (Irish, French, Spanish)</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition">Multi-Subject Bundle Discounts</a></li>
            </ul>
          </div>

          {/* Col 3: Location & Operating Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Location & Schedule
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Scoil Áine Naofa, Newcastle Road, Lucan, Co. Dublin, K78 PF65 (Opposite SuperValu)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p><strong>Wednesdays:</strong> 5:30 PM – 9:00 PM</p>
                  <p><strong>Saturdays:</strong> 9:30 AM – 2:15 PM</p>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-slate-400">
                Ample free drop-off parking available inside school gates.
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Director */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Contact & Enrolment
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="text-slate-200">
                <strong>Administrator & Director:</strong><br />
                Caitriona Hayes
              </p>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:016284171" className="hover:text-white transition">01 6284171</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <a href="https://wa.me/353872745234" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">087 2745234 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:caitrionahayes@yahoo.ie" className="hover:text-white transition">caitrionahayes@yahoo.ie</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and SEC disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Solomon Grinds. All rights reserved. Operating in Lucan, Co. Dublin.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>State Examinations Commission (SEC) syllabus-aligned curriculum.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
