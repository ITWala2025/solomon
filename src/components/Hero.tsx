import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Clock } from 'lucide-react';

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
            The Solomon Grinds Difference.
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
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
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-night-950 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-olive-600/30 shadow-sm mb-7">
            <CheckCircle2 className="w-4 h-4 text-night-950 flex-shrink-0" />
            <span className="font-semibold">Avoid 2+ hours in Dublin city centre traffic. Safe suburban location with free on-site parking.</span>
          </div>
        </div>

        {/* Integrated Stats Row (Moved into Hero, cards removed) */}
        <div className="max-w-4xl mx-auto pt-5 border-t border-night-950/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 text-center">
            {[
              { value: '25+', label: 'Years Serving Lucan & West Dublin' },
              { value: '100%', label: 'SEC Examiner Teaching Panel' },
              { value: '€20', label: 'Per Class • Pay-As-You-Go' },
              { value: '6–10', label: 'Strict Class Size Cap' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-olive-600/30 shadow-sm hover:bg-white transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-night-950 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-night-950/80 font-bold leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
