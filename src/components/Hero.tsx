import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, MapPin, Wallet, ArrowRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment }) => {
  return (
    <section className="relative overflow-hidden bg-[#AAA77B] text-night-950 pt-20 pb-11 lg:pt-24 lg:pb-14 border-b border-olive-600/30">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-night-950 text-stone-100 text-xs sm:text-sm font-bold mb-5 shadow-md border border-night-900">
            <Sparkles className="w-4 h-4 text-peach-400 flex-shrink-0" />
            <span>25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-night-950 leading-[1.12] mb-5">
            The Solomon Grinds
            <span className="block mt-2 text-white font-extrabold drop-shadow-[0_2px_4px_rgba(20,14,16,0.3)]">
              Small Groups. Individual Attention.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-base sm:text-lg text-night-950/90 leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Leaving Certificate & Junior Cycle grinds at <strong className="text-night-950 font-extrabold underline decoration-night-950/40 underline-offset-4">Scoil Áine Naofa, Lucan</strong>.
            All our dedicated teaching staff are <span className="font-bold text-night-950 bg-white/40 px-2 py-0.5 rounded-md">hand-picked, experienced, and past or present State Examiners</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button
              onClick={onOpenEnrolment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-lg shadow-night-950/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-peach-500/50"
            >
              <span>Enrol / Reserve a Class</span>
              <ArrowRight className="w-5 h-5 text-night-950" />
            </button>

            <Link
              to="/timetable"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-night-950 hover:bg-night-900 rounded-full shadow-md transition-all"
            >
              <Clock className="w-4 h-4 text-peach-300" />
              <span>Explore Timetable & Subjects</span>
            </Link>
          </div>

          {/* Commute Callout Banner */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-night-950 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-olive-600/30 shadow-sm mb-9">
            <CheckCircle2 className="w-4 h-4 text-night-950 flex-shrink-0" />
            <span className="font-semibold">Avoid 2+ hours in Dublin city centre traffic. Safe suburban location with free on-site parking.</span>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white/95 border border-olive-600/20 hover:border-peach-500/60 rounded-2xl p-5 backdrop-blur-sm transition-all hover:bg-white group shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-peach-100 text-peach-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-peach-200">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-night-950 mb-1.5">Small Interactive Groups</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Strictly capped class sizes (6–10 students) ensure every student receives personal attention and answers to their questions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/95 border border-olive-600/20 hover:border-peach-500/60 rounded-2xl p-5 backdrop-blur-sm transition-all hover:bg-white group shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-olive-100 text-olive-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-olive-200">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-night-950 mb-1.5">100% SEC Examiners</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              All teachers are past or present State Examinations Commission examiners who teach marking scheme secrets and timing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/95 border border-olive-600/20 hover:border-peach-500/60 rounded-2xl p-5 backdrop-blur-sm transition-all hover:bg-white group shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-peach-100 text-peach-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-peach-200">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-night-950 mb-1.5">Scoil Áine Naofa, Lucan</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Conveniently located on Newcastle Road (opposite SuperValu), just off the N4. Minutes from Celbridge, Leixlip, and Palmerstown.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/95 border border-olive-600/20 hover:border-peach-500/60 rounded-2xl p-5 backdrop-blur-sm transition-all hover:bg-white group shadow-sm">
            <div className="w-11 h-11 rounded-xl bg-olive-100 text-olive-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform border border-olive-200">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-night-950 mb-1.5">€20 Pay-As-You-Go</h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              Pay weekly with zero rigid term lock-ins. Multi-subject bundle offers (e.g. 3 subjects for €55/wk) save €150+ per year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
