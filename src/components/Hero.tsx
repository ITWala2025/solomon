import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, MapPin, Wallet, ArrowRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment }) => {
  return (
    <section className="relative overflow-hidden bg-night-950 text-white pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DFA68F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-peach-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-olive-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust badge pill in Dusty Peach & Sage Olive */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-night-900/90 border border-peach-400/40 text-peach-300 text-xs sm:text-sm font-bold mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-olive-400 flex-shrink-0" />
            <span className="text-stone-100">25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
          </div>

          {/* Main Headline - Ultra High Contrast */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            The Solomon Grinds Difference.
            <span className="block mt-2 text-peach-400 font-extrabold drop-shadow-sm">
              Small Groups. Individual Attention.
            </span>
          </h1>

          {/* Supporting Pitch - High Contrast Crisp White/Stone */}
          <p className="text-lg sm:text-xl text-stone-100 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            Leaving Certificate & Junior Cycle grinds at <strong className="text-white font-bold underline decoration-peach-400/60 underline-offset-4">Scoil Áine Naofa, Lucan</strong>. 
            All our dedicated teaching staff are <span className="text-peach-300 font-bold">hand-picked, experienced, and past or present State Examiners</span>.
          </p>

          {/* CTA Buttons in Dusty Peach & Sage Olive */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenEnrolment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-xl shadow-peach-400/20 hover:shadow-peach-400/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-peach-300"
            >
              <span>Enrol / Reserve a Class</span>
              <ArrowRight className="w-5 h-5 text-night-950" />
            </button>

            <Link
              to="/timetable"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-night-900/80 hover:bg-night-850 border-2 border-olive-400 rounded-full backdrop-blur-sm transition-all hover:border-olive-300"
            >
              <Clock className="w-4 h-4 text-olive-400" />
              <span>Explore Timetable & Subjects</span>
            </Link>
          </div>

          {/* Commute Callout Banner */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-stone-200 bg-night-900 px-5 py-2.5 rounded-full border border-stone-800 shadow-md mb-12">
            <CheckCircle2 className="w-4 h-4 text-olive-400 flex-shrink-0" />
            <span>Avoid 2+ hours in Dublin city centre traffic. Safe suburban location with free on-site parking.</span>
          </div>
        </div>

        {/* 4 Core Value Pillars Grid with High Contrast Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-night-900/90 border border-stone-800 hover:border-peach-400/60 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-night-850 group shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-peach-400/15 text-peach-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-peach-400/30">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Small Interactive Groups</h3>
            <p className="text-sm text-stone-200 leading-relaxed font-normal">
              Strictly capped class sizes (6–10 students) ensure every student receives personal attention and answers to their questions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-night-900/90 border border-stone-800 hover:border-olive-400/60 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-night-850 group shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-olive-500/20 text-olive-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-olive-400/30">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% SEC Examiners</h3>
            <p className="text-sm text-stone-200 leading-relaxed font-normal">
              All teachers are past or present State Examinations Commission examiners who teach marking scheme secrets and timing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-night-900/90 border border-stone-800 hover:border-peach-400/60 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-night-850 group shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-peach-400/15 text-peach-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-peach-400/30">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Scoil Áine Naofa, Lucan</h3>
            <p className="text-sm text-stone-200 leading-relaxed font-normal">
              Conveniently located on Newcastle Road (opposite SuperValu), just off the N4. Minutes from Celbridge, Leixlip, and Palmerstown.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-night-900/90 border border-stone-800 hover:border-olive-400/60 rounded-3xl p-6 backdrop-blur-md transition-all hover:bg-night-850 group shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-olive-500/20 text-olive-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-olive-400/30">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">€20 Pay-As-You-Go</h3>
            <p className="text-sm text-stone-200 leading-relaxed font-normal">
              Pay weekly with zero rigid term lock-ins. Multi-subject bundle offers (e.g. 3 subjects for €55/wk) save €150+ per year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
