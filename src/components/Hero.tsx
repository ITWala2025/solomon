import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Clock, Users, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenEnrolment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrolment }) => {
  return (
    <section className="relative overflow-hidden bg-[#AAA77B] text-night-950 pt-20 pb-11 lg:pt-24 lg:pb-14 border-b border-olive-600/30">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Copy & CTAs, Right Stunning Hero Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 text-left">
            {/* Trust badge pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-night-950 text-stone-100 text-xs sm:text-sm font-bold mb-4 shadow-md border border-night-900">
              <Sparkles className="w-4 h-4 text-peach-400 flex-shrink-0" />
              <span>25 Years of Proven Exam Excellence in Lucan & West Dublin</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-night-950 leading-[1.12] mb-4">
              The Solomon Grinds Difference.
              <span className="block mt-1.5 text-white font-extrabold drop-shadow-[0_2px_4px_rgba(20,14,16,0.3)]">
                Small Groups. Individual Attention.
              </span>
            </h1>

            {/* Supporting Pitch */}
            <p className="text-sm sm:text-base lg:text-lg text-night-950/90 leading-relaxed mb-6 max-w-xl font-medium">
              Leaving Certificate & Junior Cycle grinds at <strong className="text-night-950 font-extrabold underline decoration-night-950/40 underline-offset-4">Scoil Áine Naofa, Lucan</strong>. 
              All our dedicated teaching staff are <span className="font-bold text-night-950 bg-white/40 px-2 py-0.5 rounded-md">hand-picked, experienced, and past or present State Examiners</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <button
                onClick={onOpenEnrolment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-extrabold text-night-950 bg-peach-400 hover:bg-peach-300 rounded-full shadow-lg shadow-night-950/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-peach-500/50"
              >
                <span>Enrol / Reserve a Class</span>
                <ArrowRight className="w-4 h-4 text-night-950" />
              </button>

              <Link
                to="/timetable"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-night-950 hover:bg-night-900 rounded-full shadow-md transition-all"
              >
                <Clock className="w-4 h-4 text-peach-300" />
                <span>Explore Timetable & Subjects</span>
              </Link>
            </div>

            {/* Commute Callout Banner */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-night-950 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-olive-600/30 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-night-950 flex-shrink-0" />
              <span className="font-semibold">Avoid 2+ hours in city centre traffic. Safe suburban location with free on-site parking.</span>
            </div>
          </div>

          {/* Right Column: Stunning Educational Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-peach-400/40 via-white/30 to-night-950/20 blur-md" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-night-950 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/4]">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                  alt="Solomon Grinds small group teaching session at Scoil Áine Naofa"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge Top-Left: Small Group Size Guarantee */}
              <div className="absolute -top-3 -left-2 sm:-left-4 bg-night-950/95 backdrop-blur-md text-white border border-peach-400/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-in fade-in slide-in-from-left duration-300">
                <div className="w-8 h-8 rounded-xl bg-peach-400/20 text-peach-300 flex items-center justify-center flex-shrink-0 border border-peach-400/30">
                  <Users className="w-4 h-4 text-peach-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-peach-300 font-extrabold leading-tight">Class Cap</div>
                  <div className="text-xs font-bold text-white leading-tight">Max 6–10 Students</div>
                </div>
              </div>

              {/* Floating Badge Bottom-Right: 100% SEC Examiners */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md text-night-950 border border-olive-600/30 p-3 rounded-2xl shadow-xl max-w-[210px] animate-in fade-in slide-in-from-right duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-7 h-7 rounded-lg bg-olive-100 text-olive-800 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-olive-700" />
                  </div>
                  <div className="text-xs font-extrabold text-night-950 leading-tight">100% SEC Examiners</div>
                </div>
                <p className="text-[10px] text-slate-600 font-medium leading-snug">
                  Marking scheme formulas & timing strategies for H1 / H2 success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Stats Row */}
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-night-950/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 text-center">
            {[
              { value: '25+', label: 'Years Serving Lucan & West Dublin' },
              { value: '100%', label: 'SEC Examiner Teaching Panel' },
              { value: '€20', label: 'Per Class • Pay-As-You-Go' },
              { value: '6–10', label: 'Strict Class Size Cap' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 border border-olive-600/30 shadow-sm hover:bg-white transition-colors"
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
