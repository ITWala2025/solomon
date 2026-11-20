import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FacultyShowcase } from '../components/FacultyShowcase';
import { Award, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FacultyPageProps {
  onOpenEnrolment: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="SEC Examiners on Staff"
        title="Our Examiner Faculty"
        subtitle="Every teacher on our panel is hand-picked, highly experienced, and an active or past State Examinations Commission examiner."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Teaching Staff' },
        ]}
      />

      {/* Main Faculty Showcase */}
      <FacultyShowcase />

      {/* Why Learning From State Examiners Matters */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              The Examiner Advantage: What It Means For Your Results
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              Knowing the curriculum is only half the battle. In the Leaving Certificate and Junior Cycle, grades are determined by strict State Examinations Commission marking schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Marking Scheme Fluency</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Examiners know the exact keywords, formulas, and definitions that correctors look for. They teach students how to harvest every single available mark without wasting time on superfluous prose.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <BookOpen className="w-8 h-8 text-crimson-700 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Partial Credit Mastery</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In subjects like Higher Maths, Physics, and Accounting, partial credit schemes reward correct methodology even if final arithmetic errs. We teach students how to lay out steps clearly to guarantee maximum points.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Exam Timing & Stress Relief</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Running out of time on Paper 1 or 2 is the most common reason capable students drop grades. Our examiners drill precise per-question timing schedules so students finish with time to spare.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenEnrolment}
              className="px-8 py-3.5 text-sm font-bold text-white bg-crimson-800 hover:bg-crimson-900 rounded-full shadow-md transition"
            >
              Learn with Our Examiners
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
