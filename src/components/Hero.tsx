import React from 'react';
import { Users, Award, MapPin, Wallet, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
  onExploreTimetable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment, onExploreTimetable }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-850 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            The Solomon Grinds Difference.
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 bg-clip-text text-transparent">
              Small Groups. Individual Attention.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Leaving Certificate & Junior Cycle grinds at <strong className="text-white font-semibold">Scoil Áine Naofa, Lucan</strong>. 
            All our dedicated teaching staff are <span className="text-emerald-300 font-semibold underline decoration-emerald-500/60 underline-offset-4">hand-picked, experienced, and past or present State Examiners</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12">
            <button
              onClick={onOpenEnrolment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-brand-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enrol / Reserve a Class</span>
              <ArrowRight className="w-4 h-4 text-brand-950" />
            </button>

            <button
              onClick={onExploreTimetable}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-sm transition-all"
            >
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Explore Timetable & Subjects</span>
            </button>
          </div>

          {/* Commute Callout Banner */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 px-4 py-2 rounded-full border border-slate-700/60 mb-14">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Avoid 2+ hours in Dublin city centre traffic. Safe suburban location with free on-site parking.</span>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Small Interactive Groups</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Strictly capped class sizes (6–10 students) ensure every student receives individual attention and answers to their questions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 hover:border-amber-500/40 rounded-2xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% SEC Examiners</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              All teachers are past or present State Examinations Commission examiners who teach marking scheme secrets and timing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 hover:border-sky-500/40 rounded-2xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scoil Áine Naofa, Lucan</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Conveniently located on Newcastle Road (opposite SuperValu), just off the N4. Minutes from Celbridge, Leixlip, and Palmerstown.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 hover:border-teal-500/40 rounded-2xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">€20 Pay-As-You-Go</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Pay weekly with zero rigid term lock-ins. Multi-subject bundle offers (e.g. 3 subjects for €55/wk) save €150+ per year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
