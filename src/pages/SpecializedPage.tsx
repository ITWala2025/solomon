import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SpecializedHubs } from '../components/SpecializedHubs';
import { Calendar, BookOpen, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

interface SpecializedPageProps {
  onOpenEnrolment: () => void;
}

export const SpecializedPage: React.FC<SpecializedPageProps> = ({ onOpenEnrolment }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageBanner
        badge="Intensive Revision & Bootcamps"
        title="Easter Revision & Oral Preparation"
        subtitle="Specialized intensive courses designed for peak exam performance, past paper mastery, and 40% oral examination confidence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Easter Revision & Oral Immersion' },
        ]}
      />

      {/* Flagship Hubs */}
      <SpecializedHubs onOpenEnrolment={onOpenEnrolment} />

      {/* Intensive Details Breakdown */}
      <section className="py-9 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Easter Revision Details */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                Easter 2027 Schedule & Syllabus
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Easter Intensive Course Features</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our 4-day intensive Easter courses run during the school Easter break. Each subject is delivered in focused daily blocks providing complete syllabus consolidation.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Bound, concise revision booklets with predicted question trends</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>In-depth review of past 10 years of SEC exam papers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Package deals: 1 subject €140; Book 3 subjects, Get 4th Free!</span>
                </div>
              </div>
            </div>

            {/* Oral Language Prep Details */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-olive-700 block mb-1">
                40% Oral Examination Intensive
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Oral Language Fluency Coaching</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Directed by Caitriona Hayes and experienced state oral examiners. We focus on natural speech rhythms, spontaneous answering, and eliminating grammatical hesitations.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Irish (Gaeilge): 240 marks (40%) • Sraithpictiúir master guides</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>French & Spanish: Role plays, picture sequences, document presentations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Individual mock interview with personalized examiner report card</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
