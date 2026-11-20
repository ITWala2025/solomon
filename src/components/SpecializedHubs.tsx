import React from 'react';
import { Calendar, MessageSquare, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SpecializedHubsProps {
  onOpenEnrolment: () => void;
}

export const SpecializedHubs: React.FC<SpecializedHubsProps> = ({ onOpenEnrolment }) => {
  return (
    <section id="specialized" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            High-Impact Intensive Courses
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-900 tracking-tight mb-4">
            Specialized Easter Revision & Language Oral Immersion
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Targeted exam crash courses designed to turn syllabus knowledge into peak State Examination performance.
          </p>
        </div>

        {/* 2 Flagship Intensive Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Easter Intensive Revision */}
          <div className="bg-gradient-to-br from-brand-950 to-brand-900 text-white rounded-3xl p-8 border border-brand-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-amber-500 text-brand-950 font-extrabold text-xs uppercase px-4 py-1.5 rounded-bl-2xl">
              Booking Now Open
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Annual Flagship Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Easter Intensive Revision Course 2027
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Comprehensive 4-day intensive revision masterclasses for Leaving Cert and Junior Cycle students. Focuses strictly on high-probability exam topics, past paper dissection, and SEC marking schemes.
              </p>

              <div className="space-y-3 py-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Bound, concise revision notes prepared specifically for the 2027 exams</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dissection of tricky Paper 1 & 2 exam questions with SEC senior examiners</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Multi-subject Easter bundles: Book 3 Subjects, Get 4th Free!</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Strictly limited class numbers to protect individual attention</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Easter Packages From</span>
                <span className="text-xl font-extrabold text-white font-mono">€140 / subject</span>
              </div>
              <button
                onClick={onOpenEnrolment}
                className="px-5 py-3 text-xs font-bold text-brand-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-sm active:scale-95"
              >
                Reserve Easter Place
              </button>
            </div>
          </div>

          {/* Card 2: Language Oral Immersion (Irish, French, Spanish, German) */}
          <div className="bg-gradient-to-br from-emerald-950 to-brand-900 text-white rounded-3xl p-8 border border-emerald-900/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-emerald-400 text-brand-950 font-extrabold text-xs uppercase px-4 py-1.5 rounded-bl-2xl">
              40% of Final Grade
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                Gaeilge, French, Spanish & German
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Leaving Cert Oral Language Immersion
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Did you know that the Oral Exam accounts for <strong className="text-emerald-400">40% (240 marks)</strong> of your total Leaving Cert Irish grade? Our examiners simulate the exact interview environment to eliminate nerves and build effortless fluency.
              </p>

              <div className="space-y-3 py-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sraithpictiúir master booklets with high-scoring phrases and idioms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>1-on-1 mock oral simulations scored using official SEC mark schemes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Led by Centre Director Caitriona Hayes & senior SEC Oral Examiners</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pronunciation, spontaneous conversation drills, and vocabulary builders</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Standard Class Fee</span>
                <span className="text-xl font-extrabold text-emerald-400 font-mono">€20 / class</span>
              </div>
              <button
                onClick={onOpenEnrolment}
                className="px-5 py-3 text-xs font-bold text-brand-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-sm active:scale-95"
              >
                Join Oral Bootcamp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
