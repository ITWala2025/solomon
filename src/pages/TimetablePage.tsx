import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { TimetableExplorer } from '../components/TimetableExplorer';
import { TimetableSlot } from '../types';
import { Clock, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TimetablePageProps {
  onSelectSlot: (slot: TimetableSlot) => void;
  onOpenEnrolment: () => void;
}

export const TimetablePage: React.FC<TimetablePageProps> = ({ onSelectSlot, onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Academic Year 2026/2027"
        title="Class Timetable & Subjects"
        subtitle="Explore our weekly Wednesday evening and Saturday daytime grinds for Leaving Certificate and Junior Cycle students at Scoil Áine Naofa, Lucan."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Timetable & Subjects' },
        ]}
      />

      {/* Main Timetable Component */}
      <TimetableExplorer onSelectSlot={onSelectSlot} />

      {/* Timetable Notes & Hybrid Policy */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                <Clock className="w-5 h-5 text-peach-600" />
                <span>Class Timings</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wednesday evening classes run in three 1-hour slots: 5:30 PM, 6:45 PM, and 8:00 PM. Saturday classes run from 9:30 AM to 2:15 PM.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Hybrid & Online Access</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every classroom session is equipped for high-definition live streaming for students who are unwell or unable to travel to Lucan on a given week.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                <ShieldCheck className="w-5 h-5 text-amber-600" />
                <span>Small Group Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cohorts are capped strictly at 6–10 students. When a class reaches capacity, a waitlist is activated to open an overflow section.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
