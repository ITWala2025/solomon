import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, MapPin, Wallet, ArrowRight, CheckCircle2, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-crimson-950 via-crimson-900 to-crimson-850 text-white pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            The Solomon Grinds Difference.
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-rose-200 to-white bg-clip-text text-transparent">
              Small Groups. Individual Attention.
            </span>
          </h1>

          {/* Supporting Pitch */}
          <p className="text-lg sm:text-xl text-crimson-100 leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Leaving Certificate & Junior Cycle grinds at <strong className="text-white font-semibold">Scoil Áine Naofa, Lucan</strong>. 
            All our dedicated teaching staff are <span className="text-amber-300 font-semibold underline decoration-amber-400/50 underline-offset-4">hand-picked, experienced, and past or present State Examiners</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onOpenEnrolment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-crimson-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enrol / Reserve a Class</span>
              <ArrowRight className="w-4 h-4 text-crimson-950" />
            </button>

            <Link
              to="/timetable"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-full backdrop-blur-sm transition-all"
            >
              <Clock className="w-4 h-4 text-amber-300" />
              <span>Explore Timetable & Subjects</span>
            </Link>
          </div>

          {/* Commute Callout Banner */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-crimson-200 bg-crimson-950/60 px-4 py-2 rounded-full border border-crimson-800/80 mb-12">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Avoid 2+ hours in Dublin city centre traffic. Safe suburban location with free on-site parking.</span>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Small Interactive Groups</h3>
            <p className="text-sm text-crimson-100 leading-relaxed">
              Strictly capped class sizes (6–10 students) ensure every student receives personal attention and answers to their questions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% SEC Examiners</h3>
            <p className="text-sm text-crimson-100 leading-relaxed">
              All teachers are past or present State Examinations Commission examiners who teach marking scheme secrets and timing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scoil Áine Naofa, Lucan</h3>
            <p className="text-sm text-crimson-100 leading-relaxed">
              Conveniently located on Newcastle Road (opposite SuperValu), just off the N4. Minutes from Celbridge, Leixlip, and Palmerstown.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/5 border border-white/10 hover:border-amber-400/40 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-white/10 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">€20 Pay-As-You-Go</h3>
            <p className="text-sm text-crimson-100 leading-relaxed">
              Pay weekly with zero rigid term lock-ins. Multi-subject bundle offers (e.g. 3 subjects for €55/wk) save €150+ per year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
